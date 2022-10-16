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


var baseTabsTournaments = [
    {"id":"info", "name":"Info", "img":"https://i.ibb.co/prd3mhW/info-fa-icon.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"units", "name":"Units", "img":"https://i.ibb.co/7RDLWV6/fellowship-adventures-item1.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#units", "onclick":"units"},
]

var additionalTabsTournaments = {
    "tournament_marble": [

    ],
}

var tournamentsBanners = [
    {"all" : "https://i.ibb.co/fMX3t5B/fellowship-adventures-banner.png"},
]

var initTournamentDate = {  //ELIXIR
    "live": {
        "start_date": "October 11th 2022",
        "end_date": "October 15th 2022"
    },
    "beta": {
        "start_date": "October 11th 2022",
        "end_date": "October 15th 2022"
    }
}

var tournamentsOrderFromInit = [
    "elixir","magicdust","gems","marble","steel","planks","crystal","scrolls","silk"
]

var tournamentDurationDays = 4;