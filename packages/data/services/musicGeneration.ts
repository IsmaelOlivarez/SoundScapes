// Music generation service for creating workout music
export interface MusicGenerationRequest {
  planId: string
  duration: number // in minutes
  genre?: string
  tempo?: number // BPM
  intensity: 'low' | 'medium' | 'high'
}

export interface MusicGenerationResponse {
  trackId: string
  url: string
  duration: number
  metadata: {
    genre: string
    tempo: number
    intensity: string
  }
}

export class MusicGenerationService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async generateMusic(request: MusicGenerationRequest): Promise<MusicGenerationResponse> {
    // This would integrate with your music generation API
    // For now, returning a mock response
    const response = await fetch(`${this.baseUrl}/api/music/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error('Failed to generate music')
    }

    return response.json()
  }

  async getTrack(trackId: string): Promise<MusicGenerationResponse> {
    const response = await fetch(`${this.baseUrl}/api/music/track/${trackId}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch track')
    }

    return response.json()
  }
}

export const musicGenerationService = new MusicGenerationService(
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
)
