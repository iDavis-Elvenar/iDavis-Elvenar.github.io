var prioritiesNonProduction = ["providedCulture", "provided_population"];

var prioritiesProduction = ["money", "supplies", "marble", "steel", "planks", "crystal", "scrolls", "silk", "elixir", "magic_dust", "gems",
    "boosted_plus_0_quality_1", "boosted_plus_0_quality_2", "boosted_plus_0_quality_3", "boosted_plus_1_quality_1", "boosted_plus_2_quality_1", "boosted_plus_1_quality_2", "boosted_plus_2_quality_2", "boosted_plus_1_quality_3", "boosted_plus_2_quality_3", "orcs",
    "mana", "seeds", "sentientmarble", "sentientsteel", "sentientplanks", "sentientcrystal", "sentientscrolls", "sentientsilk", "sentientelixir", "sentientmagic_dust", "sentientgems", "boosted_sentient_plus_0_quality_1", "boosted_sentient_plus_1_quality_1", "boosted_sentient_plus_2_quality_1",
    "boosted_sentient_plus_0_quality_2", "boosted_sentient_plus_1_quality_2", "boosted_sentient_plus_2_quality_2",
    "boosted_sentient_plus_0_quality_3", "boosted_sentient_plus_1_quality_3", "boosted_sentient_plus_2_quality_3",
    "unurium", "unit_1", "unit_2", "unit_3", "unit_4", "unit_5", "tg_lm", "tg_lr", "tg_ma", "tg_hm", "tg_hr",
    "mc_lm", "mc_lr", "mc_ma", "mc_hm", "mc_hr", "knowledge_points", "broken_shards",
    "relic_marble", "relic_steel", "relic_planks", "relic_crystal", "relic_scrolls", "relic_silk", "relic_elixir",
    "relic_magic_dust", "relic_gems", "boosted_relic_plus_0_quality_2", "boosted_relic_plus_1_quality_2",
    "boosted_relic_plus_2_quality_2",
    "spell_good_production_boost_1",
    "craft_spell_fragments", "spell_combining_catalyst_1",
    "ins_rf_cn_5", "ins_rf_cn_10", "ins_rf_cn_15", "ins_rf_cn_20",
    "ins_rf_cn_25", "ins_rf_cn_33", "ins_rf_cn_50", "ins_rf_cn_100", "ins_rf_spl_5", "ins_rf_spl_10", "ins_rf_spl_15",
    "ins_rf_spl_20", "ins_rf_spl_25", "ins_rf_spl_33", "ins_rf_spl_50", "ins_rf_spl_100", "ins_rf_grr_5",
    "ins_rf_grr_10", "ins_rf_grr_15", "ins_rf_grr_20", "ins_rf_grr_25", "ins_rf_grr_33", "ins_rf_grr_50", "ins_rf_grr_100",
    "INS_TR_AMT_1", "INS_TR_AMT_3", "INS_TR_AMT_7", "INS_TR_AMT_10", "INS_TR_AMT_15", 
    "INS_TR_AMT_20", "INS_TR_AMT_30", "INS_TR_AMT_45", "INS_TR_AMT_60", "INS_TR_AMT_120", 
    "INS_TR_AMT_300", "INS_TR_AMT_480", "INS_TR_AMT_840", "INS_TR_AMT_1200", "INS_TR_AMT_2400", 
    "INS_KP_AW_1", "INS_KP_AW_3", "INS_KP_AW_5", "INS_KP_AW_7", "INS_KP_AW_10", "INS_KP_AW_15", "INS_KP_AW_20",
    "INS_KP_AW_30", "ins_rs_1", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "" ];

var numberOfChapters = 19;

var chapters = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII',
    19: 'XIX'
}

var chapterNames = {
    1: 'Chapter 1', 2: 'Chapter 2', 3: 'Chapter 3', 4: 'Chapter 4', 5: 'Chapter 5', 6: 'Dwarves', 7: 'Fairies', 
    8: 'Orcs and Goblins', 9: 'Woodelves', 10: 'Sorcerers and Dragons',
    11: 'Halflings', 12: 'Elementals', 13: 'Amuni', 14: 'Constructs', 15: 'Elvenar', 16: 'Embassies', 
    17: 'Traders of Unur', 18: 'Team Spirit', 19: 'Revenge of the Exile'
}

let eventBanners = {
    "february_xxi_": "https://i.ibb.co/NLRxJ7y/EL-akcia-karneval-2021-banner.png",
    "march_xxi_": "https://i.ibb.co/m0hGLdm/EL-akcia-ve-k-noc-2021-banner.png",
    "may_xxi_": "https://i.ibb.co/tB6W7cj/EL-akcia-m-j-2021-banner.png",
    "june_xxi_": "https://i.ibb.co/8Y0N5Qn/EL-akcia-j-n-2021-banner.png",
    "july_xxi_": "https://i.ibb.co/vh3BQGv/EL-akcia-j-l-2021-banner.png",
    "september_xxi_": "https://i.ibb.co/Sv8KCqt/EL-akcia-september-2021-banner.png",
    "october_xxi_": "https://i.ibb.co/bL1jyDX/EL-akcia-halloween-2021-banner.png",
    "december_xxi_": "https://i.ibb.co/QC32rpF/EL-akcia-zima-2021-banner.png",
    "january_xxii_": "https://i.ibb.co/Wc4RLZt/EL-akcia-janu-r-2022-banner.png",
}

let eventVideos = {
    "february_xxi_": "https://www.youtube.com/embed/AS2XrTrF8PM",
    "march_xxi_": "https://www.youtube.com/embed/6VoSOv1ZXFA",
    "may_xxi_": "https://www.youtube.com/embed/lQ-iFRKuFvU",
    "june_xxi_": "https://www.youtube.com/embed/doNM1AbVWt8",
    "july_xxi_": "https://www.youtube.com/embed/sWa4cT4yGIA",
    "september_xxi_": "https://www.youtube.com/embed/DTGy8Q0lnAc",
    "october_xxi_": "https://www.youtube.com/embed/LqUrW3YtDrw;https://www.youtube.com/embed/PzUHa4Bat2k",
    "december_xxi_": "https://www.youtube.com/embed/TIKU54tbdJc",
    "january_xxii_": "https://www.youtube.com/embed/NOk4Q_u3BL8",
}

let eventNames = {
    "february_xxi_": "Elvarian Carnival 2021",
    "march_xxi_": "Rise of the Phoenix Cult 2021",
    "may_xxi_": "Queen Fairy's Garden"
}

let eventBetaStarts = { // MM/DD/YYYY
    "february_xxi_": "01/24/2021",
    "march_xxi_": "03/04/2021",
    "may_xxi_": "04/15/2021",
    "june_xxi_": "05/18/2021",
    "july_xxi_": "06/24/2021",
    "september_xxi_": "08/19/2021",
    "october_xxi_": "09/30/2021",
    "december_xxi_": "11/11/2021",
    "january_xxii_": "01/06/2022",
    "february_xxii_": "02/03/2022",
}

let questsLinks = {
    "december_xxi_": "bit.ly/Quests-WinterMagic2021",
    "january_xxii_": "bit.ly/ForbiddenRuins2022",
    "february_xxii_": "bit.ly/TheBuriedCity2022",
}

let eventLiveStarts = {
    "february_xxi_": "02/09/2021",
    "march_xxi_": "03/23/2021",
    "may_xxi_": "05/04/2021"
}

let evoUpgradeCosts = {
    "A_Evt_Evo_February_XXI_Everblossom_Sleigh" : "1x Carnival Artifact",
    "A_Evt_Evo_Autumn_XIX_Bear_Brown" : "1x Bear Artifact",
    "A_Evt_Evo_Autumn_XIX_Bear_Ice" : "1x Bear Artifact",
    "A_Evt_Evo_Winter_XIX_Gingerbread_Mansion" : "1x Gingerbread Artifact",
    "A_Evt_Evo_Summer_XIX_Stonehenge" : "1x Stonehenge Artifact",
    "A_Evt_Evo_September_XX_Moon_Bear" : "1x Moon Bear Artifact",
    "A_Evt_Evo_October_XX_Witches_Hut" : "1x Witch's Hut Artifact",
    "A_Evt_Evo_May_XX_May_Tree" : "1x Festive May Tree Artifact",
    "A_Evt_Evo_March_XXI_Ashen_Phoenix" : "1x Ashen Phoenix Artifact",
    "A_Evt_Evo_MM_XIX_WaterTower" : "1x Mermaid Artifact",
    "A_Evt_Evo_July_XX_Wise_Golem" : "1x Wise Golem Artifact",
    "A_Evt_Evo_Easter_XX_Phoenix_Coldfire" : "1x Coldfire Phoenix Artifact",
    "A_Evt_Evo_Easter_XIX_Phoenix_Yellow" : "1x Phoenix Artifact",
    "A_Evt_Evo_Easter_XIX_Phoenix_Red" : "1x Phoenix Artifact",
    "A_Evt_Evo_Easter_XIX_Phoenix_Blue" : "1x Phoenix Artifact",
    "A_Evt_Evo_December_XX_Watchful_Winter_Owl" : "1x Watchful Winter Owl Artifact",
    "A_Evt_Evo_Car_XX_Burukbrak_Gaelagil" : "1x Valentines Artifact",
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : "1x Bear Artifact",
    "A_Evt_Evo_May_XXI_Queen_Fairys_Retreat": "1x Queen Faeries Retreat Artifact",
    "A_Evt_Evo_July_XXI_Triumph_of_Tides": "1x Triumph of the Tides Artifact",
    "A_Evt_Evo_September_XXI_Red_Panda_Master": "1x Red Panda Master Artifact",
    "A_Evt_Evo_October_XXI_Witch_Summoning_Circle": "1x Witch Summoning Circle Artifact",
    "A_Evt_Evo_December_XXI_Boblins_Express_Service": "1x Boblins Express Service Artifact",
    "A_Evt_Evo_February_XXII_Echoes_of_the_Forgotten": "1x Echoes of the Forgotten Artifact",
}

var feedingEffectsDescriptions = {
    "A_Evt_Evo_Autumn_XIX_Bear_Brown" : `<img src="https://i.ibb.co/9rSkBkw/unit-production-boost.png">`,
    "A_Evt_Evo_Autumn_XIX_Bear_Ice" : `<img src="https://i.ibb.co/NZ1xsbt/tournament-cooldown-reduction.png">`,
    "A_Evt_Evo_September_XX_Moon_Bear" : `<img src="https://i.ibb.co/CB7JkFY/knowledge-points-new.png">`,
    "A_Evt_Evo_March_XXI_Ashen_Phoenix" : `<img src="https://i.ibb.co/cYv1Scg/EL-akcia-ve-k-noc-2019-event-currency.png">`,
    "A_Evt_Evo_Easter_XX_Phoenix_Coldfire" : `<img src="https://i.ibb.co/CB7JkFY/knowledge-points-new.png">`,
    "A_Evt_Evo_Easter_XIX_Phoenix_Yellow" : `<img src="https://i.ibb.co/s5zgfs4/goods-production.png">`,
    "A_Evt_Evo_Easter_XIX_Phoenix_Red" : `<img src="https://i.ibb.co/3TG2xv7/unit-attack-enhance.png">`,
    "A_Evt_Evo_Easter_XIX_Phoenix_Blue" : `<img src="https://i.ibb.co/J749d95/mm-boost.png">`,
    "A_Evt_Evo_December_XX_Watchful_Winter_Owl" : `<img src="https://i.ibb.co/gvPd8Mv/boosted-plus-0-quality-1.png">`,
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : `<img src="https://i.ibb.co/0YD0JRZ/boosted-quality-1.png">`,
    "A_Evt_Evo_September_XXI_Red_Panda_Master" : `<img src="https://i.ibb.co/hYXr3HW/vision-vapor-small.png">`
}

var allowedFeedingMultiplicators = {
    "completedProvinces":"completed provinces",
}

var iconsImages = {
    "damage_boost":`<img src="https://i.ibb.co/3TG2xv7/unit-attack-enhance.png" title="Damage Boost">`,
    "event_currency_1":`<img src="https://i.ibb.co/cYv1Scg/EL-akcia-ve-k-noc-2019-event-currency.png" title="Event Currency">`,
    "aw_hitpoints":`<img src="https://i.ibb.co/Yy21rpT/health-points.png" title="Troops Health">`,
    "damage_boost":`<img src="https://i.ibb.co/3TG2xv7/unit-attack-enhance.png">`,
    "damage_boost":`<img src="https://i.ibb.co/3TG2xv7/unit-attack-enhance.png">`,
}

var buildingTypes = {
    "culture_residential" : "Culture-residential",
    "culture" : "Culture",
    "expiring" : "Expiring",
    "" : "",
    "" : ""
}

var setNames = {
    "winter_xvii" : "Winter Set",
    "easter_xviii" : "Phoenix Cult Set",
    "summer_xviii" : "Woodelvenstock Set",
    "autumn_a_xviii" : "Harvest Temple Set",
    "autumn_b_xviii" : "Shrines of Sun and Moon Set",
    "january_xviii" : "Redbeard Set",
    "winter_a_xviii" : "Winter Market Set",
    "winter_b_xviii" : "Snow Owls Set",
    "carnival_xix" : "Carnival Set",
    "crafting_1_chess" : "Magical Chess Set",
    "spire_a_library" : "Moonstone Library Set",
    "june_xx" : "Air Traders Set",
    "scroll_sorcerers" : "Pilgrim's Manor",
    "scroll_sorcerers_xxii": "Forbidden Ruins",
}

var discardBuildings = [
    "A_Evt_Expiring_NegotiationDebuff",
    "A_Evt_Expiring_OrcBuff",
    "A_Evt_Expiring_AWAssistance",
]

var allEvents = {
    "all_buildings" : { //NAME,ID,SELECTED,DISABLED == HIDDEN
        "2022" : [
            ["The Buried City","february_xxii_",true,false],
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
        "2022" : [
            ["The Buried City","february_xxii_",true,false],
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

var optionsForOrderBy = [
    {"type": "buildings", "value": "all_", "text": "All"},
    {"type": "events", "value": "day", "text": "Day"},
    {"type": "buildings&events", "value": "providedCulture", "text": "Culture per square"},
    {"type": "buildings&events", "value": "provided_population", "text": "Population per square"},
    {"type": "buildings&events", "value": "money", "text": "Money per square per 1h"},
    {"type": "buildings&events", "value": "supplies", "text": "Supplies per square per 1h"},
    {"type": "buildings&events", "value": "orcs", "text": "Orcs per square per 1h"},
    {"type": "buildings&events", "value": "mana", "text": "Mana per square per 1h"},
    {"type": "buildings&events", "value": "seeds", "text": "Seeds per square per 1h"},
]

var optionsForFilterBy = [
    {"value": "all_events", "text": "All"},
    {"value": "only&providedCulture", "text": "Culture Only"},
    {"value": "only&providedCulture&provided_population", "text": "Culture & Population Only"},
    {"value": "boosted_plus_0_quality_1|boosted_plus_1_quality_1|boosted_plus_2_quality_1|marble|steel|planks", "text": "Standard Goods T1"},
    {"value": "boosted_plus_0_quality_2|boosted_plus_1_quality_2|boosted_plus_2_quality_2|crystal|scrolls|silk", "text": "Standard Goods T2"},
    {"value": "boosted_plus_0_quality_3|boosted_plus_1_quality_3|boosted_plus_2_quality_3|elixir|magic_dust|gems", "text": "Standard Goods T3"},
    {"value": "orcs", "text": "Orcs"},
    {"value": "mana", "text": "Mana"},
    {"value": "seeds", "text": "Seeds"},
    {"value": "boosted_sentient_plus_0_quality_1|boosted_sentient_plus_1_quality_1|boosted_sentient_plus_2_quality_1|sentientmarble|sentientsteel|sentientplanks", "text": "Sentient Goods T4"},
    {"value": "boosted_sentient_plus_0_quality_2|boosted_sentient_plus_1_quality_2|boosted_sentient_plus_2_quality_2|sentientcrystal|sentientscrolls|sentientsilk", "text": "Sentient Goods T5"},
    {"value": "boosted_sentient_plus_0_quality_3|boosted_sentient_plus_1_quality_3|boosted_sentient_plus_2_quality_3|sentientelixir|sentientmagic_dust|sentientgems", "text": "Sentient Goods T6"},
]

var goods_icons = {
    "providedCulture": "<img src='https://image.ibb.co/mEtRZq/culture.png' title='Culture'>",
    "provided_population": "<img src='https://image.ibb.co/ipAZLV/population.png' title='Population'>",
    "money": "<img src='https://image.ibb.co/g5ErZq/money.png' title='Coins'><br>",
    "supplies": "<img src='https://image.ibb.co/gtNH7A/supplies.png' title='Supplies'><br>",
    "marble": "<img src='https://i.ibb.co/mtYStcp/good-marble-big.png' title='Marble'><br>",
    "steel": "<img src='https://i.ibb.co/Lds7D9z/good-steel-big.png' title='Steel'><br>",
    "planks": "<img src='https://i.ibb.co/r38GcfT/good-planks-big.png' title='Planks'><br>",
    "crystal": "<img src='https://i.ibb.co/C88GHJF/good-crystal-big.png' title='Crystal'><br>",
    "scrolls": "<img src='https://i.ibb.co/hsNXDsb/good-scrolls-big.png' title='Scrolls'><br>",
    "silk": "<img src='https://i.ibb.co/PcLs9hT/good-silk-big.png' title='Silk'><br>",
    "elixir": "<img src='https://i.ibb.co/VDtDYD1/good-elixir-big.png' title='Elixir'><br>",
    "magic_dust": "<img src='https://i.ibb.co/S3HKY7j/good-magic-dust-big.png' title='Magic Dust'><br>",
    "gems": "<img src='https://i.ibb.co/QCHg8Y5/good-gems-big.png' title='Gems'><br>",
    "boosted_plus_0_quality_1": "<img src='https://i.ibb.co/gvPd8Mv/boosted-plus-0-quality-1.png' title='Boosted T1'><br>",
    "boosted_plus_0_quality_2": "<img src='https://i.ibb.co/cgSyp4Z/boosted-plus-0-quality-2.png' title='Boosted T2'><br>",
    "boosted_plus_0_quality_3": "<img src='https://i.ibb.co/r4fRKKq/boosted-plus-0-quality-3.png' title='Boosted T3'><br>",
    "boosted_plus_1_quality_1": "<img src='https://image.ibb.co/bVDVDV/goods-quality-1-plus-1.png' title='Boosted T1 + 1'><br>", 
    "boosted_plus_2_quality_1": "<img src='https://i.ibb.co/sHDVsM0/goods-quality-1-plus-2.png' title='Boosted T1 + 2'><br>",
    "boosted_plus_1_quality_2": "<img src='https://i.ibb.co/2NC7h3q/goods-quality-2-plus-1.png' title='Boosted T2 + 1'><br>",
    "boosted_plus_2_quality_2": "<img src='https://i.ibb.co/dMHH2Ns/goods-quality-2-plus-2.png' title='Boosted T2 + 2'><br>",
    "boosted_plus_1_quality_3": "<img src='https://image.ibb.co/fOAi4f/goods-quality-3-plus-1.png' title='Boosted T3 + 1'><br>",
    "boosted_plus_2_quality_3": "<img src='https://i.ibb.co/9qqkPBC/goods-quality-3-plus-2.png' title='Boosted T3 + 2'><br>",
    "orcs": "<img src='https://i.ibb.co/Hn5W8XF/orcs.png' title='Orcs'><br>",
    "mana": "<img src='https://image.ibb.co/bzd1Zq/mana.png' title='Mana'><br>",
    "seeds": "<img src='https://image.ibb.co/c9JtEq/seeds.png' title='Seeds'><br>",
    "sentientmarble": "<img src='https://i.ibb.co/wRN3HJP/sentient-marble.png' title='Moonstone'><br>",
    "sentientsteel": "<img src='https://i.ibb.co/wB410LW/sentient-steel.png' title='Platinum'><br>",
    "sentientplanks": "<img src='https://i.ibb.co/HqmkSDk/sentient-wood.png' title='Elven Tree Gum'><br>",
    "sentientcrystal": "<img src='https://i.ibb.co/Gs7Gqgj/sentient-crystal.png' title='Obsidian'><br>",
    "sentientscrolls": "<img src='https://i.ibb.co/Y0Md5dV/sentient-scrolls.png' title='Arcane Ink'><br>",
    "sentientsilk": "<img src='https://i.ibb.co/wznTtMS/sentient-silk.png' title='Royale Velvet'><br>",
    "sentientelixir": "<img src='https://i.ibb.co/LzqV8H3/sentient-elixir.png' title='Silly Soap'><br>",
    "sentientmagic_dust": "<img src='https://i.ibb.co/MRCdFKn/sentient-dust.png' title='Alloy Shrooms'><br>",
    "sentientgems": "<img src='https://i.ibb.co/sWNdPJx/sentient-gems.png' title='Cosmic Bismuth'><br>",
    "boosted_sentient_plus_0_quality_1": "<img src='https://i.ibb.co/j3NHkyw/boosted-sentient-plus-0-quality-1-mini.png' title='Boosted T4'><br>",
    "boosted_sentient_plus_1_quality_1": "<img src='https://i.ibb.co/WvC1LQm/boosted-sentient-plus-1-quality-1-mini.png' title='Boosted T4 + 1'><br>",
    "boosted_sentient_plus_2_quality_1": "<img src='https://i.ibb.co/0GzFcvk/boosted-sentient-plus-2-quality-1-mini.png' title='Boosted T4 + 2'><br>",
    "boosted_sentient_plus_0_quality_2": "<img src='https://i.ibb.co/LhdP2gZ/boosted-sentient-plus-0-quality-2-mini.png' title='Boosted T5'><br>",
    "boosted_sentient_plus_1_quality_2": "<img src='https://i.ibb.co/j8C7yjz/boosted-sentient-plus-1-quality-2-mini.png' title='Boosted T5 + 1'><br>",
    "boosted_sentient_plus_2_quality_2": "<img src='https://i.ibb.co/1v3vkXS/boosted-sentient-plus-2-quality-2-mini.png' title='Boosted T5 + 2'><br>",
    "boosted_sentient_plus_0_quality_3": "<img src='https://i.ibb.co/RTFv8JX/boosted-sentient-plus-0-quality-3-mini.png' title='Boosted T6'><br>",
    "boosted_sentient_plus_1_quality_3": "T6+1 ",
    "boosted_sentient_plus_2_quality_3": "<img src='https://i.ibb.co/cTBrnwH/boosted-sentient-plus-2-quality-3-mini.png' title='Boosted T6 + 2'><br>",
    "unurium": `<img src='https://i.ibb.co/5shvjhx/unurium-small.png' title='Unurium'><br>`,
    "knowledge_points": "<img src='https://i.ibb.co/CB7JkFY/knowledge-points-new.png' title='Knowledge Points'><br>",
    "broken_shards": "<img src='https://i.ibb.co/ZMBLJS3/broken-shard.png' title='Broken Shards'><br>",
    "ins_rf_cn_5": "5%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_10": "10%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_15": "15%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_20": "20%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_25": "25%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_33": "33%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_50": "50%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_cn_100": "100%<br><img src='https://image.ibb.co/dJs520/coin-rain.png' title='Coin Rain Instant'><br>",
    "ins_rf_spl_5": "5%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_10": "10%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_15": "15%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_20": "20%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_25": "25%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_33": "33%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_50": "50%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_spl_100": "100%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png' title='Supply Windfall Instant'><br>",
    "ins_rf_grr_5": "5%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_10": "10%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_15": "15%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_20": "20%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_25": "25%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_33": "33%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_50": "50%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "ins_rf_grr_100": "100%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png' title='Portal Profit Instant'><br>",
    "INS_KP_AW_1": "1 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_3": "3 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_5": "5 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_7": "7 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_10": "10 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_15": "15 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_20": "20 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "INS_KP_AW_30": "30 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png' title='Ancient Knowledge Instant'><br>",
    "ins_rs_1": "<img src='https://i.ibb.co/s6kzbrx/ins-rs.png' title='Royal Restoration'><br>",
    "mc_lm": "<img src='https://i.ibb.co/85g0RHK/mc-lm-small.png' title='Drone Rider'><br>",
    "mc_lr": "<img src='https://i.ibb.co/8NRMqzq/mc-lr-small.png' title='Ranger'><br>",
    "mc_ma": "<img src='https://i.ibb.co/9TKY6Pp/mc-ma-small.png' title='Blossom Princess'><br>",
    "tg_lm": "<img src='https://i.ibb.co/c3PWGGn/tg-lm-small.png' title='Cerberus'><br>",
    "tg_lr": "<img src='https://i.ibb.co/80nbSKf/tg-lr-small.png' title='Dryad'><br>",
    "tg_ma": "<img src='https://i.ibb.co/LNVK6Js/tg-ma-small.png' title='Banshee'><br>",
    "mc_hr": "<img src='https://i.ibb.co/c2x0pfJ/unit-frog.png' title='Fainéant Frog'><br>",
    "mc_hm": "<img src='https://i.ibb.co/MsCqywh/unit-valorian.png' title='Vallorian Guard'><br>",
    "tg_hm": "<img src='https://i.ibb.co/q5ky4WS/unit-orc-warrior.png' title='Orc Warrior'><br>",
    "tg_hr": "<img src='https://i.ibb.co/Gds0422/unit-orc-strategist.png' title='Orc Strategist'><br>",
    "unit_1": "<img src='https://i.ibb.co/jfTTh1Q/barracks-lm.png' title='Axe Barbarian'>/<img src='https://i.ibb.co/wCf7xkh/barracks-lm-2.png' title='Sword Dancer'><br>",
    "unit_2": "<img src='https://i.ibb.co/2jH3qG5/barracks-lr.png' title='Crossbowman'>/<img src='https://i.ibb.co/M8Wpzb5/barracks-lr-2.png' title='Archer'><br>",
    "unit_3": "<img src='https://i.ibb.co/nMz9Zbz/barracks-ma.png' title='Priest'>/<img src='https://i.ibb.co/SvgLMw8/barracks-ma-2.png' title='Sorceress'><br>",
    "unit_4": "<img src='https://i.ibb.co/1GykVmT/barracks-hm.png' title='Paladin'>/<img src='https://i.ibb.co/chCSJVS/barracks-hm-2.png' title='Treant'><br>",
    "unit_5": "<img src='https://i.ibb.co/D9MNhSk/barracks-hr.png' title='Mortar'>/<img src='https://i.ibb.co/KqGV47d/barracks-hr-2.png' title='Golem'><br>",
    "spell_good_production_boost_1": "<img src='https://i.ibb.co/vz2BZbv/spell-good-production.png' title='Magical Manufactoring'><br>",
    "relic_marble": "<img src='https://i.ibb.co/sJ8pN3V/relic-marble-small.png' title='Marble Relic'><br>",
    "relic_steel": "<img src='https://i.ibb.co/DYs5LqZ/relic-steel-small.png' title='Steel Relic'><br>",
    "relic_planks": "<img src='https://i.ibb.co/rHPSK2m/relic-planks-small.png' title='Plank Relic'><br>",
    "relic_crystal": "<img src='https://i.ibb.co/LvhbTt6/relic-crystal-small.png' title='Crystal Relic'><br>",
    "relic_scrolls": "<img src='https://i.ibb.co/236qxwB/relic-scrolls-small.png' title='Scroll Relic'><br>",
    "relic_silk": "<img src='https://i.ibb.co/n0z2QMS/relic-silk-small.png' title='Silk Relic'><br>",
    "relic_elixir": "<img src='https://i.ibb.co/jzxf6qf/relic-elixir-small.png' title='Elixir Relic'><br>",
    "relic_magic_dust": "<img src='https://i.ibb.co/jH0yBYV/relic-magic-dust-small.png' title='Magic Dust Relic'><br>",
    "relic_gems": "<img src='https://i.ibb.co/k4GJyzw/relic-gems-small.png' title='Gem Relic'><br>",
    "boosted_relic_plus_2_quality_1": "<img src='https://i.ibb.co/X2YZWKD/relics-t1-small.png' title='Boosted T1 + 2 Relic'><br>",
    "boosted_relic_plus_2_quality_2": "<img src='https://i.ibb.co/hWtPCSd/relics-t2-small.png' title='Boosted T2 + 2 Relic'><br>",
    "boosted_relic_plus_2_quality_3": "<img src='https://i.ibb.co/f4tttR1/relics-t3-small.png' title='Boosted T3 + 2 Relic'><br>",
    "boosted_relic_plus_0_quality_2": "<img src='https://i.ibb.co/hWtPCSd/relics-t2-small.png' title='Boosted T2 Relic'><br>",
    "boosted_relic_plus_1_quality_2": "<img src='https://i.ibb.co/hWtPCSd/relics-t2-small.png' title='Boosted T2 + 1 Relic'><br>",
    "craft_spell_fragments": "<img src='https://i.ibb.co/fYLXgWP/spell-fragment.png' title='Spell Fragments'><br>",
    "combiningcatalyst": "<img src='https://i.ibb.co/WnDfq7P/combining-catalyst.png' title='Combining Catalyst'><br>",
    "INS_TR_AMT_1": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 1 min'><br>",
    "INS_TR_AMT_3": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 3 min'><br>",
    "INS_TR_AMT_7": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 7 min'><br>",
    "INS_TR_AMT_10": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 10 min'><br>",
    "INS_TR_AMT_15": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 15 min'><br>",
    "INS_TR_AMT_20": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 20 min'><br>",
    "INS_TR_AMT_30": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 30 min'><br>",
    "INS_TR_AMT_45": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 45 min'><br>",
    "INS_TR_AMT_60": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 1 h'><br>",
    "INS_TR_AMT_120": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 2 h'><br>",
    "INS_TR_AMT_300": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 5 h'><br>",
    "INS_TR_AMT_480": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 8 h'><br>",
    "INS_TR_AMT_840": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 14 h'><br>",
    "INS_TR_AMT_1200": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 20 h'><br>",
    "INS_TR_AMT_2400": "<img src='https://i.ibb.co/8dBhcrH/ins-tr-amt-small.png' title='Time Booster 40 h'><br>",
}

var chapter_icons = {
    1: "https://i.ibb.co/kQF5s0q/ch1.png title='Chapter 1'",
    2: "https://i.ibb.co/DfkmS1H/ch2.png title='Chapter 2'",
    3: "https://i.ibb.co/mFkxVRb/ch3.png title='Chapter 3'",
    4: "https://i.ibb.co/TcDB1Vx/ch4.png title='Chapter 4'",
    5: "https://i.ibb.co/F61wRpp/ch5.png title='Chapter 5'",
    6: "https://i.ibb.co/qYDnBNk/ch6.png title='Dwarves'",
    7: "https://i.ibb.co/7yHBTJV/ch7.png title='Fairies'",
    8: "https://i.ibb.co/sWcQSrp/ch8.png title='Orcs and Goblins'",
    9: "https://i.ibb.co/tsm2HCs/ch9.png title='Woodelves'",
    10: "https://i.ibb.co/sqkZ7FN/ch10.png title='Sorcerers and Dragons'",
    11: "https://i.ibb.co/D4sgMFf/ch11.png title='Halflings'",
    12: "https://i.ibb.co/KVrY4M2/ch12.png title='Elementals'",
    13: "https://i.ibb.co/Sx7bcfG/ch13.png title='Amuni'",
    14: "https://i.ibb.co/5h3nr8K/ch14.png title='Constructs'",
    15: "https://i.ibb.co/mbhNzvt/ch15.png title='Elvenar'",
    16: "https://i.ibb.co/qjFYznn/ch16.png title='Embassies'",
    17: "https://i.ibb.co/W5CtfR2/ch17.png title='Traders of Unur'",
    18: "https://i.ibb.co/ZxGJSVv/ch18.png title='Team Spirit'",
    19: "https://i.ibb.co/Y4gW0Vy/ch19.png title='Revenge of the Exile'",
}
