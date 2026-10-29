export interface AlbumPhoto {
  src: string;
  alt: string;
  caption: string;
  /** Aspect ratio class for the masonry-like grid. */
  aspect?: "square" | "portrait" | "landscape";
}

/** Photo Album. Files live in public/images/photos (plus a few tour photos reused from public/images/tours). */
export const albumPhotos: AlbumPhoto[] = [
  { src: "photos/coastline.jpg", alt: "Turquoise coastline and forested headlands of the southern Nicoya Peninsula", caption: "Southern Nicoya coastline", aspect: "portrait" },
  { src: "photos/curu-nature-escape-01.jpg", alt: "JC and guests at the entrance sign of Curu Wildlife Refuge", caption: "Curu Nature Escape", aspect: "landscape" },
  { src: "photos/bird-lovers-morning-01.jpg", alt: "Guests scanning the trees with a scope and binoculars", caption: "Bird Lover's Morning", aspect: "landscape" },
  { src: "photos/montezuma-waterfall.jpg", alt: "Montezuma waterfall pouring over the rocks into its pool", caption: "Montezuma waterfall", aspect: "portrait" },
  { src: "tours/lets-get-local/08.jpg", alt: "The family setting out breakfast under the shelter at Finca Los Tres Higuerones", caption: "Let's Get Local – Finca Los Tres Higuerones", aspect: "portrait" },
  { src: "photos/sunset-boat.jpg", alt: "Small boat crossing in front of the setting sun", caption: "Sunset on the Pacific", aspect: "portrait" },
  { src: "photos/curu-nature-escape-03.jpg", alt: "Wooden boardwalk across the mangrove in Curu", caption: "Curu Nature Escape", aspect: "portrait" },
  { src: "photos/country-road.jpg", alt: "Dirt road past a farm gate on the way to the finca", caption: "Country roads", aspect: "square" },
  { src: "photos/waterfall-hike.jpg", alt: "JC with two guests in front of a waterfall", caption: "Waterfall hike", aspect: "landscape" },
  { src: "photos/mossy-trunk.jpg", alt: "Moss-covered trunk seen from below", caption: "Forest giants", aspect: "portrait" },
  { src: "tours/lets-get-local/13.jpg", alt: "Guests meeting the oxen at Finca Los Tres Higuerones", caption: "Let's Get Local – the oxen", aspect: "landscape" },
  { src: "photos/sunset-low-tide.jpg", alt: "Sunset over the tide pools at low tide", caption: "Low tide at sunset", aspect: "portrait" },
  { src: "photos/curu-nature-escape-02.jpg", alt: "JC with guests on the mangrove bridge in Curu", caption: "Curu Nature Escape", aspect: "landscape" },
  { src: "photos/horseback-country-road.jpg", alt: "Riders on horseback moving cattle along a country road", caption: "Rural life on the peninsula", aspect: "portrait" },
  { src: "photos/forest-river.jpg", alt: "River flowing through the forest", caption: "Forest river", aspect: "portrait" },
  { src: "photos/refuge-entrance.jpg", alt: "JC at the entrance of a national wildlife refuge", caption: "Hire a guide", aspect: "landscape" },
  { src: "photos/bird-lovers-morning-02.jpg", alt: "Guest with binoculars looking over the forest from a ridge", caption: "Bird Lover's Morning", aspect: "portrait" },
  { src: "photos/canopy.jpg", alt: "Spreading branches of a tree seen from below", caption: "Under the canopy", aspect: "portrait" },
  { src: "photos/curu-nature-escape-04.jpg", alt: "Two guests on the wooden bridge over the estuary in Curu", caption: "Curu Nature Escape", aspect: "landscape" },
  { src: "photos/golden-hour-beach.jpg", alt: "Golden light over the beach at the end of the day", caption: "Golden hour", aspect: "portrait" },
  { src: "tours/finca-el-paraiso-atv/hero.jpg", alt: "Finca El Paraíso ATV Exclusive Journey", caption: "Finca El Paraíso ATV", aspect: "landscape" },
  { src: "photos/river-mouth.jpg", alt: "River meeting the sea between the trees", caption: "Where the river meets the sea", aspect: "portrait" },
  { src: "photos/waterfall-swim.jpg", alt: "Guests swimming at the foot of a cascade", caption: "Waterfall swim", aspect: "portrait" },
  { src: "photos/beach-lagoon.jpg", alt: "Quiet lagoon behind the beach under a large tree", caption: "Beach lagoon", aspect: "portrait" },
  { src: "tours/nocturno-night-journey/hero.jpg", alt: "Nocturno Night Journey", caption: "Nocturno Night Journey", aspect: "landscape" },
  { src: "photos/road-to-montezuma.jpg", alt: "Paved road winding through flowering roadside trees", caption: "The road to Montezuma", aspect: "portrait" },
];
