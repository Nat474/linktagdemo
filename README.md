# Linktag demo

A static Linktag product demo centered on fictional student Jamie Park. Open the dashboard, view the demo keychain, and scan its real QR to open Jamie’s Campus Notes public profile. Explore eight other fictional people and businesses, plus nine sample designs.

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

Share uses native sharing or the clipboard; when both are unavailable, it exposes a selectable link. Copy link and QR downloads work. Audience filters, navigation, and project disclosures work locally. Contact, booking, playback, contact-card download, and template application are presentational. No profile details are editable. The theme defaults to light and is saved under `linktagdemo-theme` when browser storage is available.

## Product demo

The main URL redirects to `/dashboard`. There is no login: Jamie Park is the fixed demo account, using Campus Notes.

| Route | Purpose |
| --- | --- |
| `/dashboard` | Profile, design, and keychain overview, sharing, and suggested people |
| `/dashboard/profile` | Read-only account details and public profile link |
| `/dashboard/keychain` | Keychain front/back illustration, scannable QR, and PNG/SVG downloads |
| `/explore` | Eight other fictional profiles with audience filters |
| `/templates` | Nine sample designs; Campus Notes is the current design |
| `/templates/[template]` | Full-size, read-only design previews |
| `/p/[slug]` | Public profiles without application navigation |

The public slugs are `jamie-park`, `noah-chen`, `elena-rossi`, `sunday-cafe`, `jordan-brooks`, `luna-vale`, `mara-ellis`, `alex-morgan`, and `goodkind-studio`. Unknown profiles and templates return 404. Mara’s original homepage content is available at `/p/mara-ellis`.

The typed local directory in `src/data/directory.ts` connects stable profile slugs to the template registry and existing content. All profile pages are generated at build time. No authentication, database, API, account persistence, analytics, or hardware pairing is included. The dashboard’s keychain is an illustration of a proposed physical product.

### QR artwork

`src/data/demo.json` is the source of the canonical origin, current profile slug, and sample keychain ID. Sharing and the QR always target the canonical production URL, even when the app is viewed locally or on a preview deployment:

**https://linktagdemo.vercel.app/p/jamie-park**

The profile route must be deployed before scanning can reach it. After deployment, test it in a private browser and over mobile data; scan from a second screen or printed proof before manufacturing keychains.

Regenerate the bundled artwork after changing the demo configuration:

```sh
npm run generate:qr
```

This development-only command uses `qrcode` to produce `public/qr/jamie-park.svg` and a 1536-pixel PNG. Both encode the same URL, with black modules, an opaque white background, a four-module quiet zone, and error correction level M. There is no logo overlay, external QR service, or runtime generation. The keychain illustration uses this same SVG; both formats are downloadable. Asset paths are derived from the configured profile slug.

## Moving the source code

Copy or move this folder to your preferred location. Include `src/`, `package.json`, `package-lock.json`, the configuration files, `.npmrc`, and `.gitignore`. Leave out the generated `node_modules/`, `.next/`, `next-env.d.ts`, and `*.tsbuildinfo` files. Run `npm ci` and `npm run dev` in the new location.

The folder can be renamed. It does not need any sibling apps, shared packages, or scripts from another repository. The font is downloaded by `next/font` during the first build, so that build needs internet access; it is served locally afterward.

Edit the original portfolio's typed demo content in `src/data/profile.ts`. Its project artwork uses original HTML/CSS compositions. All people, projects, and availability are fictional. No authentication, editing, analytics, tag pairing, or database integration is included.

## Template previews

Open `/templates` using the application navigation. Audience badges identify who each design caters to, and the All, Student, Portfolio, Business, and Creator filters narrow the collection. All nine are read-only examples with fictional local content; contact, booking, download, and playback controls in these previews do not perform actions. The gallery has 9 All, 2 Student, 3 Portfolio, 3 Business, and 1 Creator entries. Explore excludes Jamie, so its corresponding counts are 8, 1, 3, 3, and 1.

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
