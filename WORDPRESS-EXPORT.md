# WordPress Export Guide

This document explains the WordPress export functionality and the JSON format used.

## How to Export

1. Navigate to the Admin CMS page (`/admin/cms`)
2. Make sure you're logged in as an admin
3. Click the "Export to WordPress" button in the top right
4. A JSON file will be downloaded to your computer

## Export Format

The exported JSON file contains all content from your Supabase database in a WordPress-compatible format.

### Structure

```json
{
  "version": "1.0",
  "generator": "Stratri CMS Export",
  "exported_at": "2026-01-30T...",
  "posts": [...],
  "pages": [...],
  "services": [...],
  "insights": [...],
  "railway_questions": [...],
  "techletter_issues": [...],
  "principles": [...],
  "team_members": [...],
  "settings": {...}
}
```

### Content Types

Each content type (posts, pages, services, etc.) is exported as an array of WordPress post objects with the following structure:

```json
{
  "title": "Post Title",
  "content": "Post content in HTML or markdown",
  "excerpt": "Short summary",
  "status": "publish" or "draft",
  "date": "ISO 8601 timestamp",
  "categories": ["Category 1", "Category 2"],
  "tags": ["tag1", "tag2"],
  "post_type": "post",
  "slug": "post-slug",
  "meta": {
    // Additional custom fields specific to this content type
  }
}
```

### Exported Content

1. **Pages** (6 pages)
   - Home, About, Services, Techletter, Insights, Connect
   - Includes meta titles and descriptions

2. **Posts** (2 posts)
   - Blog posts and articles
   - Includes featured images

3. **Services** (4 services)
   - AI Strategy & Maturity
   - AI Governance, Ethics & Literacy
   - Market & Policy Research
   - Policy & Government Affairs

4. **Railway Questions** (7 questions)
   - RAILWAY framework questions
   - Each with letter, title, and description

5. **Principles** (4 principles)
   - Company principles
   - Technology, Society, Policy
   - Governance as strategy
   - Depth over hype
   - Literacy as foundation

6. **Insights** (articles and research)
   - Published insights with categories and tags

7. **Techletter Issues**
   - Newsletter issues with external URLs

8. **Team Members**
   - Team bios and information

9. **Settings**
   - Site configuration and metadata

## Importing to WordPress

### Option 1: WordPress Importer Plugin

The JSON format can be converted to WordPress WXR format using tools like:
- [WordPress JSON to WXR Converter](https://github.com/WordPress/wordpress-importer)
- Custom import scripts

### Option 2: WordPress REST API

You can use the WordPress REST API to programmatically import content:

```javascript
// Example: Import a post
await fetch('https://yoursite.com/wp-json/wp/v2/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    title: post.title,
    content: post.content,
    excerpt: post.excerpt,
    status: post.status,
    categories: post.categories,
    tags: post.tags
  })
});
```

### Option 3: Custom Import Script

Create a PHP script that reads the JSON file and uses WordPress functions:

```php
<?php
require_once('wp-load.php');

$json = file_get_contents('wordpress-export-2026-01-30.json');
$data = json_decode($json, true);

foreach ($data['posts'] as $post) {
    wp_insert_post([
        'post_title'   => $post['title'],
        'post_content' => $post['content'],
        'post_excerpt' => $post['excerpt'],
        'post_status'  => $post['status'],
        'post_type'    => $post['post_type'],
        'post_name'    => $post['slug'],
    ]);
}
?>
```

## Custom Fields

Each content type includes custom metadata in the `meta` field:

- **Pages**: `meta_title`, `meta_description`, `page_id`
- **Posts**: `featured_image`, `post_id`
- **Services**: `icon_type`, `order_index`, `points`, `service_id`
- **Insights**: `type`, `reading_time`, `illustration_type`, `insight_id`
- **Railway Questions**: `letter`, `sort_order`, `question_id`
- **Techletter Issues**: `external_url`, `reading_time`, `cover_image`, `rss_guid`, `issue_id`
- **Principles**: `sort_order`, `principle_id`
- **Team Members**: `role`, `photo_url`, `sort_order`, `member_id`

These custom fields should be imported as WordPress post meta using `update_post_meta()`.

## Notes

- All UUIDs from Supabase are preserved in the `meta` fields
- Dates are in ISO 8601 format
- Status values: `publish` (published) or `draft` (unpublished)
- Empty or null values are converted to empty strings
- JSONB fields from Supabase are stringified in the export
