# Stratri CMS & WordPress Migration Guide

This website has been configured as a CMS-ready application with all content stored in Supabase. This makes it easy to manage content and migrate to WordPress when needed.

## Content Structure

All content is stored in four main Supabase tables:

### 1. Pages Table
Stores all static pages (Home, About, Services, etc.)
- `slug`: Page identifier (e.g., "home", "about")
- `title`: Page title
- `subtitle`: Page subtitle
- `content`: JSON structure with flexible content
- `published`: Publication status
- SEO fields: `meta_title`, `meta_description`

### 2. Posts Table
Stores blog posts/insights
- `slug`: URL-friendly identifier
- `title`: Post title
- `summary`: Short excerpt
- `content`: Full post content (markdown/HTML)
- `category`: Post category
- `featured_image`: Image URL
- `published`: Publication status
- `published_at`: Publication date

### 3. Services Table
Stores service offerings
- `title`: Service name
- `description`: Service description
- `points`: Array of service bullet points
- `category`: Service category
- `order_index`: Display order
- `published`: Publication status

### 4. Settings Table
Stores site-wide settings
- `key`: Setting identifier
- `value`: JSON structure with setting data
- Key settings include:
  - `site_info`: General site information
  - `managing_partner`: Partner bio and details
  - `about_description`: About page content
  - `principles`: Company principles

## Content Management

### Option 1: Supabase Dashboard (No Code)
1. Visit your Supabase Dashboard
2. Navigate to "Table Editor"
3. Select the table you want to edit
4. Edit content directly in the interface
5. Changes are immediately live on the website

### Option 2: Build Custom Admin (For Developers)
The `/admin` route provides:
- Content export functionality
- WordPress migration tools
- Database structure overview

You can extend this to build a full admin panel with:
- Content editing forms
- Media management
- User roles and permissions

## Migrating to WordPress

### Step 1: Export Content
1. Visit `/admin` on your website
2. Click "Download WordPress Export"
3. This downloads a JSON file with all content

### Step 2: Prepare WordPress
1. Install WordPress on your hosting platform
2. Choose a theme (or build custom to match Stratri design)
3. Install the "WP All Import" plugin (or similar JSON import tool)

### Step 3: Import Content
1. In WordPress admin, go to WP All Import
2. Upload the exported JSON file
3. Map the fields:
   - Posts → WordPress Posts
   - Pages → WordPress Pages
   - Services → Custom Post Type or Pages
   - Settings → WordPress Options/Theme Settings

### Step 4: Configure Theme
1. Set up your theme to use the imported content
2. Configure menus and widgets
3. Add the Stratri color palette:
   - Primary Navy: #021f5b
   - Accent Blue: #80b1d2
   - Accent Purple-Blue: #87a6dd
   - Background: #e9eef8

### Step 5: Final Touches
1. Set up contact forms
2. Configure SEO settings
3. Test all links and functionality
4. Update DNS to point to WordPress

## Development Integration

### Fetching Content in Components

```typescript
import { getPage, getPosts, getServices, getSetting } from '../lib/cms';

// Get a page
const page = await getPage('home');

// Get recent posts
const posts = await getPosts(3);

// Get all services
const services = await getServices();

// Get a setting
const siteInfo = await getSetting('site_info');
```

### Example: Dynamic Home Page

```typescript
import { useEffect, useState } from 'react';
import { getPage, getPosts, getServices } from '../lib/cms';

export function Home() {
  const [page, setPage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const [pageData, postsData, servicesData] = await Promise.all([
        getPage('home'),
        getPosts(3),
        getServices()
      ]);
      setPage(pageData);
      setPosts(postsData);
      setServices(servicesData);
    }
    loadContent();
  }, []);

  return (
    <div>
      <h1>{page?.title}</h1>
      {/* Rest of component */}
    </div>
  );
}
```

## Database Schema

### Row Level Security (RLS)
All tables have RLS enabled with the following policies:
- Public (anonymous) users can READ published content
- Authenticated users can CREATE, UPDATE, DELETE content

### Timestamps
All tables have automatic timestamp management:
- `created_at`: Set on insert
- `updated_at`: Automatically updated on changes

### Indexes
Optimized indexes for:
- Slug lookups (pages, posts)
- Published status filtering
- Date-based sorting
- Order indexes

## Benefits of This Structure

1. **Content Independence**: Content is separate from code
2. **Easy Updates**: Change content without redeploying
3. **Version Control**: Supabase tracks all changes
4. **API Ready**: Content accessible via REST and GraphQL
5. **WordPress Compatible**: Clean migration path
6. **Scalable**: Add new content types easily
7. **Searchable**: Built-in full-text search capabilities

## Next Steps

### For Current Site
- Keep managing content in Supabase
- Use the `/admin` panel for exports
- Build additional admin features as needed

### For WordPress Migration
- Follow the migration steps above
- Export content regularly as backup
- Test import process in staging environment
- Plan theme development to match current design

## Support Resources

- Supabase Documentation: https://supabase.com/docs
- WP All Import: https://www.wpallimport.com/
- WordPress REST API: https://developer.wordpress.org/rest-api/
- Migration Plugins: Search for "JSON to WordPress" plugins

## Technical Notes

### Content Storage
- JSON fields allow flexible content structures
- Supports rich media (images, videos, embeds)
- Can store custom fields and metadata

### SEO Considerations
- All meta fields included in schema
- Slug-based URLs for clean permalinks
- Canonical URLs manageable per page

### Performance
- Indexed for fast queries
- CDN-friendly (content rarely changes)
- Cacheable API responses

For questions or issues, refer to the Supabase dashboard or contact your development team.
