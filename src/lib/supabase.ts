import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Client-side Supabase client
export const supabaseBrowser = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client
export function getSupabaseServerClient(useServiceRole = false) {
  const key = useServiceRole ? supabaseServiceKey : supabaseAnonKey
  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false, // Server side should not persist session in memory
    },
  })
}
