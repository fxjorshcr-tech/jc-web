export interface AlbumPhoto {
  src: string;
  alt: string;
  caption: string;
  /** Aspect ratio class for the masonry-like grid. */
  aspect?: "square" | "portrait" | "landscape";
}

/** Photo Album from the current site. File names are new; captions are the originals. */
export const albumPhotos: AlbumPhoto[] = [
  { src: "photos/bird-lovers-morning-01.jpg", alt: "Guests birdwatching at sunrise on the Bird Lover's Morning", caption: "Bird Lover's Morning", aspect: "landscape" },
  { src: "photos/curu-nature-escape-01.jpg", alt: "Trail in Curu Wildlife Refuge", caption: "Curu Nature Escape", aspect: "portrait" },
  { src: "photos/bird-lovers-morning-02.jpg", alt: "Bird perched on a branch near Cabuya", caption: "Bird Lover's Morning", aspect: "square" },
  { src: "photos/bird-lovers-morning-03.jpg", alt: "Guide pointing out a bird through the scope", caption: "Bird Lover's Morning", aspect: "square" },
  { src: "photos/bird-lovers-morning-04.jpg", alt: "Shorebirds on the beach at low tide", caption: "Bird Lover's Morning", aspect: "landscape" },
  { src: "photos/bird-lovers-morning-05.jpg", alt: "Hummingbird feeding on a flower", caption: "Bird Lover's Morning", aspect: "portrait" },
  { src: "photos/lets-get-local-01.jpg", alt: "Pressing sugar cane at the organic farm", caption: "Let's Get Local", aspect: "landscape" },
  { src: "photos/lets-get-local-02.jpg", alt: "Homemade empanadas cooked on a wood stove", caption: "Let's Get Local", aspect: "square" },
  { src: "photos/curu-nature-escape-02.jpg", alt: "White-faced monkey in the trees at Curu", caption: "Curu Nature Escape", aspect: "square" },
  { src: "photos/curu-nature-escape-03.jpg", alt: "Beach at the end of the Curu hike", caption: "Curu Nature Escape", aspect: "landscape" },
  { src: "photos/karen-mogensen-waterfalls.jpg", alt: "Waterfall in the Karen Mogensen Reserve", caption: "Karen Mogensen Waterfalls", aspect: "portrait" },
  { src: "photos/turtles-montezuma-01.jpg", alt: "Sea turtle hatchlings released on Montezuma beach", caption: "Turtles MTZ", aspect: "landscape" },
  { src: "photos/turtles-montezuma-02.jpg", alt: "Volunteers at the turtle hatchery in Montezuma", caption: "Turtles MTZ", aspect: "square" },
  { src: "photos/local-handcraft.jpg", alt: "Handmade local crafts", caption: "Local Handcraft", aspect: "square" },
  { src: "photos/lets-get-local-03.jpg", alt: "Fresh coffee brewed the traditional way", caption: "Let's Get Local", aspect: "portrait" },
  { src: "photos/lets-get-local-04.jpg", alt: "Family welcoming guests at their farm", caption: "Let's Get Local", aspect: "landscape" },
  { src: "photos/curu-nature-escape-04.jpg", alt: "Halloween crab on the forest floor", caption: "Curu Nature Escape", aspect: "square" },
  { src: "photos/bird-lovers-morning-06.jpg", alt: "Sunrise over the Nicoya Gulf", caption: "Bird Lover's Morning", aspect: "landscape" },
];
