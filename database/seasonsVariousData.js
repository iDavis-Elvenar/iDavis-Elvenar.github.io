var allSeasons = {
    "2022" : [ //NAME,ID,SELECTED,DISABLED == HIDDEN
        ["Season of Dreams", "month_xxii_",true,false],
    ]
}

var baseTabsSeasons = [
    {"id":"base_left_panel_div", "name":"Season", "img":"https://i.ibb.co/prd3mhW/info-fa-icon.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Quests", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#quests", "onclick":"quests"},
    {"id":"base_left_panel_div", "name":"Pass", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#pass", "onclick":"pass"},
]

var additionalTabsSeasons = {
    "month_xxii_": [

    ],
}

var seasonsBanners = [
    {"all" : "https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png"},
]

var dates = {
    "month_xxii_": {
        "live": {
            "start_date": "December 1st 2022",
            "end_date": "December 31st 2022"
        },
        "beta": {
            "start_date": "??? ?th 2022",
            "end_date": "??? ?th 2022"
        }
    },
}