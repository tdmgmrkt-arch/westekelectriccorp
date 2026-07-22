import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS_PREVIEW, BUSINESS_INFO } from '@/lib/constants'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'

export async function generateStaticParams() {
  return BLOG_POSTS_PREVIEW.map((post) => ({ slug: post.slug }))
}

// This would normally come from a CMS or MDX files
const blogPostContent = {
  'ac-breaker-tripping-summer-riverside-county': {
    title: 'Why Your Riverside County AC Keeps Tripping the Breaker This Summer',
    excerpt: 'A tripped AC breaker on a 105°F day is your electrical system telling you something is wrong. Here is what causes it in Temecula, Murrieta, and Menifee homes — and how to fix it safely.',
    date: '2026-07-15',
    category: 'Electrical Safety',
    readTime: '7 min read',
    content: `
      <p>When your air conditioner shuts off in the middle of an afternoon in Temecula, Murrieta, or Menifee — and you find the breaker in your panel flipped to the off position — do not just reset it and walk away. A tripping AC breaker is one of the clearest warnings your electrical system can give you, and ignoring it during a Riverside County heat wave is how small problems become expensive ones.</p>

      <h2>What a Tripped Breaker Actually Means</h2>
      <p>Breakers are safety devices. They trip when a circuit draws more current than it is rated for, when there is a short circuit, or when a ground fault is detected. If your AC keeps tripping the same 40- or 50-amp double-pole breaker, one of those three conditions is happening on the AC circuit — and it will keep happening until the underlying cause is corrected.</p>

      <h2>Cause 1: The Compressor Is Failing</h2>
      <p>An aging condenser compressor draws more amperage as it wears out. The classic pattern is a breaker that trips within a few minutes of the AC kicking on — especially in the hottest part of the afternoon when the system is working hardest. If your HVAC tech has already checked refrigerant levels and the compressor's locked rotor amps are climbing, the compressor is on borrowed time.</p>

      <h2>Cause 2: The Breaker Itself Is Weak</h2>
      <p>Breakers wear out. In an inland Southern California home built in the 1990s or earlier, the original breakers have gone through 30-plus summers of expansion and contraction. Weak breakers trip at loads well below their rated amperage. If a licensed electrician confirms the AC is drawing normal amps but the breaker still trips, a straightforward <a href="/services/residential/breaker-replacement">breaker replacement</a> usually solves it.</p>

      <h2>Cause 3: Loose Connections in the Panel</h2>
      <p>This one is dangerous. Loose lugs at the breaker or at the panel bus create heat, which damages the breaker and the bus bar over time. Warm or discolored breakers, a burning smell at the panel, or breakers that trip when you jiggle the panel cover are all signs of a loose connection. Do not open the panel yourself — call a licensed electrician. In severe cases, panel damage requires a full <a href="/services/commercial/panel-installation">panel replacement</a> rather than a simple breaker swap.</p>

      <h2>Cause 4: The Circuit Was Undersized From Day One</h2>
      <p>Southern California housing tracts built in the 1980s and early 1990s were commonly wired for smaller, less efficient AC units than what homeowners have today. If a previous owner replaced a 2.5-ton AC with a 4-ton unit without upgrading the circuit, you are running a bigger compressor on a wire that was not designed for it. The right fix is a dedicated, correctly-sized <a href="/services/residential/dedicated-circuits">dedicated circuit</a> installed to current code.</p>

      <h2>Cause 5: The Panel Is Overloaded</h2>
      <p>If your AC breaker only trips when the pool pump, dryer, and oven are all running at the same time, your panel does not have enough capacity for your household demand. This is extremely common in older <a href="/service-areas/temecula">Temecula</a> homes that started life with 100-amp service and have since added an AC, EV charger, and pool. A 200-amp panel upgrade solves it permanently. The <a href="https://www.energy.gov/energysaver/central-air-conditioning" target="_blank" rel="noopener nofollow">U.S. Department of Energy</a> notes that central AC accounts for roughly 12% of a typical home's electricity use — but on a 105°F day in Riverside County, it can spike well above that.</p>

      <h2>What You Should Do Right Now</h2>
      <ul>
        <li><strong>Do not repeatedly reset the breaker.</strong> Each reset under fault conditions damages the breaker further and can arc inside the panel.</li>
        <li><strong>Turn the AC off at the thermostat first,</strong> then reset the breaker once. If it trips again immediately, leave it off.</li>
        <li><strong>Check the outdoor disconnect and the AC condenser</strong> for scorch marks, melted plastic, or a burning smell.</li>
        <li><strong>Call a licensed electrician</strong> — not just an HVAC tech — if the breaker itself is warm to the touch or shows any discoloration.</li>
      </ul>

      <h2>Get It Diagnosed Before the Next Heat Wave</h2>
      <p>Westek Electric Corp. has been diagnosing AC circuit problems in Riverside County since 2010. We test amperage under load, inspect your panel for heat damage, and give you an honest answer about whether you need a breaker, a circuit upgrade, or a full panel replacement. Call (909) 996-6678 to schedule a diagnostic before the next Santa Ana pushes temperatures back into the triple digits.</p>
    `,
  },
  'pool-spa-electrical-safety-checklist-temecula': {
    title: 'Pool & Spa Electrical Safety Checklist Before Summer in Temecula',
    excerpt: 'Bonding, GFCI protection, and updated lighting are non-negotiable for pool safety. Use this checklist to make sure your Temecula backyard passes code before pool season.',
    date: '2026-06-18',
    category: 'Pool & Spa',
    readTime: '6 min read',
    content: `
      <p>A backyard pool is one of the best parts of living in <a href="/service-areas/temecula">Temecula</a>. It is also one of the most electrically demanding parts of your home — with wet surfaces, submerged fixtures, and dedicated pumps and heaters all running near people in the water. Before you open the pool for the season, walk through this safety checklist.</p>

      <h2>1. GFCI Protection on Every Pool Circuit</h2>
      <p>Under the current California Electrical Code, every 120-volt circuit within 20 feet of a pool or spa must be GFCI-protected. That includes pump motors, lighting, outlets, and any receptacles you use for pool cleaners or pond features. If your pool was built before the mid-2000s and no one has upgraded the equipment pad, there is a real chance you do not have full GFCI coverage. According to the <a href="https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Pool-Safely" target="_blank" rel="noopener nofollow">U.S. Consumer Product Safety Commission</a>, faulty electrical wiring causes dozens of pool-related shock injuries in the U.S. every year — most of them preventable with proper GFCI protection.</p>

      <h2>2. Equipotential Bonding Grid</h2>
      <p>Bonding is the safety measure most homeowners have never heard of and cannot afford to skip. A bonding grid ties all metallic components of the pool — the shell, ladder anchors, light niches, pump motor, heater, and any metal within 5 feet — together with a #8 solid copper conductor. This ensures that if a fault occurs, everything stays at the same electrical potential and no dangerous voltage gradient forms across the pool. Bonding failures cause "stray voltage" incidents where swimmers feel tingling or shocks in the water.</p>

      <h2>3. Underwater Lighting: Low Voltage or Nothing</h2>
      <p>Older pools often have 120-volt underwater lights. Modern code and best practice call for low-voltage (12V) LED pool lights protected by a transformer at the equipment pad. If you have not upgraded your <a href="/services/residential/pool-spa-lighting">pool and spa lighting</a> in the last 10 years, it is time. LED pool lights use a fraction of the energy, last 15-plus years, and dramatically reduce shock risk. This is one of the highest-impact safety upgrades a pool owner can make.</p>

      <h2>4. The Panel and Subpanel</h2>
      <p>Most pool equipment is fed from a subpanel at the equipment pad. Open the subpanel cover (or have your electrician open it) and look for corrosion on the bus bars, rust on the breakers, or moisture inside the enclosure. Coastal salt air and pool chemistry are hard on outdoor enclosures. Rusty breakers do not trip reliably — and unreliable breakers are the last thing you want on a wet circuit.</p>

      <h2>5. Timer Clocks and Automation</h2>
      <p>The old mechanical Intermatic timer on your pool pump was fine for decades — but a modern automation controller with a variable-speed pump saves hundreds of dollars per year in electricity. If you are already opening the equipment pad for other repairs, this is the right time to add automation and a properly wired <a href="/services/residential/dedicated-circuits">dedicated circuit</a> for the pool controller.</p>

      <h2>6. Spa and Hot Tub Wiring</h2>
      <p>Portable spas are usually 240V, 50A, and require their own GFCI-protected disconnect within sight of the tub but at least 5 feet away. If you are replacing an old spa or adding a new one, the wiring almost always needs to be redone to meet current code. We handle full <a href="/services/residential/hot-tub-spa-pool-jacuzzi">hot tub, spa, and jacuzzi</a> installations regularly.</p>

      <h2>7. Outdoor Receptacles</h2>
      <p>Every receptacle within 20 feet of a pool must be GFCI-protected and rated for wet locations, with an in-use bubble cover. Kids' phone chargers, pool speakers, and holiday lights all get plugged into these outlets — they need to be safe.</p>

      <h2>Book a Pool Electrical Inspection</h2>
      <p>Westek Electric Corp. offers pool electrical safety inspections throughout Temecula, Murrieta, Menifee, and Lake Elsinore. We test GFCI protection, verify bonding, check subpanel condition, and give you a clear report of anything that needs attention. Call (909) 996-6678 before Memorial Day weekend to get on the schedule.</p>
    `,
  },
  'pairing-solar-with-ev-charger-murrieta': {
    title: 'Pairing Solar Panels with an EV Charger in Murrieta: What Homeowners Should Know',
    excerpt: 'Charging your EV on solar sounds simple until you meet NEM 3.0. Here is how Murrieta homeowners can size a solar-plus-EV-charger system that actually saves money.',
    date: '2026-05-14',
    category: 'EV Chargers',
    readTime: '8 min read',
    content: `
      <p>If you drive an EV in <a href="/service-areas/murrieta">Murrieta</a> and pay a Southern California Edison electric bill, you have probably done the math on adding solar. The idea is simple: generate electricity during the day, charge the car at night, drive on sunshine. In practice, California's new solar rules — Net Energy Metering 3.0, in effect since April 2023 — have changed the math significantly. Here is what you actually need to know before you sign a solar contract.</p>

      <h2>NEM 3.0 in Plain English</h2>
      <p>Under the old NEM 2.0 rules, solar homeowners were credited at the full retail electric rate for every kilowatt-hour they sent back to the grid. Under NEM 3.0, that export credit dropped by roughly 75%. You still save money by using the solar you generate directly — but you barely get paid for what you export. According to the <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" target="_blank" rel="noopener nofollow">California Public Utilities Commission</a>, the new tariff is designed to encourage battery storage and time-shifted self-consumption rather than export.</p>
      <p>Translation for EV owners: the more of your solar you use at home, the better your payback. Charging your car during daylight hours from solar you would otherwise export is now one of the most economical things you can do with a solar system.</p>

      <h2>The Case for Daytime Charging</h2>
      <p>If your work schedule lets you charge your EV during the day — a hybrid remote schedule, a work-from-home job, a second car that stays home — you can consume most of your solar production directly. A properly sized Level 2 charger with scheduling can automatically start charging when solar production peaks, typically 10 AM to 3 PM.</p>
      <p>If you can only charge at night, you have two choices: pay for the electricity at nighttime TOU rates, or add a home battery. Batteries add cost but dramatically improve the economics of a NEM 3.0 solar system.</p>

      <h2>Sizing the Electrical Infrastructure</h2>
      <p>Before you add solar and an EV charger, your electrical panel needs to be evaluated. A typical Level 2 EV charger uses a 40-50 amp circuit. Solar adds another current source that has to be accommodated under the 120% rule. A home battery adds another. Many Murrieta homes built in the 1990s and early 2000s have 200-amp service and can handle all three — but not always. A load calculation is the first honest step, not the last one.</p>
      <p>If your panel is on the smaller side or is already crowded, you may need a panel upgrade before any of this work happens. We handle these upgrades regularly, along with the <a href="/services/residential/dedicated-circuits">dedicated circuits</a> that solar, batteries, and EV chargers require.</p>

      <h2>Choosing the Right EV Charger</h2>
      <p>Not every EV charger plays well with solar. If you want the charger to modulate based on solar production, you need a "smart" charger that supports load management protocols or integrates with your solar inverter and battery. Popular options include chargers from Wallbox, Enphase, Emporia, and Tesla — but the right choice depends on which inverter and battery you install. Our <a href="/ev-chargers">EV charger installation page</a> covers the models we install most often in the Temecula Valley.</p>

      <h2>Permits, Interconnection, and Timeline</h2>
      <p>Solar installation in Murrieta requires a City of Murrieta building permit and SCE interconnection approval before you can turn the system on. Add an EV charger to the same project and you can usually roll both into one permit, saving fees and inspection trips. From contract to permission-to-operate typically takes 6-10 weeks — plan accordingly.</p>

      <h2>Federal and State Incentives</h2>
      <p>The federal residential clean energy credit still covers 30% of solar and battery system costs through 2032, and 30% of qualifying EV charger installation costs. California's Self-Generation Incentive Program (SGIP) offers rebates for home batteries, with larger rebates for households in high-fire-risk or medically vulnerable categories. Stacking these correctly is where a lot of the savings comes from.</p>

      <h2>Get an Honest Assessment</h2>
      <p>Westek Electric Corp. installs EV chargers and handles the electrical infrastructure for solar and battery installations across Murrieta, Temecula, and the surrounding areas. We do not sell solar panels — which means when we tell you your electrical system can or cannot handle a proposed system, you are getting a straight answer. Call (909) 996-6678 to schedule a load calculation and site evaluation.</p>
    `,
  },
  'wildfire-season-electrical-prep-southern-california': {
    title: 'Wildfire Season Electrical Prep for Southern California Homes',
    excerpt: 'Riverside County wildfire risk peaks late summer. These are the electrical upgrades — from surge protection to generator interlocks — that protect your home before red flag warnings hit.',
    date: '2026-04-16',
    category: 'Electrical Safety',
    readTime: '7 min read',
    content: `
      <p>Southern California wildfire season is longer and more intense than it used to be. Between the Santa Ana winds, dry vegetation, and utility PSPS (Public Safety Power Shutoff) events, homeowners in Riverside County face a combination of fire risk and power interruption risk that most other parts of the country do not. The electrical side of wildfire prep is straightforward — and worth doing before the first red flag warning of the season.</p>

      <h2>1. Whole-House Surge Protection</h2>
      <p>Grid instability during wildfire events causes voltage spikes when power is restored, when equipment is damaged, or when nearby lines fail. A single surge can destroy every sensitive electronic device in your home — computers, TVs, appliances with control boards, HVAC systems, EV chargers, and pool equipment. A properly installed Type 2 whole-house surge protector at your main panel absorbs those spikes before they reach your devices. It is one of the highest-value electrical upgrades you can make for under $1,000 installed.</p>

      <h2>2. Generator Readiness</h2>
      <p>You do not need a full standby generator to survive a PSPS. A portable generator connected through a manual transfer switch or interlock kit lets you power essential circuits — refrigerator, well pump, garage door, medical equipment, and a couple of outlets — during an outage. The interlock is the safety-critical part: it physically prevents you from back-feeding the grid, which can kill line workers and destroy the generator when power returns. This is not a DIY project.</p>
      <p>If you want a fully automatic solution, a whole-house standby generator kicks on within seconds of an outage. Both approaches require careful <a href="/services/commercial/panel-installation">panel work</a> and code-compliant installation.</p>

      <h2>3. Ember-Resistant Electrical Penetrations</h2>
      <p>Wildfire ember intrusion through soffits, vents, and electrical penetrations is one of the top causes of home ignition. Any point where wires enter your house from outside — meter base, service entrance, exterior outlets, HVAC disconnects — is a potential ember entry. Sealing these penetrations with fire-resistant caulk and metal flashing during any electrical service work is cheap insurance. <a href="https://www.readyforwildfire.org/prepare-for-wildfire/hardening-your-home/" target="_blank" rel="noopener nofollow">Cal Fire's Ready for Wildfire program</a> has detailed guidance on home hardening including exterior electrical hardening.</p>

      <h2>4. Solar and Battery Islanding</h2>
      <p>If you have solar without a battery, your solar system shuts down during a grid outage — even in bright sunshine. This is a code-required anti-islanding feature that prevents your inverter from energizing downed lines. A hybrid inverter and battery system can "island" your home, keeping solar and stored power flowing to your loads during a PSPS. This is a significant investment but for households with medical dependency or remote-work income at risk, it pays back quickly in avoided outages.</p>

      <h2>5. Panel and Circuit Condition</h2>
      <p>Do not enter fire season with a marginal electrical panel. Bring any warm breakers, corroded lugs, or double-tapped breakers up to spec now. Overheated connections start fires under normal loads — under the added stress of a hot summer, they are worse. Older panels with known safety issues (Federal Pacific Stab-Lok, Zinsco, Challenger) should be replaced regardless of season. If your home has known aluminum branch wiring or knob-and-tube, prioritize <a href="/services/residential/code-corrections">code corrections</a> before wildfire season.</p>

      <h2>6. Fire Pump and Sprinkler Circuits</h2>
      <p>If your property has a fire pump, defensible-space sprinkler system, or wildland fire suppression setup, those circuits need to be reliable — and ideally powered from the emergency side of a generator transfer switch. Test them before the season. A pump that has not run since last year is a pump that may not run when you need it.</p>

      <h2>7. Communications and Alarm Systems</h2>
      <p>Your fire alarm, security system, and cellular communications equipment all need battery backup that lasts longer than a typical PSPS. Standard smoke alarms with 9V batteries are inadequate. Hardwired interconnected alarms with lithium backup, plus a UPS on your cellular gateway, keep you connected during outages. This is often overlooked in wildfire prep.</p>

      <h2>Book an Evaluation Before Fire Season</h2>
      <p>Westek Electric Corp. offers pre-fire-season electrical evaluations for homes throughout Lake Elsinore, Temecula, Murrieta, and the wildland-urban interface areas of Riverside County. We will identify surge, generator, and panel-condition issues before they become emergencies. <a href="/contact">Contact us</a> or call (909) 996-6678 to schedule an evaluation.</p>
    `,
  },
  'kitchen-remodel-electrical-requirements-lake-elsinore': {
    title: 'Kitchen Remodel Electrical Requirements in Lake Elsinore',
    excerpt: 'California code is strict about kitchen circuits. Here are the dedicated circuits, GFCI, AFCI, and lighting requirements you need to hit before your Lake Elsinore kitchen passes final inspection.',
    date: '2026-03-12',
    category: 'Home Improvement',
    readTime: '8 min read',
    content: `
      <p>A kitchen remodel in <a href="/service-areas/lake-elsinore">Lake Elsinore</a> is one of the highest-return projects a homeowner can take on — and one of the most electrically demanding. Modern kitchens run more circuits, tighter code requirements, and more integrated lighting than any other room in the house. If you are planning a remodel, understanding the electrical scope up front will save you from expensive surprises during inspection.</p>

      <h2>Small-Appliance Branch Circuits</h2>
      <p>California code (following the National Electrical Code) requires at least two dedicated 20-amp small-appliance branch circuits serving all countertop receptacles in the kitchen, pantry, breakfast area, and dining room. Both must serve only those areas — you cannot share them with lighting, garbage disposal, or the refrigerator. Older Lake Elsinore homes built before 1990 often have a single shared 15-amp circuit serving the entire kitchen, which is why toasters trip breakers and microwaves dim the lights.</p>

      <h2>Dedicated Circuits for Every Major Appliance</h2>
      <p>Modern code requires <a href="/services/residential/dedicated-circuits">dedicated circuits</a> for the following:</p>
      <ul>
        <li><strong>Dishwasher:</strong> 15A or 20A dedicated circuit (depending on the appliance)</li>
        <li><strong>Garbage disposal:</strong> 15A or 20A dedicated circuit</li>
        <li><strong>Refrigerator:</strong> 15A or 20A dedicated circuit (this can technically share a small-appliance circuit but a dedicated one is best practice)</li>
        <li><strong>Microwave (over-range or built-in):</strong> 20A dedicated circuit</li>
        <li><strong>Electric range, cooktop, or wall oven:</strong> 40A or 50A 240V circuit — sometimes two separate circuits if the cooktop and oven are separate</li>
        <li><strong>Range hood:</strong> Usually 15A, can often share a lighting circuit unless the hood is high-CFM</li>
      </ul>
      <p>Add these up and a modern remodel typically needs 6-8 new circuits landing in the panel. That is why so many kitchen remodels also require a panel upgrade or subpanel. Handling the <a href="/services/residential/appliance-wiring">appliance wiring</a> correctly the first time avoids re-openings after the drywall goes up.</p>

      <h2>GFCI and AFCI Protection</h2>
      <p>Every receptacle serving a kitchen countertop must be GFCI-protected. The dishwasher must also be GFCI-protected under the current code. All 15- and 20-amp branch circuits in the kitchen must additionally be AFCI-protected. In practice, dual-function CAFCI/GFCI breakers in the panel handle both requirements cleanly.</p>

      <h2>Countertop Receptacle Spacing</h2>
      <p>No point along a kitchen countertop can be more than 24 inches from a receptacle. Any counter space 12 inches or wider requires at least one receptacle. Islands and peninsulas each require at least one receptacle. In a well-designed remodel, this means outlets every 3-4 feet along the counter, with at least one in each island. Placement matters — spec them with your cabinet designer, not as an afterthought.</p>

      <h2>Kitchen Lighting Layers</h2>
      <p>Good kitchen lighting is layered. A typical remodel includes:</p>
      <ul>
        <li><strong>General ambient:</strong> Recessed LED downlights on a dimmer, spaced roughly 4 feet apart</li>
        <li><strong>Task lighting:</strong> Under-cabinet LED strips illuminating counters directly</li>
        <li><strong>Accent lighting:</strong> Pendants over the island, in-cabinet lighting for glass doors, toe-kick lighting</li>
      </ul>
      <p>A whole-kitchen <a href="/services/led-lighting">LED lighting</a> package uses a fraction of the energy of older halogen or incandescent kitchens and lasts for 15-plus years. The <a href="https://www.energystar.gov/products/light_bulbs" target="_blank" rel="noopener nofollow">ENERGY STAR</a> program's data shows LED lighting uses at least 75% less energy and lasts 25 times longer than incandescent, which matters when you have 20-plus fixtures in a kitchen running several hours a day.</p>

      <h2>Permits and Inspections in Lake Elsinore</h2>
      <p>Any kitchen remodel that involves adding circuits, moving outlets, changing the panel, or altering the range circuit requires a City of Lake Elsinore electrical permit and inspection. Doing the work without a permit creates problems at resale and voids most homeowner's insurance claims tied to electrical fires. We pull all permits as part of our work and coordinate the rough and final inspections with your general contractor.</p>

      <h2>Plan the Electrical First, Not Last</h2>
      <p>The single most common kitchen remodel mistake is treating the electrical as a subcontractor task instead of part of the design. Cabinet layouts, appliance choices, and lighting decisions all cascade into circuit and panel decisions. The best remodels bring an electrician into the planning meeting before demolition. Call Westek Electric Corp. at (909) 996-6678 to schedule an early-stage kitchen electrical planning visit.</p>
    `,
  },
  'gfci-afci-california-code-requirements-2026': {
    title: 'GFCI and AFCI Outlets: California Code Requirements Every Homeowner Should Know',
    excerpt: 'The 2022 California Electrical Code expanded GFCI and AFCI protection. Here is where they are required now, why they save lives, and what it costs to bring an older Temecula home up to code.',
    date: '2026-02-19',
    category: 'Electrical Safety',
    readTime: '6 min read',
    content: `
      <p>GFCI and AFCI protection are the two most important safety technologies in modern residential wiring — and the two most misunderstood. If your Temecula-area home was built before 2020, there is a very good chance parts of it do not meet current code. Here is what these devices do, where they are required, and how to bring your home up to spec.</p>

      <h2>What GFCI Protection Does</h2>
      <p>A Ground-Fault Circuit Interrupter (GFCI) detects tiny imbalances between the current flowing out on the hot wire and returning on the neutral. If even 5 milliamps of current is going somewhere it should not — like through a person's body to ground — the GFCI trips in about 25 milliseconds. According to the <a href="https://www.esfi.org/electrical-safety/home-safety-devices/gfcis/" target="_blank" rel="noopener nofollow">Electrical Safety Foundation International</a>, GFCIs have prevented thousands of electrocutions since they were required in the 1970s.</p>

      <h2>Where GFCI Is Required in California Homes</h2>
      <p>Under the current California Electrical Code, GFCI protection is required for all 125-volt through 250-volt receptacles in:</p>
      <ul>
        <li>Bathrooms (all outlets)</li>
        <li>Kitchens (all countertop outlets and the dishwasher circuit)</li>
        <li>Garages and accessory buildings</li>
        <li>Outdoor receptacles</li>
        <li>Crawl spaces</li>
        <li>Unfinished basements</li>
        <li>Laundry rooms (including the washing machine)</li>
        <li>Boathouses and near pools/spas</li>
        <li>Within 6 feet of any sink</li>
      </ul>
      <p>The 2022 code cycle added dishwasher circuits and expanded coverage near sinks. A home built even as recently as 2018 may not meet current requirements.</p>

      <h2>What AFCI Protection Does</h2>
      <p>An Arc-Fault Circuit Interrupter (AFCI) detects the electrical signature of arcing — the kind of hidden sparking that happens in damaged wire behind walls, in loose connections, or in overheating extension cords. Arcing is one of the leading causes of residential electrical fires. AFCIs shut off the circuit before the arc can ignite surrounding materials.</p>

      <h2>Where AFCI Is Required</h2>
      <p>AFCI protection is required for all 15- and 20-amp, 120-volt branch circuits serving:</p>
      <ul>
        <li>Kitchens</li>
        <li>Family, living, dining, and recreation rooms</li>
        <li>Bedrooms</li>
        <li>Hallways, closets, and laundry areas</li>
        <li>Sunrooms</li>
      </ul>
      <p>In practice, that is essentially every finished-space branch circuit in your home. In most kitchens, the same dual-function CAFCI/GFCI breaker handles both requirements at once.</p>

      <h2>Retrofitting an Older Home</h2>
      <p>If you are living in a home built before the 2000s, adding GFCI and AFCI protection does not usually require rewiring — most of the work happens at the panel. Modern CAFCI, GFCI, and dual-function breakers snap directly into a compatible panel. Where the panel is old or does not support these breakers, the smart move is a panel upgrade paired with <a href="/services/residential/code-corrections">code corrections</a> throughout the home.</p>

      <h2>What About Homes With Aluminum Wiring?</h2>
      <p>Homes built between 1965 and 1973 sometimes have aluminum branch wiring, which has known safety issues at connection points. GFCI and AFCI protection help but do not fully solve the problem. Full or partial <a href="/services/residential/rewiring">rewiring</a> is the definitive fix — and one we handle regularly in older Riverside County homes.</p>

      <h2>Testing the Devices You Already Have</h2>
      <p>GFCI outlets have "TEST" and "RESET" buttons for a reason. Push TEST monthly — the outlet should trip, and pushing RESET should restore power. If TEST does not trip the outlet, the GFCI has failed and needs to be replaced. This simple monthly check catches quiet failures before they matter. Testing is also a quick task we handle as part of any <a href="/services/switches-outlets">switch and outlet</a> service call.</p>

      <h2>Book a Code Compliance Inspection</h2>
      <p>Westek Electric Corp. can inspect your home's GFCI and AFCI coverage and give you a clear report of what is required, what is missing, and what it costs to bring up to code. Call (909) 996-6678 to schedule.</p>
    `,
  },
  'whole-home-standby-generators-menifee-psps': {
    title: 'Whole-Home Standby Generators in Menifee: Are They Worth It for PSPS?',
    excerpt: 'Public Safety Power Shutoffs keep hitting Riverside County. Here is how a standby generator works, what it really costs installed, and whether it makes sense for your Menifee home.',
    date: '2026-01-15',
    category: 'Home Improvement',
    readTime: '7 min read',
    content: `
      <p>Public Safety Power Shutoffs are now a regular fact of life in <a href="/service-areas/menifee">Menifee</a> and across Riverside County. Southern California Edison de-energizes lines during high-wind, low-humidity conditions to reduce wildfire risk — and outages can last from a few hours to several days. If your household includes remote workers, medical equipment users, or anyone who cannot tolerate an extended outage, a whole-home standby generator is worth serious consideration.</p>

      <h2>How a Standby Generator Works</h2>
      <p>A standby generator is a permanently installed engine-driven power source, typically fueled by natural gas or propane. It sits outside your home like an AC condenser and connects to your electrical panel through an Automatic Transfer Switch (ATS). When the grid goes down, the ATS senses the loss of utility power, starts the generator, and switches your home's electrical load to the generator — usually within 15-30 seconds. When utility power returns, the ATS switches back and shuts the generator down.</p>
      <p>You do not carry gas cans, run extension cords, or plug anything in. It just works.</p>

      <h2>Sizing: Whole-Home vs. Essential-Circuits</h2>
      <p>There are two sizing philosophies:</p>
      <ul>
        <li><strong>Whole-home:</strong> Sized to run your entire house including AC, EV charging, pool equipment, and all appliances. Typically 22-26 kW for a 2,500-3,500 sq ft Menifee home.</li>
        <li><strong>Essential-circuits:</strong> A smaller generator (typically 10-14 kW) with a load-management module that runs essentials only — HVAC, refrigerator, well pump, medical equipment, some lighting, kitchen outlets — while shedding non-essential loads.</li>
      </ul>
      <p>The essential-circuits approach is 30-40% cheaper installed and covers the actual outage priorities most families care about. For most Menifee homes, it is the right answer.</p>

      <h2>Fuel Source: Natural Gas or Propane</h2>
      <p>Menifee is well-served by natural gas, and a NG-fueled generator with a properly sized meter never runs out of fuel. Propane is the fallback where NG is not available. Diesel is rare in residential applications. Confirm your gas meter and service can support the generator's fuel demand — this often requires a meter upgrade coordinated with SoCalGas.</p>

      <h2>Real Installed Costs</h2>
      <p>A typical whole-home standby generator installation in Riverside County runs $10,000-$18,000 all-in for the essential-circuit approach, and $18,000-$30,000-plus for a true whole-home system with a large generator, load management, and any required <a href="/services/commercial/panel-installation">panel work</a>. Costs include the generator itself, the transfer switch, gas line work, a concrete pad, electrical connections, permits, and startup commissioning. We offer <a href="/financing">financing options</a> that spread the cost across manageable monthly payments.</p>

      <h2>Permitting and Inspections</h2>
      <p>Standby generators require a City of Menifee (or unincorporated county) building permit, an electrical permit, and a gas permit. Setback requirements from windows, doors, and property lines are strict — most 22kW units require at least 18 inches from the house and 60 inches from any window or door opening. Site planning matters and cannot be shortcut. According to <a href="https://www.sce.com/wildfire/psps" target="_blank" rel="noopener nofollow">Southern California Edison's PSPS resource page</a>, high-fire-threat districts across their service territory continue to see multiple shutoff events per year, which is why proper permanent backup power is worth the investment for many homes.</p>

      <h2>Maintenance Reality</h2>
      <p>A standby generator is a small engine that needs regular maintenance — oil changes annually, spark plugs and filters every few years, battery replacement every 3-5 years. Skip the maintenance and it will not start when you need it. Most homeowners contract with the installer for annual service; we offer this as an add-on to any installation we do.</p>

      <h2>When It Makes Sense (and When It Does Not)</h2>
      <p>A standby generator makes clear sense if your household has: medical equipment users, work-from-home income at risk, a well pump for your water supply, valuable perishables (a chest freezer full of meat), or a family member who cannot tolerate temperature extremes. It is a harder sell for a household that experiences one 6-hour outage per year and can shrug it off.</p>

      <h2>Get a Site Evaluation</h2>
      <p>Westek Electric Corp. does whole-home standby generator installations across Menifee, Wildomar, Winchester, and the surrounding areas. We handle site planning, permitting, gas coordination, transfer switch installation, and startup. Call (909) 996-6678 for a free on-site evaluation and honest quote.</p>
    `,
  },
  'holiday-lighting-without-blown-circuits-temecula': {
    title: 'Holiday Lighting Without the Blown Circuits: A Temecula Electrician\'s Guide',
    excerpt: 'Every December we get calls from Temecula homeowners with tripped breakers and burnt-out extension cords. Here is how to plan holiday lighting that stays lit all season.',
    date: '2025-12-11',
    category: 'Lighting',
    readTime: '5 min read',
    content: `
      <p>Every December we get calls from <a href="/service-areas/temecula">Temecula</a> homeowners whose holiday display worked great on Thanksgiving weekend and started tripping breakers by Christmas Eve. Almost every one of these calls comes down to the same three issues — circuit overload, damaged extension cords, and outdated incandescent strings. Here is how to build a holiday display that stays lit all season without a service call.</p>

      <h2>Know Your Circuit Capacity</h2>
      <p>A standard 15-amp exterior receptacle circuit can handle about 1,440 watts continuously — 80% of the 1,800-watt maximum, per code. Traditional incandescent C7 or C9 bulbs pull 5-7 watts each. A single strand of 100 traditional mini-lights pulls about 40 watts, but strands connected end-to-end add up fast. Layer in inflatables (each 25-100 watts), animated projectors, and yard art motors, and you are past 1,440 watts before you know it.</p>
      <p>The fix: know which receptacles are on which breaker, spread the display across multiple circuits, and add up your wattage before you plug in.</p>

      <h2>Switch to LED — Really, All of It</h2>
      <p>A strand of 100 LED mini-lights pulls about 4-6 watts. That is roughly 90% less energy than incandescent for the same visual output. You can connect 40-plus LED strands end-to-end on the same circuit that used to support 4-5 incandescent strands. If your electric bill jumped in December and you are still running incandescent, switching to <a href="/services/led-lighting">LED lighting</a> is the single biggest change you can make.</p>

      <h2>Use Outdoor-Rated Cords and Timers</h2>
      <p>Every year we see melted extension cords running through wet grass, indoor-rated cords used outside, and undersized cords carrying big loads. Rules that will save you a service call:</p>
      <ul>
        <li><strong>Only outdoor-rated cords outside.</strong> Look for the "W" designation and a heavy jacket.</li>
        <li><strong>Match the cord gauge to the load.</strong> 16 AWG for light-duty runs under 25 feet; 14 AWG or 12 AWG for anything longer or heavier.</li>
        <li><strong>Never daisy-chain cords.</strong> One outdoor cord to one strand or one splitter — not three cords in a line.</li>
        <li><strong>Use outdoor timers with photocells,</strong> not indoor timers with cords running under the door.</li>
      </ul>

      <h2>GFCI Everything Outside</h2>
      <p>Every outdoor receptacle used for holiday lighting must be GFCI-protected. GFCIs trip if water gets into a connection — which is annoying but is the exact behavior that keeps someone from getting shocked when they touch a Christmas light connection with wet hands. If your GFCI is nuisance-tripping, the fix is drier connections (elevate splices off the ground, use weatherproof plug covers) — not disabling the GFCI. The <a href="https://www.nfpa.org/education-and-research/home-fire-safety/winter-holidays" target="_blank" rel="noopener nofollow">National Fire Protection Association's winter holiday safety guidance</a> reports that electrical failures cause a significant share of December home fires — GFCI protection and proper cord use are the biggest preventive measures.</p>

      <h2>Consider Permanent Exterior Lighting</h2>
      <p>Permanent color-changing LED eaves lighting (sometimes called "everlights") has become popular in Temecula and Murrieta over the last few years. Installed under the roofline, it functions as festive holiday lighting in December, patriotic red-white-blue for the Fourth of July, purple and orange for Halloween, or warm white as year-round <a href="/services/residential/outdoor-lighting">outdoor accent lighting</a>. You never climb a ladder, never take down lights in January, and never fight tangled strings again. It is a serious upgrade for anyone who does holiday lighting seriously.</p>

      <h2>Landscape Uplighting Adds Depth</h2>
      <p>Low-voltage <a href="/services/residential/landscape-lighting">landscape uplighting</a> aimed at palm trees, olive trees, or the front of your house makes an inflatable-free holiday display look expensive. Combined with warm white LED eaves lighting, you get a display that reads as tasteful and coordinated rather than chaotic.</p>

      <h2>Need Help Before the Season Starts?</h2>
      <p>Westek Electric Corp. installs permanent eaves lighting, adds dedicated exterior circuits for heavy displays, and handles holiday lighting installations across Temecula, Murrieta, and Menifee. Call (909) 996-6678 before Thanksgiving to lock in a slot — we book up fast every year.</p>
    `,
  },
  'commercial-electrical-upgrades-save-wildomar-businesses-money': {
    title: 'Commercial Electrical Upgrades That Save Wildomar Business Owners Money',
    excerpt: 'LED retrofits, smart panels, and demand-response programs cut commercial electric bills fast. Here are the upgrades with the shortest payback for Wildomar and Lake Elsinore businesses.',
    date: '2025-11-13',
    category: 'Commercial',
    readTime: '7 min read',
    content: `
      <p>Commercial electric rates in Southern California keep climbing, and small-to-medium businesses in <a href="/service-areas/wildomar">Wildomar</a> and Lake Elsinore feel it every month. The good news: a handful of specific electrical upgrades have short paybacks and immediate impact on your monthly bill. Here are the ones we recommend most often — ranked roughly by payback speed.</p>

      <h2>1. LED Retrofit for Interior Lighting (12-24 Month Payback)</h2>
      <p>If your warehouse, showroom, restaurant, or office still runs T8 or T12 fluorescent tubes, HID high-bays, or halogen track lighting, an LED retrofit is the single fastest-paying commercial electrical project. A typical LED retrofit cuts lighting energy use by 60-75% and slashes maintenance costs (LEDs last 50,000-100,000 hours vs. 15,000-20,000 for fluorescent). Add occupancy sensors and daylight harvesting and the savings grow further. We handle <a href="/services/commercial/indoor-lighting">commercial indoor lighting</a> retrofits across the Temecula Valley regularly.</p>

      <h2>2. Exterior and Parking Lot LED (18-30 Month Payback)</h2>
      <p>Parking lot high-pressure sodium and metal halide fixtures run all night, every night. Swapping them for LED shoebox fixtures on shorting caps cuts wattage by roughly 60% and improves light quality dramatically — which matters for security cameras and customer perception. Motion-activated dimming for parking lots after business hours takes another chunk out of the bill. Full commercial <a href="/services/commercial/outdoor-lighting">exterior lighting</a> retrofits are one of our most common jobs.</p>

      <h2>3. Power Factor Correction (Manufacturing/Industrial)</h2>
      <p>If your business runs motors, welders, HVAC compressors, or other inductive loads, your power factor may be dragging your utility bill up. Poor power factor triggers penalty charges on some SCE commercial rate schedules and increases your demand charges even when your usable power draw is the same. Adding power factor correction capacitors is often a 24-36 month payback for the right operation.</p>

      <h2>4. Demand Charge Management</h2>
      <p>Most commercial SCE bills have a "demand charge" — a fee based on your single highest 15-minute demand peak during the billing month. A single hot afternoon where every piece of equipment ran simultaneously can drive your demand charge up for the entire month. Load-scheduling controls, sequenced equipment startup, and (increasingly) battery storage can shave those peaks and drop demand charges 20-40%.</p>

      <h2>5. Time-of-Use Optimization</h2>
      <p>SCE's commercial time-of-use rates make electricity dramatically more expensive during peak hours (typically 4 PM to 9 PM). Shifting energy-intensive operations — dishwashing, HVAC pre-cooling, EV charging, laundry — outside the peak window drops your bill without any equipment upgrade at all. This is a scheduling and controls project, not an equipment project.</p>

      <h2>6. Whole-Building Automation</h2>
      <p>A modern building automation system ties HVAC, lighting, and equipment scheduling together. For a multi-tenant office or retail center in Wildomar, this can be handled through a mix of <a href="/services/commercial/low-voltage-wiring">low-voltage control wiring</a> and networked controls. Payback is longer than lighting retrofits but savings compound over time.</p>

      <h2>7. Panel and Distribution Upgrades</h2>
      <p>You cannot add EV chargers, solar, battery storage, or new equipment to a maxed-out panel. If your commercial <a href="/services/commercial/panel-installation">electrical panel</a> is fully loaded or is an older brand no longer supported, upgrading it is the enabling step for every future savings project. It rarely pays back on its own — but it unlocks everything else.</p>

      <h2>Available Rebates and Incentives</h2>
      <p>SCE offers commercial energy efficiency rebates for qualifying LED retrofits, HVAC upgrades, and controls projects. The <a href="https://www.energy.ca.gov/programs-and-topics/programs/energy-efficiency-programs" target="_blank" rel="noopener nofollow">California Energy Commission</a> maintains a directory of state efficiency programs, and utility rebate levels change year to year — checking current incentives before scoping a project can significantly change the payback math. We help clients identify and apply for the rebates their project qualifies for.</p>

      <h2>Get a No-Cost Walk-Through</h2>
      <p>Westek Electric Corp. offers free commercial electrical walk-throughs for Wildomar and Lake Elsinore businesses. We look at your lighting, panels, demand profile, and equipment condition, and hand you a ranked list of upgrades with realistic paybacks. Call (909) 996-6678 to schedule.</p>
    `,
  },
  'home-inspection-electrical-red-flags-temecula-murrieta': {
    title: 'Home Inspection Electrical Red Flags Every Temecula & Murrieta Buyer Should Know',
    excerpt: 'Aluminum branch wiring, Federal Pacific panels, double-tapped breakers — here are the electrical red flags that show up in Temecula and Murrieta home inspections, and what they cost to fix.',
    date: '2025-10-16',
    category: 'Electrical Safety',
    readTime: '8 min read',
    content: `
      <p>If you are buying a home in <a href="/service-areas/temecula">Temecula</a> or <a href="/service-areas/murrieta">Murrieta</a>, your inspection report will almost certainly flag some electrical issues. Some are minor. Others are worth walking away from — or worth using to renegotiate the price. Here are the biggest electrical red flags we see when we do inspection follow-ups, and what each one really means for the deal.</p>

      <h2>1. Federal Pacific Stab-Lok Panels</h2>
      <p>Federal Pacific Electric (FPE) manufactured Stab-Lok panels from the 1950s through the 1980s. Independent testing has shown that FPE breakers fail to trip under overload conditions at a much higher rate than modern breakers — the exact condition they exist to prevent. FPE panels are strongly associated with residential electrical fires. If your inspection flags a Federal Pacific panel, the correct response is full replacement, not a repair. Budget $2,500-$5,000 depending on service size.</p>

      <h2>2. Zinsco or Sylvania-Zinsco Panels</h2>
      <p>Same story as Federal Pacific: Zinsco panels have documented issues with breakers welding to the bus bar, breakers failing to trip, and bus bars overheating. Insurance carriers in California increasingly refuse to write policies for homes with Zinsco panels. Full replacement is again the right answer.</p>

      <h2>3. Aluminum Branch Wiring</h2>
      <p>Between 1965 and 1973, single-strand aluminum wire was used for household branch circuits (outlets, switches, lighting) in many Temecula Valley tract homes. Aluminum expands and contracts more than copper, and connections at outlets and switches loosen over time — which creates heat and, in the worst cases, fires. Full <a href="/services/residential/rewiring">rewiring</a> is the definitive solution but can cost $8,000-$15,000. A less-expensive alternative is COPALUM crimp or AlumiConn repairs at every device, which retrofit specialty connectors to safely handle the aluminum. Either way, this is a real negotiating point.</p>

      <h2>4. Double-Tapped Breakers</h2>
      <p>Two wires under a single breaker terminal that is only rated for one wire is a "double-tap." It is a code violation, causes heat at the connection, and is one of the most common findings on inspection reports. Most double-taps are simple to fix — split the wires onto separate breakers, install a properly rated tandem breaker, or add a subpanel if the panel is out of space. Usually a $200-$800 repair depending on scope.</p>

      <h2>5. Missing GFCI and AFCI Protection</h2>
      <p>Any home built before the mid-2010s likely does not meet current GFCI and AFCI code requirements. This is not usually a safety emergency, but it is worth pricing out as part of due diligence. Bringing an average 3-bedroom Temecula home up to current GFCI/AFCI code typically runs $600-$1,500 depending on panel compatibility. This falls under general <a href="/services/residential/code-corrections">code corrections</a> work.</p>

      <h2>6. Knob-and-Tube Wiring</h2>
      <p>You will rarely see this in Temecula Valley homes — most were built after 1970 — but any true 1940s-or-earlier home may still have knob-and-tube wiring in attic runs or unfinished sections. Knob-and-tube lacks a ground wire, cannot be safely covered by insulation, and cannot handle modern electrical loads. It is a rewire situation, and it materially affects insurability.</p>

      <h2>7. Unpermitted Additions and Sub-Panels</h2>
      <p>Old garages converted to living space, backyard workshops with power, and pool-equipment subpanels are all common sources of unpermitted electrical work. You can usually tell from the panel: unlabeled circuits, mismatched breaker brands, cables entering the panel through drilled holes without proper connectors. Unpermitted work is not automatically dangerous but it needs to be inspected, corrected where necessary, and permitted retroactively. This can range from a $500 correction to a small rewire.</p>

      <h2>8. Warm or Discolored Breakers, Bus Bars, or Panel</h2>
      <p>If the inspector notes any breaker warm to the touch, any discoloration inside the panel, or a burning smell, do not accept "we will just replace that breaker" as the resolution. Heat damage on a panel bus bar is a full <a href="/services/residential/breaker-replacement">panel replacement</a>, not a spot repair — the damaged bus cannot be spot-fixed. Assume $2,500-$5,000.</p>

      <h2>9. Ungrounded Two-Prong Outlets</h2>
      <p>Some homes still have original ungrounded two-prong outlets. GFCI protection can be substituted for a true ground and made code-compliant with labeling, but the safer long-term fix is running a ground wire. This is a moderate-cost project — usually $1,000-$3,000 depending on how many outlets are affected.</p>

      <h2>10. Reversed Polarity and Miswired Outlets</h2>
      <p>Cheap to fix (under $200), but a common inspection finding. It means the hot and neutral are swapped at the receptacle. Not immediately dangerous but a safety issue for anything sensitive plugged in. Fix it before closing.</p>

      <h2>Get a Pre-Purchase Electrical Evaluation</h2>
      <p>Westek Electric Corp. does pre-purchase electrical evaluations for buyers throughout Temecula, Murrieta, Menifee, and the surrounding areas. If your inspection report has flagged electrical issues and you need real numbers to bring back to the seller, call (909) 996-6678. Getting an accurate repair estimate before you close can save you tens of thousands of dollars.</p>
    `,
  },
  'ev-charger-installation-guide-temecula': {
    title: 'EV Charger Installation Guide for Temecula',
    excerpt: 'Everything Temecula homeowners need to know about installing a Level 2 EV charger, from electrical requirements to permits and rebates.',
    date: '2024-12-10',
    category: 'EV Chargers',
    readTime: '8 min read',
    content: `
      <p>If you've recently purchased an electric vehicle or are considering one, installing a home EV charger is one of the best investments you can make. While public charging stations are becoming more common in Temecula and the surrounding areas, nothing beats the convenience of charging at home overnight.</p>

      <h2>Why Install a Level 2 EV Charger at Home?</h2>
      <p>Most EVs come with a Level 1 charger that plugs into a standard 120V outlet. While this works in a pinch, it only provides about 3-5 miles of range per hour of charging. For most EV owners, this simply isn't practical for daily use.</p>
      <p>A Level 2 charger, which uses a 240V circuit (like your dryer or oven), can provide 25-30 miles of range per hour. This means you can fully charge most EVs overnight, even if you come home with a nearly empty battery.</p>

      <h2>Electrical Requirements</h2>
      <p>Before installing a Level 2 EV charger, you'll need to ensure your home's electrical system can handle the additional load. Here's what to consider:</p>
      <ul>
        <li><strong>Panel Capacity:</strong> Most Level 2 chargers require a 40-50 amp dedicated circuit. Your electrical panel needs sufficient capacity to add this circuit.</li>
        <li><strong>Panel Upgrade:</strong> Many older Temecula homes have 100-amp panels, which may need to be upgraded to 200 amps to accommodate an EV charger.</li>
        <li><strong>Circuit Distance:</strong> The distance from your panel to the charging location affects installation cost and may require a subpanel.</li>
      </ul>

      <h2>Permits and Inspections</h2>
      <p>In Temecula and throughout California, EV charger installation requires a permit and inspection. At Westek Electric Corp., we handle all permitting as part of our installation service, ensuring your charger meets all local codes and safety requirements.</p>

      <h2>Available Rebates and Incentives</h2>
      <p>California offers several incentives for EV charger installation:</p>
      <ul>
        <li>Federal Tax Credit: Up to $1,000 for residential charger installation</li>
        <li>SCE Rebates: Southern California Edison offers rebates for qualifying installations</li>
        <li>Clean Vehicle Rebate Project: Additional rebates for income-qualified households</li>
      </ul>

      <h2>Choosing the Right Charger</h2>
      <p>There are many EV chargers on the market, from basic units to smart chargers with WiFi connectivity. We recommend considering:</p>
      <ul>
        <li>Charging speed (measured in kW or amps)</li>
        <li>Cable length for your parking situation</li>
        <li>Smart features like scheduling and energy monitoring</li>
        <li>Warranty and brand reputation</li>
      </ul>

      <h2>Get Started Today</h2>
      <p>Ready to install an EV charger at your Temecula home? Contact Westek Electric Corp. for a free assessment. We'll evaluate your electrical system, recommend the best charger for your needs, and provide a detailed quote. Call us today at (909) 996-6678.</p>
    `,
  },
  'signs-you-need-panel-upgrade': {
    title: '7 Signs Your Home Needs an Electrical Panel Upgrade',
    excerpt: 'Flickering lights, tripped breakers, and warm outlets are warning signs. Learn when it\'s time to upgrade your electrical panel.',
    date: '2024-12-05',
    category: 'Electrical Safety',
    readTime: '6 min read',
    content: `
      <p>Your electrical panel is the heart of your home's electrical system. It distributes power to every circuit in your house, and when it can't keep up with demand, you'll start noticing warning signs. Here are seven indicators that it's time for a panel upgrade.</p>

      <h2>1. Frequently Tripping Breakers</h2>
      <p>Circuit breakers are designed to trip when a circuit is overloaded — it's a safety feature. But if you're resetting breakers on a regular basis, it means your panel doesn't have enough capacity for your household's electrical demand. This is especially common in older Southern California homes that were built with 100-amp panels and have since added air conditioning, home offices, and modern appliances.</p>

      <h2>2. Flickering or Dimming Lights</h2>
      <p>If your lights flicker or dim when you turn on a large appliance like a vacuum, microwave, or hair dryer, your panel may be struggling to distribute power evenly. Occasional, brief dimming can be normal, but persistent flickering is a sign that your electrical system is being pushed to its limits.</p>

      <h2>3. Warm or Discolored Outlets and Switches</h2>
      <p>Outlets, switches, or the panel itself should never feel warm to the touch. Heat indicates a dangerous condition — potentially loose connections, overloaded circuits, or failing components. If you notice discoloration, melting, or a burning smell near any electrical component, turn off the circuit and call an electrician immediately.</p>

      <h2>4. You Still Have a Fuse Box</h2>
      <p>If your home still uses a fuse box instead of a modern circuit breaker panel, it's time for an upgrade. Fuse boxes are outdated, harder to maintain, and don't offer the same level of protection as modern breaker panels. Many insurance companies also charge higher premiums for homes with fuse boxes.</p>

      <h2>5. You're Using Too Many Power Strips and Extension Cords</h2>
      <p>If every room in your house has power strips and extension cords to compensate for a lack of outlets, your electrical system wasn't designed for your current needs. A panel upgrade, combined with additional circuit installation, gives you the capacity to add outlets where you actually need them.</p>

      <h2>6. You're Planning a Major Renovation or Addition</h2>
      <p>Adding a room, finishing a garage, installing a pool or hot tub, or adding an EV charger all require significant electrical capacity. Before starting any major project, have your panel evaluated to determine if an upgrade is needed. It's far easier and cheaper to upgrade the panel before construction begins.</p>

      <h2>7. Your Panel Is More Than 25 Years Old</h2>
      <p>Electrical panels have a lifespan of 25-40 years. If yours is approaching that age, it may not meet current electrical codes or have the safety features found in modern panels, such as arc-fault circuit interrupters (AFCIs). An aging panel is also more prone to connection failures and corrosion.</p>

      <h2>What Does a Panel Upgrade Involve?</h2>
      <p>A typical panel upgrade for a Southern California home involves replacing your existing panel with a new 200-amp panel. The process usually takes one day and includes:</p>
      <ul>
        <li>Disconnecting power and removing the old panel</li>
        <li>Installing a new 200-amp panel with modern breakers</li>
        <li>Reconnecting and labeling all circuits</li>
        <li>City inspection and final approval</li>
      </ul>
      <p>At Westek Electric Corp., we handle the entire process, including permits and inspections. Call us at (909) 996-6678 for a free estimate on your panel upgrade.</p>
    `,
  },
  'led-lighting-benefits-energy-savings': {
    title: 'LED Lighting: How Much Can You Really Save?',
    excerpt: 'LED upgrades can cut lighting costs by 75%. We break down the real savings and best LED options for California homes.',
    date: '2024-11-28',
    category: 'Energy Efficiency',
    readTime: '5 min read',
    content: `
      <p>If you haven't made the switch to LED lighting yet, you're paying more than you need to on your electricity bill every month. LED technology has come a long way, and the savings are real. Here's a practical breakdown of what you can expect when you upgrade your home's lighting.</p>

      <h2>The Numbers: LED vs. Incandescent vs. CFL</h2>
      <p>A traditional 60-watt incandescent bulb produces about 800 lumens of light. To get that same brightness, you only need:</p>
      <ul>
        <li><strong>LED:</strong> 8-10 watts (85% less energy)</li>
        <li><strong>CFL:</strong> 13-15 watts (75% less energy)</li>
        <li><strong>Incandescent:</strong> 60 watts (baseline)</li>
      </ul>
      <p>For a home with 30 light fixtures running an average of 5 hours per day, switching from incandescent to LED saves roughly $150-$200 per year on your electricity bill. In Southern California, where SCE rates continue to climb, those savings add up fast.</p>

      <h2>LED Lifespan: Buy Less, Replace Less</h2>
      <p>Beyond energy savings, LEDs last dramatically longer than traditional bulbs:</p>
      <ul>
        <li><strong>LED:</strong> 25,000-50,000 hours (15-25 years of typical use)</li>
        <li><strong>CFL:</strong> 8,000-10,000 hours (5-7 years)</li>
        <li><strong>Incandescent:</strong> 1,000-2,000 hours (less than 1 year)</li>
      </ul>
      <p>That means fewer trips to the store, fewer ladders to climb, and fewer bulbs in the landfill.</p>

      <h2>Recessed Lighting: The Most Popular LED Upgrade</h2>
      <p>One of the most requested services we perform is converting old recessed can lights to modern LED retrofits. Old recessed fixtures often use 65-watt BR30 flood bulbs that generate a lot of heat and run up your energy bill. LED retrofit kits slip right into the existing housing, look cleaner, and use only 10-12 watts per fixture.</p>
      <p>For a home with 20 recessed lights, that's a drop from 1,300 watts to about 220 watts — a massive reduction that you'll see on your very next bill.</p>

      <h2>Dimming and Smart Controls</h2>
      <p>Modern LED bulbs are fully dimmable when paired with the right dimmer switch. If your current dimmers are buzzing or flickering with LED bulbs, you likely need an LED-compatible dimmer installed. This is a quick fix that our electricians handle regularly.</p>
      <p>Smart LED bulbs and switches take it a step further, letting you control brightness, color temperature, and schedules from your phone. These are great for setting the right mood and saving even more energy by automating when lights turn off.</p>

      <h2>Under-Cabinet and Accent Lighting</h2>
      <p>LED strip lights and puck lights are perfect for under-cabinet kitchen lighting, closet illumination, and accent lighting. They produce minimal heat, use very little power, and can transform the look and functionality of a space. We hardwire these installations for a clean, professional result — no visible plugs or adapters.</p>

      <h2>Ready to Upgrade?</h2>
      <p>Whether you want to swap out a few bulbs or do a whole-home LED conversion, Westek Electric Corp. can help. We'll assess your current fixtures, recommend the best LED options, and handle the installation. Call (909) 996-6678 for a free estimate.</p>
    `,
  },
  'whole-house-rewiring-what-to-expect': {
    title: 'Whole House Rewiring: What Homeowners Need to Know',
    excerpt: 'Planning a whole house rewire? Learn about the process, timeline, costs, and what to expect during this major electrical project.',
    date: '2024-11-20',
    category: 'Home Improvement',
    readTime: '7 min read',
    content: `
      <p>A whole house rewire is one of the most significant electrical projects a homeowner can undertake. It's also one of the most important for safety and long-term peace of mind. If your home was built before the 1980s and still has its original wiring, here's what you need to know about the process.</p>

      <h2>When Is a Rewire Necessary?</h2>
      <p>Not every older home needs a full rewire, but several factors make it strongly recommended:</p>
      <ul>
        <li><strong>Aluminum wiring:</strong> Common in homes built between 1965-1973, aluminum wiring is a known fire hazard due to its tendency to overheat at connection points.</li>
        <li><strong>Knob-and-tube wiring:</strong> Found in pre-1950s homes, this outdated system lacks a ground wire and can't safely handle modern electrical loads.</li>
        <li><strong>Cloth-insulated wiring:</strong> The fabric insulation deteriorates over time, exposing bare conductors and creating a fire risk.</li>
        <li><strong>Insufficient capacity:</strong> If your home's wiring simply can't support modern appliances, HVAC systems, and electronics without constant issues.</li>
      </ul>

      <h2>What Does the Process Look Like?</h2>
      <p>A whole house rewire typically follows these steps:</p>
      <ul>
        <li><strong>Assessment:</strong> We inspect your entire electrical system, map out existing circuits, and plan the new wiring layout based on your needs and current code requirements.</li>
        <li><strong>Permits:</strong> We pull all necessary permits from your local building department. This ensures the work is inspected and meets California electrical codes.</li>
        <li><strong>Panel upgrade:</strong> Most rewires include upgrading to a 200-amp panel to support the new wiring and modern electrical demands.</li>
        <li><strong>Running new wire:</strong> New Romex (NM-B) copper wiring is run through walls, attics, and crawl spaces to every outlet, switch, and fixture in the home.</li>
        <li><strong>Device installation:</strong> New outlets, switches, and cover plates are installed. We also add outlets where needed to meet current code (no more extension cords running across rooms).</li>
        <li><strong>Inspection:</strong> The city inspector verifies all work meets code before we close up any openings.</li>
        <li><strong>Patching:</strong> Small access holes in drywall are patched. A skilled crew minimizes the number of openings needed.</li>
      </ul>

      <h2>How Long Does It Take?</h2>
      <p>For a typical 3-bedroom home in the Lake Elsinore or Temecula area, a full rewire takes 5-7 business days. Larger homes or those with complex layouts may take longer. You can usually stay in your home during the process, though power will be off in sections as we work through each area.</p>

      <h2>How Much Does It Cost?</h2>
      <p>The cost of a whole house rewire depends on the size of your home, accessibility of the wiring (single-story vs. two-story, attic access, crawl space), and the scope of work. For most homes in our service area, a rewire including a panel upgrade typically ranges from $8,000 to $15,000. We provide detailed, transparent estimates before any work begins.</p>

      <h2>Is It Worth It?</h2>
      <p>Absolutely. A whole house rewire eliminates fire hazards from outdated wiring, brings your home up to current safety codes, supports modern electrical demands, and can increase your home's resale value. Many insurance companies also offer reduced premiums after a rewire.</p>

      <h2>Get a Free Assessment</h2>
      <p>If you're concerned about your home's wiring, Westek Electric Corp. offers free electrical assessments. We'll inspect your system, explain what we find, and give you an honest recommendation. Call us at (909) 996-6678 to schedule yours.</p>
    `,
  },
  'smart-home-electrical-requirements': {
    title: 'Smart Home Electrical Requirements Guide',
    excerpt: 'Thinking about upgrading to a smart home? Here\'s what you need to know about electrical requirements for smart devices and automation.',
    date: '2024-11-15',
    category: 'Smart Home',
    readTime: '6 min read',
    content: `
      <p>Smart home technology has moved far beyond novelty. Smart thermostats, lighting systems, security cameras, and voice assistants are now standard in many Southern California homes. But before you fill your house with smart devices, it's worth understanding what your electrical system needs to support them reliably.</p>

      <h2>Does Your Panel Have Enough Capacity?</h2>
      <p>Most individual smart devices don't draw much power on their own. A smart plug uses almost nothing, and a smart thermostat replaces your existing one. But when you start adding up smart lighting systems, security cameras, a video doorbell, a smart garage door opener, motorized blinds, and a home hub, the cumulative demand matters.</p>
      <p>If your home already has an older or fully loaded panel, adding a smart home setup alongside an EV charger or new HVAC system might push you over the edge. A panel evaluation is a smart first step.</p>

      <h2>Neutral Wires: The Hidden Requirement</h2>
      <p>This is the most common issue we encounter with smart home installations. Many smart switches and dimmers require a neutral wire (white wire) at the switch box. Homes built before the 1980s often don't have neutral wires run to switch locations — the original wiring only included a hot wire and a switch leg.</p>
      <p>Without a neutral wire, your options are limited to the few smart switches that don't require one (they tend to have fewer features) or having an electrician run a neutral wire to the switch box. It's a straightforward job that we do frequently.</p>

      <h2>Smart Lighting: Switches vs. Bulbs</h2>
      <p>There are two approaches to smart lighting, and each has different electrical implications:</p>
      <ul>
        <li><strong>Smart switches:</strong> Replace your existing wall switches with smart versions. This is the better approach for most homes — you control all bulbs on that circuit, regular bulbs work fine, and guests can still use the wall switch normally. Requires a neutral wire in most cases.</li>
        <li><strong>Smart bulbs:</strong> Individual bulbs with built-in WiFi. No wiring changes needed, but you must always leave the wall switch on (which confuses guests), and each bulb needs its own WiFi connection.</li>
      </ul>
      <p>For whole-home smart lighting, we almost always recommend smart switches over smart bulbs.</p>

      <h2>Dedicated Circuits for Home Offices</h2>
      <p>If you work from home, a dedicated circuit for your office ensures that your computer, monitors, and networking equipment aren't sharing power with other rooms. This prevents tripped breakers during video calls and protects sensitive electronics from voltage fluctuations. A dedicated 20-amp circuit for a home office is a quick, affordable upgrade.</p>

      <h2>Outdoor Smart Devices</h2>
      <p>Smart security cameras, floodlights, and landscape lighting controllers need properly weatherproofed electrical connections. If you're installing outdoor smart cameras, make sure you have exterior outlets or junction boxes in the right locations. Hardwired cameras are more reliable than battery-powered ones and don't need recharging every few months. For pools and hot tubs, <a href="/services/residential/hot-tub-spa-pool-jacuzzi">smart pool and spa wiring</a> can integrate with your home automation system.</p>

      <h2>WiFi and Networking</h2>
      <p>While not strictly electrical, your smart home is only as good as your WiFi network. If you're going all-in on smart devices, consider having an electrician install structured wiring — <a href="/services/commercial/cat6-installation">Cat 6 network cabling</a> run through your walls to strategic locations for WiFi access points. This gives you a rock-solid mesh network that won't drop devices when your neighbor's WiFi interferes.</p>

      <h2>Plan Your Smart Home Right</h2>
      <p>The best time to set up your smart home electrical infrastructure is during a renovation or new construction — but retrofitting is absolutely doable. Westek Electric Corp. can evaluate your current wiring, add neutral wires where needed, install dedicated circuits, run <a href="/services/commercial/low-voltage-wiring">low voltage wiring</a>, and set up outdoor power for cameras and lighting. Call (909) 996-6678 for a free consultation.</p>
    `,
  },
  'outdoor-lighting-installation-tips': {
    title: 'Outdoor Lighting Design Tips for Curb Appeal',
    excerpt: 'Transform your outdoor spaces with professional lighting design. Learn about landscape lighting, security lights, and pathway illumination.',
    date: '2024-11-08',
    category: 'Lighting',
    readTime: '5 min read',
    content: `
      <p>Great outdoor lighting does three things at once: it makes your home look beautiful at night, it keeps your property safe, and it extends your living space into the evening hours. Whether you're lighting up a walkway, highlighting landscaping, or illuminating a patio for entertaining, here's how to get the most out of your outdoor lighting.</p>

      <h2>The Three Layers of Outdoor Lighting</h2>
      <p>Professional lighting designers think in three layers, and you should too:</p>
      <ul>
        <li><strong>Ambient lighting:</strong> The overall illumination for an area. For outdoors, this includes porch lights, post lights, and patio string lights or overhead fixtures. It sets the general brightness level.</li>
        <li><strong>Task lighting:</strong> Focused light where you need it for specific activities — grilling areas, outdoor kitchens, garage entries, and stairways. This is where safety and function come first.</li>
        <li><strong>Accent lighting:</strong> Dramatic, directional lighting that highlights architectural features, trees, garden beds, or water features. This is what gives your home that "wow" factor after dark.</li>
      </ul>

      <h2>Landscape Lighting Techniques</h2>
      <p>Different placement techniques create very different effects:</p>
      <ul>
        <li><strong>Uplighting:</strong> Fixtures placed at ground level pointing up. Perfect for trees, textured walls, and columns. Creates drama and height.</li>
        <li><strong>Downlighting:</strong> Fixtures mounted high, pointing down. Mimics natural moonlight and is ideal for patios, seating areas, and driveways.</li>
        <li><strong>Path lighting:</strong> Low fixtures along walkways and garden borders. Guides visitors safely while adding a warm glow to your landscaping.</li>
        <li><strong>Silhouetting:</strong> Placing a light behind a plant or feature to create a dramatic shadow outline against a wall.</li>
        <li><strong>Wash lighting:</strong> Broad, even light across a flat surface like a fence, retaining wall, or house facade.</li>
      </ul>

      <h2>Security Lighting That Doesn't Look Like a Prison</h2>
      <p>Security lighting doesn't have to mean harsh floodlights that blind everyone in the neighborhood. Modern motion-activated LED fixtures come in attractive designs that blend with your home's style. Strategic placement at entry points, side yards, and garage areas provides excellent <a href="/services/commercial/security-lighting">security lighting</a> coverage while keeping your home looking welcoming.</p>
      <p>We recommend a combination of always-on low-level lighting (pathway lights, porch lights) supplemented by motion-activated fixtures in less-trafficked areas. This approach deters intruders while keeping your property beautifully lit. If you have a pool or spa, dedicated <a href="/services/residential/pool-spa-lighting">pool and spa lighting</a> adds both safety and ambiance to your backyard.</p>

      <h2>Low Voltage vs. Line Voltage</h2>
      <p>Most landscape lighting uses low-voltage (12V) systems powered by a transformer. Benefits include:</p>
      <ul>
        <li>Safer to install and work around</li>
        <li>Lower energy costs</li>
        <li>Easier to expand and modify</li>
        <li>Available in a wide range of high-quality fixtures</li>
      </ul>
      <p>However, the transformer and main <a href="/services/commercial/low-voltage-wiring">low voltage wiring</a> connections should be installed by a licensed electrician. We frequently see DIY landscape lighting with undersized transformers, voltage drop issues from long wire runs, and improper connections that corrode and fail. Getting the infrastructure right from the start saves headaches down the road.</p>

      <h2>Smart Outdoor Lighting Controls</h2>
      <p>Modern outdoor lighting systems can be controlled with timers, photocells (dusk-to-dawn sensors), motion sensors, or smart home integration. A photocell combined with a timer is the most popular setup — lights turn on automatically at dusk and off at a set time. Smart controls let you adjust schedules from your phone and create scenes for different occasions.</p>

      <h2>Get a Professional Lighting Plan</h2>
      <p>The difference between amateur and professional outdoor lighting is dramatic. For businesses, we also provide <a href="/services/commercial/indoor-lighting">commercial indoor lighting</a> and <a href="/services/commercial/office-lighting">office lighting solutions</a>. At Westek Electric Corp., we design and install complete outdoor lighting systems for homes throughout Lake Elsinore, Temecula, and Southern California. We'll create a lighting plan that enhances your home's curb appeal, improves safety, and works within your budget. Call (909) 996-6678 for a free consultation.</p>
    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = BLOG_POSTS_PREVIEW.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Westek Electric Corp. Blog`,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_PREVIEW.find((p) => p.slug === params.slug)
  const content = blogPostContent[params.slug as keyof typeof blogPostContent]

  if (!post) {
    return (
      <div className="pt-40 pb-16 text-center">
        <h1 className="text-2xl font-bold text-navy-900 mb-4">Post Not Found</h1>
        <Link href="/news" className="text-electric-500 hover:underline">
          Return to Blog
        </Link>
      </div>
    )
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/news/${params.slug}`,
    datePublished: post.date,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/news' },
    { name: post.title, url: `/news/${params.slug}` },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="pt-40 pb-8 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-narrow">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-charcoal-600 hover:text-navy-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge variant="electric" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-charcoal-600">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Westek Electric Corp.
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="pb-8">
          <div className="container-narrow">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-16">
        <div className="container-narrow">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-charcoal-700 prose-a:text-electric-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900 prose-ul:text-charcoal-700"
            dangerouslySetInnerHTML={{
              __html: content?.content || '<p>Full article content would be loaded here from CMS or MDX files.</p>',
            }}
          />
        </div>
      </section>

      {/* Author Box */}
      <section className="pb-16">
        <div className="container-narrow">
          <div className="bg-accent-100 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-navy-900 mb-2">
                  Westek Electric Corp.
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Our team of licensed electricians has been serving Lake Elsinore, Temecula, Murrieta, and
                  Southern California since 2010. We share our expertise through these articles
                  to help homeowners make informed decisions about their electrical systems.
                </p>
                <Button asChild size="sm">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS_PREVIEW.filter((p) => p.slug !== params.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/news/${relatedPost.slug}`}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <Badge variant="default" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-charcoal-500">{relatedPost.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need Electrical Help?
          </h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            Our team is ready to help with any electrical project, large or small.
            Contact us for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Request Estimate
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
