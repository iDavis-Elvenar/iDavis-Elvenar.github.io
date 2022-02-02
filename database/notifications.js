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
        "active":true,
        "priority":30
    },
    "3":{  // DAILY PRIZES VIDEO PROMO
        "id":3,
        "text":`<h4 class="alert-heading">Best Daily Prizes!</h4>
  <p>Are you waiting for the best daily prizes in this event? In my newest video I'm showing you a selection of the best daily buildings of the Winter Magic Event!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/NOk4Q_u3BL8"></iframe></p>
    <hr>
    <p>Isn't that what you look for? <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to stay up-to-date with my latest videos!</p>`,
        "repeatAfter":604800,
        "style":"info",
        "duration":300,
        "active":false,
        "priority":40
    },
    "4":{  // NEW VIDEOS SOON
        "id":4,
        "text":"New event is here and some new videos might appear on my channel soon! Feel free to <a href='https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1' class='alert-link'>subscribe to my channel</a> so that you won't miss any new video.",
        "repeatAfter":604800,
        "style":"info",
        "duration":15,
        "active":true,
        "priority":30
    },
    "5":{  // NEW FEATURE ON THE WEBSITE
        "id":5,
        "text":`<h4 class="alert-heading">Introducing: Interactive Quest Lists!</h4>
        <p>From now on, you will be able to find quest lists <img src="images/general/event_guide.png"> for every event in the All Events subpage. These new quest lists are made in an interactive way - you can mark the quests you have already completed and check those for which you still need some preparation - making it even easier for you to prepare for the event!</p>
        <hr>
        <p>These 2 interactive features are my current ideas. Do you have any other habits that you keep with when following quest lists during the events and would like to see them implemented in the portal? Share your ideas using the form in my <a href='contact.html' class='alert-link'>Contact Page</a> and they might become a future addition of this website!</p>`,
        "repeatAfter":604800,
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
        "priority":20
    },
    "7":{  // NEW BUILDING
        "id":7,
        "text":`<h4 class="alert-heading">Black Friday!</h4>
        <p>Black Friday is coming to Elvenar and the new building will be available to claim! You can find the parameters of the upcoming Earth Dragon <a href='buildings.html#A_Evt_BlackFriday_XXI_Gift_Dragon' target="_blank" class='alert-link'>here</a>.</p>`,
        "repeatAfter":86400,
        "style":"warning",
        "duration":20,
        "active":false,
        "priority":40
    },
    "8":{  // SPECIAL VIDEO PROMO
        "id":8,
        "text":`<h4 class="alert-heading">InnoGames Revenue Review in 2022!</h4>
  <p>There was a lot happening at InnoGames in 2021. In my newest video we are taking a look at the revenue of InnoGames in 2021, compare the revenue and growth of different games and analyze the performance of the InnoGames' newest titles. Finally, we will also say something about their potential impact on the future of the existing games!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/nB6yfF73Fyg"></iframe></p>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":604800,
        "style":"info",
        "duration":1080,
        "active":true,
        "priority":50
    },
}
