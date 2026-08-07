# Inditex / Podcaster challenge

Frontend take-home: a **podcast browser** (list → detail → episode) built with **Next.js**, **TypeScript**, **Redux Toolkit + Redux Saga**, tests, and Storybook.

Author: [Erick Vargas](https://github.com/erickorso)

## Stack

- **Next.js** · **React** · **TypeScript**
- **Redux Toolkit** · **Redux Saga**
- **Tailwind CSS**
- **Jest** + Testing Library
- **Storybook**

## Features

- Podcast list and detail routes (`/podcast`, `/podcast/[id]`, episode pages)
- Template-based layout components
- Async data flows via Redux Saga
- Unit tests (`npm test` / `test:ci`)
- Storybook for UI isolation (`npm run storybook`)

## Run

```bash
npm install
npm run dev
```

```bash
npm test
npm run storybook
npm run build
```

## Note

Interview / challenge sample — not affiliated with Inditex production systems.
