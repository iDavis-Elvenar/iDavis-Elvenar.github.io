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
        "text":`<h4 class="alert-heading">Chapter 21 has arrived in Beta!</h4>
        <hr>
        <p><center><img src="https://i.ibb.co/f4FTJcz/ch21-banner.png" style="width: 40%;">
        <br><br>You can visit the respective page of <a href="https://idavis-elvenar.com/guestRaces/vallorianlegend.html" class='alert-link'>Chapter 21 - The Vallorian Legend</a> to see the questline, research and a lot of new content about this chapter!
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
        "active":true,
        "priority":40
    },
    "10":{  // SEASON
        "id":10,
        "text":`<h4 class="alert-heading">Season of Triumph is coming soon!</h4>
  <p>The brand-new season is soon beginning on your server!</p>
  <hr>
  <center><img src="https://i.ibb.co/kxdBh0Y/season-triumph-banner.png" style="width: 35%;"></center><br>
    <center><p>The <b>Season of Triumph</b> is approaching quickly and it is now fully covered on my Seasons page! Get ready for everything that the Season of Triumph has to offer. You can access this page from the navigation bar under the "More" button!<br>
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
        "text":`<h4 class="alert-heading">✍ How did you learn about the website?</h4>
        <p>I'd love to hear from you! Help me improve your experience by letting me know how you discovered my website.
        I will be glad if could take a minute to fill out this short survey.</p>
        <hr>
        <p style="text-align: center;"><h4 style="text-align: center;">Visit the survey <a href="https://docs.google.com/forms/d/1LVn9ZoyqCJBkgB6W4GToM9u0V9NZTomKIcKCg3Bvknc" target="_blank" class="alert-link">here</a>!</h4></p>
        <p>You can ignore this message if you have already completed this survey.</p>`,
        "repeatAfter":432000,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":80
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
        "text":`<h4 class="alert-heading"><img src="https://i.ibb.co/GtLpfZ7/event-guide.png" style="width: 30px;">  Event Quests are now Chapter dependent!
        <img src="https://i.ibb.co/XCp7d47/ch21.png" style="width: 25px;"> <img src="https://i.ibb.co/W5CtfR2/ch17.png" style="width: 25px;"> <img src="https://i.ibb.co/Sx7bcfG/ch13.png" style="width: 25px;"></h4>
        <hr>
        <p>With the beginning of the next event (<b>Buzzing Spring</b>), some of the Event Quests will have varying conditions based on your current chapter.</p>
        <p>For this reason, I have implemented a new feature that allows you to preset the chapter for Event Quest lists on this website!</p>
        <p>1. Visit the <b>Quests</b> tab on the <b>All Events</b> page.</p>
        <p>2. Search for the Settings Icon: <img src="https://i.ibb.co/0ycDvJx/options.png" style="width: 20px;">.</p>
        <p>3. Click the Settings Icon and select a chapter for each of the servers on which you play.</p>
        <p>Now the quests will be relevant to your selected chapter. Be sure to update the settings when your city advances.</p>
        <center><img src="https://i.ibb.co/Bcg7QqN/servers-settings.png" style="width: 35%;"></center><br>
        <hr>
        <p>Visit the <a href="https://idavis-elvenar.com/events.html" target="_blank" class="alert-link">Quests Page</a> to prepare your settings now!</p>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":100,
        "active":false,
        "priority":45
    },
    "17":{  // EVENT
        "id":17,
        "text":`<h4 class="alert-heading">Whiskers of the Past event is coming soon!</h4>
  <p>This year's Amuni event is getting close!</p>
  <hr>
  <center><img src="https://i.ibb.co/QXbMfCS/EL-akcia-m-j-2024-banner.jpg" style="width: 35%;"></center><br>
    <center><p>The <b>Whiskers of the Past</b> is approaching and it is now fully covered on the All Events page! Get ready for everything that the Amuni event has to offer!<br><br>
    Start Date, Daily Prizes and Quests are now available to preview in the <img src="https://i.ibb.co/QkJ7qzP/all-events.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/events.html" class="alert-link">All Events</a> page!<br><br>
    Visit the <img src="https://i.ibb.co/NC00fM1/all-buildings.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/buildings.html" class="alert-link">All Buildings</a> page for more information about all the newly introduced buildings.</p></center>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":50
    },
}
