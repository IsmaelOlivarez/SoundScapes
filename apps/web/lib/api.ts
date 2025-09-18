import { supabase } from './auth'

// API client for making requests to our API routes
class ApiClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'API request failed')
    }

    return response.json()
  }

  // Units API
  async getUnits() {
    return this.request('/api/units')
  }

  async getUnit(id: string) {
    return this.request(`/api/units/${id}`)
  }

  async createUnit(data: any) {
    return this.request('/api/units', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateUnit(id: string, data: any) {
    return this.request(`/api/units/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteUnit(id: string) {
    return this.request(`/api/units/${id}`, {
      method: 'DELETE',
    })
  }

  // Plans API
  async getPlans() {
    return this.request('/api/plans')
  }

  async getPlan(id: string) {
    return this.request(`/api/plans/${id}`)
  }

  async createPlan(data: any) {
    return this.request('/api/plans', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updatePlan(id: string, data: any) {
    return this.request(`/api/plans/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deletePlan(id: string) {
    return this.request(`/api/plans/${id}`, {
      method: 'DELETE',
    })
  }

  // Music API
  async generateMusic(data: any) {
    return this.request('/api/music/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getTrack(id: string) {
    return this.request(`/api/music/track/${id}`)
  }
}

export const apiClient = new ApiClient()
