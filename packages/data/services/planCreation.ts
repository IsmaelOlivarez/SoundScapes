import { Plan, Unit, CreatePlan } from '../schemas'

export interface PlanCreationOptions {
  name: string
  description?: string
  targetDuration: number // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: 'strength' | 'cardio' | 'flexibility' | 'mixed'
  availableUnits: Unit[]
}

export class PlanCreationService {
  generatePlan(options: PlanCreationOptions): CreatePlan {
    const { name, description, targetDuration, difficulty, category, availableUnits } = options
    
    // Filter units by difficulty and category
    const filteredUnits = availableUnits.filter(unit => 
      unit.difficulty === difficulty && unit.category === category
    )
    
    // Simple algorithm to select units that fit the target duration
    const selectedUnits: string[] = []
    let currentDuration = 0
    
    // Sort units by duration (ascending) for better distribution
    const sortedUnits = [...filteredUnits].sort((a, b) => a.duration - b.duration)
    
    for (const unit of sortedUnits) {
      if (currentDuration + unit.duration <= targetDuration) {
        selectedUnits.push(unit.id)
        currentDuration += unit.duration
      }
    }
    
    // If we haven't filled the duration, add more units
    if (currentDuration < targetDuration * 0.8) {
      const remainingUnits = filteredUnits.filter(unit => !selectedUnits.includes(unit.id))
      for (const unit of remainingUnits) {
        if (currentDuration + unit.duration <= targetDuration * 1.2) {
          selectedUnits.push(unit.id)
          currentDuration += unit.duration
          break
        }
      }
    }
    
    return {
      name,
      description,
      total_duration: currentDuration,
      difficulty,
      category,
      units: selectedUnits,
      user_id: '', // This should be set by the calling code
    }
  }
  
  calculateOptimalTempo(units: Unit[]): number {
    // Calculate average tempo based on unit types and intensities
    const avgIntensity = units.reduce((sum, unit) => {
      const intensity = unit.category === 'cardio' ? 140 : 
                       unit.category === 'strength' ? 120 : 100
      return sum + intensity
    }, 0) / units.length
    
    return Math.round(avgIntensity)
  }
  
  suggestMusicGenre(category: string): string {
    const genreMap: Record<string, string> = {
      'cardio': 'electronic',
      'strength': 'rock',
      'flexibility': 'ambient',
      'mixed': 'pop'
    }
    
    return genreMap[category] || 'electronic'
  }
}

export const planCreationService = new PlanCreationService()
