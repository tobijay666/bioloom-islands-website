# Bioloom Islands — Website

A React + TypeScript web frontend for the Bioloom Islands project. The app uses Vite for development and bundling and includes a 3D-like canvas hero scene, component-driven layout, and TypeScript typings.

## Key files
- [`src/App.tsx`](src/App.tsx) — main app component (exports `App`)
- [`src/components/Hero3DScene.tsx`](src/components/Hero3DScene.tsx) — interactive hero canvas (exports `Hero3DScene`)
- [`src/components/CEOProfileSection.tsx`](src/components/CEOProfileSection.tsx) — CEO profile section (exports `CEOProfileSection`)
- [`src/components/AboutSection.tsx`](src/components/AboutSection.tsx) — about section (exports `AboutSection`)
- [`src/components/EducationSection.tsx`](src/components/EducationSection.tsx) — education section (exports `EducationSection`)
- [`package.json`](package.json) — project scripts and dependencies
- [`vite.config.ts`](vite.config.ts) — Vite configuration
- [`tsconfig.json`](tsconfig.json) — TypeScript configuration
- [`next.config.mjs`](next.config.mjs) — Next config present in the repo (if applicable)
- [`pnpm-lock.yaml`](pnpm-lock.yaml) — lockfile for pnpm

## Features
- Canvas-based animated hero scene ([`Hero3DScene`](src/components/Hero3DScene.tsx))
- Component-first layout in [`src/`](src/)
- TypeScript + React, ready for Vite-based development

## Prerequisites
- Node.js (16+ recommended)
- pnpm (preferred; repo includes `pnpm-lock.yaml`) — or npm/yarn if you prefer

## Quick start
Install dependencies:
```bash
pnpm install
```

Run dev server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

(If your `package.json` uses different script names, adjust accordingly — see [`package.json`](package.json).)

## Development notes
- The app entry is [`src/App.tsx`](src/App.tsx). Components live under [`src/components/`](src/components/).
- The hero animation and canvas logic are implemented in [`src/components/Hero3DScene.tsx`](src/components/Hero3DScene.tsx).
- Check TypeScript settings in [`tsconfig.json`](tsconfig.json) and Vite behavior in [`vite.config.ts`](vite.config.ts).

## Contributing
- Fork, create a branch, implement changes, open a PR.
- Keep components modular and typed.

## License
MIT License

Copyright (c) 2025 BioloomIslands



## Features
- Canvas-based animated hero scene ([`Hero3DScene`](src/components/Hero3DScene.tsx))
- Component-first layout in [`src/`](src/)
- TypeScript + React, ready for Vite-based development

## Prerequisites
- Node.js (16+ recommended)
- pnpm (preferred; repo includes `pnpm-lock.yaml`) — or npm/yarn if you prefer

## Quick start
Install dependencies:
```bash
pnpm install
```

Run dev server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

(If your `package.json` uses different script names, adjust accordingly — see [`package.json`](package.json).)

## Development notes
- The app entry is [`src/App.tsx`](src/App.tsx). Components live under [`src/components/`](src/components/).
- The hero animation and canvas logic are implemented in [`src/components/Hero3DScene.tsx`](src/components/Hero3DScene.tsx).
- Check TypeScript settings in [`tsconfig.json`](tsconfig.json) and Vite behavior in [`vite.config.ts`](vite.config.ts).

## Contributing
- Fork, create a branch, implement changes, open a PR.
- Keep components modular and typed.

## License
MIT License

Copyright (c) 2025 BioloomIslands

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
