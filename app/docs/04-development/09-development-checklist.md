# 04-development/09-development-checklist.md

# Development Checklist

This checklist must be completed before creating a Pull Request or deploying to production.

---

# General

* [ ] Latest changes pulled from `main`
* [ ] Feature branch created
* [ ] No merge conflicts
* [ ] Project builds successfully
* [ ] ESLint passes
* [ ] TypeScript compilation passes

---

# Code Quality

* [ ] Code follows project coding standards
* [ ] Components are reusable
* [ ] No duplicated code
* [ ] Functions are properly named
* [ ] Variables have meaningful names
* [ ] No unused imports
* [ ] No commented-out code
* [ ] No console.log statements

---

# UI / UX

* [ ] Responsive on Mobile
* [ ] Responsive on Tablet
* [ ] Responsive on Desktop
* [ ] Buttons are consistent
* [ ] Typography follows design system
* [ ] Colors follow design system
* [ ] Loading states implemented
* [ ] Empty states handled
* [ ] Error states handled

---

# Performance

* [ ] Images use `next/image`
* [ ] Images optimized
* [ ] Components lazy loaded where appropriate
* [ ] No unnecessary re-renders
* [ ] Metadata configured

---

# Accessibility

* [ ] Images have alt text
* [ ] Forms have labels
* [ ] Keyboard navigation works
* [ ] Proper semantic HTML used
* [ ] Color contrast is acceptable

---

# SEO

* [ ] Page title updated
* [ ] Meta description added
* [ ] Open Graph metadata updated
* [ ] Structured URL used

---

# Testing

* [ ] Tested in Chrome
* [ ] Tested in Edge
* [ ] Tested on Mobile
* [ ] Contact form tested
* [ ] Messenger integration tested

---

# Deployment

* [ ] Environment variables configured
* [ ] Production build successful
* [ ] No sensitive information committed

---

# Pull Request Checklist

* [ ] Clear PR title
* [ ] Description added
* [ ] Screenshots attached (if UI changes)
* [ ] Reviewer assigned
* [ ] Documentation updated (if applicable)

---

# Production Checklist

* [ ] Domain working
* [ ] HTTPS enabled
* [ ] Google Analytics configured (if enabled)
* [ ] Facebook Messenger working
* [ ] Contact form working
* [ ] Lighthouse score checked
