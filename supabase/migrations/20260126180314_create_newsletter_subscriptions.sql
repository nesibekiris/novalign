/*
  # Create Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique) - Subscriber email address
      - `status` (text) - 'pending', 'active', or 'unsubscribed'
      - `subscribed_at` (timestamptz) - Subscription timestamp
      - `unsubscribed_at` (timestamptz) - Unsubscription timestamp (if applicable)
      - `source` (text) - Where they subscribed from (e.g., 'techletter_page', 'home_page')
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp
  
  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Public can insert (subscribe)
    - Only admins can view/manage subscriptions
  
  3. Indexes
    - Index on email for quick lookups
    - Index on status for filtering
*/

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('pending', 'active', 'unsubscribed')),
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Public users can subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Admins can view all subscriptions
CREATE POLICY "Admins can view all subscriptions"
  ON newsletter_subscriptions FOR SELECT
  TO authenticated
  USING (is_admin());

-- Admins can update subscriptions
CREATE POLICY "Admins can update subscriptions"
  ON newsletter_subscriptions FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can delete subscriptions
CREATE POLICY "Admins can delete subscriptions"
  ON newsletter_subscriptions FOR DELETE
  TO authenticated
  USING (is_admin());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscriptions(status);

-- Add trigger for updated_at
CREATE TRIGGER update_newsletter_subscriptions_updated_at
  BEFORE UPDATE ON newsletter_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();