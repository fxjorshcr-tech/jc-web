# Photos for jcsjourneys.com

Every image on the site is rendered through the `Photo` component. While a file is missing, the page shows a
placeholder with the expected path. **Drop the file at exactly that path (relative to this folder) and redeploy;
no code change is needed.**

General guidance
- Format: JPG (quality 80–85) for photos, PNG only for the badge. Keep each file under ~400 KB when possible.
- Orientation matters more than exact pixels: the site crops to the aspect ratio of each slot.
- Name files in English, lowercase, with hyphens. Alt text already lives in `src/data/*.ts`; adjust it there if a photo changes.
- Sizes below are recommended minimums (width × height).

## Priority 1 – Home, header images and badges

| File | Recommended size | Used for |
| --- | --- | --- |
| `home/hero.jpg` | 2400 × 1500 (landscape) | Home hero, full width |
| `home/why-tour.jpg` | 1200 × 1500 (portrait) | "Why Tour with JC's Journeys?" block on the home page |
| `og/og-default.jpg` | 1200 × 630 | Default Open Graph / social share image |
| `badges/travelers-against-plastic.png` | 400 × 400 (square, transparent ok) | Travelers Against Plastic badge in footer and home |

## Priority 2 – Tours

**Easiest way:** put your originals in one folder with a sub-folder per tour and run

```bash
npm run photos -- "C:\Users\you\Downloads\Fotos JC"
```

The script matches folders to tours by name, auto-rotates, resizes to 2000 px, saves JPEG q80 into
`public/images/tours/<slug>/` as `hero.jpg`, `01.jpg`, `02.jpg`… Then commit and push.

The tour page shows **every image in that folder** as the gallery (portrait photos stay portrait), so the
file names below are only the fallback placeholders. Optional captions: add a `captions.json` next to the
photos, e.g. `{"01.jpg": "Sunrise over the gulf"}`.

Hero = 2000 × 1250 landscape; gallery = any orientation, 2000 px on the long edge.

| File | Recommended size | Used for |
| --- | --- | --- |
| `tours/nocturno-night-journey/hero.jpg` | 2000 × 1250 (landscape) | Night hike through the forest near Montezuma, Costa Rica |
| `tours/nocturno-night-journey/frog.jpg` | 1600 × 1200 | Tree frog seen on the Nocturno night hike |
| `tours/nocturno-night-journey/mushroom.jpg` | 1600 × 1200 | Mushrooms growing on the forest floor at night |
| `tours/nocturno-night-journey/bird.jpg` | 1600 × 1200 | Bird roosting at night spotted with a flashlight |
| `tours/nocturno-night-journey/mushroom-2.jpg` | 1600 × 1200 | Close-up of a mushroom lit by headlamp |
| `tours/nocturno-night-journey/trail.jpg` | 1600 × 1200 | Green forest trail used for the night hike |
| `tours/bird-lovers-morning/hero.jpg` | 2000 × 1250 (landscape) | Crested caracara perched at sunrise near Montezuma |
| `tours/bird-lovers-morning/sunrise-cabuya.jpg` | 1600 × 1200 | Sunrise over the Nicoya Gulf from Cabuya |
| `tours/bird-lovers-morning/woodpecker.jpg` | 1600 × 1200 | Woodpecker spotted during the Bird Lover's Morning |
| `tours/bird-lovers-morning/sighting-1.jpg` | 1600 × 1200 | Guests looking through a scope at shorebirds |
| `tours/bird-lovers-morning/sighting-2.jpg` | 1600 × 1200 | Colorful bird photographed through the scope |
| `tours/curu-nature-escape/hero.jpg` | 2000 × 1250 (landscape) | White-faced capuchin monkey in Curu Wildlife Refuge |
| `tours/curu-nature-escape/bridge.jpg` | 1600 × 1200 | Wooden bridge over the mangrove in Curu Wildlife Refuge |
| `tours/curu-nature-escape/beach.jpg` | 1600 × 1200 | Quiet beach at the end of the Curu trail |
| `tours/curu-nature-escape/halloween-crab.jpg` | 1600 × 1200 | Halloween crab on the forest floor in Curu |
| `tours/curu-nature-escape/fishing-village.jpg` | 1600 × 1200 | Fishing boats in the village near Curu |
| `tours/lets-get-local/hero.jpg` | 2000 × 1250 (landscape) | Breakfast with guests at Finca Los Tres Higuerones |
| `tours/lets-get-local/farm.jpg` | 1600 × 1200 | Finca Los Tres Higuerones |
| `tours/lets-get-local/trapiche.jpg` | 1600 × 1200 | Manual sugar cane press (trapiche) at the organic farm |
| `tours/lets-get-local/traditional-cooking.jpg` | 1600 × 1200 | Traditional cooking demonstration at the farm |
| `tours/lets-get-local/guest.jpg` | 1600 × 1200 | Guest extracting sugar cane juice on the Let's Get Local tour |
| `tours/lets-get-local/fresh-produce.jpg` | 1600 × 1200 | Fresh produce from the farm |
| `tours/lets-get-local/cabuya-cemetery-island.jpg` | 1600 × 1200 | Cemetery island off the coast of Cabuya |
| `tours/finca-el-paraiso-atv/hero.jpg` | 2000 × 1250 (landscape) | ATV on a dirt road leading to Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-1.jpg` | 1600 × 1200 | Guests on ATVs at the start of the journey |
| `tours/finca-el-paraiso-atv/gallery-2.jpg` | 1600 × 1200 | View from the trail to Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-3.jpg` | 1600 × 1200 | Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-4.jpg` | 1600 × 1200 | Local meal served at the finca |

Photos from the current site that fit these slots: Nocturno gallery = `nocturno_frog2.jpg`, `nocturno_mushroom3.jpg`, `nocturno_bird.jpg`, `nocturno_mushroom2.jpg`, `nocturno_trail_green.jpg` (from the post "A Good Time for Nocturno"); Bird Lover's Morning = `caracara.jpg` (hero), `sunrise_cabuya.jpg`, `birdloversmorning_woodpecker.jpg`, `image2.jpg`, `image3.jpg`; Curu = `whitefacedmonkey3.jpg` (hero), `curu_bridge2.jpg`, `charlespeck14.jpg`, `curu_halloweencrab.jpg`, `fishing.jpg`; Let's Get Local = `img_5907.jpg` (hero), `img_5914.jpg`, `organic6.jpg`, `finca_ovares7.jpg`, `jc_local.jpg`, `img_5906.jpg`, `dsc_0454.jpg` (Cabuya).

## Priority 3 – About, Guests, Partners, Community, Hire a Guide

| File | Recommended size | Used for |
| --- | --- | --- |
| `about/hero.jpg` | 1600 × 1280 | About page opener |
| `about/jc-guide.jpg` | 1200 × 1500 (portrait) | JC Aguirre guiding guests on a forest trail |
| `about/forest-giant.jpg` | 1600 × 1200 | Giant tree in the forest (mission block) |
| `guests/header.jpg` | 1600 × 1280 | Happy guests at the end of a JC's Journeys tour |
| `partners/los-tres-higuerones.jpg` | 1600 × 1200 | Finca Los Tres Higuerones (oxen, cows, the family) |
| `community/montezuma-school-birding-1.jpg` | 1600 × 1200 | Students from Montezuma School looking through binoculars |
| `community/montezuma-school-birding-2.jpg` | 1600 × 1200 | JC teaching kids about local birds on the beach |
| `community/reusable-bags.jpg` | 1600 × 1200 | JC's Journeys reusable bags and souvenirs |
| `hire-a-guide/jc-portrait.jpg` | 1600 × 1280 | JC Aguirre with binoculars |

Current-site originals: `guide_about.jpg` (JC), `coati1.jpg` (mission block), `fincadidactica_couple_cropped.jpg` (partners), `img_6367.jpg` / `img_6362.jpg` / `img_6482.jpg` (community), `about.jpg` (hire a guide), `guests_header2.png` (guests).

## Priority 4 – Photo Album (`/photos`), 1600 px on the long side

| File | Orientation | Caption |
| --- | --- | --- |
| `photos/bird-lovers-morning-01.jpg` | landscape | Bird Lover's Morning |
| `photos/curu-nature-escape-01.jpg` | portrait | Curu Nature Escape |
| `photos/bird-lovers-morning-02.jpg` | square | Bird Lover's Morning |
| `photos/bird-lovers-morning-03.jpg` | square | Bird Lover's Morning |
| `photos/bird-lovers-morning-04.jpg` | landscape | Bird Lover's Morning |
| `photos/bird-lovers-morning-05.jpg` | portrait | Bird Lover's Morning |
| `photos/lets-get-local-01.jpg` | landscape | Let's Get Local |
| `photos/lets-get-local-02.jpg` | square | Let's Get Local |
| `photos/curu-nature-escape-02.jpg` | square | Curu Nature Escape |
| `photos/curu-nature-escape-03.jpg` | landscape | Curu Nature Escape |
| `photos/karen-mogensen-waterfalls.jpg` | portrait | Karen Mogensen Waterfalls |
| `photos/turtles-montezuma-01.jpg` | landscape | Turtles MTZ |
| `photos/turtles-montezuma-02.jpg` | square | Turtles MTZ |
| `photos/local-handcraft.jpg` | square | Local Handcraft |
| `photos/lets-get-local-03.jpg` | portrait | Let's Get Local |
| `photos/lets-get-local-04.jpg` | landscape | Let's Get Local |
| `photos/curu-nature-escape-04.jpg` | square | Curu Nature Escape |
| `photos/bird-lovers-morning-06.jpg` | landscape | Bird Lover's Morning |

The current Photo Album has 20 numbered files (`2.jpeg` … `33.jpeg`); map them to the names above by caption.

## Priority 5 – Blog

Each post has a 16:9 cover plus a few inline photos (3:2). Current posts and the files they use (all present):

| Post | Cover | Inline photos |
| --- | --- | --- |
| Things to do in Santa Teresa beyond surfing | `photos/sunset-boat.jpg` | `photos/river-mouth.jpg`, `photos/montezuma-waterfall.jpg`, `tours/curu-nature-escape/05.jpg`, `tours/bird-lovers-morning/02.jpg`, `tours/nocturno-night-journey/06.jpg`, `photos/beach-lagoon.jpg` |
| How to Get to Montezuma | `blog/getting-to-montezuma/cover-road.jpg` | `cattle-on-a-country-road.jpg`, `gravel-road-to-the-finca.jpg` |
| Birdwatching in Montezuma and Cabuya | `blog/birdwatching-montezuma-cabuya/cover-birders.jpg` | `tours/bird-lovers-morning/hero.jpg`, `tours/bird-lovers-morning/01.jpg` |
| Curu Wildlife Refuge guide | `blog/curu-wildlife-refuge-guide/cover-mangrove-bridge.jpg` | `tours/curu-nature-escape/hero.jpg`, `group-on-the-trail.jpg`, `estuary-mouth.jpg` |
| Night hike (Nocturno) | `tours/nocturno-night-journey/hero.jpg` | `tours/nocturno-night-journey/01.jpg`, `02.jpg`, `blog/night-hike-montezuma-nocturno/dusk-over-the-pacific.jpg` |
| Best time to visit Montezuma | `blog/best-time-to-visit-montezuma/cover-beach-sunset.jpg` | `dry-season-coastline.jpg`, `green-season-river.jpg`, `forest-trail.jpg`, `gulf-sunset-swim.jpg` |
| Family farm (Let's Get Local) | `tours/lets-get-local/hero.jpg` | `tours/lets-get-local/13.jpg`, `08.jpg`, `05.jpg`, `blog/lets-get-local-family-farm/river-crossing.jpg` |

Photos that would make these posts stronger (drop them in and update `src/data/posts.ts`):
- Santa Teresa: Playa Hermosa at low tide, Malpaís tide pools, the Cabo Blanco trail, the Cabuya cemetery island.
- Getting here: the Puntarenas–Paquera ferry, the Tambor airstrip, a shuttle van.
- Birding: turquoise-browed motmot, scarlet macaws in flight, sunrise at Cabuya, herons in the tide pools.
- Curu: white-faced capuchin, howler monkey, white-tailed deer, Halloween crab, Playa Curú.
- Nocturno: tarantula, scorpion under UV light, sleeping motmot, the group with headlamps.
- Best time: Montezuma waterfall in full flow, a green-season afternoon shower, flowering cortez tree.
- Farm: chorreador coffee, the trapiche in use, empanadas being made, organic soaps.
