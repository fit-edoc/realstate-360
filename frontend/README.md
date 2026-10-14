# Realtor360 Frontend - Local Setup & Guide

A modern Real Estate CRM and Analytics Dashboard built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Running Locally

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (recommended: Node.js 20 LTS)
- **npm** (or pnpm / yarn)

### 2. Install Dependencies
From the `frontend` directory:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. View in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser. The app runs with instant fast-refresh.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts development server on port 3000 |
| `npm run build` | Builds production bundle |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint type & code quality checks |

---

## Key Files & Directories

- `src/app/page.tsx`: Main dashboard page layout.
- `src/data/dashboardData.ts`: Central JSON configuration for all dashboard cards and metrics.
- `src/components/reusable/DashboardCardRenderer.tsx`: Dynamic card renderer mapping JSON data to UI widgets.
- `src/components/reusable/`: Modular widgets (Stat cards, charts, pipeline table, listings, calendar, reminders).
- `src/components/common/Navbar.tsx`: Top Realtor360 navigation bar.
