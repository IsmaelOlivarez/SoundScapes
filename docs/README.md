# Gym SoundWaves

AI-powered workout music generation for your fitness journey.

## Architecture

This is a monorepo containing both web and mobile applications, along with shared packages and infrastructure.

### Structure

```
gym-soundwaves/
├── apps/
│   ├── web/               # Next.js 15 PWA (MVP)
│   └── mobile/            # Expo React Native (Phase 2)
├── packages/
│   ├── data/              # Shared business logic
│   ├── ui/                # Shared design system
│   └── utils/             # Cross-platform utilities
├── infra/
│   ├── db/                # Database migrations
│   ├── functions/         # Supabase Edge Functions
│   └── workflows/         # GitHub Actions
└── docs/                  # Documentation
```

## Tech Stack

### Phase 1 (MVP Web)
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** + **shadcn/ui** for styling
- **TanStack Query** for data fetching
- **React Hook Form** + **Zod** for forms
- **Supabase** for backend

### Phase 2 (Mobile)
- **Expo React Native** with Expo Router
- **NativeWind** for styling
- Shared packages from Phase 1

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Fill in your Supabase credentials
   ```

4. Start development servers:
   ```bash
   # Web app
   pnpm web:dev
   
   # Mobile app (Phase 2)
   pnpm mobile:dev
   ```

## Development

### Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages
- `pnpm lint` - Lint all packages
- `pnpm type-check` - Type check all packages
- `pnpm test` - Run all tests

### Package Scripts

- `pnpm web:dev` - Start web development server
- `pnpm mobile:dev` - Start mobile development server

## Deployment

### Web App
The web app is deployed to Vercel automatically on push to main branch.

### Mobile App
The mobile app can be built and deployed to app stores using Expo's build service.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
