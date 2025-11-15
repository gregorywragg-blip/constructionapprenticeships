# The DC/MD Union Trades Pathway

## Overview

This web application helps individuals in the DC and Maryland area find union construction apprenticeship opportunities and support services. It functions as a comprehensive resource hub featuring an apprenticeship program directory, an AI-powered career matching quiz, directories for social services, educational resources, a math practice center, and information on pre-apprenticeship programs. The platform aims to be accessible, clear, and credible for users seeking career paths in construction trades.

## Recent Changes (November 15, 2025)

- **Production Login Fix**: Added `app.set('trust proxy', 1)` configuration to enable secure session cookies behind Replit's HTTPS proxy in production
- **Express Interest**: Restored to main navigation menu (visible to all users regardless of auth status)
- **Career Quiz Fix**: Implemented intelligent matching algorithm that scores all 14 apprenticeship programs based on quiz answers (environment preference, hands-on style, heights comfort, interests, precision work) and returns personalized top 4 recommendations with detailed explanations
- **Quiz Navigation Fix**: Added onClick handlers to "View All Programs" and "View Program Details" buttons so they properly navigate to the programs page instead of restarting the quiz

## User Preferences

Preferred communication style: Simple, everyday language.

**Branding:**
- Site name: "The DC/MD Union Trades Pathway"
- Logo: CTWI (Construction Trades Workforce Initiative) logo
- Color scheme: Burgundy/maroon (hue 350, saturation 65%) matching CTWI.org branding
- Header: Dark burgundy background with white text (matching CTWI.org header)
- Focus: Union construction apprenticeships in DC & Maryland

## System Architecture

### Frontend Architecture

The frontend is built with React 18+ (TypeScript, functional components, hooks) using Wouter for client-side routing. State management combines React Query for server state and local component state for UI. The UI is constructed with Shadcn/ui components (based on Radix UI) and styled using Tailwind CSS with custom design tokens for a burgundy color scheme and consistent typography (Roboto font family).

Key pages include: Home, Raising the Bar, Programs, Quiz, Support Services, Resources & Guides, MC3, Math, BF-DC, and Express Interest.

### Backend Architecture

The backend utilizes Node.js with Express.js. Vite handles frontend bundling, while esbuild is used for server-side bundling. An abstract `IStorage` interface is defined for data storage, currently implemented with in-memory storage but designed for future PostgreSQL integration via Drizzle ORM.

### Data Storage Solutions

Drizzle ORM (v0.39.1) with Zod schema validation is configured for PostgreSQL using the `@neondatabase/serverless` driver. Shared schema types ensure type-safe database queries. A migration strategy using `drizzle-kit` is in place for schema synchronization.

### Authentication and Authorization

Session-based authentication is implemented using Express sessions with an in-memory store for development. Frontend authentication is managed via a centralized `AuthContext` using React Query to check auth status (`/api/check-auth`). This provides app-level and page-level protection, ensuring routes only render when authentication is confirmed and preventing stale cache vulnerabilities. Protected routes include `/page1` and `/page2`.

### Activity Logging

User activity is logged to a local `activity_log.csv` file using a custom `csvLogger` utility. An API endpoint (`POST /api/log-activity`) receives activity data from the frontend, requiring authentication and validating requests with Zod. A `usePageLogger` hook automatically logs page visits for authenticated users.

**Logged Events:**
- **Login**: User login with timestamp
- **Page Visits**: Automatic logging when visiting `/`, `/page1`, and `/page2`
- **Logout**: Session termination with calculated total session duration (formatted as "Xh Ym Zs")

The logout endpoint (`POST /api/logout`) calculates the elapsed time from `login_time` (stored in session) to logout time, formats it as a human-readable duration string, and logs it to CSV before destroying the session.

## External Dependencies

**UI Component Libraries**:
- Radix UI primitives
- Lucide React
- Embla Carousel
- cmdk

**Utilities**:
- `class-variance-authority`
- `clsx` + `tailwind-merge`
- `date-fns`
- `nanoid`

**Form Handling**:
- React Hook Form
- `@hookform/resolvers`

**Development Tools**:
- TypeScript
- PostCSS with Tailwind CSS

**Font Loading**:
- Google Fonts CDN (Roboto)

**Media/Assets**:
- YouTube embeds
- Images from `attached_assets/generated_images/`

**Build Pipeline**:
- Vite (frontend)
- esbuild (server-side)