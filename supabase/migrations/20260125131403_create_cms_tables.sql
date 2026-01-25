/*
  # CMS Content Management System

  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - page identifier (home, about, services, etc.)
      - `title` (text) - page title
      - `subtitle` (text) - page subtitle/description
      - `content` (jsonb) - flexible content structure
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `published` (boolean) - publication status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - post URL slug
      - `title` (text) - post title
      - `summary` (text) - post summary/excerpt
      - `content` (text) - full post content (markdown or HTML)
      - `category` (text) - post category
      - `featured_image` (text) - image URL
      - `published` (boolean) - publication status
      - `published_at` (timestamptz) - publication date
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `settings`
      - `id` (uuid, primary key)
      - `key` (text, unique) - setting identifier
      - `value` (jsonb) - setting value (flexible structure)
      - `description` (text) - setting description
      - `updated_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text) - service title
      - `description` (text) - service description
      - `points` (jsonb) - array of service points
      - `category` (text) - service category
      - `order_index` (integer) - display order
      - `published` (boolean) - publication status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for published content
    - Authenticated write access for content management
*/

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text DEFAULT '',
  content jsonb DEFAULT '{}',
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create posts table (for insights/blog)
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  summary text DEFAULT '',
  content text DEFAULT '',
  category text DEFAULT '',
  featured_image text DEFAULT '',
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb DEFAULT '{}',
  description text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  points jsonb DEFAULT '[]',
  category text DEFAULT '',
  order_index integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Pages policies: public can read published pages
CREATE POLICY "Anyone can view published pages"
  ON pages FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage pages"
  ON pages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Posts policies: public can read published posts
CREATE POLICY "Anyone can view published posts"
  ON posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage posts"
  ON posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Settings policies: public can read settings
CREATE POLICY "Anyone can view settings"
  ON settings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage settings"
  ON settings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Services policies: public can read published services
CREATE POLICY "Anyone can view published services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage services"
  ON services FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index, published);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
