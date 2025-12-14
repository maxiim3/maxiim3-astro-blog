---
title: "JavaScript etc. Portfolio"
description: "A modern portfolio and blog built with Astro 5, featuring multi-framework support and a Deep Space theme"
pubDate: 2025-12-14
heroImage: "/images/projects/portfolio-hero.jpg"
tags: ["portfolio", "blog", "open-source"]
stack: ["Astro 5", "TypeScript", "TailwindCSS 4", "DaisyUI", "React", "Vue", "Svelte"]
demoUrl: "https://example.com"
repoUrl: "https://github.com/maxiim3/javascript-etc-project"
---

## Overview

This portfolio project showcases a modern, multi-framework approach to building static sites using Astro 5. It combines the best of multiple UI frameworks while maintaining excellent performance and developer experience.

## Key Features

### Multi-Framework Architecture

The site leverages Astro's unique ability to mix and match different UI frameworks:

- **React** components for complex interactive features
- **Vue** components for reactive forms and data displays
- **Svelte** components for lightweight, performant UI elements
- **Astro** components for static, server-rendered content

### Content Collections

Structured content management using Astro's Content Collections API:

- Blog posts with MDX support
- Code snippets library
- Project showcase (this very page!)
- Full TypeScript type safety with Zod schemas

### Design System

Beautiful, consistent design powered by:

- **Deep Space Theme** - A custom DaisyUI theme inspired by space exploration
- **TailwindCSS 4** - Latest utility-first CSS framework
- **Space Grotesk** typography - Modern, readable font family
- **Gold accent colors** - Distinctive hover effects and highlights

### Internationalization

Full i18n support with:

- English and French locales
- Automatic route generation per language
- Type-safe translation functions
- SEO-friendly lang attributes

### Developer Experience

Built with modern best practices:

- **TypeScript** everywhere for type safety
- **Vite** for lightning-fast hot module replacement
- **ESLint + Prettier** for code quality
- **Git hooks** for pre-commit checks

## Technical Highlights

### Performance Optimizations

- Static site generation for instant page loads
- Lazy loading images with native browser features
- Minimal JavaScript shipped to the client
- Optimized asset bundling with Vite

### Accessibility

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Skip-to-content links
- Color contrast compliance

### SEO

- Automatic sitemap generation
- RSS feed for blog posts
- OpenGraph and Twitter Card meta tags
- Structured data with JSON-LD

## Project Structure

```
maxiim3-astro-blog/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── blog/         # Blog-specific components
│   │   ├── projects/     # Project cards and layouts
│   │   └── ...
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (MDX)
│   │   ├── projects/     # Project descriptions
│   │   └── snippets/     # Code snippets
│   ├── i18n/             # Internationalization
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routing
│   └── styles/           # Global styles
├── public/               # Static assets
└── astro.config.mjs     # Astro configuration
```

## Build & Deploy

The project uses Astro's static adapter to generate a fully static site that can be deployed anywhere:

```bash
npm run build    # Generates ./dist/
npm run preview  # Preview production build
```

Deployment options include:

- **Vercel** - Zero-config deployments
- **Netlify** - Continuous deployment from Git
- **Cloudflare Pages** - Global CDN distribution
- **GitHub Pages** - Free static hosting
- **Any static host** - Just upload the `dist/` folder

## Lessons Learned

Building this project taught me valuable lessons about:

1. **Framework Flexibility** - Astro's multi-framework approach is perfect for gradually adopting new technologies without rewriting everything

2. **Static First** - Starting with static generation and adding interactivity only where needed results in better performance

3. **Type Safety** - TypeScript and Zod schemas catch bugs before they reach production

4. **Content-First** - Using Content Collections makes managing blog posts and projects much easier than traditional CMS solutions

5. **Progressive Enhancement** - Building features that work without JavaScript first, then enhancing with interactivity

## Future Enhancements

Planned improvements for the future:

- [ ] Search functionality with Pagefind
- [ ] View transitions for smoother navigation
- [ ] Dark mode toggle (currently auto-detects system preference)
- [ ] Comment system integration
- [ ] Analytics dashboard
- [ ] Newsletter signup integration
- [ ] More interactive demos and code playgrounds

## Conclusion

This portfolio represents my approach to modern web development: using the right tool for each job, prioritizing performance and accessibility, and maintaining excellent developer experience throughout the build process.

The combination of Astro 5, TypeScript, and TailwindCSS provides a solid foundation that's both powerful and maintainable. The result is a fast, beautiful, and functional portfolio that showcases my work and shares knowledge with the community.
