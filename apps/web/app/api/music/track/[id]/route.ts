import { NextRequest, NextResponse } from 'next/server'
import { musicGenerationService } from '@gym-soundwaves/data'

// GET /api/music/track/[id] - Get track information
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const trackData = await musicGenerationService.getTrack(params.id)
    return NextResponse.json(trackData)
  } catch (error) {
    console.error('Track fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch track' },
      { status: 500 }
    )
  }
}
