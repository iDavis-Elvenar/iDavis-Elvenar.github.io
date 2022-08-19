var allFas = {
    "2022" : [
        ["Fellowship Adventures - July 2022", "july_xxii_",true,false],
    ]
}

var baseTabsFa = [
    {"id":"base_left_panel_div", "name":"Info", "img":"https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Items", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#items", "onclick":"items"},
    {"id":"base_left_panel_div", "name":"Rewards", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#rewards", "onclick":"rewards"},
]

var additionalTabsFa = {
    "july_xxii_": [
        {"id":"waypoints", "name":"Waypoints", "img":"https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#waypoints", "file":"waypoints.html"},
    ],
}

var faBanners = [
    {"all" : "https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png"},
]

var dates = {
    "july_xxii_": {
        "start_date": "July 1st 2022",
        "end_date": "July 7th 2022"
    }
}

var introductionText = `This page is an overview for the _. You can find various information about this adventure in the left panel of this site.`;

var tutorialVideo = "https://www.youtube.com/embed/wIISaa2TiCk";

var subscribeText = `You can find more video content by <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="card-title text-center text-link"><b>subscribing to my channel</b></a>.`;

var items = [
    {"ord":1,"id":"badge_brewery","name":"Dwarven Brewery Badge","requirement":"Produce 50x Beverages"},
    {"ord":2,"id":"badge_treants","name":"Treant Guild Badge","requirement":"Produce 35x Simple Tools"},
    {"ord":3,"id":"badge_bakers","name":"Bakers Guild Badge","requirement":"Produce 20x Bread"},
    {"ord":4,"id":"badge_carpenters","name":"Carpenters Guild Badge","requirement":"Produce 10x Advanced Tools"},
    {"ord":5,"id":"badge_farmers","name":"Farmers Guild Badge","requirement":"Produce 10x Basket of Groceries"},
    {"ord":6,"id":"badge_blacksmith","name":"Blacksmith Guild Badge","requirement":"Produce 5x Toolbox"},
    {"ord":7,"id":"luxurious_flacon","name":"Luxurious Flacon","requirement":"Produce 1x Marble Mosaic + produce 1x Precious Ring + produce 1x Wooden Figurines"},
    {"ord":8,"id":"golden_bracelet","name":"Golden Bracelet","requirement":"Collect some amount of basic goods"},
    {"ord":9,"id":"diamond_necklace","name":"Diamond Necklace","requirement":"Produce 4x product of basic manufactory (24-hours)"},
    {"ord":10,"id":"elegant_statue","name":"Elegant Statue","requirement":"Produce 2x product of basic manufactory (48-hours)"},
    {"ord":11,"id":"wand","name":"Wand","requirement":"Collect 1x Magical Manufactoring spell + collect 100x planks"},
    {"ord":12,"id":"magic_potion","name":"Magic Potion","requirement":"Collect 1x Ensorcelled Endowment spell + collect 100x elixir"},
    {"ord":13,"id":"witch_hat","name":"Witch Hat","requirement":"Collect 2 of the following spells: Magical Manufactoring, Ensorcelled Endowment, Power of Provision"},
    {"ord":14,"id":"badge_wonderhelper","name":"Wonder Society Badge","requirement":"Invest 20 KP into any wonder"},
    {"ord":15,"id":"badge_unit","name":"Elvarian Guard Badge","requirement":"Recruit some amount of units"},
    {"ord":16,"id":"money_sack","name":"Sack of Coins","requirement":"Collect some amount of coins"},
    {"ord":17,"id":"ghost_in_a_bottle","name":"Ghost in a bottle","requirement":"Solve 4 spire encounters OR solve 4 tournament encounters"},
    {"ord":18,"id":"druid_staff","name":"Druid Staff","requirement":"Collect 2x combining catalyst"},
    {"ord":19,"id":"arcane_residue","name":"Arcane Residue","requirement":"Collect 9x vision vapor"},
    {"ord":20,"id":"elemental_marbles","name":"Elemental Marbles","requirement":"Collect 8 relics"},
    {"ord":21,"id":"enchanted_tiara","name":"Enchanted Tiara","requirement":"Use 3x enchantment of your choice"},
]

var excludeItems = {
    "july_xxii_": [2,3,7,11,12]
}

var stageRewards = {
    "july_xxii_": [
        [
            {"img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "text":"1x Ancient Knowledge (20 KP)", "link":"https://idavis-elvenar.com"},
            {"img":"", "text":"", "link":""},
            {"img":"", "text":"", "link":""},
        ],
        [
            {"img":"", "text":"", "link":""},
            {"img":"", "text":"", "link":""},
            {"img":"", "text":"", "link":""},
        ],
        [
            {"img":"", "text":"", "link":""},
            {"img":"", "text":"", "link":""},
            {"img":"", "text":"", "link":""},
        ]
    ],
}