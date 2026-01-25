# STRATRI CMS Guide

## Overview

Your STRATRI website now has a complete Content Management System (CMS) that allows you to update all content without needing AI assistance or writing code. All content is stored in a Supabase database with proper security policies.

## What Has Been Implemented

### 1. **Tactile, 3D Buttons**
All buttons across the site now have:
- Raised appearance with layered shadows
- Hover: lifts up with enhanced shadow
- Active: presses down with reduced shadow
- Exact brand colors: `#184A5A` primary, `#1E2A45` secondary, `#9FB7C8` accent

### 2. **Minimal Hand-Drawn Icons**
Created 9 custom SVG icons in STRATRI style:
- **Three roads icons**: Technology, Policy, Society (for homepage)
- **Service pillar icons**: Strategy, Governance, Research, Policy Affairs
- **Framework icons**: Railway Track, Junction
- All use brand colors (`#184A5A`, `#9FB7C8`, `#1E2A45`)
- Thin organic lines, flat fills, minimal aesthetic
- Hover animations: scale and rotate

### 3. **Railway Framework - Seven Questions**
Updated with exact wording:
- R: Recognize
- A: Architect
- I: Institutionalize
- L: Learn & Lift
- W: Workflows with RAIL
- A: Assess
- Y: Yield & Adapt

Each with the specific question text you provided.

### 4. **Increased Accent Color Usage**
Enhanced use of `#184A5A` and `#9FB7C8`:
- Gradient backgrounds using `#9FB7C8` tints
- Accent color for step numbers and headings
- Icon fills and backgrounds
- Subtle background shapes

### 5. **Complete CMS Database Schema**

Eight content tables with Row Level Security:

#### `site_settings`
Global configuration (site name, colors, navigation)

#### `pages`
Main page content (Home, About, Services, etc.)

#### `page_sections`
Reusable content blocks linked to pages

#### `services`
Four service pillars with:
- title, subtitle, slug, icon_type
- intro paragraph
- bullet points (JSON array)
- sort_order, published status

#### `railway_questions`
Seven RAILWAY framework questions with letter, title, description

#### `insights`
Blog posts/articles with:
- title, slug, summary, full content
- category, type, date, reading_time
- illustration_type, tags
- published status

#### `principles`
Company principles for About page

#### `team_members`
Team bios with name, role, bio, photo_url

## How to Use the CMS

### Accessing the CMS

Visit: `https://your-domain.com/admin/cms`

### Editing Services

1. Go to CMS → Services tab
2. Click "Edit" on any service
3. Modify:
   - Title
   - Subtitle (italic tagline)
   - Introduction paragraph
   - Individual bullet points
4. Click "Save Changes"

**No code or AI needed!**

### Adding Insights/Blog Posts

1. Go to CMS → Insights tab
2. Click "Add New Insight"
3. Fill in prompts:
   - Title
   - Slug (URL-friendly, e.g., "ai-governance-2026")
   - Summary
   - Category (e.g., "AI Governance")
   - Type (Report/AI Wrapped/Published Article/Techletter)
4. The insight is created as a draft
5. Edit content in database or future CMS enhancement

### Viewing Railway Questions

Railway questions are visible in the CMS (read-only display). To modify, update directly in Supabase dashboard.

### Viewing Principles

Company principles are displayed in CMS (read-only). To modify, update in Supabase dashboard.

## Database Direct Access

For advanced editing, use the Supabase dashboard:

1. Log into your Supabase project
2. Go to Table Editor
3. Select the table you want to edit
4. Click any row to modify fields
5. Changes appear immediately on the site

## Content Field Reference

### Services Table
```
title: Service name
subtitle: Italic tagline
slug: URL identifier (strategy, governance, research, policy)
icon_type: Icon to display (strategy, governance, research, policy_affairs)
intro: Main description paragraph
points: JSON array of bullet points
order_index: Display order (1-4)
published: Show/hide on site
```

### Insights Table
```
title: Article title
slug: URL path (e.g., "governance-frameworks")
summary: Short preview text
content: Full article content (Markdown supported)
category: Topic category
type: Content format (Report/AI Wrapped/etc.)
date: Publication date
reading_time: Display text (e.g., "5 min read")
illustration_type: Abstract visual (network/circles/lines/grid/dots/waves)
tags: Array of topic tags
published: Show/hide on site
```

### Railway Questions Table
```
letter: Single character (R, A, I, L, W, A, Y)
title: Question title
description: Full question text
sort_order: Display order (1-7)
published: Show/hide on site
```

## Security

All tables have Row Level Security (RLS) enabled:
- **Public (anonymous) users**: Can read all published content
- **Authenticated users**: Can create, update, and delete all content

To manage who can edit content, control access through Supabase authentication.

## Brand Token Reference

Use these exact values when creating new content:

**Colors:**
- Background: `#FEFBF8`
- Main dark: `#1E2A45`
- Dark accent: `#184A5A`
- Light accent: `#9FB7C8`

**Typography:**
- Headings: Cormorant Garamond
- Subheadings: Cormorant Garamond Italic
- Body/UI: IBM Plex Sans

**Button Styles:**
- Primary: `#184A5A` background, raised 3D feel
- Secondary: White/transparent with `#1E2A45` border
- Outline: Transparent with hover tint

## Future Content Updates

To add new content without AI:

1. **New Insight**: Use CMS "Add New Insight" button
2. **Update Service**: Use CMS "Edit" button on service card
3. **Change Railway Text**: Update directly in Supabase table editor
4. **Add Team Member**: Insert row in `team_members` table
5. **New Principle**: Insert row in `principles` table

## Icon Types Available

When referencing icons in the database:

- `strategy` → Strategy mountain/path icon
- `governance` → Checklist/shield icon
- `research` → Magnifying glass/search icon
- `policy_affairs` → Building/government icon
- `technology` → Network nodes icon
- `policy` → Document icon
- `society` → People/community icon

## Content Best Practices

1. **Service Intros**: Keep to 2-3 sentences, 150-200 words
2. **Bullet Points**: 3-4 items per service, 10-15 words each
3. **Insight Summaries**: 1-2 sentences, 40-60 words
4. **Railway Questions**: Keep as single question, 15-25 words
5. **Principles**: Title (3-4 words) + Description (25-40 words)

## Support

All content updates happen through:
1. CMS interface at `/admin/cms` (recommended)
2. Direct Supabase table editing (advanced)
3. SQL queries via Supabase SQL Editor (expert)

No AI tokens or coding required for day-to-day content management!
