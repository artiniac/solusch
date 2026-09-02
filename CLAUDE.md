# Claude Code rules for Solusch

## What this is
solusch.com, Artin Nazaryan's solution-first company. The product is undecided (a finance AI agent is one idea). Right now the repo is a placeholder landing page, and it should stay clean and cheap until the product exists.

## Rules
1. **Static and free** while it is a landing page: HTML, CSS, vanilla JS, GitHub Pages. No frameworks, no build step, no analytics, no paid services.
2. **Never invent contact details.** The only address is `hello@solusch.com`, which Artin still has to create. Do not add phone numbers, street addresses, or other emails.
3. **Tone:** confident, spare, professional. Short sentences. No em-dashes or en-dashes. No hype words. The copy should read fine to a banker and to a founder.
4. **One accent gradient** (`--a1` indigo to `--a2` teal) on a dark ground. Do not add colors.
5. **Product work goes elsewhere.** When the real Solusch product starts, it gets its own repo and its own subdomain (`app.solusch.com` or similar). This repo remains the front door.
6. Respect `prefers-reduced-motion` (already wired into the canvas).

## Testing
`node --check app.js`, then open `index.html` at desktop and phone widths. The canvas should scatter for five seconds, gather into a ring for about five, and scatter again.
