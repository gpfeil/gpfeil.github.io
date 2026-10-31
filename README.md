# gpfeil.github.io

Personal site. Layout modeled on robert-chiniquy.github.io.

## Files

- `tiles.js`: all the content (header links and tiles). This is the only file you edit to add, change, reorder or hide tiles.
- `images/`: pictures used by tiles.
- `index.html`, `css/site.css`, `js/`: page, styles, and scripts. You shouldn't need to touch these.

## Adding a tile

Ask Claude ("add a tile about X, with this link/image"), or copy a block in `tiles.js` and edit it. The field list is at the top of that file.

## Keys

- `d`: dark mode

## Publishing on GitHub Pages

1. Create a repo named `gpfeil.github.io` (or use an existing one).
2. Upload everything in this folder to the repo's root.
3. Settings → Pages → Deploy from branch → `main` / root.
4. The site appears at https://gpfeil.github.io within a minute or two.

## Browser caching

`index.html` loads each script and stylesheet with a `?v=` date tag. Change that tag whenever `tiles.js`, `css/` or `js/` changes, so visitors get the new version right away.
