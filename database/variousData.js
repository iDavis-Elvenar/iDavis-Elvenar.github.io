var prioritiesNonProduction = ["providedCulture", "provided_population"];

var prioritiesProduction = ["money", "supplies", "marble", "steel", "planks", "crystal", "scrolls", "silk", "elixir", "magic_dust", "gems",
    "boosted_plus_0_quality_1", "boosted_plus_0_quality_2", "boosted_plus_0_quality_3", "boosted_plus_1_quality_1", "boosted_plus_2_quality_1", "boosted_plus_1_quality_2", "boosted_plus_2_quality_2", "boosted_plus_1_quality_3", "boosted_plus_2_quality_3", "orcs",
    "mana", "seeds", "sentientmarble", "sentientsteel", "sentientplanks", "sentientcrystal", "sentientscrolls", "sentientsilk", "sentientelixir", "sentientmagic_dust", "sentientgems", "boosted_sentient_plus_0_quality_1", "boosted_sentient_plus_1_quality_1", "boosted_sentient_plus_2_quality_1",
    "boosted_sentient_plus_0_quality_2", "boosted_sentient_plus_1_quality_2", "boosted_sentient_plus_2_quality_2",
    "boosted_sentient_plus_0_quality_3", "boosted_sentient_plus_1_quality_3", "boosted_sentient_plus_2_quality_3",
    "unurium", "unit_1", "unit_2", "unit_3", "unit_4", "unit_5", "tg_lm", "tg_lr", "tg_ma", "tg_hm", "tg_hr",
    "mc_lm", "mc_lr", "mc_ma", "mc_hm", "mc_hr", "knowledge_points", "broken_shards",
    "relic_marble", "relic_steel", "relic_planks", "relic_crystal", "relic_scrolls", "relic_silk", "relic_elixir",
    "relic_magic_dust", "relic_gems",
    "spell_good_production_boost_1",
    "craft_spell_fragments", "spell_combining_catalyst_1",
    "ins_rf_cn_5", "ins_rf_cn_10", "ins_rf_cn_15", "ins_rf_cn_20",
    "ins_rf_cn_25", "ins_rf_cn_33", "ins_rf_cn_50", "ins_rf_cn_100", "ins_rf_spl_5", "ins_rf_spl_10", "ins_rf_spl_15",
    "ins_rf_spl_20", "ins_rf_spl_25", "ins_rf_spl_33", "ins_rf_spl_50", "ins_rf_spl_100", "ins_rf_grr_5",
    "ins_rf_grr_10", "ins_rf_grr_15", "ins_rf_grr_20", "ins_rf_grr_25", "ins_rf_grr_33", "ins_rf_grr_50", "ins_rf_grr_100",
    "INS_KP_AW_1", "INS_KP_AW_3", "INS_KP_AW_5", "INS_KP_AW_7", "INS_KP_AW_10", "INS_KP_AW_15", "INS_KP_AW_20",
    "INS_KP_AW_30", "ins_rs_1", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "" ];

var numberOfChapters = 18;

var chapters = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII'
}

let eventBanners = {
    "february_xxi_": "https://i.ibb.co/NLRxJ7y/EL-akcia-karneval-2021-banner.png",
    "march_xxi_": "https://i.ibb.co/m0hGLdm/EL-akcia-ve-k-noc-2021-banner.png",
    "may_xxi_": "https://i.ibb.co/tB6W7cj/EL-akcia-m-j-2021-banner.png",
    "june_xxi_": "https://i.ibb.co/8Y0N5Qn/EL-akcia-j-n-2021-banner.png"
}

let eventVideos = {
    "february_xxi_": "https://www.youtube.com/embed/AS2XrTrF8PM",
    "march_xxi_": "https://www.youtube.com/embed/6VoSOv1ZXFA",
    "may_xxi_": "https://www.youtube.com/embed/lQ-iFRKuFvU",
    "june_xxi_": "https://www.youtube.com/embed/doNM1AbVWt8"
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
    "june_xxi_": "05/18/2021"
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
    "A_Evt_Evo_May_XXI_Queen_Fairys_Retreat": "1x Queen Faeries Retreat Artifact"
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
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : `<img src="https://i.ibb.co/0YD0JRZ/boosted-quality-1.png">`
}

var buildingTypes = {
    "culture_residential" : "Culture-residential",
    "culture" : "Culture",
    "" : "",
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
    "scroll_sorcerers" : "Pilgrim's Manor"
}

var discardBuildings = [
    "A_Evt_Expiring_NegotiationDebuff",
    "A_Evt_Expiring_OrcBuff",
    "A_Evt_Expiring_AWAssistance",
    "july_xxi_"
]

var allEvents = {
    "all_buildings" : {
        "2021" : [ //NAME,ID,SELECTED,DISABLED
            ["Sorcerers' Homecoming","june_xxi_",true,false],
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
        "2021" : [
            ["Sorcerers' Homecoming","june_xxi_",true,false],
            ["Queen Fairy's Garden","may_xxi_",false,false],
            ["Rise of the Phoenix Cult","march_xxi_",false,false],
            ["Elvarian Carnival","february_xxi_",false,false]
        ]
    }
}

var goods_icons = {
    "providedCulture": "<img src='https://image.ibb.co/mEtRZq/culture.png'>",
    "provided_population": "<img src='https://image.ibb.co/ipAZLV/population.png'>",
    "money": "<img src='https://image.ibb.co/g5ErZq/money.png'><br>",
    "supplies": "<img src='https://image.ibb.co/gtNH7A/supplies.png'><br>",
    "marble": "<img src='https://i.ibb.co/mtYStcp/good-marble-big.png'><br>",
    "steel": "<img src='https://i.ibb.co/Lds7D9z/good-steel-big.png'><br>",
    "planks": "<img src='https://i.ibb.co/r38GcfT/good-planks-big.png'><br>",
    "crystal": "<img src='https://i.ibb.co/C88GHJF/good-crystal-big.png'><br>",
    "scrolls": "<img src='https://i.ibb.co/hsNXDsb/good-scrolls-big.png'><br>",
    "silk": "<img src='https://i.ibb.co/PcLs9hT/good-silk-big.png'><br>",
    "elixir": "<img src='https://i.ibb.co/VDtDYD1/good-elixir-big.png'><br>",
    "magic_dust": "<img src='https://i.ibb.co/S3HKY7j/good-magic-dust-big.png'><br>",
    "gems": "<img src='https://i.ibb.co/QCHg8Y5/good-gems-big.png'><br>",
    "boosted_plus_0_quality_1": "<img src='https://i.ibb.co/gvPd8Mv/boosted-plus-0-quality-1.png'><br>",
    "boosted_plus_0_quality_2": "<img src='https://i.ibb.co/cgSyp4Z/boosted-plus-0-quality-2.png'><br>",
    "boosted_plus_0_quality_3": "<img src='https://i.ibb.co/r4fRKKq/boosted-plus-0-quality-3.png'><br>",
    "boosted_plus_1_quality_1": "<img src='https://image.ibb.co/bVDVDV/goods-quality-1-plus-1.png'><br>",
    "boosted_plus_2_quality_1": "<img src='https://i.ibb.co/sHDVsM0/goods-quality-1-plus-2.png'><br>",
    "boosted_plus_1_quality_2": "<img src='https://i.ibb.co/2NC7h3q/goods-quality-2-plus-1.png'><br>",
    "boosted_plus_2_quality_2": "<img src='https://i.ibb.co/dMHH2Ns/goods-quality-2-plus-2.png'><br>",
    "boosted_plus_1_quality_3": "<img src='https://image.ibb.co/fOAi4f/goods-quality-3-plus-1.png'><br>",
    "boosted_plus_2_quality_3": "<img src='https://i.ibb.co/9qqkPBC/goods-quality-3-plus-2.png'><br>",
    "orcs": "<img src='https://i.ibb.co/Hn5W8XF/orcs.png'><br>",
    "mana": "<img src='https://image.ibb.co/bzd1Zq/mana.png'><br>",
    "seeds": "<img src='https://image.ibb.co/c9JtEq/seeds.png'><br>",
    "sentientmarble": "<img src='https://i.ibb.co/wRN3HJP/sentient-marble.png'><br>",
    "sentientsteel": "<img src='https://i.ibb.co/wB410LW/sentient-steel.png'><br>",
    "sentientplanks": "<img src='https://i.ibb.co/HqmkSDk/sentient-wood.png'><br>",
    "sentientcrystal": "<img src='https://i.ibb.co/Gs7Gqgj/sentient-crystal.png'><br>",
    "sentientscrolls": "<img src='https://i.ibb.co/Y0Md5dV/sentient-scrolls.png'><br>",
    "sentientsilk": "<img src='https://i.ibb.co/wznTtMS/sentient-silk.png'><br>",
    "sentientelixir": "<img src='https://i.ibb.co/LzqV8H3/sentient-elixir.png'><br>",
    "sentientmagic_dust": "<img src='https://i.ibb.co/MRCdFKn/sentient-dust.png'><br>",
    "sentientgems": "<img src='https://i.ibb.co/sWNdPJx/sentient-gems.png'><br>",
    "boosted_sentient_plus_0_quality_1": "<img src='https://i.ibb.co/j3NHkyw/boosted-sentient-plus-0-quality-1-mini.png'><br>",
    "boosted_sentient_plus_1_quality_1": "<img src='https://i.ibb.co/WvC1LQm/boosted-sentient-plus-1-quality-1-mini.png'><br>",
    "boosted_sentient_plus_2_quality_1": "<img src='https://i.ibb.co/0GzFcvk/boosted-sentient-plus-2-quality-1-mini.png'><br>",
    "boosted_sentient_plus_0_quality_2": "<img src='https://i.ibb.co/LhdP2gZ/boosted-sentient-plus-0-quality-2-mini.png'><br>",
    "boosted_sentient_plus_1_quality_2": "<img src='https://i.ibb.co/j8C7yjz/boosted-sentient-plus-1-quality-2-mini.png'><br>",
    "boosted_sentient_plus_2_quality_2": "<img src='https://i.ibb.co/1v3vkXS/boosted-sentient-plus-2-quality-2-mini.png'><br>",
    "boosted_sentient_plus_0_quality_3": "<img src='https://i.ibb.co/RTFv8JX/boosted-sentient-plus-0-quality-3-mini.png'><br>",
    "boosted_sentient_plus_1_quality_3": "T6+1 ",
    "boosted_sentient_plus_2_quality_3": "<img src='https://i.ibb.co/cTBrnwH/boosted-sentient-plus-2-quality-3-mini.png'><br>",
    "unurium": "<img src='https://i.ibb.co/jGSkcbd/unurium-mini.png'><br>",
    "knowledge_points": "<img src='https://i.ibb.co/CB7JkFY/knowledge-points-new.png'><br>",
    "broken_shards": "<img src='https://i.ibb.co/ZMBLJS3/broken-shard.png'><br>",
    "ins_rf_cn_5": "5%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_10": "10%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_15": "15%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_20": "20%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_25": "25%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_33": "33%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_50": "50%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_100": "100%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_spl_5": "5%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_10": "10%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_15": "15%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_20": "20%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_25": "25%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_33": "33%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_50": "50%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_100": "100%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_grr_5": "5%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_10": "10%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_15": "15%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_20": "20%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_25": "25%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_33": "33%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_50": "50%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_100": "100%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "INS_KP_AW_1": "1 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_3": "3 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_5": "5 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_7": "7 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_10": "10 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_15": "15 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_20": "20 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "INS_KP_AW_30": "30 KP<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_rs_1": "<img src='https://i.ibb.co/s6kzbrx/ins-rs.png'><br>",
    "mc_lm": "<img src='https://i.ibb.co/85g0RHK/mc-lm-small.png'><br>",
    "mc_lr": "<img src='https://i.ibb.co/8NRMqzq/mc-lr-small.png'><br>",
    "mc_ma": "<img src='https://i.ibb.co/9TKY6Pp/mc-ma-small.png'><br>",
    "tg_lm": "<img src='https://i.ibb.co/c3PWGGn/tg-lm-small.png'><br>",
    "tg_lr": "<img src='https://i.ibb.co/80nbSKf/tg-lr-small.png'><br>",
    "tg_ma": "<img src='https://i.ibb.co/LNVK6Js/tg-ma-small.png'><br>",
    "mc_hr": "<img src='https://i.ibb.co/c2x0pfJ/unit-frog.png'><br>",
    "mc_hm": "<img src='https://i.ibb.co/MsCqywh/unit-valorian.png'><br>",
    "tg_hm": "<img src='https://i.ibb.co/q5ky4WS/unit-orc-warrior.png'><br>",
    "tg_hr": "<img src='https://i.ibb.co/Gds0422/unit-orc-strategist.png'><br>",
    "unit_1": "<img src='https://i.ibb.co/jfTTh1Q/barracks-lm.png'>/<img src='https://i.ibb.co/wCf7xkh/barracks-lm-2.png'><br>",
    "unit_2": "<img src='https://i.ibb.co/2jH3qG5/barracks-lr.png'>/<img src='https://i.ibb.co/M8Wpzb5/barracks-lr-2.png'><br>",
    "unit_3": "<img src='https://i.ibb.co/nMz9Zbz/barracks-ma.png'>/<img src='https://i.ibb.co/SvgLMw8/barracks-ma-2.png'><br>",
    "unit_4": "<img src='https://i.ibb.co/1GykVmT/barracks-hm.png'>/<img src='https://i.ibb.co/chCSJVS/barracks-hm-2.png'><br>",
    "unit_5": "<img src='https://i.ibb.co/D9MNhSk/barracks-hr.png'>/<img src='https://i.ibb.co/KqGV47d/barracks-hr-2.png'><br>",
    "spell_good_production_boost_1": "<img src='https://i.ibb.co/vz2BZbv/spell-good-production.png'><br>",
    "relic_marble": "<img src='https://i.ibb.co/sJ8pN3V/relic-marble-small.png'><br>",
    "relic_steel": "<img src='https://i.ibb.co/DYs5LqZ/relic-steel-small.png'><br>",
    "relic_planks": "<img src='https://i.ibb.co/rHPSK2m/relic-planks-small.png'><br>",
    "relic_crystal": "<img src='https://i.ibb.co/LvhbTt6/relic-crystal-small.png'><br>",
    "relic_scrolls": "<img src='https://i.ibb.co/236qxwB/relic-scrolls-small.png'><br>",
    "relic_silk": "<img src='https://i.ibb.co/n0z2QMS/relic-silk-small.png'><br>",
    "relic_elixir": "<img src='https://i.ibb.co/jzxf6qf/relic-elixir-small.png'><br>",
    "relic_magic_dust": "<img src='https://i.ibb.co/jH0yBYV/relic-magic-dust-small.png'><br>",
    "relic_gems": "<img src='https://i.ibb.co/k4GJyzw/relic-gems-small.png'><br>",
    "boosted_relic_plus_2_quality_1": "<img src='https://i.ibb.co/X2YZWKD/relics-t1-small.png'><br>",
    "boosted_relic_plus_2_quality_2": "<img src='https://i.ibb.co/hWtPCSd/relics-t2-small.png'><br>",
    "boosted_relic_plus_2_quality_3": "<img src='https://i.ibb.co/f4tttR1/relics-t3-small.png'><br>",
    "craft_spell_fragments": "<img src='https://i.ibb.co/fYLXgWP/spell-fragment.png'><br>",
    "spell_combining_catalyst_1": "<img src='https://i.ibb.co/WnDfq7P/combining-catalyst.png'><br>",
    "": "",
    "": "",
    "": ""
}

var chapter_icons = {
    1: "https://i.ibb.co/kQF5s0q/ch1.png",
    2: "https://i.ibb.co/DfkmS1H/ch2.png",
    3: "https://i.ibb.co/mFkxVRb/ch3.png",
    4: "https://i.ibb.co/TcDB1Vx/ch4.png",
    5: "https://i.ibb.co/F61wRpp/ch5.png",
    6: "https://i.ibb.co/qYDnBNk/ch6.png",
    7: "https://i.ibb.co/7yHBTJV/ch7.png",
    8: "https://i.ibb.co/sWcQSrp/ch8.png",
    9: "https://i.ibb.co/tsm2HCs/ch9.png",
    10: "https://i.ibb.co/sqkZ7FN/ch10.png",
    11: "https://i.ibb.co/D4sgMFf/ch11.png",
    12: "https://i.ibb.co/KVrY4M2/ch12.png",
    13: "https://i.ibb.co/Sx7bcfG/ch13.png",
    14: "https://i.ibb.co/5h3nr8K/ch14.png",
    15: "https://i.ibb.co/mbhNzvt/ch15.png",
    16: "https://i.ibb.co/qjFYznn/ch16.png",
    17: "https://i.ibb.co/W5CtfR2/ch17.png",
    18: "https://i.ibb.co/ZxGJSVv/ch18.png"
}
