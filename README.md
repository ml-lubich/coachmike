# Coach Mike

> Personal site for **Mike** — Relationship & Healing Coach. Showcases
> client transformations, therapy specialties, and lets visitors book
> a session.

```mermaid
flowchart LR
    USER[("👤 visitor")]
    HOME["🌐 / · landing<br/>hero · CTA"]
    TRANS["💗 transformations<br/>real client journeys"]
    SPEC["🧠 specialties<br/>ADHD · attachment · ..."]
    ABOUT["📖 about Mike<br/>why he does this work"]
    BOOK[/"📅 booking CTA"/]

    USER --> HOME
    HOME --> TRANS
    HOME --> SPEC
    HOME --> ABOUT
    HOME --> BOOK

    classDef io fill:#0e1116,stroke:#2f81f7,stroke-width:1.5px,color:#e6edf3;
    classDef tool fill:#161b22,stroke:#3fb950,stroke-width:1.5px,color:#e6edf3;
    classDef brain fill:#161b22,stroke:#d29922,stroke-width:1.5px,color:#e6edf3;
    classDef out fill:#0e1116,stroke:#a371f7,stroke-width:1.5px,color:#e6edf3;
    class USER io;
    class TRANS,SPEC,ABOUT tool;
    class HOME brain;
    class BOOK out;
```

## Table of contents

- [Stack](#stack)
- [Visitor journey](#visitor-journey)
- [Page sections](#page-sections)
- [Getting Started](#getting-started)
- [🗺️ Repository map](#️-repository-map)
- [📊 Code composition](#-code-composition)

## Visitor journey

```mermaid
stateDiagram-v2
    [*] --> Landing: arrives at /
    Landing --> Transformations: scroll / nav
    Landing --> Specialties
    Landing --> About
    Transformations --> Booking: CTA
    Specialties --> Booking
    About --> Booking
    Booking --> [*]: schedules session
```

## Page sections

```mermaid
flowchart LR
    HERO["hero + tagline"]
    TRANS["client transformations"]
    SPEC["specialties"]
    WHY["why I do this work"]
    CTA["booking CTA"]
    HERO --> TRANS --> SPEC --> WHY --> CTA
```

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `app/page.tsx`.


## 🗺️ Repository map

Top-level layout of `coachmike` rendered as a Mermaid mindmap (auto-generated from the on-disk tree).

```mermaid
mindmap
  root((coachmike))
    app/
      globals.css
      layout.tsx
      page.tsx
    components/
      theme-provider.tsx
      ui
    hooks/
      use-mobile.tsx
      use-toast.ts
    lib/
      utils.ts
    public/
      placeholder-logo.png
      placeholder-logo.svg
      placeholder-user.jpg
      placeholder.jpg
      placeholder.svg
    styles/
      globals.css
    files
      README.md
      next.config.mjs
      package.json
      tailwind.config.ts
      tsconfig.json
```


## 📊 Code composition

File-type breakdown of source under this repo (skips `.git`, `node_modules`, build caches, lockfiles).

```mermaid
pie showData title File-type composition of coachmike (70 files)
    "TypeScript" : 57
    "Image" : 3
    "JSON" : 3
    "CSS" : 2
    "JavaScript" : 2
    "SVG image" : 2
    "Markdown" : 1
```
