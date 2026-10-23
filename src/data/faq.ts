export interface FaqItem {
  id: string;
  question: string;
  /** Plain text with optional [label](href) links. */
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: "office",
    question: "Do you have an office?",
    answer:
      "We currently do not have a physical office. However, many tour operators, hotels and vendors in the area sell our tours. You can inquire with your hotel, or just as easily you can reserve your tour directly through our website.",
  },
  {
    id: "payment",
    question: "How do we pay for our tour?",
    answer:
      "Once we confirm availability for your request, we send you a secure payment link by email to complete your reservation. Some hotels will require payment to them directly when they reserve the tour for you.",
  },
  {
    id: "advance",
    question: "How far in advance should we reserve a tour?",
    answer:
      "We appreciate 48 hour advanced notice for tour reservations. The earlier the better, during peak season November through April. Additionally, for private and customized tours we strongly recommend contacting us in advance of your arrival to Costa Rica so that we may plan your experience for you and make any necessary arrangements.",
  },
  {
    id: "minimum",
    question: "What if we don't have the minimum number of people for a tour?",
    answer:
      "Please contact us if you'd like to reserve a tour but do not yet see one on the calendar for the date you'd like. You may still make a reservation, however the price will be adjusted for the number of people in your party if no other travelers join the same tour. You can also opt for a private tour for which we can provide you a quote.",
  },
  {
    id: "changes",
    question: "What if we need to change or cancel our reservation?",
    answer:
      "We appreciate a minimum of 24 hour notice for change requests or cancellation. Please email us at [jcsjourneys@gmail.com](mailto:jcsjourneys@gmail.com) for requests. We do our best to accommodate changes to date, times, or number of guests. Please keep in mind some tours can only take place at the times indicated on our [tours page](/tours).",
  },
  {
    id: "kids",
    question: "Are your tours suitable for small kids?",
    answer:
      "All tours are suitable for small children except [Nocturno Montezuma Night Hike](/tours/nocturno-night-journey). While some children under the age of 12 have taken the hike, it may be challenging for some inexperienced hikers and/or unsafe if carrying a child. All other tours involve easier walking/hiking that is suitable for all ages.",
  },
  {
    id: "itinerary",
    question: "Can you help create an itinerary for our private tour?",
    answer:
      "Yes. If you will be booking JC for a private guided tour, we can help prepare an itinerary to fit your interests. Please complete our form on the [Hire a Guide](/hire-a-guide) page.",
  },
  {
    id: "food",
    question: "What kind of food is included in meals?",
    answer:
      "Our aim is to keep your experiences local and authentic with typical Costa Rican meals. Our light breakfast for Bird Lovers' Morning includes coffee or juice, and bread/pastry (will vary). The light meal for Let's Get Local will consist of homemade empanadas with cheese and seasonal fruit (meal may also vary slightly by season). Lunch for Curu Nature Escape is provided by a local restaurant and consists of a 'casado' which is a plate of rice, beans, salad, and choice of chicken, fish or vegetarian.",
  },
  {
    id: "getting-here",
    question: "How do we get to Montezuma?",
    answer:
      "There are many options for arriving to Montezuma. Please see our blog [So… How do I get to Montezuma?](/blog/getting-to-montezuma) for more information. You may also contact us to coordinate shuttle transportation.",
  },
  {
    id: "water",
    question: "Is the water potable in Montezuma?",
    answer:
      "Yes. For this reason we do not provide bottled beverages on our tours and encourage travelers to bring refillable water bottles to reduce plastic waste. There are few occasions where the water is not recommended for drinking but in these cases you will be advised by restaurants and hotels for your health. For more information on water purification while traveling, please read [here](https://jcsjourneys.wordpress.com/wp-content/uploads/2014/03/water-purification-info-for-pre-departure-packets.pdf).",
  },
  {
    id: "sustainable",
    question: "What makes your tours sustainable/responsible?",
    answer:
      "We take several measures to help the environment such as recycling whenever possible, using and encouraging reusable bags and bottles to reduce plastic waste both among local residents and tourists, using rechargeable equipment and batteries for our equipment to reduce waste, using public transport and walking or biking whenever possible. We also work with local residents and businesses to cooperatively provide our tours and thereby support small businesses as well as enable sharing of cultural traditions, values and lifestyles with visitors from abroad.",
  },
];

/** Sustainability measures summarised from the FAQ, used on the home page. */
export const sustainabilityMeasures = [
  "Recycling whenever possible.",
  "Using and encouraging reusable bags and bottles to reduce plastic waste among residents and tourists.",
  "Rechargeable equipment and batteries to reduce waste.",
  "Public transport, walking or biking whenever possible.",
  "Working cooperatively with local residents and small businesses, and sharing cultural traditions with visitors.",
];
