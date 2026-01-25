/*
  # Create Techletter Issues Table

  1. New Tables
    - `techletter_issues`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Issue title from RSS
      - `slug` (text, unique) - URL-friendly slug
      - `external_url` (text) - Link to original Techletter article on Substack
      - `excerpt` (text) - Short description/preview
      - `published_date` (date) - Original publication date
      - `reading_time` (text) - Estimated reading time
      - `cover_image` (text) - STRATRI illustration URL (uploaded manually)
      - `status` (text) - 'draft' or 'published'
      - `rss_guid` (text, unique) - Unique identifier from RSS feed for deduplication
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `techletter_issues` table
    - Public can view published issues
    - Authenticated users can manage all issues

  3. Indexes
    - Index on status for filtering published issues
    - Index on published_date for sorting
*/

-- Create techletter_issues table
CREATE TABLE IF NOT EXISTS techletter_issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  external_url text NOT NULL,
  excerpt text DEFAULT '',
  published_date date NOT NULL,
  reading_time text DEFAULT '',
  cover_image text DEFAULT '',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  rss_guid text UNIQUE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE techletter_issues ENABLE ROW LEVEL SECURITY;

-- Public users can view published issues
CREATE POLICY "Anyone can view published techletter issues"
  ON techletter_issues FOR SELECT
  TO anon
  USING (status = 'published');

-- Authenticated users can view all issues
CREATE POLICY "Authenticated users can view all techletter issues"
  ON techletter_issues FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can insert issues
CREATE POLICY "Authenticated users can insert techletter issues"
  ON techletter_issues FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update issues
CREATE POLICY "Authenticated users can update techletter issues"
  ON techletter_issues FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete issues
CREATE POLICY "Authenticated users can delete techletter issues"
  ON techletter_issues FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_techletter_status ON techletter_issues(status);
CREATE INDEX IF NOT EXISTS idx_techletter_published_date ON techletter_issues(published_date DESC);

-- Add trigger for updated_at
CREATE TRIGGER update_techletter_issues_updated_at
  BEFORE UPDATE ON techletter_issues
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();