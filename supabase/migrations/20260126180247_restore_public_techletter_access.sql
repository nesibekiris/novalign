/*
  # Restore Public Access to Published Techletter Issues

  1. Public Access
    - Add policy for anonymous users to view published techletter issues
    - This was accidentally removed in the security migration
    - Public viewing is essential for the Techletter page to work
  
  2. Security
    - Only published issues are visible to public
    - Admins still required for create/update/delete operations
*/

-- Allow anonymous users to view published techletter issues
CREATE POLICY "Public can view published techletter issues"
  ON techletter_issues FOR SELECT
  TO anon
  USING (status = 'published');