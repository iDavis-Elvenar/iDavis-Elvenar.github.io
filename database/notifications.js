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
        "text":`<h4 class="alert-heading">Chapter 20 has arrived in Beta!</h4>
        <hr>
        <p><center><img src="https://i.ibb.co/kxJQxbn/ch20-banner.png" style="width: 40%;">
        <br><br>You can visit the respective page of <a href="https://idavis-elvenar.com/guestRaces/powerofmusic.html" class='alert-link'>Chapter 20 - The Power of Music</a> to see the questline of this chapter. More details will follow, so stay tuned!
        <br>If the process goes as usual, we may expect this chapter to hit Live servers in the upcoming weeks!</center></p>`,
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
        <p>We have received a new gift as a special reward for this year's Black Friday - the Celestial Titan. Click <a href='https://idavis-elvenar.com/buildings.html#A_Evt_Generic_Celestial_Titan' target="_blank" class='alert-link'>here</a> to see all the details about this building!</p>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":20,
        "active":false,
        "priority":40
    },
    "8":{  // SPECIAL VIDEO PROMO
        "id":8,
        "text":`<h4 class="alert-heading">New Feature on the Website: Guest Races!</h4>
  <p>I'm introducing the brand-new feature for the website - the Guest Races Story Questlines! There is a new space under the <b>All Guest Races</b> subpage that will get updated by a lot of additional content in the future. Check the introduction video below.</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/oIbfeeplXXA"></iframe></p>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":259200,
        "style":"info",
        "duration":1080,
        "active":false,
        "priority":10
    },
    "9":{  // FELLOWSHIP ADVENTURES
        "id":9,
        "text":`<h4 class="alert-heading">New round of Fellowship Adventures is coming!</h4>
  <p>The next round of Fellowship Adventures is getting close and will soon start on Live servers!</p>
  <hr>
  <center><img src="https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png" style="width: 40%;"></center><br>
    <center><p>Get ready with my newest page on the website, which you can access from the navigation bar under the "More" button!<br>
    Note: This round will feature a brand-new map layout, called <b>Map H</b>. You can find all the updated paths inside the <img src="https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/fellowship-adventures.html#waypoints" class="alert-link">Waypoints</a> tab.</p></center>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":45,
        "active":false,
        "priority":40
    },
    "10":{  // SEASON
        "id":10,
        "text":`<h4 class="alert-heading">Season of Dreams is here!</h4>
  <p>The brand-new type of event is soon beginning on your server!</p>
  <hr>
  <center><img src="https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png" style="width: 40%;"></center><br>
    <center><p>The <b>Season of Dreams</b> is approaching quickly and I have prepared the brand-new page on my website that helps you get ready for everything the Seasons have to offer! You can access this page from the navigation bar under the "More" button!<br>
    Daily Quests, Weekly Quests, many interesting rewards and the <b>Season Pass calculator</b>! All of this is now covered in the newest <img src="https://i.ibb.co/87MNrBB/season-pass.png" style="width: 22px;"> <a href="https://idavis-elvenar.com/seasons.html" class="alert-link">Seasons</a> page!</p></center>`,
        "repeatAfter":345600,
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
        "text":`<h4 class="alert-heading">The Great Excavation Event starts on Beta!</h4>
        <p>The new event is starting on Beta and you can now access the information using the drop-down menu at the top of the website! Use "Select event" filter to preview the buildings or event information about this upcoming event!</p>`,
        "repeatAfter":18000,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":100
    },
    "13":{  // NEW FEATURE ON THE WEBSITE #2
        "id":13,
        "text":`<h4 class="alert-heading">Playground is now available!</h4>
        <p>The waiting is over! I have released the newest feature - the <b>Playground</b> that will help you practise <b>The Great Excavation</b> event!</p>
        <hr>
        <center><img src="https://i.ibb.co/Nnf2NWh/playground-screen-fb.png" style="width: 40%; margin-bottom: 15px;"></center>
        <p style="text-align: center;">This feature will help you to not only better understand how this event works, but also to better navigate between the ancient walls and improve the efficiency of using your tools.
        You can access Playground directly <a href="https://idavis-elvenar.com/events.html#playground-february_xxiii_" target="_blank" class="alert-link">here</a> and play the simulation now!</p>`,
        "repeatAfter":259200,
        "style":"warning",
        "duration":45,
        "active":false,
        "priority":50
    },
    "14":{  // FEEDBACK SURVEY
        "id":14,
        "text":`<h4 class="alert-heading">Your feedback is important!</h4>
        <p>I'm constantly striving to improve the website to make it more user-friendly and informative. To help me achieve this goal, I will be 
        glad if you could take a few minutes to fill out this short survey. Your feedback is very important to me!</p>
        <hr>
        <p style="text-align: center;"><h4 style="text-align: center;">Visit the survey <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIZ-erMnm-L6IRfq3yiSu7uObHh2N82KHNC6N7o7KD0OwUUQ/viewform" target="_blank" class="alert-link">here</a>!</h4></p>`,
        "repeatAfter":258600,
        "style":"warning",
        "duration":60,
        "active":true,
        "priority":70
    },
}
