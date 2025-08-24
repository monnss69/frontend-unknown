# Component MVP Frontend

This project is a Next.js (TypeScript) frontend for experimenting with user-authored React components. It features:

- Monaco editor for entering component code.
- Sandpack-powered preview in an isolated iframe with Tailwind CSS provided via CDN.
- Dynamic property form driven by a simple schema.
- Basic client-side validation for component size and external imports.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start Next.js dev server
- `npm run build` – production build
- `npm test` – placeholder test script

## TODO

- Integrate backend API for persisting components
- Improved prop schema extraction
- Robust security hardening
