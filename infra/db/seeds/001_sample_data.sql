-- Sample data for development and testing
-- This file contains seed data for the Gym SoundWaves application

-- Insert sample users (if not using Supabase Auth)
INSERT INTO users (id, email, name) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'demo@example.com', 'Demo User'),
  ('550e8400-e29b-41d4-a716-446655440001', 'trainer@example.com', 'Fitness Trainer');

-- Insert sample movements
INSERT INTO movements (id, name, description, duration, reps, sets, rest_duration, equipment, muscle_groups, difficulty, user_id) VALUES
  ('movement-001', 'Push-ups', 'Standard push-up exercise', 60, 15, 3, 30, '{}', '{"chest", "triceps", "shoulders"}', 'beginner', '550e8400-e29b-41d4-a716-446655440000'),
  ('movement-002', 'Squats', 'Bodyweight squat exercise', 45, 20, 3, 30, '{}', '{"quadriceps", "glutes", "hamstrings"}', 'beginner', '550e8400-e29b-41d4-a716-446655440000'),
  ('movement-003', 'Plank', 'Core strengthening exercise', 30, 1, 3, 30, '{}', '{"core", "shoulders"}', 'beginner', '550e8400-e29b-41d4-a716-446655440000'),
  ('movement-004', 'Burpees', 'Full body explosive exercise', 45, 10, 3, 60, '{}', '{"full body"}', 'intermediate', '550e8400-e29b-41d4-a716-446655440000'),
  ('movement-005', 'Mountain Climbers', 'Cardio and core exercise', 30, 20, 3, 30, '{}', '{"core", "cardio"}', 'intermediate', '550e8400-e29b-41d4-a716-446655440000'),
  ('movement-006', 'Pull-ups', 'Upper body pulling exercise', 60, 8, 3, 60, '{"pull-up bar"}', '{"back", "biceps", "shoulders"}', 'advanced', '550e8400-e29b-41d4-a716-446655440000');

-- Insert sample units
INSERT INTO units (id, name, description, duration, difficulty, category, equipment, user_id) VALUES
  ('unit-001', 'Upper Body Strength', 'Focus on chest, back, and arms', 30, 'beginner', 'strength', '{}', '550e8400-e29b-41d4-a716-446655440000'),
  ('unit-002', 'Lower Body Power', 'Legs and glutes workout', 25, 'intermediate', 'strength', '{}', '550e8400-e29b-41d4-a716-446655440000'),
  ('unit-003', 'Core Conditioning', 'Abdominal and core strengthening', 20, 'beginner', 'strength', '{}', '550e8400-e29b-41d4-a716-446655440000'),
  ('unit-004', 'HIIT Cardio', 'High-intensity interval training', 15, 'intermediate', 'cardio', '{}', '550e8400-e29b-41d4-a716-446655440000'),
  ('unit-005', 'Yoga Flow', 'Flexibility and mobility', 45, 'beginner', 'flexibility', '{"yoga mat"}', '550e8400-e29b-41d4-a716-446655440000'),
  ('unit-006', 'CrossFit WOD', 'High-intensity functional training', 20, 'advanced', 'mixed', '{"barbell", "kettlebell"}', '550e8400-e29b-41d4-a716-446655440000');

-- Insert sample plans
INSERT INTO plans (id, name, description, total_duration, difficulty, category, units, music_genre, music_tempo, user_id) VALUES
  ('plan-001', 'Morning Energizer', 'Quick morning workout to start your day', 30, 'beginner', 'mixed', '{"unit-001", "unit-003"}', 'electronic', 130, '550e8400-e29b-41d4-a716-446655440000'),
  ('plan-002', 'Strength Builder', 'Focus on building muscle strength', 45, 'intermediate', 'strength', '{"unit-001", "unit-002", "unit-006"}', 'rock', 120, '550e8400-e29b-41d4-a716-446655440000'),
  ('plan-003', 'Cardio Blast', 'High-intensity cardio session', 25, 'intermediate', 'cardio', '{"unit-004", "unit-005"}', 'electronic', 140, '550e8400-e29b-41d4-a716-446655440000'),
  ('plan-004', 'Flexibility Flow', 'Gentle stretching and mobility', 30, 'beginner', 'flexibility', '{"unit-005"}', 'ambient', 90, '550e8400-e29b-41d4-a716-446655440000'),
  ('plan-005', 'Beast Mode', 'Ultimate high-intensity workout', 60, 'advanced', 'mixed', '{"unit-001", "unit-002", "unit-004", "unit-006"}', 'metal', 160, '550e8400-e29b-41d4-a716-446655440000');
