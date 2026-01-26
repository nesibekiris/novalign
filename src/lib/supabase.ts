import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Page {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content: Record<string, any>;
  meta_title: string;
  meta_description: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  featured_image: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: Record<string, any>;
  description: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
  category: string;
  order_index: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface TechletterIssue {
  id: string;
  title: string;
  slug: string;
  external_url: string;
  excerpt: string;
  published_date: string;
  reading_time: string;
  cover_image: string;
  status: 'draft' | 'published';
  rss_guid: string;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  status: 'pending' | 'active' | 'unsubscribed';
  subscribed_at: string;
  unsubscribed_at: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}
