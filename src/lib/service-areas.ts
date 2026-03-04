export interface ServiceAreaData {
  slug: string
  name: string
  county: string
  coordinates: { lat: number; lng: number }
  zipCodes: string[]
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroDescription: string
  introduction: string
  nearbyAreas: string[]
  highlights: string[]
  commonElectricalNeeds: string[]
  faqs: { question: string; answer: string }[]
}

export function cityToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export const SERVICE_AREA_DATA: Record<string, ServiceAreaData> = {
  temecula: {
    slug: 'temecula',
    name: 'Temecula',
    county: 'Riverside County',
    coordinates: { lat: 33.4936, lng: -117.1484 },
    zipCodes: ['92590', '92591', '92592'],
    metaTitle: 'Electrician in Temecula, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Temecula, CA. Residential & commercial electrical services, panel upgrades, EV charger installation. Free estimates. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Temecula, CA',
    heroDescription:
      'Westek Electric Corp. provides licensed residential and commercial electrical services throughout Temecula. From Old Town to the wine country estates, we keep Temecula powered safely.',
    introduction:
      "Temecula has grown rapidly from a quiet wine country community into one of Riverside County's most vibrant cities, with over 110,000 residents. That growth means thousands of homes built during the 1990s and 2000s construction boom — many with 100-amp electrical panels that struggle to keep up with modern power demands like EV chargers, smart home systems, and high-efficiency HVAC units.\n\nWhether you live in Redhawk, Paloma del Sol, Wolf Creek, or the hillside estates along De Portola Road, Westek Electric Corp. understands the unique electrical needs of Temecula homes and businesses. We regularly work with Old Town Temecula commercial properties on lighting upgrades and code compliance, and we help homeowners throughout the valley modernize their electrical systems.\n\nAs your local licensed electrical contractor, we're just a short drive from Temecula and can respond quickly for both scheduled projects and emergency calls. Every job we perform meets Riverside County building codes and is backed by our satisfaction guarantee.",
    nearbyAreas: ['murrieta', 'french-valley', 'winchester', 'fallbrook'],
    highlights: [
      'Serving Old Town Temecula commercial properties',
      'Wine country estate electrical specialists',
      '1990s-2000s home panel upgrade experts',
    ],
    commonElectricalNeeds: [
      'Panel upgrades from 100A to 200A for older Temecula homes',
      'EV charger installation for wine country homeowners',
      'Pool and spa wiring for backyard living',
      'Commercial lighting for Old Town businesses',
      'Landscape and outdoor lighting for vineyard properties',
      'Whole-house rewiring for pre-2000 construction',
    ],
    faqs: [
      {
        question: 'How much does an electrician cost in Temecula?',
        answer:
          'Electrician rates in Temecula typically range from $150-$500 for common repairs and installations. Panel upgrades run $2,000-$4,500, and EV charger installations are $800-$2,500 depending on your existing electrical infrastructure. We provide free estimates for all projects.',
      },
      {
        question: 'Do I need a permit for electrical work in Temecula?',
        answer:
          'Yes, most electrical work in Temecula requires a permit from the Riverside County Building Department or the City of Temecula. This includes panel upgrades, new circuits, and EV charger installations. Westek handles all permitting and inspections for you.',
      },
      {
        question: 'My Temecula home was built in the 1990s. Should I upgrade my panel?',
        answer:
          "Many Temecula homes from the 1990s have 100-amp or 125-amp panels that weren't designed for today's electrical demands. If you're adding an EV charger, upgrading HVAC, or experiencing tripped breakers, a 200-amp panel upgrade is recommended. We can assess your current system for free.",
      },
      {
        question: 'Do you provide emergency electrical service in Temecula?',
        answer:
          'Yes, we offer 24/7 emergency electrical service throughout Temecula and surrounding areas. Whether it\'s a power outage, sparking outlet, or tripped main breaker, call us at (909) 996-6678 for immediate assistance.',
      },
      {
        question: 'Can you install EV chargers at Temecula wineries and businesses?',
        answer:
          'Absolutely. We install commercial EV charging stations for Temecula businesses, wineries, and restaurants. We handle everything from site assessment and electrical capacity planning to installation and permitting.',
      },
    ],
  },

  murrieta: {
    slug: 'murrieta',
    name: 'Murrieta',
    county: 'Riverside County',
    coordinates: { lat: 33.5539, lng: -117.2139 },
    zipCodes: ['92562', '92563'],
    metaTitle: 'Electrician in Murrieta, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Murrieta, CA. Panel upgrades, EV chargers, rewiring & more. Trusted by Murrieta homeowners for 15+ years. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Murrieta, CA',
    heroDescription:
      'Westek Electric Corp. delivers reliable residential and commercial electrical services throughout Murrieta. From family neighborhoods to growing commercial centers, we have you covered.',
    introduction:
      "Murrieta is one of Southern California's safest and fastest-growing cities, known for its family-friendly master-planned communities like Greer Ranch, Spencer's Crossing, and The Colony. With a population over 115,000, Murrieta homeowners depend on reliable electrical systems to power modern family life.\n\nMany Murrieta homes were built during the early 2000s housing boom and feature builder-grade electrical systems that may need updating. Common upgrades include panel capacity increases for EV chargers and home additions, outdoor lighting for large yards, and smart home integration throughout the house.\n\nWestek Electric Corp. has served Murrieta homeowners and businesses for over 15 years. We understand the specific electrical requirements of Murrieta's diverse housing stock — from single-story ranch homes to multi-story custom builds. Our team is licensed, insured, and familiar with all local building codes and permit requirements.",
    nearbyAreas: ['temecula', 'wildomar', 'menifee', 'french-valley'],
    highlights: [
      'Serving master-planned communities throughout Murrieta',
      'Family-focused home electrical upgrades',
      'Growing commercial district electrical services',
    ],
    commonElectricalNeeds: [
      'Panel upgrades for home additions and remodels',
      'EV charger installation in garage and driveways',
      'Outdoor lighting for family entertainment areas',
      'Ceiling fan installation and replacement',
      'Dedicated circuits for home offices and workshops',
      'Smart home wiring and automation',
    ],
    faqs: [
      {
        question: 'How much does a panel upgrade cost in Murrieta?',
        answer:
          'A 200-amp panel upgrade in Murrieta typically costs between $2,000 and $4,500, depending on your existing wiring, meter base condition, and whether Southern California Edison requires a service upgrade. We provide free on-site estimates.',
      },
      {
        question: 'Do you serve all Murrieta neighborhoods?',
        answer:
          "Yes, we serve all of Murrieta including Greer Ranch, Spencer's Crossing, The Colony, Bear Creek, and every neighborhood in between. We also cover Murrieta Hot Springs and the commercial areas along Jefferson Avenue and Murrieta Hot Springs Road.",
      },
      {
        question: 'Can you add outlets to my Murrieta home office?',
        answer:
          'Absolutely. We install dedicated circuits and additional outlets for home offices, ensuring your equipment has clean, reliable power. This is especially important for computers, monitors, and networking equipment that can be affected by shared circuits.',
      },
      {
        question: 'How quickly can you respond to a call in Murrieta?',
        answer:
          'We are based nearby in Lake Elsinore, so we can typically reach Murrieta within 20-30 minutes for emergency calls. For scheduled appointments, we offer flexible morning and afternoon time slots.',
      },
    ],
  },

  menifee: {
    slug: 'menifee',
    name: 'Menifee',
    county: 'Riverside County',
    coordinates: { lat: 33.6971, lng: -117.1851 },
    zipCodes: ['92584', '92585', '92586', '92587'],
    metaTitle: 'Electrician in Menifee, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Menifee, CA. New construction wiring, panel upgrades, and electrical repairs for one of Riverside County\'s fastest-growing cities. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Menifee, CA',
    heroDescription:
      'Westek Electric Corp. serves Menifee with expert residential and commercial electrical services. From brand-new communities to established neighborhoods, we deliver quality electrical work.',
    introduction:
      "Menifee is one of the youngest and fastest-growing cities in Riverside County, incorporating in 2008 and rapidly expanding with new master-planned communities like Audie Murphy Ranch, Heritage Lake, and Menifee Lakes. This explosive growth means a constant demand for both new construction electrical work and upgrades to older homes in the Sun City and Quail Valley areas.\n\nThe mix of brand-new construction and decades-old homes makes Menifee unique. Newer homes may need additional circuits for EV chargers or home theaters, while older properties in Sun City often require complete rewiring, panel upgrades, and updated safety features like GFCI and AFCI protection.\n\nWestek Electric Corp. has been part of Menifee's growth story, working with homeowners and builders throughout the city. Whether you're moving into a new build and need custom lighting installed, or you've discovered outdated wiring in an older Menifee home, our licensed team can handle it all.",
    nearbyAreas: ['murrieta', 'wildomar', 'hemet', 'san-jacinto'],
    highlights: [
      'New construction electrical specialists',
      'Sun City rewiring and panel upgrade experts',
      'Fast-growing community electrical partner',
    ],
    commonElectricalNeeds: [
      'New construction wiring and electrical design',
      'Panel upgrades for older Sun City homes',
      'Whole-house rewiring for pre-1990 properties',
      'EV charger installation in new communities',
      'GFCI and AFCI protection upgrades',
      'Recessed lighting installation for modern homes',
    ],
    faqs: [
      {
        question: 'Do new Menifee homes need electrical upgrades?',
        answer:
          "Even new Menifee homes may benefit from electrical upgrades depending on your needs. Builder-grade installations sometimes lack dedicated circuits for home offices, EV chargers, or workshop equipment. We can assess your new home's electrical capacity and add what you need.",
      },
      {
        question: 'How old is the wiring in Sun City Menifee homes?',
        answer:
          'Sun City homes in Menifee were primarily built in the 1960s through 1980s. Many still have original wiring, outdated panels (60-100 amps), and may lack modern safety features. We recommend a safety inspection and potential rewiring for homes over 40 years old.',
      },
      {
        question: 'Do you work with Menifee home builders?',
        answer:
          'Yes, we work with home builders and general contractors throughout Menifee on new construction electrical installations. We handle rough-in wiring, panel installation, fixture placement, and final connections for residential and light commercial projects.',
      },
      {
        question: 'What permits do I need for electrical work in Menifee?',
        answer:
          'Electrical permits in Menifee are issued through the City of Menifee Building & Safety Department. Most work beyond simple fixture replacements requires a permit. We handle all permitting and schedule inspections as part of our service.',
      },
    ],
  },

  'lake-elsinore': {
    slug: 'lake-elsinore',
    name: 'Lake Elsinore',
    county: 'Riverside County',
    coordinates: { lat: 33.6681, lng: -117.3273 },
    zipCodes: ['92530', '92532'],
    metaTitle: 'Electrician in Lake Elsinore, CA | Licensed Electrical Contractor',
    metaDescription:
      'Local electrician based in Lake Elsinore, CA. Residential & commercial electrical services with fast response times. Licensed, insured, and trusted. Call (909) 996-6678.',
    heroHeadline: 'Your Local Electricians in Lake Elsinore, CA',
    heroDescription:
      'Westek Electric Corp. is headquartered right here in Lake Elsinore. As your neighbors, we provide fast, reliable electrical services with the shortest response times in the area.',
    introduction:
      "Lake Elsinore is home — it's where Westek Electric Corp. is based, and where we've built our reputation as trusted electrical contractors. Being headquartered here means Lake Elsinore residents get the fastest response times and most personalized service of any community we serve.\n\nLake Elsinore's diverse housing stock ranges from lakeside cottages and historic downtown homes to the newer developments in Canyon Hills, Rosetta Canyon, and Summerly. Each neighborhood presents unique electrical challenges, from upgrading aging infrastructure in older homes to customizing electrical systems in new construction.\n\nThe city's growth and the popularity of outdoor recreation — from the lake to skydiving to the motocross park — means many homeowners are adding features like outdoor entertainment systems, landscape lighting, pool and spa equipment, and EV chargers for their adventure vehicles. Our team knows these needs firsthand because we live here too.",
    nearbyAreas: ['wildomar', 'menifee', 'corona', 'murrieta'],
    highlights: [
      'Westek headquarters — fastest response times',
      'Serving Lake Elsinore since our founding',
      'Local experts familiar with every neighborhood',
    ],
    commonElectricalNeeds: [
      'Panel upgrades for lakeside and hillside homes',
      'Outdoor entertainment and landscape lighting',
      'Pool, spa, and hot tub wiring',
      'Whole-house rewiring for older downtown homes',
      'EV charger installation for commuters',
      'New construction electrical for Canyon Hills and Rosetta Canyon',
    ],
    faqs: [
      {
        question: 'How fast can you get to my Lake Elsinore home?',
        answer:
          "Since we're based right in Lake Elsinore, we can typically arrive at your home within 15-20 minutes for emergency calls. For scheduled appointments, we offer same-day and next-day availability for Lake Elsinore residents.",
      },
      {
        question: 'Do older Lake Elsinore homes need rewiring?',
        answer:
          'Many older homes near downtown Lake Elsinore and along the lakefront were built in the 1950s-1970s and may have outdated wiring, including aluminum wiring or knob-and-tube. We recommend a safety inspection for any home over 40 years old. Rewiring improves safety and increases your home value.',
      },
      {
        question: 'Can you wire outdoor entertainment areas?',
        answer:
          "Absolutely. Lake Elsinore's climate is perfect for outdoor living. We install weatherproof outlets, landscape lighting, outdoor kitchen circuits, patio heater wiring, and entertainment system power for outdoor spaces.",
      },
      {
        question: 'Do you offer financing for Lake Elsinore residents?',
        answer:
          'Yes, we offer flexible financing options for larger projects like panel upgrades, whole-house rewiring, and EV charger installations. Visit our financing page or call us at (909) 996-6678 to learn about available payment plans.',
      },
    ],
  },

  wildomar: {
    slug: 'wildomar',
    name: 'Wildomar',
    county: 'Riverside County',
    coordinates: { lat: 33.5989, lng: -117.2798 },
    zipCodes: ['92595'],
    metaTitle: 'Electrician in Wildomar, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Wildomar, CA. Residential electrical services, panel upgrades, and EV charger installation. Your rural and suburban electrical experts. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Wildomar, CA',
    heroDescription:
      'Westek Electric Corp. provides expert electrical services throughout Wildomar. From rural properties to newer subdivisions, we handle the unique electrical needs of this growing community.',
    introduction:
      "Wildomar, incorporated in 2008, sits between Lake Elsinore and Murrieta along the I-15 corridor. This growing community features a unique mix of rural equestrian properties, established neighborhoods, and new residential developments that each present different electrical requirements.\n\nRural and semi-rural properties in Wildomar often have unique electrical challenges — longer service runs, well pump circuits, barn and stable lighting, and the need for reliable backup power during outages. Meanwhile, newer developments along Clinton Keith Road and Bundy Canyon require modern electrical systems designed for today's connected lifestyle.\n\nAs Wildomar's neighbor in Lake Elsinore, Westek Electric Corp. is ideally positioned to serve this community. We understand the specific needs of both rural and suburban properties and can handle everything from agricultural electrical work to smart home installations.",
    nearbyAreas: ['lake-elsinore', 'murrieta', 'menifee', 'temecula'],
    highlights: [
      'Rural and equestrian property electrical specialists',
      'Suburban development electrical services',
      'Quick response from nearby Lake Elsinore base',
    ],
    commonElectricalNeeds: [
      'Barn, stable, and agricultural lighting',
      'Well pump circuit installation and repair',
      'Panel upgrades for rural properties',
      'Outdoor and security lighting for large lots',
      'New construction electrical for growing subdivisions',
      'Generator hookup and transfer switch installation',
    ],
    faqs: [
      {
        question: 'Do you handle electrical work for horse properties in Wildomar?',
        answer:
          'Yes, we specialize in equestrian property electrical work including barn lighting, arena lighting, well pump circuits, and electric fencing power supplies. We understand the safety requirements for agricultural and animal-related electrical installations.',
      },
      {
        question: 'Can you install a generator transfer switch in Wildomar?',
        answer:
          'Absolutely. Wildomar properties, especially those on the rural outskirts, can benefit from generator backup systems. We install manual and automatic transfer switches that safely connect your generator to your home electrical system.',
      },
      {
        question: 'How far is Westek from Wildomar?',
        answer:
          "We're based in Lake Elsinore, which is directly adjacent to Wildomar. Most Wildomar locations are within 10-15 minutes of our office, making us one of the closest licensed electrical contractors serving the area.",
      },
      {
        question: 'Do you do electrical work for Wildomar new construction?',
        answer:
          'Yes, we work with builders and homeowners on new construction electrical projects throughout Wildomar. We handle complete electrical system design and installation, from rough-in to final fixtures and panel commissioning.',
      },
    ],
  },

  winchester: {
    slug: 'winchester',
    name: 'Winchester',
    county: 'Riverside County',
    coordinates: { lat: 33.7076, lng: -117.0845 },
    zipCodes: ['92596'],
    metaTitle: 'Electrician in Winchester, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Winchester, CA. Electrical services for rural properties, new developments, and custom homes. Free estimates. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Winchester, CA',
    heroDescription:
      'Westek Electric Corp. provides residential and commercial electrical services throughout Winchester. Expert electrical work for this growing unincorporated community in Riverside County.',
    introduction:
      "Winchester is an unincorporated community in Riverside County that has seen significant residential growth in recent years. Nestled between Temecula, Hemet, and Menifee, Winchester offers a more rural lifestyle while remaining close to urban amenities. The area features a blend of established ranch properties, custom homes on large lots, and newer planned communities.\n\nThe electrical needs in Winchester are as diverse as its properties. Older ranch homes may need complete electrical system overhauls, while newer homes in communities like Winchester Hills may need additional circuits for modern conveniences. The area's agricultural heritage also means many properties have outbuildings, workshops, and equipment that require dedicated electrical service.\n\nWestek Electric Corp. has extensive experience working in Winchester and surrounding unincorporated areas. We're familiar with the specific permitting requirements through Riverside County (rather than a city building department) and can navigate the process efficiently for our customers.",
    nearbyAreas: ['temecula', 'french-valley', 'hemet', 'menifee'],
    highlights: [
      'Experienced with Riverside County permitting for unincorporated areas',
      'Custom home and ranch property electrical specialists',
      'New development electrical services',
    ],
    commonElectricalNeeds: [
      'Custom home electrical design and installation',
      'Ranch and agricultural building electrical service',
      'Workshop and outbuilding wiring',
      'Panel upgrades for property expansions',
      'Well pump and irrigation system electrical',
      'Outdoor and security lighting for large properties',
    ],
    faqs: [
      {
        question: 'Who issues electrical permits in Winchester?',
        answer:
          'Since Winchester is unincorporated, electrical permits are handled by the Riverside County Building & Safety Department rather than a city office. We handle all county permitting and inspections as part of our service.',
      },
      {
        question: 'Can you wire outbuildings and workshops in Winchester?',
        answer:
          "Yes, we regularly wire detached workshops, barns, ADUs, and other outbuildings on Winchester properties. We handle everything from running underground conduit from your main panel to installing sub-panels and all interior wiring in the new structure.",
      },
      {
        question: 'Do you work on custom homes in Winchester?',
        answer:
          'Absolutely. We work with custom home builders and homeowners in Winchester on complete electrical system design and installation. From initial load calculations to final fixture installation, we ensure your custom home has exactly the electrical system you need.',
      },
      {
        question: 'How far is your office from Winchester?',
        answer:
          "Winchester is approximately 20-25 minutes from our Lake Elsinore headquarters. We serve Winchester regularly and can schedule appointments throughout the week, with emergency service available 24/7.",
      },
    ],
  },

  'french-valley': {
    slug: 'french-valley',
    name: 'French Valley',
    county: 'Riverside County',
    coordinates: { lat: 33.5980, lng: -117.1022 },
    zipCodes: ['92596'],
    metaTitle: 'Electrician in French Valley, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving French Valley, CA. Modern home electrical services, EV charger installation, and smart home wiring. Free estimates. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in French Valley, CA',
    heroDescription:
      'Westek Electric Corp. serves French Valley with modern electrical solutions. From newer planned communities to established homes, we provide expert electrical services.',
    introduction:
      "French Valley is a rapidly developing unincorporated community in southwestern Riverside County, situated between Temecula and Winchester. Known for its newer master-planned developments, French Valley has become a popular destination for families seeking modern homes with excellent schools and convenient access to I-15 and I-215.\n\nBecause most French Valley homes are relatively new (built from the 2000s onward), the electrical needs tend toward upgrades and additions rather than major repairs. Homeowners commonly request EV charger installations, home office circuits, smart home wiring, and enhanced outdoor lighting. The community's newer infrastructure also means most homes are well-suited for these modern electrical additions.\n\nWestek Electric Corp. regularly works in French Valley's communities and understands the typical electrical layouts and panel configurations found in these homes. We can efficiently plan and execute upgrades that work with your existing system.",
    nearbyAreas: ['temecula', 'winchester', 'murrieta', 'menifee'],
    highlights: [
      'Modern home electrical upgrade specialists',
      'Smart home and EV charger installation experts',
      'Familiar with newer community electrical layouts',
    ],
    commonElectricalNeeds: [
      'EV charger installation for modern homes',
      'Smart home wiring and automation systems',
      'Home office dedicated circuits',
      'Enhanced outdoor and landscape lighting',
      'Ceiling fan installation and replacement',
      'Home theater and media room wiring',
    ],
    faqs: [
      {
        question: 'Can my French Valley home handle an EV charger?',
        answer:
          'Most French Valley homes built after 2005 have 200-amp panels that can accommodate a Level 2 EV charger. We perform a free load calculation to confirm your panel has sufficient capacity and install the charger with a dedicated 50-amp circuit.',
      },
      {
        question: 'Do you install smart home systems in French Valley?',
        answer:
          'Yes, we install smart switches, smart outlets, whole-home lighting control systems, and the wiring infrastructure needed for smart home automation. French Valley homes are typically well-suited for these upgrades due to their modern electrical systems.',
      },
      {
        question: 'What does a home office electrical setup cost?',
        answer:
          'A dedicated home office circuit typically costs $300-$600, including a new 20-amp circuit from your panel. If you need multiple circuits, additional outlets, or USB outlets, the cost may be higher. We provide free estimates for all projects.',
      },
      {
        question: 'Do French Valley homes need panel upgrades?',
        answer:
          "Most French Valley homes already have 200-amp panels, which is adequate for most needs. However, if you're adding multiple high-draw items (EV charger, pool equipment, workshop tools), you may need a sub-panel or load management solution. We can evaluate your specific situation.",
      },
    ],
  },

  fallbrook: {
    slug: 'fallbrook',
    name: 'Fallbrook',
    county: 'San Diego County',
    coordinates: { lat: 33.3764, lng: -117.2511 },
    zipCodes: ['92028'],
    metaTitle: 'Electrician in Fallbrook, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Fallbrook, CA. Agricultural, residential & commercial electrical services for the Friendly Village. Free estimates. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Fallbrook, CA',
    heroDescription:
      'Westek Electric Corp. extends our expert electrical services to Fallbrook. From avocado groves to custom estates, we handle the diverse electrical needs of this unique community.',
    introduction:
      "Fallbrook, known as the \"Friendly Village,\" is an unincorporated community in northern San Diego County famous for its avocado groves, nurseries, and rural charm. With a population of around 32,000, Fallbrook features a distinctive mix of agricultural properties, custom hillside estates, charming village-area homes, and newer residential developments.\n\nThe agricultural character of Fallbrook means many properties have specialized electrical needs including irrigation pump circuits, greenhouse lighting, cold storage power, and equipment buildings. At the same time, the area's custom estates often feature sophisticated electrical systems with landscape lighting, pool and spa equipment, home automation, and backup generators.\n\nWhile Fallbrook is in San Diego County, it's geographically close to our Riverside County service area. Westek Electric Corp. is licensed to work in both counties and regularly serves Fallbrook customers. We understand the unique permitting requirements through San Diego County and can handle the process from start to finish.",
    nearbyAreas: ['temecula', 'murrieta', 'winchester', 'french-valley'],
    highlights: [
      'Licensed for both Riverside and San Diego County',
      'Agricultural and grove property electrical experts',
      'Custom estate electrical specialists',
    ],
    commonElectricalNeeds: [
      'Agricultural and irrigation pump electrical',
      'Custom estate lighting design and installation',
      'Greenhouse and nursery electrical systems',
      'Panel upgrades for older Fallbrook homes',
      'Backup generator installation for rural properties',
      'Pool, spa, and outdoor kitchen wiring',
    ],
    faqs: [
      {
        question: 'Are you licensed to work in Fallbrook (San Diego County)?',
        answer:
          'Yes, our California C-10 electrical license (#1100272) allows us to work throughout the state, including San Diego County. We regularly work in Fallbrook and are familiar with San Diego County permitting requirements.',
      },
      {
        question: 'Can you handle agricultural electrical work in Fallbrook?',
        answer:
          'Yes, we install and maintain electrical systems for agricultural operations including irrigation pumps, well pumps, greenhouse environmental controls, cold storage facilities, and equipment buildings. We understand the unique power demands of Fallbrook agricultural properties.',
      },
      {
        question: 'Do you install backup generators in Fallbrook?',
        answer:
          "Fallbrook's rural location makes backup power especially valuable during outages and PSPS events. We install whole-home generators with automatic transfer switches so your power switches over seamlessly during an outage.",
      },
      {
        question: 'How far is Fallbrook from your office?',
        answer:
          'Fallbrook is approximately 30-35 minutes from our Lake Elsinore office. We serve Fallbrook regularly and schedule dedicated service days for the area. Emergency service is available 24/7.',
      },
    ],
  },

  hemet: {
    slug: 'hemet',
    name: 'Hemet',
    county: 'Riverside County',
    coordinates: { lat: 33.7476, lng: -116.9719 },
    zipCodes: ['92543', '92544', '92545', '92546'],
    metaTitle: 'Electrician in Hemet, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Hemet, CA. Rewiring, panel upgrades, and electrical repairs for older homes. Trusted electrical contractor. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Hemet, CA',
    heroDescription:
      'Westek Electric Corp. provides reliable electrical services throughout Hemet. Specializing in older home upgrades and modern electrical solutions for this established San Jacinto Valley community.',
    introduction:
      "Hemet is one of the San Jacinto Valley's most established communities, with a rich history dating back to the late 1800s. With a population over 90,000, Hemet features a wide range of housing from historic downtown properties and mid-century homes to retirement communities and newer developments on the city's outskirts.\n\nThe age and variety of Hemet's housing stock creates significant demand for electrical upgrades. Many homes built before 1980 have outdated panels (60-100 amps), aluminum wiring, or lack the modern safety features required by current codes. These older systems can be safety hazards and often can't support today's electrical demands.\n\nWestek Electric Corp. has extensive experience working with Hemet's older homes. We specialize in the careful upgrades these properties need — from panel replacements and aluminum wiring remediation to full rewires that bring homes up to modern safety standards while respecting the character of older construction.",
    nearbyAreas: ['san-jacinto', 'menifee', 'winchester', 'french-valley'],
    highlights: [
      'Older home rewiring and upgrade specialists',
      'Aluminum wiring remediation experts',
      'Retirement community electrical services',
    ],
    commonElectricalNeeds: [
      'Whole-house rewiring for homes built before 1980',
      'Aluminum wiring inspection and remediation',
      'Panel upgrades from 60/100A to 200A',
      'GFCI and AFCI protection retrofits',
      'Smoke and carbon monoxide detector installation',
      'Ceiling fan and light fixture replacement',
    ],
    faqs: [
      {
        question: 'Is aluminum wiring dangerous in Hemet homes?',
        answer:
          'Aluminum wiring, common in 1960s-1970s Hemet homes, can be a fire hazard due to oxidation and loose connections at outlets and switches. We offer aluminum wiring inspections and remediation using approved methods like COPALUM connectors or copper pigtailing to make your home safer.',
      },
      {
        question: 'How much does rewiring a Hemet home cost?',
        answer:
          'Whole-house rewiring in Hemet typically ranges from $8,000-$15,000 depending on home size, accessibility, and the extent of work needed. We provide detailed, written estimates after an on-site inspection so you know exactly what to expect.',
      },
      {
        question: 'Do you serve Hemet retirement communities?',
        answer:
          'Yes, we regularly work in Hemet retirement communities including Four Seasons, Seven Hills, and others. We understand the specific needs of these communities, from mobility-accessible outlet placement to medical equipment circuits.',
      },
      {
        question: 'Should I upgrade my Hemet home panel before selling?',
        answer:
          'A panel upgrade can significantly improve your home\'s value and make it more attractive to buyers. Many Hemet homes still have outdated Federal Pacific or Zinsco panels, which home inspectors routinely flag. Upgrading to a modern 200-amp panel is a smart investment before listing.',
      },
    ],
  },

  'san-jacinto': {
    slug: 'san-jacinto',
    name: 'San Jacinto',
    county: 'Riverside County',
    coordinates: { lat: 33.7839, lng: -116.9586 },
    zipCodes: ['92582', '92583'],
    metaTitle: 'Electrician in San Jacinto, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving San Jacinto, CA. Home rewiring, panel upgrades, and new construction electrical. Affordable and reliable. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in San Jacinto, CA',
    heroDescription:
      'Westek Electric Corp. delivers quality electrical services throughout San Jacinto. From historic downtown properties to new developments, we provide reliable and affordable electrical solutions.',
    introduction:
      "San Jacinto, nestled at the base of the San Jacinto Mountains, is a growing city with a historic downtown and expanding residential areas. With a population around 55,000, the city has experienced steady growth while maintaining its small-town character and agricultural roots.\n\nSan Jacinto's housing ranges from turn-of-the-century downtown homes to modern developments east of the city. The older housing stock often requires significant electrical upgrades including panel replacements, rewiring, and the addition of modern safety devices. Newer developments typically need upgrades like EV chargers, additional circuits, and enhanced outdoor lighting.\n\nWestek Electric Corp. serves San Jacinto with the same commitment to quality and fair pricing that has built our reputation throughout the region. We work efficiently to keep costs reasonable while never compromising on safety or code compliance.",
    nearbyAreas: ['hemet', 'menifee', 'winchester', 'french-valley'],
    highlights: [
      'Affordable electrical services for growing families',
      'Historic home electrical specialists',
      'New development electrical services',
    ],
    commonElectricalNeeds: [
      'Panel upgrades for older San Jacinto homes',
      'Whole-house rewiring for pre-1980 construction',
      'EV charger installation',
      'Code correction and safety upgrades',
      'New construction electrical wiring',
      'Outdoor lighting and security systems',
    ],
    faqs: [
      {
        question: 'Do you offer affordable electrical service in San Jacinto?',
        answer:
          'Yes, we provide competitive pricing for all our services. We offer free estimates so you can compare, and we provide financing options for larger projects like panel upgrades and rewiring. We never charge hidden fees.',
      },
      {
        question: 'Can you work on historic San Jacinto homes?',
        answer:
          'Absolutely. We have experience working with older construction methods and can upgrade electrical systems while being mindful of the home\'s character. We work carefully to minimize disruption to walls, trim, and original features.',
      },
      {
        question: 'How long does it take to rewire a San Jacinto home?',
        answer:
          'A typical whole-house rewire takes 3-5 days for an average-sized home, depending on accessibility and the scope of work. We schedule efficiently to minimize the time your home is disrupted.',
      },
      {
        question: 'Do I need a permit for a panel upgrade in San Jacinto?',
        answer:
          'Yes, panel upgrades in San Jacinto require a permit from the City of San Jacinto Building Department. We handle all permitting, coordination with SCE, and inspections so you don\'t have to worry about the paperwork.',
      },
    ],
  },

  corona: {
    slug: 'corona',
    name: 'Corona',
    county: 'Riverside County',
    coordinates: { lat: 33.8753, lng: -117.5664 },
    zipCodes: ['92879', '92880', '92881', '92882', '92883'],
    metaTitle: 'Electrician in Corona, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Corona, CA. Residential and commercial electrical services for the Circle City. Panel upgrades, EV chargers, and more. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Corona, CA',
    heroDescription:
      'Westek Electric Corp. serves Corona with comprehensive residential and commercial electrical services. From established neighborhoods to thriving business districts, we deliver expert electrical work.',
    introduction:
      "Corona, known as the \"Circle City\" for its unique circular Grand Boulevard, is a major Riverside County city with over 157,000 residents. The city's diverse neighborhoods range from historic homes near the downtown circle to expansive newer developments in South Corona, Eagle Glen, and the Dos Lagos area.\n\nCorona's large commercial and industrial sector also drives significant demand for commercial electrical services. From retail centers along the 91 corridor to office parks and light industrial facilities, Corona businesses need reliable electrical contractors who can minimize downtime and keep operations running.\n\nWestek Electric Corp. serves both residential and commercial customers throughout Corona. Whether you need a panel upgrade in an older home near the circle, EV charger installation in South Corona, or commercial electrical work for your Corona business, our licensed team delivers quality results on time and on budget.",
    nearbyAreas: ['riverside', 'lake-elsinore', 'wildomar', 'menifee'],
    highlights: [
      'Serving 157,000+ residents in the Circle City',
      'Commercial and industrial electrical capabilities',
      'Diverse neighborhood experience from historic to modern',
    ],
    commonElectricalNeeds: [
      'Commercial electrical service and repairs',
      'Panel upgrades for older Circle City homes',
      'EV charger installation for commuters',
      'Office and retail electrical buildouts',
      'Industrial three-phase electrical work',
      'Outdoor lighting for commercial properties',
    ],
    faqs: [
      {
        question: 'Do you provide commercial electrical services in Corona?',
        answer:
          'Yes, we offer comprehensive commercial electrical services throughout Corona, including tenant improvements, lighting retrofits, electrical panel upgrades, data wiring, and emergency electrical repairs for businesses of all sizes.',
      },
      {
        question: 'Can you install EV chargers at Corona businesses?',
        answer:
          'Absolutely. We install Level 2 and Level 3 commercial EV charging stations for Corona businesses, retail centers, and multi-family properties. We handle site assessment, electrical capacity planning, installation, and permitting.',
      },
      {
        question: 'How far is Corona from your office?',
        answer:
          'Corona is approximately 25-30 minutes from our Lake Elsinore headquarters via the 15 Freeway. We serve Corona regularly and maintain a strong presence in the community. Emergency service is available 24/7.',
      },
      {
        question: 'Do you work in South Corona developments?',
        answer:
          'Yes, we serve all Corona neighborhoods including South Corona, Eagle Glen, Sierra Del Oro, Dos Lagos, and the historic circle area. Each neighborhood has different electrical characteristics and we are experienced with all of them.',
      },
    ],
  },

  riverside: {
    slug: 'riverside',
    name: 'Riverside',
    county: 'Riverside County',
    coordinates: { lat: 33.9533, lng: -117.3962 },
    zipCodes: ['92501', '92503', '92504', '92505', '92506', '92507', '92508'],
    metaTitle: 'Electrician in Riverside, CA | Licensed Electrical Contractor',
    metaDescription:
      'Licensed electrician serving Riverside, CA. From historic Mission Inn district to modern developments. Residential & commercial electrical services. Call (909) 996-6678.',
    heroHeadline: 'Your Trusted Electricians in Riverside, CA',
    heroDescription:
      'Westek Electric Corp. provides professional electrical services throughout Riverside. From the historic downtown core to expanding suburban neighborhoods, we serve the county seat with expert electrical work.',
    introduction:
      "Riverside, the county seat of Riverside County and home to over 314,000 residents, is the largest city in our service area. With a rich history dating back to the citrus industry era, Riverside features an incredible range of architecture and housing from Victorian-era homes in the Wood Streets neighborhood to modern developments in Orangecrest and Mission Grove.\n\nThe city's historic districts — including the Wood Streets, Mile Square, and areas surrounding the famous Mission Inn — present unique electrical challenges. These homes often have original knob-and-tube wiring, outdated fuse boxes, and electrical systems that predate modern building codes. Upgrading these systems requires expertise and care to preserve the historic character while ensuring modern safety.\n\nRiverside's thriving commercial sector, anchored by downtown revitalization, the university district near UC Riverside, and major employers throughout the city, also creates steady demand for commercial electrical services. Westek Electric Corp. is proud to serve this diverse and dynamic city.",
    nearbyAreas: ['corona', 'menifee', 'lake-elsinore', 'hemet'],
    highlights: [
      'Largest city in our service area — 314,000+ residents',
      'Historic district electrical restoration experience',
      'University district and commercial electrical services',
    ],
    commonElectricalNeeds: [
      'Historic home electrical restoration and rewiring',
      'Knob-and-tube wiring replacement',
      'Commercial electrical services for downtown businesses',
      'Panel upgrades for mid-century homes',
      'EV charger installation for university district rentals',
      'Code compliance for older commercial buildings',
    ],
    faqs: [
      {
        question: 'Can you work on historic Riverside homes?',
        answer:
          "Yes, we have experience with Riverside's historic homes including properties in the Wood Streets, Mile Square, and other designated historic areas. We upgrade electrical systems to modern safety standards while minimizing impact on original architectural features and working within historic preservation guidelines.",
      },
      {
        question: 'Do you replace knob-and-tube wiring?',
        answer:
          'Yes, knob-and-tube wiring replacement is one of our specialties. Common in pre-1940s Riverside homes, this outdated wiring is a safety concern and is typically not insurable. We replace it with modern Romex wiring while carefully preserving your walls and finishes.',
      },
      {
        question: 'Do you serve the UC Riverside area?',
        answer:
          'Yes, we serve the UC Riverside area including the university district, University Village, and Canyon Crest. We work with both homeowners and property managers who need reliable electrical service for rental and investment properties.',
      },
      {
        question: 'How do you handle electrical work in Riverside commercial buildings?',
        answer:
          "We provide comprehensive commercial electrical services throughout Riverside including tenant improvements, lighting upgrades, emergency repairs, code corrections, and new installations. We schedule work to minimize disruption to your business operations.",
      },
    ],
  },
}

export function getServiceAreaBySlug(slug: string): ServiceAreaData | undefined {
  return SERVICE_AREA_DATA[slug]
}

export function getAllServiceAreaSlugs(): string[] {
  return Object.keys(SERVICE_AREA_DATA)
}

export function getAllServiceAreas(): ServiceAreaData[] {
  return Object.values(SERVICE_AREA_DATA)
}

export function getNearbyCities(slug: string): ServiceAreaData[] {
  const area = SERVICE_AREA_DATA[slug]
  if (!area) return []
  return area.nearbyAreas
    .map((s) => SERVICE_AREA_DATA[s])
    .filter(Boolean) as ServiceAreaData[]
}
