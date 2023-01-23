var baseTabsSeasons = [
    {"id":"base_left_panel_div", "name":"Info", "img":"various", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"base_left_panel_div", "name":"Quests", "img":"https://i.ibb.co/pJsbHp7/season-dailykeys.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#quests", "onclick":"quests"},
    {"id":"base_left_panel_div", "name":"Season Pass", "img":"https://i.ibb.co/87MNrBB/season-pass.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#pass", "onclick":"pass"},
]

var additionalTabsSeasons = {
    "december_xxii_": [

    ],
}

var seasonsBanners = {
    "december_xxii_" : "https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png",
}

var seasonInfoIcons = {
    "december_xxii_" : {"img":"https://i.ibb.co/L8gkDtv/season-dreams-info.png", "img_width": "28", "img_style": "margin-left: 0px; margin-right: 10px; position: relative;"},
}

var seasonXp = {
    "december_xxii_" : {"img":"https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png"}
}

var seasonsVideos = {
    "december_xxii_": "",
}

var seasonQuestsRewards = {
    "december_xxii_": {"daily" : 5, "weekly" : 70},
}

var seasonsIntro = `Seasons are a type of long-term events containing Daily and Weekly quests, many interesting rewards and a unique Season Pass.
<br><br>By completing quests you receive experience points that help you unlock rewards in the reward lane. You can see all the available rewards
during this season in the <b>Season Pass</b> tab and check all the possible quests you may receive in the <b>Quests</b> tab.
<br><br><img src="https://media.innogamescdn.com/com_ONYX_ZZ/announcements/SeasonOfDreams/progression_seasonofdreams.png" style="width: 40%;">
<br><br>It is important to keep completing quests during the season regularly. If you miss too many quests, you won't be able to collect
all rewards from the rewards lane. You can use my calculator in the <b>Season Pass</b> tab which shows you how many quests you may miss in order
to still collect the rest of the reward lane!`;

var subscribeText = `You can find more video content by <a href="https://www.youtube.com/channel/UCRzBOCps1xnc1h8xhNK2hzg?sub_confirmation=1 " class="card-title text-center text-link"><b>subscribing to my channel</b></a>.`;

var seasonDailyChests = {
    "december_xxii_": [
        {
          "type": "item",
          "subType": "INS_KP_AW_20",
          "amount": "1",
          "percentage": 5
        },
        {
          "type": "item",
          "subType": "INS_RF_CN_20",
          "amount": "1",
          "percentage": 10
        },
        {
          "type": "item",
          "subType": "INS_KP_AW_10",
          "amount": "1",
          "percentage": 15
        },
        {
          "type": "flexible_reward",
          "subType": "frog_default1",
          "amount": "5",
          "percentage": 15
        },
        {
          "type": "item",
          "subType": "INS_RF_SPL_10",
          "amount": "1",
          "percentage": 15
        },
        {
          "type": "item",
          "subType": "INS_TR_AMT_15",
          "amount": "1",
          "percentage": 20
        },
        {
          "type": "item",
          "subType": "INS_TR_AMT_10",
          "amount": "1",
          "percentage": 20
        }
      ],
}