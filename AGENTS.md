# AGENTS.md — JKT Co.,Ltd / Owl Reward website

Marketing site for **JKT Co.,Ltd** showcasing the **Owl Reward** loyalty app.
Fully prerendered static site, deployed on **GitHub Pages** (public repo,
deploy-from-Actions, auto on push to `main`). Purpose: pass Apple & Google
organization developer account and app listing review — the site must clearly
show legal entity info, privacy policy, and terms on valid TLS.

## Commands

```bash
npm run dev       # local dev server
npm run build     # prerender static site into build/
npm run preview   # serve the production build locally
npm run check     # svelte-check (TypeScript, strict)
npm run lint      # prettier --check . && eslint .
npm run format    # prettier --write .
```

Standing gate before any commit: `npm run lint && npm run check && npm run build`.

## Stack

- SvelteKit 2 + Svelte 5 (runes mode) + TypeScript strict
- `@sveltejs/adapter-static` → output in `build/` (all routes prerendered via root `+layout.ts`)
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.*`; design tokens live in `@theme` inside `src/routes/layout.css`)
- Fonts: `@fontsource/poppins` (headings) + `@fontsource-variable/inter` (body), imported in root `+layout.svelte`
- SvelteKit config lives in `vite.config.ts` (adapter + sveltekit plugin) — there is no `svelte.config.js`
- Node `>=22` (`engines`, enforced by `.npmrc engine-strict`); CI pins Node 22
- No backend, no forms — contact links are `mailto:`/`tel:` only

## Structure

```
src/
  lib/
    config/site.ts        # ALL user-editable placeholders (TODO-marked)
    components/           # Header, Footer, OwlLogo, StoreBadges, PhoneMockup, ...
  routes/
    +layout.svelte        # global shell: fonts, header/footer, SEO defaults
    layout.css            # Tailwind import + @theme design tokens
    /                     # home
    /owl-reward           # app showcase + store badges
    /about /contact       # company info
    /privacy-policy /terms# legal pages (policy covers website AND the app)
    sitemap.xml/+server.ts
static/
    robots.txt favicon.svg favicon.ico og-image.png
```

## Conventions

- **All user-editable values** (address, phone, email, socials, store URLs,
  domain) live in `src/lib/config/site.ts` and are marked `// TODO:`.
  Never hardcode contact strings or store URLs in components.
- Svelte 5 runes only (`$props`, `$state`, `$derived`); no legacy stores.
- TypeScript strict; no `any` unless unavoidable.
- Tailwind v4 utilities in markup; shared design tokens in `@theme`
  (owl palette: deep indigo/navy, amber/gold, cream).
- English only for v1; keep copy structured so Myanmar can be added later.
- Every page sets `<svelte:head>` title, description, canonical, OG tags.

## Deploy

- Push to `main` on GitHub (public repo) → GitHub Actions builds and
  deploys `build/` to GitHub Pages.
- `.github/workflows/ci.yml` gates every PR/push with lint/check/build and
  deploys to Pages on `main` (Node 22, `npm ci`).
- Custom domain: `jkt.com.mm` (apex A records → GitHub Pages IPs
  185.199.108–111.153) + `www` CNAME → Pages; HTTPS enforced via
  GitHub-issued certificates. DNS hosted at MPT.

## PR checklist

- [ ] `npm run lint && npm run check && npm run build` passes locally
- [ ] No hardcoded contact info / store URLs — everything from `site.ts`
- [ ] New pages: `<svelte:head>` title/description/canonical/OG set
- [ ] No new `TODO:` without a matching note in the placeholder handoff list
- [ ] Links clickable in `npm run preview`; zero 404s
