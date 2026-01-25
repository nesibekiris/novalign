/*
  # Fix Security Issues

  1. Admin System
    - Create `admin_users` table to track admin user IDs
    - Add helper function to check if user is admin
  
  2. RLS Policy Fixes
    - Replace all `USING (true)` policies with admin checks
    - Ensures only designated admin users can manage content
    - Affects tables: pages, posts, settings, services, team_members, insights, 
      principles, railway_questions, techletter_issues
  
  3. Performance Optimizations
    - Remove unused indexes on techletter_issues table
  
  4. Function Security
    - Fix search_path for update_updated_at_column function
  
  5. Important Notes
    - After migration, you must add your user ID to admin_users table
    - Use: INSERT INTO admin_users (user_id) VALUES ('your-user-id');
    - Auth DB Connection Strategy must be changed in Supabase Dashboard (cannot be done via migration)
*/

-- Create admin_users table to track who has admin access
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only admins can view admin list
CREATE POLICY "Admins can view admin list"
  ON admin_users FOR SELECT
  TO authenticated
  USING (user_id IN (SELECT user_id FROM admin_users WHERE user_id = auth.uid()));

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admin_users
    WHERE user_id = auth.uid()
  );
$$;

-- Remove unused indexes
DROP INDEX IF EXISTS idx_techletter_status;
DROP INDEX IF EXISTS idx_techletter_published_date;

-- Fix update_updated_at_column function search path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Drop and recreate all problematic RLS policies with admin checks

-- PAGES table
DROP POLICY IF EXISTS "Authenticated users can insert pages" ON pages;
DROP POLICY IF EXISTS "Authenticated users can update pages" ON pages;
DROP POLICY IF EXISTS "Authenticated users can delete pages" ON pages;

CREATE POLICY "Admins can insert pages"
  ON pages FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update pages"
  ON pages FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete pages"
  ON pages FOR DELETE
  TO authenticated
  USING (is_admin());

-- POSTS table
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can delete posts" ON posts;

CREATE POLICY "Admins can insert posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete posts"
  ON posts FOR DELETE
  TO authenticated
  USING (is_admin());

-- SETTINGS table
DROP POLICY IF EXISTS "Authenticated users can insert settings" ON settings;
DROP POLICY IF EXISTS "Authenticated users can update settings" ON settings;
DROP POLICY IF EXISTS "Authenticated users can delete settings" ON settings;

CREATE POLICY "Admins can insert settings"
  ON settings FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update settings"
  ON settings FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete settings"
  ON settings FOR DELETE
  TO authenticated
  USING (is_admin());

-- SERVICES table
DROP POLICY IF EXISTS "Authenticated users can insert services" ON services;
DROP POLICY IF EXISTS "Authenticated users can update services" ON services;
DROP POLICY IF EXISTS "Authenticated users can delete services" ON services;

CREATE POLICY "Admins can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (is_admin());

-- TEAM_MEMBERS table
DROP POLICY IF EXISTS "Authenticated users can insert team members" ON team_members;
DROP POLICY IF EXISTS "Authenticated users can update team members" ON team_members;
DROP POLICY IF EXISTS "Authenticated users can delete team members" ON team_members;

CREATE POLICY "Admins can insert team members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete team members"
  ON team_members FOR DELETE
  TO authenticated
  USING (is_admin());

-- INSIGHTS table
DROP POLICY IF EXISTS "Authenticated users can insert insights" ON insights;
DROP POLICY IF EXISTS "Authenticated users can update insights" ON insights;
DROP POLICY IF EXISTS "Authenticated users can delete insights" ON insights;

CREATE POLICY "Admins can insert insights"
  ON insights FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update insights"
  ON insights FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete insights"
  ON insights FOR DELETE
  TO authenticated
  USING (is_admin());

-- PRINCIPLES table
DROP POLICY IF EXISTS "Authenticated users can insert principles" ON principles;
DROP POLICY IF EXISTS "Authenticated users can update principles" ON principles;
DROP POLICY IF EXISTS "Authenticated users can delete principles" ON principles;

CREATE POLICY "Admins can insert principles"
  ON principles FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update principles"
  ON principles FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete principles"
  ON principles FOR DELETE
  TO authenticated
  USING (is_admin());

-- RAILWAY_QUESTIONS table
DROP POLICY IF EXISTS "Authenticated users can insert railway questions" ON railway_questions;
DROP POLICY IF EXISTS "Authenticated users can update railway questions" ON railway_questions;
DROP POLICY IF EXISTS "Authenticated users can delete railway questions" ON railway_questions;

CREATE POLICY "Admins can insert railway questions"
  ON railway_questions FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update railway questions"
  ON railway_questions FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete railway questions"
  ON railway_questions FOR DELETE
  TO authenticated
  USING (is_admin());

-- TECHLETTER_ISSUES table
DROP POLICY IF EXISTS "Authenticated users can insert techletter issues" ON techletter_issues;
DROP POLICY IF EXISTS "Authenticated users can update techletter issues" ON techletter_issues;
DROP POLICY IF EXISTS "Authenticated users can delete techletter issues" ON techletter_issues;
DROP POLICY IF EXISTS "Authenticated users can view all techletter issues" ON techletter_issues;

CREATE POLICY "Admins can view all techletter issues"
  ON techletter_issues FOR SELECT
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can insert techletter issues"
  ON techletter_issues FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update techletter issues"
  ON techletter_issues FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete techletter issues"
  ON techletter_issues FOR DELETE
  TO authenticated
  USING (is_admin());