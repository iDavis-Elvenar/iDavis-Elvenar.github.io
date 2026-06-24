var notifications = {
    "1":{  // REGULAR FEEDBACK
        "id":1,
        "text":"Do you have any feedback for me or did you find a bug at the website? Feel free to reach me at new <a href='contact.html' class='alert-link'>Contact Page</a> in the top left menu.",
        "repeatAfter":1209600,
        "style":"warning",
        "duration":10,
        "active":false,
        "priority":10
    },
    "2":{  // NEW EVENT - BOTH SUBPAGES
        "id":2,
        "text":"New event arrived on Beta and all the new buildings are now available! Make sure to refresh the website using CTRL + F5 to get the latest changes and also to check both <a href='buildings.html' class='alert-link'>All Buildings</a> and <a href='events.html' class='alert-link'>All Events</a> subpages so that you don't miss any news!",
        "repeatAfter":604800,
        "style":"info",
        "duration":15,
        "active":false,
        "priority":30
    },
    "3":{  // DAILY PRIZES VIDEO PROMO
        "id":3,
        "text":`<h4 class="alert-heading">Best Daily Prizes!</h4>
  <p>Are you waiting for the best daily prizes in this event? In my newest video I'm showing you a selection of the best daily buildings of The Great Excavation event!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/mYHFFbfLXtA"></iframe></p>
    <hr>
    <p>Isn't that what you look for? <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to stay up-to-date with my latest videos!</p>`,
        "repeatAfter":172800,//604800,
        "style":"info",
        "duration":420,
        "active":false,
        "priority":40
    },
    "4":{  // NEW VIDEOS SOON
        "id":4,
        "text":"New event is here and some new videos might appear on my channel soon! Feel free to <a href='https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1' class='alert-link'>subscribe to my channel</a> so that you won't miss any new video.",
        "repeatAfter":604800,
        "style":"info",
        "duration":15,
        "active":false,
        "priority":30
    },
    "5":{  // NEW CHAPTER
        "id":5,
        "text":`<h4 class="alert-heading">Chapter 25 is coming soon!</h4>
        <hr>
        <p><center><img src="https://i.ibb.co/nMNxtSq8/ch25-banner.png" style="width: 40%;">
        <br><br>Chapter 25 has arrived to Beta and is soon coming to Live servers! On <b>iDavis-Elvenar</b> and <b>Elvenar Tools</b> you can find everything you need to get prepared!<br><br>
        You can visit the respective page of <a href="https://idavis-elvenar.com/guestRaces/purposeoflife.html" class='alert-link'>Chapter 25 - The Purpose of Life</a> to discover new mechanics, Quests, Settlement and first layouts for this chapter.<br>
        At <a href="https://elvenar-tools.com/buildings/settlements?chapter=25" class='alert-link'>Elvenar Tools - Settlement Buildings</a> you can find the compact list of new Settlement Buildings.<br>
        At <a href="https://elvenar-tools.com/buildings/ancient-wonders?chapter=25" class='alert-link'>Elvenar Tools - Ancient Wonders</a> you can preview the upcoming new Ancient Wonders.<br>
        <a href="https://elvenar-tools.com/inventory-manager" class='alert-link'>Inventory Manager</a> is now updated too and supports calculations up to Chapter 25.<br><br>
        <br>Keep an eye on both sites, as more content to help you prepare will be released soon! If the process goes as usual, we can expect this chapter to hit Live servers in the coming weeks!</center></p>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":120,
        "active":true,
        "priority":30
    },
    "6":{  // DONATE
        "id":6,
        "text":`<h4 class="alert-heading">Do you like the website?</h4>
        <p>If you like the Database Portal and would like to support me with its further creation, you can use the <a href='donate-create.html' class='alert-link'>Donate Page</a> to make a donation. It is completely voluntary and you can do so if you like the content I create and feel inclined.</p>`,
        "repeatAfter":1209600,
        "style":"warning",
        "duration":30,
        "active":true,
        "priority":100
    },
    "7":{  // NEW BUILDING
        "id":7,
        "text":`<h4 class="alert-heading">Black Friday!</h4>
        <p>We have received a new gift as a special reward for this year's Black Friday - the Phantom Rose Unicorn. Click <a href='https://idavis-elvenar.com/buildings.html#A_Evt_BlackFriday_Phantom_Rose_Unicorn' target="_blank" class='alert-link'>here</a> to see all the details about this building!</p>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":20,
        "active":false,
        "priority":40
    },
    "8":{  // SPECIAL VIDEO PROMO
        "id":8,
        "text":`<h4 class="alert-heading">Dread the Dragons! - Official Tutorial for Chapter 21!</h4>
  <p>The Chapter 21 - The Vallorian Legend is about to start on August 7th on Live Servers! Watch the official video below to learn all about it!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/tU13HtUF0VY"></iframe></p>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":259200,
        "style":"info",
        "duration":500,
        "active":false,
        "priority":40
    },
    "9":{  // FELLOWSHIP ADVENTURES
        "id":9,
        "text":`<h4 class="alert-heading">New round of Fellowship Adventures is coming very soon!</h4>
  <p>The next round of Fellowship Adventures is getting close and will soon start on Live servers!</p>
  <hr>
  <center><img src="https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png" style="width: 40%;"></center><br>
    <center><p>Start Date, Quests, Waypoints and Rewards are now available in the <img src="https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/fellowship-adventures.html" class="alert-link">Fellowship Adventures</a> page!<br></p></center>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":45,
        "active":false,
        "priority":40
    },
    "10":{  // SEASON
        "id":10,
        "text":`<h4 class="alert-heading">Season of Dreams is coming soon!</h4>
  <p>The brand-new season is soon beginning on your server!</p>
  <hr>
  <center><img src="https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png" style="width: 35%;"></center><br>
    <center><p>The <b>Season of Dreams</b> is approaching quickly and it is now fully covered on my Seasons page! Get ready for everything that the Season of Dreams has to offer. You can access this page from the navigation bar under the "More" button!<br>
    Start Date, Daily Quests, Weekly Quests, Blessings, many interesting rewards and the <b>Season Pass calculator</b> are now available in the newest <img src="https://i.ibb.co/87MNrBB/season-pass.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/seasons.html" class="alert-link">Seasons</a> page!</p></center>`,
        "repeatAfter":259200,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":40
    },
    "11":{  // EVENTS SIMULTANEOUSLY - BETA PRIMARY
        "id":11,
        "text":`<h4 class="alert-heading">The Secrets of Alchemy Event starts on Beta!</h4>
        <p>Because a new event is starting on Beta, the default filter has been changed so that the new event appears first. But don't worry - you can access the <b>Winter Magic</b> event using the drop-down menu on the top of the website - just like any other event from the past!</p>`,
        "repeatAfter":18000,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":100
    },
    "12":{  // EVENTS SIMULTANEOUSLY - BETA SECONDARY
        "id":12,
        "text":`<h4 class="alert-heading">Mama Juul's Event starts on Beta!</h4>
        <p>The new event is starting on Beta and you can now access the information using the drop-down menu at the top of the website! Use "Select event" filter to preview the buildings or event information about this upcoming event!</p>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":50
    },
    "13":{  // NEW FEATURE ON THE WEBSITE #2
        "id":13,
        "text":`<h4 class="alert-heading">Begin the Whispers of the Soul event with my newest Playground! <img src="https://i.ibb.co/CWpxB38/tab-playground.png" style="width: 40px;"></h4>
        <p>I'm introducing the Playground for the <b>Whispers of the Soul</b> event! This feature on my website simulates the well-known mechanic we know from the Halloween event!</p>
        <center><img src="https://i.ibb.co/1bTX0RL/playground-screen.png" style="width: 30%"></center>
        <hr>
        <p>You can access the Playground on the <b>All Events</b> subpage or directly <a href="https://idavis-elvenar.com/events.html#playground-tile_mistyforest_xxiii_" target="_blank" class="alert-link">here</a>! The Playground is a practise tool
        that will not only help you better understand the way this event works, but will also help you better navigate the misty forest and improve the efficiency of using your tools. You can also test the new pricing of tools and find which one works for you the best!</p>`,
        "repeatAfter":259200,
        "style":"warning",
        "duration":70,
        "active":false,
        "priority":50
    },
    "14":{  // FEEDBACK SURVEY
        "id":14,
        "text":`<h4 class="alert-heading">📜 A Message from iDavis (January 1st) 📜</h4>
        <hr>
        <p>Hello, hello! Another year has passed, and I'd like to take a moment to look back and say thank you for the love you showed throughout 2025!</p>
        <p>The iDavis-Elvenar website would not be the same without your continuous support, your valuable feedback, and your contributions to its growth by sharing
        it with your friends and fellow players. This year, the website continued to be your #1 source for everything Elvenar, and at this pace, it will remain your go-to hub for all things Elvenar in 2026! Expect new updates
        and features that will further enhance your gaming experience.</p>
        <p>Thank you for reading, have fun with the game, and have a wonderful New Year 2026!</p>
        <p>iDavis</p>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":300,
        "active":false,
        "priority":120
    },
    "15":{  // NEW FEATURE ON THE WEBSITE #3
        "id":15,
        "text":`<h4 class="alert-heading">Chapter 25 releases on June 30th! <img src="https://i.ibb.co/nsLc56GW/finity-gear-icon.png" style="width: 40px;"></h4>
        <hr>
        Your time to prepare for the new chapter is here!
        <center><img src="https://i.ibb.co/HD3n5V40/techtree-banner-era-25.png" style="height: 200px;">
        <p>
        <center>
        Hi everyone,<br><br>
        The newest Chapter 25 is just around the corner. Now is the time to roll up your sleeves and finalize your city layouts before you dive into every challenge this newest chapter has to offer!<br><br>
        With the newest <a href="https://elvenar-tools.com/city-planner" class="alert-link" target="_blank">City Planner</a>, you can prepare layouts in advance.
        Thanks to the Layout Manager on the left side, you can save them, rename them, and return to them whenever you are ready for them in-game.<br>
        You can easily track how your building productions shift with every upgrade, ensure you have enough Armories prepared to forge Finity Gear, or simply experiment with the expiring settlement buildings.
        Keep an eye on the right-hand panel to watch your production values change in real-time, allowing you to maximize your efficiency and optimize your space.
        With the <a href="https://elvenar-tools.com/city-planner" class="alert-link" target="_blank">City Planner</a>, all your preparations can be handled with ease.
        </center>
        </p>
        <p>Visit <a href="https://elvenar-tools.com" class="alert-link" target="_blank">Elvenar Tools</a> to find all important details about Chapter 25!</p>
        <p><i>Elvenar Tools is my newest website, designed to run alongside iDavis-Elvenar to provide you with even more in-depth information and tools for the game.</i></p>
        <p>iDavis</p>
        </h4></center>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":180,
        "active":true,
        "priority":150
    },
    "16":{  // NEW FEATURE ON THE WEBSITE #1
        "id":16,
        "text":`<h4 class="alert-heading">Introducing: Inventory Manager! <img src="https://elvenar-tools.com/shared/inventory.png" style="width: 40px;"></h4>
        <hr>
        <p>Meet the new Inventory Manager at Elvenar Tools! Analyze your inventory like never before with features normally unavailable in-game. Get a clear advantage and easily figure out which buildings are actually worth your space.</p>
        <p>
        <ul>
        <li><b>Load your inventory</b> using the extension and manage it in various ways</li>
        <li><b>Sort buildings</b> based on culture, population and various productions</li>
        <li><b>Calculate production per tile</b> for any given chapter</li>
        <li><b>Track Royal Restorations</b> needed to upgrade buildings</li>
        </ul>
        </p>
        <p>Visit <a href="https://elvenar-tools.com/inventory-manager " class="alert-link" target="_blank" >> Elvenar Tools - Inventory Manager <</a> to learn more!</p>
        </h4></center>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":70,
        "active":true,
        "priority":150
    },
    "17":{  // EVENT
        "id":17,
        "text":`<h4 class="alert-heading">Get the most out of Living Chorus!</h4>
  <p>Maximize your production of Pet Food! <img src="https://i.ibb.co/4P5JftJ/spell-pet-food-1.png" width="24px"></p>
  <hr>
  <center><img src="https://i.ibb.co/HpG8N1kV/EL-akcia-m-j-2026-banner.png" style="width: 35%;"></center><br>
    <center><p>The <b>Living Chorus</b> event is here and it offers the Boughsong Terraces set, which is a permanent source of Pet Food for your city.
    By reaching the Silver or Gold League and participating in the upcoming Fellowship Adventure, you can collect enough set pieces to produce two Pet Foods per day.<br><br>
    Check these layouts to see how to maximize your production of Pet Food: <a href="https://elvenar-tools.com/city-planner?sharedLayout=d779b9f3-3986-4325-b6d7-d2abba4f709a" target="_blank" class="alert-link">Silver League Layout</a> and <a href="https://elvenar-tools.com/city-planner?sharedLayout=d493fd8a-324f-41c9-a518-9f8a3129fea2" target="_blank" class="alert-link">Gold League layout</a>.</p></center>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":90,
        "active":false,
        "priority":50
    },
}
