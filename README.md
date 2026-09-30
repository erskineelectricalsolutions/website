# Erskine Electrical Solutions website

Official source for the static business website, held in the business-owned repository https://github.com/erskineelectricalsolutions/website.

## Local preview

Requires Node.js 22 or later. No package dependencies are needed.

Run `npm run build`, then `npm run check` and `npm start`. Open http://localhost:4173.

## Edit the site

- Original content, prices and galleries: `src/site.json`.
- Service pages, FAQs and page metadata: `src/improvements.mjs`.
- Google review snapshot, date and source link: `src/google-reviews.mjs`. Refresh manually against Google and keep attribution.
- Layout and contact links: `scripts/build.mjs`.
- Styling: `public/styles.css` and `public/improvements.css`.
- Images, fonts and PDF: `public/assets/`. Font licences: `licenses/`.

Contact buttons use editable email drafts and telephone links. There are no forms, databases, analytics scripts or paid widgets. Existing named testimonials are retained.

## Deployment status

The source was uploaded to this repository on 30 September 2026. The repository is currently public with the owner’s authorised collaborator’s approval; the repository owner can change visibility later.

A separate Cloudflare Pages Direct Upload preview project named `erskine-electrical-preview` has been created in the business account. Its first upload is pending. It is not connected to GitHub and does not deploy automatically. The future Git-integrated production project requires the repository owner to authorise Cloudflare for this repository; Direct Upload projects cannot be converted to Git integration. Alternatively, Direct Upload can later be automated through a separately authorised GitHub Actions workflow.

The live domain and email are unchanged. Domain cutover awaits access to Squarespace Domains, a complete DNS export, and coordinated DNSSEC handling.

## Future Git-integrated Cloudflare Pages settings

- Repository: `erskineelectricalsolutions/website`
- Production branch: `main`
- Framework: None
- Build command: `npm run build && npm run check`
- Output directory: `public`
- Root directory: repository root
- Node.js: 22
- No secrets required

Cloudflare Git integration deploys updates after each push to main. Check the pages.dev deployment before connecting the business domain. The _headers file prevents indexing of pages.dev hosts; the business domain remains indexable.

## Domain and email

The business domain is erskineelectricalsolutions.com. Preserve all current DNS records before changing nameservers. Google Workspace continues to provide the existing mailbox and both published addresses. Do not enable Cloudflare Email Routing or replace Google MX/SPF/DKIM records.

At handover the public registrar record identified Squarespace Domains II LLC. Registrar transfer is optional and separate from website/DNS hosting. Do not cancel the old website until the replacement and email send/receive checks pass.

## Ownership

Business images and content retain their existing ownership. No general open-source licence is granted by this public repository.
