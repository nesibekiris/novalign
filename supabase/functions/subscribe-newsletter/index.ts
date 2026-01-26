import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SubscribeRequest {
  email: string;
  source?: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { email, source = "website" }: SubscribeRequest = await req.json();

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email address is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { data: existing } = await supabase
      .from("newsletter_subscriptions")
      .select("id, status")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      if (existing.status === "active") {
        return new Response(
          JSON.stringify({
            success: true,
            message: "You're already subscribed to our newsletter!"
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (existing.status === "unsubscribed") {
        const { error: updateError } = await supabase
          .from("newsletter_subscriptions")
          .update({
            status: "active",
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null,
          })
          .eq("id", existing.id);

        if (updateError) {
          throw updateError;
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: "Welcome back! You've been resubscribed."
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    const { error: insertError } = await supabase
      .from("newsletter_subscriptions")
      .insert({
        email,
        source,
        status: "active",
      });

    if (insertError) {
      console.error("Error inserting subscription:", insertError);
      throw new Error("Failed to subscribe. Please try again.");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for subscribing to Techletter!"
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in subscribe-newsletter:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "An unexpected error occurred",
        details: "Failed to process newsletter subscription",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
