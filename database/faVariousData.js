var allFas = {
    "2022" : [
        ["Fellowship Adventures - July 2022", "july_xxii_",true,false],
    ]
}

var baseTabsFa = [
    {"id":"base_left_panel_div", "name":"Info", "img":"https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Items", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#items", "onclick":"items"},
]

var additionalTabsFa = {
    "july_xxii_": [
        {"id":"rewards", "name":"Rewards", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#rewards", "file":"rewards.html"},
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
    {"id":1,"icon":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png","name":"Dwarven Brewery Badge","requirement":"Produce 50x Beverages"},
    {"id":2,"icon":"https://i.ibb.co/RzhP0kh/fellowship-adventures-item2.png","name":"Treant Guild Badge","requirement":"Produce 35x Simple Tools"},
    {"id":3,"icon":"https://i.ibb.co/xz01WV7/fellowship-adventures-item3.png","name":"Bakers Guild Badge","requirement":"Produce 20x Bread"},
    {"id":4,"icon":"https://i.ibb.co/MMbn5SX/fellowship-adventures-item4.png","name":"Carpenters Guild Badge","requirement":"Produce 10x Advanced Tools"},
    {"id":5,"icon":"https://i.ibb.co/xH5ZVx4/fellowship-adventures-item5.png","name":"Farmers Guild Badge","requirement":"Produce 10x Basket of Groceries"},
    {"id":6,"icon":"https://i.ibb.co/jMndZQw/fellowship-adventures-item6.png","name":"Blacksmith Guild Badge","requirement":"Produce 5x Toolbox"},
    {"id":7,"icon":"https://i.ibb.co/0BHjcft/fellowship-adventures-item7.png","name":"Luxurious Flacon","requirement":"Produce 1x Marble Mosaic + produce 1x Precious Ring + produce 1x Wooden Figurines"},
    {"id":8,"icon":"https://i.ibb.co/FK8XRLW/fellowship-adventures-item8.png","name":"Golden Bracelet","requirement":"Collect some amount of basic goods"},
    {"id":9,"icon":"https://i.ibb.co/bLqZFQc/fellowship-adventures-item9.png","name":"Diamond Necklace","requirement":"Produce 4x product of basic manufactory (24-hours)"},
    {"id":10,"icon":"https://i.ibb.co/HrGBhdM/fellowship-adventures-item10.png","name":"Elegant Statue","requirement":"Produce 2x product of basic manufactory (48-hours)"},
    {"id":11,"icon":"https://i.ibb.co/Kqk0VBJ/fellowship-adventures-item11.png","name":"Wand","requirement":"Collect 1x Magical Manufactoring spell + collect 100x planks"},
    {"id":12,"icon":"https://i.ibb.co/z8b1T5b/fellowship-adventures-item12.png","name":"Magic Potion","requirement":"Collect 1x Ensorcelled Endowment spell + collect 100x elixir"},
    {"id":13,"icon":"https://i.ibb.co/DKK9rdv/fellowship-adventures-item13.png","name":"Witch Hat","requirement":"Collect 2 of the following spells: Magical Manufactoring, Ensorcelled Endowment, Power of Provision"},
    {"id":14,"icon":"https://i.ibb.co/GT4MDYf/fellowship-adventures-item14.png","name":"Wonder Society Badge","requirement":"Invest 20 KP into any wonder"},
    {"id":15,"icon":"https://i.ibb.co/cL7BsbR/fellowship-adventures-item15.png","name":"Elvarian Guard Badge","requirement":"Recruit some amount of units"},
    {"id":16,"icon":"https://i.ibb.co/8B3ZwdF/fellowship-adventures-item16.png","name":"Sack of Coins","requirement":"Collect some amount of coins"},
    {"id":17,"icon":"https://i.ibb.co/d2jXSb7/fellowship-adventures-item17.png","name":"Ghost in a bottle","requirement":"Solve 4 spire encounters OR solve 4 tournament encounters"},
    {"id":18,"icon":"https://i.ibb.co/BK9mwsK/fellowship-adventures-item18.png","name":"Druid Staff","requirement":"Collect 2x combining catalyst"},
    {"id":19,"icon":"https://i.ibb.co/qDXppMz/fellowship-adventures-item19.png","name":"Arcane Residue","requirement":"Collect 9x vision vapor"},
    {"id":20,"icon":"https://i.ibb.co/sgTj589/fellowship-adventures-item20.png","name":"Elemental Marbles","requirement":"Collect 8 relics"},
    {"id":21,"icon":"https://i.ibb.co/Y3xnddG/fellowship-adventures-item21.png","name":"Enchanted Tiara","requirement":"Use 3x enchantment of your choice"},
]

var excludeItems = {
    "july_xxii_": [2,3,7,11,12]
}