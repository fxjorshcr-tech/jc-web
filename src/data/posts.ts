/**
 * Blog posts. Written for people first and for answer engines second (AEO / GEO):
 * every post opens with a direct answer, carries scannable key facts, an FAQ block and
 * structured data generated in src/app/blog/[slug]/page.tsx. Edit content here only.
 *
 * Inline HTML inside `html` strings is limited to <strong>, <em>, <a> and <br>.
 */

export type PostBlock =
  | { type: "p" | "h2" | "h3" | "quote"; html: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; html: string }
  | { type: "embed"; src: string };

export interface PostFaq {
  question: string;
  /** Plain text; [label](href) links allowed. */
  answer: string;
}

export type PostCategory = "Planning" | "Wildlife" | "Tours" | "Culture";

export interface BlogPost {
  slug: string;
  /** H1 shown on the page. */
  title: string;
  /** <title> tag, keep under ~60 characters. Falls back to title. */
  seoTitle?: string;
  /** ISO date (YYYY-MM-DD) first published. */
  date: string;
  /** ISO date (YYYY-MM-DD) last reviewed. Shown on the page and used as dateModified. */
  updated: string;
  /** Meta description, under ~160 characters. */
  excerpt: string;
  category: PostCategory;
  /** Cover image path relative to /public/images (16:9 works best). */
  cover: string;
  coverAlt: string;
  /** Direct 40-60 word answer to the question in the title. Shown first and marked speakable. */
  quickAnswer: string;
  /** Short label/value pairs rendered as a facts box. */
  keyFacts: { label: string; value: string }[];
  keywords: string[];
  /** Tour slugs to feature at the end of the post. */
  relatedTours: string[];
  blocks: PostBlock[];
  faq: PostFaq[];
}

const WHATSAPP = "https://wa.me/50689758832";

export const posts: BlogPost[] = [
  // ---------------------------------------------------------------------------------------------
  {
    slug: "things-to-do-in-santa-teresa-beyond-surfing",
    title: "Things to Do in Santa Teresa and Malpaís Beyond Surfing: A Local Guide's List",
    seoTitle: "Things to Do in Santa Teresa & Malpaís Beyond Surfing (Local Guide)",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Santa Teresa is famous for waves, but the hills, reserves and villages behind the beach are the best of the peninsula. Cabo Blanco, Montezuma waterfall, Curu, birding, farm visits and night hikes, all within an hour.",
    category: "Planning",
    cover: "photos/sunset-low-tide.jpg",
    coverAlt: "Orange sunset over the Pacific at low tide on a Santa Teresa beach, with surfers and swimmers in the shallows",
    quickAnswer:
      "Beyond the surf, Santa Teresa and Malpaís sit at the door of the wildest corner of the Nicoya Peninsula. Within an hour you can hike Cabo Blanco, Costa Rica's first nature reserve, swim under the Montezuma waterfall, watch monkeys and macaws in Curu Wildlife Refuge, bird the sunrise at Cabuya, spend a morning on a working family farm, ride an ATV to a hidden waterfall, or walk the forest at night with a headlamp. A licensed local guide picks you up at your hotel.",
    keyFacts: [
      { label: "Santa Teresa → Montezuma", value: "≈17 km · 30–45 min by road" },
      { label: "Santa Teresa → Cabo Blanco", value: "≈30 min via Malpaís or Cabuya" },
      { label: "Santa Teresa → Curu Refuge", value: "≈1 h 30 min" },
      { label: "Best start", value: "Early: wildlife is active 5:30–9 am" },
      { label: "Pickup", value: "Santa Teresa and Malpaís hotels on request" },
    ],
    keywords: ["things to do in Santa Teresa Costa Rica", "Santa Teresa non surf activities", "Malpais things to do", "Cabo Blanco reserve from Santa Teresa", "Santa Teresa wildlife tour", "Santa Teresa day trips"],
    relatedTours: ["curu-nature-escape", "bird-lovers-morning", "nocturno-night-journey"],
    blocks: [
      {
        type: "p",
        html: "Santa Teresa earned its reputation on the water: a long, consistent beach break, sunsets that stop traffic on the one dirt road, and a town that wakes up for the dawn session. But most visitors spend a week here and never turn around to look at the hills. Behind the beach is the oldest protected forest in Costa Rica, a waterfall you can swim under, a wildlife refuge where monkeys walk the trail with you, and farms where families still press sugar cane by hand. This is the list we give our own guests when they ask what to do on a flat day, a rainy afternoon or a rest day for sore shoulders.",
      },
      { type: "h2", html: "1. Hike Cabo Blanco, Costa Rica's first nature reserve" },
      {
        type: "p",
        html: "At the very tip of the peninsula, 30 minutes from Santa Teresa, <strong>Cabo Blanco Absolute Nature Reserve</strong> was created in 1963 and is the oldest protected area in the country. The main trail from the Cabuya entrance climbs through forest to a wild, empty beach at the point: about 4.5 km each way and a good half day. From the Malpaís side there are shorter trails. Howler and white-faced monkeys, coatis, agoutis and dozens of bird species live here; the forest you walk through is what the whole coast looked like before the roads arrived. The reserve is closed on Mondays and Tuesdays, so plan around it. JC guides private hikes here; see <a href=\"/hire-a-guide\">Hire a Guide</a>.",
      },
      {
        type: "image",
        src: "photos/coastline.jpg",
        alt: "Turquoise sea breaking on rocks below a forested headland on the southern Nicoya coast",
        caption: "The coast around the Cabo Blanco point: forest to the waterline.",
      },
      { type: "h2", html: "2. Swim under the Montezuma waterfall" },
      {
        type: "p",
        html: "Forty minutes east, the village of <strong>Montezuma</strong> has a three-tier waterfall a 20-minute walk from town. The lower fall drops into a deep pool you can swim in; the upper tiers have smaller pools and a rope swing. Go early or late to have it to yourself, wear shoes with grip for the river rocks, and skip the cliff jumps the locals do, every year someone gets hurt. Combine it with lunch in Montezuma, which has a slower, older feel than Santa Teresa.",
      },
      {
        type: "image",
        src: "photos/montezuma-waterfall.jpg",
        alt: "Montezuma waterfall pouring over a rock face into a green pool surrounded by forest",
        caption: "The lower Montezuma waterfall, 20 minutes on foot from the village.",
      },
      { type: "h2", html: "3. See monkeys, deer and macaws in Curu Wildlife Refuge" },
      {
        type: "p",
        html: "If you want to see animals rather than hope for them, <strong>Curu</strong> is the place. A privately protected refuge near Paquera, about an hour and a half from Santa Teresa, it is one of the easiest places in Costa Rica to see white-faced capuchins, howler monkeys, white-tailed deer, coatis and Scarlet Macaws on flat, shaded trails that end at a calm beach. Our <a href=\"/tours/curu-nature-escape\">Curu Nature Escape</a> is a half day with guide, entrance, scope, swim and a typical Costa Rican lunch. Read the full <a href=\"/blog/curu-wildlife-refuge-guide\">Curu guide</a>.",
      },
      { type: "h2", html: "4. Watch the sunrise with the birds" },
      {
        type: "p",
        html: "Santa Teresa faces west, so you get the sunsets. For the sunrise you cross to Cabuya on the gulf side, where the sun comes up over the water and the shore birds are already fishing. A three-hour <a href=\"/tours/bird-lovers-morning\">Bird Lover's Morning</a> typically turns up 40 to 60 species: motmots, trogons, parakeets, herons, kingfishers, hummingbirds and increasingly Scarlet Macaws. We bring the binoculars and the scope, and breakfast is included. It is the best thing we know for a non-surfing partner, and surfers tell us it is a good way to rest the shoulders. More in our <a href=\"/blog/birdwatching-montezuma-cabuya\">birding guide</a>.",
      },
      {
        type: "image",
        src: "photos/golden-hour-beach.jpg",
        alt: "Sun setting behind the hills across the Gulf of Nicoya with swimmers in the calm water",
        caption: "The gulf side is calm and faces east: sunrise country.",
      },
      { type: "h2", html: "5. Spend a morning on a working family farm" },
      {
        type: "p",
        html: "Ten minutes inland the peninsula turns rural fast. On <a href=\"/tours/lets-get-local\">Let's Get Local</a> you spend a morning with a family at Finca Los Tres Higuerones: coffee brewed through a cloth filter, sugar cane pressed by hand, oxen and chickens, and a light meal you help cook. Three hours, almost no walking, and the morning kids and grandparents talk about afterwards. Here is <a href=\"/blog/lets-get-local-family-farm\">what it is really like</a>.",
      },
      { type: "h2", html: "6. Ride an ATV to a hidden waterfall and a ridge-top view" },
      {
        type: "p",
        html: "Everybody in Santa Teresa rents an ATV to get around town. Fewer people point one uphill. Our <a href=\"/tours/finca-el-paraiso-atv\">Finca El Paraíso ATV journey</a> climbs the back roads to a ridge where the whole Pacific coast opens up below you, stops at a waterfall with a swimming pool, and ends with a home-cooked meal at a hill farm. Private departures only, so the pace is yours.",
      },
      { type: "h2", html: "7. Walk the forest at night" },
      {
        type: "p",
        html: "After sunset the forest changes crew. Red-eyed tree frogs, banded geckos, tarantulas, scorpions that glow under UV light, sleeping birds and the occasional kinkajou: the <a href=\"/tours/nocturno-night-journey\">Nocturno Night Journey</a> is two slow hours on a trail near Montezuma with headlamps and a guide who knows where to look. It fits neatly after a beach day. Read <a href=\"/blog/night-hike-montezuma-nocturno\">what you will see</a>.",
      },
      {
        type: "image",
        src: "tours/nocturno-night-journey/06.jpg",
        alt: "Three guests on a night hike pointing phones and lights at an animal in a tree",
        caption: "Night shift on the Nocturno trail.",
      },
      { type: "h2", html: "8. Low tide at Playa Hermosa and the tide pools of Malpaís" },
      {
        type: "p",
        html: "Check the tide table. At low tide, <strong>Playa Hermosa</strong> north of Santa Teresa becomes a kilometer of hard flat sand perfect for walking and running, and the rocky points at <strong>Malpaís</strong> open up tide pools full of crabs, urchins and small fish. Go an hour before the lowest tide, wear sandals you can get wet, and leave everything where you found it. Free, and one of the best hours of the day.",
      },
      { type: "h2", html: "9. Cabuya's island cemetery, reached on foot at low tide" },
      {
        type: "p",
        html: "South of Montezuma, the fishing village of <strong>Cabuya</strong> buries its dead on a small island that you can walk to across the reef at low tide. It is quiet, strange and beautiful, and the village around it is the least touristy place on this coast. The Cabuya version of Let's Get Local visits it along with a fishing beach and a local marmalade maker.",
      },
      {
        type: "image",
        src: "photos/road-to-montezuma.jpg",
        alt: "Paved road winding through flowering yellow and pink roadside trees between Cóbano and Montezuma",
        caption: "The road between Santa Teresa and Montezuma in March, when the cortez trees flower.",
      },
      { type: "h2", html: "How to plan it from Santa Teresa or Malpaís" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Pickups:</strong> our tours start from Montezuma hotels, and we arrange pickups in Santa Teresa and Malpaís on request. The transfer adds roughly 40 minutes each way, so starts are a little earlier and the quote reflects the drive. Tell us where you are staying.",
          "<strong>Go early:</strong> wildlife is most active from first light to about 9 am, and the heat builds by late morning. A dawn tour still leaves you the whole afternoon for the beach.",
          "<strong>Combine:</strong> Bird Lover's Morning or Let's Get Local in the morning and Nocturno after dinner make a full nature day without a single surfboard.",
          "<strong>Season:</strong> the dry season (December to April) is best for dusty roads and easy wildlife viewing; the green season (May to November) brings full waterfalls, frogs and empty trails. Our <a href=\"/blog/best-time-to-visit-montezuma\">month-by-month guide</a> covers both.",
          "<strong>Book ahead:</strong> small-group tours run on set days and fill up between December and March. We reply within 24 hours by <a href=\"" + WHATSAPP + "\">WhatsApp</a> or email.",
        ],
      },
      {
        type: "callout",
        title: "A local, not a desk",
        html: "JC has lived on this peninsula for more than a decade and guides every tour himself. If you want something that is not on this list, a private day in Cabo Blanco, a birding morning built around a target species, a farm visit for a big family, write to us and we will plan it with you.",
      },
    ],
    faq: [
      {
        question: "What is there to do in Santa Teresa if you don't surf?",
        answer:
          "Plenty. Hike Cabo Blanco reserve, swim at the Montezuma waterfall, visit Curu Wildlife Refuge for monkeys and macaws, go birdwatching at sunrise, spend a morning on a family farm, ride an ATV into the hills or walk the forest at night with a guide. All are within an hour or so of Santa Teresa.",
      },
      {
        question: "How far is Montezuma from Santa Teresa?",
        answer: "About 17 km, which takes 30 to 45 minutes by road via Cóbano. Taxis, shuttles and rented ATVs all make the trip; our tours can pick you up in Santa Teresa on request.",
      },
      {
        question: "Can I visit Cabo Blanco from Santa Teresa?",
        answer:
          "Yes. The main entrance is in Cabuya, about 30 minutes away, with a 4.5 km trail each way to the beach at the point; shorter trails start on the Malpaís side. The reserve is closed on Mondays and Tuesdays. JC guides private hikes there.",
      },
      {
        question: "Do your tours pick up in Santa Teresa and Malpaís?",
        answer: "Yes, on request. The transfer adds roughly 40 minutes each way compared with Montezuma, so the tour starts a little earlier and the quote includes the longer drive.",
      },
      {
        question: "What is the best wildlife tour near Santa Teresa?",
        answer:
          "For guaranteed sightings, the half-day Curu Nature Escape: monkeys, deer, coatis and Scarlet Macaws on easy trails, with lunch and a swim. For birds, the Bird Lover's Morning at sunrise. For something different, the Nocturno night hike.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "getting-to-montezuma",
    title: "How to Get to Montezuma, Costa Rica: Ferry, Shuttle, Flight or Bus?",
    seoTitle: "How to Get to Montezuma, Costa Rica (Ferry, Shuttle, Flight, Bus)",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Every way to reach Montezuma from San José or Liberia: shared shuttle and ferry, flying to Tambor, driving, the public bus and the water taxi. Times, trade-offs and local tips.",
    category: "Planning",
    cover: "blog/getting-to-montezuma/cover-road.jpg",
    coverAlt: "Paved road winding into Montezuma between flowering yellow and pink roadside trees",
    quickAnswer:
      "Montezuma is at the southern tip of Costa Rica's Nicoya Peninsula. From San José it takes about 5 hours by shared shuttle and ferry, or about 25 minutes by small plane to Tambor plus a 40-minute drive. From Liberia it is a 4.5 to 5 hour drive with no ferry. The public bus is the cheapest option; flying is the fastest.",
    keyFacts: [
      { label: "From San José (SJO)", value: "≈5 h shuttle + ferry · ≈1 h 15 min by air + road" },
      { label: "From Liberia (LIR)", value: "≈4.5–5 h by road, no ferry" },
      { label: "Ferry", value: "Puntarenas → Paquera, about 70 minutes" },
      { label: "Nearest airstrip", value: "Tambor (TMU), ≈40 min from Montezuma" },
      { label: "Nearest town with banks", value: "Cóbano, 7 km uphill" },
    ],
    keywords: ["how to get to Montezuma", "Puntarenas Paquera ferry", "Tambor airport", "San José to Montezuma shuttle", "Montezuma Costa Rica transport"],
    relatedTours: ["curu-nature-escape", "bird-lovers-morning"],
    blocks: [
      {
        type: "p",
        html: "\"How do we actually get there?\" is the first question almost every guest asks us, and it is a fair one. Montezuma sits at the end of the road on the southern Nicoya Peninsula, across the Gulf of Nicoya from the mainland. That is exactly why it has stayed small and green, and it also means the trip is part of the journey. Here are the five ways in, in the order most visitors choose them.",
      },
      { type: "h2", html: "Option 1: Shared shuttle from San José (the most popular)" },
      {
        type: "p",
        html: "Door-to-door shuttles leave San José and the airport area every morning and early afternoon. The van drives to Puntarenas, rolls onto the car ferry to Paquera, then continues through Cóbano down to Montezuma. Count on <strong>5 to 6 hours</strong> including the crossing. You stay in the same seat the whole way, your bags stay in the van, and the driver knows the ferry timetable.",
      },
      {
        type: "p",
        html: "Reserve early for travel between mid-December and Easter: shuttles fill up, and the ferry does too. If your flight lands late in the day, plan a night near the airport and take the morning shuttle. Arriving in Montezuma after dark is not dangerous, but the last stretch of road is steep and winding and you miss the best views.",
      },
      { type: "h2", html: "Option 2: Fly to Tambor (the fastest)" },
      {
        type: "p",
        html: "Domestic flights from San José reach the Tambor airstrip in roughly <strong>25 to 30 minutes</strong>, with a view of the whole gulf on the way. From Tambor a taxi or pre-arranged transfer takes about 40 minutes to Montezuma via Cóbano. Small planes have strict luggage limits, usually around 14 kg (30 lb) per person including hand luggage, so pack light or ship a bag with your shuttle company.",
      },
      { type: "h2", html: "Option 3: Drive yourself" },
      {
        type: "p",
        html: "There are two routes. The classic one is <strong>San José → Puntarenas → car ferry → Paquera → Cóbano → Montezuma</strong>: about 1.5 to 2 hours to the ferry, 70 minutes on the water, then a little over an hour on mostly paved road. The alternative avoids the ferry entirely by crossing the Tempisque bridge and driving down the peninsula through Nicoya and Paquera; it is longer (5 to 6 hours from San José) but you are never tied to a timetable. From Liberia the land route is the natural choice and takes about 4.5 to 5 hours.",
      },
      {
        type: "image",
        src: "blog/getting-to-montezuma/cattle-on-a-country-road.jpg",
        alt: "Three riders on horseback moving a herd of cattle along a gravel road lined with forest near Montezuma",
        caption: "The only traffic jam you are likely to meet on the peninsula.",
      },
      {
        type: "p",
        html: "Is a 4x4 necessary? For Montezuma itself, no: the road from Paquera is paved, and the final descent into town is paved too. A 4x4 or high clearance becomes useful in the green season (May to November) if you plan to explore the gravel roads to Cabuya, Cabo Blanco, Santa Teresa or the farms inland, some of which include shallow river crossings after heavy rain.",
      },
      { type: "h2", html: "Option 4: Public bus and ferry (the cheapest)" },
      {
        type: "p",
        html: "Take the bus from San José to Puntarenas (about 2.5 hours), walk onto the ferry as a foot passenger, and catch the bus waiting on the Paquera side that runs through Cóbano to Montezuma (about 1.5 hours). Door to door you are looking at <strong>6 to 7 hours</strong> and a fraction of the shuttle price. Carry your own bag on and off the ferry, keep small bills for tickets, and check the current ferry schedule the day before, because it changes a few times a year.",
      },
      { type: "h2", html: "Option 5: Water taxi from the central Pacific" },
      {
        type: "p",
        html: "If you are coming from Jacó or Herradura, a morning water taxi crosses the gulf to Montezuma beach in about an hour. It is a beautiful ride (dolphins are common) and it links the central Pacific with the peninsula without going back through San José. Expect a wet beach landing: wear sandals and keep electronics in a dry bag.",
      },
      {
        type: "table",
        caption: "Ways to reach Montezuma at a glance",
        head: ["How", "From", "Approx. time", "Best for"],
        rows: [
          ["Shared shuttle + ferry", "San José / SJO", "5–6 h", "Most travelers, families with luggage"],
          ["Flight to Tambor + taxi", "San José / SJO", "1 h 15 min total", "Short trips, light packers"],
          ["Rental car via ferry", "San José", "4.5–5.5 h", "Flexible itineraries"],
          ["Rental car, land route", "Liberia / LIR", "4.5–5 h", "Arrivals in Liberia"],
          ["Public bus + ferry", "San José", "6–7 h", "Budget travelers"],
          ["Water taxi", "Jacó / Herradura", "≈1 h", "Linking the central Pacific"],
        ],
      },
      { type: "h2", html: "Once you arrive" },
      {
        type: "image",
        src: "blog/getting-to-montezuma/gravel-road-to-the-finca.jpg",
        alt: "Gravel country road between pastures and tall trees with a wooden corral on the left, near Montezuma",
        caption: "Gravel roads like this one lead to the farms and villages we visit on our tours.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Cash:</strong> Montezuma has ATMs but they run dry on busy weekends. Cóbano, 7 km up the hill, has banks.",
          "<strong>Getting around:</strong> the village is walkable. Taxis, ATVs and bicycles cover Cabuya, Cabo Blanco and the waterfall. All of our tours include pickup at hotels in downtown Montezuma.",
          "<strong>Water:</strong> tap water in Montezuma is potable, so bring a refillable bottle. We keep it full on every tour.",
          "<strong>Book tours before you arrive:</strong> small-group tours run on set days. Tell us your dates and we will reply within 24 hours, by <a href=\"" + WHATSAPP + "\">WhatsApp</a> or email.",
        ],
      },
      {
        type: "callout",
        title: "Need help with transfers?",
        html: "We are not a transport company, but we coordinate shuttles for our guests all the time. Mention it in the special requests field when you <a href=\"/tours\">request a tour</a> and we will point you to a reliable operator for your dates.",
      },
    ],
    faq: [
      {
        question: "How long does it take to get from San José to Montezuma?",
        answer:
          "About 5 to 6 hours by shared shuttle including the Puntarenas to Paquera ferry, or about 1 hour 15 minutes if you fly to Tambor and drive the last 40 minutes.",
      },
      {
        question: "Do I need a 4x4 to drive to Montezuma?",
        answer:
          "No. The road from Paquera through Cóbano to Montezuma is paved. A 4x4 is only useful in the green season for the gravel side roads to Cabuya, Cabo Blanco, Santa Teresa and the inland farms.",
      },
      {
        question: "How long is the ferry from Puntarenas to Paquera?",
        answer: "About 70 minutes. Several crossings run each day in both directions; reserve a car space in advance during the high season and check the schedule the day before you travel.",
      },
      {
        question: "Can I get to Montezuma without renting a car?",
        answer:
          "Yes. Most visitors arrive by shared shuttle, flight or public bus and never rent a car. The village is walkable and our tours pick you up at your hotel in downtown Montezuma.",
      },
      {
        question: "Is there an airport in Montezuma?",
        answer: "Not in Montezuma itself. The nearest airstrip is Tambor (TMU), about 40 minutes away by road. Domestic flights connect it with San José in roughly 25 to 30 minutes.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "birdwatching-montezuma-cabuya",
    title: "Birdwatching in Montezuma and Cabuya: What Birds You'll See and When to Go",
    seoTitle: "Birdwatching in Montezuma & Cabuya: Species, Seasons, Tips",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "A local guide's overview of birding on the southern Nicoya Peninsula: the species you can expect around Montezuma and Cabuya, the best months and hours, and what to bring.",
    category: "Wildlife",
    cover: "blog/birdwatching-montezuma-cabuya/cover-birders.jpg",
    coverAlt: "Four birders with a spotting scope and binoculars on a forest trail near Montezuma, Costa Rica",
    quickAnswer:
      "The coast between Montezuma and Cabuya mixes tropical dry forest, mangrove, river mouths and rocky shore, so a single morning can produce 40 to 60 species: motmots, trogons, parakeets, herons, pelicans, frigatebirds, hummingbirds, woodpeckers and, increasingly, Scarlet Macaws. The best hours are 5:30 to 8:30 am. December to April adds northern migrants and clear skies, but birding is good all year.",
    keyFacts: [
      { label: "Typical morning list", value: "40–60 species" },
      { label: "Best hours", value: "5:30 – 8:30 am" },
      { label: "Migrant season", value: "October – April" },
      { label: "Habitats", value: "Dry forest, mangrove, river mouth, beach, farmland" },
      { label: "Our tour", value: "Bird Lover's Morning, Tue/Thu/Fri/Sat, breakfast included" },
    ],
    keywords: ["birdwatching Montezuma", "birding Cabuya Costa Rica", "Nicoya Peninsula birds", "scarlet macaw Montezuma", "turquoise-browed motmot"],
    relatedTours: ["bird-lovers-morning", "curu-nature-escape"],
    blocks: [
      {
        type: "p",
        html: "Costa Rica has more than 900 recorded bird species in a country smaller than West Virginia, and the southern Nicoya Peninsula gives you a surprisingly rich slice of them without driving anywhere. Between the village of Montezuma and the fishing hamlet of Cabuya, 7 km down the coast, you walk through five habitats in a morning. Here is what that means in practice.",
      },
      { type: "h2", html: "What birds can you see around Montezuma?" },
      {
        type: "p",
        html: "These are the species we find on most <a href=\"/tours/bird-lovers-morning\">Bird Lover's Mornings</a>. None of them are guaranteed, which is the point of birding, but all of them are regular residents or seasonal visitors of the area.",
      },
      { type: "h3", html: "Forest edge and gardens" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Turquoise-browed Motmot</strong>, the racket-tailed bird on every postcard, sitting still on low branches.",
          "<strong>Black-headed Trogon</strong> and, in the moister forest near Cabo Blanco, other trogons.",
          "<strong>White-throated Magpie-Jay</strong>, loud, curious and impossible to miss.",
          "<strong>Hoffmann's Woodpecker</strong> and Lineated Woodpecker on dead trunks.",
          "<strong>Orange-fronted Parakeets</strong> and <strong>White-fronted Parrots</strong> in noisy flocks at dawn.",
          "<strong>Long-tailed Manakin</strong>, whose males dance in pairs on a display branch.",
          "<strong>Rufous-naped Wren</strong>, Great Kiskadee, Social Flycatcher, Inca Dove, Groove-billed Ani.",
          "Hummingbirds such as <strong>Cinnamon</strong> and <strong>Steely-vented Hummingbird</strong>, often at flowering trees along the road.",
        ],
      },
      {
        type: "image",
        src: "tours/bird-lovers-morning/hero.jpg",
        alt: "Hummingbird with a glittering green and blue throat perched on a bare branch against a green background",
        caption: "Hummingbirds work the flowering roadside trees from first light.",
      },
      { type: "h3", html: "Beach, tide pools and river mouths" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Brown Pelicans</strong> diving just beyond the breakers and <strong>Magnificent Frigatebirds</strong> cruising overhead.",
          "<strong>Yellow-crowned Night Heron</strong>, <strong>Little Blue Heron</strong>, <strong>Snowy Egret</strong> and Great Egret working the tide pools at Cabuya.",
          "Shorebirds in season: Whimbrel, Spotted Sandpiper, Willet and Ruddy Turnstone.",
          "<strong>Ringed</strong> and <strong>Green Kingfisher</strong> at the river mouths.",
        ],
      },
      { type: "h3", html: "Raptors and the big ones" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Crested Caracara</strong> patrolling pastures and the beach, plus Roadside Hawk, Yellow-headed Caracara and Laughing Falcon.",
          "<strong>Scarlet Macaws</strong>: thanks to decades of release work in the peninsula, pairs now fly over Montezuma and Cabuya regularly. Hearing them before you see them is part of the fun.",
          "<strong>Yellow-naped Parrots</strong>, a threatened species that still holds on in the dry forest of the Nicoya Peninsula.",
        ],
      },
      { type: "h2", html: "When is the best time for birding in Montezuma?" },
      {
        type: "p",
        html: "Any month works, but each season has a flavor. From <strong>October to April</strong> the resident birds are joined by northern migrants: warblers, orioles, tanagers and flycatchers that spend the winter here. December to April is also the dry season, with clear mornings and leafless trees in the dry forest that make spotting easier. From <strong>May to November</strong> the forest is green and loud, many residents are nesting, and you will share the trails with far fewer people. Afternoon showers rarely affect a 5:30 am start.",
      },
      {
        type: "table",
        caption: "Birding calendar for the southern Nicoya Peninsula",
        head: ["Months", "What stands out"],
        rows: [
          ["December – February", "Peak migrants, dry forest leafless, easiest viewing, busiest tourist season"],
          ["March – April", "Flowering trees draw hummingbirds and orioles; hot and dry"],
          ["May – July", "First rains, nesting season, manakins displaying, quiet trails"],
          ["August – November", "Greenest forest, returning migrants from September, lowest visitor numbers"],
        ],
      },
      { type: "h2", html: "Why early morning matters" },
      {
        type: "p",
        html: "Birds feed hardest in the first two hours after sunrise, before the heat sets in. That is why our <a href=\"/tours/bird-lovers-morning\">Bird Lover's Morning</a> starts at 5:30 am: we watch the sun rise over the gulf from Cabuya, work the shore while the herons are still fishing, then move to forest edge as the parakeets start to move. By 8:30 am, when we sit down for a light breakfast, the list is usually long and the day is still young.",
      },
      {
        type: "image",
        src: "photos/bird-lovers-morning-01.jpg",
        alt: "Guests scanning the treetops with a spotting scope and binoculars during a Bird Lover's Morning near Montezuma",
        caption: "JC brings a scope so everyone gets the close-up, even without their own gear.",
      },
      { type: "h2", html: "What to bring (and what we bring)" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Binoculars</strong> if you own them; 8x42 is ideal. If not, don't worry: we carry binoculars and a spotting scope for the group.",
          "<strong>Walking shoes</strong>, a hat, sunblock and repellent. Light neutral colors are better than white or bright red.",
          "<strong>A refillable water bottle</strong>. Montezuma's tap water is safe and we top you up.",
          "<strong>A camera with zoom</strong> if you like; phone photos through the scope work surprisingly well.",
          "Optional swimsuit: the tide pools at Cabuya are tempting once the birding is done.",
        ],
      },
      {
        type: "callout",
        title: "Birding etiquette we follow",
        html: "We keep our distance from nests, never use playback to call birds in, and stay on paths and public roads. Good sightings should cost the birds nothing.",
      },
      { type: "h2", html: "New to birding? This is a good place to start" },
      {
        type: "p",
        html: "You do not need to know a motmot from a magpie-jay to enjoy a morning out. Most of our guests are curious travelers, not life-listers, and we pace the walk for everyone, including children. Experienced birders get a local who knows where the manakins dance and which tree the macaws prefer this month. Either way, you leave with breakfast in your stomach and a list in your pocket.",
      },
    ],
    faq: [
      {
        question: "Do I need my own binoculars for birdwatching in Montezuma?",
        answer: "No. On the Bird Lover's Morning we bring binoculars and a spotting scope for the group. If you own a pair, 8x42 is the most comfortable all-round size.",
      },
      {
        question: "Can I see Scarlet Macaws in Montezuma?",
        answer:
          "Yes. Release programs in the Nicoya Peninsula have brought Scarlet Macaws back to the area, and pairs fly over Montezuma and Cabuya regularly, usually early in the morning and late afternoon.",
      },
      {
        question: "What is the best month for birding on the Nicoya Peninsula?",
        answer:
          "December to March combines resident species with northern migrants and dry, clear mornings. The green season (May to November) is quieter and very good for nesting behavior. Birding is worthwhile in every month.",
      },
      {
        question: "Is the birding tour suitable for children and beginners?",
        answer: "Yes. The Bird Lover's Morning involves easy walking, a scope for close-up views and a light breakfast. Many of our guests are first-time birders.",
      },
      {
        question: "How many bird species can I see in one morning?",
        answer: "A typical three-hour morning around Montezuma and Cabuya produces 40 to 60 species across beach, mangrove, river mouth and dry forest habitats.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "curu-wildlife-refuge-guide",
    title: "Curu Wildlife Refuge: What to Expect, What You'll See and How to Visit from Montezuma",
    seoTitle: "Curu Wildlife Refuge Guide: Wildlife, Trails & Visiting from Montezuma",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Costa Rica's first private wildlife refuge, an hour from Montezuma: monkeys, deer, coatis, macaws and mangrove boardwalks. Trails, what to bring and how our half-day tour works.",
    category: "Wildlife",
    cover: "blog/curu-wildlife-refuge-guide/cover-mangrove-bridge.jpg",
    coverAlt: "JC smiling with two guests on the wooden boardwalk over the mangrove in Curu Wildlife Refuge",
    quickAnswer:
      "Curú National Wildlife Refuge is a privately owned, family-run reserve near Paquera, about an hour's drive from Montezuma. It combines a working farm with tropical dry forest, mangroves and a calm beach, and it is one of the easiest places in Costa Rica to see white-faced capuchins, howler monkeys, white-tailed deer, coatis and Scarlet Macaws on short, flat trails. We visit it on the half-day Curu Nature Escape.",
    keyFacts: [
      { label: "Where", value: "Near Paquera, southern Nicoya Peninsula" },
      { label: "From Montezuma", value: "≈1 hour by road" },
      { label: "Status", value: "Costa Rica's first private national wildlife refuge (1983)" },
      { label: "Hike on our tour", value: "1.5–2.5 km, mostly flat, ends at the beach" },
      { label: "Our tour", value: "Curu Nature Escape, 7:30 am–1 pm, lunch and entrance included" },
    ],
    keywords: ["Curu Wildlife Refuge", "Curu National Wildlife Refuge Costa Rica", "Curu from Montezuma", "Curu monkeys", "Paquera wildlife refuge"],
    relatedTours: ["curu-nature-escape", "bird-lovers-morning"],
    blocks: [
      {
        type: "p",
        html: "Ask a local guide on the peninsula where to take someone who wants to see animals, not just hear about them, and the answer is usually Curú. The refuge is not large and it is not remote, and that is precisely what makes it work: a mosaic of forest, pasture, mangrove and shoreline where wildlife has been protected, and habituated to quiet visitors, for over forty years.",
      },
      { type: "h2", html: "A short history of Curú" },
      {
        type: "p",
        html: "Curú started as a family hacienda in the 1930s. Rather than clear the forest, the family set most of it aside, and in 1983 it became the <strong>first private national wildlife refuge in Costa Rica</strong>. Today it is still family-run: cattle graze on part of the property, researchers and students come for field courses, and a long-running program has helped bring Scarlet Macaws back to the peninsula. Visitor fees go directly into keeping the place as it is.",
      },
      { type: "h2", html: "What animals will you see in Curú?" },
      {
        type: "p",
        html: "No reserve can promise a species, but Curú comes closer than most. On a typical morning we expect:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>White-faced capuchin monkeys</strong>, bold troops that forage at eye level along the main trail.",
          "<strong>Mantled howler monkeys</strong>, usually heard first; their dawn chorus carries for kilometers.",
          "<strong>Spider monkeys</strong>, reintroduced to the refuge and now breeding in the taller forest.",
          "<strong>White-tailed deer</strong> and <strong>agoutis</strong> on the pasture edges, <strong>coatis</strong> and raccoons near the mangrove.",
          "<strong>Scarlet Macaws</strong> flying between the almond trees along the beach.",
          "Iguanas, basilisk lizards, Halloween crabs by the hundred, and more than 200 recorded bird species, from motmots and trogons in the forest to herons, kingfishers and roseate spoonbills in the estuary.",
        ],
      },
      {
        type: "image",
        src: "tours/curu-nature-escape/hero.jpg",
        alt: "A couple with binoculars standing on the wooden bridge over the mangrove estuary in Curu Wildlife Refuge",
        caption: "The mangrove boardwalk is the best spot for kingfishers, herons and crabs at low tide.",
      },
      { type: "h2", html: "The trails and the beach" },
      {
        type: "p",
        html: "Curú has a network of marked trails, from short loops through the mangrove to longer climbs into the hills. On our <a href=\"/tours/curu-nature-escape\">Curu Nature Escape</a> we walk <strong>1.5 to 2.5 km</strong> at a naturalist's pace, which means slowly, with lots of stops to look up. The route is mostly flat and shaded and finishes at Playa Curú, a calm, sheltered bay where you can swim while the capuchins watch from the almond trees. The hike suits children and anyone comfortable walking for an hour or two.",
      },
      {
        type: "image",
        src: "blog/curu-wildlife-refuge-guide/group-on-the-trail.jpg",
        alt: "A group of guests with binoculars and cameras pausing on a shaded forest trail during a guided walk",
        caption: "Small groups move quietly, and quiet groups see more.",
      },
      { type: "h2", html: "How our half-day tour works" },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>7:30 am pickup</strong> at your hotel in downtown Montezuma (other pickup points on request).",
          "About an hour's drive north through Cóbano and the hills toward Paquera, with a stop or two for whatever shows up on the way: coatis, hawks, a view over the gulf.",
          "<strong>Guided walk in the refuge</strong> with binoculars and scope, then free time to swim at the beach.",
          "<strong>Typical Costa Rican lunch</strong> at a local restaurant: a casado with rice, beans, salad and your choice of chicken, fish or a vegetarian option.",
          "Back in Montezuma around <strong>1 pm</strong>, with the afternoon free.",
        ],
      },
      {
        type: "p",
        html: "Entrance fee, equipment, guide, lunch and transportation from downtown Montezuma are all included. The tour runs on Tuesdays, Thursdays, Fridays and Saturdays, and we can arrange private departures on other days.",
      },
      { type: "h2", html: "Can you visit Curú on your own?" },
      {
        type: "p",
        html: "Yes. The refuge is open to independent visitors who pay the entrance fee at the gate, and the main trails are well marked. What a guide adds is the wildlife itself: knowing which fig tree is fruiting this week, hearing the manakin before it moves, spotting the sleeping night heron that everyone else walks past, and explaining what you are looking at. Guests who have visited both ways tell us the difference is roughly three times the sightings.",
      },
      {
        type: "image",
        src: "blog/curu-wildlife-refuge-guide/estuary-mouth.jpg",
        alt: "Trees arching over a calm estuary that opens onto the sea under a blue sky",
        caption: "Where the estuary meets the bay: look for kingfishers on the low branches.",
      },
      { type: "h2", html: "What to bring" },
      {
        type: "list",
        ordered: false,
        items: [
          "Closed shoes or sturdy sandals; the trail is flat but rooty.",
          "A refillable water bottle (we keep it full), sunblock and insect repellent for the mangrove section.",
          "Swimsuit and a small towel for the beach.",
          "Camera. The capuchins are close enough for a phone.",
        ],
      },
      {
        type: "callout",
        title: "Combine it",
        html: "Guests who love Curú often book the <a href=\"/tours/bird-lovers-morning\">Bird Lover's Morning</a> on another day: same guide, different habitats, and a very different list by the end of the week.",
      },
    ],
    faq: [
      {
        question: "How far is Curu Wildlife Refuge from Montezuma?",
        answer: "About an hour by road, heading north through Cóbano toward Paquera. Our Curu Nature Escape includes the transportation from hotels in downtown Montezuma.",
      },
      {
        question: "What animals can you see at Curu?",
        answer:
          "White-faced capuchin and howler monkeys are seen on almost every visit, along with white-tailed deer, coatis, agoutis, iguanas, Halloween crabs and Scarlet Macaws. Spider monkeys were reintroduced and are now breeding in the refuge.",
      },
      {
        question: "Is Curu suitable for children?",
        answer: "Yes. The trail we walk is 1.5 to 2.5 km, mostly flat and shaded, and it ends at a calm beach. The tour is one of our most popular with families.",
      },
      {
        question: "What is included in the Curu Nature Escape?",
        answer: "Entrance fee, guide, binoculars and scope, a typical Costa Rican lunch and transportation from downtown Montezuma. The tour runs 7:30 am to about 1 pm on Tuesdays, Thursdays, Fridays and Saturdays.",
      },
      {
        question: "Can I visit Curu Wildlife Refuge without a guide?",
        answer: "Yes, the refuge admits independent visitors at the gate. A guide is not required, but guided groups consistently see far more wildlife and learn what they are looking at.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "night-hike-montezuma-nocturno",
    title: "What Do You See on a Night Hike in Montezuma? Inside the Nocturno Night Journey",
    seoTitle: "Night Hike in Montezuma: What You See on the Nocturno Night Journey",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Red-eyed tree frogs, geckos, tarantulas, sleeping birds and glowing scorpions: what a guided night hike near Montezuma is really like, who it suits and what to bring.",
    category: "Tours",
    cover: "tours/nocturno-night-journey/hero.jpg",
    coverAlt: "Red-eyed tree frog with bright red eyes and orange feet sitting on a large green leaf at night",
    quickAnswer:
      "On a guided night hike near Montezuma you walk a forest trail for about two hours after sunset with headlamps and a guide who knows where to look. Typical sightings include red-eyed tree frogs, banded geckos, tarantulas, scorpions glowing under UV light, walking sticks, sleeping birds, kinkajous and armadillos. The pace is slow and the distance short, but the trail is uneven, so it is our only tour not recommended for small children.",
    keyFacts: [
      { label: "When", value: "After sunset, about 2 hours" },
      { label: "Pace", value: "Slow and quiet; short distance on an uneven trail" },
      { label: "Likely sightings", value: "Tree frogs, geckos, tarantulas, scorpions, insects, sleeping birds" },
      { label: "Possible", value: "Kinkajou, armadillo, owls, snakes (from a distance)" },
      { label: "Age", value: "Not recommended for small children" },
    ],
    keywords: ["night hike Montezuma", "Montezuma night tour", "red-eyed tree frog Costa Rica", "Nocturno Montezuma", "nocturnal animals Costa Rica"],
    relatedTours: ["nocturno-night-journey", "curu-nature-escape"],
    blocks: [
      {
        type: "p",
        html: "Most of the animals in a tropical forest are active after dark. Walk the same trail at 10 am and at 7 pm and you meet two different forests: the daytime one belongs to birds, monkeys and butterflies; the night one belongs to frogs, geckos, spiders, insects and shy mammals that nobody sees from a hammock. The Nocturno Night Journey is our way of showing you the second forest, slowly and safely.",
      },
      { type: "h2", html: "What you are likely to see" },
      { type: "h3", html: "Frogs" },
      {
        type: "p",
        html: "The star is the <strong>red-eyed tree frog</strong>, which spends the day folded flat and green on the underside of a leaf and comes out at night to hunt and call. In the green season (May to November) we find them on most hikes, often with eggs on the leaves above a pond. Other regulars are the small hourglass tree frogs and the big, patient leaf-litter frogs that freeze in the beam of the light.",
      },
      {
        type: "image",
        src: "tours/nocturno-night-journey/02.jpg",
        alt: "Red-eyed tree frog clinging to a thin branch at night, lit by a headlamp",
        caption: "Red light first, white light briefly: frogs' eyes are sensitive, and we photograph them gently.",
      },
      { type: "h3", html: "Reptiles" },
      {
        type: "p",
        html: "<strong>Central American banded geckos</strong>, with their eyelids and leopard-like pattern, hunt on the leaf litter after dark. Anoles and basilisks sleep on the tips of thin branches where a snake would shake them awake, which makes them easy to find with a light. Snakes themselves are an occasional sighting: cat-eyed snakes, a boa digesting on a branch. We look from a respectful distance and never handle anything.",
      },
      {
        type: "image",
        src: "tours/nocturno-night-journey/01.jpg",
        alt: "Central American banded gecko with dark and cream bands walking over dry leaves at night",
        caption: "A banded gecko on the hunt. Unlike house geckos, it has movable eyelids.",
      },
      { type: "h3", html: "Invertebrates, the real night shift" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Tarantulas</strong> waiting at the mouths of their burrows, usually the orange-kneed zebra tarantula of the dry forest.",
          "<strong>Scorpions</strong> that glow blue-green under the UV flashlight we carry. Finding one on a tree you just walked past is a highlight for most guests.",
          "<strong>Walking sticks, katydids and leaf-mimic insects</strong> that are invisible by day.",
          "<strong>Leaf-cutter ants</strong> in full procession, and whip spiders, harmless and strange, flat against the trunks.",
          "Fireflies and click beetles when the first rains arrive.",
        ],
      },
      { type: "h3", html: "Mammals and birds" },
      {
        type: "p",
        html: "With luck and silence: a <strong>kinkajou</strong> working a fruiting tree, an <strong>armadillo</strong> snuffling through the leaf litter, an opossum, the eyeshine of a raccoon. Bats patrol the gaps in the canopy. Birds sleep in the open, so a flashlight can find a motmot, a manakin or a trogon roosting a meter from the trail, and the Pacific Screech-Owl and Common Pauraque call throughout the night.",
      },
      { type: "h2", html: "How the hike works" },
      {
        type: "p",
        html: "We pick you up in downtown Montezuma around sunset and drive a few minutes to the trailhead. The walk itself is <strong>short and slow</strong>: distance is not the point, looking is. We carry headlamps, a UV light and a spotting light, and we spend about two hours on the trail. There are no steep climbs, but the surface is natural forest floor with roots, rocks and the occasional stream crossing, which is why we ask for closed shoes and why we do not recommend it for small children or anyone carrying one.",
      },
      {
        type: "image",
        src: "blog/night-hike-montezuma-nocturno/dusk-over-the-pacific.jpg",
        alt: "Deep orange sunset over the Pacific Ocean with the last sliver of sun on the horizon",
        caption: "The hike starts as the sun goes down and the forest changes shifts.",
      },
      { type: "h2", html: "Dry season or green season?" },
      {
        type: "p",
        html: "Both are good, for different reasons. The <strong>green season</strong> brings the frogs out in numbers and fills the forest with sound; a hike an hour after a shower is the best amphibian night of the year. The <strong>dry season</strong> gives a drier trail, clearer skies for stars on the drive back, and easier views of sleeping birds in the leafless trees. Insects, geckos and scorpions are there year-round.",
      },
      { type: "h2", html: "What to bring" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Closed shoes</strong> with grip. Not sandals.",
          "<strong>Long, light pants</strong> and a light long-sleeved shirt: better than repellent against mosquitoes and brushes with vegetation.",
          "<strong>Insect repellent</strong> for exposed skin anyway.",
          "<strong>A refillable water bottle.</strong> Nights are warm.",
          "Your own <strong>headlamp</strong> if you have one; we bring lights for everyone, but hands-free is nicer.",
          "A camera or phone. Night photos work best with the guide's light, not your flash.",
        ],
      },
      {
        type: "callout",
        title: "Our rules on the trail",
        html: "We do not touch, catch or move animals, we keep white light on frogs short, we stay on the path and we keep voices low. The forest rewards it: the quieter the group, the longer the list.",
      },
      {
        type: "p",
        html: "Ready to meet the night shift? See times and request a date on the <a href=\"/tours/nocturno-night-journey\">Nocturno Night Journey</a> page, or <a href=\"" + WHATSAPP + "\">WhatsApp us</a> with your travel dates.",
      },
    ],
    faq: [
      {
        question: "Is a night hike in Montezuma safe?",
        answer:
          "Yes, with a guide. We walk a known trail at a slow pace with proper lights, keep distance from any snake and never handle wildlife. The main risk is a stumble on roots, which is why closed shoes are required.",
      },
      {
        question: "Will we see snakes on the night hike?",
        answer: "Sometimes. Cat-eyed snakes and boas are occasional sightings, always observed from a distance. Most nights the list is dominated by frogs, geckos, insects, spiders and sleeping birds.",
      },
      {
        question: "What is the minimum age for the Nocturno Night Journey?",
        answer:
          "We do not recommend it for small children. Some children under 12 have done the hike comfortably, but the uneven trail in the dark can be challenging for inexperienced walkers and unsafe for anyone carrying a child. All our other tours are suitable for young children.",
      },
      {
        question: "What happens if it rains?",
        answer: "Light rain is good news for frogs and we go ahead. In heavy rain or lightning we reschedule to the next available evening or refund if that is not possible.",
      },
      {
        question: "How long is the night hike and what time does it start?",
        answer: "About two hours on the trail, starting with a pickup in downtown Montezuma around sunset. The exact time changes with the season; we confirm it when you book.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "best-time-to-visit-montezuma",
    title: "Best Time to Visit Montezuma, Costa Rica: Dry Season vs Green Season, Month by Month",
    seoTitle: "Best Time to Visit Montezuma, Costa Rica (Month by Month)",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Dry season or green season? Weather, crowds, prices, wildlife and what each month is like in Montezuma, from a guide who lives here year-round.",
    category: "Planning",
    cover: "blog/best-time-to-visit-montezuma/cover-beach-sunset.jpg",
    coverAlt: "Orange sunset over the Pacific with swimmers in the shallow waves on a beach near Montezuma",
    quickAnswer:
      "Montezuma is warm all year (24 to 33 °C). The dry season, December to April, brings sunny days, dusty roads and the most visitors. The green season, May to November, brings sunny mornings, afternoon showers, full waterfalls and far fewer people, with September and October the wettest months. For most travelers the sweet spots are January to March for guaranteed sun and May to July or November for green forest and quiet trails.",
    keyFacts: [
      { label: "Dry season", value: "December – April" },
      { label: "Green season", value: "May – November (wettest Sept–Oct)" },
      { label: "Temperature", value: "24–33 °C (75–91 °F) year-round; sea ≈28 °C" },
      { label: "Busiest", value: "Christmas–New Year, Easter week, February–March" },
      { label: "Quietest", value: "September – October" },
    ],
    keywords: ["best time to visit Montezuma", "Montezuma weather", "Costa Rica green season", "Nicoya Peninsula dry season", "when to go to Montezuma"],
    relatedTours: ["bird-lovers-morning", "nocturno-night-journey", "curu-nature-escape"],
    blocks: [
      {
        type: "p",
        html: "There is no bad month to visit Montezuma, but there are different months, and knowing the difference saves you from packing for the wrong trip. The southern Nicoya Peninsula has the classic Pacific climate of Costa Rica: a dry season with almost no rain and a green season with wet afternoons, both of them hot. Here is what that means on the ground, month by month, from someone who guides here in all twelve.",
      },
      { type: "h2", html: "Dry season: December to April" },
      {
        type: "p",
        html: "From mid-December the rain stops almost completely. Days are bright, the sea is calm in the mornings, and by February the dry forest drops its leaves, which makes the hills look golden and makes <a href=\"/blog/birdwatching-montezuma-cabuya\">birdwatching</a> easier. March and April are the hottest months, with the yellow cortez and pink roble trees flowering along the roads. This is also when the northern migrant birds are here and when the night skies are clearest.",
      },
      {
        type: "image",
        src: "blog/best-time-to-visit-montezuma/dry-season-coastline.jpg",
        alt: "Turquoise sea breaking on a rocky point with a forested coastline and sandy beach under a clear blue sky",
        caption: "Dry-season water on the coast south of Montezuma: calm mornings, clear and warm.",
      },
      {
        type: "p",
        html: "The trade-offs: it is <strong>high season</strong>. Christmas to New Year and Easter week (Semana Santa) are the busiest days of the year, hotels and shuttles fill up, and prices are at their peak. The roads are dusty and the smaller waterfalls slow to a trickle by April. Book tours and transfers well ahead if you are coming between December and March.",
      },
      { type: "h2", html: "Green season: May to November" },
      {
        type: "p",
        html: "The first rains in May transform the peninsula within two weeks. The forest turns deep green, rivers run clear again, mushrooms appear on the trails and the frogs come out at night. The typical green-season day is <strong>sunny until early afternoon</strong>, a shower of one to two hours, and a clear, cooler evening. Our tours start early precisely to use the best part of the day.",
      },
      {
        type: "image",
        src: "blog/best-time-to-visit-montezuma/green-season-river.jpg",
        alt: "Clear green river flowing over smooth rock ledges under overhanging trees in the green season",
        caption: "By June the rivers around Montezuma run clear and full again.",
      },
      {
        type: "p",
        html: "<strong>September and October</strong> are the wettest months, when some rain days last all afternoon and a few businesses close for holidays. In exchange you get the greenest landscape of the year, the fullest Montezuma waterfall, humpback whales passing through the gulf, and trails you share with nobody. <strong>November</strong> is a local favorite: the rain tapers off, everything is still green and the high-season crowds have not arrived.",
      },
      {
        type: "image",
        src: "blog/best-time-to-visit-montezuma/forest-trail.jpg",
        alt: "Shaded forest trail framed by dense green foliage with tall pale trunks in the background",
        caption: "Green-season trails: shaded, quiet and loud with birds.",
      },
      { type: "h2", html: "Month by month in Montezuma" },
      {
        type: "table",
        caption: "What to expect each month (typical conditions; every year varies)",
        head: ["Month", "Weather", "Crowds", "Highlights"],
        rows: [
          ["January", "Dry, sunny, breezy", "High", "Migrant birds, calm sea, clear nights"],
          ["February", "Dry, sunny", "High", "Leafless dry forest, easiest wildlife viewing"],
          ["March", "Dry, hottest", "High (Easter varies)", "Flowering trees, hummingbirds, long beach days"],
          ["April", "Dry, hot, first clouds late month", "Medium–high", "Last dry-season weeks, Easter week very busy"],
          ["May", "First rains, afternoon showers", "Low", "Forest turns green, frogs return, mushrooms"],
          ["June", "Sunny mornings, showers", "Low", "Rivers clear, nesting birds, manakins displaying"],
          ["July", "Short drier spell mid-month", "Medium (holidays)", "Good all-round month, whales begin"],
          ["August", "Sunny mornings, showers", "Medium", "Lush forest, waterfall full, whales"],
          ["September", "Wettest, some full rain days", "Lowest", "Quietest trails, whales, lowest prices"],
          ["October", "Wettest", "Lowest", "Greenest month; some businesses close"],
          ["November", "Rain tapering off", "Low–medium", "Green and quiet, migrants arriving, best value"],
          ["December", "Dry from mid-month", "High from 20 Dec", "Holiday season starts, sunny days return"],
        ],
      },
      { type: "h2", html: "Best time by what you want to do" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Guaranteed sun and beach days:</strong> January to March.",
          "<strong>Birdwatching:</strong> December to March for migrants and visibility; any month is productive at dawn.",
          "<strong>Frogs and night hikes:</strong> May to November, especially the hour after a shower. See our <a href=\"/blog/night-hike-montezuma-nocturno\">night hike guide</a>.",
          "<strong>Waterfalls and rivers:</strong> June to November.",
          "<strong>Fewest people, lowest prices:</strong> September and October, with November close behind.",
          "<strong>Families on school holidays:</strong> late June to July has a short drier spell and a friendly mix of locals and visitors.",
        ],
      },
      {
        type: "image",
        src: "blog/best-time-to-visit-montezuma/gulf-sunset-swim.jpg",
        alt: "People swimming in the calm Gulf of Nicoya at sunset with hills silhouetted on the horizon",
        caption: "The Gulf of Nicoya side stays calm for swimming in every season.",
      },
      { type: "h2", html: "What to pack for each season" },
      {
        type: "p",
        html: "Dry season: sunblock, a hat, light clothes and something for breezy evenings in January. Green season: a light rain jacket or poncho, quick-dry clothes, closed shoes for muddy trails and a dry bag for your phone. Both seasons: a refillable water bottle (Montezuma's water is potable), insect repellent and binoculars if you have them. Whatever month you choose, book early for December to March and tell us your dates; we will confirm within 24 hours by <a href=\"" + WHATSAPP + "\">WhatsApp</a> or email.",
      },
    ],
    faq: [
      {
        question: "Does it rain all day in Montezuma during the green season?",
        answer:
          "Rarely. From May to August the typical day is sunny until early afternoon, followed by a shower of one to two hours. September and October are wetter and can bring some full rain days. Our tours start early to use the best part of the day.",
      },
      {
        question: "What is the hottest month in Montezuma?",
        answer: "March and April, at the end of the dry season, with afternoon highs around 33 °C (91 °F). The sea breeze keeps the coast more comfortable than inland Guanacaste.",
      },
      {
        question: "When is Montezuma least crowded?",
        answer: "September and October, followed by May, June and November. Christmas to New Year, Easter week and February to March are the busiest periods.",
      },
      {
        question: "Is September or October a bad time to visit Montezuma?",
        answer:
          "Not if you like green forest, full waterfalls, whales and empty trails. Expect more rain, usually in the afternoon, and check that your hotel and preferred restaurants are open, since a few close for holidays in October.",
      },
      {
        question: "How far in advance should I book tours in Montezuma?",
        answer: "We appreciate 48 hours' notice for any tour. Between December and April, and especially over Christmas and Easter, book before you arrive; small-group tours run on fixed days and fill up.",
      },
    ],
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: "lets-get-local-family-farm",
    title: "A Morning on a Costa Rican Family Farm: What to Expect on Let's Get Local",
    seoTitle: "Costa Rican Family Farm Visit near Montezuma: Let's Get Local",
    date: "2026-11-03",
    updated: "2026-11-03",
    excerpt:
      "Coffee brewed in a cloth filter, sugar cane pressed by hand, oxen, chickens and a meal you help cook: a visit to Finca Los Tres Higuerones, a working family farm near Montezuma.",
    category: "Culture",
    cover: "tours/lets-get-local/hero.jpg",
    coverAlt: "Guests sharing a farm breakfast of gallo pinto, eggs and coffee at a long wooden table at Finca Los Tres Higuerones",
    quickAnswer:
      "Let's Get Local is a three-hour morning visit to Finca Los Tres Higuerones, a working family farm a short drive from Montezuma. You brew coffee the traditional way, press sugar cane juice by hand, meet the dairy cows, oxen and poultry, see how the family makes organic soap, and help prepare a light meal. It runs 8 to 11 am on Tuesdays, Thursdays, Fridays and Saturdays and suits all ages.",
    keyFacts: [
      { label: "Where", value: "Finca Los Tres Higuerones, a short drive from Montezuma" },
      { label: "When", value: "8:00 – 11:00 am · Tue, Thu, Fri, Sat" },
      { label: "Includes", value: "Coffee, light meal, guide, transportation from downtown Montezuma" },
      { label: "Activity level", value: "Easy; suitable for all ages" },
      { label: "Good to know", value: "48 h advance notice appreciated · small cash for farm products" },
    ],
    keywords: ["Costa Rica family farm tour", "Montezuma cultural tour", "trapiche sugar cane Costa Rica", "chorreador coffee", "Finca Los Tres Higuerones"],
    relatedTours: ["lets-get-local", "curu-nature-escape"],
    blocks: [
      {
        type: "p",
        html: "Some of the best mornings we have ever had while traveling happened at someone's kitchen table. That is the idea behind Let's Get Local: instead of watching rural Costa Rica through a van window, you spend a morning inside it, with a family that has worked the same land for generations and is happy to put you to work too.",
      },
      { type: "h2", html: "The farm" },
      {
        type: "p",
        html: "<strong>Finca Los Tres Higuerones</strong> is named after the three big fig trees on the property. It is a working farm, not a show: there are dairy cows to milk, a team of oxen, a yard of chickens and ducks, fruit trees, a vegetable garden and a small workshop where the family makes soap from the farm's own ingredients. A short drive from Montezuma on gravel roads, it feels a long way from the beach.",
      },
      {
        type: "image",
        src: "tours/lets-get-local/13.jpg",
        alt: "Guests meeting a pair of yoked oxen under a shelter at Finca Los Tres Higuerones",
        caption: "The oxen still work. Costa Rica's ox-herding tradition is recognized by UNESCO as intangible cultural heritage.",
      },
      { type: "h2", html: "What you actually do" },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Coffee, the old way.</strong> Water heated over the wood stove and poured through a <em>chorreador</em>, the cloth filter on a wooden stand that every Costa Rican grandmother owns. You will taste the difference.",
          "<strong>Press sugar cane.</strong> The farm keeps a hand-cranked <em>trapiche</em>. You feed the cane, turn the press and drink the juice, with a squeeze of lime, exactly as farm workers have for a century.",
          "<strong>Meet the animals.</strong> Cows, oxen, chickens, ducks and whatever has hatched that week. Children usually disappear at this point.",
          "<strong>See how organic soap is made</strong> and why the family chose to farm without chemicals.",
          "<strong>Help cook a light meal.</strong> A cooking demonstration in the family kitchen, typically homemade cheese empanadas and seasonal fruit (the menu shifts with the season), eaten together under the shelter.",
        ],
      },
      {
        type: "image",
        src: "tours/lets-get-local/08.jpg",
        alt: "The family setting out breakfast plates on a long wooden table under the open-sided shelter at the farm",
        caption: "Breakfast is served where it is cooked.",
      },
      { type: "h2", html: "Who it is for" },
      {
        type: "p",
        html: "Everyone, honestly. The walking is minimal and on flat ground, there is shade, and every activity has a version a four-year-old and an eighty-year-old can both enjoy. Families tell us it is the morning their kids talk about most. Solo travelers and couples tell us it is the closest they got to real conversation with Costa Ricans on their trip. JC translates, but a surprising amount gets communicated over a trapiche without words.",
      },
      {
        type: "image",
        src: "tours/lets-get-local/05.jpg",
        alt: "A family with two young children sitting on a wooden bench holding a puppy under the trees at the farm",
        caption: "Farm visits are our most family-friendly morning.",
      },
      { type: "h2", html: "Why it matters" },
      {
        type: "p",
        html: "Every visit pays the family directly for their time, their food and their knowledge. That income helps keep a small farm viable in a region where land is increasingly sold for development, and it keeps traditions alive: the chorreador, the trapiche, the oxen, cooking from what the yard produces. You also buy nothing you do not want to. If the family has soap, honey or produce available, you can purchase it with small change; if not, you simply had a very good breakfast.",
      },
      { type: "h2", html: "The Cabuya version" },
      {
        type: "p",
        html: "If you prefer the coast, we offer a <strong>Cabuya version</strong> of Let's Get Local: the fishing village south of Montezuma, its cemetery island reachable on foot at low tide, a local marmalade producer and a slow morning of meeting people. Same minimal walking, same three hours, a different flavor of local life. Tell us which one you prefer when you request a quote.",
      },
      {
        type: "image",
        src: "blog/lets-get-local-family-farm/river-crossing.jpg",
        alt: "Shallow, clear river with a gravel bank, palms and a large tree on the far side on the back roads near Montezuma",
        caption: "The back roads to the farms cross shallow rivers like this one.",
      },
      { type: "h2", html: "Practical details" },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>Time:</strong> 8:00 to 11:00 am on Tuesdays, Thursdays, Fridays and Saturdays. We appreciate 48 hours' notice so the family can prepare.",
          "<strong>Included:</strong> coffee, light meal, guide, equipment and transportation from hotels in downtown Montezuma.",
          "<strong>Bring:</strong> water bottle, camera, sunblock, repellent and a little cash if you would like to buy farm products.",
          "<strong>Dietary needs:</strong> tell us when you book; the family is used to vegetarian guests and can usually adapt.",
        ],
      },
      {
        type: "callout",
        title: "Make a day of it",
        html: "Let's Get Local finishes at 11 am, which leaves the afternoon for the beach or the waterfall, and the evening for the <a href=\"/tours/nocturno-night-journey\">Nocturno Night Journey</a>. Request dates on the <a href=\"/tours/lets-get-local\">tour page</a> or by <a href=\"" + WHATSAPP + "\">WhatsApp</a>.",
      },
    ],
    faq: [
      {
        question: "Is the farm visit suitable for small children?",
        answer: "Yes. Let's Get Local involves minimal walking on flat ground and hands-on activities such as pressing sugar cane and meeting the animals. It is our most family-friendly tour.",
      },
      {
        question: "What food is included on Let's Get Local?",
        answer:
          "Traditionally brewed coffee, fresh sugar cane juice and a light meal prepared with the family, usually homemade cheese empanadas and seasonal fruit. The menu can vary with the season, and vegetarian guests are easily accommodated.",
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "No. JC guides in English and Spanish and translates throughout. Many guests find that a lot gets communicated over coffee and a trapiche without needing words.",
      },
      {
        question: "How much walking is involved?",
        answer: "Very little. The activities take place around the farmhouse and yard on flat ground with shade, which makes the tour comfortable for all ages and mobility levels.",
      },
      {
        question: "Can I buy products from the farm?",
        answer: "When available, yes: organic soap, honey or produce, paid directly to the family. Bring small change. There is no obligation to buy anything.",
      },
    ],
  },
];

// -----------------------------------------------------------------------------------------------
// Helpers

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Newest `updated` first; posts with the same date keep their order in the array (first = featured). */
export function sortedPosts() {
  return posts
    .map((post, index) => ({ post, index }))
    .sort((a, b) => (a.post.updated === b.post.updated ? a.index - b.index : a.post.updated < b.post.updated ? 1 : -1))
    .map(({ post }) => post);
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

/** Stable id for a heading, used for the table of contents and anchor links. */
export function headingId(html: string) {
  return stripHtml(html)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function postHeadings(post: BlogPost) {
  return post.blocks.flatMap((b) => (b.type === "h2" ? [{ id: headingId(b.html), text: stripHtml(b.html) }] : []));
}

function blockText(block: PostBlock): string {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
    case "quote":
      return stripHtml(block.html);
    case "callout":
      return `${block.title ?? ""} ${stripHtml(block.html)}`;
    case "list":
      return block.items.map(stripHtml).join(" ");
    case "table":
      return [block.caption ?? "", ...block.head, ...block.rows.flat()].join(" ");
    case "image":
      return block.caption ?? "";
    default:
      return "";
  }
}

export function postWordCount(post: BlogPost) {
  const text = [post.quickAnswer, ...post.blocks.map(blockText), ...post.faq.map((f) => `${f.question} ${f.answer}`)].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingTimeMinutes(post: BlogPost) {
  return Math.max(1, Math.round(postWordCount(post) / 220));
}
