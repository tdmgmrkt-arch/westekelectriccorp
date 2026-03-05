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
  'ev-charger-installation-guide-temecula': {
    title: 'Complete Guide to EV Charger Installation in Temecula',
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
    title: 'Smart Home Electrical Requirements: A Complete Guide',
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
      <p>Smart security cameras, floodlights, and landscape lighting controllers need properly weatherproofed electrical connections. If you're installing outdoor smart cameras, make sure you have exterior outlets or junction boxes in the right locations. Hardwired cameras are more reliable than battery-powered ones and don't need recharging every few months.</p>

      <h2>WiFi and Networking</h2>
      <p>While not strictly electrical, your smart home is only as good as your WiFi network. If you're going all-in on smart devices, consider having an electrician install structured wiring — Ethernet cables run through your walls to strategic locations for WiFi access points. This gives you a rock-solid mesh network that won't drop devices when your neighbor's WiFi interferes.</p>

      <h2>Plan Your Smart Home Right</h2>
      <p>The best time to set up your smart home electrical infrastructure is during a renovation or new construction — but retrofitting is absolutely doable. Westek Electric Corp. can evaluate your current wiring, add neutral wires where needed, install dedicated circuits, and set up outdoor power for cameras and lighting. Call (909) 996-6678 for a free consultation.</p>
    `,
  },
  'outdoor-lighting-installation-tips': {
    title: 'Outdoor Lighting Installation: Design Tips for Curb Appeal',
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
      <p>Security lighting doesn't have to mean harsh floodlights that blind everyone in the neighborhood. Modern motion-activated LED fixtures come in attractive designs that blend with your home's style. Strategic placement at entry points, side yards, and garage areas provides excellent security coverage while keeping your home looking welcoming.</p>
      <p>We recommend a combination of always-on low-level lighting (pathway lights, porch lights) supplemented by motion-activated fixtures in less-trafficked areas. This approach deters intruders while keeping your property beautifully lit.</p>

      <h2>Low Voltage vs. Line Voltage</h2>
      <p>Most landscape lighting uses low-voltage (12V) systems powered by a transformer. Benefits include:</p>
      <ul>
        <li>Safer to install and work around</li>
        <li>Lower energy costs</li>
        <li>Easier to expand and modify</li>
        <li>Available in a wide range of high-quality fixtures</li>
      </ul>
      <p>However, the transformer and main wiring connections should be installed by a licensed electrician. We frequently see DIY landscape lighting with undersized transformers, voltage drop issues from long wire runs, and improper connections that corrode and fail. Getting the infrastructure right from the start saves headaches down the road.</p>

      <h2>Smart Outdoor Lighting Controls</h2>
      <p>Modern outdoor lighting systems can be controlled with timers, photocells (dusk-to-dawn sensors), motion sensors, or smart home integration. A photocell combined with a timer is the most popular setup — lights turn on automatically at dusk and off at a set time. Smart controls let you adjust schedules from your phone and create scenes for different occasions.</p>

      <h2>Get a Professional Lighting Plan</h2>
      <p>The difference between amateur and professional outdoor lighting is dramatic. At Westek Electric Corp., we design and install complete outdoor lighting systems for homes throughout Lake Elsinore, Temecula, and Southern California. We'll create a lighting plan that enhances your home's curb appeal, improves safety, and works within your budget. Call (909) 996-6678 for a free consultation.</p>
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
