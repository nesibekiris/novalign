import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RSSItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
}

function parseRSSFeed(xmlText: string): RSSItem[] {
  const items: RSSItem[] = [];

  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const itemXml = match[1];

    const titleMatch = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
                       itemXml.match(/<title>(.*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
    const guidMatch = itemXml.match(/<guid.*?>(.*?)<\/guid>/);
    const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
    const descriptionMatch = itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
                            itemXml.match(/<description>(.*?)<\/description>/);

    if (titleMatch && linkMatch && pubDateMatch) {
      items.push({
        title: titleMatch[1].trim(),
        link: linkMatch[1].trim(),
        guid: guidMatch ? guidMatch[1].trim() : linkMatch[1].trim(),
        pubDate: pubDateMatch[1].trim(),
        description: descriptionMatch ? descriptionMatch[1].trim().replace(/<[^>]*>/g, '').substring(0, 300) : '',
      });
    }
  }

  return items;
}

function createSlug(title: string, guid: string): string {
  let slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (slug.length > 60) {
    slug = slug.substring(0, 60).replace(/-[^-]*$/, '');
  }

  const guidHash = guid.split('/').pop()?.substring(0, 8) || Math.random().toString(36).substring(7);
  return `${slug}-${guidHash}`;
}

function estimateReadingTime(description: string): string {
  const words = description.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing authorization header" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Fetching RSS feed from techletter.co...");
    const rssResponse = await fetch("https://www.techletter.co/feed");

    if (!rssResponse.ok) {
      throw new Error(`Failed to fetch RSS feed: ${rssResponse.statusText}`);
    }

    const rssText = await rssResponse.text();
    const items = parseRSSFeed(rssText);

    console.log(`Parsed ${items.length} items from RSS feed`);

    const results = {
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [] as string[],
    };

    for (const item of items) {
      try {
        const { data: existing } = await supabase
          .from("techletter_issues")
          .select("id, slug")
          .eq("rss_guid", item.guid)
          .maybeSingle();

        const publishedDate = new Date(item.pubDate).toISOString().split('T')[0];
        const slug = existing?.slug || createSlug(item.title, item.guid);

        const issueData = {
          title: item.title,
          slug,
          external_url: item.link,
          excerpt: item.description,
          published_date: publishedDate,
          reading_time: estimateReadingTime(item.description),
          rss_guid: item.guid,
          status: 'draft',
        };

        if (existing) {
          const { error: updateError } = await supabase
            .from("techletter_issues")
            .update({
              title: issueData.title,
              external_url: issueData.external_url,
              excerpt: issueData.excerpt,
              published_date: issueData.published_date,
              reading_time: issueData.reading_time,
            })
            .eq("id", existing.id);

          if (updateError) {
            results.errors.push(`Failed to update ${item.title}: ${updateError.message}`);
          } else {
            results.updated++;
          }
        } else {
          const { error: insertError } = await supabase
            .from("techletter_issues")
            .insert(issueData);

          if (insertError) {
            if (insertError.code === '23505') {
              results.skipped++;
            } else {
              results.errors.push(`Failed to insert ${item.title}: ${insertError.message}`);
            }
          } else {
            results.created++;
          }
        }
      } catch (itemError) {
        results.errors.push(`Error processing ${item.title}: ${itemError.message}`);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Imported ${items.length} items from RSS feed`,
        results,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in import-techletter-rss:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        details: "Failed to import Techletter RSS feed",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
