# Erskine Electrical Solutions website

Official source for the static business website, held in the business-owned repository https://github.com/erskineelectricalsolutions/website.

## Local preview

Requires Node.js 22 or later. No package dependencies are needed.

Run `npm run build`, then `npm run check` and `npm start`. Open http://localhost:4173.

## Edit the site

- Original content, prices and galleries: `src/site.json`.
- Core service pages, FAQs and page metadata: `src/improvements.mjs`.
- Service-area hub, six regional pages and town coverage: `src/service-areas.mjs`.
- Additional services, four dedicated pages and tailored quotation wording: `src/additional-services.mjs`.
- Google review snapshot, date and source link: `src/google-reviews.mjs`. Refresh manually against Google and keep attribution.
- Layout and contact links: `scripts/build.mjs`.
- Styling: `public/styles.css` and `public/improvements.css`.
- Images, fonts and PDF: `public/assets/`. Font licences: `licenses/`.

Contact buttons use editable email drafts and telephone links. There are no forms, databases, analytics scripts or paid widgets. Existing named testimonials are retained.

## Deployment status

The source is held in this public business-owned repository. The live website is [erskineelectricalsolutions.com](https://erskineelectricalsolutions.com), hosted through the existing Cloudflare Pages Direct Upload project `erskine-electrical-preview1`.

The 5 October 2026 release includes eight additional service descriptions and four dedicated pages for home EV charging, outdoor power and lighting, garage/garden-room electrics and landlord electrical services. Smart home installations cover connected devices and controls, with lighting and heating as examples. New services use property-specific quotations; existing published guide prices are unchanged. The earlier rewiring access guidance is preserved.

The 6 October 2026 update adds a service-area hub linking to detailed pages for Fife, Edinburgh, the Lothians, Dundee, Stirling and Falkirk. Towns and neighbourhoods are grouped within those areas, with practical visit guidance and links to electrical services. Lochgelly is one town in the Fife list; the site does not emphasise a residential base or claim local offices. A dedicated PAT testing page uses the existing service and published prices. EICR and rewiring guidance is expanded, and service pages link back to the coverage pages.

The site has 25 content pages plus a 404 page. Builds and checks cover links, metadata, assets, enquiry drafts, the original pricing text, structured data and sitemap inclusion. Desktop and mobile checks cover the new coverage and PAT routes. New town-specific pages should be supported by useful, verified local information rather than duplicated regional copy.

GitHub is not connected to automatic deployment. Pushing source here does not publish it to Cloudflare. Build and check the production `public/` output before a separate Direct Upload. The separate `build:sites`/`check:preview` commands produce and check a noindex review copy in `dist/`; do not upload that copy to the business domain.

A production ZIP can omit unreferenced asset copies to fit the Cloudflare archive limit, but must retain every page-linked asset, responsive image variant, font, gallery image, PDF, `_headers` and `_redirects`. The 5 October release uploaded 259 files including the two configuration files; all original assets remain in the source repository. The improvements stylesheet uses a content-derived version in its URL to refresh returning browsers after styling changes.

## Future Git-integrated Cloudflare Pages settings

- Repository: `erskineelectricalsolutions/website`
- Production branch: `main`
- Framework: None
- Build command: `npm run build && npm run check`
- Output directory: `public`
- Root directory: repository root
- Node.js: 22
- No secrets required

If Git integration is configured in future, it can deploy updates after each push to main. It is not enabled for the existing Direct Upload project. The `_headers` file prevents indexing of pages.dev hosts; the business domain remains indexable.

## Domain and email

The business domain is erskineelectricalsolutions.com. Preserve all current DNS records before changing nameservers. Google Workspace continues to provide the existing mailbox and both published addresses. Do not enable Cloudflare Email Routing or replace Google MX/SPF/DKIM records.

At handover the public registrar record identified Squarespace Domains II LLC. Registrar transfer is optional and separate from website/DNS hosting. Do not cancel the old website until the replacement and email send/receive checks pass.

## Ownership

Business images and content retain their existing ownership. No general open-source licence is granted by this public repository.
