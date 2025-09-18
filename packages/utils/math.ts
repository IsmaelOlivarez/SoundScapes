export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor
}

export const roundToNearest = (value: number, nearest: number): number => {
  return Math.round(value / nearest) * nearest
}

export const calculateBPM = (duration: number, beats: number): number => {
  // Calculate BPM from duration in seconds and number of beats
  return Math.round((beats * 60) / duration)
}

export const calculateCalories = (
  weight: number, // in kg
  duration: number, // in minutes
  intensity: 'low' | 'medium' | 'high'
): number => {
  const intensityMultipliers = {
    low: 3.5,
    medium: 5.0,
    high: 7.0,
  }
  
  const multiplier = intensityMultipliers[intensity]
  return Math.round(weight * duration * multiplier)
}

export const calculateWorkoutIntensity = (
  heartRate: number,
  maxHeartRate: number
): 'low' | 'medium' | 'high' => {
  const percentage = (heartRate / maxHeartRate) * 100
  
  if (percentage < 60) return 'low'
  if (percentage < 80) return 'medium'
  return 'high'
}
