# 01-system-architecture.md

# System Architecture

## Overview

The application is built using **Next.js App Router** with a component-driven architecture.

The website is designed to be scalable, allowing additional property projects to be added without changing the application's structure.

## Technology Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS v4
* shadcn/ui (Vega)

### UI

* Framer Motion
* Lucide React
* Swiper

### Forms

* React Hook Form
* Zod

### Hosting

* Vercel

### Domain

* Client-owned custom domain

## High-Level Architecture

```text
Visitor
    │
    ▼
Next.js Website
    │
    ├── Home
    ├── About
    ├── Company
    ├── Properties
    ├── Contact
    └── Messenger

Future

Next.js
    │
    ├── CMS
    ├── Database
    ├── Admin Dashboard
    └── AI Chatbot
```

## Design Principles

* Component-based
* Responsive
* SEO-first
* Reusable
* Scalable
* Mobile-first
