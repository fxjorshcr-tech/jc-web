export interface Region {
  slug: string;
  name: string;
  text: string;
  images: { src: string; alt: string }[];
  /** Optional internal link to a related blog post. */
  readMore?: { label: string; href: string };
}

export const recommendationsIntro =
  "Trying to decide what areas to visit can be overwhelming. So to help you with your planning, we'd like to make a few recommendations based on places we've been and enjoyed. Here are a few areas outside of Montezuma we can help you arrange visits to, either from or on your way to the Nicoya Peninsula, as well our suggestions for local accommodations once you arrive. Contact us for further information on customized itineraries with a private guide.";

export const regions: Region[] = [
  {
    slug: "poas",
    name: "Poas",
    text: "One of the most visited National Parks due to its proximity to the Juan Santamaria Airport in Alajuela, Poas offers easy trails and beautiful views of its crater and lagoon. In this vicinity are also the La Paz waterfalls some of which can be viewed roadside on a short scenic drive, or inside the La Paz Waterfall Gardens (entrance fee required).",
    images: [
      { src: "recommendations/poas-1.jpg", alt: "Poas Volcano crater viewpoint" },
      { src: "recommendations/poas-2.jpg", alt: "La Paz waterfall near Poas" },
    ],
  },
  {
    slug: "arenal",
    name: "Arenal",
    text: "Often visited while making the journey to Nicoya Peninsula, Arenal is especially scenic during the dry season when rain clouds clear allowing fortunate visitors an abundance of photo opportunities. The town of La Fortuna is quaint while offering many restaurants and amenities. Known for the many 'adventure' tours offered here, there's also quiet hiking to be enjoyed in Arenal National Park surrounded by wildlife, sounds of the rainforest and amazing views of the volcano.",
    images: [
      { src: "recommendations/arenal-1.jpg", alt: "Arenal Volcano on a clear day" },
      { src: "recommendations/arenal-2.jpg", alt: "Rainforest trail in Arenal National Park" },
    ],
  },
  {
    slug: "tenorio",
    name: "Tenorio",
    text: "Northwest of Arenal you'll find Tenorio National Park. The infamous blue river, Rio Celeste is here and yes, you will be amazed. With an easier waterfall hike, and a more challenging hike to see where chemical reactions cause the river to change color, Tenorio is perfect for all around nature lovers. The area also offers fantastic birdwatching and sloth sightings.",
    images: [
      { src: "recommendations/tenorio-1.jpg", alt: "Rio Celeste waterfall in Tenorio National Park" },
      { src: "recommendations/tenorio-2.jpg", alt: "Blue water of Rio Celeste" },
    ],
    readMore: { label: "Road Trip to Rio Celeste", href: "/blog/road-trip-to-rio-celeste-costa-rica" },
  },
  {
    slug: "rincon-de-la-vieja",
    name: "Rincon de la Vieja",
    text: "Moving on to the Guanacaste province, this much drier region is markedly different from the rainforests of Arenal and Tenorio. Hikes to the mud pots are amusing as you can visibly see mud bubbling from the earth at above 200 degrees Fahrenheit. Dry season temperatures here get very hot, and needless to say, dry. We suggest coming during shoulder seasons and early in the day to avoid the heat as much as possible.",
    images: [
      { src: "recommendations/rincon-de-la-vieja-1.jpg", alt: "Bubbling mud pots at Rincon de la Vieja" },
      { src: "recommendations/rincon-de-la-vieja-2.jpg", alt: "Dry forest trail in Rincon de la Vieja National Park" },
    ],
  },
  {
    slug: "osa-peninsula",
    name: "Osa Peninsula",
    text: "One of the southernmost areas of Costa Rica on the Pacific Coast, Osa Peninsula is one of the most beautiful and eco-conscious areas of the country. It's remoteness lends itself to the pristine natural scenery and wildlife you'll find here. This area is definitely for the most devout nature lovers and is a prime location for birdwatchers. Consider staying in Drake Bay and take a tour of Corcovado National Park, but don't miss out on some unique rural tourism at Rancho Quemado.",
    images: [
      { src: "recommendations/osa-1.jpg", alt: "Coastline of the Osa Peninsula" },
      { src: "recommendations/osa-2.jpg", alt: "Wildlife in Corcovado National Park" },
    ],
    readMore: { label: "Adventures in Osa Peninsula", href: "/blog/adventures-in-osa-peninsula" },
  },
];

export interface HotelArea {
  area: string;
  hotels: { name: string; url: string }[];
}

export const accommodationsIntro =
  "There are many accommodations to choose from in the Southern Nicoya Peninsula, but here are a few of our favorites to get you started.";

export const accommodations: HotelArea[] = [
  {
    area: "Tambor Area (Nicoya Gulf side of Peninsula)",
    hotels: [
      { name: "Vista Hermosa Bed and Breakfast", url: "http://www.vistahermosabedandbreakfast.com/" },
      { name: "Tambor Tropical", url: "http://www.tambortropical.com/" },
    ],
  },
  {
    area: "Montezuma (Nicoya Gulf side of Peninsula)",
    hotels: [
      { name: "Casa Frangipani", url: "http://www.casafrangipani.com/" },
      { name: "Amor de Mar", url: "http://amordemar.com/" },
      { name: "Ylang Ylang", url: "http://www.ylangylangbeachresort.com/" },
      { name: "Luna Llena", url: "http://www.lunallenahotel.com/" },
    ],
  },
  {
    area: "Santa Teresa (Pacific Coast side of Peninsula)",
    hotels: [
      { name: "Casa Marbella", url: "http://casamarbel.la/" },
      { name: "Moana Lodge", url: "http://moanacostarica.com/" },
    ],
  },
  {
    area: "Malpais (Pacific Coast side of Peninsula)",
    hotels: [{ name: "Hotel The Place", url: "http://www.theplacemalpais.com/" }],
  },
];
