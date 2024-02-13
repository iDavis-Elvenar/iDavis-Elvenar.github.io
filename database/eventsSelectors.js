var allEvents = {
    "all_buildings" : { //NAME,ID,SELECTED,DISABLED == HIDDEN
        "2024" : [
            ["Blessing of the Phoenix","theater_easter_xxiv",false,false],
            ["Tournament of Magic","scroll_sorcerers_xxiv_",true,false],
        ],
        "2023" : [
            ["Winter Magic","shuffle_postal_xxiii_",false,false],
            ["Whispers of the Soul","tile_mistyforest_xxiii_",false,false],
            ["A Gateway into the Past","merge_dwarvengame_xxiii_",false,false],
            ["Autumn Zodiac","theater_zodiac_xxiii_",false,false],
            ["Aqua Splendor","scroll_aquatic_xxiii_",false,false],
            ["Floral Awakening","shuffle_garden_xxiii_",false,false],
            ["Mama Juul's Fusion Feast","may_xxiii_",false,false],
            ["Realm of the Phoenix","easter_xxiii_",false,false],
            ["The Great Excavation","february_xxiii_",false,false],
            ["The Secrets of Alchemy","january_xxiii_",false,false],
        ],
        "2022" : [
            ["Winter Magic","december_xxii_",false,false],
            ["Mischievous Therapy","october_xxii_",false,false],
            ["Autumn Zodiac","autumn_xxii_",false,false],
            ["A Gateway into the Past","august_xxii_",false,false],
            ["Lucky Little Fin","july_xxii_",false,false],
            ["Naturally Amazing","may_xxii_",false,false],
            ["Dawn of the Phoenix","easter_xxii_",false,false],
            ["The Buried City","february_xxii_",false,false],
            ["Forbidden Ruins","january_xxii_",false,false],
        ],
        "2021" : [
            ["Winter Magic","december_xxi_",false,false],
            ["The Misty Forest","october_xxi_",false,false],
            ["Autumn Zodiac","september_xxi_",false,false],
            ["Elvarian Games","july_xxi_",false,false],
            ["Sorcerers' Homecoming","june_xxi_",false,false],
            ["Queen Fairy's Garden","may_xxi_",false,false],
            ["Rise of the Phoenix Cult","march_xxi_",false,false],
            ["Elvarian Carnival","february_xxi_",false,false]
        ],
        "2020" : [
            ["Winter Magic - The Snow Owl","december_xx_",false,false],
            ["The Mistery of the Misty Forest","october_xx_",false,false],
            ["Autumn Zodiac","september_xx_",false,false],
            ["Sorcerers' Pilgrimage","july_xx_",false,false],
            ["The Air Traders' Voyage","june_xx_",false,false],
            ["May Celebrations","may_xx_",false,false],
            ["Gathering of the Phoenix Cults","easter_xx_",false,false],
            ["Elvarian Carnival","car_xx_",false,false]
        ],
        "2019" : [
            ["Winter Magic","winter_xix_",false,false],
            ["Dr. Freakenspleen","halloween_xix",false,false],
            ["Autumn Zodiac","autumn_xix_",false,false],
            ["Summer Mermaids","mm_xix_",false,false],
            ["The Queen of the Seas","queenoffish",false,false],
            ["Summer Solstice","summer_xix_",false,false]
        ]
    },
    "all_events" : {
        "2024" : [
            ["Blessing of the Phoenix","theater_easter_xxiv_",false,false],
            ["Tournament of Magic","scroll_sorcerers_xxiv_",true,false],
        ],
        "2023" : [
            ["Winter Magic","shuffle_postal_xxiii_",false,false],
            ["Whispers of the Soul","tile_mistyforest_xxiii_",false,false],
            ["A Gateway into the Past","merge_dwarvengame_xxiii_",false,false],
            ["Autumn Zodiac","theater_zodiac_xxiii_",false,false],
            ["Aqua Splendor","scroll_aquatic_xxiii_",false,false],
            ["Floral Awakening","shuffle_garden_xxiii_",false,false],
            ["Mama Juul's Fusion Feast","may_xxiii_",false,false],
            ["Realm of the Phoenix","easter_xxiii_",false,false],
            ["The Great Excavation","february_xxiii_",false,false],
            ["The Secrets of Alchemy","january_xxiii_",false,false],
        ],
        "2022" : [
            ["Winter Magic","december_xxii_",false,false],
            ["Mischievous Therapy","october_xxii_",false,false],
            ["Autumn Zodiac","autumn_xxii_",false,false],
            ["A Gateway into the Past","august_xxii_",false,false],
            ["Lucky Little Fin","july_xxii_",false,false],
            ["Naturally Amazing","may_xxii_",false,false],
            ["Dawn of the Phoenix","easter_xxii_",false,false],
            ["The Buried City","february_xxii_",false,false],
            ["Forbidden Ruins","january_xxii_",false,false],
        ],
        "2021" : [
            ["Winter Magic","december_xxi_",false,false],
            ["The Misty Forest","october_xxi_",false,false],
            ["Autumn Zodiac","september_xxi_",false,false],
            ["Elvarian Games","july_xxi_",false,false],
            ["Sorcerers' Homecoming","june_xxi_",false,false],
            ["Queen Fairy's Garden","may_xxi_",false,false],
            ["Rise of the Phoenix Cult","march_xxi_",false,false],
            ["Elvarian Carnival","february_xxi_",false,false]
        ]
    }
}

var allFas = { //NAME,ID,SELECTED,DISABLED == HIDDEN
    "2024" : [
        ["Fellowship Adventures - January 2024", "january_xxiv_",true,false],
    ],
    "2023" : [
        ["Fellowship Adventures - November 2023", "november_xxiii_",false,false],
        ["Fellowship Adventures - August 2023", "august_xxiii_",false,false],
        ["Fellowship Adventures - June 2023", "june_xxiii_",false,false],
        ["Fellowship Adventures - March 2023", "march_xxiii_",false,false],
        ["Fellowship Adventures - January 2023", "january_xxiii_",false,false],
    ],
    "2022" : [
        ["Fellowship Adventures - November 2022", "november_xxii_",false,false],
        ["Fellowship Adventures - October 2022", "october_xxii_",false,false],
    ]
}

var allSeasons = { //NAME,ID,SELECTED,DISABLED == HIDDEN
    "2024" : [
        ["Season of Dreams", "january_xxiv_",true,false],
    ],
    "2023" : [
        ["Season of Secrets", "october_xxiii_",false,false],
        ["Season of Triumph", "july_xxiii_",false,false],
        ["Season of Joy", "april_xxiii_",false,false],
        ["Season of Dreams", "december_xxii_",false,false],
    ]
}

var allTournaments = [ //NAME,ID,SELECTED,DISABLED == HIDDEN
    ["Marble Tournament", "tournament_marble"],
    ["Steel Tournament", "tournament_steel"],
    ["Planks Tournament", "tournament_planks"],
    ["Crystal Tournament", "tournament_crystal"],
    ["Scrolls Tournament", "tournament_scrolls"],
    ["Silk Tournament", "tournament_silk"],
    ["Elixir Tournament", "tournament_elixir"],
    ["Magic Dust Tournament", "tournament_magicdust"],
    ["Gems Tournament", "tournament_gems"],
]
