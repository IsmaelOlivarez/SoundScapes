import { z } from 'zod'

// Auth validation schemas
export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Workout validation schemas
export const createWorkoutSessionSchema = z.object({
  planId: z.string().uuid('Invalid plan ID'),
  startTime: z.string().datetime(),
  notes: z.string().optional(),
})

export const updateWorkoutSessionSchema = z.object({
  endTime: z.string().datetime().optional(),
  notes: z.string().optional(),
  completed: z.boolean().optional(),
})

// Music generation validation
export const musicGenerationSchema = z.object({
  planId: z.string().uuid('Invalid plan ID'),
  duration: z.number().positive('Duration must be positive'),
  genre: z.string().optional(),
  tempo: z.number().positive('Tempo must be positive').optional(),
  intensity: z.enum(['low', 'medium', 'high']),
})

export type SignInInput = z.infer<typeof signInSchema>
export type SignUpInput = z.infer<typeof signUpSchema>
export type CreateWorkoutSessionInput = z.infer<typeof createWorkoutSessionSchema>
export type UpdateWorkoutSessionInput = z.infer<typeof updateWorkoutSessionSchema>
export type MusicGenerationInput = z.infer<typeof musicGenerationSchema>
