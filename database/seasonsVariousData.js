var baseTabsSeasons = [
    {"id":"base_left_panel_div", "name":"Info", "img":"various", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Quests", "img":"https://i.ibb.co/pJsbHp7/season-dailykeys.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#quests", "onclick":"quests"},
    {"id":"base_left_panel_div", "name":"Season Pass", "img":"https://i.ibb.co/87MNrBB/season-pass.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#pass", "onclick":"pass"},
    {"id":"base_left_panel_div", "name":"Blessings", "img":"various_blessing", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#blessings", "onclick":"blessings"},
]

var additionalTabsSeasons = {
    "december_xxii_": [

    ],
}

var seasonsBanners = {
    "december_xxii_" : "https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png",
    "april_xxiii_": "https://i.ibb.co/Hdm0FzN/season-joy-banner.png",
}

var seasonInfoIcons = {
    "december_xxii_" : {"img":"https://i.ibb.co/L8gkDtv/season-dreams-info.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "april_xxiii_" : {"img":"https://i.ibb.co/nM43ZwY/april-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
}

var seasonBlessingIcons = {
    "december_xxii_" : "https://i.ibb.co/Xxd9vcY/season-dreams-blessing.png",
    "april_xxiii_" : "https://i.ibb.co/ZfjS6dm/season-joy-blessing.png",
}

var seasonXp = {
    "december_xxii_" : {"img":"https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png"},
    "april_xxiii_" : {"img":"https://i.ibb.co/56xyPT6/april-xxiii-currency.png"},
}

var seasonProgress = {
    "december_xxii_" : {"img":"https://media.innogamescdn.com/com_ONYX_ZZ/announcements/SeasonOfDreams/progression_seasonofdreams.png", "img_width": "40"},
    "april_xxiii_" : {"img":"https://media.innogamescdn.com/com_ONYX_ZZ/progression_seasonofjoy.png", "img_width": "40"},
}

var seasonsVideos = {
    "december_xxii_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "april_xxiii_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
}

var seasonQuestsRewards = {
    "april_xxiii_": {"daily" : 5, "weekly" : 70},
    "december_xxii_": {"daily" : 5, "weekly" : 70},
}

var seasonsQuestsBannerIcons = {
    "april_xxiii_":"https://i.ibb.co/sF670CC/season-joy-quests-and-rewards.png",
    "december_xxii_":"https://i.ibb.co/tXpRkmP/season-quests-and-rewards.png",
}

var seasonsIntro = `Seasons are a type of long-term events containing Daily and Weekly quests, many interesting rewards and a unique Season Pass.
<br><br>By completing quests you receive experience points that help you unlock rewards in the reward lane. You can see all the available rewards
during this season in the <b>Season Pass</b> tab and check all the possible quests you may receive in the <b>Quests</b> tab.
<br><br><img src="{img}" style="width: {img_width}%;">
<br><br>It is important to keep completing quests during the season regularly. If you miss too many quests, you won't be able to collect
all rewards from the rewards lane. You can use my calculator in the <b>Season Pass</b> tab which shows you how many quests you may miss in order
to still collect the rest of the reward lane!`;

var subscribeText = `You can find more video content by <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="card-title text-center text-link"><b>subscribing to my channel</b></a>.`;

var blessingChestsImages = {
    "free":"https://i.ibb.co/nRsp7BC/season-blessing-chest-Free.png",
    "premium":"https://i.ibb.co/3CK8q7J/season-blessing-chest-Premium.png",
}

var blessingFreeChests = {
    "april_xxiii_": [
        "reward_pool_event_chest_c_season_joy","reward_pool_event_chest_f_season_joy","reward_pool_event_chest_i_season_joy"
    ]
}