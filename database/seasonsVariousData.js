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
    "july_xxiii_": "https://i.ibb.co/kxdBh0Y/season-triumph-banner.png",
    "october_xxiii_": "https://i.ibb.co/xgc6Bpq/season-secrets-banner.png",
    "january_xxiv_": "https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png",
    "april_xxiv_": "https://i.ibb.co/kxdBh0Y/season-triumph-banner.png",
    "july_xxiv_": "https://i.ibb.co/Hdm0FzN/season-joy-banner.png",
    "october_xxiv_": "https://i.ibb.co/xgc6Bpq/season-secrets-banner.png",
    "january_xxv_": "https://i.ibb.co/XDx9ZMt/Season-Season-of-Dreams-Banner.png",
    "april_xxv_": "https://i.ibb.co/kxdBh0Y/season-triumph-banner.png",
    "july_xxv_": "https://i.ibb.co/Hdm0FzN/season-joy-banner.png",
}

var seasonInfoIcons = {
    "december_xxii_" : {"img":"https://i.ibb.co/L8gkDtv/season-dreams-info.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "april_xxiii_" : {"img":"https://i.ibb.co/nM43ZwY/april-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "july_xxiii_" : {"img":"https://i.ibb.co/wzB4kvF/july-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "october_xxiii_" : {"img":"https://i.ibb.co/QX3mjmH/october-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "january_xxiv_" : {"img":"https://i.ibb.co/L8gkDtv/season-dreams-info.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "april_xxiv_": {"img":"https://i.ibb.co/wzB4kvF/july-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "july_xxiv_" : {"img":"https://i.ibb.co/nM43ZwY/april-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "october_xxiv_" : {"img":"https://i.ibb.co/QX3mjmH/october-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "january_xxv_" : {"img":"https://i.ibb.co/L8gkDtv/season-dreams-info.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "april_xxv_": {"img":"https://i.ibb.co/wzB4kvF/july-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "july_xxv_" : {"img":"https://i.ibb.co/nM43ZwY/april-xxiii.png", "img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
}

var seasonBlessingIcons = {
    "december_xxii_" : "https://i.ibb.co/Xxd9vcY/season-dreams-blessing.png",
    "april_xxiii_" : "https://i.ibb.co/ZfjS6dm/season-joy-blessing.png",
    "july_xxiii_" : "https://i.ibb.co/pdJVw6q/july-xxiii-blessing.png",
    "october_xxiii_" : "https://i.ibb.co/ynvZrPx/october-xxiii-blessing.png",
    "january_xxiv_" : "https://i.ibb.co/Xxd9vcY/season-dreams-blessing.png",
    "april_xxiv_": "https://i.ibb.co/pdJVw6q/july-xxiii-blessing.png",
    "july_xxiv_" : "https://i.ibb.co/ZfjS6dm/season-joy-blessing.png",
    "october_xxiv_" : "https://i.ibb.co/ynvZrPx/october-xxiii-blessing.png",
    "january_xxv_" : "https://i.ibb.co/Xxd9vcY/season-dreams-blessing.png",
    "april_xxv_": "https://i.ibb.co/pdJVw6q/july-xxiii-blessing.png",
    "july_xxv_" : "https://i.ibb.co/ZfjS6dm/season-joy-blessing.png",
}

var seasonXp = {
    "december_xxii_" : {"img":"https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png"},
    "april_xxiii_" : {"img":"https://i.ibb.co/56xyPT6/april-xxiii-currency.png"},
    "july_xxiii_" : {"img":"https://i.ibb.co/wg9tcg1/july-xxiii-currency.png"},
    "october_xxiii_" : {"img":"https://i.ibb.co/N6msX1X/october-xxiii-currency.png"},
    "january_xxiv_" : {"img":"https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png"},
    "april_xxiv_": {"img":"https://i.ibb.co/wg9tcg1/july-xxiii-currency.png"},
    "july_xxiv_" : {"img":"https://i.ibb.co/56xyPT6/april-xxiii-currency.png"},
    "october_xxiv_" : {"img":"https://i.ibb.co/N6msX1X/october-xxiii-currency.png"},
    "january_xxv_" : {"img":"https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png"},
    "april_xxv_": {"img":"https://i.ibb.co/wg9tcg1/july-xxiii-currency.png"},
    "july_xxv_" : {"img":"https://i.ibb.co/56xyPT6/april-xxiii-currency.png"},
}

var seasonProgress = {
    "december_xxii_" : {"img":"https://i.ibb.co/GQyKdRP/season-dreams-progress.png", "img_width": "40"},
    "april_xxiii_" : {"img":"https://i.ibb.co/sg06YYF/season-joy-progress.png", "img_width": "40"},
    "july_xxiii_" : {"img":"https://i.ibb.co/DpyZj8K/season-triumph-progress.png", "img_width": "40"},
    "october_xxiii_" : {"img":"https://i.ibb.co/DpyZj8K/season-triumph-progress.png", "img_width": "40"},
    "january_xxiv_" : {"img":"https://i.ibb.co/GQyKdRP/season-dreams-progress.png", "img_width": "40"},
    "april_xxiv_": {"img":"https://i.ibb.co/DpyZj8K/season-triumph-progress.png", "img_width": "40"},
    "july_xxiv_" : {"img":"https://i.ibb.co/sg06YYF/season-joy-progress.png", "img_width": "40"},
    "october_xxiv_" : {"img":"https://i.ibb.co/DpyZj8K/season-triumph-progress.png", "img_width": "40"},
    "january_xxv_" : {"img":"https://i.ibb.co/GQyKdRP/season-dreams-progress.png", "img_width": "40"},
    "april_xxv_": {"img":"https://i.ibb.co/DpyZj8K/season-triumph-progress.png", "img_width": "40"},
    "july_xxv_" : {"img":"https://i.ibb.co/sg06YYF/season-joy-progress.png", "img_width": "40"},
}

var seasonsVideos = {
    "december_xxii_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "april_xxiii_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "july_xxiii_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "october_xxiii_": "https://www.youtube.com/embed/BMuyNcwpymE?feature=share",
    "january_xxiv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "april_xxiv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "july_xxiv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "october_xxiv_": "https://www.youtube.com/embed/BMuyNcwpymE?feature=share",
    "january_xxv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "april_xxv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
    "july_xxv_": "https://www.youtube.com/embed/1Zg8WAVg4gA",
}

var seasonQuestsRewards = {
    "december_xxii_": {"daily" : 5, "weekly" : 70},
    "april_xxiii_": {"daily" : 5, "weekly" : 70},
    "july_xxiii_": {"daily" : 5, "weekly" : 70},
    "october_xxiii_": {"daily" : 5, "weekly" : 70},
    "january_xxiv_": {"daily" : 5, "weekly" : 70},
    "april_xxiv_": {"daily" : 5, "weekly" : 70},
    "july_xxiv_": {"daily" : 5, "weekly" : 70},
    "october_xxiv_": {"daily" : 5, "weekly" : 70},
    "january_xxv_": {"daily" : 5, "weekly" : 70},
    "april_xxv_": {"daily" : 5, "weekly" : 70},
    "july_xxv_": {"daily" : 5, "weekly" : 70},
}

var seasonsQuestsBannerIcons = {
    "december_xxii_":"https://i.ibb.co/tXpRkmP/season-quests-and-rewards.png",
    "april_xxiii_":"https://i.ibb.co/sF670CC/season-joy-quests-and-rewards.png",
    "july_xxiii_": "https://i.ibb.co/ZWYZBKK/season-triumph-quests-banner.png",
    "october_xxiii_": "https://i.ibb.co/Y0cmsWN/october-xxiii-quests-banner.png",
    "january_xxiv_":"https://i.ibb.co/tXpRkmP/season-quests-and-rewards.png",
    "april_xxiv_": "https://i.ibb.co/ZWYZBKK/season-triumph-quests-banner.png",
    "july_xxiv_":"https://i.ibb.co/sF670CC/season-joy-quests-and-rewards.png",
    "october_xxiv_": "https://i.ibb.co/Y0cmsWN/october-xxiii-quests-banner.png",
    "january_xxv_":"https://i.ibb.co/tXpRkmP/season-quests-and-rewards.png",
    "april_xxv_": "https://i.ibb.co/ZWYZBKK/season-triumph-quests-banner.png",
    "july_xxv_":"https://i.ibb.co/sF670CC/season-joy-quests-and-rewards.png",
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
    "july_xxv_": [
        "reward_pool_event_chest_c_season_joy","reward_pool_event_chest_f_season_joy","reward_pool_event_chest_i_season_joy"
    ],
    "april_xxv_": [
        "reward_pool_event_chest_c_season_triumph","reward_pool_event_chest_f_season_triumph","reward_pool_event_chest_i_season_triumph"
    ],
    "january_xxv_": [
        "reward_pool_event_chest_c_season_dreams","reward_pool_event_chest_f_season_dreams","reward_pool_event_chest_i_season_dreams"
    ],
    "october_xxiv_": [
        "reward_pool_event_chest_c_season_secrets","reward_pool_event_chest_f_season_secrets","reward_pool_event_chest_i_season_secrets"
    ],
    "july_xxiv_": [
        "reward_pool_event_chest_c_season_joy","reward_pool_event_chest_f_season_joy","reward_pool_event_chest_i_season_joy"
    ],
    "april_xxiv_": [
        "reward_pool_event_chest_c_season_triumph","reward_pool_event_chest_f_season_triumph","reward_pool_event_chest_i_season_triumph"
    ],
    "january_xxiv_": [
        "reward_pool_event_chest_c_season_dreams","reward_pool_event_chest_f_season_dreams","reward_pool_event_chest_i_season_dreams"
    ],
    "october_xxiii_": [
        "reward_pool_event_chest_c_season_secrets","reward_pool_event_chest_f_season_secrets","reward_pool_event_chest_i_season_secrets"
    ],
    "july_xxiii_": [
        "reward_pool_event_chest_c_season_triumph","reward_pool_event_chest_f_season_triumph","reward_pool_event_chest_i_season_triumph"
    ],
    "april_xxiii_": [
        "reward_pool_event_chest_c_season_joy","reward_pool_event_chest_f_season_joy","reward_pool_event_chest_i_season_joy"
    ],
    "december_xxii_": [
        "reward_pool_event_chest_c_season_dreams","reward_pool_event_chest_f_season_dreams","reward_pool_event_chest_i_season_dreams"
    ],
}