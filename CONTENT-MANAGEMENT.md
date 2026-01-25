# Content Management Quick Guide

## Accessing the CMS

### Admin Panel
Visit `/admin` in your browser to access:
- WordPress export tool
- Database structure overview
- Migration instructions

### Supabase Dashboard
Direct database access for content editing:
1. Go to your Supabase project dashboard
2. Click "Table Editor" in the left sidebar
3. Select the table you want to edit

## Quick Content Updates

### Update Homepage Hero
1. Go to Supabase → Table Editor → `pages`
2. Find the row where `slug = 'home'`
3. Edit the `title`, `subtitle`, or `content` fields
4. Changes are live immediately

### Add a New Blog Post/Insight
1. Go to Supabase → Table Editor → `posts`
2. Click "Insert row"
3. Fill in:
   - `slug`: URL-friendly version (e.g., "my-new-post")
   - `title`: Post title
   - `summary`: Short description
   - `content`: Full article content
   - `category`: Post category
   - `published`: Set to `true` to make it live
   - `published_at`: Publication date

### Update Services
1. Go to Supabase → Table Editor → `services`
2. Find the service you want to edit
3. Update:
   - `title`: Service name
   - `description`: Service description
   - `points`: Click to edit JSON array of bullet points
   - `order_index`: Change to reorder services

### Update Contact Information
1. Go to Supabase → Table Editor → `settings`
2. Find the row where `key = 'site_info'`
3. Click on the `value` field to edit JSON:
```json
{
  "name": "Stratri",
  "tagline": "Technology Policy & AI governance Consultancy",
  "email": "nesibe@stratri.com",
  "linkedin": "https://www.linkedin.com/in/nesibekiris/",
  "techletter_url": "https://techletter.co"
}
```

### Update Managing Partner Bio
1. Go to Supabase → Table Editor → `settings`
2. Find the row where `key = 'managing_partner'`
3. Edit the `value` JSON field with bio information

## Content Types Reference

### Pages (`pages` table)
Use for: Static pages like Home, About, Contact
Structure:
- Single entry per page (identified by slug)
- Flexible JSON content field
- SEO metadata included

### Posts (`posts` table)
Use for: Blog posts, insights, articles
Structure:
- Each post is a separate row
- Supports categories and featured images
- Draft/publish workflow

### Services (`services` table)
Use for: Service offerings, products
Structure:
- Each service is a separate row
- Ordered by `order_index`
- Bullet points stored as JSON array

### Settings (`settings` table)
Use for: Site-wide configuration
Structure:
- Key-value pairs
- Flexible JSON values
- One row per setting

## Tips for Content Editing

### Working with JSON Fields
JSON fields allow flexible data structures. When editing:
1. Click the field to open the JSON editor
2. Make sure the JSON is valid (use a JSON validator if needed)
3. Common structures:
   - Arrays: `["item 1", "item 2", "item 3"]`
   - Objects: `{"key": "value", "key2": "value2"}`
   - Nested: `{"array": ["a", "b"], "text": "hello"}`

### Publishing Workflow
1. Create content with `published = false` (draft)
2. Preview and test
3. Set `published = true` when ready to go live
4. Content appears immediately on the site

### URL Slugs
- Must be unique
- Use lowercase letters, numbers, and hyphens
- No spaces or special characters
- Example: "ai-governance-framework" not "AI Governance Framework!"

### Images
- Upload images to your hosting/CDN
- Store the full URL in the database
- For featured images, use the `featured_image` field
- For inline images, include in content as HTML or markdown

## Backup and Export

### Regular Backups
1. Visit `/admin` regularly
2. Download WordPress export as backup
3. Store in a safe location

### Database Backups
Supabase automatically backs up your database. You can also:
1. Use Supabase CLI to create manual backups
2. Export tables as CSV from the dashboard
3. Use the WordPress export tool for content-only backups

## Common Tasks

### Reorder Services
Change the `order_index` value (1, 2, 3, 4...). Lower numbers appear first.

### Change Site Tagline
Update the `site_info` setting in the `settings` table.

### Add a New Principle
Edit the `principles` setting and add to the JSON array.

### Update Meta Descriptions for SEO
Edit the `meta_title` and `meta_description` fields in the `pages` table.

### Archive Old Posts
Set `published = false` instead of deleting. This preserves content.

## Troubleshooting

### Changes Not Appearing
- Clear browser cache
- Check that `published = true`
- Verify JSON syntax is valid
- Check browser console for errors

### Can't Edit Content
- Verify you're logged into Supabase
- Check RLS policies are correctly configured
- Ensure you have proper permissions

### Export Not Working
- Check browser console for errors
- Verify Supabase connection
- Try from `/admin` page

## Need Help?

- Supabase Docs: https://supabase.com/docs
- JSON Validator: https://jsonlint.com/
- Check CMS-README.md for detailed technical information
- Contact your development team for custom features
