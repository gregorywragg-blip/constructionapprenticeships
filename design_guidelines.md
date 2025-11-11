# Design Guidelines: DC/Maryland Construction Apprenticeship Platform

## Design Approach

**Selected Approach:** Material Design System with educational platform influences (LinkedIn Learning, Coursera)

**Rationale:** This utility-focused, information-dense application prioritizes usability and accessibility for users seeking career opportunities and support services. Material Design provides clear hierarchy, strong interactive feedback, and proven patterns for data-heavy interfaces.

**Key Design Principles:**
- Clarity and accessibility for diverse user base
- Professional credibility to build trust
- Efficient information discovery
- Encouraging and supportive tone through design

---

## Core Design Elements

### A. Typography

**Font Family:** Roboto (via Google Fonts CDN)

**Type Scale:**
- **Display/Hero Headlines:** 48px (3rem), Bold (700)
- **Section Headers:** 32px (2rem), Medium (500)
- **Card Titles:** 24px (1.5rem), Medium (500)
- **Subsection Headers:** 20px (1.25rem), Medium (500)
- **Body Text:** 16px (1rem), Regular (400)
- **Small Text/Captions:** 14px (0.875rem), Regular (400)
- **Button Text:** 16px (1rem), Medium (500)

**Line Height:** 1.5 for body text, 1.2 for headlines

---

### B. Layout System

**Spacing Primitives (Tailwind):** Use units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-6, mt-8, py-12, mb-16, px-20, py-24)

**Container Strategy:**
- Full-width sections with inner `max-w-7xl mx-auto px-6`
- Content sections: Consistent `py-16` desktop, `py-12` mobile
- Card padding: `p-6`
- Form fields: `p-4` internal padding

**Grid Patterns:**
- Apprenticeship listings: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Resource cards: `grid-cols-1 md:grid-cols-2 gap-6`
- Math practice: Single column with sidebar on desktop `grid-cols-1 lg:grid-cols-3`

---

### C. Component Library

**Navigation:**
- Sticky header with site logo, primary navigation links (Programs, Career Quiz, Resources, MC3 Info, Math Practice, About)
- Prominent "Get Started" CTA button in header
- Mobile: Hamburger menu with full-screen overlay

**Hero Section:**
- Large aspirational image (1920x800px) showing construction apprentices/workers in action
- Centered headline overlay with semi-transparent backdrop blur on text container
- Two CTAs: Primary "Find Your Apprenticeship" + Secondary "Take Career Quiz"
- Brief subtitle describing the platform's purpose

**Search & Filters:**
- Prominent search bar with icon (Heroicons magnifying glass)
- Filter chips/tags for trade type, location (DC/MD), timeline, requirements
- Sort dropdown (alphabetical, deadline, trade type)

**Program Cards:**
- Elevated cards with subtle shadow
- Program logo/icon at top
- Trade name as card title
- Key info badges (location, timeline, next deadline)
- Contact button and "Learn More" link
- Consistent card height with flex layout

**Quiz Interface:**
- Progress indicator showing step X of Y
- Large question text
- Radio buttons or card-based selection for answers
- Navigation: "Back" and "Next" buttons
- Results page with matched programs in ranked order with explanation

**Resource Cards:**
- Icon representing service type (housing, health, food)
- Organization name and description
- Contact information prominently displayed
- "Get Help" CTA button

**Math Practice:**
- Question counter and topic tags
- Clear problem statement with diagram support
- Multiple choice or input field for answers
- Immediate feedback with explanation
- Step-by-step tutorial accordion
- Progress tracking

**Forms:**
- Clean, single-column layout
- Label above input pattern
- Input fields with border, adequate padding (p-4)
- Helper text below fields when needed
- Clear error states with inline validation
- Accessible form controls

**Buttons:**
- Primary: Filled, Medium (500) weight text
- Secondary: Outlined with border
- Text links: Underline on hover
- Consistent padding: `px-6 py-3`
- Rounded corners: `rounded-lg`

**Data Display:**
- Tables for comparing programs (responsive, stacked on mobile)
- Stats/metrics in highlighted cards
- Timeline visualization for program progression
- Accordion for FAQ sections

---

### D. Animations

Use sparingly for functional feedback only:
- Smooth scroll behavior for anchor links
- Subtle fade-in for cards on load (once, not on scroll)
- Button hover: Slight scale (1.02) or shadow increase
- Accordion expand/collapse: Smooth height transition
- No scroll-triggered animations or parallax effects

---

## Images

**Hero Image:**
- Large, inspiring photograph (1920x800px minimum) showing construction apprentices or skilled workers on a jobsite
- Should depict diversity and professionalism
- Placement: Full-width at top of homepage
- Overlay: Dark gradient or semi-transparent overlay to ensure text readability

**Section Support Images:**
- MC3 Training section: Photo of classroom or hands-on training
- Raising the Bar section: Group photo of cohort participants
- Testimonial section: Headshots of successful apprentices
- All images should convey professionalism, opportunity, and inclusion