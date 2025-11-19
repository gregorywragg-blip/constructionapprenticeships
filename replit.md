# The DC/MD Union Trades Pathway

## Overview

This web application helps individuals in the DC and Maryland area find union construction apprenticeship opportunities and support services. It functions as a comprehensive resource hub featuring an apprenticeship program directory, an AI-powered career matching quiz, directories for social services, educational resources, a math practice center, and information on pre-apprenticeship programs. The platform aims to be accessible, clear, and credible for users seeking career paths in construction trades.

## Recent Changes (November 19, 2025)

- **Supportive Services Redesign with PDF Viewers**: Completely redesigned the Support Services page (/resources) with embedded PDF viewers for 13 barrier resources. Users can click any barrier category card to view the full resource guide in an embedded PDF viewer below. Only one PDF displays at a time with clear "Selected" badge. Implemented custom route handler in server/index.ts (`app.get('/attached_assets/*')`) to serve PDFs before Vite middleware intercepts requests. Route handler decodes URL paths using `decodeURIComponent()` to handle special characters (spaces, apostrophes). All 13 PDFs stored in attached_assets/ directory and accessible via embedded viewers. Categories: Car Ownership, Quit Cannabis, Driver's License, Quit Alcohol/Drugs, Shelter, Healthcare, Childcare, Food Assistance, Record Expungement, Transportation, Vital Documents, Work Gear, Adult Education. Updated Driver's License PDF with latest workforce development programs.
- **Math Practice Auto-Scroll**: Implemented automatic scrolling to the next unanswered question when a user completes a question on the Math Practice page. When a user submits an answer (correct or incorrect), the page smoothly scrolls to center the next unanswered question in the viewport, helping users maintain momentum through all 35 questions without manual scrolling. Uses sequential progression logic to find the next question after the one just completed.
- **Interview Questions Page**: Renamed "Behavior Check-Up" page to "Interview Questions" (navigation menu and page heading updated). The page remains at /behavior-check and displays 12 sample behavioral interview questions with skills assessed, great responses (green styling), and poor responses (red styling). Includes proper dark mode support with accessible color contrast.
- **Authentication Requirement**: All pages require login to access. Users must authenticate before viewing any content including home, programs, quiz, resources, and all other pages. Authentication check happens at the app level in AuthenticatedApp component.
- **Expectation Check Interactive Checkboxes**: Added interactive Yes/No checkboxes to all 6 soft skills self-assessments on the Expectation Check page. Users can toggle between Yes, No, and unset (neutral) states. When any skill is answered "No", a prominent disclaimer appears at the bottom of the soft skills section (not a popup) warning that these skills are mandatory for success and encouraging users to develop them before applying. The disclaimer is visible immediately without scrolling and automatically disappears when all No answers are changed back to Yes or cleared.
- **Expectation Check Page**: Created new page at /expectation-check that outlines the apprentice mindset, soft skills checklist, and zero tolerance policies. The page includes clickable links to Career Quiz and MC3 Info pages, helping users understand the behavioral expectations and work ethic required for apprenticeship success.
- **Activity Logs Page (CTW Login)**: Created new "My Activity" page at /ctw_login where user "gwragg" can view all users' login, logout, and page visit history from the database. The page displays activity in a table format with timestamps, usernames, page names, and session duration details. Access is restricted to gwragg only - other users cannot see the navigation link and are blocked from accessing the page (403 Forbidden).
- **Database Migration for Activity Logging**: Converted activity logging from CSV files to PostgreSQL database storage to ensure persistence across production deployments (Replit's ephemeral file system was causing logs to be lost on republish)
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

Key pages include: Home, Raising the Bar, Expectation Check, Programs, Quiz, Support Services, Resources & Guides, MC3, Math, BF-DC, Express Interest, and My Activity (CTW Login).

### Backend Architecture

The backend utilizes Node.js with Express.js. Vite handles frontend bundling, while esbuild is used for server-side bundling. An abstract `IStorage` interface is defined for data storage, implemented with `DatabaseStorage` class using PostgreSQL via Drizzle ORM.

### Data Storage Solutions

Drizzle ORM (v0.39.1) with Zod schema validation is configured for PostgreSQL using the `@neondatabase/serverless` driver. Shared schema types ensure type-safe database queries. A migration strategy using `drizzle-kit` is in place for schema synchronization.

**Database Schema:**
- `activity_logs` table: Stores user activity (login, logout, page visits) with UUID primary key, timestamp, username, page, and details fields
- Migration command: `npm run db:push` (applies schema changes to database)

### Authentication and Authorization

Session-based authentication is implemented using Express sessions with an in-memory store for development. Frontend authentication is managed via a centralized `AuthContext` using React Query to check auth status (`/api/check-auth`). This provides app-level protection, ensuring all routes require authentication before rendering. Users must log in to access any page on the site.

### Activity Logging

User activity is logged to the PostgreSQL database (`activity_logs` table) ensuring persistence across production deployments. An API endpoint (`POST /api/log-activity`) receives activity data from the frontend, requiring authentication and validating requests with Zod. A `usePageLogger` hook automatically logs page visits for authenticated users.

**Logged Events:**
- **Login**: User login with timestamp
- **Page Visits**: Automatic logging when visiting `/`, `/page1`, and `/page2`
- **Logout**: Session termination with calculated total session duration (formatted as "Xh Ym Zs")

The logout endpoint (`POST /api/logout`) calculates the elapsed time from `login_time` (stored in session) to logout time, formats it as a human-readable duration string, and logs it to the database. Error handling: Login and page visit logging failures return 500 errors; logout logging failures are logged to console but still allow the user to log out (prioritizing user intent over activity tracking).

**Viewing Activity Logs:**
- Only user "gwragg" can view activity logs at `/ctw_login` (labeled "My Activity" in navigation)
- API endpoint `GET /api/activity-logs` returns all activity logs but only for user gwragg (returns 403 for other users)
- Logs displayed in a table format showing timestamp, username, page/action, and details
- Navigation link only visible when logged in as gwragg
- Other users are automatically redirected to home page if they attempt to access the page

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