import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

let browserClient: any = null

// Client-side Supabase client (lazy instantiated to prevent build failures)
export function getSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key is missing. Returning a dummy client.')
    return {
      auth: {
        signUp: async () => ({ data: null, error: new Error('Supabase not configured') }),
        signInWithPassword: async () => ({ data: null, error: new Error('Supabase not configured') }),
        getUser: async () => ({ data: { user: null }, error: null }),
      }
    } as any
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  return browserClient
}

// Server-side Supabase client (lazy instantiated)
export function getSupabaseServerClient(useServiceRole = false) {
  const key = useServiceRole ? supabaseServiceKey : supabaseAnonKey
  if (!supabaseUrl || !key) {
    console.warn('Supabase URL or Key is missing for server client. Returning dummy client.')
    return {
      auth: {
        exchangeCodeForSession: async () => ({ data: null, error: new Error('Supabase not configured') }),
      },
      from: () => ({
        insert: async () => ({ error: new Error('Supabase not configured') }),
      })
    } as any
  }
  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false, // Server side should not persist session in memory
    },
  })
}
