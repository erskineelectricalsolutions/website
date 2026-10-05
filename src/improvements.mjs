import { additionalPages } from './additional-services.mjs';
export const reviewed = '2026-09-30';
export const selectDirectory = 'https://select.org.uk/SELECT/Website/Find_Member/map.aspx?WebsiteKey=4d9a0542-1313-4a08-8c67-8a6a2310cf7c';
export const coverage = 'Fife, Edinburgh, the Lothians, Dundee, Stirling and Falkirk';
export const services = [
  {
    slug: 'eicr', name: 'EICR inspections', title: 'EICR inspections in Fife and Central Scotland', sourceIndex: 1,
    description: 'Domestic and commercial EICR inspections in Fife, Edinburgh and Central Scotland. See guide prices and ask us for a property-specific quote.',
    intro: 'An Electrical Installation Condition Report (EICR) records the condition of the fixed electrical installation. Erskine Electrical Solutions carries out inspections for homeowners, landlords and businesses.',
    points: ['Inspection and testing of the existing electrical installation.', 'A report recording the findings and any issues identified.', 'A property-specific quotation based on size, circuits, access and installation condition.'],
    price: 'Domestic EICRs typically £200–£250',
    priceDetail: 'Larger properties and older or deteriorating installations may cost more. Commercial guide prices start at £250–£400 for up to 10 circuits; see the pricing page for the complete circuit bands.',
    prepare: 'Send your postcode, property type, approximate size and, if known, the number of circuits or consumer units. Mention whether the property is occupied and any access restrictions. Ask about the expected visit length and any interruption to the supply when arranging the inspection.',
    faq: [
      ['What does an EICR tell me?', 'It reports on the condition of the fixed electrical installation at the time of inspection and identifies observed issues that may need attention. It is an inspection report, rather than a promise that no future faults can occur.'],
      ['Does the inspection price include repairs?', 'The published guide covers the inspection and report. Ask for any remedial work and its cost to be identified in the written quotation before authorising it; do not assume repairs are included in an inspection price.'],
      ['Can you inspect a commercial property?', 'Yes. Commercial EICR guide prices are grouped by circuit count, with larger and more complex sites assessed individually. Share details of the premises and access so the scope can be agreed.']
    ],
    guidance: ['Electrical Safety First: periodic inspection and testing', 'https://www.electricalsafetyfirst.org.uk/find-a-registered-electrician/periodic-inspection-and-testing/']
  },
  {
    slug: 'rewiring', name: 'Rewiring', title: 'House and commercial rewiring in Fife', sourceIndex: 0,
    description: 'Full and partial rewiring in Fife and Central Scotland, including kitchens, bathrooms and renovations. Explore guide prices and arrange a site visit.',
    intro: 'From a kitchen or bathroom upgrade to a full property rewire, Erskine Electrical Solutions plans electrical installation work around the building and the work you need.',
    points: ['Full property rewires and targeted kitchen or bathroom upgrades.', 'Wiring, socket and lighting layouts agreed around the project.', 'Testing and certification of the completed electrical work.'],
    price: 'Three-bedroom house guide: £3,500–£5,500',
    priceDetail: 'The published standard full-rewire guide includes a consumer unit upgrade, lighting, sockets and earthing/bonding. Room count, access, number of points and occupation affect the quote. Single-room/minor rewires are listed at £600–£1,100.',
    prepare: 'Tell us whether the project is a full rewire, a renovation or work in one room. Share your postcode, room count, plans for sockets and lighting, and whether the property will be occupied. Discuss access, making good, decorating and the work schedule during the site visit.',
    accessNote: 'Good access is important for a rewire. An empty property is generally much easier to rewire than a lived-in home with furniture and belongings throughout. Clear access to rooms, walls and floor areas helps us work efficiently; moving and protecting furniture and working around occupants can add time and affect the cost. We will discuss access and preparation during the site visit.',
    faq: [
      ['Can you rewire just a kitchen or bathroom?', 'Yes. The service includes targeted upgrades as well as full property rewires. The existing installation and the proposed work need assessment before the scope and price can be confirmed.'],
      ['What changes the cost of a rewire?', 'Property size, access to walls and ceilings, socket and lighting quantities, and whether the building is occupied all affect the work. Commercial projects also vary by circuit count, distribution boards and supply type.'],
      ['Does the guide price include decorating?', 'The published guide describes electrical work and does not state a making-good or decorating allowance. Ask for these items, fittings, materials and any applicable VAT to be clearly listed in your written quote.']
    ]
  },
  {
    slug: 'consumer-unit-upgrades', name: 'Consumer unit upgrades', title: 'Consumer unit upgrades in Fife', sourceIndex: 2,
    description: 'Consumer unit and fuse box upgrades in Fife and Central Scotland. Explore RCBO and surge protection, guide prices and what to discuss before booking.',
    intro: 'A consumer unit distributes electricity to the circuits in your property. Erskine Electrical Solutions assesses the existing installation and provides consumer unit upgrades for homes and other premises.',
    points: ['An upgrade selected for the property and its circuits.', 'Individual circuit protection with RCBOs and a surge protection device, as described in our installation specification.', 'Testing and certification of the installation work.'],
    price: 'Standard home upgrade guide: £550–£800',
    priceDetail: 'The guide lists £450–£540 for a small property with 3–4 circuits, £550–£800 for an average home and £800–£1,200+ for larger properties. The final scope depends on the existing installation.',
    prepare: 'Share your postcode, property type and a photo of the outside of the existing consumer unit if it is safe and convenient. Do not remove covers. Mention known faults and any planned new circuits. Ask about supply interruption and whether existing wiring needs other work.',
    faq: [
      ['Is a consumer unit upgrade the same as a rewire?', 'No. A consumer unit upgrade replaces the distribution and protective equipment. A rewire replaces wiring and associated equipment within an agreed scope. An assessment establishes what your property needs.'],
      ['What protection is included?', 'Our published specification describes individual RCBO protection and a surge protection device. Ask for the proposed unit, circuit count, testing and certification to be set out in your quotation.'],
      ['Will replacing the unit fix every existing wiring fault?', 'Existing wiring still needs assessment. Ask for any additional work to be identified and priced before authorising it; a new consumer unit alone does not replace the rest of the installation.']
    ]
  },
  ...additionalPages
];

export const metadata = {
  '/': ['Electrician in Fife | Erskine Electrical Solutions', 'Electrician covering Fife and Central Scotland with 24-hour availability, 7 days a week. EICRs, rewiring and repairs. Call-out charges may apply.'],
  '/about-us': ['About Keir Erskine | Erskine Electrical Solutions', 'Meet Erskine Electrical Solutions. Read about electrical qualifications, SELECT membership, testing, certification and work for homes and businesses.'],
  '/services': ['Electrical Services in Fife | EICRs, Rewiring & Repairs', 'Electrical services for homes and businesses in Fife: EV charger enquiries, outdoor power, garden rooms, landlord services, small jobs and electrical testing.'],
  '/pricing': ['Electrical Work Prices | Erskine Electrical Solutions', 'Guide prices for EICRs, rewiring, consumer unit upgrades, repairs and testing. Understand the stated inclusions and request a quote for your property.'],
  '/service-areas': ['Electrician Service Areas | Fife & Central Scotland', 'Erskine Electrical Solutions covers Fife, Edinburgh, the Lothians, Dundee, Stirling and Falkirk. Contact us with your postcode and electrical enquiry.'],
  '/social-media-1': ['Our Work on Social Media | Erskine Electrical Solutions', 'Visit the genuine Erskine Electrical Solutions Instagram and Facebook accounts for electrical project photos and business updates.'],
  '/testimonials-and-reviews': ['Customer Reviews | Erskine Electrical Solutions', 'Read Google review excerpts, Facebook feedback and customer testimonials for Erskine Electrical Solutions, with links to the original reviews.'],
  '/safety-and-compliance': ['Electrical Safety & Qualifications | Erskine Electrical Solutions', 'Read the electrical qualifications and safety approach of Erskine Electrical Solutions and download the business Health and Safety Policy.'],
  '/blog': ['Electrician’s Blog | Erskine Electrical Solutions', 'A Day in the Life: electrical work, projects and insights from Keir Erskine of Erskine Electrical Solutions.'],
  '/blog/f/welcome': ['A Day in the Life: Welcome | Keir Erskine', 'An introduction to A Day in the Life of an Electrician, written by Keir Erskine of Erskine Electrical Solutions on 27 June 2024.'],
  '/privacy': ['Privacy & Enquiries | Erskine Electrical Solutions', 'How this website works, what happens when you email or call Erskine Electrical Solutions, and how to ask about your personal information.']
};
