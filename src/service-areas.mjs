// Coverage follows the six areas already published by the business.
// Towns are grouped within those areas; no branch offices or completed jobs are implied.
export const serviceAreas = [
  {
    slug: 'fife', name: 'Fife', asset: 'Fife',
    summary: 'Electrical work across west, central and east Fife, from household repairs to planned testing and installation work.',
    intro: 'Arrange electrical work for a home, rental property or business in Fife. From a single room upgrade to a full rewire, send the property location and scope so we can discuss the right next step.',
    groups: [
      {name: 'West Fife', places: 'Dunfermline, Rosyth, Inverkeithing, Dalgety Bay and Crossgates', note: 'For a renovation, include the rooms affected and whether you need new sockets, lighting, a consumer unit assessment or a full rewire. Plans help us discuss the work before a visit.'},
      {name: 'Central Fife', places: 'Kirkcaldy, Glenrothes, Cowdenbeath, Kelty, Cardenden, Burntisland and Lochgelly', note: 'For inspections in occupied homes or rented premises, tell us who will provide access and whether there are dates we need to work around. Include appliance testing if you need it alongside an EICR.'},
      {name: 'East and north Fife', places: 'Leven, Cupar, St Andrews and the East Neuk', note: 'For properties outside the main towns, include the full postcode and access directions. For a holiday property, let us know about guest changeover dates and any restrictions on access.'}
    ],
    planning: 'If work is spread across more than one Fife property, list each postcode and the checks or installation work needed at each address. We can then discuss access and scheduling for the individual jobs.',
    questions: [['Do you cover Fife beyond the towns listed?', 'Enquiries are welcome from across Fife. The towns are examples, not a boundary list. Send your postcode and job details so availability can be confirmed.'], ['Can I arrange both an EICR and appliance testing?', 'Yes, ask about both when you enquire. Fixed wiring inspection and portable appliance testing are separate services, and the quotation will confirm the scope of each.']]
  },
  {
    slug: 'edinburgh', name: 'Edinburgh', asset: 'Edinburgh',
    summary: 'Electrical inspections, repairs and installation enquiries for homes, flats, rental properties and businesses across Edinburgh.',
    intro: 'Contact Erskine Electrical Solutions about electrical work in Edinburgh, including EICRs, rewiring, PAT testing and home EV charging. Tell us about the property and access so we can plan an assessment and quotation.',
    groups: [
      {name: 'Central and north Edinburgh', places: 'City centre, Leith, New Town, Stockbridge and nearby neighbourhoods', note: 'For a flat or shared entrance, include the floor, entry arrangements and the location of the meter or consumer unit. Flag any communal areas involved in the proposed work.'},
      {name: 'West and south Edinburgh', places: 'Corstorphine, Gorgie, Murrayfield, Morningside and surrounding areas', note: 'For kitchen alterations or a wider refurbishment, tell us about other trades and your intended schedule. Agree socket and lighting positions before finishes are completed.'},
      {name: 'East Edinburgh', places: 'Portobello, Duddingston, Craigmillar and nearby areas', note: 'For a home EV charger, describe your parking space and whether the cable route would involve shared land. Suitability and any permissions need assessment before installation is agreed.'}
    ],
    planning: 'Include parking or loading restrictions, stair access and any factor or building-management arrangements in your enquiry. Where work affects a shared supply or common area, explain who can authorise it.',
    questions: [['Can you work in an Edinburgh flat?', 'Enquire with the floor, property layout and access details. The electrical scope depends on the existing installation; shared areas and permissions should be discussed before work is agreed.'], ['Can you arrange work around tenants or business opening hours?', 'Tell us the available access times and any restrictions on power interruptions. Attendance and scheduling are agreed when the work is booked.']]
  },
  {
    slug: 'lothians', name: 'The Lothians', asset: 'Lothian',
    summary: 'Coverage across West Lothian, Midlothian and East Lothian for testing, rewiring, repairs and home improvements.',
    intro: 'We welcome electrical enquiries across the Lothians for homeowners, landlords and businesses. Tell us which town the property is in and whether you need an inspection, a repair or a planned installation.',
    groups: [
      {name: 'West Lothian', places: 'Livingston, Bathgate, Linlithgow, Broxburn and nearby communities', note: 'Planning an extension or garage conversion? Share a layout and the intended use, including equipment that will need power, so new circuits and the existing supply can be assessed.'},
      {name: 'Midlothian', places: 'Dalkeith, Bonnyrigg, Loanhead, Penicuik and Gorebridge', note: 'For a home upgrade, list the rooms and fittings involved. If several small jobs are needed, include them together so the full scope can be discussed.'},
      {name: 'East Lothian', places: 'Musselburgh, Tranent, Haddington, North Berwick and Dunbar', note: 'For outdoor sockets, lighting or garden-room power, include distances from the house, existing wiring and photographs of the proposed route. Groundworks and making good should be agreed in the quote.'}
    ],
    planning: 'Use the full postcode, especially for village or rural properties. Include the approximate cable distance for detached garages and outbuildings, and say whether excavation or other building work is already planned.',
    questions: [['Do you cover all three Lothian areas?', 'We accept enquiries across West Lothian, Midlothian and East Lothian. Confirm your postcode, job type and preferred timing with us before booking.'], ['Where should I look for Edinburgh coverage?', 'Edinburgh has its own service-area page. You can also enquire directly with an Edinburgh postcode; the same contact details apply.']]
  },
  {
    slug: 'dundee', name: 'Dundee', asset: 'Dundee',
    summary: 'Domestic and commercial electrical enquiries across Dundee, including inspections, appliance testing and installation work.',
    intro: 'Arrange an enquiry for electrical work in Dundee, from testing in a rental property or small business to a home rewire or consumer unit upgrade. We discuss the installation, access and required work before confirming a quotation.',
    groups: [
      {name: 'Central and west Dundee', places: 'City centre, West End, Lochee and nearby neighbourhoods', note: 'For a shop, office or workshop, tell us about opening hours, equipment that must remain available and how any interruption to power can be managed.'},
      {name: 'North Dundee', places: 'Downfield, St Marys, Kirkton and surrounding neighbourhoods', note: 'For inspection enquiries, include the property type, approximate size and any previous report. Known faults or planned alterations help us understand what needs assessment.'},
      {name: 'East Dundee', places: 'Stobswell, Douglas, Broughty Ferry and nearby areas', note: 'For appliance testing, provide an approximate equipment count and identify items that are difficult to access or disconnect. Include any reporting requirements with your enquiry.'}
    ],
    planning: 'For managed properties, provide the site contact and access arrangements as well as the Dundee postcode. If you have a deadline for an inspection or handover, state it when enquiring so we can confirm whether it can be accommodated.',
    questions: [['Can I enquire about commercial testing in Dundee?', 'Yes. Send the premises type, approximate circuit or appliance count and any access restrictions. EICR inspections and PAT testing have different scopes, which will be set out in the quotation.'], ['Does Dundee coverage include surrounding towns?', 'For an address outside Dundee, send the postcode and job details. We will confirm whether we can attend before a booking is made.']]
  },
  {
    slug: 'stirling', name: 'Stirling', asset: 'Stirling',
    summary: 'Electrical work in Stirling and nearby communities, with visits planned around the property, access and project scope.',
    intro: 'Enquire about electrical inspections, rewiring, repairs and installations in Stirling. Whether the job is in an occupied home, a rental property or business premises, describe the work and your preferred timing.',
    groups: [
      {name: 'Stirling city', places: 'City centre, Riverside, St Ninians and Bannockburn', note: 'For work in an occupied property, explain which rooms will remain in use and any access constraints. Power interruptions, furniture access and making good can then be discussed.'},
      {name: 'Nearby communities', places: 'Bridge of Allan, Dunblane and surrounding locations by enquiry', note: 'For a property outside the city, include the postcode and access directions. If you need power for a separate garage or garden building, add the intended equipment and approximate distance from the main supply.'}
    ],
    planning: 'For an older installation, share any previous inspection findings rather than assuming a full rewire is necessary. Assessment establishes the condition and what work is appropriate for the property and your plans.',
    questions: [['Does an older property automatically need rewiring?', 'No. Age alone does not establish that a rewire is needed. Inspection and assessment help identify the installation condition and suitable next steps.'], ['Can you assess power for a separate building?', 'Enquire with the intended use, equipment and approximate cable route. The supply, installation method and any groundworks need assessment before the scope is agreed.']]
  },
  {
    slug: 'falkirk', name: 'Falkirk', asset: 'Falkirk',
    summary: 'Electrical services in Falkirk and surrounding towns for household projects, rental properties and business premises.',
    intro: 'Contact us about EICRs, PAT testing, rewiring, home EV charging and other electrical work in the Falkirk area. Send the location and a clear description of the job to discuss a visit and quotation.',
    groups: [
      {name: 'Falkirk and nearby towns', places: 'Falkirk, Larbert, Stenhousemuir, Camelon and Polmont', note: 'For a rewire or room renovation, send the proposed layout and quantities of sockets and lights. Mention whether the property will be empty or occupied while work takes place.'},
      {name: 'Grangemouth, Bo’ness and surrounding areas', places: 'Grangemouth, Bo’ness, Denny and Bonnybridge', note: 'For business premises, explain the use of the building, any site induction requirements and suitable working hours. Specialist or larger installations need their scope confirmed individually.'}
    ],
    planning: 'For EV charging at home, include the parking position, possible charger location and distance from the consumer unit. For rented or shared parking, explain the permission arrangements before equipment is selected.',
    questions: [['Can I combine several electrical jobs in one enquiry?', 'Yes. List each task, including repairs, replacement fittings or extra sockets, and include photographs where useful. The quotation will confirm what can be included and how visits will be arranged.'], ['Is there a fixed attendance time across the Falkirk area?', 'Attendance depends on availability and the job. Call to discuss urgent requirements; a service-area listing does not promise an immediate visit. Call-out charges may apply.']]
  }
];

export const areaRoute = area => '/service-areas/' + area.slug;

export function renderServiceAreas({heading, escape, img, action, mail, phone, faq, contact, services}) {
  const bodies = {}, metadata = {};
  const links = (items, label) => `<nav class="area-links" aria-label="${label}">${items.map(a => `<a href="${areaRoute(a)}">${escape(a.name)}</a>`).join('')}</nav>`;
  const offers = services.filter(s => ['eicr','pat-testing','rewiring','ev-charger-installation'].includes(s.slug));
  const serviceCards = () => `<div class="service-links">${offers.map(s => `<article><h3><a href="/services/${s.slug}">${escape(s.name)}</a></h3><p>${escape(s.intro)}</p><a href="/services/${s.slug}">Explore ${escape(s.name.toLowerCase())}</a></article>`).join('')}</div>`;
  bodies['/service-areas'] = `<section class="section"><div class="wrap">${heading('Find your service area', 'Electrical services across Fife, Edinburgh, the Lothians, Dundee, Stirling and Falkirk.')}<p class="lead">Choose your area for local coverage and help planning your electrical work.</p>${links(serviceAreas,'Choose a service area')}<div class="area-grid coverage-cards">${serviceAreas.map(a => `<article>${img('/assets/'+a.asset+'.webp',a.name)}<div class="area-copy"><h2><a href="${areaRoute(a)}">${escape(a.name)}</a></h2><p>${escape(a.summary)}</p><a class="area-more" href="${areaRoute(a)}">View ${escape(a.name === 'The Lothians' ? 'Lothians' : a.name)} coverage <span aria-hidden="true">→</span></a></div></article>`).join('')}</div><section class="notice"><h2>Planning a visit</h2><p>Send your postcode, the property type and a short description of the work. Include preferred dates and any access restrictions. We will confirm availability and discuss whether a site visit is needed before quoting.</p><p>Nearby towns and rural addresses are welcome by enquiry. Attendance and any call-out charges are agreed when you contact us.</p>${action('Ask about your postcode',mail(undefined,'Service area enquiry — Erskine Electrical Solutions',['Property type','Access arrangements']))}</section><section><h2>Services available across our coverage area</h2>${serviceCards()}<p><a href="/services">Explore all electrical services</a>, including consumer unit upgrades, repairs, outdoor power and landlord services.</p></section></div></section>` + contact();
  for (const area of serviceAreas) {
    const route = areaRoute(area);
    metadata[route] = [`Electrician in ${area.name} | Erskine Electrical Solutions`, `Electrical services in ${area.name}: EICRs, PAT testing, rewiring and home EV charging. Explore local coverage and enquire about your property.`];
    bodies[route] = `<section class="section"><div class="wrap">${heading('Electrician serving '+area.name)}<div class="service-intro"><div><p class="lead">${escape(area.intro)}</p><p>For homeowners, landlords and businesses. Availability and the scope of work are confirmed for your address.</p><div class="actions">${action('Enquire about work in '+area.name,mail(undefined,area.name+' electrical enquiry — Erskine Electrical Solutions',['Property type','Access arrangements']))}${action('Call us',phone,true)}</div></div>${img('/assets/'+area.asset+'.webp',area.name,'area-photo')}</div><section class="area-localities"><h2>Areas we cover in ${escape(area.name)}</h2><p>These locations help you find the right coverage area. If your address is not listed, send your postcode to check availability.</p><div class="locality-grid">${area.groups.map(g => `<article><h3>${escape(g.name)}</h3><p class="place-list">${escape(g.places)}</p><p>${escape(g.note)}</p></article>`).join('')}</div></section><section><h2>Electrical services in ${escape(area.name)}</h2>${serviceCards()}<p>Also explore <a href="/services/consumer-unit-upgrades">consumer unit upgrades</a>, <a href="/services/outdoor-power-and-lighting">outdoor power and lighting</a>, <a href="/services/garden-room-electrics">garage and garden-room electrics</a> and <a href="/services/landlord-electrical-services">landlord electrical services</a>.</p></section><section class="notice"><h2>Before you book</h2><p>${escape(area.planning)}</p><p>Send photos where helpful, but do not remove electrical covers. See our <a href="/pricing">published guide prices</a> and contact us for a quotation specific to your job.</p><p><a href="/about-us#qualifications">Read about our qualifications</a> and <a href="/testimonials-and-reviews">customer feedback</a>.</p></section><section><h2>Questions about work in ${escape(area.name)}</h2>${faq(area.questions)}</section><section class="nearby-areas"><h2>Explore our other service areas</h2>${links(serviceAreas.filter(a => a !== area),'Other service areas')}<p><a href="/service-areas">Back to all service areas</a></p></section></div></section>` + contact();
  }
  return {bodies, metadata};
}
