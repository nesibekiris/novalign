# Techletter RSS Integration Guide

## Overview

Techletter is now fully integrated into STRATRI with CMS management, RSS import, and custom card styling. All content is manageable through the admin panel without needing AI prompts.

## Features

✅ **RSS Import** - Import text content from techletter.co/feed with one click
✅ **CMS Management** - Edit titles, excerpts, dates, reading times, and cover images
✅ **STRATRI Branding** - Uses your own cover images and styling, not Techletter's
✅ **Manual Publishing** - Review and publish each issue individually
✅ **No Overwrites** - Manual edits are preserved when importing RSS updates
✅ **Newsletter Subscription** - Working subscription form that saves emails to database

## How to Use

### 1. Import Issues from RSS

1. Navigate to `/admin-cms` and click the **Techletter** tab
2. Click **Import from RSS** button
3. The system fetches the latest issues from techletter.co/feed
4. All issues are imported as **drafts** (not visible on the website yet)

**What gets imported:**
- Title
- External URL (link to Techletter article)
- Excerpt (first ~300 characters)
- Published date
- Estimated reading time

**What doesn't get imported:**
- Cover images (you add these manually)

### 2. Edit and Add Cover Images

1. Click **Edit** on any imported issue
2. Review and adjust the title, excerpt, or other fields
3. **Add a cover image URL** - Use STRATRI-branded illustrations, not Techletter's images
4. Adjust reading time if needed
5. Click **Save Changes**

### 3. Publish

1. After adding a cover image and reviewing the content:
2. Change **Status** from `draft` to `published`
3. Click **Save Changes**

The issue will now appear on the Techletter page at `/techletter`.

## RSS Import Behavior

### On First Import
- Creates new draft entries for each RSS item
- Uses RSS GUID to prevent duplicates

### On Subsequent Imports
- Updates title, excerpt, date, and URL if changed in RSS feed
- **Does NOT overwrite** manually edited fields like cover_image
- **Does NOT change** status (draft/published)
- Skips items already in the database based on GUID

### Smart Slug Generation
- Automatically generates URL-friendly slugs from titles
- Adds unique hash from RSS GUID to prevent conflicts
- Preserves existing slugs when updating

## Card Design on Techletter Page

Issues are displayed with STRATRI styling:

**Visual Design:**
- Cover image at top (16:9 aspect ratio)
- Title in Cormorant Garamond serif font
- Date and reading time with icons
- Excerpt text
- "Read on Techletter" button opens external URL

**Colors:**
- Background: `#FEFBF8` (STRATRI light)
- Card background: `#FEFBF8` with blue border
- Text: `#1E2A45` (STRATRI dark)
- Button: `#184A5A` (STRATRI navy)

**Layout:**
- 3-column grid on desktop
- 2-column on tablet
- 1-column on mobile
- Hover effects with shadow and subtle lift

## Newsletter Subscriptions

### How It Works

The Techletter page includes a working subscription form that:

1. Collects email addresses from visitors
2. Validates email format
3. Saves to `newsletter_subscriptions` database table
4. Prevents duplicate subscriptions
5. Allows resubscription if user previously unsubscribed

### Subscriber Management

Access subscriber list in the CMS at `/admin-cms`:

**View Subscribers:**
- Email address
- Subscription status (active/unsubscribed)
- Subscription date
- Source (where they subscribed from)

**Export Subscribers:**
You can query the database to export subscriber emails for your newsletter platform:

```sql
SELECT email, subscribed_at
FROM newsletter_subscriptions
WHERE status = 'active'
ORDER BY subscribed_at DESC;
```

### Subscription Status Flow

- **active** - Currently subscribed, receives newsletters
- **unsubscribed** - Previously subscribed but opted out
- **pending** - Reserved for future email confirmation feature

### Edge Function

**Function:** `subscribe-newsletter`
**Endpoint:** `{SUPABASE_URL}/functions/v1/subscribe-newsletter`

**Security:**
- No JWT required (public function)
- Email validation on input
- Duplicate checking
- CORS enabled for public access

**What It Does:**
1. Validates email format
2. Checks if email already exists
3. If already active: Returns friendly message
4. If previously unsubscribed: Reactivates subscription
5. If new: Creates new subscription record
6. Returns success/error message to user

## Database Structure

**Table:** `techletter_issues`

| Field | Type | Description |
|-------|------|-------------|
| `id` | uuid | Unique identifier |
| `title` | text | Issue title |
| `slug` | text | URL-friendly identifier |
| `external_url` | text | Link to Techletter article |
| `excerpt` | text | Short preview text |
| `published_date` | date | Original publication date |
| `reading_time` | text | e.g., "5 min read" |
| `cover_image` | text | URL to STRATRI illustration |
| `status` | text | 'draft' or 'published' |
| `rss_guid` | text | Unique RSS identifier (for deduplication) |
| `created_at` | timestamptz | Record creation time |
| `updated_at` | timestamptz | Last update time |

**Table:** `newsletter_subscriptions`

| Field | Type | Description |
|-------|------|-------------|
| `id` | uuid | Unique identifier |
| `email` | text | Subscriber email address |
| `status` | text | 'pending', 'active', or 'unsubscribed' |
| `subscribed_at` | timestamptz | Subscription timestamp |
| `unsubscribed_at` | timestamptz | When they unsubscribed (if applicable) |
| `source` | text | Where they subscribed from |
| `created_at` | timestamptz | Record creation time |
| `updated_at` | timestamptz | Last update time |

## Edge Functions

### Import RSS Function

**Function:** `import-techletter-rss`
**Endpoint:** `{SUPABASE_URL}/functions/v1/import-techletter-rss`

### Security
- Requires authentication (JWT verification enabled)
- Only authenticated users can trigger imports
- Validates RSS feed structure before processing

### What It Does
1. Fetches RSS feed from techletter.co/feed
2. Parses XML to extract title, link, date, description
3. For each item:
   - Checks if GUID already exists
   - Creates new draft if not found
   - Updates existing entry if found (preserving manual edits)
4. Returns summary: created, updated, skipped counts

## Best Practices

### Cover Images
- Use STRATRI-branded illustrations that match your design system
- Recommended dimensions: 1600x900px (16:9 aspect ratio)
- Host images on a reliable CDN or image service
- Use descriptive alt text (title is used automatically)

### Publishing Workflow
1. Run RSS import weekly or as needed
2. Review new drafts
3. Add appropriate cover images
4. Edit excerpts if RSS version is too long
5. Publish when ready

### Editing Strategy
- Title: Keep close to RSS but adjust for brand voice if needed
- Excerpt: RSS provides first ~300 chars; edit for clarity
- Reading time: Auto-calculated but adjust if you know better
- Slug: Auto-generated; only change if you need a custom URL

## Maintenance

### Regular Tasks
- Import RSS feed periodically (weekly recommended)
- Review and publish drafts with cover images
- Monitor for any issues with external URLs

### Troubleshooting

**Issue:** RSS import fails
**Solution:** Check that techletter.co/feed is accessible and hasn't changed format

**Issue:** Duplicate entries appearing
**Solution:** RSS GUID should prevent this; check for changes in feed structure

**Issue:** Images not displaying
**Solution:** Verify cover image URLs are publicly accessible

**Issue:** Changes not appearing on site
**Solution:** Ensure status is set to 'published', not 'draft'

## Technical Details

### CMS Functions

**`getTechletterIssues(limit?: number)`**
Fetches published issues, ordered by date (newest first)

**`getTechletterIssue(slug: string)`**
Fetches single issue by slug

**`getAllContent()`**
Includes techletter issues in complete content fetch

### Row Level Security

**Techletter Issues:**
- **Anonymous users:** Can view published issues only
- **Admin users:** Full CRUD access to all issues

**Newsletter Subscriptions:**
- **Anonymous users:** Can insert (subscribe) only
- **Admin users:** Full CRUD access to all subscriptions

### API Integration

The Techletter page automatically fetches and displays published issues using the CMS API. No additional configuration needed.

## Future Enhancements

Potential features you could add:

- **Automated imports** - Set up a scheduled function to import RSS daily
- **Image upload** - Add direct image upload instead of URL input
- **Categories/tags** - Add taxonomy for filtering issues
- **Search** - Add search functionality for older issues
- **Analytics** - Track which issues get the most views

## Summary

You now have a fully integrated Techletter section that:
- Pulls text content from RSS automatically
- Displays with STRATRI branding and styling
- Requires no AI prompts for routine management
- Maintains your control over visuals and publishing

All management happens in the CMS at `/admin-cms` under the **Techletter** tab.
