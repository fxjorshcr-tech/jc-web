export const site = {
  name: "JC's Journeys",
  tagline: "Natural and Cultural Journeys – Southern Nicoya Peninsula, Costa Rica",
  /** Short form for tight spaces (logo subline). */
  taglineShort: "Nicoya Peninsula · Costa Rica",
  /** The towns we work from and pick up in, in the order we lead with. */
  towns: ["Santa Teresa", "Malpaís", "Montezuma"],
  description:
    "Small-group natural and cultural journeys across the southern Nicoya Peninsula, from Santa Teresa and Malpaís to Montezuma, led by licensed local guide JC Aguirre. Birding, Curu Wildlife Refuge, family farm visits and night hikes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jcsjourneys.com",
  email: "jcsjourneys@gmail.com",
  whatsapp: {
    /** E.164 digits only, used for wa.me links and structured data. */
    number: "50689758832",
    display: "+506 8975 8832",
    international: "+50689758832",
  },
  location: {
    locality: "Montezuma",
    region: "Puntarenas",
    country: "CR",
    countryName: "Costa Rica",
    area: "Southern Nicoya Peninsula",
    served: ["Santa Teresa", "Malpaís", "Montezuma", "Cabuya", "Cóbano", "Tambor", "Curu Wildlife Refuge", "Cabo Blanco"],
    lat: 9.6558,
    lng: -85.0697,
  },
  guide: {
    name: "Juan Carlos \"JC\" Aguirre",
    shortName: "JC Aguirre",
    license: "Lic. #1165 – Guia de Turismo Local",
    licenseBody: "ICT (Instituto Costarricense de Turismo)",
  },
  social: {
    facebook: "https://www.facebook.com/JCsJourneys",
    pinterest: "https://www.pinterest.com/jcsjourneys/",
    vimeo: "https://vimeo.com/channels/jcsjourneys",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g309278-d6132502-Reviews-JC_s_Journeys_Day_Tours-Montezuma_Province_of_Puntarenas.html",
  },
  /** Public review profile shown as a badge across the site. Update count/rating by hand when it changes. */
  reviews: {
    platform: "Tripadvisor",
    rating: 5.0,
    count: 55,
    url: "https://www.tripadvisor.com/Attraction_Review-g309278-d6132502-Reviews-JC_s_Journeys_Day_Tours-Montezuma_Province_of_Puntarenas.html",
  },
  travelersAgainstPlastic: {
    name: "Travelers Against Plastic",
    url: "https://www.travelersagainstplastic.org/",
  },
  ogImage: "og/og-default.jpg",
} as const;

export const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/guests", label: "Guests" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/hire-a-guide", label: "Hire a Guide" },
] as const;

export const secondaryNav = [
  { href: "/partners", label: "Partners" },
  { href: "/community", label: "Community" },
  { href: "/photos", label: "Photo Album" },
] as const;
