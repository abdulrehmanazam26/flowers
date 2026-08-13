# Blooming Bridge Florist — website

A fast, mobile-first, single-page site for Blooming Bridge Florist (Bridge Street,
Newcastle West, Co. Limerick). Plain HTML/CSS/JS — no build step, no framework,
works by opening `index.html` or hosting the folder as static files.

## Before going live — replace these placeholders

**1. Photography.** No real shop photos were available while building this site, so
every photo spot (hero, the 8 occasion cards, the 6 gallery tiles, the about photo)
currently shows a soft abstract "botanical" graphic instead of a real photograph, so
the site still looks complete today. Swap in real photos by adding `<img>` tags in
`index.html` in place of the `<svg><use ...></use></svg>` elements — the containers
(`.hero-art`, `.occasion-art`, `.gallery-art`, `.about-art`) already have the right
size/aspect-ratio/rounded-corner styling, so a same-size photo will drop straight in.

**2. Facebook / Instagram links.** Open `js/main.js` and fill in:
```js
var FACEBOOK_URL = "https://www.facebook.com/...";
var INSTAGRAM_URL = "https://www.instagram.com/...";
```
Until these are set, the social icons and the "Read Our Reviews on Facebook" button
stay hidden rather than link anywhere — this was intentional, to avoid shipping a
dead link.

**3. Reviews section.** Currently text-only (no invented quotes). Once you have
permission to reuse specific Google/Facebook reviews, add them as simple quote
cards in the `#reviews` section of `index.html`.

**4. Social preview image.** Add a real photo at `assets/og-cover.jpg` (1200×630px)
and uncomment the two `og:image` / JSON-LD lines it's referenced from in
`index.html` — this is the image shown when the site is shared on Facebook/WhatsApp.

**5. Domain.** The canonical URL and JSON-LD both currently point to
`https://www.bloomingbridgeflorist.ie/` — update if the real domain differs.

## How ordering works

The order form has two submit buttons: **Send via WhatsApp** (opens WhatsApp with
the form details pre-filled as a message to 087 745 9097) and **Send via Email**
(opens the visitor's email app with the details pre-filled, addressed to
bloomingbridgeflorist@gmail.com). There's no backend/server — both just hand off to
apps already on the visitor's device, so there's nothing to host or maintain beyond
the static files.

## Pricing shown

Starting prices in the Pricing section (bouquets from €35, funeral wreaths from
€85, wedding packages from €250, etc.) are estimates for a fair ballpark — check
they still match what you'd actually quote before publishing.
