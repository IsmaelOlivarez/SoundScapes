import { z } from 'zod'

export const UnitSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  duration: z.number().positive(), // in minutes
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  category: z.enum(['strength', 'cardio', 'flexibility', 'mixed']),
  equipment: z.array(z.string()).default([]),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
})

export const CreateUnitSchema = UnitSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

export const UpdateUnitSchema = CreateUnitSchema.partial()

export type Unit = z.infer<typeof UnitSchema>
export type CreateUnit = z.infer<typeof CreateUnitSchema>
export type UpdateUnit = z.infer<typeof UpdateUnitSchema>
