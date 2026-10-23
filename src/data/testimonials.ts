export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  /** Year of the visit or review, when known. */
  year?: number;
  featured?: boolean;
}

/** Guest words collected on the current site ("Our Guests" page and its comments). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We stayed in Montezuma in February 2013 and our time there was amazing. The beauty of Costa Rica cannot be compared. We were fortunate to have met JC and I can tell you that he turned out to be the highlight of our trip. Our excursions were stunning and we got so much more than we expected. His eye for nature and wildlife was incredible. Seriously a must do for a wonderful Costa Rica adventure.",
    name: "Mel & Robyn Golden",
    location: "Lake, Ontario, Canada",
    year: 2013,
    featured: true,
  },
  {
    quote:
      "We spent Christmas in Montezuma and the highlight of our time there was the tour we took with JC! He is funny, knowledgeable, cheerful and helped open our eyes to the natural diversity of the Costa Rican ecosystems. His knowledge and enthusiasm meant we saw a tremendous amount and learned how to look for the animals and birds which made the rest of our trip much more enjoyable. Thank you very much JC!",
    name: "John, Nancy and Nathan Williams",
    location: "United States",
    year: 2018,
    featured: true,
  },
  {
    quote:
      "Last week JC led me on a walking and birding tour of the Tambor area. I contacted JC at the last minute, and, fortunately for me, he was available. We started promptly at 7:00 am and birded for five hours. He was energetic, friendly, and very enthusiastic about finding birds. We saw 72 species of which 61 were new to me. It was a thoroughly enjoyable time and one of the highlights of my time in Costa Rica. I recommend him highly.",
    name: "Richard Cripe",
    location: "Coeur d'Alene, Idaho, USA",
    year: 2014,
    featured: true,
  },
  {
    quote:
      "My girlfriend and I loved Montezuma and spent a great day viewing local wildlife and nature with JC. He is fun, informative and very focused on making sure his guests learn more about this amazing country. His tour could not have been better. When (not if) we come back we look forward to spending more time with JC's Journeys. Tuanis JC!",
    name: "Garry and Raquel",
    location: "Toronto, Canada",
    year: 2015,
  },
  {
    quote:
      "We had a wonderful time in Costa Rica. The best part of the visit was taking a tour with JC's Journeys. We visited an organic farm, where we got to crush sugar cane and drink it straight as it poured in to a mug with crushed ice. We also had a wonderful journey visiting a local lady who makes her own perfumes, marmalades and coconut oil for cooking and for bathing. Was amazing. His ability to speak English and Spanish is amazing, and was most helpful as our Spanish isn't all that great. We can't wait to return and see what other Journeys we can take.",
    name: "Martha",
    location: "United States",
    year: 2013,
  },
  {
    quote:
      "Pura Vida JC! I finally looked up your web site. Very nice! It brings back great memories and thoughts of our vacation and the new friends we met in Costa Rica. You helped make our visit special. I usually opt to do my nature walks without a guide but I'm glad that we had you and the knowledge you shared with us about the plants and animals in the preserve. We really enjoyed the time we had with you and Kevin. Thanks for making us feel welcomed in your country.",
    name: "The Storck family",
    location: "Michigan, USA",
    year: 2014,
  },
  {
    quote:
      "Merci beaucoup a Juan Carlos de nous avoir fait découvrir les beautés du Costa Rica avec entre autre le parc de Curu! Juan Carlos est une personne passionnée et captivante dotée d'un sens de l'observation incroyable. Merci encore.",
    name: "René Monfette, Laurianne, Jean-Sébastien et Mélanie",
    location: "Québec, Canada",
    year: 2014,
  },
  {
    quote: "…you made our trip enjoyable and your joy in what you do shows in how you explain nature and animal life…",
    name: "Rosie Ahumada",
    location: "Redondo Beach, CA, USA",
    year: 2013,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);
