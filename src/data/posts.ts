/**
 * Travel Journal posts rescued from the current site (jcsjourneys.com).
 * Generated from the WordPress export; edit freely. Images are placeholders until the files exist in /public/images.
 */

export type PostBlock =
  | { type: "p" | "h2" | "h3" | "quote"; html: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "embed"; src: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  excerpt: string;
  /** Cover image path relative to /public/images */
  cover: string;
  coverAlt: string;
  blocks: PostBlock[];
}

export const posts: BlogPost[] = [
  {
    "slug": "planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress",
    "title": "Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress",
    "date": "2015-10-19",
    "excerpt": "Let’s face it, vacation planning can be stressful if you’re going to another country, especially if it’s your first visit. Here are 5 tips to help you make your way to the Nicoya Peninsula in…",
    "cover": "blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/cover-beach-sunset.jpg",
    "coverAlt": "Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress",
    "blocks": [
      {
        "type": "p",
        "html": "October is almost over, can you believe it?! It’s getting cooler up north and you’re probably starting to plan your trip to warmer weather in Costa Rica. But let’s face it, vacation <em>planning</em> can be stressful if you’re going to another country, especially if it’s your first visit. Here are 5 tips to help you make your way to the <strong>Nicoya Peninsula</strong> in Costa Rica with less headache and more excitement!"
      },
      {
        "type": "image",
        "src": "blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/aerial_plane.jpg",
        "alt": "JC's Journeys"
      },
      {
        "type": "p",
        "html": "<strong>#1 Reserve Transfers Early</strong> – If you’re traveling during the holiday season (November, December, January), you’ll thank yourself for not waiting until the last minute to reserve your airport transfer. As with anywhere, these months can get <em>very </em>busy in Costa Rica and specifically the Nicoya Peninsula. If you’re flying from San Jose to the peninsula (Tambor), be sure to reserve flights like… now! They will go fast! If you’re arranging a shuttle they can also fill up quickly during this time, so don’t hesitate. Even if you’re being adventurous and planning to take buses all the way to <strong>Montezuma</strong>, keep in mind, they may be pretty full depending on the day and time that you travel so don’t be afraid to treat yourself to a pre-arranged shuttle transfer to prevent the stress of figuring out how you’ll get there when you’re already at the airport."
      },
      {
        "type": "p",
        "html": "<strong>#2 Decide on Tours</strong> – Most tours can be arranged somewhat last minute, but to make your life easier and enjoy a more relaxing vacation, try to research tour options before you arrive. Since you probably have limited time, pick a few must-do tours first, then contact a tour guide or operator before your trip to lock in a date for your tour. This may be more difficult with large group tours as departure often depends on the number of people who book. But if you’re planning on private tours or small group tours, you’ll want to reserve those early. Weather is not typically an issue with tours during peak season, but to keep options open, you may want to decide on primary and secondary tour options in case one doesn’t work out on the day you planned so you’re not left laying around the beach twiddling your thumbs for the third day in a row on your 5-day vacation."
      },
      {
        "type": "image",
        "src": "blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/p5520728.jpg",
        "alt": "Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress"
      },
      {
        "type": "p",
        "html": "<strong>#3 Pack Light, But Well</strong> – It’s easier to move around and a lot less stressful if you pack with having to carry your bag in mind. Take essentials like cash (for when ATM doesn’t work) a few basic over-the-counter medications, and of course appropriate clothing and footwear, but try to keep it to a carry-on size suitcase or backpack. Small planes have strict luggage requirements anyway, and most shuttles from the airport to the Nicoya Peninsula still require you to carry your luggage onto the ferry to cross over. So again, to ease the frustration and scramble to move heavy luggage around, make it easy on yourself and check this <strong><a href=\"/blog/packing-light-for-your-costa-rica-nature-trip\">blog</a></strong> for more packing tips."
      },
      {
        "type": "p",
        "html": "<strong>#4 Check Your Calendar</strong> – Think about it, if you’re planning to travel Christmas week… how many other people do you think are probably trying to do the same? The ferry to Nicoya peninsula can become very crowded during holidays, and periodically schedules change as well. Check not only your calendar but calendars for local holidays and make sure there are no planned changes to transportation. Also, try to avoid the couple days around major holidays for transfers to airports for obvious reasons. Mark the days on your calendar so that when you’re traveling and carefree, you won’t forget what day it is! Also be sure to note closure dates for national parks so you don’t travel to them on those days."
      },
      {
        "type": "image",
        "src": "blog/planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress/beach_puravida.jpg",
        "alt": "Planning Your Trip to Costa Rica: 5 Tips to Reduce Your Planning Stress"
      },
      {
        "type": "p",
        "html": "<strong>#5 Mentally Prepare</strong> – Remember that it’s a vacation! If you take a little time to do some planning in advance, you’ll be able to relax and enjoy the experience while you’re in Costa Rica. Remind yourself that although traveling during the holidays can be challenging with crowds, airport lines, and customs forms, you’re here to relax and be away from the office, cold weather, and typical holiday shopping pressure. Doesn’t that make it all worthwhile??"
      }
    ]
  },
  {
    "slug": "montezuma-school-goes-bird-watching",
    "title": "Montezuma School Goes Bird Watching",
    "date": "2014-11-03",
    "excerpt": "When a group of 15 seven and eight-year-olds become first-time birders for a day, there’s no stopping their curiosity, excitement and all around fun. That’s exactly what happened last week when JC…",
    "cover": "blog/montezuma-school-goes-bird-watching/cover-img_6363.jpg",
    "coverAlt": "Montezuma School Goes Bird Watching",
    "blocks": [
      {
        "type": "p",
        "html": "When a group of 15 seven and eight-year-olds become first-time birders for a day, there’s no stopping their curiosity, excitement and all around fun. That’s exactly what happened last week when JC led a group of students from the Montezuma Elementary School on a bird watching outing and nature lesson in the outskirts of the nearby town Cabuya."
      },
      {
        "type": "p",
        "html": "<strong>Birding and Learning</strong>"
      },
      {
        "type": "image",
        "src": "blog/montezuma-school-goes-bird-watching/img_6362.jpg",
        "alt": "Montezuma School Goes Birding - JC's Journeys"
      },
      {
        "type": "p",
        "html": "The goal of the day was for the group of first and second grade kids to get an in-depth lesson about four birds they would be sure to see in the area: Yellow-crowned Night Heron, Snowy Egret, Little Blue Heron, and Brown Pelican."
      },
      {
        "type": "p",
        "html": "Learning the names of these birds in both Spanish and English, as well as details of the species’ appearance and behavior, the group then got a chance to view the birds through a scope and binoculars. Getting an up-close view of the birds using these tools piqued interest even more and got the kids excited about the bright colors they could see and compelled them to seek out more and different birds on their own. The kids learned that there were officially 903 species of birds in Costa Rica and spotted a hummingbird which offered a prime opportunity to explain how hummingbirds are great pollinators, and thus the importance of protecting them and all wildlife."
      },
      {
        "type": "image",
        "src": "blog/montezuma-school-goes-bird-watching/img_6367.jpg",
        "alt": "Montezuma School Goes Birding - JC's Journeys"
      },
      {
        "type": "p",
        "html": "In addition to the many birds kids learned about that day, howler monkeys made a grand appearance, and while these kids are no strangers to the sight of a howler monkey, JC pointed out some interesting facts about them and made his famous howler imitation much to their amusement."
      },
      {
        "type": "p",
        "html": "<strong>Lessons in Recycling</strong>"
      },
      {
        "type": "p",
        "html": "Lastly, as part of their final lesson, the kids each received a birding journal crafted from recycled cereal boxes, milk cartons and cardboard to integrate the concepts of recycling and environmental protection for the sake of wildlife conservation. Filled with new knowledge, the group will later jot down details and draw pictures in their journals recalling information from the outing such as the bird’s name, location, diet and migration patterns to reinforce their lesson. But before returning to school, Kevin, a local shuttle operator and driver for the day, encouraged each student to collect a few pieces of rubbish strewn around the beach to deposit it in it’s proper recycling bin back in town. These kids are awesome! We can see that they are truly inspired and already have great respect for the environment and wildlife around them."
      },
      {
        "type": "image",
        "src": "blog/montezuma-school-goes-bird-watching/img_6140.jpg",
        "alt": "Montezuma School Goes Birding - JC's Journeys"
      },
      {
        "type": "p",
        "html": "In timing with World Responsible Tourism Day, this small outing is just the type of thing we hope to continue doing with Montezuma School and other schools in the area. We love doing tours and sharing this love of nature and environment with visitors from around the world, but it’s just as important for us to share it with those around us every day as well."
      },
      {
        "type": "image",
        "src": "blog/montezuma-school-goes-bird-watching/img_6364.jpg",
        "alt": "Montezuma School Goes Birding - JC's Journeys"
      },
      {
        "type": "p",
        "html": "Happy <a href=\"http://www.icrtourism.org/events/world-responsible-tourism-day/\">World Responsible Tourism Day</a>! And thanks Montezuma School! It was fun spending time with you and we’re sure you will have some things you can teach us next time too. 🙂"
      },
      {
        "type": "p",
        "html": "See more info about our birding tours <strong><a href=\"/tours/bird-lovers-morning\">here</a></strong>."
      }
    ]
  },
  {
    "slug": "birding_in_montezuma",
    "title": "Birding in Montezuma, Costa Rica",
    "date": "2014-10-25",
    "excerpt": "When the sound of singing tropical birds awakens you at sunrise on your vacation, what better thing to do than wake up with them and do a little bird watching? Here are a few reasons we think bird…",
    "cover": "blog/birding_in_montezuma/cover-birders.jpg",
    "coverAlt": "Birding in Montezuma, Costa Rica",
    "blocks": [
      {
        "type": "p",
        "html": "<strong>W</strong>hen the sound of singing tropical birds awakens you at sunrise on your vacation, what better thing to do than wake up with them and do a little bird watching? One of our guide’s favorite pastimes in Montezuma and Nicoya Peninsula (even outside the job), is bird watching. And there are many reasons birding makes for a great activity for all vacationers to the Nicoya Peninsula as well; young, old, couples, families or solo travelers. Here are a few reasons we think bird watching should be at the top of your list of things to do in Montezuma."
      },
      {
        "type": "p",
        "html": "<strong>1. It’s Fun &amp; Challenging</strong>"
      },
      {
        "type": "p",
        "html": "Birding is like a game, a real life Where’s Waldo or exciting scavenger hunt. Bird watching puts your attention to detail to the test and challenges your ability to spot movement, hear different songs, and put names to what you see. Whether you’re a die hard nature lover or just learning how amazing it can be, you may find yourself feeling like a kid again as you see colorful or rare species for the first time."
      },
      {
        "type": "p",
        "html": "<strong>2. It’s Educational</strong>"
      },
      {
        "type": "p",
        "html": "Anyone can see beautiful birds and be amused, but you can also learn a lot from birding. Seeing an interesting bird can spark an interest to seek inform<strong></strong>ation about what a species eats, where it lives and how it migrates, which can be especially educational for kids. Birders as young as three or four years old can gain a lot of knowledge from bird watching and make for a very productive vacation!"
      },
      {
        "type": "image",
        "src": "blog/birding_in_montezuma/mothersdaypost.png",
        "alt": "Birding in Montezuma Costa Rica - JC's Journeys"
      },
      {
        "type": "p",
        "html": "<strong>3. Everyone Can Do It</strong>"
      },
      {
        "type": "p",
        "html": "Few tools are needed to be a bird watcher. Of course binoculars or a scope help see more distant or hidden birds, but pretty much anyone can be a bird watcher. Since it’s really not difficult, it’s a great activity for families with group members of varying ages. Even vision or hearing impaired travelers can enjoy this activity by listening for birds’ sounds, or viewing through a telescope if hearing is a challenge."
      },
      {
        "type": "p",
        "html": "<strong>4. It Helps Conservation Efforts</strong>"
      },
      {
        "type": "p",
        "html": "Birding helps with conservation since it is educational and ensures that visitors gain a respect for the nature and environment they are in. It can also be a very low impact activity for the surrounding environment when you are on natural trails, and ensure you are with a tour company that uses best practices such as not disturbing the wildlife or environment."
      },
      {
        "type": "p",
        "html": "<strong>5. There’s Lots of Variety</strong>"
      },
      {
        "type": "p",
        "html": "If you like to be different, a birding tour will ensure your vacation will never be exactly like anyone else’s. With 903 bird species in Costa Rica, you are likely to see many different ones than perhaps another group may see, but you’ll always be guaranteed to see something interesting. Here are just a few of the birds we have seen recently around Montezuma. Which do you hope to see on your Costa Rica vacation?"
      },
      {
        "type": "p",
        "html": "This slideshow requires JavaScript."
      },
      {
        "type": "p",
        "html": "*All photos by JC Aguirre"
      },
      {
        "type": "p",
        "html": "<strong>See our <a href=\"/tours/bird-lovers-morning\">Bird Lover’s Morning</a> tour to make a reservation for bird watching around Montezuma.</strong>"
      }
    ]
  },
  {
    "slug": "celebrating-cabo-blancos-birthday",
    "title": "Celebrating Cabo Blanco’s Birthday",
    "date": "2014-10-20",
    "excerpt": "Yesterday, Cabo Blanco Nature Reserve celebrated it’s 51st birthday. Joining in the celebration were families and businesses from around the area that recognize the importance of this reserve and…",
    "cover": "blog/celebrating-cabo-blancos-birthday/cover-img_6167.jpg",
    "coverAlt": "Celebrating Cabo Blanco’s Birthday",
    "blocks": [
      {
        "type": "p",
        "html": "Yesterday, Cabo Blanco Nature Reserve celebrated it’s 51st birthday. Joining in the celebration were families and businesses from around the area that recognize the importance of this reserve and it’s ongoing preservation of nature and wildlife."
      },
      {
        "type": "p",
        "html": "<a href=\"https://jcsjourneys.wordpress.com/wp-content/uploads/2014/10/img_6176.jpg\"> </a>"
      },
      {
        "type": "image",
        "src": "blog/celebrating-cabo-blancos-birthday/img_6171.jpg",
        "alt": "Cabo Blanco Birthday - Costa Rica"
      },
      {
        "type": "image",
        "src": "blog/celebrating-cabo-blancos-birthday/img_6176.jpg",
        "alt": "Cabo Blanco Birthday - Costa Rica"
      },
      {
        "type": "image",
        "src": "blog/celebrating-cabo-blancos-birthday/img_6168.jpg",
        "alt": "Cabo Blanco Birthday - Costa Rica"
      },
      {
        "type": "p",
        "html": "Known as an absolute reserve, Cabo Blanco was the first protected natural area of Costa Rica. Today it is visited by tourists from all over the world who want to see white faced monkeys, coati, exotic birds and of course the cape for which the reserve gets it’s name Cabo Blanco, or “white cape” at the tip of the Nicoya Peninsula."
      },
      {
        "type": "p",
        "html": "While visitors often come to the area only to hike and see some wildlife, the celebration reminds us how valuable nature is and what a huge part it plays in local lifestyle and culture. It not only helps us become aware of the role nature plays in everyone’s lives, but also more apt to contribute to it’s preservation. And for that reason, why wouldn’t you sing Happy Birthday to a national park?"
      },
      {
        "type": "embed",
        "src": "https://player.vimeo.com/video/109533181"
      },
      {
        "type": "p",
        "html": "<strong>If you’re interested in visiting Cabo Blanco, contact us for <a href=\"/tours\">reservations</a> or to inquire about rates.<br> </strong>"
      }
    ]
  },
  {
    "slug": "a-year-of-journeys-in-costa-rica",
    "title": "A Year of Journeys in Costa Rica",
    "date": "2014-10-09",
    "excerpt": "JC’s Journeys turned one today! We have so much to be thankful for and this past year gave us much to reflect on and reminisce about. You’ve been with us on our journey the whole way and we’d like…",
    "cover": "blog/a-year-of-journeys-in-costa-rica/cover-anniversarybanner_wordpress1.png",
    "coverAlt": "A Year of Journeys in Costa Rica",
    "blocks": [
      {
        "type": "p",
        "html": "JC’s Journeys turned one today! We have so much to be thankful for and this past year gave us much to reflect on and reminisce about. You’ve been with us on our journey the whole way and we’d like to recap some important things we’ve achieved and update you on our plans for the future. Thank you for following, supporting, liking, and growing with JC’s Journeys!"
      },
      {
        "type": "p",
        "html": "<strong>What We’ve Accomplished</strong>"
      },
      {
        "type": "p",
        "html": "In addition to providing tours throughout the year to visitors from around the world, we have worked hard to develop working relationships with hotels around Montezuma, Tambor, and Santa Teresa. But perhaps more importantly, we have worked to include more community members in our Let’s Get Local tour. Our community contacts are what makes the tour what it is. Their enthusiasm for innovation, culture, and environment and education shows. With partners like Finca Ovares Picado, an organic farm recognized by Costa Rica’s Ecological Blue Flag Program, we believe we are moving in the right direction."
      },
      {
        "type": "image",
        "src": "blog/a-year-of-journeys-in-costa-rica/img_5914.jpg",
        "alt": "JC's Journeys - A year in Review"
      },
      {
        "type": "p",
        "html": "We also made it a priority to encourage environmental sustainability by setting a good example. As part of our business model, we integrated ways to reduce plastic waste and other rubbish. We took the <a href=\"http://www.travelersagainstplastic.org/#\">TAP</a> (Travelers Against Plastic) pledge, providing alternative beverage options for tours and promoting reusable water bottles and grocery bags."
      },
      {
        "type": "image",
        "src": "blog/a-year-of-journeys-in-costa-rica/tap_badge300.jpg",
        "alt": "Travelers Against Plastic"
      },
      {
        "type": "p",
        "html": "Lastly, we did research in areas including Tenorio, Arenal and Osa Peninsula to find out more about rural tourism and opportunities for learning and growth with like-minded businesses."
      },
      {
        "type": "p",
        "html": "<strong>What We’re Working On</strong>"
      },
      {
        "type": "p",
        "html": "We are striving to continue our cooperative efforts with existing organizations in the area that similarly value community and environment. This includes programs that offer free language courses, turtle and wildlife conservation and educational birding activities. We are working on building partnerships with these organizations to provide nature and culture tours to their volunteers and students, and participate in the coordination of more community activities. Along with this, we are working on our relationships with Audubon societies in the US and eco-lodges around Costa Rica."
      },
      {
        "type": "p",
        "html": "Currently, we are also conducting a modest fundraising campaign to raise money for our continued growth. We have managed to get around for our work by walking, biking, and hitchhiking! These methods are great for the environment and we plan to continue this whenever possible. But to achieve certain tasks at greater distances in more remote places, we’ll need a slightly more efficient method. So, for the month of October, to mark our anniversary, we’ll be raising funds to purchase a used vehicle to help us accomplish more and reach our growth potential."
      },
      {
        "type": "image",
        "src": "blog/a-year-of-journeys-in-costa-rica/widget.png",
        "alt": "A Year of Journeys in Costa Rica"
      },
      {
        "type": "p",
        "html": "<strong>Big Plans For The Year Ahead</strong>"
      },
      {
        "type": "p",
        "html": "Our grand vision for the upcoming year is to make even more connections with local organizations and residents along routes from Arenal to Nicoya Peninsula to expand our “Let’s Get Local” style tour offerings. To develop additional tours of this nature in an area that is extremely rich in biodiversity, culture and history would be an ideal and logical path for us given our guide JC’s ties to, and love of both areas. We are excited to continue exploring creative ways to bring you the best of Costa Rican nature and culture and can’t wait to see what the next year brings! Thank you again for being beside us as we work to share Costa Rica… naturally."
      },
      {
        "type": "image",
        "src": "blog/a-year-of-journeys-in-costa-rica/img_2959.jpg",
        "alt": "JC's Journeys - Arenal"
      }
    ]
  },
  {
    "slug": "a-costa-rican-culinary-treat-chorreadas-con-natilla",
    "title": "A Costa Rican Culinary Treat: Chorreadas con Natilla",
    "date": "2014-09-15",
    "excerpt": "It’s the middle of September. And while there are still many sunny days in the Southern Nicoya Peninsula, there’s nothing more perfect to enjoy on a rainy morning or afternoon during the wet…",
    "cover": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/cover-chorreadas_heading.png",
    "coverAlt": "A Costa Rican Culinary Treat: Chorreadas con Natilla",
    "blocks": [
      {
        "type": "p",
        "html": "It’s the middle of September. And while there are still many sunny days in the Southern Nicoya Peninsula, there’s nothing more perfect to enjoy on a rainy morning or afternoon during the wet season than a homemade chorrreada with natilla cream and a delicious cup of coffee."
      },
      {
        "type": "p",
        "html": "Chorreadas are a flat round corn cake similar in appearance to a pancake. This simple Costa Rican dish is made with few ingredients including corn (the main ingredient), milk, salt and oil, and goes best topped with natilla, a sour cream that perfectly complements the savory and slightly sweet treat."
      },
      {
        "type": "p",
        "html": "It all starts with a bundle of fresh corn. During the rainy season is a fashionable time to enjoy chorreadas as it’s a time when corn is being harvested, and the abundance of it by local Costa Rican farmers like Mario (pictured) brings lots of surplus to make enough chorreadas to go around. The process goes something like this: boil the corn, blend all the ingredients together, pour onto a hot ‘comal’, and you’ll be eating chorreadas in no time."
      },
      {
        "type": "image",
        "src": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada4.jpg",
        "alt": "JC's Journeys Let's Get Local - Chorreadas- Costa Rica",
        "caption": "Boil fresh corn"
      },
      {
        "type": "image",
        "src": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada7.jpg",
        "alt": "JC's Journeys Let's Get Local - Chorreadas",
        "caption": "Prepare ingredients"
      },
      {
        "type": "image",
        "src": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada6.jpg",
        "alt": "JC's Journeys Let's Get Local - Chorreadas",
        "caption": "Blend ingredients"
      },
      {
        "type": "image",
        "src": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada3.jpg",
        "alt": "JC's Journeys Let's Get Local - Chorreadas",
        "caption": "Pour onto comal"
      },
      {
        "type": "image",
        "src": "blog/a-costa-rican-culinary-treat-chorreadas-con-natilla/choreada2.jpg",
        "alt": "JC's Journeys Let's Get Local - Chorreadas",
        "caption": "Enjoy!"
      },
      {
        "type": "p",
        "html": "The best place to try one of these would be from a local family or small restaurant where you get a real, traditional sample of how the dish is made and how it should taste. If you’d like to see it done, we can always arrange a special “<a href=\"/tours/lets-get-local\">Let’s Get Local</a>” tour to give the inside view. But for now, enjoy this video, and when your mouth begins to water… jump on a plane and come to see us! We’ll eat one for you in the meantime. 😉"
      },
      {
        "type": "embed",
        "src": "https://player.vimeo.com/video/106112409"
      }
    ]
  },
  {
    "slug": "costa-rica-for-2-weeks-1-bag-and-under-1000",
    "title": "Costa Rica for 2 Weeks: 1 Bag and under $1000",
    "date": "2014-08-21",
    "excerpt": "Summer vacation may be coming to an end for many North Americans but if you’ve got a little time left, we have a few ideas for how you can still visit Costa Rica for two weeks, carrying just one…",
    "cover": "blog/costa-rica-for-2-weeks-1-bag-and-under-1000/cover-img_5405.jpg",
    "coverAlt": "Costa Rica for 2 Weeks: 1 Bag and under $1000",
    "blocks": [
      {
        "type": "p",
        "html": "Summer vacation may be coming to an end for many North Americans but if you’ve got a little time left, we have a few ideas for how you can still visit Costa Rica for two weeks, carrying just one bag and spending less than $1000. Here’s our plan and loose itinerary:"
      },
      {
        "type": "p",
        "html": "<strong>Airfare: $400</strong>"
      },
      {
        "type": "p",
        "html": "Depending on where you’re flying from, airfare could be even cheaper than this. Based on a round trip flight from Los Angeles to San Jose on Spirit Airlines, carrying only their allowed one free “personal item”, which is actually a good sized backpack, this time of year you’ll pay about $400 total. Take a few snacks, your own water bottle and pillow and you won’t have to shell out more for those little amenities on-board. See this <a href=\"/blog/packing-light-for-your-costa-rica-nature-trip\">blog</a> for how to pack light but cut out as much as you can to make sure your items fit in a bag you don’t have to pay for!"
      },
      {
        "type": "p",
        "html": "<strong>Hostels/Accommodations: $200</strong>"
      },
      {
        "type": "p",
        "html": "Hostels will be your cheapest option for accommodations and will average about $15 per night for mixed gender dorms. Many also offer free breakfast so take full advantage of this to help save on your food costs, then maybe you can splurge on a nice room at the end of your trip. <a href=\"http://www.costaricahostelnetwork.com/alajuela_backpackers.php\">Costa Rica Hostel Network</a> is a good source for information on nice hostels throughout the country."
      },
      {
        "type": "p",
        "html": "<strong>Food: $150</strong>"
      },
      {
        "type": "image",
        "src": "blog/costa-rica-for-2-weeks-1-bag-and-under-1000/casado.jpg",
        "alt": "Casado - Food Costa Rica"
      },
      {
        "type": "p",
        "html": "This is assuming you eat like a local and budget roughly $10 per day on food. An easy way to keep costs down is to again, take advantage of free breakfasts at hostels/hotels, or buy fruit, bread and snacks from small shops or grocery stores for breakfasts. Larger lunches or dinners of casados (rice and beans with a meat like chicken, fish or beef) around Costa Rica will run about 3000 colones or $6 at the smaller sodas (small restaurants). It will give you plenty of food to fill up then you can just eat snacks or another small meal later on."
      },
      {
        "type": "p",
        "html": "<strong>Bus/Transportation: $100</strong>"
      },
      {
        "type": "p",
        "html": "Our two week budget itinerary would be something like this: Alajuela (SJO airport) to Poas, to Arenal, to Monteverde, to Nicoya Peninsula (Montezuma/Santa Teresa), to Manuel Antonio and then back to the airport in Alajuela. It is very possible to take buses to all of these areas and carrying only one bag will make your travel a lot easier. It would take a whole other blog to explain how to take the bus to and from each of these places (stay posted and I’ll try to get one up soon), but they’re the cheapest way to go averaging around $5 for each leg of your trip. Splurge on a shuttle to save time from Arenal to Nicoya Peninsula and keep JC’s key phrase in mind when taking buses; “preguntando se llega a Roma” or “asking will get you to Rome”. In other words people are willing to offer information on bus routes so just ask and ask many people and you’ll get to where you need to go."
      },
      {
        "type": "image",
        "src": "blog/costa-rica-for-2-weeks-1-bag-and-under-1000/img_5450.jpg",
        "alt": "Bus Costa Rica - JC's Journeys"
      },
      {
        "type": "p",
        "html": "*<em>Send us comments for questions on specific bus routes or options and we’ll do our best to answer.</em>"
      },
      {
        "type": "p",
        "html": "<strong>Tours/Activities: $150</strong>"
      },
      {
        "type": "p",
        "html": "Be selective in what tours you do. Tours can get very pricey very fast but budgeting $150 here for a nature tour, zip line or something adventurous plus a couple cultural activities or hikes in National Parks should be enough to keep you entertained. Of course we’re biased, but we also think a bird watching tour like our <a href=\"/tours/bird-lovers-morning\">Bird Lovers’ Morning</a> is great this time of year. Finding free things to do might be challenging but being in another country is entertainment in itself so take it all in and enjoy every step of your journey!"
      },
      {
        "type": "p",
        "html": "Additional tips: Budget for the exit tax at the airport approximately $30, bring your own reusable water bottle and drink tap (yes, it’s potable), and if you must buy souvenirs make it something you don’t have to check an extra bag for on your flight."
      }
    ]
  },
  {
    "slug": "costa-rica-for-the-second-time-visitor-and-3rd-and-4th",
    "title": "Costa Rica for the Second Time Visitor (And 3rd and 4th…)",
    "date": "2014-07-28",
    "excerpt": "You’ve been to Costa Rica once, and when you got there you hit the ground running. You find yourself wanting to return but are wondering what to do this time. Here are a few of our suggestions for…",
    "cover": "blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/cover-sunset.jpg",
    "coverAlt": "Costa Rica for the Second Time Visitor (And 3rd and 4th…)",
    "blocks": [
      {
        "type": "p",
        "html": "You’ve been to Costa Rica once, and when you got there you hit the ground running. Maybe you zip-lined through the jungle, saw some volcanoes, rafted down a river and surfed the Pacific waves. You find yourself wanting to return but are wondering what to do this time. You ask: What should I do? Where should I go? What haven’t I seen, done or visited?"
      },
      {
        "type": "p",
        "html": "The answers to these questions really depend on your travel style and how much you did on your first visit in Costa Rica, whether you want to slow it down or amp it up. Here are a few of our suggestions for things to do on your second (or third or fourth) visit to Costa Rica based on the type of visit you may have had the first time you were here."
      },
      {
        "type": "p",
        "html": "<strong>Jam-Packed Adventure Trip</strong>"
      },
      {
        "type": "p",
        "html": "Now that you need a vacation from your vacation, you can return to Costa Rica and just take it all in at a nice relaxed pace. You did all that outdoor stuff, but how much did you learn about the biodiversity in those areas? If it wasn’t much, don’t worry, you’re not the only one. But on your second trip to Costa Rica, you can do some guided hiking tours where you will learn more about the environment you’re in, than you would just seeing it from above at high speeds. Most of the national parks offer naturalist guides which many people opt out of because the trails are usually very good and many people choose to save money by hiking on their own, but you get so much more out of it with a guide to tell you about all the animals, plants and ecosystems you see. Also check out nature tours on privately owned trails as they’ll usually offer a more personal feel to the experience."
      },
      {
        "type": "p",
        "html": "You might also consider spending a few days volunteering at one of the many nature conservation sites all over Costa Rica. It may not offer as big of an adrenaline punch, but it will be very rewarding to see baby turtles hatch or just take some time to speak with organizations to learn about the animals and their habitats."
      },
      {
        "type": "image",
        "src": "blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/img_3727.jpg",
        "alt": "Costa Rica for the Second Time Visitor"
      },
      {
        "type": "p",
        "html": "ASVO – Turtle Conservation – Montezuma"
      },
      {
        "type": "p",
        "html": "<strong>Relaxing All-Inclusive Resort Vacation</strong>"
      },
      {
        "type": "p",
        "html": "Vacation should definitely be about relaxation. But if you’re visiting Costa Rica for a second or third time, chances are you want to do a little more than hang out by the pool all day. One easy way to combine both getting a better feeling of the country you’re in is to book your stay at an <strong>eco-lodge</strong>. It’s an easy way to get outside and explore nature a bit more while still enjoying comfortable accommodations. If you’re with the family, some great yet still easy going activities good for everyone include <a href=\"/tours/bird-lovers-morning\">bird watching</a>, and rural tourism where the activities are interactive for kids and they can learn about local culture and lifestyles."
      },
      {
        "type": "p",
        "html": "Resort style vacations often mean that you were pretty much in one area for your whole vacation. So for a repeat visit, consider a different area with a different environment from your first stay so you can learn about a completely different area. For example if you were at a beach resort the first time, try a rainforest the second time, and so on. It will give you a new perspective of a different area without having to pay for expensive and time consuming excursions from your hotel. If you opt to stay in the same area, you can still get outside and see a bit more of your surroundings by hiring a <a href=\"/hire-a-guide\">local guide</a> for a day tour. (See more below)"
      },
      {
        "type": "image",
        "src": "blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/riolajas_jc_edited.jpg",
        "alt": "CostaRica for the Second Time"
      },
      {
        "type": "p",
        "html": "Bird Lover’s Morning Tour – Rio Lajas – Cabuya"
      },
      {
        "type": "p",
        "html": "<strong>Been There, Done That</strong>"
      },
      {
        "type": "p",
        "html": "Maybe you did it all on your first trip, or at least it seemed that way. Many larger tour companies will offer ‘best of’ types tours where you visit the most popular places and do the most popular activities in a 1-2 week long trip. If this was what your first visit was like, don’t worry, there’s still plenty you likely did not see or do and you may find yourself wanting to return for a more authentic and down-to-earth experience."
      },
      {
        "type": "p",
        "html": "Since you probably went all over the country on your first trip, we recommend finding the place you liked best and going back there for the duration of your repeat Costa Rica visit. This way you can have time to visit markets and local villages (like the fishing one pictured below), walk around more, interact with residents and feel like you’ve actually been to a different country (instead of like you just spent two weeks inside a travel brochure!). We think one of the best ways to do this is to hire a local guide who can take you off the beaten path and show you more local sights. Depending on your interests, this is also a great idea because a private guide can tailor your tour to things you will find most interesting on a personal level as opposed to things that are on the ‘must-see’ checklist for most tour groups."
      },
      {
        "type": "p",
        "html": "You might also do a little digging and find different ways to see the country rather than from the inside of a shuttle bus, like bicycle tours, kayaking tours and other eco-tours that are becoming more popular. These can get you a closer look at different areas and make sure that you are experiencing a more authentic Costa Rica."
      },
      {
        "type": "image",
        "src": "blog/costa-rica-for-the-second-time-visitor-and-3rd-and-4th/img_1687.jpg",
        "alt": "Costa Rica for the Second Time Visitor"
      },
      {
        "type": "p",
        "html": "Local Fishing Village – Tambor"
      }
    ]
  },
  {
    "slug": "movies-in-montezuma",
    "title": "Movies in Montezuma",
    "date": "2014-07-22",
    "excerpt": "Beginning last weekend and continuing through this next weekend the Costa Rica International Film Festival has been in Montezuma bringing together documentary and independent filmmakers to debut…",
    "cover": "blog/movies-in-montezuma/cover-docufest.jpg",
    "coverAlt": "Movies in Montezuma",
    "blocks": [
      {
        "type": "image",
        "src": "blog/movies-in-montezuma/docufest2.jpg",
        "alt": "Docufest Extinction Soup"
      },
      {
        "type": "p",
        "html": "Beginning last weekend, and continuing through this next weekend, the <a href=\"http://costaricafilmfestival.org/home.html\">Costa Rica International Film Festival</a> has been in Montezuma bringing together documentary and independent filmmakers to debut and share their works of art in this remote corner of the world."
      },
      {
        "type": "p",
        "html": "At first thought, you might wonder as i did; “a film festival, in Montezuma? There isn’t even a movie theater there”. But what better place to celebrate unique ideas and themes than in a place far removed from the blockbusters of Hollywood? Sitting in on a few of the documentaries presented last weekend was inspiring to our guide JC who watched “<a href=\"https://vimeo.com/77932526\">La Musa en la Montaña</a>” about community projects in Costa Rica’s mountainous Monteverde, and “<a href=\"https://vimeo.com/85091790\">Extinction Soup</a>” which discussed the problem of hunting sharks for their fins to use in some cultural cuisines. “It’s great because it creates consciousness about these issues”, says JC who left feeling like there was so much more work we could do and create to help the community and environment. Because film expresses visually what newspapers or articles sometimes cannot, the messages and stories that come through in these documentaries become that much more compelling. Film festivals like this make it easier to see that there are other communities in the country or around the world that are doing impressive things every day to improve life. Being able to see and hear the stories of how they are doing so is definitely inspiring and empowering."
      },
      {
        "type": "image",
        "src": "blog/movies-in-montezuma/docufest3.jpg",
        "alt": "La Musa en la Montana - Docufest Montezuma"
      },
      {
        "type": "p",
        "html": "Much like travel can bring new ideas, share art forms, and communicate international issues to distant places, film can also bring people together whether for important discussion on environmental or community problems, or for sheer entertainment. As the film festival continues we will look forward to some more of both education and entertainment factors. And in the meantime, we are thrilled that Montezuma has attracted so many creative and intriguing minds to share their ideas as well as learn about the rich culture and ideas that thrive from the Nicoya Peninsula. We can only hope that the peninsula has offered as much inspiration back to the filmmakers as it has received these past few days. Congrats to all the filmmakers and participants!"
      },
      {
        "type": "p",
        "html": "For a deeper look into culture and local life in the area, take a look at our “<a href=\"/tours/lets-get-local\">Let’s Get Local</a>” tour."
      }
    ]
  },
  {
    "slug": "southern-nicoya-peninsula-for-baby-boomers",
    "title": "Southern Nicoya Peninsula for Baby Boomers: 10 Tips to Help Older Travelers Prepare for the Trip",
    "date": "2014-06-13",
    "excerpt": "Whether you’re looking for the health aspects of the “Blue Zone” or just looking to get away for a bit, here are 10 tips to help older travelers prepare for a healthy and safe trip to the Nicoya…",
    "cover": "blog/southern-nicoya-peninsula-for-baby-boomers/cover-group.jpg",
    "coverAlt": "Southern Nicoya Peninsula for Baby Boomers: 10 Tips to Help Older Travelers Prepare for the Trip",
    "blocks": [
      {
        "type": "p",
        "html": "The Nicoya Peninsula is a fantastic place to visit whether you’re looking for the infamous health aspects of the “Blue Zone” or just looking to get away for a bit. But to make the most of your trip and be well prepared, there are a few things older travelers (or any traveler for that matter) may like to know before they arrive to ensure an enjoyable, healthy and safe trip."
      },
      {
        "type": "p",
        "html": "<strong>1. Heat &amp; Humidity</strong>"
      },
      {
        "type": "p",
        "html": "Unless you’re from a humid area, adjusting to the heat and humidity in the Nicoya Peninsula can take some time. It get’s HOT. And very humid. Go easy on the physical activity for the first couple days. Make sure you drink plenty of water (check out this <strong><a href=\"http://www.thegrayl.com/#rebirth-of-water\">filtration water bottle</a></strong>) but also replenish electrolytes. Since it’s humid, you’ll be sweating a lot so coconut water, citrus fruits, and bananas are good ways to replenish. Consider how direct sunlight may affect any medications you’re taking, and pack lightweight clothing (we like ExOfficio stuff), a wide brimmed hat, sunblock, and maybe a cold pack you can stick in the hotel refrigerator to help cool off when you’re out on activities. The humidity and moisture can mean more mosquitoes, so pack the repellent as well! (Here’s some of our<strong><a href=\"http://www.pinterest.com/jcsjourneys/travel-and-outdoor-gear/\"> suggested items to pack</a></strong>)"
      },
      {
        "type": "p",
        "html": "<strong>2. Road Conditions</strong>"
      },
      {
        "type": "image",
        "src": "blog/southern-nicoya-peninsula-for-baby-boomers/honeyguy.jpg",
        "alt": "Let's Get Local - JC's Journeys"
      },
      {
        "type": "p",
        "html": "One of the characteristics that makes the Southern Nicoya Peninsula attractive is it’s remaining ruggedness. That means many roads are still dirt and pebble and on some very steep hills. This may make it challenging to get around if you have any difficulty walking (i.e. knee, joint, heart conditions). The good news is it’s easy to rent a quad/4-wheeler for the duration of your stay. You can also arrange taxis and shuttles relatively easily through your hotel. The other note about rugged roads is that they can be very dusty during dry season, or muddy during heavy rains. So pack a handkerchief to cover your nose and mouth if it gets dusty to avoid any respiratory issues."
      },
      {
        "type": "p",
        "html": "<strong>3. Medications</strong>"
      },
      {
        "type": "p",
        "html": "If you take any medications, bring them with you, take them wherever you go, AND bring your prescriptions. In the beach towns like Montezuma and Santa Teresa, there are no pharmacies, just a few over the counter items offered at the grocery stores. The closest pharmacy is several kilometers from there so please be prepared with any medical equipment you may need, including inhalers for asthma, vitamins, etc. Also bring an extra pair of eyeglasses and the prescription for them just in case. You can carry these items in a backpack or purse in a small first aid kit."
      },
      {
        "type": "p",
        "html": "<strong>4. Physical Abilities</strong>"
      },
      {
        "type": "p",
        "html": "Again because the area is natural and somewhat rugged terrain, it’s good to know your physical abilities and limitations. Whereas national parks in many places have paved or cleared trails, railings and steps, not all have these luxuries. Additionally, activities that are not part of the National Park system will often be even more challenging. For example hiking to the waterfall in Montezuma, while not that far, can be tricky on wet rocks and crossing the river. So if you’re unsure of your balance, climbing abilities or endurance, please consider alternate activities. There are also still easier ways to see some sights than to hike the hard way like many people do. (Check our <strong><a href=\"/tours/bird-lovers-morning\">Bird Lover’s Morning</a></strong> and <strong><a href=\"/tours/lets-get-local\">Let’s Get Loca</a>l</strong> for some less physically demanding tours in the area.)"
      },
      {
        "type": "p",
        "html": "<strong>5. Travel Insurance </strong>"
      },
      {
        "type": "p",
        "html": "Travel Insurance is neglected by many travelers but really everyone should get it. You never know when something could come up and to be covered for medical expenses in another country is just the way to go. Some credit cards provide coverage for travel interruptions such as medical issues or injury. So double check BEFORE you leave. If your credit card doesn’t provide it, you can easily get it through sites like <strong><a href=\"http://www.medexassist.com/Default.aspx\">FrontierMedEx</a>.</strong> Just to prove why it’s necessary, we’ve seen someone break an ankle and have to be rescued from a waterfall… when asked if they had travel insurance, the answer was no, and the price was high. Better to be safe than sorry!"
      },
      {
        "type": "p",
        "html": "<strong>6. Beach/Ocean Conditions</strong>"
      },
      {
        "type": "p",
        "html": "Another one that pretty much goes for any traveler to the area, currents can be strong! Exercise caution if you will be swimming in the ocean. If you’re not familiar with currents and riptides, ask a local and they’ll probably be able to tell you if it looks safe to go in. There are no lifeguards here so never swim alone either. Also keep an eye out for jellyfish. Once in a while they’ll be around but not too often. Keep in mind if you’ll be taking an island or boat tour, you’ll need to board from the beach. If the tides are high this may also make conditions a little tricky for boarding, and the ride a little (or a lot) bumpy."
      },
      {
        "type": "p",
        "html": "<strong>7. Emergency Services</strong>"
      },
      {
        "type": "p",
        "html": "As mentioned in #5 emergency services could get expensive, but they are also limited in the area. The only clinic in the area is in the town of Cobano, which is roughly 10 kilometers (or more) from the beach towns. If you have any serious medical conditions, please keep this in mind. There is a 9-1-1 system you can call from any phone for an ambulance, but just something to be aware of when you are visiting or staying in remote areas. Same goes for police services in that they are few and far between in the area. Crime is rare but do keep watch of your stuff (cell phones and cameras) when you’re on the beach or if you venture onto a crowded bus."
      },
      {
        "type": "image",
        "src": "blog/southern-nicoya-peninsula-for-baby-boomers/jc_local.jpg",
        "alt": "Let's Get Local - JC's Journeys"
      },
      {
        "type": "p",
        "html": "<strong>8. Guided Tours</strong>"
      },
      {
        "type": "p",
        "html": "All guided tours are not created equal. Book a tour or hire a guide if you plan to hike, but ask in advance about the guide’s qualifications. You may want to ask for a private or small group tour so you can go at your own pace and don’t feel the need to keep up with the pack. When booking your tour, you might also ask about the level of physical fitness required for the activity, what times meals will be served, what equipment to bring, etc. and be specific in your questions to get all the details that will make you feel assured you’re in good hands."
      },
      {
        "type": "p",
        "html": "<strong>9. Snacks and Water</strong>"
      },
      {
        "type": "p",
        "html": "Wherever you go, carry a snack and water. The benefit is twofold, you’ll be able to regulate blood sugars and hydrate if you’re not near a restaurant or grocery store, but also it could come in handy in an emergency. This is one of the driest areas of the country and during the dry season (November-April) there may be short periods of no water access. Additionally, earthquakes do occur, so in the event of any kind of emergency, having even a small amount of food and water on hand is a good idea."
      },
      {
        "type": "p",
        "html": "<strong>10. Public Restrooms</strong>"
      },
      {
        "type": "p",
        "html": "Last but not least, we all want to know; how are the public restrooms? Conditions of bathrooms in restaurants vary, and that’s about as “public” a restroom as you’ll get. Restaurants in the beach towns are pretty good about letting you use their facilities without being a patron, but buying a drink or small item is always a welcome gesture. It’s a good idea to carry tissue and hand sanitizer in the event that there is no water (as does occasionally occur during the summer)."
      },
      {
        "type": "p",
        "html": "Well we hope you’re well prepared now and ready to set out on your adventure. The Southern Nicoya Peninsula is a gem and the beauty of it should not be missed. So pack your bags and please let us know if you have any other questions, we’ll do our best to answer anything!"
      }
    ]
  },
  {
    "slug": "adventures-in-osa-peninsula",
    "title": "Adventures in Osa Peninsula",
    "date": "2014-05-31",
    "excerpt": "In our last blog we told you about our Road Trip to Rio Celeste, but what we didn’t tell you is that we kept heading south after that and made it all the way to Osa Peninsula; a place full of…",
    "cover": "blog/adventures-in-osa-peninsula/cover-img_4357.jpg",
    "coverAlt": "Adventures in Osa Peninsula",
    "blocks": [
      {
        "type": "p",
        "html": "In our last blog we told you about our <strong><a href=\"/blog/road-trip-to-rio-celeste-costa-rica\">Road Trip to Rio Celeste</a></strong>, but what we didn’t tell you is that we kept heading south after that and made it all the way to Osa Peninsula. It was absolutely breathtaking, to say the least. Full of natural beauty, green, wild, rugged, and very inline with the images that come to mind when you think of Costa Rica. This area is fascinating as there is so much going on in terms of conservation, community and also responsible and sustainable tourism."
      },
      {
        "type": "p",
        "html": "<strong><strong></strong></strong>"
      },
      {
        "type": "image",
        "src": "blog/adventures-in-osa-peninsula/img_4996.jpg",
        "alt": "Bridge to Rancho Quemado"
      },
      {
        "type": "p",
        "html": "<strong><strong>Sustainable Tourism in Osa </strong></strong>"
      },
      {
        "type": "image",
        "src": "blog/adventures-in-osa-peninsula/img_5006.jpg",
        "alt": "Cable Tree Rancho Quemado"
      },
      {
        "type": "p",
        "html": "What most people know about Osa Peninsula is associated with the large national park there; <a href=\"http://en.wikipedia.org/wiki/Corcovado_National_Park\">Corcovado National Park</a>. But there is much more going on in the entire peninsula. We took a long rocky road to Drake Bay and passed through an area which we later learned was becoming part of a new rural tourism initiative. We were so lucky to meet Jessica Roldan who’s working to help the local community benefit from rural tourism. She explained to us one of the new projects called <strong><a href=\"http://www.visitranchoquemado.com/\">Rancho Quemado</a></strong>, where visitors can experience a traditional and local way of life, with everything from more nature trails to sampling homemade cuisine, and making handmade sweets using a traditional sugar mill. Projects like these benefit the community, help preserve cultural traditions, and contribute to environmental conservation. (See our <strong><a href=\"/tours/lets-get-local\">Let’s Get Local</a></strong> tour for a similar concept in the Southern Nicoya Peninsula)."
      },
      {
        "type": "p",
        "html": "While we didn’t have time to explore this area more, we found that people in Osa and particularly in Drake Bay were especially helpful, proud of the environment they want to conserve, and willing to offer lots of unique tips for seeing the best of area."
      },
      {
        "type": "p",
        "html": "<strong>Tips for Visitors</strong>"
      },
      {
        "type": "image",
        "src": "blog/adventures-in-osa-peninsula/img_50031.jpg",
        "alt": "Osa Peninsula"
      },
      {
        "type": "p",
        "html": "1. Getting there: Getting to Osa can be challenging and few tourists make it here. It is possible to get there by car, but the road conditions definitely call for a 4×4 vehicle, and your rental car will probably hate you for subjecting it to this drive. There are buses that go all the way to Puerto Jimenez. From there you can book a tour either to Corcovado or reach the town of Drake Bay by boat. There is also a small airport in Drake Bay which Nature Air flies to from San Jose. Keep in mind rainy season (September-October) will make road travel to this area virtually impossible."
      },
      {
        "type": "p",
        "html": "2. Tours: Give yourself at least 3 or 4 days in the area, and book your tour to Corcovado in advance! We found out the hard way that you cannot go to Corcovado without a booking a guided tour, so make sure you plan to spend around $75 for a day tour depending on where you start from."
      },
      {
        "type": "p",
        "html": "3. Where to Stay: We didn’t stay overnight in this area, but from many recommendations, <a href=\"http://www.laparios.com/\">Lapa Rios Eco Lodge </a> is an excellent option. They are truly committed to ecotourism and offer many social and environmental programs. There are also very affordable and modest cabins in the area like <a href=\"http://www.visitranchoquemado.com/ranchoverde.html\">Rancho Verde Bed and Breakfast</a>. You can also stay in Drake Bay (pictured left) where there are plenty of accommodations. (If you need some more options or recommendations, comment or email us. We made some great friends and connections in the area!)"
      },
      {
        "type": "image",
        "src": "blog/adventures-in-osa-peninsula/img_4982.jpg",
        "alt": "Adventures in Osa Peninsula"
      },
      {
        "type": "p",
        "html": "4. Bird Watching: If you’re coming to Costa Rica to do some birdwatching, this is definitely an amazing spot to do so. You’ll see plenty of the desirous toucans, macaws and sooooo much more."
      },
      {
        "type": "p",
        "html": "5. Conservation: Because the area holds so much natural beauty… let’s do our best to keep it that way. Book tours with responsible guides and companies, and be sure to work in a tour that relates to rural tourism to support the local communities as well."
      }
    ]
  },
  {
    "slug": "road-trip-to-rio-celeste-costa-rica",
    "title": "Road Trip to Rio Celeste, Costa Rica",
    "date": "2014-05-22",
    "excerpt": "We recently took JC’s Journeys on the road for a few days to explore some other areas and share what we found with our followers. One of our planned stops: Rio Celeste. Here are 3 points we’d like…",
    "cover": "blog/road-trip-to-rio-celeste-costa-rica/cover-dsc0224.jpg",
    "coverAlt": "Road Trip to Rio Celeste, Costa Rica",
    "blocks": [
      {
        "type": "p",
        "html": "We recently took JC’s Journeys on the road for a few days to explore some other areas and share what we found with our followers. One of our planned stops: Rio Celeste. This was an enticing place to start our journey as all we really knew about it before arriving was that the turquoise colored water flowing through this river was a sight not to be missed. Here are 3 points we’d like to share for your visit to Rio Celeste."
      },
      {
        "type": "p",
        "html": "<strong>Where to Start</strong>"
      },
      {
        "type": "image",
        "src": "blog/road-trip-to-rio-celeste-costa-rica/img_4892.jpg",
        "alt": "Road to Rio Celeste"
      },
      {
        "type": "p",
        "html": "There are a few ways to get to Tenorio Volcano National Park. Rio Celeste is in this park which is fairly easy to navigate. We started out from Florencia in San Carlos and headed northwest. A popular route for most tourists would likely be starting out from La Fortuna, the town near Arenal Volcano. Taking Route 4 leads you to an entrance after about an hour and a half, which becomes a dirt road for several (around 20) kilometers. You’ll pass pineapple plantations and lots of other fields of fruit along the way. A 4×4 vehicle is recommended as this part of the road was pretty bumpy and a little steep and rocky in a couple parts. Continue along this road and you’ll reach the entrance where there’s parking, a restaurant and souvenir shop."
      },
      {
        "type": "p",
        "html": "<strong>What to Take</strong>"
      },
      {
        "type": "p",
        "html": "Rio Celeste is located in a rainforest, so… take rain gear! We arrived when the park opened early in the morning and there were downpours just hours before. Needless to say, the trail was a little muddy. But nothing a good pair of closed tennis shoes or hiking shoes can’t handle. Rubber boots are offered for rent at the entrance, but small children’s sizes were not available, and boots actually seemed to make the hike more challenging anyway. A rain jacket or quick drying clothes are a good idea, as well as an extra pair of shoes or flip flops for when your shoes are muddy and wet. Also take a hat, mosquito repellent as always, and lots of water, even though it’s wet it can get very humid, so be sure to hydrate! Always a good idea to pack a snack or lunch also, even though there are places at the entrance to eat, as well as small sodas (restaurants) on the road leading to the entrance."
      },
      {
        "type": "p",
        "html": "<strong>Hikes and Guides</strong>"
      },
      {
        "type": "image",
        "src": "blog/road-trip-to-rio-celeste-costa-rica/dsc0186.jpg",
        "alt": "Steps to Waterfall"
      },
      {
        "type": "p",
        "html": "At the entrance you’ll probably be offered a guide for about $30. If you’re not an experienced hiker, never been to Costa Rica, or just would like some extra guidance and learn about nature and the area, this is a great idea. However, if your main goal is to see the cool blue river, you can probably do OK on your own. If you have small children or elderly members in your group, there’s a beautiful waterfall maybe just 1 km from the entrance and down a great deal of stairs. This is a great option as there’s not too much ‘hiking’ involved, and the waterfall is still a beautiful sight (however it is a steep climb back UP the stairs). To see the point where two rivers merge to create the chemical reaction that turns the water the deep blue hue, you’ll have to hike a bit longer. From the waterfall, it’s about another 45 minute hike, moderate incline, through some pretty deep muddy spots. Don’t be afraid to just tread through the mud, it’ll make your hike a lot faster, and you can hose off your shoes at the entrance. Do be careful along the edges, as some spots can drop off pretty steeply and there are no ropes or railing."
      },
      {
        "type": "p",
        "html": "Here’s a peek at our experience. We hope you’ll make it there on your next trip to Costa Rica. If you need any other advice, feel free to post in the comments below and we’ll share our knowledge. 🙂"
      },
      {
        "type": "embed",
        "src": "https://player.vimeo.com/video/96108935"
      }
    ]
  },
  {
    "slug": "a-good-time-for-nocturno",
    "title": "A Good Time for Nocturno",
    "date": "2014-05-17",
    "excerpt": "We just wanted to share some recent photos from our Nocturno Montezuma Night Hike. Once the rain started falling this past month it just made everything green, damp and made more wild things grow!",
    "cover": "blog/a-good-time-for-nocturno/cover-nocturno_bird.jpg",
    "coverAlt": "A Good Time for Nocturno",
    "blocks": [
      {
        "type": "p",
        "html": "This won’t be a long formal post, but we just wanted to share some recent photos from our Nocturno Montezuma Night Hike. Once the rain started falling this past month it just made everything green, damp and made more wild things grow! The frogs are out and happy, and mushrooms are sprouting everywhere. So cool!"
      },
      {
        "type": "image",
        "src": "blog/a-good-time-for-nocturno/nocturno_frog2.jpg",
        "alt": "Nocturno Montezuma Night Hike - Frog"
      },
      {
        "type": "image",
        "src": "blog/a-good-time-for-nocturno/nocturno_mushroom3.jpg",
        "alt": "Nocturno Montezuma Night Hike - Mushroom"
      },
      {
        "type": "image",
        "src": "blog/a-good-time-for-nocturno/nocturno_bird.jpg",
        "alt": "Nocturno Montezuma Night Hike - Bird"
      },
      {
        "type": "image",
        "src": "blog/a-good-time-for-nocturno/nocturno_mushroom2.jpg",
        "alt": "Nocturno Montezuma Night Hike - Mushroom2"
      },
      {
        "type": "image",
        "src": "blog/a-good-time-for-nocturno/nocturno_trail_green.jpg",
        "alt": "Nocturno Montezuma Night Hike"
      }
    ]
  },
  {
    "slug": "5-reasons-we-love-low-season-in-costa-rica",
    "title": "5 Reasons We Love Low Season in Costa Rica",
    "date": "2014-05-01",
    "excerpt": "While the mad rush of tourism may be slowing down, ‘low season’ may actually be the best time to visit. Here are 5 reasons we love the low season in CR and think you might enjoy it too…",
    "cover": "blog/5-reasons-we-love-low-season-in-costa-rica/cover-green-river.jpg",
    "coverAlt": "5 Reasons We Love Low Season in Costa Rica",
    "blocks": [
      {
        "type": "p",
        "html": "It’s the first of May and the rain has finally started to fall on the thirsty southern Nicoya Peninsula. The rain is right on time with the beginning of ‘low season’ for tourism in Costa Rica, which runs roughly from May to October. While the mad rush of tourism may be slowing down, ‘low season’ may actually be the best time to visit. Here are 5 reasons we love the low season in CR and think you might enjoy it too."
      },
      {
        "type": "p",
        "html": "<strong>1. Bird Watching</strong> – There is still plenty of bird watching to do during this time and while some of the migrating species may not be visible, there are many resident birds you can easily spot. (Tip: Arenal area is great for viewing Toucans year around, and <a href=\"/tours/bird-lovers-morning\">JC is happy to help novice birders</a> spot them or any other birds on your viewing checklist.)"
      },
      {
        "type": "image",
        "src": "blog/5-reasons-we-love-low-season-in-costa-rica/birdloversmorning_woodpecker.jpg",
        "alt": "Bird Lover's Morning - Woodpecker"
      },
      {
        "type": "p",
        "html": "<strong>2. Less Crowded</strong> – Since the rush is over, there’s a more tranquil atmosphere especially in beach towns. Fewer people are jamming into the small towns and stealing the quiet away from your relaxing vacation."
      },
      {
        "type": "p",
        "html": "<strong>3. Cooler Climate</strong> – In some regions like the southern Nicoya Peninsula and Guanacaste areas, it is HOT during Costa Rica’s summer. Low season brings rain and cooler temperatures so you can enjoy the outdoors without the heat. Just pack your rain gear and you’ll love the respite from the heat. Rain also means greener, more beautiful landscapes for these drier regions of the country. Don’t worry, if you’re looking for sunshine you’ll still get plenty here."
      },
      {
        "type": "p",
        "html": "<strong>4. Deals</strong> – Hotels usually offer cheaper rates for low season, or shoulder seasons and who doesn’t love a good deal? Many tour operators also offer cheaper rates on activities, however you should consider that many tours require a minimum number of participants to run the tour, and since there are fewer tourists around, it may be difficult to book these. As an alternative, you can take a private tour or hire a <a href=\"/hire-a-guide\">private guide</a> for slightly more than a group tour. The benefit is that you’ll get more personal attention, probably get to see more, and you’ve likely already saved some money on your hotel stay."
      },
      {
        "type": "p",
        "html": "<strong>5. Connect with Locals</strong> – It’s quieter, less crowded and not as busy, so that means you get a little one on one time with locals. Take advantage of it and strike up a conversation with local restaurant and store owners. You can always find out lots of interesting information you wouldn’t find in a guide book or brochure this way. (If you’re a little shy, we can help you connect with locals on our <a href=\"/tours/lets-get-local\">“Let’s Get Local”</a> tour.)"
      }
    ]
  },
  {
    "slug": "enjoying-nature-in-curu-wildlife-refuge",
    "title": "Enjoying Nature in Curu Wildlife Refuge",
    "date": "2014-04-22",
    "excerpt": "One of our favorite things to do in the Southern Nicoya Peninsula is visit Curu Wildlife Refuge. We recently spent a day there and found even more to love about Curu…",
    "cover": "blog/enjoying-nature-in-curu-wildlife-refuge/cover-mangrove-bridge.jpg",
    "coverAlt": "Enjoying Nature in Curu Wildlife Refuge",
    "blocks": [
      {
        "type": "image",
        "src": "blog/enjoying-nature-in-curu-wildlife-refuge/whitefacedmonkey3.jpg",
        "alt": "Curu_WhiteFacedMonkey"
      },
      {
        "type": "p",
        "html": "One of our favorite things to do in the Southern Nicoya Peninsula is visit Curu Wildlife Refuge. The main reason is of course for the nature and variety of wildlife that can be found here. There’s no shortage of white-faced monkey and iguana sightings among many other crawling and flying critters. But we recently spent a day there and found even more to love about Curu."
      },
      {
        "type": "p",
        "html": "<strong>Hike</strong>"
      },
      {
        "type": "p",
        "html": "A small entrance fee gets you in for the day (until 4pm when the refuge closes) and allows you access not just to the beautiful hiking trails, but also to the beach, gift shop, cafeteria, and kayak rentals. We opted to hike/walk a short easy trail close to the beach that goes through the mangrove and ends back out at the beach. You can do the hikes on your own, but taking a paid tour or hiring a guide (and this is not just self-promotion) really does help you better understand what animals, plants and ecosystems you are encountering. Otherwise, it’s still a nice walk if you choose to go it solo."
      },
      {
        "type": "p",
        "html": "<strong>Kayak</strong>"
      },
      {
        "type": "image",
        "src": "blog/enjoying-nature-in-curu-wildlife-refuge/curu_kayak.jpg",
        "alt": "Kayaking in Curu Wildlife Refuge"
      },
      {
        "type": "p",
        "html": "After our little hike, we rented kayaks for an hour or so, which is plenty if your arms get tired easily. This is an amazing way to see the refuge from a different perspective and paddle around the bay to see some perching pelicans and other water birds when they are around. Grab lunch at the cafeteria (order and pay in advance), then scout a location on the beach to lounge away the rest of the afternoon. What a perfect little escape and a great way to see a little part of Costa Rica… naturally. 🙂"
      },
      {
        "type": "p",
        "html": "Check here for more about our <a href=\"/tours/curu-nature-escape\">guided tour to Curu</a> or customized private tours."
      }
    ]
  },
  {
    "slug": "2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset",
    "title": "2 Nights in Southern Nicoya Peninsula: Sunrise to Sunset",
    "date": "2014-03-25",
    "excerpt": "If you’re short on time, but have heard that you just have to experience nature in Southern Nicoya, here is a quick itinerary to work it into your vacation and get the best of both sides of the…",
    "cover": "blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/cover-sunset.jpg",
    "coverAlt": "2 Nights in Southern Nicoya Peninsula: Sunrise to Sunset",
    "blocks": [
      {
        "type": "p",
        "html": "If you’re short on time, but have heard from friends and fellow travelers that you just have to experience nature in Southern Nicoya, here is a quick itinerary to work it into your vacation and get the best of both sides of the peninsula. In just three days and two nights, you’ll see the sun rise over the Nicoya Gulf and the sun set over the Pacific, with lots of extra in between."
      },
      {
        "type": "p",
        "html": "<strong>Day 1: Arrive in Montezuma</strong>"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "<strong>Check-in</strong> – Plan to <strong><a href=\"/blog/getting-to-montezuma\">arrive in Montezuma</a> </strong>in the early afternoon by bus, shuttle, or boat. This will give you time to check in to your hotel and grab a quick bite to eat before adventuring. A few great hotel options are Hotel Ylang Ylang, located on the beach, or Amor de Mar at the base of the falls. Other great options in town include Luna Llena and Hotel Aurora, or Casa Frangipani above town on the hill (easiest to stay here if you have transportation).",
          "<strong>Waterfalls</strong> – Next, you’ll have time to go to the famous Montezuma Waterfalls. The hike is short, but can be tricky for those not familiar with the area. If you know you’ll want to do this, you can <strong><a href=\"/hire-a-guide\">hire a private guide</a> </strong>in advance, which is safer and recommended for less experienced hikers. Take some photos and a dip in the cool water, and head back before it starts getting dark.",
          "<strong>Shop &amp; Dine</strong> – Once you clean up, you can walk around town, explore the little the shops, and then have dinner at one of the delicious restaurants. Cocolores is our favorite, but there’s plenty to choose from including some with live entertainment such as Organico<strong>.</strong>"
        ]
      },
      {
        "type": "p",
        "html": "<strong>Day 2: Sunrise to Sunset<br> </strong>"
      },
      {
        "type": "image",
        "src": "blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/sunrise_cabuya.jpg",
        "alt": "sunrise_cabuya_BirdLoversMorning"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "<strong>Bird Watching or Nature Tour</strong> – If you love birds, book a <strong><a href=\"/tours/bird-lovers-morning\">Bird Lover’s Morning</a> </strong>tour. It starts early, but it’s a great way to see the sunrise, get in a bird watching tour and have a late breakfast in the town closest to the southern point of the peninsula. If hiking is more your thing, you can watch the sunrise from your hotel or the beach, then take a guided tour to Cabo Blanco nature reserve."
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "<strong>Travel to the Pacific Side</strong> – After checking out of your hotel, take a shuttle to the Pacific Side of the peninsula via the town of Cobano, or if you’re in your own car you can get there via the town of Cabuya in the dry season.",
          "<strong>Check-In &amp; Dinner</strong> – You’ll be pretty hungry and tired by this point, so check in to a hotel with a great restaurant. We like Moana Lodge, or Frank’s Place in Mal Pais. Enjoy dinner while you watch the sunset over the waves of the Pacific Ocean."
        ]
      },
      {
        "type": "image",
        "src": "blog/2-nights-in-southern-nicoya-peninsula-sunrise-to-sunset/malpais.jpg",
        "alt": "Mal Pais"
      },
      {
        "type": "p",
        "html": "<strong><br> Day 3: Explore Mal Pais/Santa Teresa</strong>"
      },
      {
        "type": "p",
        "html": "On your last morning, you’ll have time to explore Mal Pais or Santa Teresa a little before checking out. Schedule an early Stand-Up Paddleboard or surf session the day before, or spend the morning taking a long scenic walk on the beach. After that, you’re ready to checkout and head back to San Jose for departure home, or go on to your next Costa Rica destination."
      }
    ]
  },
  {
    "slug": "tropical-fruit-for-a-healthful-costa-rica-spring-break",
    "title": "Tropical Fruit for a Healthful Costa Rica Spring Break",
    "date": "2014-03-17",
    "excerpt": "While some travelers will spend their spring break filling themselves with toxins, the sweet, delicious and nutritious tropical fruits of Costa Rica offer a great alternative for a healthful break…",
    "cover": "blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/cover-guanabana.jpg",
    "coverAlt": "Tropical Fruit for a Healthful Costa Rica Spring Break",
    "blocks": [
      {
        "type": "p",
        "html": "While some travelers will spend their spring break filling themselves with toxins, the sweet, delicious and nutritious tropical fruits of Costa Rica offer a great alternative for a healthful break to rejuvenate your mind and body."
      },
      {
        "type": "p",
        "html": "Everywhere you look in Costa Rica this time of year, bountiful fruits decorate the trees and landscape. Consisting of colors and shapes you may never have seen before, seeing the abundance of fruit grown in the humid tropics of this country are reason enough to visit. Sampling them in local cuisine to get a healthy dose of vitamins and nutrients is a far greater reason still to spend your break here."
      },
      {
        "type": "image",
        "src": "blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/manga.jpg",
        "alt": "Tropical_Fruits_Costa_Rica_JCsJourneys"
      },
      {
        "type": "p",
        "html": "<strong>Health Benefits of Tropical Fruit</strong>"
      },
      {
        "type": "p",
        "html": "Considered one of the properties that makes the Nicoya Peninsula one of the <a href=\"http://www.bluezones.com/live-longer/education/expeditions/nicoya-costa-rica/\">blue zones</a> of the world, the fruit consumed here are highly nutritious. Many are still used for health and medicinal benefits by locals. Mangoes for example can be seen all around the country (Pictured: Right) and have been found to contain properties that protect against certain cancers, as well as provide high levels of vitamin C.<a href=\" www.care2.com/greenliving/10-health-benefits-of-mangos.html\">*</a>"
      },
      {
        "type": "p",
        "html": "Another fruit found growing in the area is the Guanabana or Soursop fruit (Pictured: Left). With a textured exterior that resembles a strangely shaped giant pickle, the tangy pulpy interior provides high doses of vitamins C and B, known to be useful to boost immunity and energy. Although yet to be proven, the leaves of this fruit are also believed to have cancer-fighting properties.<a href=\"http://www.psychologytoday.com/blog/side-effects/201107/fighting-cancer-science-and-nature\">*</a>"
      },
      {
        "type": "image",
        "src": "blog/tropical-fruit-for-a-healthful-costa-rica-spring-break/guanabana.jpg",
        "alt": "Guanabana_TropicalFruit_JCsJourneys"
      },
      {
        "type": "p",
        "html": "<em>For a more thorough list of all the varieties of fruit that can be found in Costa Rica see this <a href=\"http://www.insightguides.com/inspire-me/blog/costa-rican-fruit\">blog</a>. </em>"
      },
      {
        "type": "p",
        "html": "<strong>Ways to Enjoy Tropical Fruit of Costa Rica</strong>"
      },
      {
        "type": "p",
        "html": "There are lots of ways to enjoy these fruits, whether it’s a fried plantain to accompany your pinto (black beans and rice) or a ‘batido’ (fruit smoothie) to cool you off in the hot humid weather. Like in other places, tropical fruits from mangoes to guavas and pineapple can also be used in marmalade to enhance your morning toast as well as salsas and salads for a light lunch."
      },
      {
        "type": "p",
        "html": "Straight from the tree or in a dish, there’s no shortage of ways to have your daily fruit serving here, so get started! You can also sample fresh fruit on our <a href=\"/tours/lets-get-local\">Let’s Get Local </a>tour on a visit to organic farm Finca Integral Didactica."
      },
      {
        "type": "p",
        "html": "<em>*For tips on how to pack light for your upcoming break, see this blog post: <a href=\"/blog/packing-light-for-your-costa-rica-nature-trip\">Packing Light for Your Costa Rica Nature Trip</a>.</em>"
      }
    ]
  },
  {
    "slug": "packing-light-for-your-costa-rica-nature-trip",
    "title": "Packing Light for Your Costa Rica Nature Trip",
    "date": "2014-03-06",
    "excerpt": "So you’re heading to Costa Rica and wondering what in the world to pack for a country with so many climates, landscapes and adventures. The question is not just what to pack,but how to pack light!",
    "cover": "blog/packing-light-for-your-costa-rica-nature-trip/cover-photo-2.jpg",
    "coverAlt": "Packing Light for Your Costa Rica Nature Trip",
    "blocks": [
      {
        "type": "p",
        "html": "So you’re heading to Costa Rica and wondering what in the world to pack for a country with so many climates, landscapes and adventures. The question is not just what to pack,but how to pack light! With airlines trying to charge an arm and leg for your baggage, and considering you may be taking small planes, buses or shuttles with luggage restrictions, here are a few things we suggest to help keep baggage down to a manageable size."
      },
      {
        "type": "p",
        "html": "<strong>Tips for Types of Luggage</strong>"
      },
      {
        "type": "p",
        "html": "Maybe you’re not a backpacker so those giant packs you see lots of 20-somethings walking around with is not really an option for you. Don’t worry, you can still get around easily and with all your necessities in just these small convenient luggage items, (and your back will thank you for it!)"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "<strong>Carry-on sized roller suitcase</strong>– At about 22 inches, this type of suitcase is small enough to carry-on on larger planes, easily carry up stairs or on rugged roads, and still fit plenty of items for a trip up to 10-days. (Don’t believe it? Read below to see how few items you’ll be packing!)",
          "<strong>Day backpack</strong> – This is great for carrying your personal necessities on hikes or day tours and also offers more space to pack your clothes and other items which can still be taken as a carry-on if you decide to check your roller suitcase. If you get one with a water reservoir it’s even better because you’ll need to stay hydrated and it won’t take up a lot of space when empty. Here’s a good <a href=\"http://www.amazon.com/High-Sierra-Backpack-Graphite-Titanium/dp/B000H82ND2/ref=sr_1_2?ie=UTF8&amp;qid=1394123471&amp;sr=8-2&amp;keywords=eagle+creek+switchback+22\">wheeled luggage set with day pack from High Sierra</a> I recommend that won’t break the bank and offers a lot of versatility.",
          "<strong>Purse or Waistpack</strong> – A must for when you’re strolling through the streets or doing a lighter hike and don’t want to be weighed down. It keeps your important items close and readily available whenever you need them (such as passport and money of course). Keep the purses to a lightweight (collapsible if possible) and over-the-shoulder style to ensure your hands are free to manage other luggage, paperwork or activity."
        ]
      },
      {
        "type": "p",
        "html": "<strong>Clothes to Pack</strong>"
      },
      {
        "type": "p",
        "html": "You might think this list too minimal, but really, you don’t need to bring too much. Most towns and hotels offer laundry service for very reasonable prices, so this list will provide for about 5 days, then simply asking your hotel for a laundry service for a load of clothes will save you a lot of weight in your luggage and a lot of hassle! 🙂 Also, if you bring clothes for layering, you can avoid a lot of extra outfits you’ll likely never even wear. Use the rolling method for packing to make sure you use every inch of space in that suitcase."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "<strong>Tops</strong> – 5 t-shirts or tank tops, 1 long-sleeved lightweight shirt (Wicking and quick-drying materials work best for the warm and humid climates. They can also be quickly hand washed and dried if needed.)",
          "<strong>Bottoms</strong> – 3 pairs shorts, 1 pair long pants (2 if you’ll be doing a lot of jungle hiking. A pair of <a href=\"http://www.amazon.com/Columbia-Silver-Ridge-Convertible-Gravel/dp/B006QYGPDK/ref=sr_1_1?ie=UTF8&amp;qid=1394124528&amp;sr=8-1&amp;keywords=Zip+Off+Hiking+Pants\">zip-off hiking pants like these</a> is great because they can serve as shorts or pants and accommodate changing climates quickly.)",
          "<strong>Outerwear</strong> – 1 sweater/zip up fleece, 1 hat (your pick here, just limit to 1), 1 <a href=\"http://www.amazon.com/Sierra-Designs-Microlight-Jacket-X-Large/dp/B001JL775A/ref=sr_1_1?ie=UTF8&amp;qid=1394127107&amp;sr=8-1&amp;keywords=Collapsible+Rain+Jacket\">lightweight rain jacket</a> (A pocket poncho is also an alternative to use even less space.)",
          "<strong>Footwear</strong> – 1 pair sandals/flipflops, 1 pair closed shoes, 2 pairs socks (trail-runners/hiking shoes/trainers whatever your preference, but heavy hiking boots are a little unnecessary unless, again, you’ll be doing crazy jungle hikes the whole time 🙂 )",
          "<strong>Underclothes/Swimsuit – </strong>1 swimsuit/boardshorts, and as many undergarments as you feel you need, but again laundry is usually not a problem so I’ll leave that up to personal preference."
        ]
      },
      {
        "type": "p",
        "html": "<strong>Gear for Your Nature Tours</strong>"
      },
      {
        "type": "p",
        "html": "There are a couple options for gear. Plan ahead and find out if the tours you’ll be taking provide equipment such as binoculars, snorkel masks, etc for the activity. If they do, perfect! Less equipment for you to drag around. If they don’t, consider taking only what you will absolutely use and take the lightest one. Opt for your small point-and-shoot camera if you’re taking binoculars for example. Or if you’re more interested in awesome photos, take the bigger camera and lens and leave the binocs at home. Also leave the tablets, ipads and other unnecessary electronics at home and make sure you just have a good compact smartphone since it can serve as your camera, communication and about a million other things."
      },
      {
        "type": "p",
        "html": "<strong>Other Essentials</strong>"
      },
      {
        "type": "p",
        "html": "For toiletries you can take travel sized items or buy from the local market when you get there. Depending on where you’re staying though, a grocery store may not be within easy reach so its best to be prepared with at least a small amount of those items."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "1Pair Sunglasses",
          "Small Sunblock",
          "Mosquito/tick repellent",
          "Water Bottle (<a href=\"http://www.amazon.com/Platypus-PlusBottle-Liter-Closure-Cap/dp/B002EQDP96/ref=sr_1_12?ie=UTF8&amp;qid=1394127598&amp;sr=8-12&amp;keywords=collapsible+water+bottle\">collapsible</a> works great or water reservoir for backpacks )",
          "1 Small Flashlight (also available for purchase at grocery stores)",
          "Handkerchief (During dry season, some areas can be very dusty. These are also great for cleaning up after a long hike.)",
          "1 Small first aid kit (While tour companies should have these, they may not always be equipped. Best to have a small kit with a couple bandaids, ointment, painkillers or any meds for your own specific needs on hand, especially if you are in a remote area.)"
        ]
      },
      {
        "type": "p",
        "html": "Now that you’ve got some ideas for packing light, you’re ready to head off on your nature trip. Lightening the load will make it easier to move fast, change plans quickly and see as much as you can. Your journey awaits you!"
      }
    ]
  },
  {
    "slug": "counting-birds-in-tambor-bay",
    "title": "Counting Birds in Tambor Bay",
    "date": "2014-01-11",
    "excerpt": "On Friday and Saturday, January 10th and 11th, Tambor Bay Birders association hosted one of their many bird counts in the area. After a day of meandering through various trails the groups…",
    "cover": "blog/counting-birds-in-tambor-bay/cover-group_birdcount1.jpg",
    "coverAlt": "Counting Birds in Tambor Bay",
    "blocks": [
      {
        "type": "p",
        "html": "<strong>It’s before 6am in Tambor Bay, Costa Rica. The sun has just risen and the air is calm and cool, the sky a pinkish haze dusted with a few low clouds reflecting in the nearly silent bay; silent that is, all but for the songs and calls of hundreds of species of birds that inhabit the area.</strong>"
      },
      {
        "type": "p",
        "html": "On Friday and Saturday, January 10th and 11<sup>th</sup>, <a href=\"https://www.facebook.com/pages/Tambor-Bay-Birders/534372109936067\">Tambor Bay Birders</a> association hosted one of their many bird counts in the area. With a regular base of about 12 birders in the association, they form groups with other members and volunteers who then split up and explore trails surrounding the bay to identify and record the names of any birds they spot. We had the honor of sharing in the count on Saturday, setting out from the <a href=\"http://www.tambortropical.com/\">Tambor Tropical Hotel</a> with a group of about 20 participants; a combination of professionals, avid bird watchers and novice bird lovers both from the area and abroad who excitedly point out any fluttering wings or brightly colored flying objects. After a day of meandering through various trails the groups reconvened to determine the collective results of their findings. In this case the count totaled nearly 200 bird species, ranging from more common ones such as the Long-tailed Manakin, to more rare species such as the Mangrove Hummingbird endemic to only the Pacific of Costa Rica."
      },
      {
        "type": "image",
        "src": "blog/counting-birds-in-tambor-bay/group_birdcount2.jpg",
        "alt": "Counting Birds in Tambor Bay"
      },
      {
        "type": "p",
        "html": "Tambor Bay Birders not only host these bird counts for reports to the <a href=\"http://listaoficialavesdecostarica.wordpress.com/\">Costa Rica Ornithological </a><a href=\"http://listaoficialavesdecostarica.wordpress.com/\">Association</a> for official records, but also for local educational purposes. With a noble cause to promote education about birds, nature and conservation, the aim of the association is to involve local residents and students, as well as visitors and volunteers, to help spur greater interest and awareness about Costa Rica’s biodiversity and its valuable place in our world. If you’re interested in joining the association on their next count, you can follow their Facebook page <a href=\"https://www.facebook.com/pages/Tambor-Bay-Birders/534372109936067\">here</a>. You don’t have to be a professional or have your own equipment necessarily (although a good pair of binoculars does help), just bring your curiosity, keen eyes… and of course a little bug spray. 🙂"
      },
      {
        "type": "image",
        "src": "blog/counting-birds-in-tambor-bay/group_birdcount.jpg",
        "alt": "Counting Birds in Tambor Bay"
      },
      {
        "type": "p",
        "html": "*Special thanks to Juan Carlos Cruz, <a href=\"http://www.njhawkins.com\">Nick Hawkins</a> and the rest of the Tambor Bay Birders for inviting JC Aguirre of JC’s Journeys to participate in this count."
      },
      {
        "type": "p",
        "html": "*Be sure to check out our bird watching tour <a href=\"/tours/bird-lovers-morning\">Bird Lover’s Morning</a>."
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com</a>"
      }
    ]
  },
  {
    "slug": "5-other-reasons-to-visit-montezuma-surroundings",
    "title": "5 OTHER Reasons to Visit Montezuma (& Surroundings)",
    "date": "2013-12-27",
    "excerpt": "I’m sure you know by now some of the top things to do in Montezuma and obvious reasons to visit. However, there are a few other perhaps lesser-known reasons why we think it’s worth the trip…",
    "cover": "blog/5-other-reasons-to-visit-montezuma-surroundings/cover-vivero.jpg",
    "coverAlt": "5 OTHER Reasons to Visit Montezuma (& Surroundings)",
    "blocks": [
      {
        "type": "p",
        "html": "If you’ve done a little Google research or quick TripAdvisor search, I’m sure you know by now some of the top things to do in Montezuma and obvious reasons to visit. You’ve probably learned that Montezuma is in one of the 7 ‘<a href=\"http://en.wikipedia.org/wiki/Blue_Zone\">blue zones</a>’ of the world, has a beautiful waterfall, beachfront horseback riding and yoga galore. And of course Montezuma is an easy distance to the white sand beaches and snorkeling around Tortuga Island. However, aside from these more popular and well-known reasons to make it out to Montezuma, whether as a stopping point or for your full stay in Costa Rica, there are a few other perhaps lesser-known reasons why we think it’s worth the trip."
      },
      {
        "type": "p",
        "html": "<strong>Every Bike Ride is a Mountain Ride</strong> – If you’re a two-wheel enthusiast looking to get out on the open road while on vacation, you’ll find riding in Montezuma plenty adventurous. Renting a bike for a day will not only ease traffic in the small town and please the environment but also give you a lovely view of areas around Montezuma with the thrill of a mountain bike ride. Head south on the road toward Cabuya and in just 1km you’ll find the beautiful hidden beach of Las Manchas (use extreme caution if swimming here, there are some pretty strong riptides and yes even for strong swimmers). Keep going and you’ll make it all the way to Cabuya with lots of little sights along the way and a few restaurants to grab some grub before heading back. Keep in mind you’ll be sharing the road with cars and the road is quite narrow in some spots, so use common bicycle sense: be predictable, use lights if riding at night, and WEAR A HELMET!"
      },
      {
        "type": "p",
        "html": "<strong>Unique Micro-Cultures</strong> <strong>are Everywhere</strong>– In addition to the rich health culture* that you’ll definitely notice upon entering the Montezuma area, there still exist strong traditional and local cultures of Costa Rica. A little more <a href=\"/tours/lets-get-local\">challenging to identify</a>, they are here alive and well. Found more so in the outskirts of Delicias, Cobano and Cabuya, the agricultural traditions of Costa Rica can be found on small farms as well as in fishing villages that line the coast. The many smaller traditional cultures in the area are interwoven with diverse influences such as Italian food, yoga and fire dancing to create a surprisingly diverse area with a culture all of its own."
      },
      {
        "type": "image",
        "src": "blog/5-other-reasons-to-visit-montezuma-surroundings/dsc_0454.jpg",
        "alt": "5 OTHER Reasons to Visit Montezuma (& Surroundings)"
      },
      {
        "type": "p",
        "html": "<strong>Tranquility of Nature Day &amp; Night</strong> – Tucked away in most hotels away from town or on the hill above it is the best part of a tropical vacation: tranquility and nature. The sounds of nature are what surround you wherever you go: howler monkeys in the trees overhead, songs of exotic birds, and coati scurrying on the ground. And when the busyness of daytime settles, the evening offers an even more stimulating experience of nocturnal wildlife. Listen to the sounds on your own while walking around your hotel or to town (carry a flashlight in the evening, it can get pretty dark quickly), or take Montezuma’s only night tour “<a href=\"/tours/nocturno-night-journey\">Nocturno</a>” to have a guide help you get a closer look at the nocturnal creatures in the area."
      },
      {
        "type": "p",
        "html": "<strong>A Sunrise Worth Waking Up For</strong> – You won’t see the sun set over the horizon here, but you will get to see an equally, if not more, beautiful sunrise. Not much can top a stroll on the beach in the quiet of the morning to see the sky turn golden as the sun rises over the Nicoya Gulf. You’ll have to get up pretty early for this one, but you can always go back to bed for a siesta during the heat of the day."
      },
      {
        "type": "p",
        "html": "<strong>Turtle Conservation</strong> – <a href=\"https://www.facebook.com/pages/Proyecto-de-Conservaci%C3%B3n-de-Tortugas-Montezuma-ASVO/399066823501054\">ASVO</a> is a local turtle conservation program where, if your timing is right, you’ll be able to witness the hatching and release of baby sea turtles back to the ocean. Although turtle hatching is seasonal, you can stop by any time and there are bound to be volunteers ready and willing to answer any questions you might have. It’s a great way to find out more about conservation efforts and a fun educational opportunity not to be missed."
      },
      {
        "type": "image",
        "src": "blog/5-other-reasons-to-visit-montezuma-surroundings/turtle.jpg",
        "alt": "5 OTHER Reasons to Visit Montezuma (& Surroundings)"
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com</a>"
      }
    ]
  },
  {
    "slug": "the-experience-of-living-abroad-in-just-1-day",
    "title": "The Experience of Living Abroad, in Just 1 Day",
    "date": "2013-12-08",
    "excerpt": "If you’re one of the many who wants to experience those things, but you’re short on time (and/or cash for that matter), don’t worry! You can still experience local living in Costa Rica, even if…",
    "cover": "blog/the-experience-of-living-abroad-in-just-1-day/cover-house.jpg",
    "coverAlt": "The Experience of Living Abroad, in Just 1 Day",
    "blocks": [
      {
        "type": "p",
        "html": "So you’re not a student anymore and you don’t have a semester to spend living abroad. Who really has the ability to do that anymore anyway? It’s challenging, even if you are a student, let alone an adult with family, career and other responsibilities. But let’s face it, living abroad for study or other reason has rewards and lessons that are hard to replicate by any other means. If you’re one of the many who wants to experience those things, but you’re short on time (and/or cash for that matter), don’t worry! You can still experience<strong> <a href=\"/tours/lets-get-local\">local living in Costa Rica</a></strong>, even if you have as little as one day."
      },
      {
        "type": "image",
        "src": "blog/the-experience-of-living-abroad-in-just-1-day/organicfarm3.jpg",
        "alt": "organicfarm_costarica"
      },
      {
        "type": "p",
        "html": "Finca Integral Didactica"
      },
      {
        "type": "p",
        "html": "What you’re probably looking for are those experiences that make you feel like you’re in a different place. You want to see what a <strong>typical home</strong> is like (one of my personal curiosities when I travel), taste real <strong>local food</strong>, and meet people from a <strong>different culture</strong>. Vacationing may not always feel like it allows for such experiences, with all the obligatory water sports and whatnot, but you can certainly change that. A ‘tour’ doesn’t have to be just transportation to the topmost attraction that showed up on your TripAdvisor search of things-to-do (don’t get me wrong, I use this method too ;)). With a little extra research, you can find the ones that offer a bit more <strong>perspective on aspects of regional and local culture</strong>, and allow you to engage in activities that make you feel like you’re a part of someone’s home or family for a day. Usually, the investment in a professionally <strong>guided tour</strong> will do just that. You’ll get someone who knows the area, knows the people in it, and has greater insight on the unique characteristics that may make it different from where you’re from, thus highlighting things that you’d likely find out from living there versus just taking a vacation there."
      },
      {
        "type": "p",
        "html": "We’re trying to create that kind of opportunity for visitors here in <strong>Montezuma,</strong> perhaps like yourself, who want the experiences one would gain living abroad for a period of time. Offering a peek into <strong><a href=\"/tours/lets-get-local\">local living</a></strong> is a way for visitors to better connect with the country and region they are visiting, even if they have very little time, or simply want to enhance their tropical vacation with something a little more educational and enriching. We keep adding more components to our <a href=\"/tours/lets-get-local\">Let’s Get Local </a>tour too, such as a visit to <strong>Finca Integral Didáctica</strong> (a local organic farm) because the truth is we keep finding more interesting things in the area we never knew were there, and we live here! So we hope it will provide a few things you may not have gotten to see otherwise. It may not be a semester or summer abroad, but we’d like to think it can still be rewarding and offer valuable exchanges between visitors and residents, just like living here would be."
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com </a>"
      }
    ]
  },
  {
    "slug": "should-we-go-aaaaall-the-way-to-montezuma",
    "title": "Should we go aaaaall the way to Montezuma?!",
    "date": "2013-12-03",
    "excerpt": "Visiting Costa Rica is exciting and different from neighboring countries for many reasons, including the sense of remoteness one gets as soon as they get just a few minutes outside busy San Jose.…",
    "cover": "blog/should-we-go-aaaaall-the-way-to-montezuma/cover-country-road.jpg",
    "coverAlt": "Should we go aaaaall the way to Montezuma?!",
    "blocks": [
      {
        "type": "p",
        "html": "Visiting <a href=\"http://maps.google.com/maps?ll=9.93333333333,-84.0833333333&amp;spn=10.0,10.0&amp;q=9.93333333333,-84.0833333333%20%28Costa%20Rica%29&amp;t=h\">Costa Rica</a> is exciting and different from neighboring countries for many reasons, including the sense of remoteness one gets as soon as they get just a few minutes outside busy San Jose. Almost any visitor can attest to the lush green countryside that still prevails over the asphalted urbanization perhaps more pronounced in other countries in the region. But if you’re aiming to really get away, away from the Taco Bells, KFCs and strip malls that seem to follow you wherever your vacation takes you, then I’d suggest going a little farther to the small town of <a href=\"http://en.wikipedia.org/wiki/Montezuma%2C_Costa_Rica\">Montezuma</a> in the Southern Nicoya Peninsula."
      },
      {
        "type": "image",
        "src": "blog/should-we-go-aaaaall-the-way-to-montezuma/img_0023_3.jpg",
        "alt": "All_the_way_to_montezuma"
      },
      {
        "type": "p",
        "html": "Since Montezuma is relatively young in terms of modern developments such as electricity (brought to the area only 20 years ago!), and paved roads (i.e. they are few and far between), it also provides a sense of genuine escape from those monotonous norms of fast food chains and GAP stores back home. You won’t find a McDonald’s lurking on any street corner here (ok… there’s only one real corner, but still). The fact that big chain restaurants haven’t yet taken over this tiny town attests to the genuine ‘Costa Rica’ feeling you’ll get when you’re here. Although ‘town’ can be quite busy with tourists during the high season (Dec through March), you’ll still find tranquility, wildlife for neighbors, and that tropical escape you were seeking, especially if you find accommodations just a couple minutes up the main hill or in either direction away from town."
      },
      {
        "type": "image",
        "src": "blog/should-we-go-aaaaall-the-way-to-montezuma/img_0033_2.jpg",
        "alt": "Should we go aaaaall the way to Montezuma?!"
      },
      {
        "type": "p",
        "html": "While scarcity of paved roads in the area and some other developmental needs are certainly not without some contention among residents, it’s hard to deny that they are characteristics that make going all the way to Montezuma a must on your Costa Rica vacation. If you don’t, I just don’t think you’ll be able to go back home with a good story about the crazy bumpy ride you took that was seemingly forever in what felt like the middle of nowhere to get to a beautiful beach, waterfall or wildlife reserve. Moreover, you will have missed one of the few areas in Costa Rica or anywhere else that really does feel ‘away from it all’. 🙂"
      },
      {
        "type": "p",
        "html": "For an even greater Costa Rica experience, consider our “<a href=\"/tours/lets-get-local\">Let’s Get Local”</a> tour to meet some amazing and friendly locals and let them share their take on the best aspects of the area."
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com </a>"
      }
    ]
  },
  {
    "slug": "lessons-in-coconuts",
    "title": "Lessons in Coconuts",
    "date": "2013-11-15",
    "excerpt": "The best part of visiting a place that is completely different from where you live is that you learn all sorts of new things…",
    "cover": "blog/lessons-in-coconuts/cover.jpg",
    "coverAlt": "Lessons in Coconuts",
    "blocks": [
      {
        "type": "p",
        "html": "Sometimes you go on vacation to relax. Sometimes… you do it to learn a new skill. Like <strong>how to crack a coconut</strong>! The best part of visiting a place that is completely different from where you live is that you learn all sorts of new things. You may learn of new ingredients to use in cooking, the health benefits of certain foods, words in a new language or techniques and tools of other cultures. Take a look at one new useful skill you just might take home from your next tour in Montezuma."
      },
      {
        "type": "embed",
        "src": "https://player.vimeo.com/video/78963362"
      },
      {
        "type": "h3",
        "html": "See, who needs a classroom to learn something new? Fresh, organic and delicious with nothing but the tools nature gave us. Eat up!"
      },
      {
        "type": "p",
        "html": "jcsjourneys.com"
      }
    ]
  },
  {
    "slug": "make-any-tour-an-eco-tour",
    "title": "Make Any Tour an Eco-tour",
    "date": "2013-11-05",
    "excerpt": "A lot of companies and destinations promote ‘ecotourism’, but actually, you can make any tour or vacation eco-friendly and still get the best out of your trip. Try it out on your next vacation…",
    "cover": "blog/make-any-tour-an-eco-tour/cover.jpg",
    "coverAlt": "Make Any Tour an Eco-tour",
    "blocks": [
      {
        "type": "h3",
        "html": "<strong>“Ecotourism”</strong>… it sounds like a big fancy word right? It really just means responsible travel to help conserve environment and well-being of local people.<a href=\"http://www.ecotourism.org/what-is-ecotourism\">*</a> A lot of companies and destinations promote ‘ecotourism’, but actually, you can make any tour or vacation eco-friendly and still get the best out of your trip. Try it out on your next vacation with these easy steps:"
      },
      {
        "type": "image",
        "src": "blog/make-any-tour-an-eco-tour/img_3974.jpg",
        "alt": "Keeping it Clean - Canteen"
      },
      {
        "type": "p",
        "html": "<strong>Jus</strong><strong>t say no to water bottles</strong> – Bring a reusable canteen or water bottle. We really like <a href=\"http://www.kleankanteen.com/products/special/travelers_against_plastic.php\">Klean Kanteen</a> since they’re sturdy stainless steel and of course any BPA free bottle is great. Many hotels and hostels offer free or low cost water bottle refills, and if they don’t, water from the tap in Montezuma is safe to drink. Easier for you and easier on the environment. If you don’t have a strong stomach or are uncertain about water potability, consider purchasing some water purification tablets to bring with you such as these <a href=\"http://www.rei.com/product/407071/potable-aqua-iodine-tablets\">iodine tablets</a>, just in case."
      },
      {
        "type": "p",
        "html": "<strong>Use re-usables</strong> – Reusable grocery bags are great for traveling. You can easily find bags that are pocket sized to throw in your luggage and whip out when you need to pick up a few items at the grocery store or souvenir shop. <a href=\"http://www.chicobag.com/category/vita-repete\">ChicoBags</a> are great because they’re not only pocket sized and durable, but there are also many products made from recycled materials."
      },
      {
        "type": "image",
        "src": "blog/make-any-tour-an-eco-tour/bag.jpg",
        "alt": "Make Any Tour an Eco-tour"
      },
      {
        "type": "p",
        "html": "<strong>Take a walk</strong> <strong>(or ride)</strong>– Explore on foot, reduce carbon emissions and see more of the world around you. Of course cruising in a rental car or shuttle with the A/C full blast is comfy, but you can actually take your time and see more of a small area on foot. If walking isn’t your style, try two wheels instead of four and rent a bike to get around. Bicycle rentals in Montezuma run from about $10-$20 a day."
      },
      {
        "type": "p",
        "html": "<strong>Conserve energy &amp; water</strong> – We know, it’s hot here. But lowering your A/C, and turning it off when not in use saves a lot of energy. You can also conserve energy and water by asking hotel staff not to replace towels and linens every day unless absolutely necessary, and taking shorter showers especially during the dry season when water reserves may be lower."
      },
      {
        "type": "p",
        "html": "All these things will help the environment, but they’ll also ensure that the area is well maintained for the residents who share their community with vacationers year-round. We’re pretty sure they’ll be thankful for your small but responsible and thoughtful actions. 🙂"
      },
      {
        "type": "p",
        "html": "*http://www.ecotourism.org/what-is-ecotourism"
      },
      {
        "type": "p",
        "html": "<a href=\"http://www.jcsjourneys.com\">http://www.jcsjourneys.com</a>"
      }
    ]
  },
  {
    "slug": "montezuma-for-families",
    "title": "Montezuma for Families",
    "date": "2013-11-01",
    "excerpt": "There are many great activities for families visiting Montezuma, even those with young children. From beach days, to nature walks here’s a few ideas to keep the family vacation fun for everyone…",
    "cover": "tours/lets-get-local/02.jpg",
    "coverAlt": "Montezuma for Families",
    "blocks": [
      {
        "type": "p",
        "html": "Often considered a backpackers town or yoga haven, there are also many great activities for families visiting Montezuma, even those with young children. From beach days, to nature walks here’s a few ideas to keep the family vacation fun for everyone."
      },
      {
        "type": "p",
        "html": "1. <strong>Walk north on the beach</strong> from <a href=\"http://wikitravel.org/en/Montezuma\">Montezuma</a> toward a cascade called Piedra Colorada; literally translates to ‘colored rock’ which is exactly what you’ll find there. This spot offers a fun place to explore and take a refreshing dip in the cascades or ocean."
      },
      {
        "type": "image",
        "src": "blog/montezuma-for-families/mario_cooking.jpg",
        "alt": "Let's Get Local - Cooking"
      },
      {
        "type": "p",
        "html": "Let’s Get Local – Cooking Demo"
      },
      {
        "type": "p",
        "html": "2. <strong>Take a <a href=\"/tours/curu-nature-escape\">day trip</a> to <a href=\"http://www.curuwildliferefuge.com/\">Curu Wildlife Refuge</a></strong>. The refuge offers a shorter trail option, perfect for those with shorter legs or less tolerance for high humidity, but still with plenty of wildlife to see."
      },
      {
        "type": "p",
        "html": "3. <strong>Walk to Montezuma Waterfall</strong>. Even if getting all the way to the falls is too much for some, relaxing by the cool cascades with a little picnic can be just a fun."
      },
      {
        "type": "p",
        "html": "4. <strong>Go sightseeing</strong>. While the more adventurous family members are off surfing, snorkeling or ziplining, there’s an equally fun <a href=\"/tours/lets-get-local\">sightseeing tour</a> <a href=\"/tours/lets-get-local\">“Let’s Get Local”,</a> that shows you the less obvious attractions, and takes you to share and learn about Costa Rican culture with a local family. This is a great option if you want to brush up on some Spanish words, find out what traditional cuisine tastes like, and immerse yourself a bit more into the area."
      },
      {
        "type": "p",
        "html": "There you go! Now pack a bag for the kids, the grandparents, bring everyone. Enjoy!"
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com</a>"
      }
    ]
  },
  {
    "slug": "why-nocturno",
    "title": "Why ‘Nocturno’?",
    "date": "2013-10-31",
    "excerpt": "Why take a night hike through the darkness with little more than a flashlight and water bottle?",
    "cover": "blog/why-nocturno/cover.jpg",
    "coverAlt": "Why ‘Nocturno’?",
    "blocks": [
      {
        "type": "p",
        "html": "Why take a night hike through the darkness with little more than a flashlight and water bottle? Because <strong>Montezuma</strong> comes alive at night. As day turns to dusk the sounds of surrounding wildlife amplify alerting you to the fact that there is far more to see than that which is visible during normal waking hours. <strong>Nocturnal animals</strong> fill the forest and awaken to begin searching for food, making them much more likely to be spotted when trekking around after the sun has set."
      },
      {
        "type": "p",
        "html": "In addition to the roaming mammals and insects that are sure to show, this tour has a couple more surprises in store. You won’t be disappointed!"
      },
      {
        "type": "embed",
        "src": "https://player.vimeo.com/video/78227059"
      },
      {
        "type": "p",
        "html": "<a href=\"/tours/nocturno-night-journey\">NOCTURNO Montezuma Night Hike</a>"
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com</a>"
      }
    ]
  },
  {
    "slug": "keeping-it-clean",
    "title": "Keeping it Clean",
    "date": "2013-10-28",
    "excerpt": "Volunteers recently got together to make sure the beaches in Montezuma stay clean, healthy and ready for everyone to enjoy. Cleaning up isn’t all there is to it though…",
    "cover": "blog/keeping-it-clean/cover-coastline.jpg",
    "coverAlt": "Keeping it Clean",
    "blocks": [
      {
        "type": "p",
        "html": "Unfortunately, like many beaches around the world, the beaches in Montezuma occasionally need a good cleaning. Luckily, volunteers got together over the weekend to make sure the beaches stay clean, healthy and ready for everyone to enjoy."
      },
      {
        "type": "p",
        "html": "Cleaning up isn’t all there is to it though; it’s about preventative measures too. Some of the things <a href=\"/about#mission\">we</a><a href=\"/about#mission\"> do</a> to help <strong>reduce waste</strong> and keep beaches from pollution are: <strong>minimize</strong> use of plastic bottles, <strong>reuse</strong> bags and containers whenever possible, and use the provided bins to <strong>recycle</strong> whenever possible. We also encourage guests to <strong>use refillable water bottles</strong> or canteens and reusable grocery bags."
      },
      {
        "type": "image",
        "src": "blog/keeping-it-clean/img_3974.jpg",
        "alt": "Keeping it Clean - Canteen"
      },
      {
        "type": "p",
        "html": "There’s a few simple measures you can take as well to ensure that you don’t contribute to beach pollution. When you’re enjoying the beach, make sure you pack up all your garbage too and dispose of it in the containers at the beach entrance. If there isn’t one around, hang on to it, you’re bound to pass one on your way back to the hotel or into town. Dispose of cigarette butts properly too, that sand is for sitting! But not for cigarettes. 🙂 And if you get really motivated, you can throw away that wrapper or bottle someone else missed or left behind too."
      },
      {
        "type": "p",
        "html": "Sometimes pollution issues are much larger than the individual level, but if every person does their small part, it definitely won’t hurt. We love beaches and we know you do too!"
      },
      {
        "type": "h3",
        "html": "Here’s to keeping <a href=\"http://maps.google.com/maps?ll=9.65,-85.0666666667&amp;spn=0.1,0.1&amp;q=9.65,-85.0666666667%20%28Montezuma%2C%20Costa%20Rica%29&amp;t=h\">Montezuma, Costa Rica</a> pristine and rubbish free!"
      },
      {
        "type": "p",
        "html": "<a href=\"/\">www.jcsjourneys.com </a>"
      }
    ]
  },
  {
    "slug": "what-green-really-means",
    "title": "What “Green” Really Means",
    "date": "2013-10-25",
    "excerpt": "It’s ‘green season’ in Costa Rica. What it really means though, is a beautiful lush green countryside, sprinkled with periodic showers that cool the humid tropical air…",
    "cover": "blog/what-green-really-means/cover-green-trail.jpg",
    "coverAlt": "What “Green” Really Means",
    "blocks": [
      {
        "type": "p",
        "html": "It’s ‘<strong>green season</strong>‘ in Costa Rica. What that means is that it’s the rainy season; a time when many travelers opt to avoid the country due to the rain that dampens the joy of beach time and many outdoor activities. What it really means though, is a beautiful lush green countryside, sprinkled with periodic showers that cool the humid tropical air. It’s also a great time to be in Costa Rica because there are fewer travelers crowding the roads, beaches and buses and also making rates on many activities and accommodations much more affordable."
      },
      {
        "type": "p",
        "html": "Moreover, while for many regions throughout the country, rain has drenched the land for months now, <a href=\"http://wikitravel.org/en/Montezuma\"><strong>Montezuma</strong></a>, located in the southern <strong><a href=\"http://maps.google.com/maps?ll=10.0,-85.4166667&amp;spn=1.0,1.0&amp;q=10.0,-85.4166667%20%28Nicoya%20Peninsula%29&amp;t=h\">Nicoya Peninsula</a></strong>, feels like summer never ended. Although the effects of this are yet undetermined and cause is still uncertain, the fact is, that now is the time to visit. Many visitors make their travel arrangements around the beginning of the holidays, mid-November on, but one of the best times to be in the area is precisely, right now! The area is literally green and beautiful, calm and best of all, still has plenty of sunshine and warmth to share with all the snowbirds. If you’re getting anxious for holiday travel…consider a pre-holiday vacation and make your way down."
      },
      {
        "type": "p",
        "html": "If you’re looking for things to do while you’re here in Montezuma or around the Nicoya Peninsula, we’ve got lots of options <a href=\"/tours\">here</a>. If you’re looking for ways to get to the area, consider this <a href=\"/blog/getting-to-montezuma\">blog</a>."
      }
    ]
  },
  {
    "slug": "beyond-the-resort",
    "title": "Beyond the Resort",
    "date": "2013-10-16",
    "excerpt": "The resort concept is perfect for getting away from it all, no one can deny it. But there’s lots more to traveling to distant lands than swimming pools and tiny umbrellas in your cocktail glass…",
    "cover": "blog/beyond-the-resort/cover.jpg",
    "coverAlt": "Beyond the Resort",
    "blocks": [
      {
        "type": "p",
        "html": "<strong>Everyone needs a vacation.</strong> And what better image comes to mind than colorful drinks served up poolside at a <strong>beautiful seaside resort</strong>?"
      },
      {
        "type": "image",
        "src": "blog/beyond-the-resort/beyond_resort.jpg",
        "alt": "Beyond the Resort"
      },
      {
        "type": "p",
        "html": "The resort concept is perfect for getting away from it all, no one can deny it. But there’s lots more to traveling to distant lands than swimming pools and tiny umbrellas in your cocktail glass. There’s so much to see and do and learn about in the surrounding areas– of course you’ll never be able to do it all –but stepping outside the resort walls even for a day can open your eyes to a whole new world."
      },
      {
        "type": "p",
        "html": "Here are some ideas for taking a little vacation from your vacation to liven things up a bit."
      },
      {
        "type": "p",
        "html": "1. Take a <strong><a href=\"/tours/lets-get-local\">local tour</a></strong> for a chance to learn more about the country or city you’re in.<br> 2. Book a night in a smaller <strong>hotel outside the resort</strong> for a different perspective of the area.<br> 3. Skip an included meal and opt for eating out at a <strong>small restaurant</strong> for a taste of local fare."
      },
      {
        "type": "p",
        "html": "So spend a couple days lounging by the pool to unwind, then <strong>get outside and explore!</strong> You won’t regret it."
      }
    ]
  },
  {
    "slug": "getting-to-montezuma",
    "title": "So… How do I get to Montezuma?",
    "date": "2013-10-12",
    "excerpt": "Coordinating travel isn’t always easy, but we know you’ve got things to do and planes to catch and a tight schedule for all of it. So we’ve collected a few bits of useful information regarding…",
    "cover": "blog/getting-to-montezuma/cover-road.jpg",
    "coverAlt": "So… How do I get to Montezuma?",
    "blocks": [
      {
        "type": "p",
        "html": "Coordinating travel isn’t always easy, but we know you’ve got things to do and planes to catch and a tight schedule for all of it. So we’ve collected a few bits of useful information regarding transportation into and out of the area to shave a few minutes off your online research and planning time."
      },
      {
        "type": "p",
        "html": "<strong>Flying</strong>"
      },
      {
        "type": "p",
        "html": "<strong><a href=\"http://www.natureair.com/\">Nature Air </a></strong>now has direct flights to and from San Jose <a href=\"http://maps.google.com/maps?ll=9.99388888889,-84.2088888889&amp;spn=0.03,0.03&amp;q=9.99388888889,-84.2088888889%20%28Juan%20Santamar%C3%ADa%20International%20Airport%29&amp;t=h\">Juan Santamaria International Airport</a> to <a href=\"http://maps.google.com/maps?ll=9.73333333333,-85.0166666667&amp;spn=0.03,0.03&amp;q=9.73333333333,-85.0166666667%20%28Tambor%20Airport%29&amp;t=h\">Tambor Airport</a>. Tambor is just 45 min. north of <a href=\"http://maps.google.com/maps?ll=9.65,-85.0666666667&amp;spn=0.1,0.1&amp;q=9.65,-85.0666666667%20%28Montezuma%2C%20Costa%20Rica%29&amp;t=h\">Montezuma</a>, an easy bus, taxi or shuttle ride from there can get you to your hotel. Keep in mind, these are small planes, so book early to ensure a cheaper price and secure a seat before they’re all taken. Also, make sure your domestic flight leaves you plenty of time to go through security and check in for your international flight on the way out."
      },
      {
        "type": "p",
        "html": "<strong>Ground</strong>"
      },
      {
        "type": "p",
        "html": "There are plenty of shuttle services to get you to Montezuma from key connection points. Shuttles will cost a little more but can get you here faster, in more comfortable style and drop you off directly at your hotel. Most have baggage restrictions and will charge an extra fee for surfboards so specify any special needs when making reservations. Larger, more reputable shuttle services are easily booked online, others are best arranged by phone or by your hotel."
      },
      {
        "type": "image",
        "src": "blog/getting-to-montezuma/map.png",
        "alt": "map_get_to_montezuma"
      },
      {
        "type": "p",
        "html": "Click map for larger view"
      },
      {
        "type": "p",
        "html": "Public buses are a cheaper option, don’t require reservations, and connect with ferry schedules but can sometimes be crowded and take much longer to get you to your destination. Schedules tend to change unannounced and vary substantially, so if you’ve got some place to be at a specific time, better opt for a shuttle or a taxi. Also, to take the bus from the ferry in Paquera to Montezuma, you’ll need to be on the 5pm ferry coming over as that’s the last connecting bus of the day. Loose bus schedules for the area are posted <strong><a href=\"http://www.nicoyazoom.com/en/information/bus-ferry-schedual.html\">here</a></strong>, or can be found in the printed version of Zoom magazine available at most hotels. Asking a local is usually your best bet for confirming the actual time of the next bus."
      },
      {
        "type": "p",
        "html": "<strong>Ferry</strong>"
      },
      {
        "type": "p",
        "html": "The <strong><a href=\"http://www.navieratambor.com/\">Naviera Tambor </a></strong>connects the pacific coast of <a href=\"http://maps.google.com/maps?ll=9.93333333333,-84.0833333333&amp;spn=10.0,10.0&amp;q=9.93333333333,-84.0833333333%20%28Costa%20Rica%29&amp;t=h\">Costa Rica</a> to the <a href=\"http://maps.google.com/maps?ll=10.0,-85.4166667&amp;spn=1.0,1.0&amp;q=10.0,-85.4166667%20%28Nicoya%20Peninsula%29&amp;t=h\">Nicoya Peninsula</a> via <a href=\"http://maps.google.com/maps?ll=9.96666666667,-84.8333333333&amp;spn=0.1,0.1&amp;q=9.96666666667,-84.8333333333%20%28Puntarenas%29&amp;t=h\">Puntarenas</a> and Paquera (the peninsula side) transporting both passengers and vehicles. The schedule and ticket fares can be found <strong><a href=\"http://www.navieratambor.com/horarios-y-tarifas\">here</a></strong>. Tickets can be purchased at the dock the day of departure, but be sure to check schedules a couple days in advance of your travels as times do change occasionally for maintenance purposes. For an added bonus, take the 5pm ferry and get some great photos of the sunset as you cruise along."
      },
      {
        "type": "h2",
        "html": "Happy travel planning!"
      }
    ]
  },
  {
    "slug": "make-it-a-journey",
    "title": "Make It a Journey",
    "date": "2013-10-09",
    "excerpt": "Traveling has so many rewards. Yes, it can also be stressful at times, but more than anything, you walk away from your travels with great stories, and more often than not, a desire to travel even more…",
    "cover": "blog/make-it-a-journey/cover.jpg",
    "coverAlt": "Make It a Journey",
    "blocks": [
      {
        "type": "p",
        "html": "<strong>Traveling has so many rewards.</strong><strong> </strong>Yes, it can also be stressful at times, but more than anything, you walk away from your travels with great stories, and more often than not, a desire to travel even more."
      },
      {
        "type": "p",
        "html": "No matter what kind of traveler you are, family resort vacationer or solo backpacker, one thing remains in common; <strong>you want your travels to be memorable</strong>. You want to see something different, do something different, have new experiences and meet new people. In the hustle and bustle of getting from one place to the next, trying to catch the next flight or train or bus, we sometimes forget that traveling isn’t just about getting to the next destination. <strong>It’s about everything in between too.</strong>"
      },
      {
        "type": "image",
        "src": "blog/make-it-a-journey/dsc_0457.jpg",
        "alt": "make_it_a_journey"
      },
      {
        "type": "p",
        "html": "Sure it’s hard to tell anyone to slow down on a vacation when many of us only get a week or two out of the year. But there’s a way to enjoy the treasures one finds when taking it slow, while keeping up with your full agenda. With tours that cover<strong> <a href=\"/tours\">local living, nature, and birdwatc</a></strong><strong><a href=\"/tours\">hing,</a> </strong>you’ll be able to squeeze in another activity, but also get a little closer look at your surroundings. Instead of moving from place to place every day or two, try spending an extra day in the same place and get to know it a little. There’s plenty of adventure in the little things, so on your next trip, don’t just make it a vacation, make it a<strong> <a href=\"http://jcsjourneys.com\">journey</a>.</strong>"
      }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postHasContent(post: BlogPost) {
  return post.blocks.some((b) => b.type === "p");
}
