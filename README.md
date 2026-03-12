# Next.js Static Website with ReactBits

A modern, static-generated web application built with **Next.js** and **ReactBits** UI component library.

## Overview

This project is a fancy dashboard showcasing my projects. Built with Next.js in static export mode and styled with ReactBits components, it features animated plasma backgrounds, splash cursor effects, and smooth transitions.

### Key Features

- ⚡ **Plasma Animated Background** - Dynamic, real-time canvas-based plasma effect
- ✨ **Splash Cursor** - Interactive cursor trails with particle effects
- 🎨 **ReactBits Components** - Beautiful glass-morphism design with gradients
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Fast Load Times** - Static HTML with optimized animations
- 🔍 **SEO Optimized** - Server-side rendering and metadata support
- 💅 **TailwindCSS** - Utility-first styling with custom animations
- 🎯 **Project Navigation** - Quick links to featured projects

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18.x or later
- **npm** (version 9+) or **yarn** (version 4+) or **pnpm** (version 8+)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/main-page.git
cd main-page
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

### 3. Install ReactBits

```bash
npm install reactbits
```

If you also need TailwindCSS styling:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Project Structure

```
main-page/
├── app/                        # Next.js app directory
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Main dashboard with animations
│   ├── globals.css            # Global styles and custom animations
├── components/                # React components
│   ├── Button.tsx             # Reusable button component
│   └── Card.tsx               # Reusable card component
├── public/                    # Static assets
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
├── next.config.js             # Next.js configuration for static export
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## Configuration

### Next.js Configuration

Ensure your `next.config.js` is configured for static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
```

## Development

### Start Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:3000`

### Features Walkthrough

#### 1. Plasma Background

The dashboard features a real-time animated plasma background using HTML5 Canvas:

- Dynamic gradient animations
- Smooth color transitions
- Performance optimized

#### 2. Splash Cursor

Interactive cursor animation that creates particle effects as you move the mouse:

- Real-time tracking
- Smooth particle animations
- Automatic cleanup

#### 3. Project Cards

Two featured projects with hover effects:

- **Profile Page** (`me.tue-truonga.work`) - Personal portfolio
- **Planning Poker App** (`planning-poker.tue-truonga.work`) - Agile estimation tool

#### 4. Glass Morphism Design

Modern glassmorphic UI with:

- Frosted glass backgrounds
- Backdrop blur effects
- Gradient borders
- Smooth transitions

### Using Components

```tsx
"use client";

import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked!")}>
      Click Me
    </Button>
  );
}
```

### Using ReactBits Components

This project implements custom ReactBits-style components with a modern glass-morphism design:

```tsx
// Example: Using the dashboard components
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Plasma Background */}
      <PlasmaBackground />

      {/* Splash Cursor */}
      <SplashCursor />

      {/* Project Cards */}
      <Card>
        <h2 className="gradient-text">My Project</h2>
        <p>Project description</p>
        <Button variant="primary">View Project</Button>
      </Card>
    </div>
  );
}
```

### Custom Animations & Effects

The dashboard includes several custom animations:

- **Plasma Background**: Real-time canvas animation with gradient effects
- **Splash Cursor**: Interactive particle effects on mouse movement
- **Gradient Text**: Animated gradient text effect
- **Glass Morphism**: Frosted glass effect with backdrop blur
- **Glow Animation**: Pulsing glow effect on hover
- **Float Animation**: Smooth floating motion

## Building for Production

### Generate Static HTML

```bash
npm run build
```

This command:

1. Builds the application
2. Pre-renders all pages to static HTML
3. Outputs files to the `.next/static` directory
4. Generates the `out/` directory with static files

### Verify Output

Check the `out/` directory for the static files:

```bash
ls -la out/
```

## Dashboard Features & Implementation

### Plasma Background Animation

The dashboard uses an HTML5 Canvas element to render a real-time plasma effect:

```tsx
// Located in: app/page.tsx > PlasmaBackground component
- Dynamic gradient calculations
- Multi-layer plasma rendering
- Smooth animations using requestAnimationFrame
- Responsive to window resizing
```

### Splash Cursor Effect

Interactive particle effects that follow the mouse cursor:

```tsx
// Located in: app/page.tsx > SplashCursor component
- Lightweight particle system
- Auto-cleanup of old splash effects
- Smooth animations with CSS
- Only renders on mouse movement
```

### Project Cards with Hover Effects

Beautiful project cards with gradient text and glass morphism:

```tsx
// Located in: app/page.tsx > ProjectCard component
- Gradient background on hover
- Animated gradient text
- Tag display with glassmorphic design
- Direct links to project URLs
```

### Custom CSS Classes

Available for styling throughout the application:

```css
.glass           /* Glassmorphic effect */
.glass-hover     /* Adds hover state to glass effect */
.gradient-text   /* Animated gradient text */
.glow            /* Pulsing glow animation */
.neon-border     /* Neon border with blur effect */
.shimmer         /* Shimmer animation */
.text-glow       /* Text shadow glow */
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `next.config.js` with your repository name:

```javascript
export default {
  output: "export",
  basePath: "/main-page", // Replace with your repo name
  assetPrefix: "/main-page/",
};
```

2. Build and deploy:

```bash
npm run build
git add out/
git commit -m "Deploy static site"
git push origin main
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### Deploy to AWS S3 + CloudFront

```bash
npm run build
aws s3 sync out/ s3://your-bucket-name/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static files)
- `npm run start` - Start production server (local testing)
- `npm run lint` - Run ESLint

## ReactBits Documentation

For detailed information about ReactBits components and usage:

- [ReactBits GitHub](https://github.com/mdesignscode/react-bits)
- [ReactBits Components](https://reactbits.vercel.app/)

## Troubleshooting

### Issue: Images not working in static export

**Solution:** Use `unoptimized: true` in `next.config.js` for static export

### Issue: Dynamic routes in static export

**Solution:** Use `generateStaticParams()` in route segments to pre-render dynamic routes

```typescript
export async function generateStaticParams() {
  return [{ slug: "page-1" }, { slug: "page-2" }];
}
```

### Issue: API routes not available in static export

**Solution:** Use API routes during build time or deploy to a platform that supports Edge Functions

## Best Practices

- ✅ Use `<Image>` component from Next.js with `unoptimized` flag
- ✅ Leverage static generation with `generateStaticParams()`
- ✅ Optimize bundle size by code-splitting components
- ✅ Use NextJS built-in SEO features
- ✅ Implement proper error boundaries
- ✅ Test before deployment with `npm run start`
- ✅ Keep animations performant - use CSS animations over JavaScript when possible
- ✅ Use `'use client'` directive for components with interactivity
- ✅ Minimize canvas rendering for better performance
- ✅ Test on mobile devices for responsive design

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions:

- Open an issue on GitHub
- Check existing issues and discussions
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Check [ReactBits Documentation](https://reactbits.vercel.app/)

---

**Last Updated:** March 2026
