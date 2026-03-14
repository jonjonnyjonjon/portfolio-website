# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Run development server on http://localhost:5173
npm run build   # Build for production
npm run preview # Preview production build
```

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS + Chakra UI + Framer Motion

**Structure:**
- `src/App.js` - Root component that renders all sections
- `src/components/` - Reusable UI components (Navbar, ProjectCard, InfoTerminal)
- `src/sections/` - Page sections (Intro, AboutMe, Experiences, Projects, ContactMe, Footer)
- `src/index.css` - Global styles with Tailwind directives and custom component styles

**Theme:** Dark mode toggle via `darkMode: "class"` in Tailwind config. Theme state managed in Navbar component, applying `dark` class to `document.documentElement`.

**Key dependencies:**
- `@chakra-ui/react` - Component library
- `@headlessui/react` - Unstyled UI components
- `@heroicons/react` - Icon set
- `react-icons` - Additional icons
- `framer-motion` - Animations
- `react-router-dom` - Routing
