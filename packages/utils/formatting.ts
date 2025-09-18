import { capitalize, kebabCase, camelCase } from 'lodash'

export const formatWorkoutName = (name: string): string => {
  return capitalize(name.replace(/_/g, ' '))
}

export const formatCategory = (category: string): string => {
  return capitalize(category)
}

export const formatDifficulty = (difficulty: string): string => {
  return capitalize(difficulty)
}

export const slugify = (text: string): string => {
  return kebabCase(text)
}

export const camelCaseKeys = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(obj)) {
    result[camelCase(key)] = value
  }
  
  return result
}

export const formatNumber = (num: number, decimals: number = 0): string => {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export const formatPercentage = (value: number, total: number): string => {
  const percentage = (value / total) * 100
  return `${formatNumber(percentage, 1)}%`
}
