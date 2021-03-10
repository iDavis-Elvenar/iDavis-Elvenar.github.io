var prioritiesNonProduction = ["providedCulture", "provided_population"];

var prioritiesProduction = ["money", "supplies", "marble", "steel", "planks", "crystal", "scrolls", "silk", "elixir", "magic_dust", "gems",
    "boosted_plus_0_quality_1", "boosted_plus_0_quality_2", "boosted_plus_0_quality_3", "boosted_plus_1_quality_1", "boosted_plus_2_quality_1", "boosted_plus_1_quality_2", "boosted_plus_2_quality_2", "boosted_plus_1_quality_3", "boosted_plus_2_quality_3", "orcs",
    "mana", "seeds", "sentientmarble", "sentientsteel", "sentientplanks", "sentientcrystal", "sentientscrolls", "sentientsilk", "sentientelixir", "sentientmagic_dust", "sentientgems", "boosted_sentient_plus_0_quality_1", "boosted_sentient_plus_1_quality_1", "boosted_sentient_plus_2_quality_1",
    "boosted_sentient_plus_0_quality_2", "boosted_sentient_plus_1_quality_2", "boosted_sentient_plus_2_quality_2",
    "boosted_sentient_plus_0_quality_3", "boosted_sentient_plus_1_quality_3", "boosted_sentient_plus_2_quality_3",
    "unurium", "mc_hr", "knowledge_points", "broken_shards", "ins_rf_cn_5", "ins_rf_cn_10", "ins_rf_cn_15", "ins_rf_cn_20",
    "ins_rf_cn_25", "ins_rf_cn_33", "ins_rf_cn_50", "ins_rf_cn_100", "ins_rf_spl_5", "ins_rf_spl_10", "ins_rf_spl_15",
    "ins_rf_spl_20", "ins_rf_spl_25", "ins_rf_spl_33", "ins_rf_spl_50", "ins_rf_spl_100", "ins_rf_grr_5",
    "ins_rf_grr_10", "ins_rf_grr_15", "ins_rf_grr_20", "ins_rf_grr_25", "ins_rf_grr_33", "ins_rf_grr_50", "ins_rf_grr_100",
    "INS_KP_AW_1", "INS_KP_AW_3", "INS_KP_AW_5", "INS_KP_AW_7", "INS_KP_AW_10", "INS_KP_AW_15", "INS_KP_AW_20",
    "INS_KP_AW_30", "ins_rs_1", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "" ];

var numberOfChapters = 17;

var chapters = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII'
}

var dailyPrizes = {
	
    "march_xxi_": [
        "A_Evt_March_XXI_Phoenix_Chick",
        "A_Evt_March_XXI_Eggshell_Pavillon",
		"INS_RF_GRR_10",
		"A_Evt_March_XXI_Eggshell_Shrine",
		"INS_UNIT_LM_15",
		"A_Evt_Easter_XX_Phoenix_Anatomy",
		"INS_KP_AW_10",
		"A_Evt_March_XXI_Temple_of_Embers",
		"A_Evt_March_XXI_Phoenix_Water_Mill",
		"A_Evt_March_XXI_Phoenix_Rider",
		"A_Evt_Easter_XX_Phoenix_Lava",
		"A_Evt_Easter_Vii_BurningEgg",
		"INS_UNIT_MC_LR",
		"A_Evt_Golden_Palace",
		"A_Evt_March_XXI_Phoenix_Chick",
		"",
		"",
		"",
		"",
		"",
		"",
		""
    ],

    "february_xxi_": [
        "A_Evt_February_XXI_Elder_Snowman",
        "A_Evt_February_XXI_Yeti_Hot_Spring",
        "INS_RF_GRR_10",
        "A_Evt_Car_XIX_Elven_Wagon",
        "A_Evt_Car_XX_Deers_Golems",
        "A_Evt_Val_Balcony",
        "A_Evt_Car_XX_Halfling_Wagon",
        "A_Evt_February_XXI_Aureate_Willow",
        "A_Evt_Car_XIX_Dancing_People",
        "A_Evt_February_XXI_Dawn_Of_Spring_Shrine",
        "A_Evt_Car_XIX_Beauty_Puppet",
        "A_Evt_Car_XX_Dragon_Puppet",
        "INS_UNIT_LR_10",
        "A_Evt_Car_XIX_Orc_Wagon",
        "A_Evt_February_XXI_Sun_Loop",
        "INS_KP_AW_10",
        "A_Evt_February_XXI_Elder_Snowman",
        "A_Evt_Car_XX_Bubble_Mask",
        "A_Evt_Car_XX_Constructs_Wagon",
        "INS_UNIT_LM_10",
        "A_Evt_Car_XX_Dwarven_Wagon",
        "A_Evt_February_XXI_Lifeblood_Cone"
    ]
}

let eventBanners = {
    "february_xxi_": "https://i.ibb.co/NLRxJ7y/EL-akcia-karneval-2021-banner.png",
    "march_xxi_": "https://i.ibb.co/m0hGLdm/EL-akcia-ve-k-noc-2021-banner.png"
}

let eventVideos = {
    "february_xxi_": "https://www.youtube.com/embed/AS2XrTrF8PM",
    "march_xxi_": ""
}

let eventBetaStarts = { // MM/DD/YYYY
    "february_xxi_": "01/24/2021",
    "march_xxi_": "03/04/2021"
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

var discardBuildings = [
    "A_Evt_Expiring_NegotiationDebuff",
    "A_Evt_Expiring_OrcBuff",
    "A_Evt_Expiring_AWAssistance",
    "may_xxi_"
]

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
    "boosted_sentient_plus_0_quality_2": "T5+0 ",
    "boosted_sentient_plus_1_quality_2": "<img src='https://i.ibb.co/j8C7yjz/boosted-sentient-plus-1-quality-2-mini.png'><br>",
    "boosted_sentient_plus_2_quality_2": "<img src='https://i.ibb.co/1v3vkXS/boosted-sentient-plus-2-quality-2-mini.png'><br>",
    "boosted_sentient_plus_0_quality_3": "T6+0 ",
    "boosted_sentient_plus_1_quality_3": "T6+1 ",
    "boosted_sentient_plus_2_quality_3": "T6+2 ",
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
    "mc_hr": "<img src='https://i.ibb.co/c2x0pfJ/unit-frog.png'><br>",
    "mc_hm": "<img src='https://i.ibb.co/MsCqywh/unit-valorian.png'><br>",
    "tg_hm": "<img src='https://i.ibb.co/q5ky4WS/unit-orc-warrior.png'><br>",
    "tg_hr": "<img src='https://i.ibb.co/Gds0422/unit-orc-strategist.png'><br>",
    "": "",
    "": "",
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
