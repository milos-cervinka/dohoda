import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('EITHER VITE_SUPABASE_URL OR VITE_SUPABASE_KEY IS NOT SET IN THE ENVIRONMENT VARIABLES');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);