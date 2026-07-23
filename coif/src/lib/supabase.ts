import { createClient } from '@supabase/supabase-js';

// Singleton Supabase client. Env vars are pre-populated by the platform.
const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, anonKey);
