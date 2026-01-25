import { getAllContent } from '../lib/cms';

export interface WordPressPost {
  title: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  categories: string[];
  post_type: string;
  meta: Record<string, any>;
}

export interface WordPressExport {
  posts: WordPressPost[];
  pages: WordPressPost[];
  settings: Record<string, any>;
}

export async function exportToWordPressFormat(): Promise<WordPressExport> {
  const content = await getAllContent();

  const posts: WordPressPost[] = content.posts.map((post) => ({
    title: post.title,
    content: post.content || '',
    excerpt: post.summary || '',
    status: post.published ? 'publish' : 'draft',
    date: post.published_at || post.created_at,
    categories: post.category ? [post.category] : [],
    post_type: 'post',
    meta: {
      featured_image: post.featured_image,
      slug: post.slug,
    },
  }));

  const pages: WordPressPost[] = content.pages.map((page) => ({
    title: page.title,
    content: JSON.stringify(page.content),
    excerpt: page.subtitle || '',
    status: page.published ? 'publish' : 'draft',
    date: page.created_at,
    categories: [],
    post_type: 'page',
    meta: {
      slug: page.slug,
      meta_title: page.meta_title,
      meta_description: page.meta_description,
    },
  }));

  const settings: Record<string, any> = {};
  content.settings.forEach((setting) => {
    settings[setting.key] = setting.value;
  });

  settings.services = content.services;

  return {
    posts,
    pages,
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
