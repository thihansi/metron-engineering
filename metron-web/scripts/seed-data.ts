/**
 * Seed content only — imported by scripts/seed.ts.
 * Do not import this from UI pages.
 */
export const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`

export const CAPABILITIES = [
  { no: '01', title: 'Structural Engineering', body: 'Structural design and analysis for steel structures, including new designs, modifications, assessments and strengthening works.', tag: 'AS 4100', order: 1 },
  { no: '02', title: 'Mechanical Engineering', body: 'Mechanical design for equipment, machinery, materials handling systems, fabricated assemblies and custom engineered solutions.', tag: 'Design', order: 2 },
  { no: '03', title: 'Engineering design', body: 'Development of practical engineering solutions from initial concepts through to detailed design and documentation.', tag: 'Concept → detail', order: 3 },
  { no: '04', title: 'Drafting & CAD', body: '2D and 3D drafting for engineering, fabrication and construction, including detailed drawings, modifications and as-built documentation.', tag: 'AutoCAD', order: 4 },
  { no: '05', title: 'BIM & 3D Modelling', body: 'Detailed 3D modelling, design coordination and clash detection to improve project coordination and constructability.', tag: 'Revit · Navisworks', order: 5 },
  { no: '06', title: 'FEA Analysis', body: 'Finite element analysis and engineering assessment for stress, fatigue, buckling, thermal and dynamic applications.', tag: 'Ansys', order: 6 },
  { no: '07', title: 'Steel Detailing', body: 'Fabrication and erection drawings, connection details and production information ready for manufacture.', tag: 'Tekla Structures', order: 7 },
  { no: '08', title: 'Fabrication', body: 'Fabrication of engineered components, structures and custom solutions developed to suit project-specific requirements.', tag: 'In-house', order: 8 },
]

export const TOOLS = [
  { name: 'Tekla Structures', use: 'Steel Detailing & Modelling', order: 1 },
  { name: 'Ansys', use: 'Engineering Analysis & Simulation', order: 2 },
  { name: 'Revit', use: 'BIM & 3D Modelling', order: 3 },
  { name: 'ArchiCAD', use: 'Design Documentation', order: 4 },
  { name: 'AutoCAD', use: 'Engineering Drafting', order: 5 },
  { name: 'Navisworks', use: 'Model Coordination & Clash Detection', order: 6 },
]

export const INDUSTRIES = [
  {
    no: '01',
    title: 'Mining & Resources',
    body: 'Engineering, design and fabrication solutions for surface and underground operations, fixed plant, equipment and supporting infrastructure.',
    imageUrl: U('1509024368907-57294758cfc5'),
    order: 1,
  },
  {
    no: '02',
    title: 'Industrial & Manufacturing',
    body: 'Engineering for machinery, equipment, workshops, processing facilities and industrial assets.',
    imageUrl: U('1623489254637-a2dd8375243d'),
    order: 2,
  },
  {
    no: '03',
    title: 'Custom Projects',
    body: 'Purpose built engineering and fabrication solutions for projects that require a specialised or non standard approach.',
    imageUrl: U('1621831337128-35676ca30868'),
    order: 3,
  },
]

export const PRODUCTS = [
  {
    code: 'MS-01',
    category: 'Access',
    title: 'Substation Gates',
    short: 'Access-controlled gates engineered for switchyard and substation compounds.',
    long: 'Heavy-duty swing and sliding gates for electrical infrastructure compounds, engineered to resist wind loading and unauthorised entry while meeting utility access requirements. Supplied complete with posts, hardware and lock provisions, hot dip galvanised for long service life in exposed environments.',
    imageUrl: U('1681108212545-04cabe9cf771'),
    gallery: [
      { url: U('1581092160562-40aa08e78837', 600) },
      { url: U('1503387762-592deb58ef4e', 600) },
      { url: U('1581092160562-40aa08e78837', 600) },
    ],
    specs: [
      { k: 'Configuration', v: 'Single swing, double swing or sliding' },
      { k: 'Opening widths', v: '1.5 m to 8.0 m, made to order' },
      { k: 'Frame', v: 'Welded RHS/SHS steel frame' },
      { k: 'Finish', v: 'Hot dip galvanised to AS/NZS 4680' },
      { k: 'Compliance', v: 'AS 4100, client utility standards' },
    ],
    options: [
      { option: 'Padlock or electronic lock' },
      { option: 'Anti-climb infill' },
      { option: 'Earthing provisions' },
      { option: 'Signage panels' },
    ],
    order: 1,
  },
  {
    code: 'MS-02',
    category: 'Access',
    title: 'Underground Magazine Gates',
    short: 'Secure gates for explosives magazines, built to site regulatory requirements.',
    long: 'Security gates for underground explosives magazines and storage cuddies, designed to satisfy site and regulatory security requirements. Robust hinge and locking arrangements suit repeated use in wet, abrasive underground conditions.',
    imageUrl: U('1441796522229-b3a3cb3d58fd'),
    gallery: [
      { url: U('1509390144018-eeaf65052242', 600) },
      { url: U('1587293852726-70cdb56c2866', 600) },
      { url: U('1578575437130-527eed3abbec', 600) },
    ],
    specs: [
      { k: 'Application', v: 'Explosives magazines and storage cuddies' },
      { k: 'Frame', v: 'Heavy steel section, welded construction' },
      { k: 'Locking', v: 'Dual-point mechanical lock, keyed to site' },
      { k: 'Finish', v: 'Galvanised or two-pack epoxy' },
      { k: 'Compliance', v: 'WA mining regulations, site security standards' },
    ],
    options: [
      { option: 'Mesh or bar infill' },
      { option: 'Ventilation panel' },
      { option: 'Inspection hatch' },
      { option: 'Custom mounting frame' },
    ],
    order: 2,
  },
  {
    code: 'MS-03',
    category: 'Ventilation',
    title: 'PA Doors',
    short: 'Personnel access doors rated for underground pressure and airflow conditions.',
    long: 'Personnel access doors for underground ventilation walls and airlocks, engineered to open reliably against differential pressure. Seals and hardware are selected for the pressure differential and airflow of your ventilation circuit.',
    imageUrl: U('1622109912940-2bddde35274d'),
    gallery: [
      { url: U('1581094794329-c8112a89af12', 600) },
      { url: U('1504328345606-18bbc8c9d7d1', 600) },
      { url: U('1565043666747-69f6646db940', 600) },
    ],
    specs: [
      { k: 'Leaf sizes', v: 'Standard 900 × 2000 mm, made to order' },
      { k: 'Pressure rating', v: 'Engineered to circuit differential' },
      { k: 'Seals', v: 'Replaceable perimeter seal' },
      { k: 'Hardware', v: 'Self-closing hinges, panic-release option' },
      { k: 'Finish', v: 'Galvanised or epoxy coated' },
    ],
    options: [
      { option: 'Vision panel' },
      { option: 'Panic release' },
      { option: 'Kick plates' },
      { option: 'Pressure equalising vent' },
    ],
    order: 3,
  },
  {
    code: 'MS-04',
    category: 'Ventilation',
    title: 'Airlock Chambers',
    short: 'Ventilation airlock assemblies for controlled underground air management.',
    long: 'Complete airlock chamber assemblies that maintain ventilation separation while allowing personnel and light vehicle movement. Supplied as an engineered package including frames, doors, seals and interlock arrangements.',
    imageUrl: U('1562957982-b1f25317aebd'),
    gallery: [
      { url: U('1487875961445-47a00398c267', 600) },
      { url: U('1581092160562-40aa08e78837', 600) },
      { url: U('1581092918056-0c4c3acd3789', 600) },
    ],
    specs: [
      { k: 'Configuration', v: 'Two-door or three-door airlock' },
      { k: 'Chamber length', v: 'Engineered to vehicle envelope' },
      { k: 'Structure', v: 'Steel frame with sheeted panels' },
      { k: 'Interlock', v: 'Mechanical or electrical interlock' },
      { k: 'Compliance', v: 'Site ventilation plan requirements' },
    ],
    options: [
      { option: 'Vehicle-rated leaves' },
      { option: 'Interlock control panel' },
      { option: 'Lighting package' },
      { option: 'Pressure monitoring points' },
    ],
    order: 4,
  },
  {
    code: 'MS-05',
    category: 'Ventilation',
    title: 'Vent Doors',
    short: 'Regulating doors for underground ventilation circuits and airways.',
    long: 'Ventilation doors for main and secondary airways, sized to the airflow and pressure of the circuit. Frames are engineered to transfer door loads into the surrounding ground support or bulkhead.',
    imageUrl: U('1509390144018-eeaf65052242'),
    gallery: [
      { url: U('1591645321243-3adc1e75cfdc', 600) },
      { url: U('1504917595217-d4dc5ebe6122', 600) },
      { url: U('1565608087341-404b25492fee', 600) },
    ],
    specs: [
      { k: 'Door sizes', v: 'Made to airway dimensions' },
      { k: 'Operation', v: 'Manual, counterweighted or actuated' },
      { k: 'Frame', v: 'Engineered bulkhead frame' },
      { k: 'Finish', v: 'Galvanised or epoxy coated' },
      { k: 'Analysis', v: 'FEA verified for pressure loading' },
    ],
    options: [
      { option: 'Counterweight assembly' },
      { option: 'Actuator package' },
      { option: 'Man door in leaf' },
      { option: 'Pressure relief flap' },
    ],
    order: 5,
  },
  {
    code: 'MS-06',
    category: 'Ventilation',
    title: 'Drop Board Regulators',
    short: 'Adjustable regulators for balancing airflow across ventilation circuits.',
    long: 'Drop board regulators allow ventilation officers to tune airflow through a circuit by adding or removing boards. Guides and boards are engineered for repeated handling and to hold position under load.',
    imageUrl: U('1504917595217-d4dc5ebe6122'),
    gallery: [
      { url: U('1581094794329-c8112a89af12', 600) },
      { url: U('1509390144018-eeaf65052242', 600) },
      { url: U('1565043666747-69f6646db940', 600) },
    ],
    specs: [
      { k: 'Aperture', v: 'Made to airway dimensions' },
      { k: 'Boards', v: 'Steel or composite, handled by one person' },
      { k: 'Guides', v: 'Welded steel channel guides' },
      { k: 'Adjustment', v: 'Incremental by board' },
      { k: 'Finish', v: 'Galvanised' },
    ],
    options: [
      { option: 'Composite boards' },
      { option: 'Board storage rack' },
      { option: 'Locking bar' },
      { option: 'Airflow marking plate' },
    ],
    order: 6,
  },
  {
    code: 'MS-07',
    category: 'Fabrication',
    title: 'Transformer Skids',
    short: 'Engineered skid bases for site transformers and electrical packages.',
    long: 'Structural skid bases for transformers and packaged electrical equipment, designed for lifting, transport and in-service loading. Lifting arrangements and tie-down points are analysed for the transport and installation cases.',
    imageUrl: U('1565608087341-404b25492fee'),
    gallery: [
      { url: U('1558618666-fcd25c85cd64', 600) },
      { url: U('1565608087341-404b25492fee', 600) },
      { url: U('1503387762-592deb58ef4e', 600) },
    ],
    specs: [
      { k: 'Capacity', v: 'Engineered to equipment mass' },
      { k: 'Structure', v: 'Welded beam and channel skid' },
      { k: 'Lifting', v: 'Certified lift points, FEA verified' },
      { k: 'Finish', v: 'Galvanised or industrial paint system' },
      { k: 'Compliance', v: 'AS 4100, AS 1418 lifting provisions' },
    ],
    options: [
      { option: 'Bunded base' },
      { option: 'Cable entry provisions' },
      { option: 'Access platform' },
      { option: 'Earthing bosses' },
    ],
    order: 7,
  },
  {
    code: 'MS-08',
    category: 'Access',
    title: 'Underground Ladderways',
    short: 'Modular ladderway systems for underground escape and access routes.',
    long: 'Modular ladderways and rest platforms for underground escapeways and access routes, engineered for retrofit into existing excavations. Sections are sized for handling underground and bolt together on site.',
    imageUrl: U('1562088997-ed2fbeef1cd6'),
    gallery: [
      { url: U('1581092160562-40aa08e78837', 600) },
      { url: U('1487875961445-47a00398c267', 600) },
      { url: U('1578575437130-527eed3abbec', 600) },
    ],
    specs: [
      { k: 'Configuration', v: 'Vertical or inclined, with rest platforms' },
      { k: 'Section length', v: 'Sized for underground handling' },
      { k: 'Structure', v: 'Bolted modular steel sections' },
      { k: 'Finish', v: 'Hot dip galvanised' },
      { k: 'Compliance', v: 'AS 1657 access and egress' },
    ],
    options: [
      { option: 'Safety cage' },
      { option: 'Fall arrest rail' },
      { option: 'Rest platform modules' },
      { option: 'Custom fixing brackets' },
    ],
    order: 8,
  },
  {
    code: 'MS-09',
    category: 'Fabrication',
    title: 'General Fabrication',
    short: 'Made-to-order steel fabrication engineered against your specification.',
    long: 'Where a standard product does not fit, we design and fabricate to your specification — frames, bases, guarding, chutes, walkways and one-off assemblies. Engineering, detailing and fabrication run through the same team, so what is analysed is what is built.',
    imageUrl: U('1557143930-d4e7a86a194f'),
    gallery: [
      { url: U('1565608087341-404b25492fee', 600) },
      { url: U('1504917595217-d4dc5ebe6122', 600) },
      { url: U('1565608087341-404b25492fee', 600) },
    ],
    specs: [
      { k: 'Scope', v: 'Concept, design, detailing and fabrication' },
      { k: 'Materials', v: 'Structural steel, stainless, aluminium' },
      { k: 'Analysis', v: 'FEA available for critical items' },
      { k: 'Documentation', v: 'Fabrication and erection drawings' },
      { k: 'Compliance', v: 'AS/NZS codes and client QA systems' },
    ],
    options: [
      { option: 'Site survey' },
      { option: 'Trial assembly' },
      { option: 'ITP and weld inspection' },
      { option: 'Delivery and install support' },
    ],
    order: 9,
  },
]

export const PROJECTS = [
  {
    title: 'Underground ventilation door upgrade',
    industry: 'Mining',
    services: [{ service: 'Structural' }, { service: 'FEA' }],
    summary: 'Pressure-rated vent doors designed, analysed and documented for a WA gold operation.',
    brief:
      'An operating gold mine needed its primary ventilation doors replaced without extended downtime, with the new doors rated for a higher circuit pressure than the originals.',
    work: [
      { item: 'Site measure of existing bulkheads and airways' },
      { item: 'FEA of leaf and frame under differential pressure' },
      { item: 'Fabrication and installation documentation' },
      { item: 'Staged installation sequence to limit downtime' },
    ],
    outcome: 'Doors were fabricated and installed across two planned shutdowns, with no rework required at fit-up.',
    facts: [
      { k: 'Sector', v: 'Gold mining' },
      { k: 'Location', v: 'Goldfields, WA' },
      { k: 'Delivery', v: '12 weeks' },
    ],
    imageUrl: U('1609627016501-b862497c7294'),
    featured: true,
    order: 1,
  },
  {
    title: 'Processing plant structural steel',
    industry: 'Industrial',
    services: [{ service: 'Structural' }, { service: 'Steel Detailing' }],
    summary: 'Full steel package for a 2,400 t process facility detailed through to erection stage.',
    brief:
      'A processing facility required a complete structural steel package, from design through to CNC-ready fabrication output, on a compressed programme.',
    work: [
      { item: 'Structural design to AS 4100' },
      { item: 'Connection design and checking' },
      { item: 'Tekla model to fabrication stage' },
      { item: 'Erection drawings and bolt schedules' },
    ],
    outcome: 'Model-driven output allowed the fabricator to start cutting while later areas were still being detailed.',
    facts: [
      { k: 'Tonnage', v: '2,400 t' },
      { k: 'Software', v: 'Tekla Structures' },
      { k: 'Delivery', v: '22 weeks' },
    ],
    imageUrl: U('1557143930-d4e7a86a194f'),
    featured: true,
    order: 2,
  },
  {
    title: 'Access and maintenance platforms',
    industry: 'Infrastructure',
    services: [{ service: 'Mechanical' }, { service: 'Drafting' }],
    summary: 'Modular platform and ladderway system engineered for retrofit into a live water utility asset.',
    brief:
      'A water utility needed compliant maintenance access added to existing assets without taking them out of service.',
    work: [
      { item: 'Scan and measure of existing structures' },
      { item: 'Modular platform design to AS 1657' },
      { item: 'Clash checking against existing services' },
      { item: 'Installation drawings for live-site works' },
    ],
    outcome: 'Modules were pre-assembled off site and installed during short access windows.',
    facts: [
      { k: 'Sector', v: 'Water utility' },
      { k: 'Standard', v: 'AS 1657' },
      { k: 'Delivery', v: '9 weeks' },
    ],
    imageUrl: U('1562088997-ed2fbeef1cd6'),
    featured: true,
    order: 3,
  },
  {
    title: 'Crusher station structural assessment',
    industry: 'Mining',
    services: [{ service: 'Structural' }, { service: 'FEA' }],
    summary: 'Fatigue assessment and remediation design for an ageing primary crusher station.',
    brief:
      'Cracking had been reported in a primary crusher support structure that had been in service for over a decade under increased throughput.',
    work: [
      { item: 'Condition survey and crack mapping' },
      { item: 'Dynamic FEA under revised loading' },
      { item: 'Remediation and stiffening design' },
      { item: 'Inspection regime for ongoing monitoring' },
    ],
    outcome: 'Remediation extended asset life without replacing the station, avoiding an extended outage.',
    facts: [
      { k: 'Sector', v: 'Iron ore' },
      { k: 'Analysis', v: 'Ansys dynamic FEA' },
      { k: 'Delivery', v: '7 weeks' },
    ],
    imageUrl: U('1523848309072-c199db53f137'),
    featured: false,
    order: 4,
  },
  {
    title: 'Warehouse and office development',
    industry: 'Commercial',
    services: [{ service: 'Structural' }, { service: 'Architectural' }],
    summary: 'Structural and architectural documentation for a combined warehouse and office facility.',
    brief:
      'A developer required coordinated documentation for a portal frame warehouse with a two-storey office fitout at the front.',
    work: [
      { item: 'Portal frame and slab design' },
      { item: 'Architectural documentation in ArchiCAD' },
      { item: 'Services coordination with subconsultants' },
      { item: 'Certification for building approval' },
    ],
    outcome: 'Single-team documentation reduced coordination queries between architectural and structural packages.',
    facts: [
      { k: 'Floor area', v: '4,800 m²' },
      { k: 'Software', v: 'ArchiCAD · Revit' },
      { k: 'Delivery', v: '16 weeks' },
    ],
    imageUrl: U('1621831337128-35676ca30868'),
    featured: false,
    order: 5,
  },
  {
    title: 'Conveyor transfer chute redesign',
    industry: 'Industrial',
    services: [{ service: 'Mechanical' }, { service: 'FEA' }],
    summary: 'Transfer chute redesigned to reduce blockages and liner wear on a bulk handling circuit.',
    brief: 'Frequent blockages at a transfer point were causing unplanned stoppages on a bulk materials circuit.',
    work: [
      { item: 'Flow assessment of the existing chute' },
      { item: 'Redesigned geometry and liner arrangement' },
      { item: 'Structural check of support steelwork' },
      { item: 'Fabrication drawings and liner schedule' },
    ],
    outcome: 'Blockage frequency dropped materially in the first quarter after installation.',
    facts: [
      { k: 'Sector', v: 'Bulk handling' },
      { k: 'Discipline', v: 'Mechanical' },
      { k: 'Delivery', v: '6 weeks' },
    ],
    imageUrl: U('1565608087341-404b25492fee'),
    featured: false,
    order: 6,
  },
  {
    title: 'Substation compound upgrade',
    industry: 'Infrastructure',
    services: [{ service: 'Civil' }, { service: 'Structural' }],
    summary: 'Civil and structural works for an expanded substation compound, including access gates.',
    brief:
      'A network operator expanded a substation compound and required civil works, equipment plinths and secure access.',
    work: [
      { item: 'Earthworks and drainage design' },
      { item: 'Equipment plinth and cable trench design' },
      { item: 'Metron substation gates supplied' },
      { item: 'As-built documentation on completion' },
    ],
    outcome: 'Civil, structural and fabricated access delivered through one contract.',
    facts: [
      { k: 'Sector', v: 'Electrical network' },
      { k: 'Scope', v: 'Civil + structural' },
      { k: 'Delivery', v: '14 weeks' },
    ],
    imageUrl: U('1681108212545-04cabe9cf771'),
    featured: false,
    order: 7,
  },
  {
    title: 'Underground escapeway ladderways',
    industry: 'Mining',
    services: [{ service: 'Structural' }, { service: 'Drafting' }],
    summary: 'Modular ladderway and rest platform system for an underground escape route.',
    brief:
      'An underground operation needed compliant escapeway access installed into an existing decline over several levels.',
    work: [
      { item: 'Survey of existing excavation profile' },
      { item: 'Modular ladderway design to AS 1657' },
      { item: 'Sections sized for underground handling' },
      { item: 'Installation and fixing details' },
    ],
    outcome: 'Modules were carried and bolted up by site crews without specialist equipment.',
    facts: [
      { k: 'Sector', v: 'Underground mining' },
      { k: 'Standard', v: 'AS 1657' },
      { k: 'Delivery', v: '10 weeks' },
    ],
    imageUrl: U('1509024368907-57294758cfc5'),
    featured: false,
    order: 8,
  },
  {
    title: 'Plant expansion BIM coordination',
    industry: 'Industrial',
    services: [{ service: 'BIM' }, { service: 'Structural' }],
    summary: 'Federated model coordination across four disciplines for a brownfield plant expansion.',
    brief:
      'A brownfield expansion involved four design parties working around existing plant with limited as-built information.',
    work: [
      { item: 'Laser scan registered into the federated model' },
      { item: 'Clash detection at agreed milestones' },
      { item: 'Coordination workshops with all parties' },
      { item: 'Issue register maintained to close-out' },
    ],
    outcome: 'Interferences were resolved in the model, with no significant clashes reported during construction.',
    facts: [
      { k: 'Disciplines', v: 'Four parties' },
      { k: 'Software', v: 'Revit · Navisworks' },
      { k: 'Delivery', v: '20 weeks' },
    ],
    imageUrl: U('1581092160562-40aa08e78837'),
    featured: false,
    order: 9,
  },
]

export const PRODUCT_ASSURANCES = [
  { title: 'Made to order', body: 'Every item is engineered to your dimensions, loads and site conditions.' },
  { title: 'Engineered in-house', body: 'The same team that designs your plant designs the products.' },
  { title: 'Compliant documentation', body: 'Supplied with drawings and certification aligned to AS/NZS codes.' },
  { title: 'Australia-wide delivery', body: 'Perth-based fabrication, shipped and supported nationally.' },
]

export const SITE_SETTINGS = {
  siteName: 'Metron Engineering Services',
  tagline: 'Engineering that holds up under load.',
  footerBlurb: 'Perth based engineering, design, drafting and fabrication for projects across Australia.',
  copyrightLine: '© 2026 Metron Engineering Pty Ltd',
  footerNote: 'Designed and documented to AS/NZS standards',
  email: 'sam@metronengineering.com.au',
  phone: '+61 452 633 258',
  address: '11/24 Marjorie Avenue, Shelley WA 6148',
  location: 'Perth, WA',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  footerDisciplines: [
    { label: 'Structural', href: '/services' },
    { label: 'Mechanical', href: '/services' },
    { label: 'FEA analysis', href: '/services' },
    { label: 'Steel detailing', href: '/services' },
  ],
}

export const ABOUT_PAGE = {
  heroLabel: 'About Metron',
  heroBadgeRight: 'Shelley, Western Australia',
  heroHeading: 'Engineering, detailing, analysis, and fabrication under one roof.',
  heroBody:
    'Metron Engineering provides multidisciplinary engineering, analysis, design and technical documentation across a broad range of industries and project environments.  Our team combines engineering expertise with practical project experience to develop solutions that are technically sound, constructible and suited to the requirements of each project.',
  introSectionNo: '01',
  introSectionTitle: 'Who we are',
  introSubheading: 'Engineering expertise from concept through to delivery.',
  introBody1:
    'Metron Engineering is a Perth based engineering company providing engineering, design, drafting and fabrication solutions across a wide range of industries.',
  introBody2:
    'We work closely with our clients to understand their requirements and deliver practical, cost effective solutions suited to each project. From initial concept and engineering design through to detailed drafting, fabrication and delivery, our team provides support across the full project lifecycle.  Our approach brings engineering, design and fabrication together, allowing us to maintain continuity from the first idea through to the finished outcome.  In addition to project work, Metron Engineering develops a range of specialised products designed to address practical industry needs and provide reliable, fit for purpose solutions.',
  introImageUrl: U('1444847840129-0ac27946a0a7', 1100),
  stat1Number: '18+',
  stat1Label: 'Years experience',
  stat2Number: '450+',
  stat2Label: 'Projects delivered',
  stat3Number: '9',
  stat3Label: 'Product lines',
  capabilitiesSectionNo: '02',
  capabilitiesSectionTitle: 'Capabilities',
  capabilitiesSubheading: 'Eight disciplines delivered by one team, coordinated to a single model.',
  industriesSectionNo: '03',
  industriesSectionTitle: 'Industries',
  industriesSubheading: 'Engineering solutions across a range of industries.',
  industriesBody:
    'Our experience and capabilities allow us to support clients across a variety of industries and project environments.',
  toolsSectionNo: '04',
  toolsSectionTitle: 'Technical Tools',
  toolsSubheading: 'Industry leading tools supporting engineering and design.',
  toolsBody:
    'We use recognised engineering and design software to develop, analyse and document our work accurately and efficiently.',
  standardsSectionNo: '05',
  standardsSectionTitle: 'Standards & compliance',
  standardsSubheading: 'Every drawing issued against a nominated code.',
  standardsNote:
    'Other Australian and international standards are applied where required by the project, client or location.',
  standardsList: [
    { code: 'AS 4100', description: 'Steel structures' },
    { code: 'AS/NZS 1170', description: 'Structural design actions' },
    { code: 'AS 1657', description: 'Platforms, walkways, stairways and ladders' },
    { code: 'AS/NZS 4680', description: 'Hot dip galvanized coatings' },
    { code: 'WA MSI Act', description: 'Western Australian mining regulations' },
  ],
  productCtaSectionNo: '06',
  productCtaHeading: 'Metron Products',
  productCtaSubheading: 'Specialised products developed by Metron Engineering.',
  productCtaBody:
    'Alongside our project engineering and fabrication work, we develop our own range of specialised products for practical industry applications.',
  productCtaBody2:
    'Each product is developed using the same engineering approach we apply to our client projects, with a focus on functionality, durability and ease of use.',
  productCtaLabel: 'Explore Metron Products',
  productCtaImageUrl: U('1681108212545-04cabe9cf771', 1100),
  ctaHeading: 'Talk to the team that will do the work.',
  ctaSubtitle: 'Get a quote — typically within two business days',
}

export const PRODUCTS_PAGE = {
  heroLabel: 'Metron Specials',
  heroBadgeRight: 'Designed, engineered and fabricated in-house',
  heroHeading: 'Our own range of specialty products.',
  heroBody:
    'Nine product lines built for underground and surface operations — engineered by the same team that delivers our consultancy work, made to order and supported Australia-wide.',
  ctaHeading: "Need something that isn't in the catalogue?",
  ctaBody:
    'Every Metron product is made to order, so dimensions, ratings, coatings and mounting details can be adapted to your site. Send us drawings or a description and we will quote against your specification.',
  ctaButtonLabel: 'Request a custom build',
  ctaEmailLabel: 'sam@metronengineering.com.au',
  assurances: PRODUCT_ASSURANCES,
}

export const PROJECTS_PAGE = {
  heroLabel: 'Projects',
  heroBadgeRight: 'Case studies across four sectors',
  heroHeading: 'Work delivered, documented and built.',
  heroBody: 'A selection of recent engagements. Filter by service or industry to find work closest to your own.',
  ctaHeading: 'Have a project like one of these?',
  ctaSubtitle: 'Discuss a project',
  ctaButtonLabel: 'Discuss a project',
}

export const HOME_PAGE = {
  heroBadgeLeft: 'Perth, WA',
  heroBadgeRight: 'Engaged on projects Australia-wide',
  heroLine1: 'Engineering',
  heroLine2: 'that holds up',
  heroLine3: 'under load.',
  heroBody:
    'Structural, mechanical, civil and architectural engineering for mining, industrial, infrastructure and commercial clients — concept, analysis, detailing and fabrication under one roof.',
  heroCta1Label: 'Discuss a Project',
  heroCta2Label: 'View Capabilities',
  heroImageUrl: U('1493476523860-a6de6ce1b0c3', 1600),
  aboutSectionNo: '01',
  aboutSectionTitle: 'Who we are',
  aboutSubheading: 'A consultancy built around drawings that get built.',
  aboutBody1:
    'Metron Engineering Services Pty Ltd is a Perth-based engineering and design consultancy. We work alongside mine operators, fabricators, builders and asset owners to take a brief from first principles through to certified, fabrication-ready documentation.',
  aboutBody2:
    'Structural and mechanical design sit next to detailing, finite element analysis and BIM coordination in a single workflow, so decisions made in analysis carry straight through to the shop floor. We also design and supply fabricated products for underground and surface operations.',
  aboutImageUrl: U('1444847840129-0ac27946a0a7', 1100),
  aboutLinkLabel: 'More about Metron',
  servicesSectionNo: '02',
  servicesSectionTitle: 'Core capabilities',
  servicesSubheading: 'Eight disciplines, one delivery team.',
  industriesSectionNo: '03',
  industriesSectionTitle: 'Industries served',
  industriesSubheading: 'Environments where tolerances matter.',
  projectsSectionNo: '04',
  projectsSectionTitle: 'Featured projects',
  projectsSubheading: 'Selected work.',
  productsSectionNo: '05',
  productsSectionTitle: 'Metron Specials',
  productsSubheading:
    'Alongside our consultancy work, Metron designs, engineers and fabricates its own range of specialty products for underground and surface operations. Built to order, delivered Australia-wide.',
  whySectionNo: '06',
  whySectionTitle: 'Why Metron',
  whySubheading: 'Fewer handoffs. Fewer surprises on site.',
  whyBody:
    'Design, analysis, detailing and fabrication support are coordinated to the same model and the same standards.',
  whyStat: 98,
  whyStatSuffix: '%',
  whyStatLabel: 'Documentation issued on schedule',
  whyImageUrl: U('1591645321243-3adc1e75cfdc', 1800),
  ctaHeading: 'Send us the scope. We will come back with an approach and a price.',
  ctaSubtitle: 'Get a quote — typically within two business days',
  ctaNote: 'Shelley, Western Australia',
}

export const SERVICES_PAGE = {
  heroLabel: 'Core capabilities',
  heroHeading: 'Eight disciplines. One delivery team.',
  heroBody:
    'From first-principles structural analysis to fabrication-ready drawings, our capabilities span the full engineering workflow — coordinated under one roof so nothing gets lost in handoffs.',
  capsSectionNo: '01',
  capsSectionTitle: 'What we do',
  capsSubheading: 'Each discipline is a full-service offering, not a bolt-on.',
  processSectionNo: '02',
  processSectionTitle: 'How we work',
  processSubheading: 'A structured process from brief to certified drawings.',
  processSteps: [
    {
      no: '01',
      title: 'Brief & scope',
      body: 'We receive the scope, site data and applicable standards. We ask the right questions upfront to avoid scope creep downstream.',
    },
    {
      no: '02',
      title: 'Concept & analysis',
      body: 'Structural or mechanical analysis drives the concept. FEA, load cases and code checks are done before a single detail is drawn.',
    },
    {
      no: '03',
      title: 'Design development',
      body: 'The concept is developed into a coordinated model — structure, services and architectural elements resolved together.',
    },
    {
      no: '04',
      title: 'Detailed documentation',
      body: 'Fabrication-ready drawings, specifications and schedules are issued with engineer certification. Revisions are tracked and coordinated.',
    },
  ],
  toolsSectionNo: '03',
  toolsSectionTitle: 'Tools & software',
  toolsSubheading: 'Industry-standard toolset, applied with discipline.',
  ctaHeading: 'Send us the scope. We will come back with an approach and a price.',
  ctaSubtitle: 'Get a quote — typically within two business days',
}

export const CONTACT_PAGE = {
  heroLabel: 'Contact',
  heroHeading: 'Talk to an engineer.',
  heroBody:
    'Call, email or send a short message. If you already have a scope and want a price, the quote form collects everything we need in one pass.',
  formSectionTitle: 'Send a message',
  formSubheading: 'For general questions.',
  formSuccessMessage: 'Message received. We will be in touch within one business day.',
  quoteCtaHeading: 'Need a quote for a project?',
  quoteCtaBody:
    'Use the dedicated quote form to give us the project scope, timing and any attachments. We will come back with an approach and a fixed price — typically within two business days.',
  quoteCtaLabel: 'Get a quote',
}
