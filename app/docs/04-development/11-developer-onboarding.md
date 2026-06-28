# 04-development/11-developer-onboarding.md

# Developer Onboarding Guide

Welcome to the **Mark Estrella Real Estate Website** project.

This guide helps new developers set up the project and understand the development workflow.

---

# Tech Stack

Frontend

* Next.js 15
* React
* TypeScript

Styling

* Tailwind CSS v4
* shadcn/ui (Vega)

Libraries

* Framer Motion
* Lucide React
* Swiper
* React Hook Form
* Zod

Deployment

* Vercel

---

# Prerequisites

Install:

* Node.js 22+
* npm
* Git
* Visual Studio Code

Recommended VS Code Extensions

* ESLint
* Prettier
* Tailwind CSS IntelliSense
* GitLens
* Error Lens
* Path IntelliSense

---

# Clone Repository

```bash
git clone <repository-url>

cd mark-estrella-real-estate
```

---

# Install Dependencies

```bash
npm install
```

---

# Configure Environment

Create

```text
.env.local
```

Example

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_FB_PAGE=

NEXT_PUBLIC_GOOGLE_MAP=

NEXT_PUBLIC_EMAIL=
```

---

# Run Project

```bash
npm run dev
```

Visit

```text
http://localhost:3000
```

---

# Project Structure

```text
src/

app/

components/

data/

hooks/

services/

types/

utils/

styles/
```

---

# Development Workflow

1. Pull latest changes.

```bash
git checkout main
git pull origin main
```

2. Create a feature branch.

```bash
git checkout -b feature/homepage
```

3. Develop the feature.

4. Verify code quality.

```bash
npm run lint
npm run build
```

5. Commit changes.

```bash
git add .
git commit -m "feat: add homepage hero section"
```

6. Push branch.

```bash
git push origin feature/homepage
```

7. Create a Pull Request.

---

# Coding Standards

* Use TypeScript.
* Keep components reusable.
* Prefer Server Components.
* Avoid duplicate code.
* Use meaningful names.
* Follow project folder structure.

---

# Before Opening a Pull Request

Complete the Development Checklist (`09-development-checklist.md`).

---

# Documentation

Refer to the following folders when needed:

* `01-requirements/`
* `02-planning/`
* `03-design/`
* `04-development/`

These documents describe the business requirements, architecture, coding standards, and development process for the project.

---

# Future Enhancements

The architecture has been designed to support:

* Admin Dashboard
* Property Management
* AI Chatbot
* CRM Integration
* CMS Integration
* Appointment Booking

Develop new features following the existing architecture and coding standards to maintain consistency across the project.
