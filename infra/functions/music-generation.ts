// Supabase Edge Function for music generation
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface MusicGenerationRequest {
  planId: string
  duration: number
  genre?: string
  tempo?: number
  intensity: 'low' | 'medium' | 'high'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { planId, duration, genre, tempo, intensity }: MusicGenerationRequest = await req.json()

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Get plan details
    const { data: plan, error: planError } = await supabaseClient
      .from('plans')
      .select('*')
      .eq('id', planId)
      .single()

    if (planError) {
      throw new Error(`Failed to fetch plan: ${planError.message}`)
    }

    // Generate music based on plan characteristics
    const musicMetadata = {
      genre: genre || plan.music_genre || 'electronic',
      tempo: tempo || plan.music_tempo || 120,
      intensity,
      duration: duration * 60, // convert to seconds
    }

    // Here you would integrate with your music generation service
    // For now, returning mock data
    const mockTrack = {
      trackId: `track_${Date.now()}`,
      url: `https://example.com/tracks/${Date.now()}.mp3`,
      duration: musicMetadata.duration,
      metadata: musicMetadata,
    }

    return new Response(
      JSON.stringify(mockTrack),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
