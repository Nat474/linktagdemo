# Linktag demo

A public profile for a fictional independent designer, Mara Ellis, plus nine sample designs for students, portfolios, businesses, and creators. These demonstrate the pages a visitor could see after scanning a physical Linktag.

This is a standalone Next.js project. Its components, styling, configuration, and dependency lockfile live in this folder. It requires Node.js 20.9 or newer and npm, with no environment variables or backend.

Run these commands from the `linktagdemo` folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3002.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Share uses native sharing or the clipboard; when both are unavailable, it exposes a selectable link. Save contact downloads a fictional vCard. Contact links open an email draft to a reserved `.example` address. Project details expand inline. The theme defaults to light and is saved under `linktagdemo-theme` when browser storage is available.

## Moving the source code

Copy or move this folder to your preferred location. Include `src/`, `package.json`, `package-lock.json`, the configuration files, `.npmrc`, and `.gitignore`. Leave out the generated `node_modules/`, `.next/`, `next-env.d.ts`, and `*.tsbuildinfo` files. Run `npm ci` and `npm run dev` in the new location.

The folder can be renamed. It does not need any sibling apps, shared packages, or scripts from another repository. The font is downloaded by `next/font` during the first build, so that build needs internet access; it is served locally afterward.

Edit the original portfolio's typed demo content in `src/data/profile.ts`. Its project artwork uses original HTML/CSS compositions. All people, projects, and availability are fictional. No authentication, editing, analytics, tag pairing, or database integration is included.

## Template previews

Open `/templates` using the Templates link in the header. Audience badges identify who each design caters to, and the All, Student, Portfolio, Business, and Creator filters narrow the collection. All nine are read-only examples with fictional local content; contact, booking, download, and playback controls in these previews do not perform actions. The original homepage retains its sharing, contact download, and email behavior.

| Design | Preview | Audience | Style |
| --- | --- | --- | --- |
| Campus Notes | `/templates/campus-notes` | Student, University | Notebook, cream and cobalt |
| Stack | `/templates/stack` | Portfolio, Developer | Technical, graphite and mint |
| Aperture | `/templates/aperture` | Portfolio, Photographer | Editorial, ivory and charcoal |
| Sunday Café | `/templates/sunday-cafe` | Business, Café | Neighborhood, cream and terracotta |
| Momentum | `/templates/momentum` | Business, Fitness Coach | Bold, off-white and orange |
| After Hours | `/templates/after-hours` | Creator, Musician | Expressive, midnight and pink |
| Portfolio | `/templates/portfolio` | Portfolio, Designer | Original Linktag green |
| Student | `/templates/student` | Student, Early Career | Original Linktag green |
| Business | `/templates/business` | Business, Studio | Original Linktag green |

The six new designs have fixed signature palettes, independent of the gallery's saved light/dark theme. The original three previews keep their theme toggle. New miniature and full previews share the same design components and fictional content. The gallery uses three columns on desktop, two on tablet, and one on mobile.

The typed registry and original Student/Business data live in `src/data/templates.ts`; new sample content lives in `src/data/designs.ts`. Add a registry entry and renderer to extend the collection. Fixed palette styles are scoped in `src/app/designs.css`. Photography is bundled in `public/images/templates/`, with generation prompts documented in `docs/template-assets.md`. There are no external runtime image sources.

## Branding

The header and footer use the supplied Linktag Pro logo with its black background removed. The artwork is transparent and displayed in black or white to suit each page. Next.js serves the matching adaptive SVG favicon and transparent ICO fallback from `src/app/`. Source details, file locations, and the background-removal prompt are recorded in `docs/brand-assets.md`.
