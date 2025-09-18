import { NextRequest, NextResponse } from 'next/server'
import { musicGenerationService } from '@gym-soundwaves/data'

// POST /api/music/generate - Generate music for a workout plan
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { planId, duration, genre, tempo, intensity } = body

    // Validate required fields
    if (!planId || !duration || !intensity) {
      return NextResponse.json(
        { error: 'Missing required fields: planId, duration, intensity' },
        { status: 400 }
      )
    }

    // Generate music using the service
    const musicData = await musicGenerationService.generateMusic({
      planId,
      duration,
      genre,
      tempo,
      intensity,
    })

    return NextResponse.json(musicData, { status: 201 })
  } catch (error) {
    console.error('Music generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate music' },
      { status: 500 }
    )
  }
}
