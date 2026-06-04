# Sri Sai Amrutha Salon - Supabase Review System Setup Guide

This guide details the step-by-step process to set up your Supabase project, initialize the database schema with security rules, configure your environment variables locally, and deploy the configuration to Vercel.

---

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in or sign up.
2. Click **New project** on the dashboard.
3. Select your organization, then configure the project:
   - **Name**: `Amrutha Salon Website` (or similar)
   - **Database Password**: Choose a strong password and save it somewhere secure.
   - **Region**: Select the region closest to your target users (e.g., `Mumbai / ap-south-1` or your local region).
   - **Pricing Plan**: Select the **Free** tier.
4. Click **Create new project** and wait a couple of minutes for your database to provision.

---

## 2. Obtain Project Credentials

Once the project setup completes:
1. Navigate to the **Project Settings** (gear icon on the bottom-left sidebar).
2. Go to the **API** section under settings.
3. Locate and copy the following two keys:
   - **Project URL**: Found under `Project URL`.
   - **Anon Key**: Found under `Project API keys` (labeled as `anon public` key).

---

## 3. Database Schema Setup

To create the `reviews` table and enable secure public access:
1. Go to the **SQL Editor** section in the left-hand sidebar (represented by the `SQL` icon).
2. Click **New query** (or **Blank query**).
3. Paste the following SQL script into the editor:

```sql
-- Create the reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  rating smallint NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read reviews
CREATE POLICY "Allow public read access" ON public.reviews
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to insert a review
CREATE POLICY "Allow public insert access" ON public.reviews
  FOR INSERT
  WITH CHECK (true);
```

4. Click **Run** on the top right. You should see a success message (`Success. No rows returned`).

---

## 4. Local Environment Configuration

1. In the root directory of your project, find/open the `.env` file.
2. Replace the placeholder values with your copied credentials:

```env
VITE_SUPABASE_URL=https://ppbembuakzcjpzngivaa.supabase.co/rest/v1/
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwYmVtYnVha3pjanB6bmdpdmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NTY1ODQsImV4cCI6MjA5NjEzMjU4NH0.79G4-jGcBeb2URlzZI9JfW9aeMVZt4dF9Wz8KdZ2J4w
```

3. Restart your local development server (`npm run dev`) so Vite loads the new variables.

---

## 5. Vercel Deployment Configuration

To ensure your live deployed website has access to Supabase:
1. Log into your [Vercel Dashboard](https://vercel.com/) and click on your project name.
2. Go to the **Settings** tab at the top.
3. Click on **Environment Variables** in the left menu.
4. Add the following two key-value pairs (ensure spelling is exact):
   - **Key**: `VITE_SUPABASE_URL`
     - **Value**: `https://your-project-id.supabase.co`
   - **Key**: `VITE_SUPABASE_ANON_KEY`
     - **Value**: `your-anon-public-key`
5. Select **Production**, **Preview**, and **Development** environment targets.
6. Click **Save**.
7. **Redeploy your project** for Vercel to rebuild the project with these active credentials.
