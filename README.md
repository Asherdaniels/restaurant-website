# Asher's Bites

A modern, responsive **5-page** website for a fictional Mediterranean restaurant. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

## Pages

- **Home** (`index.html`) — hero, highlights, story teaser, and calls to action
- **Menu** (`menu.html`) — three-column seasonal menu
- **About** (`about.html`) — story, chef, and values
- **Gallery** (`gallery.html`) — CSS-art image grid
- **Contact** (`contact.html`) — hours, address, map placeholder, and the reservation form

## Features

- Shared sticky navigation (with animated mobile menu) and footer across all pages; the current page is highlighted in the nav
- Full-bleed hero on Home; gradient page banners on inner pages
- **Reservation form** with client-side validation and a success state (on Contact)
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
├── index.html      # Home
├── menu.html       # Menu
├── about.html      # About
├── gallery.html    # Gallery
├── contact.html    # Contact + reservation form
├── css/styles.css  # design tokens, layout, responsive rules
└── js/main.js      # nav, active-link, form validation, scroll reveals
```

The header/footer markup is duplicated across pages (no templating/build step). Edit the nav or footer in each `*.html` file to keep them in sync.

## Customizing

- **Brand / copy:** edit the text in the relevant `*.html` page.
- **Colors & fonts:** change the CSS custom properties in `:root` at the top of `css/styles.css`.
- **Photos:** the hero, about, gallery, and map currently use CSS gradients as placeholders. Drop real images into `assets/img/` and swap the relevant `background` rules (or `<img>` tags) to use them.
