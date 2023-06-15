var baseTabsGuestRaces = [
    {"id":"base_left_panel_div", "name":"Intro", "img":"various", "img_width":"25", "img_style":"margin-left: 0px; margin-right: 13px; position: relative;", "href":"#intro", "onclick":"intro", "file":"intro.html"},
    {"id":"quests_left_panel_div", "name":"Quests", "img":"../images/general/event_guide.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#quests", "onclick":"quests"},
    {"id":"research_left_panel_div", "name":"Research", "img":"../images/general/research.png", "img_width":"29", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#research", "onclick":"research"},
] 

var additionalTabsGuestRaces = {
    "ch21": [
        //{"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        //{"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    /*"ch20": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],*/
    /*"ch19": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch18": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch17": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch16": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch15": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch14": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch13": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch12": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch11": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch10": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch9": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch8": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch7": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],
    "ch6": [
        {"id":"settlement", "name":"Settlement", "img":"various_settlement", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#settlement", "file":"settlement.html"},
        {"id":"layouts", "name":"Layouts", "img":"https://i.ibb.co/z8pjTPh/layouts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#layouts", "file":"layouts.html"},
        {"id":"wonders", "name":"Wonders", "img":"https://i.ibb.co/wrhMdKZ/wonders.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#wonders", "file":"wonders.html"},
    ],*/
}

var grBanners = {
    "ch6": "https://i.ibb.co/SPKXGVT/ch6-banner.png",
    "ch7": "https://i.ibb.co/Wcv4xNx/ch7-banner.png",
    "ch8": "https://i.ibb.co/tbd9662/ch8-banner.png",
    "ch9": "https://i.ibb.co/2jK1750/ch9-banner.png",
    "ch10": "https://i.ibb.co/C7jnk5N/ch10-banner.png",
    "ch11": "https://i.ibb.co/Q8h6zds/ch11-banner.png",
    "ch12": "https://i.ibb.co/x5qxLF8/ch12-banner.png",
    "ch13": "https://i.ibb.co/XS6Frgx/ch13-banner.png",
    "ch14": "https://i.ibb.co/qgkYDVZ/ch14-banner.png",
    "ch15": "https://i.ibb.co/YT9zYm7/ch15-banner.png",
    "ch16": "https://i.ibb.co/2FPhJys/ch16-banner.png",
    "ch17": "https://i.ibb.co/vcKTdD2/ch17-banner.png",
    "ch18": "https://i.ibb.co/s5BLz8N/ch18-banner.png",
    "ch19": "https://i.ibb.co/NTmBDJ6/ch19-banner.png",
    "ch20": "https://i.ibb.co/kxJQxbn/ch20-banner.png",
    "ch21": "https://i.ibb.co/kxJQxbn/ch20-banner.png",
}

var settlementIcons = {
    "ch6": "https://i.ibb.co/xMfmqRs/settlement-ch6.png",
    "ch7": "https://i.ibb.co/5K0h7z5/settlement-ch7.png",
    "ch8": "https://i.ibb.co/hgggRHt/settlement-ch8.png",
    "ch9": "https://i.ibb.co/wRs3hDj/settlement-ch9.png",
    "ch10": "https://i.ibb.co/Rckn3pQ/settlement-ch10.png",
    "ch11": "https://i.ibb.co/wK9s4Fy/settlement-ch11.png",
    "ch12": "https://i.ibb.co/ZXjp3G7/settlement-ch12.png",
    "ch13": "https://i.ibb.co/XSb6jnp/settlement-ch13.png",
    "ch14": "https://i.ibb.co/hHhbNSK/settlement-ch14.png",
    "ch15": "https://i.ibb.co/dJy9GgX/settlement-ch15.png",
    "ch16": "https://i.ibb.co/qDMRGxk/settlement-ch16.png",
    "ch17": "https://i.ibb.co/HTSpcsX/settlement-ch17.png",
    "ch18": "https://i.ibb.co/KDgW7Fv/settlement-ch18.png",
    "ch19": "https://i.ibb.co/DVrzRZz/settlement-ch19.png",
    "ch20": "https://i.ibb.co/k3WHrsh/settlement-ch20.png",
    "ch21": "https://i.ibb.co/k3WHrsh/settlement-ch20.png",
}