import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) {
  console.warn(
    'Supabase URL or Anon Key is missing or using placeholder values. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}

export const supabase = createClient(supabaseUrl ||'https://ppbembuakzcjpzngivaa.supabase.co', supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwYmVtYnVha3pjanB6bmdpdmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NTY1ODQsImV4cCI6MjA5NjEzMjU4NH0.79G4-jGcBeb2URlzZI9JfW9aeMVZt4dF9Wz8KdZ2J4w');
