import { z } from 'zod'

export const MovementSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  duration: z.number().positive(), // in seconds
  reps: z.number().positive().optional(),
  sets: z.number().positive().optional(),
  rest_duration: z.number().nonnegative().optional(), // in seconds
  equipment: z.array(z.string()).default([]),
  muscle_groups: z.array(z.string()).default([]),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
})

export const CreateMovementSchema = MovementSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

export const UpdateMovementSchema = CreateMovementSchema.partial()

export type Movement = z.infer<typeof MovementSchema>
export type CreateMovement = z.infer<typeof CreateMovementSchema>
export type UpdateMovement = z.infer<typeof UpdateMovementSchema>
