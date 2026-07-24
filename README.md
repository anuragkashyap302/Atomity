# Atomity Cloud Cost Explorer Dashboard

A premium, production-grade cloud infrastructure dashboard built for the Atomity Frontend Engineering Challenge. Designed with inspiration from professional SaaS platforms like **Vercel**, **Linear**, and **Datadog**, this application facilitates deep resource profiling and estimated spend exploration across multi-node clusters.

---

## 🌟 Key Features & Enhancements

### 1. Interactive Inspector Drawer (Drawer Slide-Over Overlay)
* **The Problem**: In the initial junior-developer setup, clicking on a cluster displayed its namespaces and pods at the bottom of the page. With 30 active clusters, this forced users to scroll past the entire cluster grid to view drill-down data.
* **The Solution**: We introduced a slide-over **Cluster Inspector Panel** (drawer layout). Clicking a card immediately slides in a detailed view from the right. It includes:
  - Background backdrop blur overlays.
  - Keyboard accessibility (closes on `Escape` key).
  - Background scroll-locking to focus scroll interactions inside the drawer.
  - Interactive close button triggers.

### 2. Full-Screen Canvas & Spacing Rhythm
* **Layout Span**: Changed page layout constraints from `max-w-7xl` (1280px) to `max-w-full px-6 md:px-10 lg:px-12`. This allows the grid to occupy the full width of widescreen/ultra-wide monitors, distributing cards evenly across the screen.
* **Visual Rhythm**: Increased padding inside cards (`p-6` to `p-7`) and increased margins between panels (48px between sections, 10px-24px vertical label margins) to give text elements breathing room.

### 3. Component Architecture: Extracted Namespace Cards
* Implemented the previously missing `NamespaceCard.tsx` component, matching the architecture of `ClusterCard.tsx`. This aligns namespace views with the reusable component pattern.

---

## 🎬 Animation Approach (Framer Motion)

Our animations are **subtle, physics-driven, and intentional**, designed to mimic enterprise tools rather than marketing websites:

* **Staggered Entrances**: Applied `staggerChildren` layout variants to grids. Cluster cards, namespace blocks, and pod rows slide up and fade in sequentially with spring transitions (`type: "spring", damping: 25, stiffness: 300`).
* **Micro-interactions**: Enhanced buttons and cards with hover elevation/glow offsets and active tap scales (`whileHover={{ y: -3 }}`, `whileTap={{ scale: 0.98 }}`).
* **Transition Anchors**: Wrapped conditional layouts inside `<AnimatePresence>` to manage slide-in exit states smoothly.
* **Reduced Motion**: Respects `prefers-reduced-motion` settings automatically via standard Framer Motion configurations.

---

## 🎨 Styles & Design System Tokens

The application leverages a hybrid configuration of **CSS custom properties** and **Tailwind CSS v4 `@theme` bindings** to enforce a cohesive design language:

* **Typography**: Imported Google Fonts `Inter` (used for descriptive text, badges, and headings) and `JetBrains Mono` (used for data numbers, estimated spent tags, and system IDs).
* **Color System**: Custom properties defined in `variables.css` establish unified modes for background slates, subtle container boundaries, and system metrics fill states:
  - Success elements: `#10b981` (Green fill, `rgba(16, 185, 129, 0.15)` bg)
  - Warning elements: `#f59e0b` (Amber fill, `rgba(245, 158, 11, 0.15)` bg)
  - Danger elements: `#ef4444` (Red fill, `rgba(239, 68, 68, 0.15)` bg)
* **Tailwind Binding**: Integrated CSS properties directly inside the Tailwind v4 `@theme` directive in `globals.css` (e.g. `bg-surface`, `border-border-primary`, `text-brand-glow`), keeping code clean and utility classes consistent.

---

## ⚡ Data Fetching & Caching Strategy

Data is handled using **TanStack React Query** and **Axios**:

* **Caching Lifecycle**: Configured custom caching configurations (`staleTime: 5 mins`, `gcTime: 10 mins`) to prevent redundant net calls while maintaining instant click-through responses for cached elements.
* **Shared Cache Calculations**: Exposed cluster data globally inside `FeatureSection.tsx` from the React Query cache. This allowed us to calculate system aggregates (Total Spend, Avg CPU, Avg RAM) dynamically for the top summary metrics banner at zero network overhead cost.
* **Preventing Layout Shifts (CLS)**: Replaced generic `<p>Loading...</p>` text labels with custom layout skeletons (`ClusterCardSkeleton`, `NamespaceCardSkeleton`, `PodCardSkeleton`) that mimic the actual card layout during loading transitions.

---

## 🛠️ Libraries Used & Rationale

* **React 19 & TypeScript**: Ensured high-fidelity type safety and React 19 rendering features.
* **Vite**: Super-fast bundler for rapid hot module replacement (HMR).
* **Tailwind CSS v4**: Employed modern utility styling, CSS nesting, and `@theme` directives.
* **Framer Motion**: Provided spring physics engines for card elevations, list entrance stagger arrays, and side-sheet animations.
* **Lucide React**: Integrated lightweight, high-fidelity system icons (Server, Cpu, Activity, Boxes, Folder, DollarSign, X, ArrowLeft) matching cloud consoles.
* **Axios**: Standard client wrapper for handling network requests.

---

## ⚖️ Trade-offs & Decisions

* **Inline Render State vs. Effects**: We resolved an ESLint warning (`react-hooks/set-state-in-effect`) by avoiding React effects (`useEffect`) to synchronize state between prop updates. Instead, we implemented React's recommended inline state adjustment pattern (diffing `prevClusterId` during render). This avoids unnecessary extra rendering passes and runs faster.
* **Width Cap**: While allowing full-width scaling on ultra-wide screens, grid column configurations are kept in responsive brackets (`grid-cols-3` maximum) to ensure card width proportions remain elegant.
* **Drawer Panels vs. Modals**: Selected a sliding side drawer layout instead of a centered modal. Side panels naturally fit vertical metric lists (namespaces and pods) by utilizing the screen's full vertical height.

---

## 🔮 What I Would Improve with More Time

1. **Virtualized Grids**: Integrate `react-window` or `react-virtual` inside `ClusterGrid` to virtualization-render cards if the active cluster list grows from 30 nodes to thousands.
2. **WebSocket Integration**: Connect real-time streaming sockets to push CPU and memory state fluctuations directly into the progress indicators.
3. **E2E Testing**: Add Playwright test specs to verify tab-index keyboard trapping, escape-key closers, and ARIA announcement readings.
