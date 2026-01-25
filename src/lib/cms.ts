import { supabase, Page, Post, Setting, Service } from './supabase';

export async function getPage(slug: string): Promise<Page | null> {
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching page:', error);
    return null;
  }

  return data;
}

export async function getPosts(limit?: number): Promise<Post[]> {
  let query = supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

export async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
}

export async function getSetting(key: string): Promise<Setting | null> {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .eq('key', key)
    .maybeSingle();

  if (error) {
    console.error('Error fetching setting:', error);
    return null;
  }

  return data;
}

export async function getSettings(keys?: string[]): Promise<Setting[]> {
  let query = supabase.from('settings').select('*');

  if (keys && keys.length > 0) {
    query = query.in('key', keys);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching settings:', error);
    return [];
  }

  return data || [];
}

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('published', true)
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }

  return data || [];
}

export async function getAllContent() {
  const [pages, posts, settings, services] = await Promise.all([
    supabase.from('pages').select('*'),
    supabase.from('posts').select('*'),
    supabase.from('settings').select('*'),
    supabase.from('services').select('*'),
  ]);

  return {
    pages: pages.data || [],
    posts: posts.data || [],
    settings: settings.data || [],
    services: services.data || [],
  };
}
