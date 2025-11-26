# DC/MD Union Trades Pathway - Fork Setup Guide

This guide will help you set up a forked copy of the DC/MD Union Trades Pathway application.

---

## Quick Start Checklist

After forking/remixing this app, complete these steps:

- [ ] Create a PostgreSQL database
- [ ] Set up the SESSION_SECRET
- [ ] Run the database migration
- [ ] Test the login

---

## Step 1: Create a PostgreSQL Database

1. In your new forked Repl, look for the **"Database"** or **"PostgreSQL"** option in the Tools panel
2. Click to create a new PostgreSQL database
3. Replit will automatically set these environment variables for you:
   - `DATABASE_URL`
   - `PGHOST`
   - `PGPORT`
   - `PGUSER`
   - `PGPASSWORD`
   - `PGDATABASE`

---

## Step 2: Set Up SESSION_SECRET

You need to create a secret key for user sessions:

1. Go to the **Secrets** tab (lock icon) in your Repl
2. Add a new secret:
   - **Key:** `SESSION_SECRET`
   - **Value:** Any random string (e.g., `my-super-secret-session-key-2024`)
   
**Tip:** Use a long, random string for better security.

---

## Step 3: Run Database Migration

Open the Shell and run:

```bash
npm run db:push
```

This creates the database tables:
- `users` - User accounts (not currently used, auth is hardcoded)
- `activity_logs` - Tracks user login/logout and page visits

---

## Step 4: Start the Application

The app should start automatically. If not, run:

```bash
npm run dev
```

The app will be available at your Repl's URL on port 5000.

---

## Login Credentials

The app uses hardcoded authentication. Valid logins are:

| Username | Password |
|----------|----------|
| beli     | hiregreg |
| jamie    | hiregreg |
| wallace  | hiregreg |
| megan    | hiregreg |
| sandra   | hiregreg |
| gwragg   | hiregreg |

**Note:** Only the `gwragg` user can access the "My Activity" page that shows all user activity logs.

---

## Customizing Login Credentials

To change the valid users or password, edit `server/routes.ts`:

```typescript
// Line 6-7
const VALID_USERS = ['beli', 'jamie', 'wallace', 'megan', 'sandra', 'gwragg'];
const VALID_PASSWORD = 'hiregreg';
```

---

## Application Features

### Pages Included:
1. **Home** (`/`) - Welcome page with overview
2. **Apprenticeships** (`/programs`) - 14 union apprenticeship programs with videos
3. **Career Quiz** (`/quiz`) - AI-powered career matching quiz
4. **Raising the Bar Program** (`/raising-the-bar`) - Pre-apprenticeship program info
5. **Expectation Check** (`/expectation-check`) - Soft skills self-assessment
6. **Interview Questions** (`/behavior-check`) - 12 sample behavioral interview questions
7. **MC3 Info** (`/mc3`) - MC3 training information
8. **Resources & Guides** (`/resources-guides`) - Educational resources
9. **Math Practice** (`/math`) - 35+ construction math practice questions
10. **Supportive Services** (`/resources`) - 13 barrier resource PDFs with embedded viewers
11. **BF-DC** (`/bfdc`) - BF-DC section
12. **Express Interest** (`/express-interest`) - Interest form
13. **My Activity** (`/ctw_login`) - Admin-only activity logs (gwragg only)

### Key Features:
- Session-based authentication (all pages require login)
- PostgreSQL activity logging (login, logout, page visits)
- Embedded PDF viewers for 13 supportive service resources
- Auto-scroll math practice
- Interactive expectation check with Yes/No toggles
- Responsive design with CTWI burgundy branding

---

## File Structure

```
client/src/
├── pages/           # All page components
├── components/      # Reusable components (Header, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and API client
└── App.tsx          # Main app with routing

server/
├── index.ts         # Express server setup
├── routes.ts        # API endpoints and authentication
└── storage.ts       # Database storage interface

shared/
└── schema.ts        # Database schema (Drizzle ORM)

attached_assets/     # PDF files for Supportive Services
```

---

## PDF Resources Included

The `attached_assets/` folder contains 13 barrier resource PDFs:
1. Car Ownership & Repair Assistance
2. Quit Cannabis
3. Obtain Driver's License
4. Quit Alcohol/Drugs
5. Find Shelter
6. Healthcare
7. Childcare
8. Food Assistance
9. Record Expungement
10. Transportation
11. Vital Documents
12. Work Gear
13. Adult Education

---

## Troubleshooting

### "Cannot connect to database"
- Make sure you created a PostgreSQL database in the Tools panel
- Check that DATABASE_URL is set in your Secrets

### "Session errors" or "Login not working"
- Make sure SESSION_SECRET is set in your Secrets
- Try restarting the application

### "PDFs not loading"
- The PDF files are in the `attached_assets/` folder
- Make sure the files were included when you forked

### Pages show "Not Found"
- Run `npm run dev` to start the development server
- Make sure the workflow "Start application" is running

---

## Need Help?

If you encounter issues:
1. Check the Shell/Console for error messages
2. Verify all environment secrets are set
3. Make sure the database was created and migrated

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (via Drizzle ORM)
- **Bundler:** Vite
- **Routing:** Wouter

---

*Last updated: November 2025*
