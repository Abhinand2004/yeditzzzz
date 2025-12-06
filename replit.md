# Yadhukrishnan Portfolio Website

## Overview
A modern portfolio website for Yadhukrishnan, a Graphic Designer & Video Editor. Built with Next.js 14, Tailwind CSS, and Framer Motion for smooth animations. Features an elegant black and white color theme.

## Project Structure
```
src/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with Navbar
│   ├── page.tsx         # Home page (Hero, Posters, Videos, Footer)
│   ├── experience/
│   │   └── page.tsx     # Experience page
│   └── contact/
│       └── page.tsx     # Contact form page
└── components/
    ├── Navbar.tsx       # Navigation component
    ├── Hero.tsx         # Hero section with profile
    ├── PostersShowcase.tsx # Poster grid with modal
    ├── VideoShowcase.tsx   # YouTube video embeds
    └── Footer.tsx       # Footer component
```

## Key Features
- Full-screen hero section with grayscale profile image and Instagram link (@yedits)
- Poster gallery with modal functionality and grayscale-to-color hover effect
- 10 embedded YouTube video players
- Experience page with professional background
- Contact form with styled design
- Mobile-first responsive design
- Smooth animations using Framer Motion

## Running the Project
```bash
npm run dev    # Start development server on port 5000
npm run build  # Build for production
npm start      # Start production server
```

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Color Scheme (Black & White Theme)
- Primary: #000000 (pure black)
- Secondary: #0a0a0a (near black)
- Accent: #ffffff (pure white)
- Light: #f5f5f5 (off-white)
- Gray variations for text hierarchy

## Design Features
- Grayscale images with color on hover
- Subtle pattern overlay on hero section
- White accent buttons on dark backgrounds
- Clean typography with tracking/letter-spacing
- Minimal borders with white/10 opacity

## Notes
- Demo images from Unsplash and Picsum are used as placeholders
- Demo YouTube video IDs are used for video showcase
- Contact form is client-side only (no backend submission)
