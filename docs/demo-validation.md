# Static product demo validation

Validated locally on 18 November 2026 against a production build on port 3002.

- TypeScript and ESLint passed; Next.js generated 28 static pages, including all nine public profiles and nine existing design previews.
- HTTP checks passed for 23 application, gallery, and profile routes, their titles and no-index metadata. `/` redirects to `/dashboard`; unknown profile and template slugs return 404.
- Public profiles have sharing controls without application navigation or template-preview framing. Fixed-palette profiles have no theme toggle; the original three retain it. There are no editable fields, forms, active contact links, booking, or playback actions.
- Explore filters returned 8 All, 1 Student, 3 Portfolio, 3 Business, and 1 Creator. Template filters returned 9, 2, 3, 3, and 1. Enter and Space activated filters in the browser; counts and pressed states updated.
- Browser navigation covered dashboard to keychain to Jamie’s public profile, public branding back to the dashboard, Explore, account overview, templates, a full preview, and its back link.
- Browser copy-link feedback and SVG downloading passed. Six isolated sharing-helper scenarios passed: native sharing, copying the canonical URL, absent capabilities, denied clipboard access, share cancellation, and native-share failure falling back to copying. The native operating-system share sheet was not used to send a message.
- An independent decoder (`jsQR`, used from the temporary npm cache, not added to the project) decoded both PNG and rasterized SVG QR assets to `https://linktagdemo.vercel.app/p/jamie-park`. Both images have fully opaque backgrounds. HTTP downloads returned the appropriate image content types.
- Captured dashboard, account overview, keychain, Explore, templates, Jamie’s public profile, and Mara’s public profile at 1440 × 900, 834 × 1112, and 390 × 844 in both themes. Reviewed representative desktop, tablet, and mobile views. No horizontal document overflow was detected across the 42 captures. Desktop image checks reported no broken images; the browser console had no warnings or errors.
- Confirmed that opening the cream/cobalt Campus Notes preview from a dark gallery keeps its fixed palette and that returning retains the dark application theme.

## Checks after deployment

The checks above were performed locally. The bundled QR targets the production domain, so complete these checks after the new public route is deployed:

1. Open the public URL in a private browser without logging in.
2. Scan the QR on a second screen or a printed proof using multiple phones, including over mobile data.
3. Test the finished physical keychain before manufacturing further samples.

These physical and deployed-network checks cannot be established by local browser testing.
