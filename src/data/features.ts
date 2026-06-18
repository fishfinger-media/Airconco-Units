export interface FeatureBlock {
  icon: string;
  title: string;
  body: string;
}

export const manufacturerFeatures: Record<string, FeatureBlock[]> = {
  Daikin: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      title: 'Inverter Pioneer',
      body: 'Daikin invented the world\'s first residential inverter air conditioner and continues to set the benchmark for efficiency and reliability.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'R32 Refrigerant',
      body: 'Uses environmentally responsible R32 refrigerant with a global warming potential 66% lower than the previous standard R410A.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      title: '5-Year Warranty',
      body: 'Every Daikin unit is backed by a 5-year parts and labour guarantee when installed by a Daikin-approved installer.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
      title: 'Whisper Quiet',
      body: 'Advanced fan blade design and acoustic insulation deliver indoor noise levels as low as 19 dB(A) — quieter than a library.',
    },
  ],
  'Mitsubishi Electric': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>`,
      title: 'Hyper-Heating',
      body: 'Mitsubishi\'s Hyper-Heating INVERTER technology maintains full heating output even at outdoor temperatures as low as −25°C.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
      title: 'i-see Sensor',
      body: '3D auto-sensing technology detects occupancy and body temperature, automatically directing airflow for personalised comfort.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      title: 'Plasma Quad Filter',
      body: 'Multi-stage plasma filtration captures fine dust, bacteria, viruses, and allergens — delivering measurably cleaner indoor air.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
      title: 'MELCloud Smart Control',
      body: 'Built-in Wi-Fi (select models) connects to the MELCloud app for remote control, scheduling, and energy monitoring from anywhere.',
    },
  ],
  Fujitsu: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'A+++ Energy Rating',
      body: 'Many Fujitsu models achieve the highest energy label rating available, delivering outstanding efficiency and lower running costs.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'Human Sensor',
      body: 'Detects human presence and adjusts operation automatically — conserving energy when rooms are unoccupied without manual intervention.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      title: 'Compact Design',
      body: 'Slim profiles and lightweight construction make Fujitsu units easy to install in a wide range of property types and ceiling heights.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'Airstage Compatible',
      body: 'Seamlessly integrates with Fujitsu\'s Airstage VRF platform for commercial multi-zone applications requiring centralised control.',
    },
  ],
};

export const rangeFeatures: Record<string, FeatureBlock[]> = {
  Emura: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      title: 'Red Dot Award Winner',
      body: 'The Emura\'s sweeping curved form has earned multiple international design awards, making it as much a statement piece as an appliance.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
      title: '3D Airflow',
      body: 'Motorised louvres distribute air in three dimensions for even temperature distribution without uncomfortable cold spots or draughts.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="4"/><circle cx="12" cy="16" r="4"/></svg>`,
      title: 'Three Premium Finishes',
      body: 'Available in Pure White, Elegant Silver, and Midnight Black — each colour variant uses the same premium lacquer finish.',
    },
  ],
  Stylish: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>`,
      title: 'Ultra Slim Profile',
      body: 'At just 189 mm deep, the Stylish is one of the slimmest wall-mounted units available, sitting flush against the wall.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Silver Plasma Ion Filter',
      body: 'Captures fine dust, bacteria, and allergens while neutralising odours — superior indoor air quality as standard.',
    },
  ],
  'MSZ-EF': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      title: 'Premium Design Series',
      body: 'Available in Pearl White, Onyx Black, Ruby Red, and Silver — the MSZ-EF is engineered to complement premium interiors.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      title: 'Weekly Timer & Quiet Mode',
      body: 'Full 7-day programmable scheduling and a whisper-quiet night mode keep comfort on your terms, around the clock.',
    },
  ],
  'MSZ-AP': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`,
      title: "UK's Best-Selling Model",
      body: 'The AP series is Mitsubishi Electric\'s most popular residential unit, installed in hundreds of thousands of UK homes.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`,
      title: 'Auto Changeover',
      body: 'Automatically switches between heating and cooling modes to maintain your target temperature without manual intervention.',
    },
  ],
  'MSZ-AY': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h12M6 15h8"/></svg>`,
      title: 'Sleek High-Wall Design',
      body: 'A slim, contemporary profile that blends seamlessly with modern interiors — discreet yet powerful.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Advanced Air Purification',
      body: 'Built-in Plasma Quad Plus filter removes particles as small as 2.5 microns, including bacteria and allergens.',
    },
  ],
  'Economy Plus': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      title: 'Excellent Value',
      body: 'Reliable inverter efficiency at an accessible price point — ideal for bedrooms, home offices, and smaller living spaces.',
    },
  ],
  'High-Grade Range': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Multi-Layer Filtration',
      body: 'Catechin filter with enhanced air purification captures allergens, bacteria, and fine dust for a healthier indoor environment.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Premium Efficiency',
      body: 'Designed for maximum seasonal efficiency, reducing energy bills significantly over a standard-grade alternative.',
    },
  ],
  Active: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'BMS Integration',
      body: 'BACnet and Modbus compatible for seamless integration with building management systems in commercial and light-industrial settings.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      title: 'Commercial Grade',
      body: 'Engineered for continuous commercial operation with extended operating ranges and enhanced durability compared to residential units.',
    },
  ],
  Advance: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title: 'VRV Compatible',
      body: 'Designed to connect to Daikin\'s VRV heat recovery systems, enabling simultaneous heating and cooling across multiple zones.',
    },
  ],
  Alpha: [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title: 'VRV Compatible',
      body: 'Designed to connect to Daikin\'s VRV heat recovery systems, enabling simultaneous heating and cooling across multiple zones.',
    },
  ],
  'Standard Inverter': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      title: 'Reliable & Affordable',
      body: 'Proven inverter technology at a cost-effective price point — the go-to choice for homes and light commercial installations.',
    },
  ],
  'Standard Range': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      title: 'Flexible Installation',
      body: 'Multiple pipe routing options and compact dimensions suit a wide variety of building types and installation scenarios.',
    },
  ],
  'Economy Range': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      title: 'Cost-Effective Comfort',
      body: 'A dependable, budget-friendly solution for everyday heating and cooling in homes, classrooms, and smaller commercial spaces.',
    },
  ],
  'Floor Mount': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Low-Level Efficiency',
      body: 'Specially designed for floor-level installation, delivering effective heating at low level — ideal for conservatories and under windows.',
    },
  ],
  'Mini Sky Air': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'Compact Commercial',
      body: 'A compact footprint with commercial-grade airflow — ideal for smaller retail spaces, meeting rooms, and light-duty applications.',
    },
  ],
  'Sky Air': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      title: 'Sky Air Platform',
      body: 'Part of Daikin\'s Sky Air commercial range, offering advanced controls and connectivity for demanding commercial environments.',
    },
  ],
  'Low Inverter': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      title: 'Entry-Level Inverter',
      body: 'Delivers genuine inverter efficiency at entry-level pricing, making energy-efficient climate control accessible for any budget.',
    },
  ],
  'Compact & Comfort': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      title: 'Slim Duct Design',
      body: 'Exceptionally slim ducted unit suitable for installations with limited ceiling void depth, without compromising on output.',
    },
  ],
  'High Static': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
      title: 'Long-Run Ducting',
      body: 'High static pressure capability allows longer duct runs up to 12 m, making it suitable for large commercial and industrial spaces.',
    },
  ],
};

export const unitTypeFeatures: Record<string, FeatureBlock[]> = {
  'Wall Mounted': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 17v2M18 17v2"/></svg>`,
      title: 'Most Popular Type',
      body: 'Wall mounted units are the most widely installed type in the UK — quick to fit, easy to maintain, and suitable for almost any room.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`,
      title: 'Space Saving',
      body: 'Wall mounted on a high bracket, these units take up zero floor space — ideal for smaller rooms or where furniture placement matters.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 8l4 4-4 4"/><path d="M3 12h18"/><path d="M7 8l-4 4 4 4"/></svg>`,
      title: 'Wide Airflow Spread',
      body: 'Positioned high on the wall, the unit distributes conditioned air across the full depth and width of the room for even comfort.',
    },
  ],
  'Low Wall Mounted': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 14V5M18 14V5"/></svg>`,
      title: 'Under-Window Install',
      body: 'Designed to sit just above floor level beneath a window — replacing the visual and functional role of a traditional convector heater.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20"/></svg>`,
      title: 'Warm Floor Effect',
      body: 'Low-level heating delivers warmth at floor level, creating the comfortable warm-floor sensation without underfloor heating costs.',
    },
  ],
  'Ceiling Cassette': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M12 10v12M6 14l6 4 6-4"/></svg>`,
      title: '360° Airflow',
      body: 'Four-way cassette panels distribute air in all directions simultaneously, ensuring even temperature across large open-plan spaces.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M2 12h20M12 2v20"/></svg>`,
      title: 'Recessed & Discreet',
      body: 'The cassette body is concealed within the ceiling void with only the slim panel visible — ideal for commercial and retail spaces.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      title: 'Commercial Favourite',
      body: 'The cassette unit is the preferred choice for offices, retail, restaurants, and any space where aesthetics and performance both matter.',
    },
  ],
  'Floor Standing': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 8h12M6 14h12"/></svg>`,
      title: 'Familiar Placement',
      body: 'Floor-mounted at low level for placement under windows — familiar operation for customers upgrading from traditional heating systems.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      title: 'Flexible Positioning',
      body: 'Can be installed at low level beneath a window or raised on a plinth to improve upward air distribution in taller rooms.',
    },
  ],
  'Ceiling Suspended': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/></svg>`,
      title: 'Long-Throw Airflow',
      body: 'High-capacity fans project conditioned air across large floor areas from a single suspension point — ideal for warehouses and halls.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 10v4M18 10v4M9 14h6"/></svg>`,
      title: 'No Ceiling Void Needed',
      body: 'Surface-suspended design suits buildings without a false ceiling, including factories, gyms, and open-plan commercial spaces.',
    },
  ],
  'Ducted Up to 1 - 2m': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 8V5M18 8V5M6 16v3M18 16v3"/></svg>`,
      title: 'Completely Concealed',
      body: 'All components sit above the ceiling — only slim supply and return grilles are visible, preserving any interior design aesthetic.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>`,
      title: 'Compact Void Depth',
      body: 'Shallow unit profile designed for installations where ceiling void depth is restricted to 200–300 mm.',
    },
  ],
  'Ducted Up to 3 - 8m': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 8V5M18 8V5M6 16v3M18 16v3"/></svg>`,
      title: 'Completely Concealed',
      body: 'All components sit above the ceiling — only slim supply and return grilles are visible, preserving any interior design aesthetic.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
      title: 'Medium-Length Ducting',
      body: 'Suitable for duct runs up to 8 m, covering most residential and smaller commercial installations from a single indoor unit.',
    },
  ],
  'Ducted Up to 9 - 12m': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 8V5M18 8V5M6 16v3M18 16v3"/></svg>`,
      title: 'Completely Concealed',
      body: 'All components sit above the ceiling — only slim supply and return grilles are visible, preserving any interior design aesthetic.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
      title: 'Long-Run Ducting',
      body: 'High-static-pressure design handles extended duct runs up to 12 m — the preferred choice for larger commercial and industrial buildings.',
    },
  ],
  'Under Ceiling': [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="8" rx="2"/><path d="M12 12v8M6 16h12"/></svg>`,
      title: 'Surface-Mounted Simplicity',
      body: 'Mounts directly to the ceiling surface with no ceiling void required — fast to install and easy to service.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 8l4 4-4 4M7 8l-4 4 4 4"/></svg>`,
      title: 'High-Throw Airflow',
      body: 'Delivers a long horizontal throw from ceiling height, distributing conditioned air across large floor areas efficiently.',
    },
  ],
};
