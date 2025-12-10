# William Hoffman - Personal Website

A modern, single-page personal website built with Next.js, React, and Tailwind CSS.

## Features

- Clean, minimalist design with dark theme
- Animated floating dots background
- Fully responsive across all devices
- Smooth scroll navigation
- Optimized performance with Next.js App Router
- TypeScript for type safety

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Canvas API for background animation

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
whoffmandev/
├── app/
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── BackgroundDots.tsx  # Animated background component
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact section
└── public/                 # Static assets
```

## Customization

### Update Content

Edit the component files in `/components` to update:
- Personal information in `Hero.tsx`
- Bio and focus areas in `About.tsx`
- Project list in `Projects.tsx`
- Contact details and social links in `Contact.tsx`

### Styling

All styling uses Tailwind CSS utility classes. The color scheme uses:
- Background: `neutral-900` to `neutral-950`
- Text: `neutral-100` to `neutral-400`
- Accents: Customizable in components

### Background Animation

Adjust the floating dots in `BackgroundDots.tsx`:
- Dot count: Modify the `dotCount` calculation
- Speed: Change `vx` and `vy` values
- Opacity: Adjust `fillStyle` alpha value

## Performance

- Lightweight bundle with no external UI libraries
- Optimized animations using `requestAnimationFrame`
- Server-side rendering with Next.js
- Automatic image optimization
- Code splitting by route

## Deployment

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to any hosting platform that supports Next.js.

## License

ISC
