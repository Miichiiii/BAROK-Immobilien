# BAROK-IMMOBILIEN Website

## Overview
Premium real estate management website for BAROK-IMMOBILIEN, offering professional property management, renovation, facility services, contract optimization, real estate brokerage, and household assistance services in Germany.

## Project Architecture

### Frontend Stack
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query
- **Fonts**: Playfair Display (serif headlines), Inter (body text)

### Design System
- **Color Palette**:
  - Primary: Anthracite (#2C2C2C) / Warm Gold (#C9A86A)
  - Background: White / Dark variations
  - Accent: Gold for CTAs and highlights
- **Typography**: 
  - Headlines: Playfair Display (elegant serif)
  - Body: Inter (modern sans-serif)
- **Components**: shadcn/ui for premium, consistent UI

### Pages & Routes
1. **Home** (`/`) - Hero section, values, service overview, USP
2. **About** (`/ueber-uns`) - Company philosophy, mission, advantages
3. **Services** (`/leistungen`) - Detailed information about all 6 services:
   - Mietwohnungsverwaltung (Property Management)
   - Renovierung & Sanierung (Renovation & Refurbishment)
   - Facility Service (Facility Management)
   - Vertragsoptimierung (Contract Optimization)
   - Immobilienmaklerarbeiten (Real Estate Brokerage)
   - Haushaltsbetreuung (Household Assistance)
4. **Contact** (`/kontakt`) - Contact form and company information
5. **Impressum** (`/impressum`) - Legal information
6. **Datenschutz** (`/datenschutz`) - Privacy policy

### Contact Information
- **Phone**: +49 163 8435 195
- **Email**: info@barok-immobilien.de

## Backend

### Data Schema
- **Contact Submissions**: Stores contact form submissions (name, mobile, email, message)
- Validation using Zod schemas with German error messages

### Storage
- In-memory storage (MemStorage) for contact form data
- Ready to migrate to PostgreSQL if needed

## SEO Optimization
- German language meta tags
- Open Graph tags for social media
- Semantic HTML structure
- Descriptive page titles and meta descriptions
- Structured data ready for Local Business and Real Estate Service

## Recent Changes (2025-01-24)
- Generated premium real estate images (hero, renovation, office)
- Configured German language and SEO meta tags
- Built complete frontend with all 6 pages and navigation
- Implemented contact form with validation
- Created comprehensive German content for all services
- Added premium design with gold accents and professional styling

## Development Workflow
1. Frontend components in `client/src/pages/` and `client/src/components/`
2. Shared schema in `shared/schema.ts`
3. Backend routes in `server/routes.ts`
4. Storage interface in `server/storage.ts`

## User Preferences
- Premium, elegant design following luxury real estate standards
- Professional German language throughout
- Focus on trust, quality, and service excellence
- Mobile-responsive with smooth animations
