# jkt.com.mm — JKT Co.,Ltd / Owl Reward

Marketing site for **JKT Co.,Ltd** showcasing the **Owl Reward** loyalty app.
Fully prerendered static site (SvelteKit + adapter-static), deployed to
GitHub Pages from Actions on every push to `main`.

Live at **https://jkt.com.mm**.

## Develop

```bash
npm ci
npm run dev       # local dev server
npm run lint && npm run check && npm run build   # standing gate
npm run preview   # serve the production build locally
```

All user-editable values (address, phone, email, socials, store URLs) are
placeholders in [`src/lib/config/site.ts`](src/lib/config/site.ts), marked
with `// TODO:` — swap them before submitting to Apple/Google review.

See [AGENTS.md](AGENTS.md) for conventions, structure and the PR checklist.

<!-- ci scratch -->
