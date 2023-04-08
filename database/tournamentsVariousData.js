var baseTabsTournaments = [
    {"id":"info", "name":"Info", "img":"https://i.ibb.co/k42MQs2/tournament-icon.png", "img_width":"28", "img_style":"margin-left: 0px; margin-bottom: 5px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"units", "name":"Units", "img":"https://i.ibb.co/pvw2GBt/units.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#units", "onclick":"units"},
    {"id":"boosts", "name":"Boosts", "img":"https://i.ibb.co/XLbyd6d/boosts.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#boosts", "onclick":"boosts"},
]

var additionalTabsTournaments = {
    "tournament_marble": [

    ],
}

var tournamentsBanners = [
    {"all" : "https://oxcz.innogamescdn.com/frontend//assets/bg_tournament-e8c55ca32ebdbc63d559591433475577.png"},
]

var initTournamentDate = {  //MARBLE
    "live": {
        "start_date": "August 30th 2022",
        "end_date": "September 3rd 2022"
    },
    "beta": {
        "start_date": "August 30th 2022",
        "end_date": "September 3rd 2022"
    }
}

var tournamentsOrderFromInit = [
    "tournament_marble","tournament_steel","tournament_planks",
    "tournament_crystal","tournament_scrolls","tournament_silk",
    "tournament_elixir","tournament_magicdust","tournament_gems"
]

var tournamentIcons = {
    "tournament_marble":"https://i.ibb.co/X22kmgq/tournament-marble.png",
    "tournament_steel":"https://i.ibb.co/SxtBFGp/tournament-steel.png",
    "tournament_planks":"https://i.ibb.co/4YHLJCP/tournament-planks.png",
    "tournament_crystal":"https://i.ibb.co/bmhPsmv/tournament-crystal.png",
    "tournament_scrolls":"https://i.ibb.co/QjwNc3K/tournament-scrolls.png",
    "tournament_silk":"https://i.ibb.co/F8V0mqw/tournament-silk.png",
    "tournament_elixir":"https://i.ibb.co/ynPhwGz/tournament-elixir.png",
    "tournament_magicdust":"https://i.ibb.co/jg7Y1NB/tournament-magicdust.png",
    "tournament_gems":"https://i.ibb.co/BCGFTbR/tournament-gems.png",
}

var infoText = `This page will help you to learn which units to train and which boosts to prepare so that
you get the most out of the <b>_</b> and help your fellowship win during its following round!<br><br>You can head to the respective <b>Units</b> and
<b>Boosts</b> tabs to learn more details about this specific tournament.<br><br>The schedule of the following round can be seen below
as well as the general information about Tournaments, that will provide you some of the master information that will be helpful
for all tournaments in the game!`;

var tournamentDurationDays = 4;
var tournamentDurationHours = 99;