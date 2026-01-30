import { supabase } from '../lib/supabase';

export interface WordPressPost {
  title: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  categories: string[];
  tags: string[];
  post_type: string;
  slug: string;
  meta: Record<string, any>;
}

export interface WordPressExport {
  version: string;
  generator: string;
  exported_at: string;
  posts: WordPressPost[];
  pages: WordPressPost[];
  services: WordPressPost[];
  insights: WordPressPost[];
  railway_questions: WordPressPost[];
  techletter_issues: WordPressPost[];
  principles: WordPressPost[];
  team_members: WordPressPost[];
  settings: Record<string, any>;
}

export async function exportToWordPressFormat(): Promise<WordPressExport> {
  // Fetch all content from Supabase
  const [
    pagesResult,
    postsResult,
    servicesResult,
    insightsResult,
    railwayQuestionsResult,
    techletterIssuesResult,
    principlesResult,
    teamMembersResult,
    settingsResult,
  ] = await Promise.all([
    supabase.from('pages').select('*').order('created_at'),
    supabase.from('posts').select('*').order('published_at', { ascending: false }),
    supabase.from('services').select('*').order('order_index'),
    supabase.from('insights').select('*').order('date', { ascending: false }),
    supabase.from('railway_questions').select('*').order('sort_order'),
    supabase.from('techletter_issues').select('*').order('published_date', { ascending: false }),
    supabase.from('principles').select('*').order('sort_order'),
    supabase.from('team_members').select('*').order('sort_order'),
    supabase.from('settings').select('*').order('key'),
  ]);

  // Transform pages
  const pages: WordPressPost[] = (pagesResult.data || []).map((page) => ({
    title: page.title,
    content: typeof page.content === 'object' ? JSON.stringify(page.content, null, 2) : String(page.content || ''),
    excerpt: page.subtitle || '',
    status: page.published ? 'publish' : 'draft',
    date: page.created_at,
    categories: [],
    tags: [],
    post_type: 'page',
    slug: page.slug,
    meta: {
      meta_title: page.meta_title,
      meta_description: page.meta_description,
      page_id: page.id,
    },
  }));

  // Transform posts
  const posts: WordPressPost[] = (postsResult.data || []).map((post) => ({
    title: post.title,
    content: post.content || '',
    excerpt: post.summary || '',
    status: post.published ? 'publish' : 'draft',
    date: post.published_at || post.created_at,
    categories: post.category ? [post.category] : [],
    tags: [],
    post_type: 'post',
    slug: post.slug,
    meta: {
      featured_image: post.featured_image,
      post_id: post.id,
    },
  }));

  // Transform services
  const services: WordPressPost[] = (servicesResult.data || []).map((service) => ({
    title: service.title,
    content: [
      service.intro || '',
      service.description || '',
      Array.isArray(service.points) ? service.points.map((p: string) => `• ${p}`).join('\n') : '',
    ].filter(Boolean).join('\n\n'),
    excerpt: service.subtitle || '',
    status: service.published ? 'publish' : 'draft',
    date: service.created_at,
    categories: service.category ? [service.category] : ['Services'],
    tags: [],
    post_type: 'service',
    slug: service.slug || '',
    meta: {
      icon_type: service.icon_type,
      order_index: service.order_index,
      points: service.points,
      service_id: service.id,
    },
  }));

  // Transform insights
  const insights: WordPressPost[] = (insightsResult.data || []).map((insight) => ({
    title: insight.title,
    content: insight.content || '',
    excerpt: insight.summary || '',
    status: insight.published ? 'publish' : 'draft',
    date: insight.date || insight.created_at,
    categories: insight.category ? [insight.category] : ['Insights'],
    tags: Array.isArray(insight.tags) ? insight.tags : [],
    post_type: 'insight',
    slug: insight.slug,
    meta: {
      type: insight.type,
      reading_time: insight.reading_time,
      illustration_type: insight.illustration_type,
      insight_id: insight.id,
    },
  }));

  // Transform railway questions
  const railway_questions: WordPressPost[] = (railwayQuestionsResult.data || []).map((question) => ({
    title: `${question.letter} - ${question.title}`,
    content: question.description || '',
    excerpt: question.title,
    status: question.published ? 'publish' : 'draft',
    date: question.created_at,
    categories: ['Railway Framework'],
    tags: [],
    post_type: 'railway_question',
    slug: question.letter.toLowerCase(),
    meta: {
      letter: question.letter,
      sort_order: question.sort_order,
      question_id: question.id,
    },
  }));

  // Transform techletter issues
  const techletter_issues: WordPressPost[] = (techletterIssuesResult.data || []).map((issue) => ({
    title: issue.title,
    content: issue.excerpt || '',
    excerpt: issue.excerpt || '',
    status: issue.status === 'published' ? 'publish' : 'draft',
    date: issue.published_date || issue.created_at,
    categories: ['Techletter'],
    tags: [],
    post_type: 'techletter_issue',
    slug: issue.slug,
    meta: {
      external_url: issue.external_url,
      reading_time: issue.reading_time,
      cover_image: issue.cover_image,
      rss_guid: issue.rss_guid,
      issue_id: issue.id,
    },
  }));

  // Transform principles
  const principles: WordPressPost[] = (principlesResult.data || []).map((principle) => ({
    title: principle.title,
    content: principle.description || '',
    excerpt: principle.description || '',
    status: principle.published ? 'publish' : 'draft',
    date: principle.created_at,
    categories: ['Principles'],
    tags: [],
    post_type: 'principle',
    slug: principle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    meta: {
      sort_order: principle.sort_order,
      principle_id: principle.id,
    },
  }));

  // Transform team members
  const team_members: WordPressPost[] = (teamMembersResult.data || []).map((member) => ({
    title: member.name,
    content: member.bio || '',
    excerpt: member.role || '',
    status: member.published ? 'publish' : 'draft',
    date: member.created_at,
    categories: ['Team'],
    tags: [],
    post_type: 'team_member',
    slug: member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    meta: {
      role: member.role,
      photo_url: member.photo_url,
      sort_order: member.sort_order,
      member_id: member.id,
    },
  }));

  // Transform settings
  const settings: Record<string, any> = {};
  (settingsResult.data || []).forEach((setting) => {
    settings[setting.key] = {
      value: setting.value,
      description: setting.description,
      updated_at: setting.updated_at,
    };
  });

  return {
    version: '1.0',
    generator: 'Stratri CMS Export',
    exported_at: new Date().toISOString(),
    posts,
    pages,
    services,
    insights,
    railway_questions,
    techletter_issues,
    principles,
    team_members,
    settings,
  };
}

export function downloadWordPressExport(data: WordPressExport) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `wordpress-export-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function downloadWordPressExportData() {
  const data = await exportToWordPressFormat();
  downloadWordPressExport(data);
}
