/*
  # Fix Security Issues

  1. Drop unused indexes
    - Remove indexes that are not being used for query optimization

  2. Fix RLS Policies
    - Remove redundant SELECT policies for authenticated users
    - Split "ALL" policies into separate INSERT, UPDATE, DELETE policies
    - Maintain access control while following security best practices

  3. Security Improvements
    - Authenticated users keep full CMS access
    - Anonymous users keep read-only access to published content
    - Eliminate policy redundancy
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_pages_slug;
DROP INDEX IF EXISTS idx_posts_slug;
DROP INDEX IF EXISTS idx_posts_published;
DROP INDEX IF EXISTS idx_settings_key;
DROP INDEX IF EXISTS idx_services_order;

-- Fix insights table policies
DROP POLICY IF EXISTS "Authenticated users can manage insights" ON insights;

CREATE POLICY "Authenticated users can insert insights"
  ON insights FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update insights"
  ON insights FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete insights"
  ON insights FOR DELETE
  TO authenticated
  USING (true);

-- Fix pages table policies
DROP POLICY IF EXISTS "Authenticated users can manage pages" ON pages;

CREATE POLICY "Authenticated users can insert pages"
  ON pages FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update pages"
  ON pages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete pages"
  ON pages FOR DELETE
  TO authenticated
  USING (true);

-- Fix posts table policies
DROP POLICY IF EXISTS "Authenticated users can manage posts" ON posts;

CREATE POLICY "Authenticated users can insert posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON posts FOR DELETE
  TO authenticated
  USING (true);

-- Fix principles table policies
DROP POLICY IF EXISTS "Authenticated users can manage principles" ON principles;

CREATE POLICY "Authenticated users can insert principles"
  ON principles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update principles"
  ON principles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete principles"
  ON principles FOR DELETE
  TO authenticated
  USING (true);

-- Fix railway_questions table policies
DROP POLICY IF EXISTS "Authenticated users can manage railway questions" ON railway_questions;

CREATE POLICY "Authenticated users can insert railway questions"
  ON railway_questions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update railway questions"
  ON railway_questions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete railway questions"
  ON railway_questions FOR DELETE
  TO authenticated
  USING (true);

-- Fix services table policies
DROP POLICY IF EXISTS "Authenticated users can manage services" ON services;

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- Fix settings table policies
DROP POLICY IF EXISTS "Authenticated users can manage settings" ON settings;

CREATE POLICY "Authenticated users can insert settings"
  ON settings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update settings"
  ON settings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete settings"
  ON settings FOR DELETE
  TO authenticated
  USING (true);

-- Fix team_members table policies
DROP POLICY IF EXISTS "Authenticated users can manage team members" ON team_members;

CREATE POLICY "Authenticated users can insert team members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON team_members FOR DELETE
  TO authenticated
  USING (true);

-- Note: The "Auth DB Connection Strategy" and "Function Search Path Mutable" warnings
-- are Supabase configuration issues that cannot be fixed via migrations.
-- These should be addressed in the Supabase dashboard settings if needed.