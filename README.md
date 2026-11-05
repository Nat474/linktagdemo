# Linktag demo

A public profile for a fictional independent designer, Mara Ellis, plus a gallery of Portfolio, Student, and Business templates. These demonstrate the pages a visitor could see after scanning a physical Linktag.

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

Edit the typed demo content in `src/data/profile.ts`. The project previews are original HTML/CSS compositions, without external images. All people, projects, and availability are fictional. No authentication, editing, analytics, tag pairing, or database integration is included.

## Template previews

Open `/templates` using the Templates link in the header. The gallery links to `/templates/portfolio`, `/templates/student`, and `/templates/business`. All three are read-only examples with fictional local content; contact controls in these previews do not send messages, share data, or download files. The original homepage retains its sharing, contact download, and email behavior. Light and dark themes work across all pages.

Student and Business content and the gallery definitions live in `src/data/templates.ts`. The gallery is designed to show all three examples together at 1440 × 900 and stacks them on mobile.
