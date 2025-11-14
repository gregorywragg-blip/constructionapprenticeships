# The DC/MD Union Trades Pathway

## Overview

This is a web application designed to help individuals in the DC and Maryland area find union construction apprenticeship opportunities and access support services. The platform serves as a comprehensive resource hub featuring:

- **Apprenticeship Program Directory**: A searchable database of 14 union construction programs across various trades (electrical, carpentry, plumbing, etc.)
- **BF-DC Apprenticeship Programs**: Comprehensive directory of 15 union programs from the DC Apprenticeship Program Grid with verified contact information and website links
- **Career Matching Quiz**: An AI-powered questionnaire to match users with appropriate apprenticeship programs based on their skills, interests, and preferences
- **Support Resources**: Directory of social services including housing assistance, food programs, drug/alcohol treatment, transportation, childcare, and healthcare
- **Resources & Guides**: Curated library of educational PDFs and guides for students, parents, and educators from TradesFutures and NABTU
- **Math Practice Center**: Interactive construction math practice with 50+ questions covering fractions, decimals, measurements, and geometry
- **MC3 Training Information**: Details about the Multi-Craft Core Curriculum pre-apprenticeship program
- **Raising the Bar Program**: Information about a free 6-week pre-apprenticeship cohort with hands-on training
- **Express Interest Form**: Embedded Google Form for users to express interest in apprenticeship programs

The application targets individuals seeking career opportunities in construction trades, emphasizing accessibility, clarity, and professional credibility to build trust with users who may be navigating challenging life circumstances.

## User Preferences

Preferred communication style: Simple, everyday language.

**Branding:**
- Site name: "The DC/MD Union Trades Pathway"
- Logo: CTWI (Construction Trades Workforce Initiative) logo
- Focus: Union construction apprenticeships in DC & Maryland

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using functional components and hooks

**Routing**: Wouter for lightweight client-side routing (alternatives considered: React Router - chose Wouter for smaller bundle size and simplicity)

**State Management**: 
- React Query (TanStack Query) for server state management
- Local component state with `useState` and `useContext` for UI state
- **Rationale**: Separates server and UI state concerns; React Query handles caching, invalidation, and background updates automatically

**UI Component Library**: 
- Shadcn/ui components built on Radix UI primitives
- Material Design principles with educational platform influences (LinkedIn Learning, Coursera)
- **Design System**: Custom Tailwind configuration with specific color tokens, typography scale (Roboto font family), and spacing primitives
- **Rationale**: Shadcn provides accessible, composable components that can be customized while Radix ensures WCAG compliance

**Styling Strategy**:
- Tailwind CSS with CSS variables for theming
- Custom design tokens defined in `index.css` for light/dark mode support
- Spacing uses standardized units (4, 6, 8, 12, 16, 20, 24px) for consistency
- **Pros**: Utility-first approach speeds development; design tokens enable theme flexibility
- **Cons**: Requires learning Tailwind conventions; can lead to verbose className strings

**Key Pages**:
- Home (`/`): Hero section with feature cards
- Raising the Bar (`/raising-the-bar`): 6-week pre-apprenticeship program information
- Programs (`/programs`): Filterable/searchable apprenticeship listings (14 union programs)
- Quiz (`/quiz`): Multi-step career matching questionnaire
- Support Services (`/resources`): Social services directory with needs assessment
- Resources & Guides (`/resources-guides`): Educational PDF library for students, parents, and educators
- MC3 (`/mc3`): Pre-apprenticeship program information
- Math (`/math`): Interactive math practice questions
- BF-DC (`/bf-dc`): Comprehensive directory of 15 DC-area union apprenticeship programs
- Express Interest (`/express-interest`): Embedded Google Form for program inquiries

### Backend Architecture

**Runtime**: Node.js with Express.js server

**Build Tool**: Vite for frontend bundling; esbuild for server-side bundling

**Server Structure**:
- Express application with middleware for JSON parsing and request logging
- Route registration system in `server/routes.ts` (currently minimal - API routes to be added)
- Custom Vite integration for development with HMR
- **Rationale**: Express provides mature, well-documented HTTP server; Vite offers fast development experience

**Storage Interface**:
- Abstract `IStorage` interface defined in `server/storage.ts`
- Currently implemented as in-memory storage (`MemStorage`)
- Designed for future database integration (Drizzle ORM configured for PostgreSQL)
- **Rationale**: Interface abstraction allows swapping storage implementations without changing application code

**Development vs Production**:
- Dev: Vite dev server with HMR, error overlays, and debugging tools
- Production: Static file serving from `dist/public` directory

### Data Storage Solutions

**ORM**: Drizzle ORM (v0.39.1) with Zod schema validation

**Database**: Configured for PostgreSQL via `@neondatabase/serverless` driver
- Connection via `DATABASE_URL` environment variable
- **Note**: Currently using in-memory storage; database integration pending

**Schema Definition**:
- Shared schema types in `shared/schema.ts`
- Example user table with UUID primary keys
- `createInsertSchema` from `drizzle-zod` for runtime validation
- **Rationale**: Type-safe database queries; Zod integration ensures runtime validation matches compile-time types

**Migration Strategy**:
- Migration files generated in `./migrations` directory
- `drizzle-kit push` command for schema synchronization
- **Pros**: Version-controlled schema changes; type safety throughout stack
- **Cons**: Requires manual migration management for complex changes

### Authentication and Authorization

**Current State**: Basic user schema defined but authentication not yet implemented

**Planned Approach**: 
- Session-based authentication likely (indicated by `connect-pg-simple` for PostgreSQL session store)
- User model includes username and password fields
- **Consideration**: Cookie-based sessions for simplicity; could migrate to JWT for stateless architecture if needed

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (accordion, dialog, dropdown, select, etc.) - Provides accessible, unstyled component primitives
- Lucide React - Icon library for consistent iconography
- Embla Carousel - Touch-friendly carousel implementation
- cmdk - Command palette component

**Utilities**:
- `class-variance-authority` - Type-safe variant APIs for components
- `clsx` + `tailwind-merge` - Conditional className composition
- `date-fns` - Date manipulation and formatting
- `nanoid` - Unique ID generation

**Form Handling**:
- React Hook Form - Form state management
- `@hookform/resolvers` - Validation schema integration

**Development Tools**:
- TypeScript for type safety across frontend and backend
- PostCSS with Tailwind CSS for styling
- Replit-specific plugins for runtime error handling and development banners

**Font Loading**:
- Google Fonts CDN for Roboto font family (preconnected for performance)

**Media/Assets**:
- YouTube embeds for video content (apprenticeship program videos)
- Generated images stored in `attached_assets/generated_images/` directory
- **Purpose**: Visual content for hero sections, program information, and educational materials

**Build Pipeline**:
- Vite for frontend development and production builds
- esbuild for server-side bundling (ESM format)
- `--packages=external` flag to exclude node_modules from server bundle
- **Output**: `dist/public/` for client assets, `dist/index.js` for server

**Path Aliases**:
- `@/*` → `client/src/*` for frontend code
- `@shared/*` → `shared/*` for shared types/schemas
- `@assets/*` → `attached_assets/*` for static assets
- **Rationale**: Clean imports; easier refactoring; prevents brittle relative paths