// Business Information
export const BUSINESS_INFO = {
  name: 'Westek Electric Corp.',
  tagline: 'Your Trusted Southern California Electricians',
  phone: '(909) 996-6678',
  phoneRaw: '+19099966678',
  email: 'westekelectriccompany@gmail.com',
  address: {
    street: '29304 Abelia Ln.',
    city: 'Lake Elsinore',
    state: 'CA',
    zip: '92530',
    full: '29304 Abelia Ln., Lake Elsinore, CA 92530',
  },
  hours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
    emergency: '24/7 Emergency Service Available',
  },
  license: 'Westek Electric Corp. | License #C10-1100272',
  founded: 2010,
  social: {
    facebook: 'https://facebook.com/socalelectricpros',
    instagram: 'https://instagram.com/socalelectricpros',
    yelp: 'https://yelp.com/biz/socal-electric-pros',
    google: 'https://g.page/socalelectricpros',
  },
} as const

// Service Areas
export const SERVICE_AREAS = [
  'Temecula',
  'Murrieta',
  'Menifee',
  'Lake Elsinore',
  'Wildomar',
  'Winchester',
  'French Valley',
  'Fallbrook',
  'Hemet',
  'San Jacinto',
  'Corona',
  'Riverside',
] as const

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'EV Chargers', href: '/ev-chargers' },
  { label: 'Financing', href: '/financing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  {
    id: 'rc-car-track',
    title: 'RC Car Track Electrical Installation',
    description: 'Complete electrical infrastructure for a professional RC car track, including underground conduit installation, power distribution, and track lighting systems.',
    category: 'Commercial',
    location: 'Southern California',
    images: [
      '/images/portfolio/RC–Track-Parking-Lot-Lights-1.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-2.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-3.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-4.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-5.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-6.webp',
      '/images/portfolio/RC–Track-Parking-Lot-Lights-7.webp',
    ],
    services: ['Underground Conduit', 'Power Distribution', 'Outdoor Lighting'],
  },
  {
    id: 'mobile-bakery-trailer',
    title: 'Mobile Bakery Trailer',
    description: 'Full electrical system design and installation for a mobile bakery trailer, including custom control panel, commercial kitchen circuits, refrigeration, and HVAC power systems.',
    category: 'Commercial',
    location: 'Southern California',
    images: [
      '/images/portfolio/mobile-bakery-trailer-1.webp',
      '/images/portfolio/mobile-bakery-trailer-2.webp',
      '/images/portfolio/mobile-bakery-trailer-3.webp',
      '/images/portfolio/mobile-bakery-trailer-4.webp',
      '/images/portfolio/mobile-bakery-trailer-5.webp',
      '/images/portfolio/mobile-bakery-trailer-6.webp',
      '/images/portfolio/mobile-bakery-trailer-7.webp',
      '/images/portfolio/mobile-bakery-trailer-8.webp',
      '/images/portfolio/mobile-bakery-trailer-9.webp',
    ],
    services: ['Panel Installation', 'Commercial Kitchen Wiring', 'HVAC Circuits'],
  },
  {
    id: 'mobile-home-panel',
    title: 'Mobile Home Service Panel Replacement',
    description: 'Complete service panel replacement for a mobile home, upgrading outdated electrical infrastructure to meet current safety codes and support modern power demands.',
    category: 'Residential',
    location: 'Southern California',
    images: [
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-1.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-2.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-3.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-4.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-5.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-6.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-7.webp',
      '/images/portfolio/Mobile.Home.Service.Panel.Replacement-8.webp',
    ],
    services: ['Panel Upgrade', 'Code Corrections', 'Safety Inspection'],
  },
  {
    id: 'dch-dodge-temecula',
    title: 'DCH Dodge of Temecula',
    description: 'Large-scale commercial electrical installation for DCH Dodge dealership, including showroom lighting, service bay power systems, and outdoor lot lighting.',
    category: 'Commercial',
    location: 'Temecula, CA',
    images: [
      '/images/portfolio/DCH-Dodge-of-Temecula-1.webp',
      '/images/portfolio/DCH-Dodge-of-Temecula-2.webp',
      '/images/portfolio/DCH-Dodge-of-Temecula-3.webp',
      '/images/portfolio/DCH-Dodge-of-Temecula-4.webp',
    ],
    services: ['Commercial Lighting', 'Power Distribution', '3-Phase Installation'],
  },
  {
    id: 'hyundai-anaheim',
    title: 'Hyundai of Anaheim',
    description: 'Comprehensive electrical work for Hyundai dealership including EV charger installations, showroom lighting upgrades, and service department electrical systems.',
    category: 'Commercial',
    location: 'Anaheim, CA',
    images: [
      '/images/portfolio/Hyundai-of-Anaheim-1.webp',
      '/images/portfolio/Hyundai-of-Anaheim-2.webp',
      '/images/portfolio/Hyundai-of-Anaheim-3.webp',
      '/images/portfolio/Hyundai-of-Anaheim-4.webp',
      '/images/portfolio/Hyundai-of-Anaheim-5.webp',
      '/images/portfolio/Hyundai-of-Anaheim-6.webp',
      '/images/portfolio/Hyundai-of-Anaheim-7.webp',
    ],
    services: ['EV Charger Installation', 'Commercial Lighting', 'Service Bay Wiring'],
  },
] as const

// Core Services
export const CORE_SERVICES = [
  {
    id: 'residential',
    title: 'Residential Electrical',
    description: 'Complete home electrical services from panel upgrades to whole-house rewiring. We keep your family safe and your lights on.',
    icon: 'Home',
    href: '/services/residential',
  },
  {
    id: 'commercial',
    title: 'Commercial Electrical',
    description: 'Licensed commercial electricians for businesses of all sizes. Minimize downtime with our reliable service.',
    icon: 'Building2',
    href: '/services/commercial',
  },
  {
    id: 'switches-outlets',
    title: 'Switches & Outlets',
    description: 'Expert installation and repair of switches, outlets, and USB charging stations throughout your property.',
    icon: 'PlugZap',
    href: '/services/switches-outlets',
  },
  {
    id: 'led-lighting',
    title: 'LED Lighting',
    description: 'Energy-efficient LED upgrades, recessed lighting, and custom lighting designs to transform your space.',
    icon: 'Lightbulb',
    href: '/services/led-lighting',
  },
] as const

// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Complete electrical solutions for homes of all sizes',
    icon: 'Home',
    services: [
      'Panel Upgrades',
      'Whole-House Rewiring',
      'Ceiling Fan Installation',
      'Smoke Detector Installation',
      'Home Safety Inspections',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Professional electrical services for businesses',
    icon: 'Building2',
    services: [
      'Office Buildouts',
      'Retail Lighting',
      'Data & Network Wiring',
      'Emergency Lighting',
      'Code Compliance',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Heavy-duty electrical for industrial facilities',
    icon: 'Factory',
    services: [
      'Three-Phase Power',
      'Motor Controls',
      'Industrial Lighting',
      'Preventive Maintenance',
      'Power Quality Analysis',
    ],
  },
  {
    id: 'design',
    title: 'Design & Planning',
    description: 'Custom electrical design and project planning',
    icon: 'PenTool',
    services: [
      'Electrical Design',
      'Load Calculations',
      'Energy Audits',
      'Code Consultation',
      'Project Management',
    ],
  },
] as const

// EV Charger Brands
export const EV_CHARGER_BRANDS = [
  {
    id: 'tesla',
    brand: 'Tesla',
    models: 'Model S, Model 3, Model X, Model Y, Cybertruck',
    description: 'Certified Tesla Wall Connector installation for all Tesla vehicles. Level 2 charging delivers up to 44 miles of range per hour.',
  },
  {
    id: 'ford',
    brand: 'Ford',
    models: 'F-150 Lightning, Mustang Mach-E, E-Transit',
    description: 'Ford Charge Station Pro and third-party charger installation. Fast home charging for your Ford electric vehicle.',
  },
  {
    id: 'chevrolet',
    brand: 'Chevrolet',
    models: 'Bolt EV, Bolt EUV, Silverado EV, Equinox EV',
    description: 'GM-approved Level 2 charger installation. Charge your Chevy EV overnight and wake up to a full battery.',
  },
  {
    id: 'rivian',
    brand: 'Rivian',
    models: 'R1T, R1S',
    description: 'Expert installation for Rivian\'s recommended home charging solutions. Adventure-ready charging at home.',
  },
] as const

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    location: 'Temecula, CA',
    rating: 5,
    text: 'Westek Electric Corp. installed a 200-amp panel upgrade and EV charger for our Tesla. The team was professional, clean, and finished ahead of schedule. Highly recommend!',
    service: 'Panel Upgrade & EV Charger',
  },
  {
    id: 2,
    name: 'Jennifer Walsh',
    location: 'Murrieta, CA',
    rating: 5,
    text: 'We had outdated wiring throughout our 1970s home. They rewired the entire house, installed new outlets, and upgraded our lighting. The difference is incredible. True professionals.',
    service: 'Whole-House Rewiring',
  },
  {
    id: 3,
    name: 'David Chen',
    location: 'Menifee, CA',
    rating: 5,
    text: 'Called for an emergency at our restaurant when our kitchen lost power during dinner service. They arrived within 30 minutes and had us back up and running. Saved our Saturday night!',
    service: 'Commercial Emergency Service',
  },
] as const

// Blog Posts Preview
export const BLOG_POSTS_PREVIEW = [
  {
    slug: 'ev-charger-installation-guide-temecula',
    title: 'Complete Guide to EV Charger Installation in Temecula',
    excerpt: 'Everything Temecula homeowners need to know about installing a Level 2 EV charger, from electrical requirements to permits and rebates.',
    date: '2024-12-10',
    category: 'EV Chargers',
    readTime: '8 min read',
  },
  {
    slug: 'signs-you-need-panel-upgrade',
    title: '7 Signs Your Home Needs an Electrical Panel Upgrade',
    excerpt: 'Flickering lights, tripped breakers, and warm outlets are warning signs. Learn when it\'s time to upgrade your electrical panel.',
    date: '2024-12-05',
    category: 'Electrical Safety',
    readTime: '6 min read',
  },
  {
    slug: 'led-lighting-benefits-energy-savings',
    title: 'LED Lighting: How Much Can You Really Save?',
    excerpt: 'LED upgrades can cut lighting costs by 75%. We break down the real savings and best LED options for California homes.',
    date: '2024-11-28',
    category: 'Energy Efficiency',
    readTime: '5 min read',
  },
] as const

// Trust Badges
export const TRUST_BADGES = [
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Satisfaction Guaranteed', icon: 'ThumbsUp' },
  { label: '24/7 Emergency Service', icon: 'Clock' },
  { label: 'Free Estimates', icon: 'FileCheck' },
] as const

// Residential Services
export const RESIDENTIAL_SERVICES = [
  {
    id: 'appliance-wiring',
    category: 'Wiring',
    title: 'Appliances',
    description: 'We provide professional appliance wiring solutions, experience the ultimate connection.',
    image: '/images/Appliances-Service-Image.webp',
    href: '/services/residential/appliance-wiring',
  },
  {
    id: 'breaker-replacement',
    category: 'Residential',
    title: 'Breakers Replacement',
    description: 'Our team of professionals is equipped to ensure your home\'s safety with our reliable residential breaker replacement services.',
    image: '/images/Residential-Breakers-Replacement-Service-Image.webp',
    href: '/services/residential/breaker-replacement',
  },
  {
    id: 'ceiling-fan',
    category: 'Installation',
    title: 'Ceiling Fan',
    description: 'Take advantage of our expert ceiling fan installers: efficient, safe, reliable, professional, customer-focused.',
    image: '/images/Residential-Ceiling-Fan-Service-Image.webp',
    href: '/services/residential/ceiling-fan',
  },
  {
    id: 'code-corrections',
    category: 'Residential',
    title: 'Code Corrections',
    description: 'Our Electricians ensure safety, compliance, and reliability through expert wiring code corrections.',
    image: '/images/Residentail-code-Corrections-Service-Image.webp',
    href: '/services/residential/code-corrections',
  },
  {
    id: 'rewiring',
    category: 'Residential',
    title: 'Rewiring',
    description: 'We offer comprehensive home electrical system re-wires and upgrades for safety, efficiency, and modernization.',
    image: '/images/Residential-Rewiring-Service-Image.webp',
    href: '/services/residential/rewiring',
  },
  {
    id: 'outdoor-lighting',
    category: 'Outdoor',
    title: 'Lighting',
    description: 'We know outdoor wiring like the back of our hand. Trust us to get the job done right, on time and on budget.',
    image: '/images/Outdoor-Lighting-Service-Image.webp',
    href: '/services/residential/outdoor-lighting',
  },
  {
    id: 'indoor-lighting',
    category: 'Indoor',
    title: 'Lighting',
    description: 'Westek offers professional indoor wiring services for homes and businesses. Schedule a consultation today.',
    image: '/images/Indoor_Lighting-Service-Image.webp',
    href: '/services/residential/indoor-lighting',
  },
  {
    id: 'pool-spa-lighting',
    category: 'Repair',
    title: 'Pool & Spa Lighting',
    description: 'Our wiring professionals ensure safe expert pool, spa, and jacuzzi lighting for your backyard oasis.',
    image: '/images/Pool_Lighting-Service-Image.webp',
    href: '/services/residential/pool-spa-lighting',
  },
  {
    id: 'hot-tub-spa-pool-jacuzzi',
    category: 'Wiring',
    title: 'Hot Tub, Spa, Pool & Jacuzzi',
    description: 'Our team of experienced professionals can help you get your new hot tub up and running in no time.',
    image: '/images/Hot_Tub_Pool_Jacuzzi_Wiring-Service-Image.webp',
    href: '/services/residential/hot-tub-spa-pool-jacuzzi',
  },
  {
    id: 'new-construction',
    category: 'Electrician',
    title: 'New Construction',
    description: 'The team at Westek is your best choice for your new construction wiring and electrical needs.',
    image: '/images/New_Construction-Service-Image.webp',
    href: '/services/residential/new-construction',
  },
  {
    id: 'dedicated-circuits',
    category: 'Additions',
    title: 'Dedicated Circuits',
    description: 'Need an extra circuit for your home? Westek can help. We offer dedicated circuits for homes of all sizes.',
    image: '/images/Dedicated-Circuit-Service-Image.webp',
    href: '/services/residential/dedicated-circuits',
  },
  {
    id: 'landscape-lighting',
    category: 'Outdoor',
    title: 'Landscape Lighting',
    description: 'Westek Electric Corp. is the professional\'s choice for landscaping wiring.',
    image: '/images/Lanscape-Lighting-Service-Image.webp',
    href: '/services/residential/landscape-lighting',
  },
] as const

// Commercial Services
export const COMMERCIAL_SERVICES = [
  {
    id: '1-phase-3-phase',
    category: 'Circuit Additions',
    title: '1 Phase / 3 Phase Circuits',
    description: 'Need to add a new circuit to your home or office with ease? Westek\'s electricians have you covered.',
    image: '/images/1-Phase-3-Phase-Service-Image.webp',
    href: '/services/commercial/1-phase-3-phase',
  },
  {
    id: 'breakers-fuses',
    category: 'Commercial',
    title: 'Breakers & Fuses',
    description: 'Westek provides expert installation and replacement of commercial breakers in your business.',
    image: '/images/Commercial-Breakers-Fuses-Service-Image.webp',
    href: '/services/commercial/breakers-fuses',
  },
  {
    id: 'code-corrections',
    category: 'Commercial',
    title: 'Code Corrections',
    description: 'We\'re the experts in commercial wiring code corrections. Let us help you stay compliant and safe.',
    image: '/images/Commercial-Code-Corrections-Service-Image.webp',
    href: '/services/commercial/code-corrections',
  },
  {
    id: 'panel-installation',
    category: 'Commercial',
    title: 'Electrical Panel Installation',
    description: 'Westek is a full-service electrical contractor, providing expert installation of commercial electrical panels.',
    image: '/images/Commercial-Electric-Panel-Installation-Service-Image.webp',
    href: '/services/commercial/panel-installation',
  },
  {
    id: 'new-construction',
    category: 'Wiring',
    title: 'New Construction',
    description: 'We\'re the experts in wiring new construction. Let us help you get your project up and running smoothly.',
    image: '/images/Cmmercial-Wiring-New-Construction-Service-Image.webp',
    href: '/services/commercial/new-construction',
  },
  {
    id: 'outdoor-lighting',
    category: 'Outdoor',
    title: 'Commercial Lighting',
    description: 'The team at Westek offers a variety of wiring solutions for your commercial lighting needs.',
    image: '/images/Commercial-ourdoor-lighting-Service-Image.webp',
    href: '/services/commercial/outdoor-lighting',
  },
  {
    id: 'indoor-lighting',
    category: 'Indoor',
    title: 'Commercial Lighting',
    description: 'We have provided quality commercial indoor lighting installation for businesses for over 15 years.',
    image: '/images/Commercial-Indoor-Lighting-Service-Image.webp',
    href: '/services/commercial/indoor-lighting',
  },
  {
    id: 'security-lighting',
    category: 'Commercial',
    title: 'Security Lighting',
    description: 'Don\'t let your business be a target. Protect it with commercial security lighting from Westek.',
    image: '/images/Commercial-Security-Lighting-Service-Image.webp',
    href: '/services/commercial/security-lighting',
  },
  {
    id: 'transformers',
    category: 'Installation',
    title: 'Transformers',
    description: 'We are professional electrical contracting company that specializes in the installation of commercial transformers.',
    image: '/images/Commercial-Transformer-Installation-Service-Image.webp',
    href: '/services/commercial/transformers',
  },
  {
    id: 'office-lighting',
    category: 'Commercial',
    title: 'Office Lighting',
    description: 'Improve the productivity and comfort of your employees with our commercial office lighting solutions.',
    image: '/images/Commercial-Office-Lighting-Service-Image.webp',
    href: '/services/commercial/office-lighting',
  },
  {
    id: 'low-voltage-wiring',
    category: 'Commercial',
    title: 'Low Voltage Wiring',
    description: 'Low-voltage wiring is a critical part of any security system. Let the experts at Westek handle it for you.',
    image: '/images/Commercial-Low-Voltage-Wiring-Service-Image.webp',
    href: '/services/commercial/low-voltage-wiring',
  },
  {
    id: 'cat6-installation',
    category: 'Installation',
    title: 'Cat 6 Installation',
    description: 'We offer Category 6 wiring for your home or business. Call Westek Electric Corp. today for a quote.',
    image: '/images/Commercial-Cat6-Installation-Service-Image.webp',
    href: '/services/commercial/cat6-installation',
  },
] as const
