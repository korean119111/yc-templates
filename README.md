# @youssefch2003/yc-cli

[npm package](https://www.npmjs.com/package/@youssefch2003/yc-cli)
Drop-in React + Tailwind + shadcn/ui landing page templates.

## Quick Start
```bash
# install CLI (or use npx)
npm i -g @youssefch2003/yc-cli
```

### Inside your React app, pick a template

**For your service/company landing page** — great for agencies, installers, boutiques, or any brand that needs a clean homepage with hero, features, testimonials, contact, and footer.
```bash
yc install landing-modern --to ./
```

**For your mobile app** — perfect when users Google your app name and need a polished promo site with store badges, animated screenshots, FAQs, and a hero tailored for downloads.
```bash
yc install landipageforapp --to ./
```

## Requirements
- React + Vite (TypeScript)
- Tailwind + shadcn/ui initialized

## Install shadcn components & deps

### Common setup
```bash
pnpm dlx shadcn@latest init -y
```

### For `landing-modern`
```bash
pnpm dlx shadcn@latest add button badge card accordion separator avatar sheet input textarea label checkbox form
pnpm add lucide-react sonner react-hook-form zod
```

### For `landipageforapp`
```bash
pnpm dlx shadcn@latest add button badge card accordion separator avatar sheet
pnpm add lucide-react framer-motion
```

## Usage
Generated files are placed in `src/pages` and `src/sections`.

```tsx
// landing-modern
import LandingModern from "@/pages/LandingModern"
export default function App() { return <LandingModern /> }

// landipageforapp
import LandingApp from "@/pages/LandingApp"
export default function App() { return <LandingApp /> }
```

## Troubleshooting

### Marquee testimonials (landing-modern)
If the testimonial marquee doesn't scroll or looks clipped, add these utilities to your global CSS (e.g. `src/index.css` or `src/app.css`):

```css
/* --- Marquee utilities --- */
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll var(--marquee-duration, 28s) linear infinite;
}
.marquee:hover .marquee-track { animation-play-state: paused; }
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## License
MIT © youssefch2003
