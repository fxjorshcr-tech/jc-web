export const site = {
  name: "JC's Journeys",
  tagline: "Nature and Culture Tours – Montezuma, Costa Rica",
  description:
    "Small-group nature and culture tours in Montezuma, Costa Rica, led by licensed local guide JC Aguirre. Birding, Curu Wildlife Refuge, organic farm visits and night hikes on the southern Nicoya Peninsula.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jcsjourneys.com",
  email: "jcsjourneys@gmail.com",
  location: {
    locality: "Montezuma",
    region: "Puntarenas",
    country: "CR",
    countryName: "Costa Rica",
    area: "Southern Nicoya Peninsula",
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
  { href: "/blog", label: "Journal" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/faq", label: "FAQ" },
  { href: "/hire-a-guide", label: "Hire a Guide" },
] as const;

export const secondaryNav = [
  { href: "/partners", label: "Partners" },
  { href: "/community", label: "Community" },
  { href: "/photos", label: "Photo Album" },
] as const;
