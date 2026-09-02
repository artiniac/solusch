# Solusch

**solusch.com**, a solution-first company that has not decided what it is solving yet. This repo is the placeholder landing page: one dark screen, a field of points that keeps resolving into a circle, three lines about how Solusch works, and a way to say hello.

## Files

| File | What it does |
|---|---|
| `index.html` | The page. |
| `styles.css` | Dark theme, one indigo-to-teal gradient accent. |
| `app.js` | The resolving-points canvas. |
| `assets/favicon.svg` | Tab icon. |
| `CNAME` | Custom domain for GitHub Pages (`solusch.com`). |

No build step, no dependencies. Open `index.html` and it runs.

## Two things to decide

1. **The contact address.** Both "Say hello" links point at `hello@solusch.com`. Create that mailbox (a Google Workspace alias or a forwarder at the registrar), or change the address in `index.html` (two `mailto:` links).
2. **The domain.** `CNAME` assumes `solusch.com`. If the domain you bought has a different ending, change that one line.

## Deploying (GitHub Pages, free)

1. Push this folder to its own GitHub repo (`artiniac/solusch`).
2. `.github/workflows/pages.yml` runs on the first push, enables GitHub Pages, and deploys the site (about a minute; watch the repo's **Actions** tab). It is live at `https://artiniac.github.io/solusch/` right away.
3. Once, by hand: **Settings → Pages → Custom domain**, type `solusch.com`, Save. When the certificate appears (5 to 30 minutes), tick **Enforce HTTPS** on the same page. GitHub does not allow a workflow to set either of these.
4. At the registrar where you bought solusch.com, add these DNS records (remove any existing A or parking record on `@` first):

   | Type | Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `artiniac.github.io` |

4. Tick **Enforce HTTPS** in the Pages settings once the certificate appears.

## When Solusch becomes a real product

The landing page stays static. If the product needs a backend (an AI agent, accounts, payments), build it as a separate app and point a subdomain at it (for example `app.solusch.com`), the same way NazLawDash lives on its own subdomain. The root domain keeps being the front door.
