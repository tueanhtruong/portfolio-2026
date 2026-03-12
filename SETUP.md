# Quick Setup Guide

This guide will help you get the dashboard running locally in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment Variables (Optional)

```bash
cp .env.example .env.local
```

Edit `.env.local` to customize your settings.

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start

# Run ESLint
npm run lint
```

## Project Structure

- **app/** - Next.js app directory with main dashboard
- **components/** - Reusable React components
- **public/** - Static assets
- **app/globals.css** - Global styles and animations

## Key Features

### Plasma Background

A dynamic canvas-based animation effect that runs continuously.

### Splash Cursor

Interactive particle effects that follow your mouse cursor.

### Project Cards

Two featured projects with direct links:

- Profile: `me.tue-truonga.work`
- Planning Poker: `planning-poker.tue-truonga.work`

## Customization

### Change Project Links

Edit [app/page.tsx](app/page.tsx) and update the `link` prop in `ProjectCard` components:

```tsx
<ProjectCard
  title="Your Project"
  link="https://your-project-url.com"
  // ... other props
/>
```

### Customize Colors

Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```javascript
colors: {
  'neon-blue': '#0ea5e9',
  'neon-purple': '#a855f7',
  'neon-pink': '#ec4899',
}
```

### Modify Animations

Update animation names and keyframes in [app/globals.css](app/globals.css)

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Issues

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Performance Issues

- Check browser DevTools for slow animations
- Reduce canvas quality if needed
- Disable splash cursor if needed by commenting it out in page.tsx

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect your GitHub repo and set build command to `npm run build` and publish directory to `out`
- **GitHub Pages**: See README.md for detailed instructions

## Support

For issues or questions:

1. Check the [README.md](README.md) for detailed documentation
2. Review the code comments in [app/page.tsx](app/page.tsx)
3. Check Next.js documentation: https://nextjs.org/docs
