var prioritiesNonProduction = ["providedCulture", "provided_population"];

var prioritiesProduction = ["money", "supplies", "marble", "steel", "planks", "crystal", "scrolls", "silk", "elixir", "magic_dust", "gems",
    "boosted_plus_0_quality_1", "boosted_plus_0_quality_2", "boosted_plus_0_quality_3", "boosted_plus_1_quality_1", "boosted_plus_2_quality_1", "boosted_plus_1_quality_2", "boosted_plus_2_quality_2", "boosted_plus_1_quality_3", "boosted_plus_2_quality_3", "orcs",
    "mana", "seeds", "sentientmarble", "sentientsteel", "sentientplanks", "sentientcrystal", "sentientscrolls", "sentientsilk", "sentientelixir", "sentientmagic_dust", "sentientgems", "boosted_sentient_plus_0_quality_1", "boosted_sentient_plus_1_quality_1", "boosted_sentient_plus_2_quality_1",
    "boosted_sentient_plus_0_quality_2", "boosted_sentient_plus_1_quality_2", "boosted_sentient_plus_2_quality_2",
    "boosted_sentient_plus_0_quality_3", "boosted_sentient_plus_1_quality_3", "boosted_sentient_plus_2_quality_3",
    "unurium", "ascendedmarble", "ascendedsteel", "ascendedplanks", "ascendedcrystal", "ascendedscrolls", "ascendedsilk",
    "ascendedelixir", "ascendedmagic_dust", "ascendedgems", "boosted_ascended_plus_0_quality_1", "boosted_ascended_plus_1_quality_1",
    "boosted_ascended_plus_2_quality_1", "boosted_ascended_plus_0_quality_2", "boosted_ascended_plus_1_quality_2",
    "boosted_ascended_plus_2_quality_2", "boosted_ascended_plus_0_quality_3", "boosted_ascended_plus_1_quality_3",
    "boosted_ascended_plus_2_quality_3", "work", "unit_1", "unit_2", "unit_3", "unit_4", "unit_5", "tg_lm", "tg_lr", "tg_ma", "tg_hm", "tg_hr",
    "mc_lm", "mc_lr", "mc_ma", "mc_hm", "mc_hr", "knowledge_points", "broken_shards",
    "relic_marble", "relic_steel", "relic_planks", "relic_crystal", "relic_scrolls", "relic_silk", "relic_elixir",
    "relic_magic_dust", "relic_gems", "boosted_relic_plus_0_quality_1", "boosted_relic_plus_1_quality_1", "boosted_relic_plus_2_quality_1",
    "boosted_relic_plus_0_quality_2", "boosted_relic_plus_1_quality_2", "boosted_relic_plus_2_quality_2",
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
    "INS_KP_AW_30", "ins_rs_1", "INS_REV_SQD_10", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "combiningcatalyst", "spire_diplomacy_joker", "spell_pet_food_1", "random",
    //GUEST RACES
    "dwarfs_granite", "dwarfs_copper",
    "fairies_ambrosia", "fairies_soma",
    "orcs_shroomofwisdom", "orcs_loot",
    "gr4_woodghosts", "gr4_windchimes", "gr4_treantsprouts",
    "gr5_arcanealchemists", "gr5_arcanenecromancers", "gr5_necroalchemists",
    "gr6_bread", "gr6_soup", "gr6_jam",
    "gr7_essence",
    "gr8_traps", "gr8_gravegoods",
    "gr9_humanium", "gr9_elvarium",
    "gr10_ideas", "gr10_workforce", "gr10_sculptures", "gr10_constructs", "gr10_crystalballs", "gr10_designs", "gr10_livingpaintings", "gr10_plants", "gr10_elvencollections", "gr10_elvenracemanifest", "gr10_humancollections", "gr10_humanracemanifest",
    "gr11_draftlaws", "gr11_dwarvenpropositions", "gr11_fairypropositions", "gr11_dwarvenamendments", "gr11_fairyamendments", "gr11_statutes", 
    "ch17_elvenarinzero",
    "ch18_fire", "ch18_water", "ch18_wind", "ch18_earth", "ch18_badge",
    "ch19_magic1", "ch19_magic2", "ch19_matter1", "ch19_matter2", "ch19_creatures1", "ch19_creatures2", "ch19_creatures3", "ch19_matter3",
    "ch20_bars", "ch20_strings", "ch20_flutes", "ch20_drums", "ch20_songs",
    "ch21_prey", "ch21_scales", "ch21_oblations3", "ch21_shells", "ch21_dragon", "ch21_oblations2", "ch21_art", "ch21_oblations1", "ch21_oblations4", 
    "", "", "", "", "", "", "", "", "", 
    "", "", "", ];

var numberOfChapters = 21;

var chapters = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII',
    19: 'XIX', 20: 'XX', 21: 'XXI',
}

var chapterNames = {
    1: 'Chapter 1', 2: 'Chapter 2', 3: 'Chapter 3', 4: 'Chapter 4', 5: 'Chapter 5', 6: 'Dwarves', 7: 'Fairies', 
    8: 'Orcs and Goblins', 9: 'Woodelves', 10: 'Sorcerers and Dragons',
    11: 'Halflings', 12: 'Elementals', 13: 'Amuni', 14: 'Constructs', 15: 'Elvenar', 16: 'Embassies', 
    17: 'Traders of Unur', 18: 'Team Spirit', 19: 'Revenge of the Exile', 20: 'The Power of Music',
    21: 'The Vallorian Legend',
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
    "february_xxii_": "https://i.ibb.co/BnmPn0x/EL-akcia-febru-r-2022-banner.png",
    "easter_xxii_": "https://i.ibb.co/ZYkfV9P/EL-akcia-ve-k-noc-2022-banner.png",
    "may_xxii_": "https://i.ibb.co/F33YbJG/EL-akcia-m-j-2022-banner.png",
    "july_xxii_": "https://i.ibb.co/nw1K2Dm/EL-akcia-j-l-2022-banner.png",
    "august_xxii_": "https://i.ibb.co/XV9cdnC/EL-akcia-august-2022-banner.png",
    "autumn_xxii_": "https://i.ibb.co/8Yp9YqV/EL-akcia-september-2022-banner.png",
    "october_xxii_": "https://i.ibb.co/XxLJQ3K/EL-akcia-okt-ber-2022-banner.png",
    "december_xxii_": "https://i.ibb.co/HDK8HvH/EL-akcia-december-2022-banner.png",
    "january_xxiii_": "https://i.ibb.co/jrDGZLf/EL-akcia-janu-r-2023-banner.png",
    "february_xxiii_": "https://i.ibb.co/W6KHd3z/EL-akcia-febru-r-2023-banner.png",
    "easter_xxiii_": "https://i.ibb.co/5sNDjmf/EL-akcia-ve-k-noc-2023-banner.png",
    "may_xxiii_": "https://i.ibb.co/qFJC5f5/EL-akcia-m-j-2023-banner.png",
    "shuffle_garden_xxiii_": "https://i.ibb.co/0mQJGvz/EL-akcia-j-n-2023-banner.png",
    "scroll_aquatic_xxiii_": "https://i.ibb.co/f25F5qm/EL-akcia-j-l-2023-banner.png",
    "theater_zodiac_xxiii_": "https://i.ibb.co/C7brfKY/EL-akcia-jese-2023-banner.png",
    "merge_dwarvengame_xxiii_": "https://i.ibb.co/PGqwyR8/EL-akcia-september-2023-banner.png",
    "tile_mistyforest_xxiii_": "https://i.ibb.co/dG7D0yQ/EL-akcia-halloween-2023-banner.png",
    "shuffle_postal_xxiii_": "https://i.ibb.co/k2mdTqN/EL-akcia-zima-2023-banner.png",
    "scroll_sorcerers_xxiv_": "https://i.ibb.co/kJZD0G5/EL-akcia-janu-r-2024-banner.png",
    "theater_easter_xxiv_": "https://i.ibb.co/JRKBZPG/EL-akcia-ve-k-noc-2024-banner.jpg",
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
    "february_xxii_": "https://www.youtube.com/embed/uVduxQ4yhdo;https://www.youtube.com/embed/yXV73a8pla4",
    "easter_xxii_": "https://www.youtube.com/embed/tfQa9VOXeRA",
    "may_xxii_": "https://www.youtube.com/embed/AFkAsMvABP0",
    "july_xxii_": "https://www.youtube.com/embed/GgjFAgr-pLU;https://www.youtube.com/embed/zqgJUn2kRNA",
    "august_xxii_": "https://www.youtube.com/embed/xxgTpJJw314",
    "autumn_xxii_": "https://www.youtube.com/embed/vlPzSeNLfuQ",
    "february_xxiii_": "https://www.youtube.com/embed/mYHFFbfLXtA;https://www.youtube.com/embed/Ks0-x02arzw",
    "tile_mistyforest_xxiii_": "https://www.youtube.com/embed/UAZJKjasaBI",
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
    "easter_xxii_": "03/17/2022",
    "may_xxii_": "04/14/2022",
    "july_xxii_": "05/25/2022",
    "august_xxii_": "07/07/2022",
    "autumn_xxii_": "08/18/2022",
    "october_xxii_": "09/29/2022",
    "december_xxii_": "11/11/2022",
    "january_xxiii_": "01/03/2023",
    "february_xxiii_": "02/02/2023",
    "easter_xxiii_": "03/15/2023",
    "may_xxiii_": "04/18/2023",
    "shuffle_garden_xxiii_": "05/25/2023",
    "scroll_aquatic_xxiii_": "06/26/2023",
    "theater_zodiac_xxiii_": "08/08/2023",
    "merge_dwarvengame_xxiii_": "09/07/2023",
    "tile_mistyforest_xxiii_": "10/02/2023",
    "shuffle_postal_xxiii_": "11/13/2023",
    "scroll_sorcerers_xxiv_": "12/18/2023",
    "theater_easter_xxiv_": "02/14/2024",
}

let questsLinks = {
    "december_xxi_": "bit.ly/Quests-WinterMagic2021",
    "january_xxii_": "bit.ly/ForbiddenRuins2022",
    "february_xxii_": "bit.ly/TheBuriedCity2022",
    "easter_xxii_": "bit.ly/DawnOfThePhoenix2022",
    "may_xxii_": "bit.ly/NaturallyAmazing2022",
    "july_xxii_": "bit.ly/LuckyLittleFin2022",
    "august_xxii_": "bit.ly/GatewayIntoThePast2022",
    "autumn_xxii_": "bit.ly/AutumnZodiac2022",
    "october_xxii_": "bit.ly/MischievousTherapy2022",
    "december_xxii_": "bit.ly/WinterMagic2022",
    "january_xxiii_": "bit.ly/TheSecretsOfAlchemy2023",
    "february_xxiii_": "bit.ly/TheGreatExcavation2023",
    "easter_xxiii_": "bit.ly/RealmOfThePhoenix2023",
    "may_xxiii_": "bit.ly/MamaJuulsFusionFeast2023",
    "shuffle_garden_xxiii_": "bit.ly/FloralAwakening2023",
    "scroll_aquatic_xxiii_": "bit.ly/AquaSplendor2023",
    "theater_zodiac_xxiii_": "bit.ly/AutumnZodiac2023",
    "merge_dwarvengame_xxiii_": "bit.ly/GatewayIntoThePast2023",
    "tile_mistyforest_xxiii_": "bit.ly/WhispersOfTheSoul2023",
    "shuffle_postal_xxiii_": "bit.ly/WinterMagic2023",
    "scroll_sorcerers_xxiv_": "bit.ly/TournamentOfMagic2024",
    "theater_easter_xxiv_": "bit.ly/BlessingOfThePhoenix2024",
}

let eventsDurations = {
    "december_xxi_": 30,
    "january_xxii_": 22,
    "february_xxii_": 22,
    "easter_xxii_": 22,
    "may_xxii_": 22,
    "july_xxii_": 22,
    "august_xxii_": 22,
    "autumn_xxii_": 22,
    "october_xxii_": 22,
    "december_xxii_": 30,
    "january_xxiii_": 22,
    "february_xxiii_": 19,
    "easter_xxiii_": 22,
    "may_xxiii_": 22,
    "shuffle_garden_xxiii_": 20,
    "scroll_aquatic_xxiii_": 19,
    "theater_zodiac_xxiii_": 22,
    "merge_dwarvengame_xxiii_": 20,
    "tile_mistyforest_xxiii_": 17,
    "shuffle_postal_xxiii_": 32,
    "scroll_sorcerers_xxiv_": 22,
    "theater_easter_xxiv_": 26,
}

let evoUpgradeCosts = {
    "A_Evt_Evo_February_XXI_Everblossom_Sleigh" : "ins_evo_february_xxi",
    "A_Evt_Evo_Autumn_XIX_Bear_Brown" : "ins_evo_autumn_xix",
    "A_Evt_Evo_Autumn_XIX_Bear_Ice" : "ins_evo_autumn_xix",
    "A_Evt_Evo_Winter_XIX_Gingerbread_Mansion" : "ins_evo_winter_xix",
    "A_Evt_Evo_Summer_XIX_Stonehenge" : "ins_evo_summer_xix",
    "A_Evt_Evo_September_XX_Moon_Bear" : "ins_evo_september_xx",
    "A_Evt_Evo_October_XX_Witches_Hut" : "ins_evo_october_xx",
    "A_Evt_Evo_May_XX_May_Tree" : "ins_evo_may_xx",
    "A_Evt_Evo_March_XXI_Ashen_Phoenix" : "ins_evo_march_xxi",
    "A_Evt_Evo_MM_XIX_WaterTower" : "ins_evo_mm_xix",
    "A_Evt_Evo_July_XX_Wise_Golem" : "ins_evo_july_xx",
    "A_Evt_Evo_Easter_XX_Phoenix_Coldfire" : "ins_evo_easter_xx",
    "A_Evt_Evo_Easter_XIX_Phoenix_Yellow" : "ins_evo_easter_xix",
    "A_Evt_Evo_Easter_XIX_Phoenix_Red" : "ins_evo_easter_xix",
    "A_Evt_Evo_Easter_XIX_Phoenix_Blue" : "ins_evo_easter_xix",
    "A_Evt_Evo_December_XX_Watchful_Winter_Owl" : "ins_evo_december_xx",
    "A_Evt_Evo_Car_XX_Burukbrak_Gaelagil" : "ins_evo_carnival_xx",
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : "ins_evo_autumn_xix",
    "A_Evt_Evo_May_XXI_Queen_Fairys_Retreat": "ins_evo_may_xxi",
    "A_Evt_Evo_July_XXI_Triumph_of_Tides": "ins_evo_july_xxi",
    "A_Evt_Evo_September_XXI_Red_Panda_Master": "ins_evo_september_xxi",
    "A_Evt_Evo_October_XXI_Witch_Summoning_Circle": "ins_evo_october_xxi",
    "A_Evt_Evo_December_XXI_Boblins_Express_Service": "ins_evo_december_xxi",
    "A_Evt_Evo_February_XXII_Echoes_of_the_Forgotten": "ins_evo_february_xxii",
    "A_Evt_Evo_Easter_XXII_Twilight_Phoenix": "ins_evo_easter_xxii",
    "A_Evt_Evo_May_XXII_Flower_Goblin_Epiphany": "ins_evo_may_xxii",
    "A_Evt_Evo_July_XXII_Glory_of_the_Nimble": "ins_evo_july_xxii",
    "A_Evt_Evo_Autumn_XXII_WittyCoon": "ins_evo_september_xxii",
    "A_Evt_Evo_October_XXII_Witch_Doctor": "ins_evo_october_xxii",
    "A_Evt_Evo_December_XXII_Chromafrost_Glacier": "ins_evo_december_xxii",
    "A_Evt_Evo_January_XXIII_Steam_Golem": "ins_evo_january_xxiii",
    "A_Evt_Evo_Easter_XXIII_Astral_Phoenix": "ins_evo_easter_xxiii",
    "A_Evt_Evo_May_XXIII_Juuls_Traveling_Kitchen": "ins_evo_may_xxiii",
    "A_Evt_Evo_Shuffle_Garden_XXIII_Dragonheart_Estate": "ins_evo_shuffle_garden_xxiii",
    "A_Evt_Evo_Theater_Zodiac_XXIII_Tinlug_The_Star_Serpent": "ins_evo_theater_zodiac_xxiii",
    "A_Evt_Evo_Merge_Dwarvengame_XXIII_Solunar_Nexus": "ins_evo_merge_dwarvengame_xxiii",
    "A_Evt_Evo_Set_Tile_Mistyforest_XXIII_Soul_Lab": "ins_evo_tile_mistyforest_xxiii",
    "A_Evt_Evo_Shuffle_Postal_XXIII_Hearthbloom": "ins_evo_shuffle_postal_xxiii",
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Arcane_Arena": "ins_evo_scroll_sorcerers_xxiv",
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Chthonic_Circle": "ins_evo_scroll_sorcerers_xxiv",
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Potionmakers_Pedestal": "ins_evo_scroll_sorcerers_xxiv",
    "A_Evt_Evo_Theater_Easter_XXIV_Verdant_Phoenix": "ins_evo_easter_xxiv",
}

var artifacts = {
    "ins_evo_autumn_xix": {"name": "Bear Artifact", "img": "https://i.ibb.co/52sxhRP/ins-evo-autumn-xix.png"},
    "ins_evo_carnival_xx": {"name": "Valentines Artifact", "img": "https://i.ibb.co/MkPczQj/ins-evo-carnival-xx.png"},
    "ins_evo_december_xx": {"name": "Watchful Winter Owl Artifact", "img": "https://i.ibb.co/xzmsXPn/ins-evo-december-xx.png"},
    "ins_evo_december_xxi": {"name": "Boblins Express Service Artifact", "img": "https://i.ibb.co/MBqGF5S/ins-evo-december-xxi.png"},
    "ins_evo_december_xxii": {"name": "Chromafrost Glacier Artifact", "img": "https://i.ibb.co/d2BgjG6/ins-evo-december-xxii.png"},
    "ins_evo_easter_xix": {"name": "Phoenix Artifact", "img": "https://i.ibb.co/yBzMxZM/ins-evo-easter-xix.png"},
    "ins_evo_easter_xx": {"name": "Coldfire Phoenix Artifact", "img": "https://i.ibb.co/VjqKtB9/ins-evo-easter-xx.png"},
    "ins_evo_easter_xxii": {"name": "Twilight Phoenix Artifact", "img": "https://i.ibb.co/ccBDpdC/ins-evo-easter-xxii.png"},
    "ins_evo_easter_xxiii": {"name": "Astral Phoenix Artifact", "img": "https://i.ibb.co/ZmHJvzH/ins-evo-easter-xxiii.png"},
    "ins_evo_february_xxi": {"name": "Carnival Artifact", "img": "https://i.ibb.co/K7DJBCY/ins-evo-february-xxi.png"},
    "ins_evo_february_xxii": {"name": "Echoes of the Forgotten Artifact", "img": "https://i.ibb.co/vvBCWH5/ins-evo-february-xxii.png"},
    "ins_evo_january_xxiii": {"name": "Steam Golem Artifact", "img": "https://i.ibb.co/K2YMmdr/ins-evo-january-xxiii.png"},
    "ins_evo_july_xx": {"name": "Wise Golem Artifact", "img": "https://i.ibb.co/QCMQYfh/ins-evo-july-xx.png"},
    "ins_evo_july_xxi": {"name": "Triumph of the Tides Artifact", "img": "https://i.ibb.co/thTzN43/ins-evo-july-xxi.png"},
    "ins_evo_july_xxii": {"name": "Glory of the Nimble Artifact", "img": "https://i.ibb.co/Y3TJVXG/ins-evo-july-xxii.png"},
    "ins_evo_march_xxi": {"name": "Ashen Phoenix Artifact", "img": "https://i.ibb.co/k1t9pJH/ins-evo-march-xxi.png"},
    "ins_evo_may_xx": {"name": "Festive May Tree Artifact", "img": "https://i.ibb.co/pvzXN9G/ins-evo-may-xx.png"},
    "ins_evo_may_xxi": {"name": "Queen Faeries Retreat Artifact", "img": "https://i.ibb.co/5njDyYx/ins-evo-may-xxi.png"},
    "ins_evo_may_xxii": {"name": "Flower Goblin Epiphany Artifact", "img": "https://i.ibb.co/kJJ6YQS/ins-evo-may-xxii.png"},
    "ins_evo_may_xxiii": {"name": "Juul's Traveling Kitchen Artifact", "img": "https://i.ibb.co/FWz3G11/ins-evo-may-xxiii.png"},
    "ins_evo_merge_dwarvengame_xxiii": {"name": "Solunar Nexus Artifact", "img": "https://i.ibb.co/bXKjpqT/ins-evo-merge-dwarvengame-xxiii.png"},
    "ins_evo_mm_xix": {"name": "Mermaid Artifact", "img": "https://i.ibb.co/Pxssdvy/ins-evo-mm-xix.png"},
    "ins_evo_october_xx": {"name": "Witch's Hut Artifact", "img": "https://i.ibb.co/94ZLMCH/ins-evo-october-xx.png"},
    "ins_evo_october_xxi": {"name": "Witch Summoning Circle Artifact", "img": "https://i.ibb.co/whPjTTV/ins-evo-october-xxi.png"},
    "ins_evo_october_xxii": {"name": "Witch Doctor Artifact", "img": "https://i.ibb.co/Hn0WSgj/ins-evo-october-xxii.png"},
    "ins_evo_scroll_sorcerers_xxiv": {"name": "Sorcerer Trials Artifact", "img": "https://i.ibb.co/nBvzXL0/ins-evo-scroll-sorcerers-xxiv.png"},
    "ins_evo_september_xx": {"name": "Moon Bear Artifact", "img": "https://i.ibb.co/2tndbXW/ins-evo-september-xx.png"},
    "ins_evo_september_xxi": {"name": "Red Panda Master Artifact", "img": "https://i.ibb.co/Fnpzt58/ins-evo-september-xxi.png"},
    "ins_evo_september_xxii": {"name": "Witty Raccoon Artifact", "img": "https://i.ibb.co/hX3Qm2Z/ins-evo-september-xxii.png"},
    "ins_evo_shuffle_garden_xxiii": {"name": "Dragonheart Estate Artifact", "img": "https://i.ibb.co/3FJbbwB/ins-evo-shuffle-garden-xxiii.png"},
    "ins_evo_shuffle_postal_xxiii": {"name": "Hearthbloom Artifact", "img": "https://i.ibb.co/wsddcTq/ins-evo-shuffle-postal-xxiii.png"},
    "ins_evo_summer_xix": {"name": "Stonehenge Artifact", "img": "https://i.ibb.co/2Z2bBcR/ins-evo-summer-xix.png"},
    "ins_evo_theater_zodiac_xxiii": {"name": "Tinlug, The Star Serpent Artifact", "img": "https://i.ibb.co/DkdYBD4/ins-evo-theater-zodiac-xxiii.png"},
    "ins_evo_tile_mistyforest_xxiii": {"name": "Soul Lab Artifact", "img": "https://i.ibb.co/556Xv0F/ins-evo-tile-mistyforest-xxiii.png"},
    "ins_evo_winter_xix": {"name": "Gingerbread Artifact", "img": "https://i.ibb.co/pwqRCHh/ins-evo-winter-xix.png"},
    "ins_evo_easter_xxiv": {"name": "Verdant Phoenix Artifact", "img": "https://i.ibb.co/xqvS2q4/ins-evo-easter-xxiv.png"},
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
    "A_Evt_Evo_September_XXI_Red_Panda_Master" : `<img src="https://i.ibb.co/hYXr3HW/vision-vapor-small.png">`,
    "A_Evt_Evo_Easter_XXII_Twilight_Phoenix" : `<img src="https://i.ibb.co/Yy21rpT/health-points.png">`,
    "A_Evt_Evo_Autumn_XXII_WittyCoon" : `<img src="https://i.ibb.co/s5zgfs4/goods-production.png">`,
    "A_Evt_Evo_Easter_XXIII_Astral_Phoenix" : `<img src="https://i.ibb.co/s5zgfs4/goods-production.png">`,
    "A_Evt_Evo_Theater_Zodiac_XXIII_Tinlug_The_Star_Serpent" : `<img src="https://i.ibb.co/WnDfq7P/combining-catalyst.png">`,
    "A_Evt_Evo_Theater_Easter_XXIV_Verdant_Phoenix": `<img src="https://i.ibb.co/vjQD2kX/season-xp-b15fa556d9a49df8ccdbc3fe222f0feb.png">`,
}

var allowedFeedingMultiplicators = {
    "completedProvinces":"completed provinces",
}

var iconsImages = {
    "damage_boost":"https://i.ibb.co/3TG2xv7/unit-attack-enhance.png",
    "event_currency_1":"https://i.ibb.co/cYv1Scg/EL-akcia-ve-k-noc-2019-event-currency.png",
    "aw_hitpoints":"https://i.ibb.co/Yy21rpT/health-points.png",
    "trader_small":"https://i.ibb.co/qjRgfSK/trader-small.png",
    "time_boosted":"https://i.ibb.co/kQhsyfn/time-boosted.png",
    "training_queue_slots":"https://i.ibb.co/V30rvS3/training-queue-slots.png",
    "barrack_small_boosted":"https://i.ibb.co/zVZk0Hy/barrack-small-boosted.png",
    "mana_decay_reduction":"https://i.ibb.co/mqPfvMr/decay-mana.png",
    "seeds_decay_reduction":"https://i.ibb.co/6F4H5Wf/decay-seeds.png",
    "unurium_decay_reduction":"https://i.ibb.co/6WLCvRV/decay-unurium.png",
    "mana":"https://i.ibb.co/VxCCGww/mana-increase.png",
    "orcs":"https://i.ibb.co/V22qvDZ/orcs-increase-small.png",
    "goods_standard_basic":"https://i.ibb.co/f1Fm1Tc/goods-standard-basic.png",
    "goods_standard_refined":"https://i.ibb.co/bzCh4vp/goods-standard-precious.png",
    "goods_standard_precious":"https://i.ibb.co/G0N8gT6/goods-standard-refined.png",
    "money":"https://image.ibb.co/g5ErZq/money.png",
    "spell_good_production_boost_bonus":"https://i.ibb.co/hgjNJXx/spell-good-production-boost-bonus.png",
    "spell_production_boost_bonus":"https://i.ibb.co/cFTnJH1/spell-production-boost-bonus.png",
    "spell_neighborly_help_boost_bonus":"https://i.ibb.co/SNCHdC3/spell-neighborly-help-boost-bonus.png",
}

var iconsTitles = {
    "damage_boost":"Damage Boost",
    "event_currency_1":"Event Currency",
    "aw_hitpoints":"Troops Health",
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
    "merge_dwarvengame": "Dwarven Citadel",
    "tile_amuni_xxiii": "Ancient Promise",
    "scroll_aquatic_xxiii": "Seapectecular Aquatics",
    "tile_mistyforest_xxiii": "Soul Experiments",
}

var discardBuildings = [
    "A_Evt_Expiring_NegotiationDebuff",
    "A_Evt_Expiring_OrcBuff",
    "A_Evt_Expiring_AWAssistance",
]

var eventsInfoIcons = {
    "december_xxii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "january_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "february_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "easter_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "may_xxiii_": {"img_width": "28", "img_style": "margin-left: -2px; margin-right: 11px; position: relative;"},
    "shuffle_garden_xxiii_": {"img_width": "28", "img_style": "margin-left: -2px; margin-right: 11px; position: relative;"},
    "scroll_aquatic_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 11px; position: relative;"},
    "theater_zodiac_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 11px; position: relative;"},
    "merge_dwarvengame_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 11px; position: relative;"},
    "tile_mistyforest_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 11px; position: relative;"},
    "shuffle_postal_xxiii_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "scroll_sorcerers_xxiv_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
    "theater_easter_xxiv_": {"img_width": "28", "img_style": "margin-left: -1px; margin-right: 10px; position: relative;"},
}

var featureFlagsInitialEvents = {
    "info_tab": "december_xxii_",
}

var baseTabsEvents = [
    {"id":"info_panel_div", "name":"Info", "img":"various", "img_width":"45", "img_style":"margin-left: -10px; margin-right: 2px; position: relative;", "href":"#info", "onclick":"info"},
    {"id":"calendar_top_div", "name":"Calendar", "img":"images/general/calendar.png", "img_width":"45", "img_style":"margin-left: -10px; margin-right: 2px; position: relative;", "href":"#calendar", "onclick":"calendar"},
    {"id":"quests_left_panel_div", "name":"Quests", "img":"images/general/event_guide.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; position: relative;", "href":"#quests", "onclick":"quests"},
] 

var additionalTabsEvents = {
    "theater_easter_xxiv_": [
        {"id":"chests", "name":"Chests", "img":"https://i.ibb.co/w7FdnKm/chest-8.png", "img_width":"26", "img_style":"margin-left: 0px; margin-right: 10px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#chests", "file":"chests.html", "releaseDate":"02/15/2024"},
    ],
    "scroll_sorcerers_xxiv_": [
        {"id":"beacons", "name":"Beacons", "img":"https://i.ibb.co/rv5vH4Z/chest8.png", "img_width":"29", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#beacons", "file":"beacons.html", "releaseDate":"12/18/2023"},
    ],
    "tile_mistyforest_xxiii_": [
        {"id":"toolsGuide", "name":"Tools", "img":"https://i.ibb.co/NWtcHK0/tool-column.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#tools", "file":"tools.html"},
        {"id":"strategies", "name":"Strategies", "img":"https://i.ibb.co/FK9Wd7N/event-payback.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 12px; margin-bottom: 3px; position: relative;", "href":"#strategies", "file":"strategies.html"},
        {"id":"playground", "name":"Playground", "img":"https://i.ibb.co/CWpxB38/tab-playground.png", "img_width":"31", "img_style":"margin-left: -1px; margin-right: 9px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#playground", "file":"playground.html", "releaseDate":"10/16/2023"},
    ],
    "merge_dwarvengame_xxiii_": [
        {"id":"board", "name":"Board", "img":"https://i.ibb.co/5vGFxky/a4.png", "img_width":"29", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#board", "file":"board.html", "releaseDate":"09/06/2023"},
        {"id":"trades", "name":"Trades", "img":"https://i.ibb.co/ctjdKNc/EL-akcia-august-2022-chest-8.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#trades", "file":"trades.html", "releaseDate":"09/09/2023"},
        {"id":"pieces", "name":"Pieces", "img":"https://i.ibb.co/ZWRchkQ/EL-akcia-august-2022-piece-c3.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#pieces", "file":"pieces.html", "releaseDate":"09/06/2023"},
        {"id":"cups", "name":"Cups", "img":"https://i.ibb.co/vVMrWDx/EL-akcia-august-2022-cup-red.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#cups", "file":"cups.html", "releaseDate":"09/06/2023"},
        {"id":"cards", "name":"Cards", "img":"https://i.ibb.co/6YyLVtV/EL-akcia-august-2022-event-currency-2-big.png", "img_width":"35", "img_style":"margin-left: -5px; margin-right: 7px; position: relative;", "href":"#cards", "file":"cards.html", "releaseDate":"09/06/2023"},
    ],
    "theater_zodiac_xxiii_": [
        {"id":"spheres", "name":"Spheres", "img":"https://i.ibb.co/80wYmwn/EL-akcia-september-2022-chest7.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#spheres", "file":"spheres.html", "releaseDate":"08/10/2023"},
    ],
    "scroll_aquatic_xxiii_": [
        {"id":"hoops", "name":"Hoops", "img":"https://i.ibb.co/bzfprNK/EL-scroll-aquatic-truhla-6.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#hoops", "file":"hoops.html", "releaseDate":"06/26/2023"},
    ],
    "may_xxiii_": [
        {"id":"kitchen", "name":"Kitchen", "img":"https://i.ibb.co/YfB76Sx/kitchen.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#kitchen", "file":"kitchen.html", "releaseDate":"04/18/2023"},
        {"id":"offers", "name":"Offers", "img":"https://i.ibb.co/9WV3mdS/offers.png", "img_width":"28", "img_style":"margin-left: 1px; margin-right: 8px; position: relative;", "href":"#offers", "file":"offers.html", "releaseDate":"04/18/2023"},
        {"id":"dishes", "name":"Dishes", "img":"https://i.ibb.co/8bDBzxp/dishes.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#dishes", "file":"dishes.html", "releaseDate":"04/18/2023"},
        {"id":"stockpiles", "name":"Stockpiles", "img":"https://i.ibb.co/ypkVm0h/stockpiles.png", "img_width":"27", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#stockpiles", "file":"stockpiles.html", "releaseDate":"04/18/2023"},
        {"id":"loot", "name":"Loot", "img":"https://i.ibb.co/848np1q/baskets.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#loot", "file":"loot.html", "releaseDate":"04/18/2023"},
    ],
    "easter_xxiii_": [
        {"id":"chests", "name":"Chests", "img":"https://i.ibb.co/w7FdnKm/chest-8.png", "img_width":"26", "img_style":"margin-left: 0px; margin-right: 10px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#chests", "file":"chests.html"},
    ],
    "february_xxiii_": [
        {"id":"toolsGuide", "name":"Tools", "img":"https://i.ibb.co/D70H5y5/EL-akcia-febru-r-2022-shovel.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#tools", "file":"tools.html", "releaseDate":"02/02/2023"},
        {"id":"strategies", "name":"Strategies", "img":"https://i.ibb.co/W2RtBts/EL-akcia-febru-r-2022-payback.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#strategies", "file":"strategies.html", "releaseDate":"02/02/2023"},
        {"id":"playground", "name":"Playground", "img":"https://i.ibb.co/nmkBMxB/february-xxiii-chest5.png", "img_width":"29", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#playground", "file":"playground.html", "releaseDate":"02/19/2023"},
    ],
    "january_xxiii_": [
        {"id":"beacons", "name":"Beacons", "img":"https://i.ibb.co/VVSyYpP/january-xxiii-beacon3.png", "img_width":"29", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; margin-top: -4px; position: relative;", "href":"#beacons", "file":"beacons.html"},
    ],
    "october_xxii_": [
        {"id":"tools", "name":"Tools", "img":"https://i.ibb.co/NWtcHK0/tool-column.png", "img_width":"28", "img_style":"margin-left: 0px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#tools", "file":"tools.html", "releaseDate":"10/01/2022"},
        {"id":"strategies", "name":"Strategies", "img":"https://i.ibb.co/FK9Wd7N/event-payback.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#strategies", "file":"strategies.html", "releaseDate":"10/03/2022"},
    ],
    "autumn_xxii_": [
        {"id":"spheres", "name":"Spheres", "img":"https://i.ibb.co/80wYmwn/EL-akcia-september-2022-chest7.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; margin-bottom: 3px; position: relative;", "href":"#spheres", "file":"spheres.html"},
    ],
    "august_xxii_": [
        {"id":"board", "name":"Board", "img":"https://i.ibb.co/7v3HmnM/EL-akcia-august-2022-piece-a4.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#board", "file":"board.html"},
        {"id":"trades", "name":"Trades", "img":"https://i.ibb.co/ctjdKNc/EL-akcia-august-2022-chest-8.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#trades", "file":"trades.html"},
        {"id":"pieces", "name":"Pieces", "img":"https://i.ibb.co/ZWRchkQ/EL-akcia-august-2022-piece-c3.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#pieces", "file":"pieces.html"},
        {"id":"cups", "name":"Cups", "img":"https://i.ibb.co/vVMrWDx/EL-akcia-august-2022-cup-red.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#cups", "file":"cups.html"},
        {"id":"cards", "name":"Cards", "img":"https://i.ibb.co/6YyLVtV/EL-akcia-august-2022-event-currency-2-big.png", "img_width":"35", "img_style":"margin-left: -5px; margin-right: 7px; position: relative;", "href":"#cards", "file":"cards.html"},
    ],
    "july_xxii_": [
        {"id":"hoops", "name":"Hoops", "img":"https://i.ibb.co/bzfprNK/EL-scroll-aquatic-truhla-6.png", "img_width":"28", "img_style":"margin-left: -1px; margin-right: 10px; position: relative;", "href":"#hoops", "file":"hoops.html"},
    ],
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
    {"type": "buildings&events", "value": "unurium", "text": "Unurium per square per 1h"},
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
    {"value": "unurium", "text": "Unurium"},
]

var flexibleRewardsIcons = {
    "frog_unurium_DP":"https://i.ibb.co/6WJvjQD/frog-unurium.png",
    "frog_mana":"https://i.ibb.co/0F5pTWq/frog-mana.png",
    "frog_runeshards2":"https://i.ibb.co/rc3ZcDm/frog-runes.png",
    "frog_runeshards1":"https://i.ibb.co/rc3ZcDm/frog-runes.png",
    "frog_grr_5":"https://i.ibb.co/JHqqq6j/frog-grr.png",
    "frog_default1":"https://i.ibb.co/VD89QDJ/frog-default1.png",
    "frog_runeshards3":"https://i.ibb.co/rc3ZcDm/frog-runes.png",
}

var rskIcons = {
    "rsk_evo": "https://i.ibb.co/1QVnfrx/rsk-evo.png",
    "rsk_misc": "https://i.ibb.co/5rzQfnT/rsk-misc.png",
    "rsk_set": "https://i.ibb.co/Sd261b7/rsk-set.png",
    "rsk_shards": "https://i.ibb.co/YBJ01Wq/rsk-shards.png",
    "rsk_spell": "https://i.ibb.co/jzBW1qr/rsk-spell.png",
    "rsk_summoning": "https://i.ibb.co/1L293Rs/rsk-summoning.png",
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
    20: "https://i.ibb.co/Vv6rC8r/ch20.png title='The Power of Music'",
    21: "https://i.ibb.co/XCp7d47/ch21.png title='The Vallorian Legend'",
}

var grIds = {
    "dwarves": "ch6",
    "fairies": "ch7",
    "orcs": "ch8",
    "woodelves": "ch9",
    "sorcerers": "ch10",
    "halflings": "ch11",
    "elementals": "ch12",
    "amuni": "ch13",
    "constructs": "ch14",
    "elvenar": "ch15",
    "embassies": "ch16",
    "tradersofunur": "ch17",
    "teamspirit": "ch18",
    "revengeofexile": "ch19",
    "powerofmusic": "ch20",
    "vallorianlegend": "ch21",
}

var newEventSign = {
    "active": false,
    "img": "https://i.ibb.co/n0KBPgt/new-sign.png",
}

var navbarNew = {
    "active": false,
    "img": {
        "src": "https://i.ibb.co/n0KBPgt/new-sign.png",
        "style": "width: 50px;",
    }
}

var webIconChange = {
    "active": false,
    "img": "https://i.ibb.co/9hJqb4d/rainbow-heart.png",
}

var moreNavbarContent = [
    // FELLOWSHIP ADVENTURES
    {   
        "className":    "dropdown-item text-dark", 
        "href":         "fellowship-adventures.html", 
        "id":           "navitem_fellowship_adventures", 
        "innerHTML":    `Fellowship Adventures`,
        "img":          {
            "src":      "https://i.ibb.co/8mQV9TJ/fellowship-adventures-waypoint.png",
            "style":    "width: 24px; margin-right: 6px; margin-bottom: 4px;",
        }
    },
    // SEASONS
    {
        "className":    "dropdown-item text-dark",
        "href":         "seasons.html",
        "id":           "navitem_seasons",
        "innerHTML":    "Seasons",
        "img": {
            "src":      "https://i.ibb.co/87MNrBB/season-pass.png",
            "style":    "width: 25px; margin-right: 6px; margin-bottom: 1px; margin-left: 0px;",
        }
    },
    // TOMES
    {
        "className":    "dropdown-item text-dark",
        "href":         "tomes.html",
        "id":           "navitem_tomes",
        "innerHTML":    "Tomes",
        "img": {
            "src":      "https://i.ibb.co/kMLnsDm/rsk-evo.png",
            "style":    "width: 25px; margin-right: 6px; margin-bottom: 1px; margin-left: 0px;",
        }
    },
    // COMMUNITY KNOWLEDGE
    /*{
        "className":    "dropdown-item text-dark",
        "href":         "community-knowledge.html",
        "id":           "navitem_community_knowledge",
        "innerHTML":    "Community Knowledge",
        "img": {
            "src":      "https://i.ibb.co/TKwn0Cz/forum-scroll.png",
            "style":    "width: 25px; margin-right: 5px; margin-bottom: 1px; margin-left: 1px;",
        }
    },*/
    /*{
        "className":    "dropdown-item text-dark",
        "href":         "tournaments.html",
        "id":           "navitem_tournaments",
        "innerHTML":    "Tournaments",
        "img": {
            "src":      "https://i.ibb.co/k42MQs2/tournament-icon.png",
            "style":    "width: 25px; margin-right: 5px; margin-bottom: 4px; margin-left: 0px;",
        }
    },*/
    // ---------------
    // CONTACT
    {   
        "className":    "dropdown-item text-dark", 
        "href":         "contact.html", 
        "id":           "navitem_contact", 
        "innerHTML":    `Contact`
    },
    // ABOUT ME
    {   
        "className":    "dropdown-item text-dark", 
        "href":         "about-me.html", 
        "id":           "navitem_about_me", 
        "innerHTML":    `About Me`
    },
    // DONATE
    {   
        "className":    "dropdown-item text-dark", 
        "href":         "donate-create.html", 
        "id":           "navitem_donate", 
        "innerHTML":    `Donate`
    },
    // PRIVACY POLICY
    {   
        "className":    "dropdown-item text-dark", 
        "href":         "privacyPolicy.html", 
        "id":           "navitem_privacyPolicy", 
        "innerHTML":    `Privacy Policy`
    },
]
