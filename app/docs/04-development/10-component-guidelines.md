# 04-development/10-component-guidelines.md

# Component Development Guidelines

## Goal

Create reusable, maintainable, and scalable React components.

---

# General Principles

Every component should:

* Have a single responsibility
* Be reusable
* Be easy to understand
* Be easy to test

---

# Component Naming

Use PascalCase.

Good

```text
Hero.tsx

Navbar.tsx

PropertyCard.tsx

PropertyGallery.tsx
```

Avoid

```text
hero.tsx

component.tsx

test.tsx
```

---

# Folder Structure

```text
components/

home/

about/

properties/

contact/

layout/

common/
```

---

# Component Size

Recommended

* 50–200 lines

Maximum

* 300 lines

If a component grows beyond this, split it into smaller components.

---

# Props

Always define interfaces.

Example

```ts
interface PropertyCardProps {
    property: Property;
}
```

Avoid using `any`.

---

# State Management

Prefer:

* Local State
* Props
* Context (only if shared)

Avoid unnecessary global state.

---

# Styling

Use Tailwind CSS.

Avoid inline styles unless absolutely necessary.

---

# Images

Always use

```tsx
next/image
```

Never use raw `<img>` unless required by a third-party library.

---

# Forms

Use

* React Hook Form
* Zod

Never manage complex forms manually.

---

# Icons

Use

* Lucide React

Do not mix multiple icon libraries.

---

# Animations

Use

* Framer Motion

Keep animations subtle and purposeful.

---

# Accessibility

Every component should:

* Support keyboard navigation
* Include ARIA attributes where necessary
* Use semantic HTML

---

# Component Categories

## Layout

* Navbar
* Footer
* Container
* Section

## Common

* Button
* Card
* Badge
* Modal
* Dialog
* Loader

## Home

* Hero
* FeaturedProperties
* CallToAction

## About

* Biography
* Storyline
* Achievements

## Properties

* PropertyCard
* PropertyGallery
* PropertyDetails

## Contact

* ContactForm
* GoogleMap
* MessengerButton

---

# Best Practices

* Keep components focused.
* Avoid business logic inside UI components.
* Extract repeated code into reusable components.
* Use composition instead of duplication.
