export interface Testimonial {
  quote: string;
  name: string;
  /** Where the guest is from, when known. */
  location?: string;
  /** Year of the visit or review, when known. */
  year?: number;
  /** Where the review was published, e.g. "Tripadvisor". */
  source?: string;
  /** Original language, when the quote is our translation. */
  translatedFrom?: string;
  featured?: boolean;
}

/** Most recent first. The three featured ones are shown on the home page. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We want to highly recommend JC, our tour guide, who took us to discover the beauty of the Curú reserve. His knowledge, experience and passion for the wildlife and plants of the area made this visit an enriching and special experience. […] Thank you, Juan Carlos, for your attention, your kindness and for sharing a little piece of your beautiful land with us. Without a doubt, 100% recommended for anyone who wants to get to know Costa Rica with someone who loves what he does.",
    name: "Tania & Manuel",
    location: "Lázaro Cárdenas, Mexico",
    year: 2026,
    source: "Tripadvisor",
    translatedFrom: "Spanish",
    featured: true,
  },
  {
    quote:
      "My wife and I did a Night Walk with Alex (property owner) and JC. It was a great experience! Being out in the forest exploring nature was tremendous. Both Alex and JC were very knowledgeable and guided us for almost three hours through the property. We found many different kinds of animals and we both felt it was a very special experience in their natural habitat. We got great photos and videos during the walk, and would recommend it to anyone looking for a real wildlife adventure. Many thanks to you both, Alex and JC.",
    name: "Tripadvisor guest",
    location: "Sugar Land, Texas, USA",
    year: 2026,
    source: "Tripadvisor",
    featured: true,
  },
  {
    quote:
      "JC was born to do tours! He is so kind and funny and knows so much about the local area. I highly recommend the local farm tour. We met an incredible family who taught us how to make cheese, milk cows and process sugar cane, and we got to swim in a beautiful river. We were met with smiles, chickens, ducks, turkeys and sweet farm dogs.",
    name: "Molo M.",
    year: 2024,
    source: "Tripadvisor",
    featured: true,
  },
  {
    quote:
      "We spent Christmas in Montezuma and the highlight of our time there was the tour we took with JC! He is funny, knowledgeable, cheerful and helped open our eyes to the natural diversity of the Costa Rican ecosystems. His knowledge and enthusiasm meant we saw a tremendous amount and learned how to look for the animals and birds which made the rest of our trip much more enjoyable. Thank you very much JC!",
    name: "John, Nancy and Nathan Williams",
    location: "United States",
    year: 2018,
  },
  {
    quote:
      "We stayed in Montezuma in February 2013 and our time there was amazing. The beauty of Costa Rica cannot be compared. We were fortunate to have met JC and I can tell you that he turned out to be the highlight of our trip. Our excursions were stunning and we got so much more than we expected. His eye for nature and wildlife was incredible. Seriously a must do for a wonderful Costa Rica adventure.",
    name: "Mel & Robyn Golden",
    location: "Lake, Ontario, Canada",
    year: 2013,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);
