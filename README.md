# Data Analyst Portfolio Website

This is a deep blue and black data analyst portfolio website for Sagnik Guha.

## How to open it

Open `index.html` in your browser.

## How to edit it

- Edit `index.html` to change your cover text, about text, links, email, LinkedIn, and GitHub.
- Edit `styles.css` to change the deep blue/black theme, spacing, and layout.
- Edit the `projects` list in `script.js` to update the 9 GitHub project cards and their data-themed visual styles.
- Put screenshots or dashboard images inside `assets/` only for featured analysis sections.
- Your portrait is saved as `assets/profile-photo.jpg`.
- For each GitHub repo, update `title`, `label`, `tags`, `description`, `bullets`, `visual`, `visualMetric`, and `links`.

Current GitHub source:

```text
https://github.com/Sagnik0910
```

Example project link entry:

```js
links: [
  {
    label: "GitHub",
    url: "https://github.com/your-username/your-repo"
  },
  {
    label: "Live Demo",
    url: "https://your-demo-link.com"
  }
]
```

## How to make it Next.js later

Install Node.js with npm, then create a Next.js app:

```bash
npx create-next-app@latest data-analyst-portfolio-next
cd data-analyst-portfolio-next
npm run dev
```

After that, move this page structure into `app/page.tsx` and move images into `public/`.
