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
  /** True while the listing still contains TODO placeholder text. */
  hasTodos?: boolean;
  /** Approximate duration in ISO 8601 for structured data, e.g. "PT3H". */
  duration?: string;
}

/** Notes that apply to every tour (from the current site). */
export const commonTourNotes = [
  "Price is based on pick ups from hotels in downtown Montezuma. Price will vary for pick ups from hotels outside this area.",
  "We recommend bringing a refillable water bottle or canteen to help reduce plastic waste.",
];

export const tours: Tour[] = [
  {
    slug: "nocturno-night-journey",
    name: "Nocturno Night Journey",
    shortName: "Nocturno",
    tagline: "Montezuma comes alive at night.",
    summary:
      "A guided night hike through the forest around Montezuma, when nocturnal animals wake up and the sounds of the wild amplify.",
    description: [
      "Why take a night hike through the darkness with little more than a flashlight and water bottle? Because Montezuma comes alive at night. As day turns to dusk the sounds of surrounding wildlife amplify alerting you to the fact that there is far more to see than that which is visible during normal waking hours. Nocturnal animals fill the forest and awaken to begin searching for food, making them much more likely to be spotted when trekking around after the sun has set.",
      "In addition to the roaming mammals and insects that are sure to show, this tour has a couple more surprises in store. You won't be disappointed!",
      "TODO: Add the current description of the Nocturno Night Journey (route, distance, difficulty and what guests typically see: frogs, mushrooms, night birds, insects).",
    ],
    when: "TODO: Start time and duration (e.g. 6:00pm-8:30pm) and available days.",
    where: "Montezuma (TODO: confirm trail / starting point)",
    whatToBring: [
      "Flashlight or headlamp (TODO: confirm if provided)",
      "Closed shoes",
      "Long pants",
      "Water*",
      "Insect Repellent",
      "Camera (optional)",
    ],
    whatsIncluded: ["Guide", "Equipment (TODO: confirm)", "Transportation* (TODO: confirm)"],
    notes: [
      "This is the only tour not recommended for small children. While some children under the age of 12 have taken the hike, it may be challenging for some inexperienced hikers and/or unsafe if carrying a child.",
      "TODO: Add minimum age, group size and any weather policy.",
    ],
    hero: { src: "tours/nocturno-night-journey/hero.jpg", alt: "Night hike through the forest near Montezuma, Costa Rica" },
    gallery: [
      { src: "tours/nocturno-night-journey/frog.jpg", alt: "Tree frog seen on the Nocturno night hike", caption: "Tree Frog – Nocturno" },
      { src: "tours/nocturno-night-journey/mushroom.jpg", alt: "Mushrooms growing on the forest floor at night", caption: "Mushrooms after the first rains" },
      { src: "tours/nocturno-night-journey/bird.jpg", alt: "Bird roosting at night spotted with a flashlight", caption: "Night bird sighting" },
      { src: "tours/nocturno-night-journey/mushroom-2.jpg", alt: "Close-up of a mushroom lit by headlamp", caption: "Forest detail" },
      { src: "tours/nocturno-night-journey/trail.jpg", alt: "Green forest trail used for the night hike", caption: "The trail, green after the rains" },
    ],
    status: "available",
    suitableForSmallChildren: false,
    video: { embedUrl: "https://player.vimeo.com/video/78227059", title: "Nocturno Montezuma Night Hike" },
    hasTodos: true,
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
    when: "5:30am-8:30am. Available Tuesdays, Thursdays, Fridays and Saturdays.",
    where: "Montezuma/Cabuya",
    whatToBring: ["Binoculars or Scope (optional)", "Walking Shoes", "Water*", "Sunblock", "Insect Repellent", "Swimsuit (optional)"],
    whatsIncluded: ["Equipment", "Light Breakfast", "Guide", "Transportation*"],
    notes: [],
    hero: { src: "tours/bird-lovers-morning/hero.jpg", alt: "Crested caracara perched at sunrise near Montezuma" },
    gallery: [
      { src: "tours/bird-lovers-morning/sunrise-cabuya.jpg", alt: "Sunrise over the Nicoya Gulf from Cabuya", caption: "Bird Lover's Morning – Sunrise" },
      { src: "tours/bird-lovers-morning/woodpecker.jpg", alt: "Woodpecker spotted during the Bird Lover's Morning", caption: "Bird Lover's Morning – Bird Sighting" },
      { src: "tours/bird-lovers-morning/sighting-1.jpg", alt: "Guests looking through a scope at shorebirds", caption: "Bird Lover's Morning – Bird Sightings" },
      { src: "tours/bird-lovers-morning/sighting-2.jpg", alt: "Colorful bird photographed through the scope", caption: "Bird Lover's Morning – Bird Sightings" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    duration: "PT3H",
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
    when: "7:30am-1pm. Available Tuesdays, Thursdays, Fridays & Saturdays.",
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
    tagline: "A hands-on morning of rural living at Finca Los Tres Higuerones, a working family farm a short drive from Montezuma.",
    summary:
      "Get an interactive experience of local living in rural Costa Rica. Visit the family at Finca Los Tres Higuerones, brew coffee the traditional way, meet the farm animals and help prepare a light meal.",
    description: [
      "Get an interactive experience of local living in rural Costa Rica on this journey. We'll stop at Finca Los Tres Higuerones, a typical Costa Rican family farm, to enjoy a cup of traditionally brewed coffee, see how organic soaps are made, and highlight the freshness and creativity of sustainable farming. Be prepared to roll up your sleeves as you help prepare a light meal with an onsite cooking demonstration from the family and work to extract fresh sugarcane juice for a refreshing beverage! This tour is an excellent option for families of all ages looking for a hands on local learning experience.",
      "A Cabuya version of this journey is also available. On it we show you hidden spots including a fishing village, cemetery island and local marmalade producer in the quaint town of Cabuya just south of Montezuma. You'll have the opportunity to meet locals and learn about their lifestyle to get a taste of culture in the peninsula. It is a great option for families of all ages as there is minimal physical activity involved and just a short drive, but offers many interesting sights to see. Let us know your preference when you request a quote.",
    ],
    when: "8:00am-11:00am. Available Tuesdays, Thursdays, Fridays & Saturdays. (48-hour advance reservation appreciated for this tour)",
    where: "Finca Los Tres Higuerones (Cabuya version also available)",
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
      { src: "tours/lets-get-local/cabuya-cemetery-island.jpg", alt: "Cemetery island off the coast of Cabuya", caption: "Cemetery Island – Cabuya" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    duration: "PT3H",
  },
  {
    slug: "finca-el-paraiso-atv",
    name: "Finca El Paraíso ATV Exclusive Journey",
    shortName: "Finca El Paraíso ATV",
    tagline: "TODO: One-line tagline for the ATV journey to Finca El Paraíso.",
    summary:
      "TODO: Two-sentence summary of the Finca El Paraíso ATV Exclusive Journey for the tour cards (what makes it exclusive, who it is for).",
    description: [
      "TODO: Full description of the Finca El Paraíso ATV Exclusive Journey: the ATV route, the finca, what guests do and see, meals and the pace of the day.",
      "TODO: Second paragraph (optional): the story of the finca and the family or partner who hosts the visit.",
    ],
    when: "TODO: Start time, duration and available days.",
    where: "TODO: Finca El Paraíso location (town / district).",
    whatToBring: ["TODO: Closed shoes", "TODO: Long pants", "TODO: Sunblock", "TODO: Insect Repellent", "Water*", "TODO: Driver's license (if guests drive the ATV)"],
    whatsIncluded: ["TODO: ATV and safety gear", "Guide", "TODO: Meal or snack", "TODO: Entrance / farm visit", "Transportation*"],
    notes: [
      "TODO: Minimum age to drive or ride an ATV, maximum group size and any requirements.",
      "TODO: Cancellation or weather policy specific to this tour, if any.",
    ],
    hero: { src: "tours/finca-el-paraiso-atv/hero.jpg", alt: "ATV on a dirt road leading to Finca El Paraíso" },
    gallery: [
      { src: "tours/finca-el-paraiso-atv/gallery-1.jpg", alt: "Guests on ATVs at the start of the journey", caption: "TODO: caption" },
      { src: "tours/finca-el-paraiso-atv/gallery-2.jpg", alt: "View from the trail to Finca El Paraíso", caption: "TODO: caption" },
      { src: "tours/finca-el-paraiso-atv/gallery-3.jpg", alt: "Finca El Paraíso", caption: "TODO: caption" },
      { src: "tours/finca-el-paraiso-atv/gallery-4.jpg", alt: "Local meal served at the finca", caption: "TODO: caption" },
    ],
    status: "available",
    suitableForSmallChildren: true,
    hasTodos: true,
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export const tourSlugs = tours.map((t) => t.slug);
