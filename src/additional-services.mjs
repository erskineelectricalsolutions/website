export const quotationNote = 'Every property and installation is different. Costs depend on the work required, access, cable routes, materials and the condition of the existing electrical installation. Contact us with details of your job and we’ll advise whether a site visit is needed before providing a tailored quotation.';
export const additionalWorkNote = 'Any additional work identified during assessment will be discussed and quoted before it is agreed. Your quotation will set out the included work, materials and any exclusions.';

export const additionalServices = [
  {slug:'ev-charger-installation', name:'Home EV charger installation', summary:'Enquire about a home car charger, replacement of an existing unit and help with setup. Suitability, charger choice and any electrical upgrades are assessed before a final quotation.', factors:'Charger choice, parking and mounting position, cable route, the existing supply and any required upgrades.'},
  {slug:'outdoor-power-and-lighting', name:'Outdoor sockets and lighting', summary:'Weatherproof sockets, security lights, driveway and garden lighting. Discuss a new installation, replacement fittings or improvements to an existing outdoor space.', factors:'Fitting quantities, cable routes, circuit condition, access and any trenching or making good.'},
  {slug:'small-electrical-jobs', name:'Extra sockets and small electrical jobs', summary:'Small jobs are welcome: extra sockets, replacement switches, light fittings and kitchen cupboard lighting. Send a list of tasks to discuss arranging them in one visit.', factors:'New points versus replacements, fitting choice, access to wiring and the number of tasks.'},
  {slug:'landlord-electrical-services', name:'Landlord electrical services', summary:'Arrange EICRs, testing of landlord-supplied appliances, smoke and heat alarm checks, remedial work and renewal reminders. Discuss the work needed for one property or several.', factors:'Property size, circuit and appliance counts, alarm checks, access arrangements and separately quoted repairs.'},
  {slug:'extractor-fans', name:'Extractor fan installation and replacement', summary:'Enquire about bathroom fans, quieter replacements and humidity-controlled models. New installations and changes to existing extraction are assessed for wiring, ducting and access.', factors:'Fan choice, existing wiring and ducting, new openings and access to the installation.'},
  {slug:'garden-room-electrics', name:'Garage, shed and garden-room electrics', summary:'Plan power, sockets and lighting for a garage, shed or garden room. If you need data cabling as well, include it in your enquiry so availability and scope can be confirmed.', factors:'Distance from the supply, intended equipment, cable routes, groundworks and the number of sockets and lights.'},
  {slug:'smart-home-installations', name:'Smart home installations', summary:'Explore connected devices and controls for your home, including smart lighting, switches and heating controls. Tell us what you want to automate or control, along with any existing devices, so compatibility and the work we can undertake can be confirmed.', factors:'Device and system choice, compatibility with existing equipment, wiring, connectivity and setup requirements.'},
  {slug:'business-lighting-and-maintenance', name:'Small-business lighting and maintenance', summary:'Lighting upgrades, repairs, emergency-lighting work and planned electrical maintenance for smaller business premises. Discuss a single job or an agreed programme of visits.', factors:'Fitting quantities, access equipment, working hours, testing requirements and the agreed visit schedule.'}
];

export const additionalPages = [
  {
    slug:'ev-charger-installation', name:'Home EV charger installation', title:'Home EV charger installation in Fife',
    description:'Discuss home car charger installation or replacement in Fife and Central Scotland. Property-specific assessment, charger setup and tailored quotations.',
    intro:'Planning to charge your car at home? Tell us about your parking space and property to discuss a new EV charger, replacement unit or setup requirements.',
    points:['Discuss a charger location that works with your parking arrangements.', 'Assess the existing electrical supply, cable route and any upgrades needed.', 'Agree charger choice, installation scope, commissioning and customer setup in the quotation.'],
    reasons:'You may be preparing for your first electric car, replacing an existing charger or changing where you park. Suitability is assessed for your property; not every parking arrangement or electrical supply will be suitable without additional work.',
    priceDetail:'Charger model, mounting position, distance from the supply, access and cable route all affect the work. The assessment also considers any supply or consumer-unit changes and the applicable electricity-network process. There is no one-size-fits-all installation price.',
    prepare:'Send your postcode, parking details, intended charger location and whether you already have a charger in mind. Mention shared parking, any permissions needed and the approximate distance to the electrical supply. Photos of the parking area and the outside of the consumer unit can help; do not remove electrical covers.',
    enquiryFields:['Parking arrangements','Proposed charger location','Existing or preferred charger','Approximate cable route / distance'],
    faq:[
      ['Can every home have an EV charger?', 'Suitability depends on the parking arrangements, permissions, available supply and a practical cable route. These need assessment before the installation scope and final quotation can be confirmed.'],
      ['Can I choose the charger?', 'Tell us the model you are considering or ask to discuss options. Compatibility, installation requirements and the models we can support must be confirmed before you buy equipment or book the work.'],
      ['Will my consumer unit or electricity supply need an upgrade?', 'That depends on the existing installation and the proposed charger. Any required upgrades and network application or notification arrangements will be explained as part of the assessment and quotation.'],
      ['Does the enquiry include setup or replacement of an existing charger?', 'Yes, include replacement and setup requirements in your enquiry. The quotation will confirm equipment, installation work, commissioning and customer handover.']
    ],
    related:['consumer-unit-upgrades','outdoor-power-and-lighting','garden-room-electrics']
  },
  {
    slug:'outdoor-power-and-lighting', name:'Outdoor power and lighting', title:'Outdoor sockets and lighting in Fife',
    description:'Outdoor sockets, security lights, driveway and garden lighting in Fife and Central Scotland. Discuss your layout and request a tailored quotation.',
    intro:'Make your outdoor space more practical with sockets and lighting planned around how you use your home, driveway and garden.',
    image:{src:'/assets/thumbnail_IMG_2349.webp',alt:'Existing Erskine Electrical Solutions project photograph showing illuminated garden decking.'},
    points:['Weatherproof sockets for suitable outdoor locations.', 'Security lights and lighting for driveways, paths and gardens.', 'Replacement fittings or a new lighting layout assessed for your property.'],
    reasons:'You might need a convenient outdoor socket, better light by an entrance or lighting for a seating area. Share the areas you want to use and any problems with existing fittings.',
    priceDetail:'The number and type of fittings, suitable circuit capacity, cable routes and access affect the quotation. Trenching, difficult access, removal of old fittings and making good need to be agreed in the scope.',
    prepare:'Send your postcode, the locations needing power or lighting, approximate quantities and photos of the area. Mention existing sockets or lights, preferred switching or motion sensors, and any planned landscaping.',
    enquiryFields:['Socket / lighting locations','Approximate quantities','Existing fittings','Landscaping or access requirements'],
    faq:[
      ['Can you replace an existing security light?', 'Enquire with a photo and details of the fault or change you want. The existing wiring, fitting position and access will help establish the replacement work and price.'],
      ['Can several outdoor jobs be arranged together?', 'Yes, send the complete list so the work can be assessed and quoted together. The quotation will confirm the scope and visit arrangements.'],
      ['Does the quote include digging or making good?', 'Only where this is expressly included in the agreed quotation. Tell us about paths, paving and landscaping so responsibility for groundworks and making good can be discussed.']
    ],
    related:['garden-room-electrics','ev-charger-installation','consumer-unit-upgrades']
  },
  {
    slug:'garden-room-electrics', name:'Garage and garden-room electrics', title:'Garage, shed and garden-room electrics in Fife',
    description:'Plan power, sockets and lighting for a garage, shed or garden room in Fife and Central Scotland. Cable routes, intended use and tailored quotations.',
    intro:'Discuss an electrical supply, sockets and lighting for your garage, shed or garden room, planned around what you want to use there.',
    points:['Assess a new supply or changes to existing outbuilding electrics.', 'Plan socket and lighting positions around your layout and equipment.', 'Include optional data cabling in your enquiry so availability and scope can be confirmed.'],
    reasons:'A garden office, workshop or hobby space can need a different arrangement from a storage shed. Tell us about tools, heating, office equipment and any future plans so the proposed supply can be assessed.',
    priceDetail:'Distance from the existing supply, the equipment you intend to use, circuit condition and cable route affect the scope. Groundworks, distribution equipment, socket and light quantities, and any data cabling must be specified in the quotation.',
    prepare:'Send your postcode, the building type, a sketch or photos, approximate distance from the house and a list of equipment. Describe the proposed cable route, any existing supply, groundworks plans and whether internet/data connections are needed.',
    enquiryFields:['Building type and intended use','Approximate supply distance','Equipment / heating planned','Groundworks and optional data requirements'],
    faq:[
      ['Can you work with a garden-room supplier or builder?', 'Include their plans and proposed schedule in your enquiry. The electrical scope, access and responsibility for groundworks can then be discussed before work is arranged.'],
      ['Can an existing shed supply be used?', 'It needs assessment against its condition and your intended equipment. A suitable supply cannot be confirmed from the building size alone; any changes will be discussed and quoted.'],
      ['Can I include an internet connection?', 'Mention data cabling in your enquiry, including where your router is and how the space will be used. Availability, route and the agreed work need confirmation; an internet service is not included automatically.']
    ],
    related:['outdoor-power-and-lighting','consumer-unit-upgrades','rewiring']
  },
  {
    slug:'landlord-electrical-services', name:'Landlord electrical services', title:'Landlord electrical services in Fife',
    description:'EICRs, appliance testing, smoke and heat alarm checks and remedial electrical work for landlords in Fife. Arrange services together with a tailored quote.',
    intro:'Arrange the electrical work your rental property needs through one enquiry, from inspection and appliance testing to alarm checks and agreed repairs.',
    points:['EICRs and testing of landlord-supplied appliances.', 'Smoke and heat alarm checks, with replacement or remedial work quoted as needed.', 'Discuss renewal reminders and access arrangements for one property or a portfolio.'],
    reasons:'You may be arranging inspections, following up a report, preparing a property to let or coordinating several properties. Tell us what records you already have and what work is due.',
    priceDetail:'Property size, circuit and appliance counts, the alarm-check scope and access arrangements affect the quotation. Services can be arranged together, but this is not a fixed-price bundle or an automatic discount. Remedial work is identified and quoted separately.',
    prepare:'Send the property postcode, size, approximate circuit and appliance counts, relevant reports and known faults. Mention alarm requirements, tenant or agent access arrangements and any dates shown on existing inspection records. Ask to agree how renewal reminders will be handled.',
    enquiryFields:['Property size / circuit count','Landlord-supplied appliance count','Existing reports and due dates','Tenant or agent access arrangements'],
    faq:[
      ['Can inspections, appliance testing and alarm checks be arranged together?', 'Yes, ask for the required services in one enquiry. The quotation will set out the scope, records provided and visit arrangements for your property.'],
      ['Are repairs included in the inspection price?', 'No repairs should be assumed to be included. Findings and any recommended remedial work will be discussed, with the scope and price agreed separately before proceeding.'],
      ['Can you help with several rental properties?', 'Send the locations, property details and work required for each. Access, scheduling and quotations can then be discussed. Renewal reminders can be agreed as part of those arrangements.'],
      ['Do I need every service on every visit?', 'The work should reflect your property, existing reports, equipment and the checks that are due. Discuss those details when enquiring rather than assuming a standard bundle covers everything.']
    ],
    related:['eicr','consumer-unit-upgrades','rewiring']
  }
].map(service=>({...service,quoteOnly:true,price:'Tailored quotation for your property'}));
