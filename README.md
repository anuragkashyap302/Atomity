# Atomity Frontend Engineering Challenge


## Overview

This project is my submission for the **Atomity Frontend Engineering Challenge**.

I chose **Option A (0:30–0:40)** from the provided product video and built an interactive **Cloud Cost Explorer** dashboard inspired by cloud management platforms like Kubecost.

The goal was not to recreate the video pixel-for-pixel, but to interpret the feature and build a reusable, responsive, and animated frontend experience.

---

# Why I Chose Option A

I selected **Option A** because it demonstrates an interactive workflow rather than a static UI.

The dashboard allows users to:

- View multiple cloud clusters
- Select a cluster
- Drill down into namespaces
- Explore pod-level information

This interaction provided a good opportunity to demonstrate component architecture, state management, animations, and API-driven rendering.

---

# Project Features

- Interactive Cloud Cost Dashboard
- Cluster → Namespace → Pod drill-down
- Dynamic KPI cards
- Responsive layout
- Smooth Framer Motion animations
- API-driven data
- React Query caching
- Reusable UI components
- Design token-based styling
- Loading, error, and empty states

---

# Animation Approach

Animations were designed to feel subtle and purposeful instead of distracting.

The application uses **Framer Motion** for:

- Scroll entrance animations
- Staggered card animations
- Hover interactions
- Selection transitions
- Smooth layout changes between dashboard sections

The goal was to create an experience similar to modern SaaS dashboards while keeping interactions lightweight and responsive.

---

# Design Tokens & Styling

To avoid hardcoded styling throughout the project, I created a small design token system using CSS variables.

This includes tokens for:

- Colors
- Border radius
- Spacing
- Shadows

Components reference these tokens instead of individual color values, making the design easier to maintain and extend.

Tailwind CSS is used for utility-based styling while keeping components clean and reusable.

---

# Data Fetching & Caching

The assignment required data to come from a public API rather than being hardcoded.

I used **DummyJSON** as the data source.

Since DummyJSON does not provide cloud infrastructure data, I transformed the API responses into domain-specific objects such as:

- Clusters
- Namespaces
- Pods

This approach demonstrates how frontend applications often adapt generic backend responses into application-specific models.

Data fetching is handled using **TanStack React Query**, which provides:

- Automatic caching
- Loading states
- Error handling
- Reduced unnecessary network requests

---
# architecture diagram

DummyJSON API
        │
        ▼
Axios Client
        │
        ▼
React Query
        │
        ▼
Transform API Data
        │
        ▼
Cloud Dashboard
        │
        ├── Clusters
        ├── Namespaces
        └── Pods

# Component Structure

The project is organized into reusable modules instead of large monolithic files.

```
src/
│
├── api/
├── components/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
├── hooks/
├── providers/
├── styles/
├── tokens/
├── types/
└── utils/
```

This structure keeps UI, business logic, API calls, and styling separated.

---

# Libraries Used

| Library | Why I Used It |
|----------|---------------|
| React + TypeScript | Component-based development with type safety |
| Vite | Fast development and build tooling |
| Tailwind CSS | Utility-first styling with responsive design |
| Framer Motion | Smooth animations and transitions |
| TanStack React Query | API fetching, caching, loading, and error handling |
| Axios | Simple HTTP client for API requests |
| Lucide React | Lightweight icons |

---

# Trade-offs & Decisions

One challenge was that the public API did not provide cloud infrastructure data.

Instead of hardcoding all content, I used the API as the source of truth and transformed its responses into realistic dashboard entities. This allowed the project to satisfy the assignment's API integration requirement while presenting meaningful cloud management data.

Another decision was to keep the UI component-driven, making it easier to reuse cards, badges, progress bars, and other elements across different sections.

---

# If I Had More Time

Given additional time, I would like to add:

- Real-time updates using WebSockets
- Search and filtering for clusters
- Historical usage charts
- Better accessibility testing
- Unit and integration tests
- Light/Dark theme toggle
- Virtualized rendering for very large datasets

---

# Running the Project

```bash
npm install

npm run dev
```

Build for production:

```bash
npm run build
```

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- TanStack React Query
- Axios
- DummyJSON API

---

Thank you for taking the time to review my submission. I enjoyed interpreting the product and building this dashboard while focusing on reusable architecture, smooth interactions, and modern frontend development practices.
