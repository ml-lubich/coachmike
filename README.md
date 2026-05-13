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
- [Getting Started](#getting-started)

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
