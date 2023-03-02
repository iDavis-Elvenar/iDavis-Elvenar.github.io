var baseTabsFa = [
    {"id":"base_left_panel_div", "name":"Info", "img":"https://i.ibb.co/prd3mhW/info-fa-icon.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Items", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#items", "onclick":"items"},
    {"id":"base_left_panel_div", "name":"Rewards", "img":"https://i.ibb.co/Jv4v0z0/chest-gold.png", "img_width":"26", "img_style":"margin-left: 1px; margin-right: 10px; position: relative;", "href":"#rewards", "onclick":"rewards"},
    {"id":"base_left_panel_div", "name":"Waypoints", "img":"https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#waypoints", "onclick":"waypoints"},
]

var additionalTabsFa = {
    "november_xxii_": [

    ],
    "october_xxii_": [

    ],
}

var faBanners = [
    {"all" : "https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png"},
]

var dates = {
    "march_xxiii_": {
        "live": {
            "start_date": "__ _th 2023",
            "end_date": "__ _th 2023"
        },
        "beta": {
            "start_date": "March 2nd 2023",
            "end_date": "March 9th 2023"
        }
    },
    "january_xxiii_": {
        "live": {
            "start_date": "January 12th 2023",
            "end_date": "January 18th 2023"
        },
        "beta": {
            "start_date": "December 15th 2022",
            "end_date": "December 21st 2022"
        }
    },
    "november_xxii_": {
        "live": {
            "start_date": "November 15th 2022",
            "end_date": "November 21st 2022"
        },
        "beta": {
            "start_date": "October 27th 2022",
            "end_date": "November 2nd 2022"
        }
    },
    "october_xxii_": {
        "live": {
            "start_date": "October 6th 2022",
            "end_date": "October 12th 2022"
        },
        "beta": {
            "start_date": "September 15th 2022",
            "end_date": "September 21st 2022"
        }
    },
}

var introductionText = `This page is an overview for the _. You can find various information about this adventure in the left panel of this site.
<br><br>For easy access you can use the hotkey <b>CTRL+D</b> to save this page into your bookmarks and easily access the content in the future.`;

var tutorialVideo = "https://www.youtube.com/embed/wIISaa2TiCk";

var subscribeText = `You can find more video content by <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="card-title text-center text-link"><b>subscribing to my channel</b></a>.`;

var items = [
    {"ord":1,"id":"badge_brewery","name":"Dwarven Brewery Badge","requirement":"Produce 25x Beverages"},
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
    "march_xxiii_": [2,3,7,11,12],
    "january_xxiii_": [2,3,7,11,12],
    "november_xxii_": [2,3,7,11,12],
    "october_xxii_": [2,3,7,11,12],
}

var prioritiesItems = [
    "badge_brewery", "badge_treants", "badge_bakers", "badge_carpenters", "badge_farmers", "badge_blacksmith",
    "luxurious_flacon", "golden_bracelet", "diamond_necklace", "elegant_statue", "wand", "magic_potion", "witch_hat",
    "druid_staff", "badge_wonderhelper", "badge_unit", "money_sack", "arcane_residue", "elemental_marbles",
    "enchanted_tiara", "ghost_in_a_bottle",
]

var stageRewards = {
    "march_xxiii_": [
        [
            {"img":"", "text":"Will be added soon", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
        ],
        [
            {"img":"", "text":"", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
        ],
        [
            {"img":"", "text":"", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
            {"img":"", "text":"", "link":"", "description":``},
        ]
    ],
    "january_xxiii_": [
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"1x Ancient Knowledge (15 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/9HYLV46/carting-library.png", "text":"Carting Library", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Expiring_RefundTech", "description":``},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"10x Time Booster (10 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"2x Ancient Knowledge (20 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/kMLnsDm/rsk-evo.png", "text":"Tome of Snowy Instants", "link":"", "description":`Contains one reward of your choice:<br> <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_Winter_XIX_Gingerbread_Mansion" class="text-link font-weight-bold" target="_blank">Gingerbread Mansion</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XX_Watchful_Winter_Owl" class="text-link font-weight-bold" target="_blank">Watchful Winter Owl</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XXI_Boblins_Express_Service" class="text-link font-weight-bold" target="_blank">Boblin's Express Service</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XXII_Chromafrost_Glacier" class="text-link font-weight-bold" target="_blank">Chromafrost Glacier</a> Artifact, 4x Royal Restoration`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"15x Time Booster (30 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/VpD8CvF/generic-ferris-wheel.png", "text":"Ferris Wheel Galore", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Generic_Ferris_Wheel", "description":``},
            {"img":"https://i.ibb.co/kMLnsDm/rsk-evo.png", "text":"Tome of Snowy Instants", "link":"", "description":`Contains one reward of your choice:<br> <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_Winter_XIX_Gingerbread_Mansion" class="text-link font-weight-bold" target="_blank">Gingerbread Mansion</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XX_Watchful_Winter_Owl" class="text-link font-weight-bold" target="_blank">Watchful Winter Owl</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XXI_Boblins_Express_Service" class="text-link font-weight-bold" target="_blank">Boblin's Express Service</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_December_XXII_Chromafrost_Glacier" class="text-link font-weight-bold" target="_blank">Chromafrost Glacier</a> Artifact, 4x Royal Restoration`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"25x Time Booster (45 min)", "link":"", "description":``},
        ]
    ],
    "november_xxii_": [
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"1x Ancient Knowledge (15 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/9HYLV46/carting-library.png", "text":"Carting Library", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Expiring_RefundTech", "description":``},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"10x Time Booster (10 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"2x Ancient Knowledge (20 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/kMLnsDm/rsk-evo.png", "text":"Tome of Spooky Artifacts", "link":"", "description":`Contains one reward of your choice:<br> <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XXII_Witch_Doctor" class="text-link font-weight-bold" target="_blank">Witch Doctor</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XXI_Witch_Summoning_Circle" class="text-link font-weight-bold" target="_blank">Witch Summoning Circle</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XX_Witches_Hut" class="text-link font-weight-bold" target="_blank">Witch's Hut</a> Artifact, 4x Royal Restoration`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"15x Time Booster (30 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/VpD8CvF/generic-ferris-wheel.png", "text":"Ferris Wheel Galore", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Generic_Ferris_Wheel", "description":``},
            {"img":"https://i.ibb.co/kMLnsDm/rsk-evo.png", "text":"Tome of Spooky Artifacts", "link":"", "description":`Contains one reward of your choice:<br> <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XXII_Witch_Doctor" class="text-link font-weight-bold" target="_blank">Witch Doctor</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XXI_Witch_Summoning_Circle" class="text-link font-weight-bold" target="_blank">Witch Summoning Circle</a> Artifact, <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_October_XX_Witches_Hut" class="text-link font-weight-bold" target="_blank">Witch's Hut</a> Artifact, 4x Royal Restoration`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"25x Time Booster (45 min)", "link":"", "description":``},
        ]
    ],
    "october_xxii_": [
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"1x Ancient Knowledge (15 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/9HYLV46/carting-library.png", "text":"Carting Library", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Expiring_RefundTech", "description":``},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"10x Time Booster (10 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/QKLsH8F/ancient-knowledge-instant.png", "text":"2x Ancient Knowledge (20 KP)", "link":"", "description":``},
            {"img":"https://i.ibb.co/3Y2Db7d/ins-evo-september-xxii.png", "text":"Witty Raccoon Artifact", "link":"", "description":`Artifact for evolving <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_Autumn_XXII_WittyCoon" class="text-link font-weight-bold" target="_blank">Witty Raccoon</a> to higher stages`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"15x Time Booster (30 min)", "link":"", "description":``},
        ],
        [
            {"img":"https://i.ibb.co/VpD8CvF/generic-ferris-wheel.png", "text":"Ferris Wheel Galore", "link":"https://idavis-elvenar.com/buildings.html#A_Evt_Generic_Ferris_Wheel", "description":``},
            {"img":"https://i.ibb.co/3Y2Db7d/ins-evo-september-xxii.png", "text":"Witty Raccoon Artifact", "link":"", "description":`Artifact for evolving <a href="https://idavis-elvenar.com/buildings.html#A_Evt_Evo_Autumn_XXII_WittyCoon" class="text-link font-weight-bold" target="_blank">Witty Raccoon</a> to higher stages`},
            {"img":"https://i.ibb.co/Mh9PnYj/time-booster-instant.png", "text":"25x Time Booster (45 min)", "link":"", "description":``},
        ]
    ],
}

var waypointsIcons = {
    "all": "https://i.ibb.co/QH3F6Ms/waypoint-flag.png",
    "orange": "https://i.ibb.co/G9bvfMX/waypoint-orange.png",
    "blue": "https://i.ibb.co/dWFFkJ8/waypoint-blue.png",
    "green": "https://i.ibb.co/0276c7s/waypoint-green.png",
    "multi": "https://i.ibb.co/F4jRB4k/waypoint-multi.png",
}

var waypointsData = {
    "march_xxiii_": {"1":{"all":{"1":[{"witch_hat":2},{"arcane_residue":2}]},"orange":{"2":[{"druid_staff":2},{"badge_unit":6},{"badge_brewery":5}],"3":[{"elegant_statue":1},{"witch_hat":5},{"money_sack":14}],"4":[{"badge_blacksmith":1},{"ghost_in_a_bottle":5},{"badge_farmers":1}],"5":[{"badge_carpenters":2},{"badge_unit":6},{"badge_wonderhelper":10}],"6":[{"badge_brewery":5},{"elegant_statue":1},{"ghost_in_a_bottle":5}],"7":[{"golden_bracelet":3},{"diamond_necklace":2},{"badge_farmers":1}],"8":[{"enchanted_tiara":6},{"druid_staff":2},{"badge_carpenters":2}],"9":[{"elemental_marbles":11},{"badge_blacksmith":1},{"diamond_necklace":2}]},"blue":{"2":[{"elegant_statue":8},{"badge_brewery":2},{"elemental_marbles":6}],"3":[{"badge_blacksmith":12},{"badge_unit":2},{"badge_carpenters":2}],"4":[{"money_sack":3},{"arcane_residue":4},{"witch_hat":3}],"5":[{"badge_farmers":5},{"diamond_necklace":4},{"badge_carpenters":2}],"6":[{"money_sack":3},{"enchanted_tiara":2},{"golden_bracelet":4}],"7":[{"badge_brewery":2},{"badge_wonderhelper":3},{"badge_unit":2}],"8":[{"witch_hat":3},{"druid_staff":9},{"ghost_in_a_bottle":3}],"9":[{"badge_wonderhelper":3},{"diamond_necklace":4},{"badge_brewery":2}]},"green":{"2":[{"badge_wonderhelper":8},{"diamond_necklace":3},{"badge_blacksmith":3}],"3":[{"druid_staff":3},{"witch_hat":6},{"badge_carpenters":4}],"4":[{"badge_unit":8},{"diamond_necklace":3},{"druid_staff":3}],"5":[{"enchanted_tiara":2},{"golden_bracelet":2},{"elemental_marbles":5}],"6":[{"ghost_in_a_bottle":3},{"badge_farmers":4},{"arcane_residue":3}],"7":[{"badge_blacksmith":3},{"enchanted_tiara":2},{"elemental_marbles":5}],"8":[{"golden_bracelet":2},{"ghost_in_a_bottle":3},{"money_sack":10}],"9":[{"elegant_statue":4},{"arcane_residue":3},{"badge_brewery":10}]}},"2":{"all":{"1":[{"money_sack":2},{"druid_staff":2}]},"orange":{"2":[{"badge_unit":38},{"golden_bracelet":5},{"arcane_residue":12}],"3":[{"diamond_necklace":12},{"elemental_marbles":37},{"witch_hat":16}],"4":[{"badge_carpenters":5},{"badge_blacksmith":8},{"badge_wonderhelper":32}],"5":[{"golden_bracelet":5},{"badge_brewery":17},{"ghost_in_a_bottle":16}],"6":[{"money_sack":23},{"enchanted_tiara":11},{"badge_farmers":8}],"7":[{"badge_brewery":17},{"druid_staff":7},{"elegant_statue":5}],"8":[{"ghost_in_a_bottle":16},{"enchanted_tiara":11},{"money_sack":23}],"9":[{"druid_staff":7},{"badge_carpenters":5},{"arcane_residue":12}]},"blue":{"2":[{"ghost_in_a_bottle":10},{"badge_carpenters":13},{"badge_blacksmith":20}],"3":[{"witch_hat":10},{"diamond_necklace":13},{"badge_unit":17}],"4":[{"elemental_marbles":10},{"money_sack":10},{"enchanted_tiara":7}],"5":[{"badge_brewery":17},{"badge_blacksmith":20},{"badge_wonderhelper":18}],"6":[{"witch_hat":10},{"badge_farmers":9},{"elegant_statue":13}],"7":[{"golden_bracelet":13},{"arcane_residue":7},{"elemental_marbles":10}],"8":[{"money_sack":10},{"badge_farmers":9},{"druid_staff":30}],"9":[{"diamond_necklace":13},{"elegant_statue":13},{"arcane_residue":7}]},"green":{"2":[{"witch_hat":10},{"diamond_necklace":10},{"badge_wonderhelper":27}],"3":[{"ghost_in_a_bottle":20},{"elemental_marbles":15},{"money_sack":33}],"4":[{"golden_bracelet":7},{"druid_staff":23},{"badge_blacksmith":10}],"5":[{"badge_unit":28},{"enchanted_tiara":7},{"elegant_statue":7}],"6":[{"badge_brewery":33},{"badge_farmers":7},{"arcane_residue":20}],"7":[{"badge_blacksmith":10},{"elegant_statue":7},{"diamond_necklace":10}],"8":[{"badge_farmers":7},{"elemental_marbles":15},{"badge_carpenters":13}],"9":[{"witch_hat":10},{"golden_bracelet":7},{"enchanted_tiara":7}]}},"3":{"all":{"1":[{"badge_carpenters":2},{"golden_bracelet":2}]},"orange":{"2":[{"witch_hat":22},{"badge_farmers":11},{"badge_blacksmith":11}],"3":[{"badge_wonderhelper":43},{"arcane_residue":65},{"golden_bracelet":29}],"4":[{"money_sack":61},{"badge_unit":52},{"badge_blacksmith":11}],"5":[{"elemental_marbles":50},{"elegant_statue":14},{"witch_hat":22}],"6":[{"money_sack":61},{"badge_farmers":11},{"badge_wonderhelper":43}],"7":[{"badge_brewery":90},{"badge_unit":52},{"druid_staff":18}],"8":[{"badge_carpenters":29},{"ghost_in_a_bottle":87},{"elemental_marbles":50}],"9":[{"enchanted_tiara":58},{"diamond_necklace":32},{"druid_staff":18}]},"blue":{"2":[{"money_sack":27},{"enchanted_tiara":9},{"diamond_necklace":36}],"3":[{"elegant_statue":72},{"badge_blacksmith":54},{"ghost_in_a_bottle":14}],"4":[{"badge_farmers":24},{"elemental_marbles":28},{"badge_brewery":45}],"5":[{"enchanted_tiara":9},{"golden_bracelet":36},{"badge_unit":45}],"6":[{"badge_farmers":24},{"arcane_residue":18},{"badge_blacksmith":54}],"7":[{"druid_staff":82},{"badge_carpenters":36},{"money_sack":27}],"8":[{"ghost_in_a_bottle":14},{"badge_wonderhelper":48},{"elemental_marbles":28}],"9":[{"arcane_residue":18},{"diamond_necklace":36},{"witch_hat":54}]},"green":{"2":[{"elemental_marbles":42},{"druid_staff":31},{"ghost_in_a_bottle":54}],"3":[{"badge_blacksmith":27},{"diamond_necklace":27},{"badge_unit":38}],"4":[{"badge_farmers":18},{"witch_hat":54},{"golden_bracelet":36}],"5":[{"badge_carpenters":18},{"badge_wonderhelper":72},{"money_sack":90}],"6":[{"enchanted_tiara":18},{"diamond_necklace":27},{"elemental_marbles":42}],"7":[{"badge_blacksmith":27},{"badge_unit":38},{"druid_staff":31}],"8":[{"badge_brewery":90},{"badge_farmers":18},{"elegant_statue":36}],"9":[{"badge_carpenters":18},{"enchanted_tiara":18},{"arcane_residue":54}]}}},
    "january_xxiii_": {"1":{"all":{"1":[{"witch_hat":2},{"arcane_residue":2}]},"orange":{"2":[{"druid_staff":2},{"badge_unit":6},{"badge_brewery":5}],"3":[{"elegant_statue":1},{"witch_hat":5},{"money_sack":14}],"4":[{"badge_blacksmith":1},{"ghost_in_a_bottle":5},{"badge_farmers":1}],"5":[{"badge_carpenters":2},{"badge_unit":6},{"badge_wonderhelper":10}],"6":[{"badge_brewery":5},{"elegant_statue":1},{"ghost_in_a_bottle":5}],"7":[{"golden_bracelet":3},{"diamond_necklace":2},{"badge_farmers":1}],"8":[{"enchanted_tiara":6},{"druid_staff":2},{"badge_carpenters":2}],"9":[{"elemental_marbles":11},{"badge_blacksmith":1},{"diamond_necklace":2}]},"blue":{"2":[{"elegant_statue":8},{"badge_brewery":2},{"elemental_marbles":6}],"3":[{"badge_blacksmith":12},{"badge_unit":2},{"badge_carpenters":2}],"4":[{"money_sack":3},{"arcane_residue":4},{"witch_hat":3}],"5":[{"badge_farmers":5},{"diamond_necklace":4},{"badge_carpenters":2}],"6":[{"money_sack":3},{"enchanted_tiara":2},{"golden_bracelet":4}],"7":[{"badge_brewery":2},{"badge_wonderhelper":3},{"badge_unit":2}],"8":[{"witch_hat":3},{"druid_staff":9},{"ghost_in_a_bottle":3}],"9":[{"badge_wonderhelper":3},{"diamond_necklace":4},{"badge_brewery":2}]},"green":{"2":[{"badge_wonderhelper":8},{"diamond_necklace":3},{"badge_blacksmith":3}],"3":[{"druid_staff":3},{"witch_hat":6},{"badge_carpenters":4}],"4":[{"badge_unit":8},{"diamond_necklace":3},{"druid_staff":3}],"5":[{"enchanted_tiara":2},{"golden_bracelet":2},{"elemental_marbles":5}],"6":[{"ghost_in_a_bottle":3},{"badge_farmers":4},{"arcane_residue":3}],"7":[{"badge_blacksmith":3},{"enchanted_tiara":2},{"elemental_marbles":5}],"8":[{"golden_bracelet":2},{"ghost_in_a_bottle":3},{"money_sack":10}],"9":[{"elegant_statue":4},{"arcane_residue":3},{"badge_brewery":10}]}},"2":{"all":{"1":[{"money_sack":2},{"druid_staff":2}]},"orange":{"2":[{"badge_unit":38},{"golden_bracelet":5},{"arcane_residue":12}],"3":[{"diamond_necklace":12},{"elemental_marbles":37},{"witch_hat":16}],"4":[{"badge_carpenters":5},{"badge_blacksmith":8},{"badge_wonderhelper":32}],"5":[{"golden_bracelet":5},{"badge_brewery":17},{"ghost_in_a_bottle":16}],"6":[{"money_sack":23},{"enchanted_tiara":11},{"badge_farmers":8}],"7":[{"badge_brewery":17},{"druid_staff":7},{"elegant_statue":5}],"8":[{"ghost_in_a_bottle":16},{"enchanted_tiara":11},{"money_sack":23}],"9":[{"druid_staff":7},{"badge_carpenters":5},{"arcane_residue":12}]},"blue":{"2":[{"ghost_in_a_bottle":10},{"badge_carpenters":13},{"badge_blacksmith":20}],"3":[{"witch_hat":10},{"diamond_necklace":13},{"badge_unit":17}],"4":[{"elemental_marbles":10},{"money_sack":10},{"enchanted_tiara":7}],"5":[{"badge_brewery":17},{"badge_blacksmith":20},{"badge_wonderhelper":18}],"6":[{"witch_hat":10},{"badge_farmers":9},{"elegant_statue":13}],"7":[{"golden_bracelet":13},{"arcane_residue":7},{"elemental_marbles":10}],"8":[{"money_sack":10},{"badge_farmers":9},{"druid_staff":30}],"9":[{"diamond_necklace":13},{"elegant_statue":13},{"arcane_residue":7}]},"green":{"2":[{"witch_hat":10},{"diamond_necklace":10},{"badge_wonderhelper":27}],"3":[{"ghost_in_a_bottle":20},{"elemental_marbles":15},{"money_sack":33}],"4":[{"golden_bracelet":7},{"druid_staff":23},{"badge_blacksmith":10}],"5":[{"badge_unit":28},{"enchanted_tiara":7},{"elegant_statue":7}],"6":[{"badge_brewery":33},{"badge_farmers":7},{"arcane_residue":20}],"7":[{"badge_blacksmith":10},{"elegant_statue":7},{"diamond_necklace":10}],"8":[{"badge_farmers":7},{"elemental_marbles":15},{"badge_carpenters":13}],"9":[{"witch_hat":10},{"golden_bracelet":7},{"enchanted_tiara":7}]}},"3":{"all":{"1":[{"badge_carpenters":2},{"golden_bracelet":2}]},"orange":{"2":[{"witch_hat":22},{"badge_farmers":11},{"badge_blacksmith":11}],"3":[{"badge_wonderhelper":43},{"arcane_residue":65},{"golden_bracelet":29}],"4":[{"money_sack":61},{"badge_unit":52},{"badge_blacksmith":11}],"5":[{"elemental_marbles":50},{"elegant_statue":14},{"witch_hat":22}],"6":[{"money_sack":61},{"badge_farmers":11},{"badge_wonderhelper":43}],"7":[{"badge_brewery":90},{"badge_unit":52},{"druid_staff":18}],"8":[{"badge_carpenters":29},{"ghost_in_a_bottle":87},{"elemental_marbles":50}],"9":[{"enchanted_tiara":58},{"diamond_necklace":32},{"druid_staff":18}]},"blue":{"2":[{"money_sack":27},{"enchanted_tiara":9},{"diamond_necklace":36}],"3":[{"elegant_statue":72},{"badge_blacksmith":54},{"ghost_in_a_bottle":14}],"4":[{"badge_farmers":24},{"elemental_marbles":28},{"badge_brewery":45}],"5":[{"enchanted_tiara":9},{"golden_bracelet":36},{"badge_unit":45}],"6":[{"badge_farmers":24},{"arcane_residue":18},{"badge_blacksmith":54}],"7":[{"druid_staff":82},{"badge_carpenters":36},{"money_sack":27}],"8":[{"ghost_in_a_bottle":14},{"badge_wonderhelper":48},{"elemental_marbles":28}],"9":[{"arcane_residue":18},{"diamond_necklace":36},{"witch_hat":54}]},"green":{"2":[{"elemental_marbles":42},{"druid_staff":31},{"ghost_in_a_bottle":54}],"3":[{"badge_blacksmith":27},{"diamond_necklace":27},{"badge_unit":38}],"4":[{"badge_farmers":18},{"witch_hat":54},{"golden_bracelet":36}],"5":[{"badge_carpenters":18},{"badge_wonderhelper":72},{"money_sack":90}],"6":[{"enchanted_tiara":18},{"diamond_necklace":27},{"elemental_marbles":42}],"7":[{"badge_blacksmith":27},{"badge_unit":38},{"druid_staff":31}],"8":[{"badge_brewery":90},{"badge_farmers":18},{"elegant_statue":36}],"9":[{"badge_carpenters":18},{"enchanted_tiara":18},{"arcane_residue":54}]}}},
    "november_xxii_": {"1":{"all":{"1":[{"diamond_necklace":2},{"badge_brewery":2}]},"orange":{"2":[{"badge_farmers":1},{"ghost_in_a_bottle":5},{"witch_hat":5}],"3":[{"arcane_residue":7},{"badge_wonderhelper":5},{"druid_staff":1}],"4":[{"badge_carpenters":2},{"elegant_statue":1},{"golden_bracelet":3}],"5":[{"druid_staff":1},{"badge_unit":6},{"money_sack":13}],"6":[{"enchanted_tiara":6},{"diamond_necklace":4},{"elemental_marbles":11}],"7":[{"badge_unit":6},{"druid_staff":1},{"badge_wonderhelper":5}],"8":[{"badge_blacksmith":3},{"elegant_statue":1},{"badge_carpenters":2}],"9":[{"badge_brewery":8},{"ghost_in_a_bottle":5},{"badge_farmers":1}]},"blue":{"2":[{"badge_brewery":1},{"golden_bracelet":4},{"arcane_residue":4}],"3":[{"diamond_necklace":7},{"witch_hat":3},{"badge_carpenters":2}],"4":[{"badge_blacksmith":7},{"badge_farmers":5},{"money_sack":3}],"5":[{"ghost_in_a_bottle":3},{"badge_unit":2},{"druid_staff":8}],"6":[{"elemental_marbles":5},{"badge_brewery":1},{"elegant_statue":7}],"7":[{"badge_carpenters":2},{"badge_wonderhelper":2},{"money_sack":3}],"8":[{"witch_hat":3},{"badge_unit":2},{"badge_blacksmith":7}],"9":[{"enchanted_tiara":2},{"badge_brewery":1},{"badge_wonderhelper":2}]},"green":{"2":[{"badge_farmers":4},{"witch_hat":3},{"diamond_necklace":3}],"3":[{"golden_bracelet":2},{"elegant_statue":4},{"arcane_residue":3}],"4":[{"badge_wonderhelper":7},{"badge_blacksmith":4},{"enchanted_tiara":2}],"5":[{"ghost_in_a_bottle":3},{"badge_brewery":4},{"elemental_marbles":4}],"6":[{"badge_unit":7},{"golden_bracelet":2},{"witch_hat":3}],"7":[{"badge_carpenters":4},{"arcane_residue":3},{"enchanted_tiara":2}],"8":[{"money_sack":9},{"druid_staff":6},{"elemental_marbles":4}],"9":[{"badge_blacksmith":4},{"diamond_necklace":3},{"ghost_in_a_bottle":3}]}},"2":{"all":{"1":[{"badge_blacksmith":2},{"badge_carpenters":2}]},"orange":{"2":[{"arcane_residue":12},{"badge_farmers":8},{"badge_brewery":13}],"3":[{"money_sack":22},{"golden_bracelet":5},{"ghost_in_a_bottle":16}],"4":[{"badge_carpenters":5},{"enchanted_tiara":10},{"druid_staff":7}],"5":[{"elemental_marbles":36},{"badge_unit":37},{"money_sack":22}],"6":[{"arcane_residue":12},{"golden_bracelet":5},{"diamond_necklace":12}],"7":[{"badge_blacksmith":10},{"badge_wonderhelper":31},{"enchanted_tiara":10}],"8":[{"elegant_statue":5},{"badge_carpenters":5},{"badge_brewery":13}],"9":[{"ghost_in_a_bottle":16},{"witch_hat":16},{"druid_staff":7}]},"blue":{"2":[{"badge_farmers":8},{"golden_bracelet":12},{"elegant_statue":12}],"3":[{"badge_blacksmith":23},{"badge_carpenters":12},{"witch_hat":9}],"4":[{"badge_farmers":8},{"badge_wonderhelper":16},{"druid_staff":26}],"5":[{"badge_brewery":7},{"money_sack":9},{"arcane_residue":6}],"6":[{"diamond_necklace":12},{"elemental_marbles":9},{"badge_unit":14}],"7":[{"elegant_statue":12},{"money_sack":9},{"enchanted_tiara":6}],"8":[{"badge_blacksmith":23},{"ghost_in_a_bottle":9},{"elemental_marbles":9}],"9":[{"arcane_residue":6},{"diamond_necklace":12},{"witch_hat":9}]},"green":{"2":[{"arcane_residue":17},{"badge_farmers":6},{"diamond_necklace":9}],"3":[{"elegant_statue":6},{"badge_carpenters":12},{"witch_hat":9}],"4":[{"badge_blacksmith":12},{"badge_farmers":6},{"enchanted_tiara":6}],"5":[{"badge_brewery":14},{"money_sack":29},{"elemental_marbles":13}],"6":[{"badge_blacksmith":12},{"golden_bracelet":6},{"badge_unit":24}],"7":[{"elegant_statue":6},{"ghost_in_a_bottle":17},{"druid_staff":20}],"8":[{"diamond_necklace":9},{"witch_hat":9},{"elemental_marbles":13}],"9":[{"golden_bracelet":6},{"enchanted_tiara":6},{"badge_wonderhelper":23}]}},"3":{"all":{"1":[{"arcane_residue":2},{"golden_bracelet":2}]},"orange":{"2":[{"badge_carpenters":28},{"diamond_necklace":31},{"witch_hat":21}],"3":[{"badge_brewery":67},{"badge_wonderhelper":42},{"druid_staff":18}],"4":[{"elemental_marbles":48},{"badge_unit":50},{"money_sack":59}],"5":[{"badge_blacksmith":14},{"ghost_in_a_bottle":84},{"druid_staff":18}],"6":[{"badge_farmers":10},{"badge_unit":50},{"badge_wonderhelper":42}],"7":[{"elegant_statue":14},{"enchanted_tiara":56},{"money_sack":59}],"8":[{"witch_hat":21},{"elemental_marbles":48},{"badge_farmers":10}],"9":[{"golden_bracelet":28},{"badge_blacksmith":14},{"arcane_residue":63}]},"blue":{"2":[{"badge_farmers":21},{"golden_bracelet":31},{"badge_wonderhelper":41}],"3":[{"ghost_in_a_bottle":12},{"enchanted_tiara":8},{"badge_carpenters":31}],"4":[{"money_sack":23},{"diamond_necklace":31},{"elegant_statue":62}],"5":[{"elemental_marbles":24},{"druid_staff":70},{"ghost_in_a_bottle":12}],"6":[{"witch_hat":47},{"badge_unit":38},{"badge_blacksmith":62}],"7":[{"money_sack":23},{"badge_farmers":21},{"arcane_residue":16}],"8":[{"elemental_marbles":24},{"enchanted_tiara":8},{"diamond_necklace":31}],"9":[{"badge_brewery":19},{"badge_blacksmith":62},{"arcane_residue":16}]},"green":{"2":[{"diamond_necklace":23},{"ghost_in_a_bottle":47},{"witch_hat":47}],"3":[{"badge_farmers":16},{"enchanted_tiara":16},{"badge_carpenters":16}],"4":[{"money_sack":78},{"badge_wonderhelper":62},{"badge_blacksmith":31}],"5":[{"badge_farmers":16},{"druid_staff":26},{"elemental_marbles":36}],"6":[{"badge_unit":33},{"elegant_statue":31},{"elemental_marbles":36}],"7":[{"badge_unit":33},{"diamond_necklace":23},{"arcane_residue":47}],"8":[{"druid_staff":26},{"enchanted_tiara":16},{"badge_brewery":37}],"9":[{"golden_bracelet":31},{"badge_blacksmith":31},{"badge_carpenters":16}]}}},
    "october_xxii_": {"1":{"all":{"1":[{"diamond_necklace":2},{"badge_brewery":2}]},"orange":{"2":[{"badge_farmers":1},{"ghost_in_a_bottle":5},{"witch_hat":5}],"3":[{"arcane_residue":7},{"badge_wonderhelper":5},{"druid_staff":1}],"4":[{"badge_carpenters":2},{"elegant_statue":1},{"golden_bracelet":3}],"5":[{"druid_staff":1},{"badge_unit":6},{"money_sack":13}],"6":[{"enchanted_tiara":6},{"diamond_necklace":4},{"elemental_marbles":11}],"7":[{"badge_unit":6},{"druid_staff":1},{"badge_wonderhelper":5}],"8":[{"badge_blacksmith":3},{"elegant_statue":1},{"badge_carpenters":2}],"9":[{"badge_brewery":8},{"ghost_in_a_bottle":5},{"badge_farmers":1}]},"blue":{"2":[{"badge_brewery":1},{"golden_bracelet":4},{"arcane_residue":4}],"3":[{"diamond_necklace":7},{"witch_hat":3},{"badge_carpenters":2}],"4":[{"badge_blacksmith":7},{"badge_farmers":5},{"money_sack":3}],"5":[{"ghost_in_a_bottle":3},{"badge_unit":2},{"druid_staff":8}],"6":[{"elemental_marbles":5},{"badge_brewery":1},{"elegant_statue":7}],"7":[{"badge_carpenters":2},{"badge_wonderhelper":2},{"money_sack":3}],"8":[{"witch_hat":3},{"badge_unit":2},{"badge_blacksmith":7}],"9":[{"enchanted_tiara":2},{"badge_brewery":1},{"badge_wonderhelper":2}]},"green":{"2":[{"badge_farmers":4},{"witch_hat":3},{"diamond_necklace":3}],"3":[{"golden_bracelet":2},{"elegant_statue":4},{"arcane_residue":3}],"4":[{"badge_wonderhelper":7},{"badge_blacksmith":4},{"enchanted_tiara":2}],"5":[{"ghost_in_a_bottle":3},{"badge_brewery":4},{"elemental_marbles":4}],"6":[{"badge_unit":7},{"golden_bracelet":2},{"witch_hat":3}],"7":[{"badge_carpenters":4},{"arcane_residue":3},{"enchanted_tiara":2}],"8":[{"money_sack":9},{"druid_staff":6},{"elemental_marbles":4}],"9":[{"badge_blacksmith":4},{"diamond_necklace":3},{"ghost_in_a_bottle":3}]}},"2":{"all":{"1":[{"badge_blacksmith":2},{"badge_carpenters":2}]},"orange":{"2":[{"arcane_residue":12},{"badge_farmers":8},{"badge_brewery":13}],"3":[{"money_sack":22},{"golden_bracelet":5},{"ghost_in_a_bottle":16}],"4":[{"badge_carpenters":5},{"enchanted_tiara":10},{"druid_staff":7}],"5":[{"elemental_marbles":36},{"badge_unit":37},{"money_sack":22}],"6":[{"arcane_residue":12},{"golden_bracelet":5},{"diamond_necklace":12}],"7":[{"badge_blacksmith":10},{"badge_wonderhelper":31},{"enchanted_tiara":10}],"8":[{"elegant_statue":5},{"badge_carpenters":5},{"badge_brewery":13}],"9":[{"ghost_in_a_bottle":16},{"witch_hat":16},{"druid_staff":7}]},"blue":{"2":[{"badge_farmers":8},{"golden_bracelet":12},{"elegant_statue":12}],"3":[{"badge_blacksmith":23},{"badge_carpenters":12},{"witch_hat":9}],"4":[{"badge_farmers":8},{"badge_wonderhelper":16},{"druid_staff":26}],"5":[{"badge_brewery":7},{"money_sack":9},{"arcane_residue":6}],"6":[{"diamond_necklace":12},{"elemental_marbles":9},{"badge_unit":14}],"7":[{"elegant_statue":12},{"money_sack":9},{"enchanted_tiara":6}],"8":[{"badge_blacksmith":23},{"ghost_in_a_bottle":9},{"elemental_marbles":9}],"9":[{"arcane_residue":6},{"diamond_necklace":12},{"witch_hat":9}]},"green":{"2":[{"arcane_residue":17},{"badge_farmers":6},{"diamond_necklace":9}],"3":[{"elegant_statue":6},{"badge_carpenters":12},{"witch_hat":9}],"4":[{"badge_blacksmith":12},{"badge_farmers":6},{"enchanted_tiara":6}],"5":[{"badge_brewery":14},{"money_sack":29},{"elemental_marbles":13}],"6":[{"badge_blacksmith":12},{"golden_bracelet":6},{"badge_unit":24}],"7":[{"elegant_statue":6},{"ghost_in_a_bottle":17},{"druid_staff":20}],"8":[{"diamond_necklace":9},{"witch_hat":9},{"elemental_marbles":13}],"9":[{"golden_bracelet":6},{"enchanted_tiara":6},{"badge_wonderhelper":23}]}},"3":{"all":{"1":[{"arcane_residue":2},{"golden_bracelet":2}]},"orange":{"2":[{"badge_carpenters":28},{"diamond_necklace":31},{"witch_hat":21}],"3":[{"badge_brewery":67},{"badge_wonderhelper":42},{"druid_staff":18}],"4":[{"elemental_marbles":48},{"badge_unit":50},{"money_sack":59}],"5":[{"badge_blacksmith":14},{"ghost_in_a_bottle":84},{"druid_staff":18}],"6":[{"badge_farmers":10},{"badge_unit":50},{"badge_wonderhelper":42}],"7":[{"elegant_statue":14},{"enchanted_tiara":56},{"money_sack":59}],"8":[{"witch_hat":21},{"elemental_marbles":48},{"badge_farmers":10}],"9":[{"golden_bracelet":28},{"badge_blacksmith":14},{"arcane_residue":63}]},"blue":{"2":[{"badge_farmers":21},{"golden_bracelet":31},{"badge_wonderhelper":41}],"3":[{"ghost_in_a_bottle":12},{"enchanted_tiara":8},{"badge_carpenters":31}],"4":[{"money_sack":23},{"diamond_necklace":31},{"elegant_statue":62}],"5":[{"elemental_marbles":24},{"druid_staff":70},{"ghost_in_a_bottle":12}],"6":[{"witch_hat":47},{"badge_unit":38},{"badge_blacksmith":62}],"7":[{"money_sack":23},{"badge_farmers":21},{"arcane_residue":16}],"8":[{"elemental_marbles":24},{"enchanted_tiara":8},{"diamond_necklace":31}],"9":[{"badge_brewery":19},{"badge_blacksmith":62},{"arcane_residue":16}]},"green":{"2":[{"diamond_necklace":23},{"ghost_in_a_bottle":47},{"witch_hat":47}],"3":[{"badge_farmers":16},{"enchanted_tiara":16},{"badge_carpenters":16}],"4":[{"money_sack":78},{"badge_wonderhelper":62},{"badge_blacksmith":31}],"5":[{"badge_farmers":16},{"druid_staff":26},{"elemental_marbles":36}],"6":[{"badge_unit":33},{"elegant_statue":31},{"elemental_marbles":36}],"7":[{"badge_unit":33},{"diamond_necklace":23},{"arcane_residue":47}],"8":[{"druid_staff":26},{"enchanted_tiara":16},{"badge_brewery":37}],"9":[{"golden_bracelet":31},{"badge_blacksmith":31},{"badge_carpenters":16}]}}},
}
