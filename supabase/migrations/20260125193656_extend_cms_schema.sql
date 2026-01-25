/*
  # Extend CMS Schema for STRATRI Website

  1. New Tables
    - `railway_questions`: Seven RAILWAY framework questions
    - `insights`: Rename/replace posts table for insights content
    - `principles`: Company principles for About page
    - `team_members`: Team member bios

  2. Schema Updates
    - Add fields to services table (subtitle, slug, icon_type, intro)
    - Rename settings to site_settings for clarity

  3. Data Seeding
    - Insert Railway questions
    - Insert principles
    - Insert service data
*/

-- Add missing columns to services table
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'subtitle') THEN
    ALTER TABLE services ADD COLUMN subtitle text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'slug') THEN
    ALTER TABLE services ADD COLUMN slug text UNIQUE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'icon_type') THEN
    ALTER TABLE services ADD COLUMN icon_type text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'intro') THEN
    ALTER TABLE services ADD COLUMN intro text;
  END IF;
END $$;

-- Railway Questions Table
CREATE TABLE IF NOT EXISTS railway_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  letter text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  sort_order int DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE railway_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read published railway questions" ON railway_questions;
CREATE POLICY "Anyone can read published railway questions"
  ON railway_questions FOR SELECT
  TO anon, authenticated
  USING (published = true);

DROP POLICY IF EXISTS "Authenticated users can manage railway questions" ON railway_questions;
CREATE POLICY "Authenticated users can manage railway questions"
  ON railway_questions FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insights Table (enhanced version of posts)
CREATE TABLE IF NOT EXISTS insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  summary text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  type text NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  reading_time text DEFAULT '5 min read',
  illustration_type text DEFAULT 'network',
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE insights ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read published insights" ON insights;
CREATE POLICY "Anyone can read published insights"
  ON insights FOR SELECT
  TO anon, authenticated
  USING (published = true);

DROP POLICY IF EXISTS "Authenticated users can manage insights" ON insights;
CREATE POLICY "Authenticated users can manage insights"
  ON insights FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Principles Table
CREATE TABLE IF NOT EXISTS principles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  sort_order int DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE principles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read published principles" ON principles;
CREATE POLICY "Anyone can read published principles"
  ON principles FOR SELECT
  TO anon, authenticated
  USING (published = true);

DROP POLICY IF EXISTS "Authenticated users can manage principles" ON principles;
CREATE POLICY "Authenticated users can manage principles"
  ON principles FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  photo_url text,
  sort_order int DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read published team members" ON team_members;
CREATE POLICY "Anyone can read published team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (published = true);

DROP POLICY IF EXISTS "Authenticated users can manage team members" ON team_members;
CREATE POLICY "Authenticated users can manage team members"
  ON team_members FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert Railway Questions
INSERT INTO railway_questions (letter, title, description, sort_order) VALUES
  ('R', 'Recognize', 'What technology and AI do we actually have, and where does it live in our products, workflows, and relationships?', 1),
  ('A', 'Architect', 'What do we stand for, and how do we turn that into structures, committees, and decision rights?', 2),
  ('I', 'Institutionalize', 'How do we move from good intentions to routines, templates, and processes people actually use?', 3),
  ('L', 'Learn & Lift', 'How do we help people across the organization understand technology and AI well enough to make good calls?', 4),
  ('W', 'Workflows with RAIL', 'How do specific decisions flow from idea to deployment to review?', 5),
  ('A', 'Assess', 'Are we meeting our own commitments, and what happens when we do not?', 6),
  ('Y', 'Yield & Adapt', 'What are we learning from incidents, audits, and outcomes, and how do we feed that back into the system?', 7)
ON CONFLICT DO NOTHING;

-- Insert Principles
INSERT INTO principles (title, description, sort_order) VALUES
  ('Technology, Society, Policy', 'We work where these three forces converge. Sustainable technology strategy requires navigating technical capability, societal impact, and policy constraints with equal rigor.', 1),
  ('Governance as strategy', 'Responsible technology and AI governance are not compliance burdens – they are strategic advantages. Organizations that govern well move faster and with greater confidence.', 2),
  ('Depth over hype', 'We prioritize nuance and long-term thinking over fashion and buzzwords. Turning complexity into clarity requires deep understanding, not shallow excitement.', 3),
  ('Literacy as foundation', 'AI literacy is how leaders and teams gain real agency. Without understanding across the organization, there can be no meaningful governance, accountability or strategic clarity.', 4)
ON CONFLICT DO NOTHING;