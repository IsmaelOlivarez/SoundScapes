# Database Setup

This directory contains database migrations, seeds, and related files for the Gym SoundWaves application.

## Structure

- `migrations/` - SQL migration files for database schema changes
- `seeds/` - Sample data for development and testing
- `README.md` - This file

## Setup

### Using Supabase

1. Create a new Supabase project
2. Run the migration files in order:
   ```sql
   -- Run 001_initial_schema.sql first
   -- Then run any additional migrations
   ```
3. Optionally run the seed data:
   ```sql
   -- Run 001_sample_data.sql for development data
   ```

### Local Development

If running locally with PostgreSQL:

1. Create a database
2. Run migrations:
   ```bash
   psql -d your_database -f migrations/001_initial_schema.sql
   ```
3. Add sample data:
   ```bash
   psql -d your_database -f seeds/001_sample_data.sql
   ```

## Schema Overview

### Tables

- `users` - User accounts and profiles
- `units` - Individual workout units/exercises
- `movements` - Specific movement patterns
- `plans` - Workout plans containing multiple units

### Key Features

- UUID primary keys
- Timestamps with automatic updates
- Proper foreign key relationships
- Indexes for performance
- Check constraints for data validation

## Environment Variables

Make sure to set these in your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```
