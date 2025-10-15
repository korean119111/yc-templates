# @youssefch2003/yc-cli

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

Add helper + alias if not present:

```ts
// src/lib/utils.ts
import { type ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
```

```ts
// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

(Optional) render Sonner once:
```tsx
// in src/main.tsx
import { Toaster } from "sonner"
<Toaster richColors closeButton position="top-right" />
```

## Usage

Generated files are placed in `src/pages` and `src/sections`.

```tsx
import LandingModern from "@/pages/LandingModern"
export default function App() { return <LandingModern /> }
```

## Troubleshooting

- **Template not found** → `npm i -g @youssefch2003/yc-cli@latest`
- **Cannot find "@/lib/utils"** → create `src/lib/utils.ts` and set alias in Vite + tsconfig
- **Missing shadcn files** → run the `shadcn add ...` command above

## License

MIT © youssefch2003
