# Realtor360 - Real Estate CRM & Analytics Dashboard

A modern, responsive Real Estate CRM and Analytics Dashboard built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Getting Started Locally

Follow the instructions below to get the project running on your local machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: v18.18+ or v20+ (recommended: Node.js 20 LTS or higher)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

Verify your installation:
```bash
node -v
npm -v
```

---

### Installation & Running

1. **Clone the repository** (if not already downloaded):
   ```bash
   git clone <repository-url>
   cd "warewe assignment"
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install project dependencies**:
   ```bash
   npm install
   ```

4. **Run the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000). The dashboard should load immediately with hot reload enabled.

---

## Available Scripts

Run these commands from the `frontend/` directory:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot-reload on port 3000 |
| `npm run build` | Builds the production-ready bundle |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and type issues |

---

## Project Architecture & Directory Structure

```text
warewe assignment/
├── frontend/
│   ├── public/                   # Static public assets and avatars
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css       # Global styles and Tailwind configuration
│   │   │   ├── layout.tsx        # Root layout with metadata and fonts
│   │   │   └── page.tsx          # Main dashboard page layout
│   │   ├── components/
│   │   │   ├── common/           # Shared UI (Navbar, headers, global navigation)
│   │   │   └── reusable/         # Modular dashboard widgets:
│   │   │       ├── ActiveListingTable.tsx      # Active property listings table
│   │   │       ├── CalendarWidget.tsx          # Interactive mini calendar
│   │   │       ├── DashboardCardRenderer.tsx   # Dynamic JSON-driven card renderer
│   │   │       ├── LeadSourceDonut.tsx         # SVG Donut chart for lead sources
│   │   │       ├── LeadsContactsList.tsx       # Leads & quick contact drawer
│   │   │       ├── PipelineTable.tsx           # Deals in pipeline breakdown
│   │   │       ├── RemindersWidget.tsx         # Actionable reminders list
│   │   │       ├── SalesAndDealsGroup.tsx      # Stacked sales chart & deals closed progress
│   │   │       ├── ScheduleWidget.tsx          # Client visits and follow-ups
│   │   │       ├── StagesBarChart.tsx          # Deals by stages horizontal bar chart
│   │   │       └── StatCard.tsx                # KPI metric cards (listing, leads, revenue)
│   │   ├── data/
│   │   │   └── dashboardData.ts  # Centralized JSON dataset driving the entire dashboard
│   │   ├── lib/
│   │   │   └── utils.ts          # Utility functions (cn helper with clsx and tw-merge)
│   │   └── types/
│   │       └── dashboard.ts      # TypeScript interfaces and type definitions
│   ├── package.json              # Project dependencies and npm scripts
│   ├── tsconfig.json             # TypeScript compiler settings
│   └── next.config.ts            # Next.js framework configuration
└── README.md                     # Project documentation
```

---

## How the Dashboard Works

The dashboard is built on a **data-driven JSON architecture**:

1. **Configurable Grid (`LEFT_DASHBOARD_CARDS`)**:
   - Cards are configured in `src/data/dashboardData.ts`.
   - Each card defines an `id`, a `component` identifier, a `colSpan` (1 to 4 columns), and a typed `data` payload.
   - [DashboardCardRenderer.tsx](file:///d:/Downloads/warewe%20assignment/frontend/src/components/reusable/DashboardCardRenderer.tsx) maps the JSON component string to the corresponding React component and assigns responsive column classes and equal row heights.

2. **Sidebar Widgets (`RIGHT_DASHBOARD_DATA`)**:
   - Contains structured data for `reminders`, `calendar`, and `schedule` displayed in the right column.

3. **Custom SVG Visualizations**:
   - Donut charts and stacked bar charts are implemented using native responsive SVGs, eliminating bulky third-party chart dependencies for instant loading performance.

---

## Adding a New Dashboard Widget

To add a new widget to the dashboard:
1. Create your component in `src/components/reusable/YourWidget.tsx`.
2. Register it in `COMPONENT_REGISTRY` inside `src/components/reusable/DashboardCardRenderer.tsx`.
3. Add a new card entry in `LEFT_DASHBOARD_CARDS` inside `src/data/dashboardData.ts` specifying its `colSpan` and `data`.
