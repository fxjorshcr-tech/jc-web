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
| `tours/lets-get-local/hero.jpg` | 2000 × 1250 (landscape) | Fresh produce and sugar cane at Finca Integral Didactica in Rio Negro |
| `tours/lets-get-local/finca-ovares-picado.jpg` | 1600 × 1200 | The Ovares Picado family farm in Rio Negro |
| `tours/lets-get-local/trapiche.jpg` | 1600 × 1200 | Manual sugar cane press (trapiche) at the organic farm |
| `tours/lets-get-local/traditional-cooking.jpg` | 1600 × 1200 | Patricia leading a traditional cooking demonstration |
| `tours/lets-get-local/guest.jpg` | 1600 × 1200 | Guest extracting sugar cane juice on the Let's Get Local tour |
| `tours/lets-get-local/fresh-produce.jpg` | 1600 × 1200 | Fresh organic produce harvested in Rio Negro |
| `tours/lets-get-local/cabuya-cemetery-island.jpg` | 1600 × 1200 | Cemetery island off the coast of Cabuya |
| `tours/finca-el-paraiso-atv/hero.jpg` | 2000 × 1250 (landscape) | ATV on a dirt road leading to Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-1.jpg` | 1600 × 1200 | Guests on ATVs at the start of the journey |
| `tours/finca-el-paraiso-atv/gallery-2.jpg` | 1600 × 1200 | View from the trail to Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-3.jpg` | 1600 × 1200 | Finca El Paraíso |
| `tours/finca-el-paraiso-atv/gallery-4.jpg` | 1600 × 1200 | Local meal served at the finca |

Photos from the current site that fit these slots: Nocturno gallery = `nocturno_frog2.jpg`, `nocturno_mushroom3.jpg`, `nocturno_bird.jpg`, `nocturno_mushroom2.jpg`, `nocturno_trail_green.jpg` (from the post "A Good Time for Nocturno"); Bird Lover's Morning = `caracara.jpg` (hero), `sunrise_cabuya.jpg`, `birdloversmorning_woodpecker.jpg`, `image2.jpg`, `image3.jpg`; Curu = `whitefacedmonkey3.jpg` (hero), `curu_bridge2.jpg`, `charlespeck14.jpg`, `curu_halloweencrab.jpg`, `fishing.jpg`; Let's Get Local = `img_5907.jpg` (hero), `img_5914.jpg`, `organic6.jpg`, `finca_ovares7.jpg`, `jc_local.jpg`, `img_5906.jpg`, `dsc_0454.jpg` (Cabuya).

## Priority 3 – About, Guests, Partners, Community, Hire a Guide, Recommendations

| File | Recommended size | Used for |
| --- | --- | --- |
| `about/hero.jpg` | 1600 × 1280 | About page opener |
| `about/jc-guide.jpg` | 1200 × 1500 (portrait) | JC Aguirre guiding guests on a forest trail |
| `about/coati.jpg` | 1600 × 1200 | Coati crossing a trail in the Nicoya Peninsula |
| `guests/header.jpg` | 1600 × 1280 | Happy guests at the end of a JC's Journeys tour |
| `partners/finca-didactica-ovares-picado.jpg` | 1600 × 1200 | Manuel and Patricia Ovares Picado at Finca Integral Didactica |
| `community/montezuma-school-birding-1.jpg` | 1600 × 1200 | Students from Montezuma School looking through binoculars |
| `community/montezuma-school-birding-2.jpg` | 1600 × 1200 | JC teaching kids about local birds on the beach |
| `community/reusable-bags.jpg` | 1600 × 1200 | JC's Journeys reusable bags and souvenirs |
| `hire-a-guide/jc-portrait.jpg` | 1600 × 1280 | JC Aguirre with binoculars |
| `recommendations/poas-1.jpg` | 1200 × 1600 (portrait) | Poas Volcano crater viewpoint |
| `recommendations/poas-2.jpg` | 1200 × 1600 (portrait) | La Paz waterfall near Poas |
| `recommendations/arenal-1.jpg` | 1200 × 1600 (portrait) | Arenal Volcano on a clear day |
| `recommendations/arenal-2.jpg` | 1200 × 1600 (portrait) | Rainforest trail in Arenal National Park |
| `recommendations/tenorio-1.jpg` | 1200 × 1600 (portrait) | Rio Celeste waterfall in Tenorio National Park |
| `recommendations/tenorio-2.jpg` | 1200 × 1600 (portrait) | Blue water of Rio Celeste |
| `recommendations/rincon-de-la-vieja-1.jpg` | 1200 × 1600 (portrait) | Bubbling mud pots at Rincon de la Vieja |
| `recommendations/rincon-de-la-vieja-2.jpg` | 1200 × 1600 (portrait) | Dry forest trail in Rincon de la Vieja National Park |
| `recommendations/osa-1.jpg` | 1200 × 1600 (portrait) | Coastline of the Osa Peninsula |
| `recommendations/osa-2.jpg` | 1200 × 1600 (portrait) | Wildlife in Corcovado National Park |

Current-site originals: `guide_about.jpg` (JC), `coati1.jpg` (mission block), `fincadidactica_couple_cropped.jpg` (partners), `img_6367.jpg` / `img_6362.jpg` / `img_6482.jpg` (community), `about.jpg` (hire a guide), `guests_header2.png` (guests), recommendations: `img_3335.jpg`, `img_3348.jpg` (Poas), `img_2916.jpg`, `img_2959.jpg` (Arenal), `img_4898.jpg`, `dsc0224.jpg` (Tenorio), `img_3165.jpg`, `img_3197.jpg` (Rincon), `img_4971.jpg`, `img_4983.jpg` (Osa).

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

## Priority 5 – Travel Journal (optional, the posts read fine without them)

Each post has a cover (shown in the blog list and at the top of the post, 1600 × 900) plus the inline photos from the
original article (1600 px wide). File names keep the original WordPress names so you can copy them straight from the
old media library (`wp-content/uploads/...`).

### Covers

| File | Post |
| --- | --- |
| `blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/cover-beach_puravida.jpg` | Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress |
| `blog/montezuma-school-goes-bird-watching/cover-img_6363.jpg` | Montezuma School Goes Bird Watching |
| `blog/birding_in_montezuma/cover-img_6071.jpg` | Birding in Montezuma, Costa Rica |
| `blog/celebrating-cabo-blancos-birthday/cover-img_6167.jpg` | Celebrating Cabo Blanco’s Birthday |
| `blog/a-year-of-journeys-in-costa-rica/cover-anniversarybanner_wordpress1.png` | A Year of Journeys in Costa Rica |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/cover-chorreadas_heading.png` | A Costa Rican Culinary Treat: Chorreadas con Natilla |
| `blog/costa-rica-for-2-weeks-1-bag-and-under-1000/cover-img_5405.jpg` | Costa Rica for 2 Weeks: 1 Bag and under $1000 |
| `blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/cover-malpais.jpg` | Costa Rica for the Second Time Visitor (And 3rd and 4th…) |
| `blog/movies-in-montezuma/cover-docufest.jpg` | Movies in Montezuma |
| `blog/southern-nicoya-peninsula-for-baby-boomers/cover-group_post.jpg` | Southern Nicoya Peninsula for Baby Boomers: 10 Tips to Help Older Travelers Prepare for the Trip |
| `blog/adventures-in-osa-peninsula/cover-img_4357.jpg` | Adventures in Osa Peninsula |
| `blog/road-trip-to-rio-celeste-costa-rica/cover-dsc0224.jpg` | Road Trip to Rio Celeste, Costa Rica |
| `blog/a-good-time-for-nocturno/cover-nocturno_bird.jpg` | A Good Time for Nocturno |
| `blog/5-reasons-we-love-low-season-in-costa-rica/cover-img_1864.jpg` | 5 Reasons We Love Low Season in Costa Rica |
| `blog/enjoying-nature-in-curu-wildlife-refuge/cover-curu_bridge2.jpg` | Enjoying Nature in Curu Wildlife Refuge |
| `blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/cover-sunset22.png` | 2 Nights in Southern Nicoya Peninsula: Sunrise to Sunset |
| `blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/cover-guanabana.jpg` | Tropical Fruit for a Healthful Costa Rica Spring Break |
| `blog/packing-light-for-your-costa-rica-nature-trip/cover-photo-2.jpg` | Packing Light for Your Costa Rica Nature Trip |
| `blog/counting-birds-in-tambor-bay/cover-group_birdcount1.jpg` | Counting Birds in Tambor Bay |
| `blog/5-other-reasons-to-visit-montezuma-surroundings/cover-vivero.jpg` | 5 OTHER Reasons to Visit Montezuma (& Surroundings) |
| `blog/the-experience-of-living-abroad-in-just-1-day/cover-house.jpg` | The Experience of Living Abroad, in Just 1 Day |
| `blog/should-we-go-aaaaall-the-way-to-montezuma/cover-img_0023_3.jpg` | Should we go aaaaall the way to Montezuma?! |
| `blog/lessons-in-coconuts/cover.jpg` | Lessons in Coconuts |
| `blog/make-any-tour-an-eco-tour/cover.jpg` | Make Any Tour an Eco-tour |
| `blog/montezuma-for-families/cover-piedracolorada.jpg` | Montezuma for Families |
| `blog/why-nocturno/cover.jpg` | Why ‘Nocturno’? |
| `blog/keeping-it-clean/cover-beach2.jpg` | Keeping it Clean |
| `blog/what-green-really-means/cover-greenseason.jpg` | What “Green” Really Means |
| `blog/beyond-the-resort/cover.jpg` | Beyond the Resort |
| `blog/getting-to-montezuma/cover-aerial_plane.jpg` | So… How do I get to Montezuma? |
| `blog/make-it-a-journey/cover.jpg` | Make It a Journey |

### Inline photos

| File | Alt / context |
| --- | --- |
| `blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/aerial_plane.jpg` | JC's Journeys |
| `blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/p5520728.jpg` | Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress |
| `blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/beach_puravida.jpg` | Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress |
| `blog/montezuma-school-goes-bird-watching/img_6362.jpg` | Montezuma School Goes Birding - JC's Journeys |
| `blog/montezuma-school-goes-bird-watching/img_6367.jpg` | Montezuma School Goes Birding - JC's Journeys |
| `blog/montezuma-school-goes-bird-watching/img_6140.jpg` | Montezuma School Goes Birding - JC's Journeys |
| `blog/montezuma-school-goes-bird-watching/img_6364.jpg` | Montezuma School Goes Birding - JC's Journeys |
| `blog/birding_in_montezuma/mothersdaypost.png` | Birding in Montezuma Costa Rica - JC's Journeys |
| `blog/celebrating-cabo-blancos-birthday/img_6171.jpg` | Cabo Blanco Birthday - Costa Rica |
| `blog/celebrating-cabo-blancos-birthday/img_6176.jpg` | Cabo Blanco Birthday - Costa Rica |
| `blog/celebrating-cabo-blancos-birthday/img_6168.jpg` | Cabo Blanco Birthday - Costa Rica |
| `blog/a-year-of-journeys-in-costa-rica/img_5914.jpg` | JC's Journeys - A year in Review |
| `blog/a-year-of-journeys-in-costa-rica/tap_badge300.jpg` | Travelers Against Plastic |
| `blog/a-year-of-journeys-in-costa-rica/widget.png` | A Year of Journeys in Costa Rica |
| `blog/a-year-of-journeys-in-costa-rica/img_2959.jpg` | JC's Journeys - Arenal |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada4.jpg` | JC's Journeys Let's Get Local - Chorreadas- Costa Rica |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada7.jpg` | JC's Journeys Let's Get Local - Chorreadas |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada6.jpg` | JC's Journeys Let's Get Local - Chorreadas |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada3.jpg` | JC's Journeys Let's Get Local - Chorreadas |
| `blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada2.jpg` | JC's Journeys Let's Get Local - Chorreadas |
| `blog/costa-rica-for-2-weeks-1-bag-and-under-1000/casado.jpg` | Casado - Food Costa Rica |
| `blog/costa-rica-for-2-weeks-1-bag-and-under-1000/img_5450.jpg` | Bus Costa Rica - JC's Journeys |
| `blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/img_3727.jpg` | Costa Rica for the Second Time Visitor |
| `blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/riolajas_jc_edited.jpg` | CostaRica for the Second Time |
| `blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/img_1687.jpg` | Costa Rica for the Second Time Visitor |
| `blog/movies-in-montezuma/docufest2.jpg` | Docufest Extinction Soup |
| `blog/movies-in-montezuma/docufest3.jpg` | La Musa en la Montana - Docufest Montezuma |
| `blog/southern-nicoya-peninsula-for-baby-boomers/honeyguy.jpg` | Let's Get Local - JC's Journeys |
| `blog/southern-nicoya-peninsula-for-baby-boomers/jc_local.jpg` | Let's Get Local - JC's Journeys |
| `blog/adventures-in-osa-peninsula/img_4996.jpg` | Bridge to Rancho Quemado |
| `blog/adventures-in-osa-peninsula/img_5006.jpg` | Cable Tree Rancho Quemado |
| `blog/adventures-in-osa-peninsula/img_50031.jpg` | Osa Peninsula |
| `blog/adventures-in-osa-peninsula/img_4982.jpg` | Adventures in Osa Peninsula |
| `blog/road-trip-to-rio-celeste-costa-rica/img_4892.jpg` | Road to Rio Celeste |
| `blog/road-trip-to-rio-celeste-costa-rica/dsc0186.jpg` | Steps to Waterfall |
| `blog/a-good-time-for-nocturno/nocturno_frog2.jpg` | Nocturno Montezuma Night Hike - Frog |
| `blog/a-good-time-for-nocturno/nocturno_mushroom3.jpg` | Nocturno Montezuma Night Hike - Mushroom |
| `blog/a-good-time-for-nocturno/nocturno_bird.jpg` | Nocturno Montezuma Night Hike - Bird |
| `blog/a-good-time-for-nocturno/nocturno_mushroom2.jpg` | Nocturno Montezuma Night Hike - Mushroom2 |
| `blog/a-good-time-for-nocturno/nocturno_trail_green.jpg` | Nocturno Montezuma Night Hike |
| `blog/5-reasons-we-love-low-season-in-costa-rica/birdloversmorning_woodpecker.jpg` | Bird Lover's Morning - Woodpecker |
| `blog/enjoying-nature-in-curu-wildlife-refuge/whitefacedmonkey3.jpg` | Curu_WhiteFacedMonkey |
| `blog/enjoying-nature-in-curu-wildlife-refuge/curu_kayak.jpg` | Kayaking in Curu Wildlife Refuge |
| `blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/sunrise_cabuya.jpg` | sunrise_cabuya_BirdLoversMorning |
| `blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/malpais.jpg` | Mal Pais |
| `blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/manga.jpg` | Tropical_Fruits_Costa_Rica_JCsJourneys |
| `blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/guanabana.jpg` | Guanabana_TropicalFruit_JCsJourneys |
| `blog/counting-birds-in-tambor-bay/group_birdcount2.jpg` | Counting Birds in Tambor Bay |
| `blog/counting-birds-in-tambor-bay/group_birdcount.jpg` | Counting Birds in Tambor Bay |
| `blog/5-other-reasons-to-visit-montezuma-surroundings/dsc_0454.jpg` | 5 OTHER Reasons to Visit Montezuma (& Surroundings) |
| `blog/5-other-reasons-to-visit-montezuma-surroundings/turtle.jpg` | 5 OTHER Reasons to Visit Montezuma (& Surroundings) |
| `blog/the-experience-of-living-abroad-in-just-1-day/organicfarm3.jpg` | organicfarm_costarica |
| `blog/should-we-go-aaaaall-the-way-to-montezuma/img_0023_3.jpg` | All_the_way_to_montezuma |
| `blog/should-we-go-aaaaall-the-way-to-montezuma/img_0033_2.jpg` | Should we go aaaaall the way to Montezuma?! |
| `blog/make-any-tour-an-eco-tour/img_3974.jpg` | Keeping it Clean - Canteen |
| `blog/make-any-tour-an-eco-tour/bag.jpg` | Make Any Tour an Eco-tour |
| `blog/montezuma-for-families/mario_cooking.jpg` | Let's Get Local - Cooking |
| `blog/keeping-it-clean/img_3974.jpg` | Keeping it Clean - Canteen |
| `blog/beyond-the-resort/beyond_resort.jpg` | Beyond the Resort |
| `blog/getting-to-montezuma/map.png` | map_get_to_montezuma |
| `blog/make-it-a-journey/dsc_0457.jpg` | make_it_a_journey |
