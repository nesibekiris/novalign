# Quick Start: Become Admin

After the security migration, you need to add yourself as an admin to access the CMS.

## Step 1: Get Your User ID

Run this in Supabase SQL Editor:

```sql
SELECT id, email FROM auth.users;
```

Copy your user ID (the UUID).

## Step 2: Add Yourself as Admin

Replace `YOUR_USER_ID_HERE` with your actual UUID from step 1:

```sql
INSERT INTO admin_users (user_id)
VALUES ('YOUR_USER_ID_HERE');
```

## Step 3: Verify

```sql
SELECT * FROM admin_users;
```

You should see your user_id in the results.

## Done!

You can now access `/admin-cms` and manage all content.

## Add More Admins Later

Just repeat steps 1-2 for any other user emails you want to grant admin access.
