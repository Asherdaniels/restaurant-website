# Saffron Table

A modern, responsive single-page website for a fictional Mediterranean restaurant. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

## Features

- Sticky navigation with an animated mobile menu
- Full-bleed hero with call-to-action buttons
- Highlights, about, and a three-column seasonal **menu**
- CSS-art **gallery** grid and a **visit** section with hours, address, and map placeholder
- **Reservation form** with client-side validation and a success state
- Reveal-on-scroll animations (via `IntersectionObserver`)
- Fully responsive (desktop → mobile) and accessible (semantic landmarks, focus states, `prefers-reduced-motion` support)

## Run locally

It's a static site, so just open `index.html` — or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
.
├── index.html      # markup + content
├── css/styles.css  # design tokens, layout, responsive rules
└── js/main.js      # nav, form validation, scroll reveals
```

## Customizing

- **Brand / copy:** edit the text in `index.html`.
- **Colors & fonts:** change the CSS custom properties in `:root` at the top of `css/styles.css`.
- **Photos:** the hero, about, gallery, and map currently use CSS gradients as placeholders. Drop real images into `assets/img/` and swap the relevant `background` rules (or `<img>` tags) to use them.
