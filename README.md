# Christopher Foundation

A simple React site for the Christopher Foundation trust. The work is education and medical camps.

## Pages

- Home
- Gallery
- About us
- Projects
- Contractors
- Get involved

## Run it

```bash
npm install
npm run dev
```

## Edit the content

Copy and lists live apart from the page layout:

- `src/content/site.js` — name, email, navigation, the two missions
- `src/content/stats.js` — India literacy and malnutrition figures
- `src/content/about.js` — vision, mission, how a camp moves
- `src/content/projects.js` — education and medical projects
- `src/content/gallery.js` — photographs and captions
- `src/content/contractors.js` — who a camp needs, and how they are appointed
- `src/content/involve.js` — ways to take part

The enquiry form opens the visitor’s email app. It does not store messages. Change the public address in `src/content/site.js`.

Figures on the home page are national survey results (PLFS 2023–24, ASER 2024, NFHS-5). They are not a count of people the trust has reached.
