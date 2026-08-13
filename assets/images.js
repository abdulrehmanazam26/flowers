/**
 * Single source of truth for every real photo slot on the site.
 * Each entry maps to a container in index.html carrying a matching
 * data-image-slot="<id>" attribute. js/main.js reads this list, injects
 * a <picture> (WebP + JPEG) into that container, and wires up lazy
 * loading + a graceful fallback if the file is missing.
 *
 * To add a real photo: drop matching files at the jpg/webp paths below
 * (exact filenames) — no HTML/CSS/JS changes needed, it just appears.
 * Until then, each slot falls back to the existing botanical SVG art
 * already sitting behind it (see README.md for the full checklist).
 */
window.SITE_IMAGES = [
  {
    id: "hero",
    jpg: "assets/images/hero.jpg",
    webp: "assets/images/hero.webp",
    alt: "Hand-tied bouquet of fresh seasonal flowers arranged at Blooming Bridge Florist, Newcastle West",
    width: 900,
    height: 900,
    priority: true
  },
  {
    id: "occasion-anniversary",
    jpg: "assets/images/occasion-anniversary.jpg",
    webp: "assets/images/occasion-anniversary.webp",
    alt: "Deep red and blush pink rose arrangement for an anniversary",
    width: 480,
    height: 480
  },
  {
    id: "occasion-wedding",
    jpg: "assets/images/occasion-wedding.jpg",
    webp: "assets/images/occasion-wedding.webp",
    alt: "White and blush bridal bouquet with trailing greenery",
    width: 480,
    height: 480
  },
  {
    id: "occasion-funeral",
    jpg: "assets/images/occasion-funeral.jpg",
    webp: "assets/images/occasion-funeral.webp",
    alt: "White and cream sympathy wreath with lilies",
    width: 480,
    height: 480
  },
  {
    id: "occasion-getwell",
    jpg: "assets/images/occasion-getwell.jpg",
    webp: "assets/images/occasion-getwell.webp",
    alt: "Bright yellow and orange get-well flower arrangement",
    width: 480,
    height: 480
  },
  {
    id: "occasion-birthday",
    jpg: "assets/images/occasion-birthday.jpg",
    webp: "assets/images/occasion-birthday.webp",
    alt: "Colourful mixed bouquet for a birthday",
    width: 480,
    height: 480
  },
  {
    id: "occasion-baby",
    jpg: "assets/images/occasion-baby.jpg",
    webp: "assets/images/occasion-baby.webp",
    alt: "Soft pastel flower arrangement to welcome a new baby",
    width: 480,
    height: 480
  },
  {
    id: "occasion-thankyou",
    jpg: "assets/images/occasion-thankyou.jpg",
    webp: "assets/images/occasion-thankyou.webp",
    alt: "Delicate white and pink thank-you bouquet wrapped in kraft paper",
    width: 480,
    height: 480
  },
  {
    id: "occasion-romance",
    jpg: "assets/images/occasion-romance.jpg",
    webp: "assets/images/occasion-romance.webp",
    alt: "Romantic bouquet of red and blush roses",
    width: 480,
    height: 480
  },
  {
    id: "gallery-1",
    jpg: "assets/images/gallery-1.jpg",
    webp: "assets/images/gallery-1.webp",
    alt: "Hand-tied seasonal bouquet made at Blooming Bridge Florist",
    width: 800,
    height: 600
  },
  {
    id: "gallery-2",
    jpg: "assets/images/gallery-2.jpg",
    webp: "assets/images/gallery-2.webp",
    alt: "Bridal bouquet with trailing greenery",
    width: 800,
    height: 600
  },
  {
    id: "gallery-3",
    jpg: "assets/images/gallery-3.jpg",
    webp: "assets/images/gallery-3.webp",
    alt: "Sympathy wreath in soft whites",
    width: 800,
    height: 600
  },
  {
    id: "gallery-4",
    jpg: "assets/images/gallery-4.jpg",
    webp: "assets/images/gallery-4.webp",
    alt: "Bright birthday flower arrangement",
    width: 800,
    height: 600
  },
  {
    id: "gallery-5",
    jpg: "assets/images/gallery-5.jpg",
    webp: "assets/images/gallery-5.webp",
    alt: "Wedding table centrepiece with flowers and candles",
    width: 800,
    height: 600
  },
  {
    id: "gallery-6",
    jpg: "assets/images/gallery-6.jpg",
    webp: "assets/images/gallery-6.webp",
    alt: "Rustic basket arrangement of mixed flowers",
    width: 800,
    height: 600
  },
  {
    id: "about",
    jpg: "assets/images/about.jpg",
    webp: "assets/images/about.webp",
    alt: "Inside Blooming Bridge Florist on Bridge Street, Newcastle West",
    width: 500,
    height: 600
  }
];
