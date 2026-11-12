export interface TourImage {
  /** Path relative to /public/images */
  src: string;
  alt: string;
  caption?: string;
}

export type TourStatus = "available" | "coming-soon";

export interface Tour {
  slug: string;
  name: string;
  /** Short name used in tight spaces (cards, select options). */
  shortName: string;
  tagline: string;
  /** One or two sentences for cards and listings. */
  summary: string;
  /** Full description, one entry per paragraph. */
  description: string[];
  when: string;
  where: string;
  whatToBring: string[];
  whatsIncluded: string[];
  notes: string[];
  hero: TourImage;
  gallery: TourImage[];
  status: TourStatus;
  suitableForSmallChildren: boolean;
  /** Optional embedded video (Vimeo or YouTube embed URL). */
  video?: { embedUrl: string; title: string };
  /** Approximate duration in ISO 8601 for structured data, e.g. "PT3H". */
  duration?: string;
}

/** Notes that apply to every tour (from the current site). */
export const commonTourNotes = [
  "Price is based on pick up at your hotel or Airbnb in the southern Nicoya Peninsula. Price will vary for pick ups outside this area.",
  "We recommend bringing a refillable water bottle or canteen to help reduce plastic waste.",
];

export const tours: Tour[] = [
  {
    slug: "nocturno-night-journey",
    name: "Nocturno Night Journey",
    shortName: "Nocturno",
    tagline: "The forest comes alive at night.",
    summary:
      "A guided night journey through the amazing forest of the Río Bonito Reserve, when nocturnal animals wake up and the sounds of the wild amplify.",
    description: [
      "Why take a night hike through the darkness with little more than a flashlight and water bottle? Because the forest comes alive at night. As day turns to dusk the sounds of surrounding wildlife amplify alerting you to the fact that there is far more to see than that which is visible during normal waking hours. Nocturnal animals fill the forest and awaken to begin searching for food, making them much more likely to be spotted when trekking around after the sun has set.",
      "The walk itself is short and slow, guided along the trails of the amazing forest of the Río Bonito Reserve. With headlamps and an ultraviolet light we look for red-eyed tree frogs, banded geckos, tarantulas at the mouths of their burrows, scorpions that glow blue under the UV beam, walking sticks and leaf-mimic insects, birds asleep on the branches and, with luck and silence, a kinkajou or an armadillo. Expect about two hours on the trail and a very different forest from the one you walked by day.",
    ],
    when: "Starts around sunset and lasts about 2 hours. Any evening, on request; we confirm the exact start time with the season.",
    where: "Río Bonito Reserve",
    whatToBring: ["Closed shoes", "Long, light pants", "Insect Repellent", "Water*", "Headlamp (optional, we bring lights)", "Camera (optional)"],
    whatsIncluded: ["Guide", "Headlamps and UV light", "Transportation*"],
    notes: [
      "This is the only tour not recommended for small children. While some children under the age of 12 have taken the hike, it may be challenging for some inexperienced hikers and/or unsafe if carrying a child.",
      "Light rain is good news for frogs and we go ahead. In heavy rain or lightning we reschedule to the next available evening, or refund if that is not possible.",
    ],
    hero: { src: "tours/nocturno-night-journey/hero.jpg", alt: "Red-eyed tree frog with bright red eyes and orange feet on a green leaf, seen on the Nocturno night journey in the Río Bonito Reserve" },
    gallery: [
      { src: "tours/nocturno-night-journey/frog.jpg", alt: "Tree frog seen on the Nocturno night hike", caption: "Tree Frog – Nocturno" },
      { src: "tours/nocturno-night-journey/mushroom.jpg", alt: "Mushrooms growing on the forest floor at night", caption: "Mushrooms after the first rains" },
      { src: "tours/nocturno-night-journey/bird.jpg", alt: "Bird roosting at night spotted with a flashlight", caption: "Night bird sighting" },
    ],
    status: "available",
    suitableForSmallChildren: false,
    duration: "PT2H",
  },
  {
    slug: "bird-lovers-morning",
    name: "Bird Lover's Morning",
    shortName: "Bird Lover's Morning",
    tagline: "Sunrise over the Nicoya Gulf and some of Costa Rica's most beautiful birds.",
    summary:
      "If you love birds, you've come to the right place. Take a morning to see some of Costa Rica's most beautiful birds and let the guide do the hard work.",
    description: [
      "If you love birds, you've come to the right place. Take a morning to witness the golden sun rise over the Nicoya Gulf and see some of Costa Rica's most beautiful birds. With professional equipment, a trained eye (and ear) and a little patience, we'll help you spot common birds in the area and maybe even capture that essential photo to take home. Conclude your early morning outing with a light breakfast, included with this journey.",
    ],
    when: "5:30am-10:00am. Any day, on request.",
    where: "JC's special birding spots in the Peninsula",
    whatToBring: ["Binoculars or Scope (optional)", "Walking Shoes", "Water*", "Sunblock", "Insect Repellent", "Swimsuit (optional)"],
    whatsIncluded: ["Equipment", "Light Breakfast", "Guide", "Transportation*"],
    notes: [],
    hero: { src: "tours/bird-lovers-morning/hero.jpg", alt: "Crested caracara perched at sunrise on the Nicoya Peninsula" },
    gallery: [
      { src: "tours/bird-lovers-morning/sunrise-cabuya.jpg", alt: "Sunrise over the Nicoya Gulf from Cabuya", caption: "Bird Lover's Morning – Sunrise" },
      { src: "tours/bird-lovers-morning/woodpecker.jpg", alt: "Woodpecker spotted during the Bird Lover's Morning", caption: "Bird Lover's Morning – Bird Sighting" },
      { src: "tours/bird-lovers-morning/sighting-1.jpg", alt: "Guests looking through a scope at shorebirds", caption: "Bird Lover's Morning – Bird Sightings" },
      { src: "tours/bird-lovers-morning/sighting-2.jpg", alt: "Colorful bird photographed through the scope", caption: "Bird Lover's Morning – Bird Sightings" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    duration: "PT4H30M",
  },
  {
    slug: "curu-nature-escape",
    name: "Curu Nature Escape",
    shortName: "Curu Nature Escape",
    tagline: "Animals, nature and more on a half day journey to Curu Wildlife Refuge.",
    summary:
      "Animals, nature, and more on this half day journey to Curu Wildlife Refuge. Learn about the nature that surrounds you in this unique ecosystem.",
    description: [
      "Animals, nature, and more on this half day journey to Curu Wildlife Refuge. Learn about the nature that surrounds you in this unique ecosystem while spotting wildlife and concluding a 1.5-2.5K hike at a picturesque beach. Make a few additional fun stops along the way and top it off with a delicious typical Costa Rican lunch.",
    ],
    when: "6:30am-12pm. Any day, on request.",
    where: "Curu Wildlife Refuge",
    whatToBring: ["Water*", "Closed Shoes (Recommended)", "Insect Repellent", "Sunblock", "Camera"],
    whatsIncluded: ["Entrance Fee", "Equipment", "Guide", "Lunch", "Transportation*"],
    notes: [],
    hero: { src: "tours/curu-nature-escape/hero.jpg", alt: "White-faced capuchin monkey in Curu Wildlife Refuge" },
    gallery: [
      { src: "tours/curu-nature-escape/bridge.jpg", alt: "Wooden bridge over the mangrove in Curu Wildlife Refuge", caption: "Curu Wildlife Refuge" },
      { src: "tours/curu-nature-escape/beach.jpg", alt: "Quiet beach at the end of the Curu trail", caption: "Curu Wildlife Refuge" },
      { src: "tours/curu-nature-escape/halloween-crab.jpg", alt: "Halloween crab on the forest floor in Curu", caption: "Curu Wildlife Refuge" },
      { src: "tours/curu-nature-escape/fishing-village.jpg", alt: "Fishing boats in the village near Curu", caption: "Fishing Village Near Curu" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    duration: "PT5H30M",
  },
  {
    slug: "lets-get-local",
    name: "Let's Get Local",
    shortName: "Let's Get Local",
    tagline: "A hands-on morning of rural living at Finca Los Tres Higuerones, a working family farm on the southern Nicoya Peninsula.",
    summary:
      "Get an interactive experience of local living in rural Costa Rica. Visit the family at Finca Los Tres Higuerones, brew coffee the traditional way, meet the farm animals and help prepare a light meal.",
    description: [
      "Get an interactive experience of local living in rural Costa Rica on this journey. We'll stop at Finca Los Tres Higuerones, a typical Costa Rican family farm, to enjoy a cup of traditionally brewed coffee, see how organic soaps are made, and highlight the freshness and creativity of sustainable farming. Be prepared to roll up your sleeves as you help prepare a light meal with an onsite cooking demonstration from the family and work to extract fresh sugarcane juice for a refreshing beverage! This tour is an excellent option for families of all ages looking for a hands on local learning experience.",
    ],
    when: "8:00am-11:00am. Any day, on request. (48-hour advance reservation appreciated for this tour)",
    where: "Finca Los Tres Higuerones",
    whatToBring: ["Water*", "Camera", "Sunblock", "Insect Repellent", "Extra Cash (optional)*"],
    whatsIncluded: ["Coffee", "Light Meal", "Equipment", "Guide", "Transportation*"],
    notes: [
      "You may also have the opportunity to make purchases of products made at this sustainable farm when available. Small change is recommended.",
    ],
    hero: { src: "tours/lets-get-local/hero.jpg", alt: "Breakfast with guests at Finca Los Tres Higuerones" },
    gallery: [
      { src: "tours/lets-get-local/farm.jpg", alt: "Finca Los Tres Higuerones, the family farm visited on Let's Get Local", caption: "Finca Los Tres Higuerones" },
      { src: "tours/lets-get-local/trapiche.jpg", alt: "Manual sugar cane press (trapiche) at the organic farm", caption: "Manual Trapiche – Organic Farm" },
      { src: "tours/lets-get-local/traditional-cooking.jpg", alt: "Traditional cooking demonstration at the farm", caption: "Traditional Cooking" },
      { src: "tours/lets-get-local/guest.jpg", alt: "Guest extracting sugar cane juice on the Let's Get Local tour", caption: "Let's Get Local Guest" },
      { src: "tours/lets-get-local/fresh-produce.jpg", alt: "Fresh produce from the farm", caption: "Fresh Produce" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    duration: "PT3H",
  },
  {
    slug: "finca-el-paraiso-atv",
    name: "Finca El Paraíso ATV Exclusive Journey",
    shortName: "Finca El Paraíso ATV",
    tagline: "Back roads, a ridge-top view of the Pacific and a hidden waterfall, on your own ATV.",
    summary:
      "A private ATV journey along the hill roads above Montezuma to Finca El Paraíso: ridge-top views over the coast, a waterfall stop and a home-cooked meal at the finca. Exclusive to your group.",
    description: [
      "Some of the best views on the peninsula are at the end of dirt roads no shuttle will take you up. On this journey you ride your own ATV, helmet on, behind JC on his, climbing from Montezuma through pasture and forest to the ridges above the coast. The stops are the point: a lookout where the Pacific opens up below you, a waterfall with a pool for a swim, and whatever wildlife crosses the road on the way.",
      "The destination is Finca El Paraíso, a family farm in the hills where we are received with a typical home-cooked meal and time to look around. \"Exclusive\" means exactly that: this journey runs privately for your group only, so the pace, the photo stops and the swim time are yours to decide.",
    ],
    when: "Morning departure, about half a day. Days on request; we confirm times when you book.",
    where: "Hill roads above Montezuma and Finca El Paraíso",
    whatToBring: ["Closed shoes", "Clothes you don't mind getting muddy", "Sunblock", "Insect Repellent", "Water*", "Swimsuit and towel", "Driver's license (to drive an ATV)"],
    whatsIncluded: ["ATV and helmet", "Guide", "Waterfall and viewpoint stops", "Meal at the finca"],
    notes: [
      "A valid driver's license is required to drive an ATV. Younger guests can ride as passengers with an adult; ask us about minimum ages.",
      "Private departures only. The route can be shortened or adapted to the group and to the state of the roads in the green season.",
    ],
    hero: { src: "tours/finca-el-paraiso-atv/hero.jpg", alt: "Guest standing on a red ATV at a ridge-top lookout pointing at the Pacific coast below" },
    gallery: [
      { src: "tours/finca-el-paraiso-atv/gallery-1.jpg", alt: "Guests on ATVs at the start of the journey", caption: "Setting out" },
      { src: "tours/finca-el-paraiso-atv/gallery-2.jpg", alt: "View from the trail to Finca El Paraíso", caption: "The ridge road" },
      { src: "tours/finca-el-paraiso-atv/gallery-3.jpg", alt: "Finca El Paraíso", caption: "Finca El Paraíso" },
      { src: "tours/finca-el-paraiso-atv/gallery-4.jpg", alt: "Local meal served at the finca", caption: "Lunch at the finca" },
    ],
    status: "available",
    suitableForSmallChildren: true,
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export const tourSlugs = tours.map((t) => t.slug);
