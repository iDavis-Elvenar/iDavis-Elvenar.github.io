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
        "text":`<h4 class="alert-heading">Chapter 24 has arrived in Beta!</h4>
        <hr>
        <p><center><img src="https://i.ibb.co/dXFG20P/ch24-banner.png" style="width: 40%;">
        <br><br>You can visit the respective page of <a href="https://idavis-elvenar.com/guestRaces/fateofbastet.html" class='alert-link'>Chapter 24 - Fate of the Bastet</a> to see a lot of new content about this chapter!
        <br>If the process goes as usual, we can expect this chapter to hit Live servers in the coming weeks!</center></p>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":45,
        "active":false,
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
    "15":{  // SHORTS TEASER
        "id":15,
        "text":`<h4 class="alert-heading">Sshh the Season of Secrets is here!</h4>
  <p>Learn all about the newest season on the <a href="https://idavis-elvenar.com/seasons.html" class="alert-link">Seasons</a> page.</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="315" height="560"
    src="https://www.youtube.com/embed/BMuyNcwpymE?feature=share"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture;
    web-share"
    allowfullscreen>
  </iframe></p>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":86400,
        "style":"secondary",
        "duration":60,
        "active":false,
        "priority":50
    },
    "16":{  // NEW FEATURE ON THE WEBSITE #1
        "id":16,
        "text":`<h4 class="alert-heading">Master your layouts! <img src="https://i.ibb.co/LdFXZzHx/worker-large-human.webp" style="width: 40px;"></h4>
        <hr>
        <p>Did you know that the new City Planner on Elvenar-Tools supports all complex in-game logic and settlement mechanics? Prepare for upcoming Chapters by testing your layouts in advance and maximize your production efficiency!</p>
        <center><img src="https://i.ibb.co/fzyBLrW7/ch24-layout1.png" style="width: 25%"></center><br>
        <p>Note: Layouts for all Chapters can now be found under All Guest Races on iDavis-Elvenar, including the newest <a href="https://idavis-elvenar.com/guestRaces/fateofbastet.html#layouts" target="_blank" class="alert-link">Chapter 24</a>!
        This update also allows you to open suggested layouts directly in the City Planner, making it easy to adjust and further optimize them to fit your city.</p>
        <center><h4>Start planning your city now at <a href="https://elvenar-tools.com/city-planner?sharedLayout=eyJjaXR5SWQiOiJlbHZlcyIsInN0cnVjdHVyZXMiOlt7ImRlZklkIjoiQl9DaDI0X01TQjEiLCJ4IjoyNiwieSI6MTcsImxldmVsIjo0LCJwcm9kdWN0IjoxLCJpZCI6IjEiLCJ3aWR0aCI6NiwiaGVpZ2h0IjoxMH0seyJkZWZJZCI6IkJfQ2gyNF9PU0IxIiwieCI6MjcsInkiOjExLCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIyIiwid2lkdGgiOjQsImhlaWdodCI6Nn0seyJkZWZJZCI6IkJfQ2gyNF9PU0IyIiwieCI6MTgsInkiOjIxLCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIzIiwid2lkdGgiOjgsImhlaWdodCI6M30seyJkZWZJZCI6IkJfQ2gyNF9NU0IyIiwieCI6NDYsInkiOjE4LCJsZXZlbCI6NCwicHJvZHVjdCI6MSwiaWQiOiI0Iiwid2lkdGgiOjEwLCJoZWlnaHQiOjZ9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMiIsIngiOjE4LCJ5IjoxOCwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiNSIsIndpZHRoIjo4LCJoZWlnaHQiOjN9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMSIsIngiOjUyLCJ5IjoyNCwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiNiIsIndpZHRoIjo0LCJoZWlnaHQiOjZ9LHsiZGVmSWQiOiJCX0NoMjRfT1NCNCIsIngiOjU2LCJ5IjoyMywibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiNyIsIndpZHRoIjo2LCJoZWlnaHQiOjR9LHsiZGVmSWQiOiJCX0NoMjRfT1NCNCIsIngiOjMyLCJ5IjoyMywibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiOCIsIndpZHRoIjo2LCJoZWlnaHQiOjR9LHsiZGVmSWQiOiJCX0NoMjRfT1NCNCIsIngiOjU2LCJ5IjoxNSwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiOSIsIndpZHRoIjo2LCJoZWlnaHQiOjR9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMyIsIngiOjUyLCJ5IjoxMCwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMTAiLCJ3aWR0aCI6MywiaGVpZ2h0Ijo4fSx7ImRlZklkIjoiQl9DaDI0X09TQjMiLCJ4Ijo0NiwieSI6MjQsImxldmVsIjoxLCJwcm9kdWN0IjoxLCJpZCI6IjExIiwid2lkdGgiOjMsImhlaWdodCI6OH0seyJkZWZJZCI6IkJfQ2gyNF9PU0IzIiwieCI6NDksInkiOjI0LCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIxMiIsIndpZHRoIjozLCJoZWlnaHQiOjh9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMSIsIngiOjMxLCJ5IjoxMSwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMTMiLCJ3aWR0aCI6NCwiaGVpZ2h0Ijo2fSx7ImRlZklkIjoiQl9DaDI0X09TQjIiLCJ4IjoxOCwieSI6MjQsImxldmVsIjoxLCJwcm9kdWN0IjoxLCJpZCI6IjE0Iiwid2lkdGgiOjgsImhlaWdodCI6M30seyJkZWZJZCI6IkJfQ2gyNF9PU0IxIiwieCI6MzEsInkiOjI3LCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIxNSIsIndpZHRoIjo0LCJoZWlnaHQiOjZ9LHsiZGVmSWQiOiJCX0NoMjRfT1NCNCIsIngiOjU2LCJ5IjoxOSwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMTYiLCJ3aWR0aCI6NiwiaGVpZ2h0Ijo0fSx7ImRlZklkIjoiQl9DaDI0X09TQjMiLCJ4IjoyNCwieSI6OSwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMTciLCJ3aWR0aCI6MywiaGVpZ2h0Ijo4fSx7ImRlZklkIjoiQl9DaDI0X09TQjIiLCJ4IjozMiwieSI6MTcsImxldmVsIjoxLCJwcm9kdWN0IjoxLCJpZCI6IjE4Iiwid2lkdGgiOjgsImhlaWdodCI6M30seyJkZWZJZCI6IkJfQ2gyNF9PU0IyIiwieCI6MzIsInkiOjIwLCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIxOSIsIndpZHRoIjo4LCJoZWlnaHQiOjN9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMSIsIngiOjI3LCJ5IjoyNywibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMjAiLCJ3aWR0aCI6NCwiaGVpZ2h0Ijo2fSx7ImRlZklkIjoiQl9DaDI0X09TQjEiLCJ4IjoyMywieSI6MjcsImxldmVsIjoxLCJwcm9kdWN0IjoxLCJpZCI6IjIxIiwid2lkdGgiOjQsImhlaWdodCI6Nn0seyJkZWZJZCI6IkJfQ2gyNF9PU0IyIiwieCI6MzgsInkiOjIzLCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIyMiIsIndpZHRoIjo4LCJoZWlnaHQiOjN9LHsiZGVmSWQiOiJCX0NoMjRfT1NCNCIsIngiOjQwLCJ5IjoxOSwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMjMiLCJ3aWR0aCI6NiwiaGVpZ2h0Ijo0fSx7ImRlZklkIjoiQl9DaDI0X09TQjQiLCJ4Ijo0MCwieSI6MTUsImxldmVsIjoxLCJwcm9kdWN0IjoxLCJpZCI6IjI0Iiwid2lkdGgiOjYsImhlaWdodCI6NH0seyJkZWZJZCI6IkJfQ2gyNF9PU0IzIiwieCI6NDYsInkiOjEwLCJsZXZlbCI6MSwicHJvZHVjdCI6MSwiaWQiOiIyNSIsIndpZHRoIjozLCJoZWlnaHQiOjh9LHsiZGVmSWQiOiJCX0NoMjRfT1NCMyIsIngiOjQ5LCJ5IjoxMCwibGV2ZWwiOjEsInByb2R1Y3QiOjEsImlkIjoiMjYiLCJ3aWR0aCI6MywiaGVpZ2h0Ijo4fV0sImV4cGFuc2lvbnMiOlt7IngiOjE1LCJ5IjowLCJmaXhlZCI6dHJ1ZX0seyJ4IjoyMCwieSI6MCwiZml4ZWQiOnRydWV9LHsieCI6MTUsInkiOjUsImZpeGVkIjp0cnVlfSx7IngiOjIwLCJ5Ijo1LCJmaXhlZCI6dHJ1ZX0seyJ4IjoxNSwieSI6MTAsImZpeGVkIjp0cnVlfSx7IngiOjIwLCJ5IjoxMCwiZml4ZWQiOnRydWV9LHsieCI6MjUsInkiOjB9LHsieCI6MjUsInkiOjV9LHsieCI6MjUsInkiOjEwfSx7IngiOjI1LCJ5IjoxNX0seyJ4IjoyMCwieSI6MTV9LHsieCI6MTUsInkiOjE1fSx7IngiOjE1LCJ5IjoyMH0seyJ4IjoyMCwieSI6MjB9LHsieCI6MjUsInkiOjIwfSx7IngiOjMwLCJ5IjoyMH0seyJ4IjozMCwieSI6MTV9LHsieCI6MzAsInkiOjEwfSx7IngiOjMwLCJ5Ijo1fSx7IngiOjMwLCJ5IjowfSx7IngiOjM1LCJ5IjowfSx7IngiOjM1LCJ5Ijo1fSx7IngiOjM1LCJ5IjoxMH0seyJ4IjozNSwieSI6MTV9LHsieCI6MzUsInkiOjIwfSx7IngiOjQwLCJ5IjoyMH0seyJ4Ijo0MCwieSI6MTV9LHsieCI6NDAsInkiOjEwfSx7IngiOjQwLCJ5IjowfSx7IngiOjQwLCJ5IjotNX0seyJ4Ijo0NSwieSI6MH0seyJ4Ijo0NSwieSI6NX0seyJ4Ijo0MCwieSI6NX0seyJ4Ijo0NSwieSI6MTB9LHsieCI6NDUsInkiOjE1fSx7IngiOjQ1LCJ5IjoyMH0seyJ4Ijo1MCwieSI6MjB9LHsieCI6NTAsInkiOjE1fSx7IngiOjUwLCJ5IjoxMH0seyJ4Ijo1MCwieSI6NX0seyJ4Ijo1MCwieSI6MH0seyJ4Ijo2MCwieSI6MH0seyJ4Ijo1NSwieSI6NX0seyJ4Ijo1NSwieSI6MH0seyJ4Ijo1NSwieSI6MTB9LHsieCI6NjAsInkiOjV9LHsieCI6NjAsInkiOjEwfSx7IngiOjYwLCJ5IjoxNX0seyJ4Ijo1NSwieSI6MTV9LHsieCI6NjAsInkiOjIwfSx7IngiOjU1LCJ5IjoyMH0seyJ4IjoxMCwieSI6MjB9LHsieCI6MTAsInkiOjE1fSx7IngiOjEwLCJ5IjoxMH0seyJ4IjoxMCwieSI6NX0seyJ4IjoxMCwieSI6MH0seyJ4Ijo1LCJ5IjowfSx7IngiOjUsInkiOjEwfSx7IngiOjUsInkiOjV9LHsieCI6NSwieSI6MTV9LHsieCI6NSwieSI6MjB9LHsieCI6MCwieSI6MjB9LHsieCI6MCwieSI6MTV9LHsieCI6MCwieSI6MTB9LHsieCI6MCwieSI6NX0seyJ4IjowLCJ5IjowfSx7IngiOjY1LCJ5IjowfSx7IngiOjcwLCJ5IjowfSx7IngiOjc1LCJ5IjowfSx7IngiOjc1LCJ5Ijo1fSx7IngiOjcwLCJ5Ijo1fSx7IngiOjY1LCJ5Ijo1fSx7IngiOjY1LCJ5IjoxMH0seyJ4Ijo3MCwieSI6MTB9LHsieCI6NzUsInkiOjEwfSx7IngiOjc1LCJ5IjoxNX0seyJ4Ijo3MCwieSI6MTV9LHsieCI6NjUsInkiOjE1fSx7IngiOjY1LCJ5IjoyMH0seyJ4Ijo3MCwieSI6MjB9LHsieCI6NzUsInkiOjIwfSx7IngiOjAsInkiOjI1fSx7IngiOjUsInkiOjI1fSx7IngiOjEwLCJ5IjoyNX0seyJ4IjoxNSwieSI6MjV9LHsieCI6MjAsInkiOjI1fSx7IngiOjI1LCJ5IjoyNX0seyJ4IjozMCwieSI6MjV9LHsieCI6MzUsInkiOjI1fSx7IngiOjQwLCJ5IjoyNX0seyJ4Ijo0NSwieSI6MjV9LHsieCI6NTAsInkiOjI1fSx7IngiOjU1LCJ5IjoyNX0seyJ4Ijo2MCwieSI6MjV9LHsieCI6NjUsInkiOjI1fSx7IngiOjcwLCJ5IjoyNX0seyJ4Ijo3NSwieSI6MjV9LHsieCI6MCwieSI6MzB9LHsieCI6NSwieSI6MzV9LHsieCI6NSwieSI6MzB9LHsieCI6MCwieSI6MzV9LHsieCI6MTAsInkiOjM1fSx7IngiOjEwLCJ5IjozMH0seyJ4IjoxNSwieSI6MzB9LHsieCI6MTUsInkiOjM1fSx7IngiOjIwLCJ5IjozNX0seyJ4IjoyMCwieSI6MzB9LHsieCI6MjUsInkiOjMwfSx7IngiOjI1LCJ5IjozNX0seyJ4IjozMCwieSI6MzV9LHsieCI6MzAsInkiOjMwfSx7IngiOjM1LCJ5IjozMH0seyJ4IjozNSwieSI6MzV9LHsieCI6NDUsInkiOjM1fSx7IngiOjQwLCJ5IjozMH0seyJ4Ijo0MCwieSI6MzV9LHsieCI6NDUsInkiOjMwfSx7IngiOjUwLCJ5IjozMH0seyJ4Ijo1MCwieSI6MzV9LHsieCI6NTUsInkiOjM1fSx7IngiOjU1LCJ5IjozMH0seyJ4Ijo2MCwieSI6MzB9LHsieCI6NjAsInkiOjM1fSx7IngiOjY1LCJ5IjozNX0seyJ4Ijo2NSwieSI6MzB9LHsieCI6NzAsInkiOjMwfSx7IngiOjcwLCJ5IjozNX0seyJ4Ijo3NSwieSI6MzV9LHsieCI6NzUsInkiOjMwfV0sInZhcmlhYmxlcyI6e30sImxpbmtzIjpbXSwibmFtZSI6IkNoYXB0ZXIgMjQgLSBMYXlvdXQgMSJ9" target="_blank" class="alert-link">Elvenar Tools - City Planner</a>!
        </h4></center>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":70,
        "active":false,
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
        "active":true,
        "priority":50
    },
}
