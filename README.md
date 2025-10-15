# @youssefch2003/yc-cli

npm link:[ ](https://www.npmjs.com/package/@youssefch2003/yc-cli)
Drop-in React + Tailwind + shadcn/ui landing page templates.

## Quick Start
```bash
# install CLI (or use npx)
npm i -g @youssefch2003/yc-cli
# inside your React app
yc install landing-modern --to ./
```

## Requirements
- React + Vite (TypeScript)
- Tailwind + shadcn/ui initialized

Install required shadcn components & deps:
```bash
pnpm dlx shadcn@latest init -y
pnpm dlx shadcn@latest add button badge card accordion separator avatar sheet input textarea label checkbox form
pnpm add lucide-react sonner react-hook-form zod
```

## Usage
Generated files are placed in `src/pages` and `src/sections`.

```tsx
import LandingModern from "@/pages/LandingModern"
export default function App() { return <LandingModern /> }
```

## License
MIT © youssefch2003
