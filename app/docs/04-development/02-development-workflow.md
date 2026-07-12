# Development Workflow

## Step 1

Pull latest changes.

```bash
git checkout main

git pull origin main
```

---

## Step 2

Create feature branch.

```bash
git checkout -b feature/navbar
```

Examples

* feature/homepage
* feature/properties
* feature/about
* feature/contact

---

## Step 3

Develop feature.

---

## Step 4

Run lint.

```bash
npm run lint
```

---

## Step 5

Run build.

```bash
npm run build
```

---

## Step 6

Commit.

```bash
git add .

git commit -m "feat: implement homepage hero section"
```

---

## Step 7

Push.

```bash
git push origin feature/homepage
```

---

## Step 8

Open Pull Request.

---

## Branch Strategy

```text
main

feature/*

hotfix/*
```
