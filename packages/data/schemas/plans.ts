import { z } from 'zod'

export const PlanSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  total_duration: z.number().positive(), // in minutes
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  category: z.enum(['strength', 'cardio', 'flexibility', 'mixed']),
  units: z.array(z.string().uuid()), // unit IDs
  music_genre: z.string().optional(),
  music_tempo: z.number().positive().optional(), // BPM
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
})

export const CreatePlanSchema = PlanSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

export const UpdatePlanSchema = CreatePlanSchema.partial()

export type Plan = z.infer<typeof PlanSchema>
export type CreatePlan = z.infer<typeof CreatePlanSchema>
export type UpdatePlan = z.infer<typeof UpdatePlanSchema>
