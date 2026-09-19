# Hicham Thami — International Relations & Diplomacy

Institutional portfolio website. React + Vite + Tailwind CSS v4.
All content is stored in plain JavaScript files inside `src/data/` — no backend, no CMS, no database.

---

## 1. Running the project

```bash
npm install      # once
npm run dev      # development server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node.js 18 or newer.

To put the site online, run `npm run build` and upload the `dist/` folder
(or connect the repository to Netlify / Vercel / GitHub Pages — no configuration needed).

---

## 2. Project structure

```
hicham-thami-portfolio/
├── index.html                  ← page title, description, SEO meta, Google Fonts
├── vite.config.js
├── package.json
│
├── public/
│   └── images/                 ← ALL PHOTOGRAPHS GO HERE
│       ├── profile/            ← portraits
│       ├── events/             ← forum & event photos
│       ├── gallery/            ← gallery photos
│       └── publications/       ← publication covers
│
└── src/
    ├── main.jsx                ← app entry point
    ├── App.jsx                 ← order of the sections on the page
    │
    ├── data/                   ← EVERYTHING YOU WILL EDIT
    │   ├── profile.js          ← name, biography, expertise, highlights, contact, social
    │   ├── events.js           ← forums & events
    │   ├── publications.js     ← articles and publications
    │   ├── engagements.js      ← meetings, conferences, cooperation
    │   ├── gallery.js          ← photographs
    │   ├── relations.js        ← international relations areas
    │   ├── partners.js         ← institutions & partners
    │   └── navigation.js       ← navbar links and their order
    │
    ├── components/             ← reusable building blocks
    │   ├── Navbar.jsx          ← desktop nav + mobile menu, solid on scroll
    │   ├── Footer.jsx
    │   ├── Section.jsx         ← section shell + vertical spacing
    │   ├── SectionHeading.jsx  ← serif title + gold rule
    │   ├── Button.jsx
    │   ├── SmartImage.jsx      ← image with "Image coming soon" fallback
    │   ├── Reveal.jsx          ← fade-in on scroll
    │   ├── EventCard.jsx
    │   ├── PublicationCard.jsx
    │   ├── EngagementCard.jsx
    │   ├── Lightbox.jsx        ← fullscreen gallery viewer
    │   └── icons/BrandIcons.jsx
    │
    ├── sections/               ← one file per section of the page
    │   ├── Hero.jsx
    │   ├── Profile.jsx
    │   ├── Relations.jsx
    │   ├── Forums.jsx
    │   ├── Engagements.jsx
    │   ├── Publications.jsx
    │   ├── Gallery.jsx
    │   └── Contact.jsx
    │
    └── styles/index.css        ← colours, fonts, animations (design tokens)
```

**Why `public/images/` and not `src/assets/images/`?**
Files in `public/` keep their exact path, so a photo saved as
`public/images/events/forum.jpg` is written in the data file simply as
`/images/events/forum.jpg`. No import, no build step — drop the file in, reference the path.

---

## 3. How to add content

Every change below is made in `src/data/`. Save the file, the browser refreshes by itself.

### Add a new photo to the gallery
1. Put the file in `public/images/gallery/` (e.g. `photo-07.jpg`).
2. Open `src/data/gallery.js` and add a block:

```js
{
  image: "/images/gallery/photo-07.jpg",
  title: "Mediterranean Dialogue Forum",
  category: "Forums",      // a new category creates a new filter button automatically
  year: "2025",
},
```

### Add a new event / forum
`src/data/events.js`:

```js
{
  title: "Mediterranean Dialogue Forum",
  date: "2025",
  location: "Málaga, Spain",
  description: "Panel on cross-border cooperation.",
  image: "/images/events/event-04.jpg",   // file in public/images/events/
  link: "",                               // leave "" to hide the link
},
```

### Add a new publication
`src/data/publications.js`:

```js
{
  title: "Title of the article",
  date: "2025",
  publication: "Name of the newspaper or journal",
  description: "Two lines about the piece.",
  image: "/images/publications/publication-03.jpg",
  link: "https://...",
},
```

### Add a new engagement
`src/data/engagements.js`:

```js
{
  title: "Meeting with [institution]",
  type: "Institutional meeting",   // shown as the gold label on the card
  date: "2025",
  location: "Rabat, Morocco",
  description: "...",
  image: "",                       // optional — text-only card if empty
  link: "",
},
```

### Add a new area of expertise
`src/data/profile.js`, in the `expertise` array — just add one line:

```js
expertise: [
  "International Relations",
  "Public Diplomacy",   // ← new
],
```

### Add a new social or professional link
`src/data/profile.js`:

```js
social: {
  linkedin: "https://www.linkedin.com/in/...",
  instagram: "",
  website: "",
},
contact: {
  email: "contact@example.com",   // also activates the contact form
  phone: "+212 ...",
  location: "Morocco — Spain",
},
```

An empty string `""` hides the link everywhere — nothing breaks.

### Add or reorder a navigation link
`src/data/navigation.js`. The `id` must match the `id` of the matching section in `src/App.jsx`.

### Add an area of international relations
`src/data/relations.js` — one block per area.

---

## 4. Behaviour to know

- **Missing images never break the page.** `SmartImage` catches the error and shows an
  elegant "Image coming soon" placeholder with the HT monogram. That is why the site
  looks complete even before the photographs are added.
- **Empty sections handle themselves.** An empty array shows a discreet
  `[... to be added]` line instead of a broken layout.
- **No hardcoded limits.** 1 event or 40 events, the grid adapts.
- **No invented information.** Every unknown field is `[Information to be added]`.
- **Contact form** has no backend: it opens the visitor's mail application with the
  message pre-filled. It stays disabled until an email address is set in `profile.js`.

## 5. Moving to an API or a CMS later

Components never read files directly — they import from `src/data/`. To switch to a CMS,
replace the contents of a data file with a fetch, or turn the export into an async loader;
no component has to change.

## 6. Design

| Token | Value |
|---|---|
| Navy | `#0B1F33` |
| Dark navy | `#071522` |
| Gold (accent only) | `#C6A15B` |
| Ivory | `#F8F7F3` |
| Headings | Cormorant Garamond |
| Body, navigation, buttons | Inter |

All of these live in `src/styles/index.css` under `@theme`. Change one value there and it
propagates across the whole site.

Layout was built mobile-first and checked at 375, 390, 430, 768, 1024, 1280 and 1440 px.
`overflow-x` is locked on `html, body`, so nothing can scroll sideways.
Reduced-motion preferences are respected; focus outlines are visible for keyboard users.
