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
  <p>Are you waiting for the best daily prizes in this event? In my newest video I'm showing you a selection of the best daily buildings of the Naturally Amazing event!</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/AFkAsMvABP0"></iframe></p>
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
        "text":`<h4 class="alert-heading">Introducing: Random Rewards!</h4>
        <p>Finally, all the buildings that feature random productions <img src='https://i.ibb.co/4Y4qbR1/random-questionmark.png' width='24px'> are now properly displayed on the website. These include <a href='buildings.html#A_Evt_Wishing_Well' target="_blank" class='alert-link'>Wishing Well</a>, <a href='buildings.html#A_Evt_Godess_Of_Wishes' target="_blank" class='alert-link'>Goddess of Wishes</a>, <a href='buildings.html#A_Evt_Djinn' target="_blank" class='alert-link'>Genie</a> and all buildings that will be added in the future!</p>
        <p>Stay tuned for more updates on the website soon!</p>`,
        "repeatAfter":604800,
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
        "repeatAfter":1209600,
        "style":"info",
        "duration":1080,
        "active":false,
        "priority":30
    },
    "9":{  // SPECIAL VIDEO PROMO #2
        "id":9,
        "text":`<h4 class="alert-heading">Prepare for the Naturally Amazing event 2022!</h4>
  <p>The Naturally Amazing event is just around the corner! It's time to get prepared so that you can get most of the rewards possible, including brand new flower decorations to enhance various boosts in your city! I'm sharing the ways how you can prepare for this event as well as strategies for obtaining Naturally Amazing rewards in the video below.</p>
  <hr>
  <p class="mb-0"><iframe class="center" width="560px" height="315.2px" allowfullscreen="true" src="https://www.youtube.com/embed/?"></iframe></p><br>
  <center><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Subscribe</a> to stay with the latest Elvenar videos!</center>
    <hr>
    <p><a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="alert-link">Visit my channel</a> to find more videos from Elvenar and happening around InnoGames!</p>`,
        "repeatAfter":302400,
        "style":"info",
        "duration":500,
        "active":false,
        "priority":40
    },
    "10":{  // EVENTS SIMULTANEOUSLY
        "id":10,
        "text":`<h4 class="alert-heading">Naturally Amazing Event starts on Beta!</h4>
        <p>Since a new event is starting on Beta, the default filter has been changed so that the new event appears first. But don't worry - you can access the <b>Dawn of the Phoenix</b> event using the drop-down menu on the top of the website - just like any other event from the past!</p>`,
        "repeatAfter":18000,
        "style":"warning",
        "duration":60,
        "active":false,
        "priority":100
    },
}
