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
  <p>Are you waiting for the best daily prizes in this event? In my newest video I'm showing you a selection of the best daily buildings of the Gateway into the Past event!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/xxgTpJJw314"></iframe></p>
    <hr>
    <p>Isn't that what you look for? <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to stay up-to-date with my latest videos!</p>`,
        "repeatAfter":172800,//604800,
        "style":"info",
        "duration":420,
        "active":true,
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
    "5":{  // NEW FEATURE ON THE WEBSITE
        "id":5,
        "text":`<h4 class="alert-heading">Chapter 20 has arrived in Beta!</h4>
        <hr>
        <p><center><img src="https://i.ibb.co/kxJQxbn/ch20-banner.png" style="width: 40%;">
        <br><br>You can visit the respective page of <a href="https://idavis-elvenar.com/guestRaces/powerofmusic.html" class='alert-link'>Chapter 20 - The Power of Music</a> to see the questline of this chapter. More details will follow, so stay tuned!
        <br>If the process goes as usual, we may expect this chapter to hit Live servers in the upcoming weeks!</center></p>`,
        "repeatAfter":172800,
        "style":"warning",
        "duration":45,
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
        "priority":20
    },
    "7":{  // NEW BUILDING
        "id":7,
        "text":`<h4 class="alert-heading">Elvenar is turning 7!</h4>
        <p>To thank us for spending Elvenar's 7th Birthday Celebration together, InnoGames have a gift for us - the <a href='buildings.html#A_Evt_Generic_Festive_Fountain' target="_blank" class='alert-link'>Festive Fountain</a> building. Every player who logs in between June 1st and the night of June 3rd will receive this gift!</p>`,
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
    "9":{  // SPECIAL VIDEO PROMO #2
        "id":9,
        "text":`<h4 class="alert-heading">Introducing: Chests Comparator on the website!</h4>
  <p>The Lucky Little Fin event comes with the chests rotation system and together with this event I'm introducing to you the brand-new tool on my website - the Chests Comparator. All the details can be found in the video below!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/zqgJUn2kRNA"></iframe></p><br>
  <center><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Subscribe</a> to stay with the latest Elvenar videos!</center>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":172800,
        "style":"info",
        "duration":500,
        "active":false,
        "priority":40
    },
    "10":{  // EVENTS SIMULTANEOUSLY
        "id":10,
        "text":`<h4 class="alert-heading">Autumn Zodiac Event starts on Beta!</h4>
        <p>Since a new event is starting on Beta, the default filter has been changed so that the new event appears first. But don't worry - you can access the <b>Gateway into the Past</b> event using the drop-down menu on the top of the website - just like any other event from the past!</p>`,
        "repeatAfter":18000,
        "style":"warning",
        "duration":60,
        "active":true,
        "priority":100
    },
}
