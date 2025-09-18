// Application constants and configuration

export const APP_CONFIG = {
  name: 'Gym SoundWaves',
  description: 'AI-powered workout music generation for your fitness journey',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const

export const WORKOUT_CATEGORIES = [
  { value: 'strength', label: 'Strength', color: 'bg-red-500' },
  { value: 'cardio', label: 'Cardio', color: 'bg-blue-500' },
  { value: 'flexibility', label: 'Flexibility', color: 'bg-green-500' },
  { value: 'mixed', label: 'Mixed', color: 'bg-purple-500' },
] as const

export const DIFFICULTY_LEVELS = [
  { value: 'beginner', label: 'Beginner', color: 'bg-green-100 text-green-800' },
  { value: 'intermediate', label: 'Intermediate', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'advanced', label: 'Advanced', color: 'bg-red-100 text-red-800' },
] as const

export const MUSIC_GENRES = [
  'electronic',
  'rock',
  'pop',
  'hip-hop',
  'ambient',
  'metal',
  'classical',
  'jazz',
] as const

export const INTENSITY_LEVELS = [
  { value: 'low', label: 'Low', bpm: 100, color: 'bg-green-500' },
  { value: 'medium', label: 'Medium', bpm: 130, color: 'bg-yellow-500' },
  { value: 'high', label: 'High', bpm: 160, color: 'bg-red-500' },
] as const

export const EQUIPMENT_OPTIONS = [
  'dumbbells',
  'barbell',
  'kettlebell',
  'resistance bands',
  'yoga mat',
  'pull-up bar',
  'bench',
  'medicine ball',
  'jump rope',
  'none',
] as const

export const MUSCLE_GROUPS = [
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'forearms',
  'core',
  'quadriceps',
  'hamstrings',
  'glutes',
  'calves',
  'full body',
] as const

export const API_ENDPOINTS = {
  units: '/api/units',
  plans: '/api/plans',
  movements: '/api/movements',
  music: {
    generate: '/api/music/generate',
    track: '/api/music/track',
  },
} as const

export const STORAGE_KEYS = {
  user: 'gym-soundwaves-user',
  preferences: 'gym-soundwaves-preferences',
  workoutHistory: 'gym-soundwaves-workout-history',
} as const
