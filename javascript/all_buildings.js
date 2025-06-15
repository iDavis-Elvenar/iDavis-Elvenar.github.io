// Copyright 2021, iDavis, All rights reserved.

var selectedEvoStages = {
    "A_Evt_Evo_February_XXI_Everblossom_Sleigh" : 9,
    "A_Evt_Evo_Autumn_XIX_Bear_Brown" : 9,
    "A_Evt_Evo_Autumn_XIX_Bear_Ice" : 9,
    "A_Evt_Evo_Winter_XIX_Gingerbread_Mansion" : 9,
    "A_Evt_Evo_Summer_XIX_Stonehenge" : 9,
    "A_Evt_Evo_September_XX_Moon_Bear" : 9,
    "A_Evt_Evo_October_XX_Witches_Hut" : 9,
    "A_Evt_Evo_May_XX_May_Tree" : 9,
    "A_Evt_Evo_March_XXI_Ashen_Phoenix" : 9,
    "A_Evt_Evo_MM_XIX_WaterTower" : 9,
    "A_Evt_Evo_July_XX_Wise_Golem" : 9,
    "A_Evt_Evo_Easter_XX_Phoenix_Coldfire" : 9,
    "A_Evt_Evo_Easter_XIX_Phoenix_Yellow" : 9,
    "A_Evt_Evo_Easter_XIX_Phoenix_Red" : 9,
    "A_Evt_Evo_Easter_XIX_Phoenix_Blue" : 9,
    "A_Evt_Evo_December_XX_Watchful_Winter_Owl" : 9,
    "A_Evt_Evo_Car_XX_Burukbrak_Gaelagil" : 9,
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : 9,
    "A_Evt_Evo_May_XXI_Queen_Fairys_Retreat": 9,
    "A_Evt_Evo_July_XXI_Triumph_of_Tides": 9,
    "A_Evt_Evo_September_XXI_Red_Panda_Master": 9,
    "A_Evt_Evo_October_XXI_Witch_Summoning_Circle": 9,
    "A_Evt_Evo_December_XXI_Boblins_Express_Service": 9,
    "A_Evt_Evo_February_XXII_Echoes_of_the_Forgotten": 9,
    "A_Evt_Evo_Easter_XXII_Twilight_Phoenix": 9,
    "A_Evt_Evo_May_XXII_Flower_Goblin_Epiphany": 9,
    "A_Evt_Evo_July_XXII_Glory_of_the_Nimble": 9,
    "A_Evt_Evo_Autumn_XXII_WittyCoon": 9,
    "A_Evt_Evo_October_XXII_Witch_Doctor": 9,
    "A_Evt_Evo_December_XXII_Chromafrost_Glacier": 9,
    "A_Evt_Evo_January_XXIII_Steam_Golem": 9,
    "A_Evt_Evo_Easter_XXIII_Astral_Phoenix": 9,
    "A_Evt_Evo_May_XXIII_Juuls_Traveling_Kitchen": 9,
    "A_Evt_Evo_Shuffle_Garden_XXIII_Dragonheart_Estate": 9,
    "A_Evt_Evo_Theater_Zodiac_XXIII_Tinlug_The_Star_Serpent": 9,
    "A_Evt_Evo_Merge_Dwarvengame_XXIII_Solunar_Nexus": 9,
    "A_Evt_Evo_Set_Tile_Mistyforest_XXIII_Soul_Lab": 4,
    "A_Evt_Evo_Shuffle_Postal_XXIII_Hearthbloom": 9,
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Arcane_Arena": 4,
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Chthonic_Circle": 4,
    "A_Evt_Evo_Scroll_Sorcerers_XXIV_Potionmakers_Pedestal": 4,
    "A_Evt_Evo_Theater_Easter_XXIV_Verdant_Phoenix": 9,
    "A_Evt_Evo_Tile_Amuni_XXIV_Purring_Sanctum": 9,
    "A_Evt_Evo_Scroll_Aquatic_XXIV_Puffs_Nautical_Theater": 9,
    "A_Evt_Evo_Merge_Dwarvengame_XXIV_Tower_of_Unity": 9,
    "A_Evt_Evo_Theater_Zodiac_XXIV_Gludo_The_Dreamweaver": 9,
    "A_Evt_Evo_Tile_Mistyforest_XXIV_Moonlight_Party": 9,
    "A_Evt_Evo_Set_Shuffle_Postal_XXIV_The_Act_of_Giving": 4,
    "A_Evt_Evo_Scroll_Sorcerers_XXV_Place_of_Convergence": 6,
    "A_Evt_Evo_Merge_Kitchen_XXV_Elvarian_Cook_Off": 9,
    "A_Evt_Evo_Theater_Easter_XXV_Azure_Phoenix": 9,
    "A_Evt_Evo_Tile_Amuni_XXV_Everflowing_Cascade": 9,
    "A_Evt_Evo_Scroll_Aquatic_XXV_Ceremonial_Pools": 6,
}

function setAndReload(id) {
    let select = document.getElementById(id.id);
    let stage = select.options[select.selectedIndex].value;
    selectedEvoStages[id.id.substring(12)] = parseInt(stage);
    readBuildingsJSON();
}


function readBuildingsJSON() {
    prepSetAlertElements();

    create_exception("Loading...", 10000, 'primary');

    $.get('database/buildings.json')
        .done(data => {

            let eventSelect = document.getElementById('input_event');
            let filterEventData = eventSelect.options[eventSelect.selectedIndex].value;
            let productionSelect = document.getElementById('input_production');
            let filterProductionData = productionSelect.options[productionSelect.selectedIndex].value;
            let appearancesCheckbox = document.getElementById('includeAppearances');
            let includeAppearances = appearancesCheckbox.checked;
            let orderBySelect = document.getElementById('input_orderBy');
            let orderByOption = orderBySelect.options[orderBySelect.selectedIndex].value;
            let isTriggeredOrderBy = orderByOption !== 'all_';
            let chapterSelect = document.getElementById('input_chapter');
            let buildingSetSelect = document.getElementById('input_set');
            let selectedBuildingSet = buildingSetSelect.options[buildingSetSelect.selectedIndex].value;
            let inputField = document.getElementById('input_search');
            let inputValue = inputField.value;

            clearColumnWithTables();

            let filteredData;

            if (inputValue.trim() === '') {
                if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
                    filteredData = searchForBuildingID(data, location.href.split('#')[1]);
                } else {
                    filteredData = filterData(data, filterEventData, filterProductionData, includeAppearances, selectedBuildingSet);
                }
            } else {
                filteredData = searchByInput(data, inputValue);
            }

            if (includeAppearances) {
                filteredData = sortByDay(filteredData, filterEventData);
            }

            if (isTriggeredOrderBy) {
                filteredData = sortBySelectedAttribute(filteredData, selectedEvoStages, orderByOption);
            }

            for (var i = 0; i < filteredData.length; i++) {
                let isEvo = false;
                let displayStage = 0;
                if (filteredData[i]['id'].toLowerCase().includes('_evo_')) {
                    isEvo = true;
                    displayStage = selectedEvoStages[filteredData[i]['id']];
                }
                var h5 = document.createElement('h5');
                h5.id = filteredData[i]['id'];
                h5.className = "card-title text-center text-title font-weight-bold";
                h5.style.textAlign = "left";
                h5.innerHTML = `${langBuildings(filteredData[i])}`;
                document.getElementById('column_with_tables').appendChild(h5);
                var div = document.createElement('div');
                div.id = filteredData[i]['id']+"_div";
                div.className = 'bbTable';
                div.style.overflow = "visible";
                div.style.marginBottom = "20px";
                var divFirstTable = document.createElement('div');
                divFirstTable.className = "bbTable";
                divFirstTable.style.overflow = "auto";
                var firstTable = document.createElement('table');
                firstTable.className = 'table-primary';
                firstTable.style.width = "100%";
                var t1body = document.createElement('tbody');
                var t1r = document.createElement('tr');
                var td11 = document.createElement('td');
                td11.style.width = "60%";
                td11.innerHTML = `<img src="${filteredData[i]['image']}">`;
                var td12 = document.createElement('td');
                td12.style.width = "40%";
                let setDesc = "-";
                if (filteredData[i].hasOwnProperty('setBuilding')) {
                    setDesc = `<a class="text-link font-weight-bold" href="#" onclick="showFullSet('${filteredData[i]['setBuilding']['setID']}')">${langUI(setNames[filteredData[i]['setBuilding']['setID']])}</a>`;
                }
                if (isEvo) {
                    let expiringDuration = `-`;
                    if (filteredData[i].hasOwnProperty("expiring")) {
                        expiringDuration = (filteredData[i]["expiring"]["duration"]/60/60).toString()+"h";
                    }
                    td12.innerHTML = `<b>${langUI("Building type:")}</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>${langUI("Construction time:")}</b> ${filteredData[i]['construction_time']}s<br>
                                    <b>${langUI("Size:")}</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>${langUI("Set building:")}</b> ${setDesc}<br>
                                    <b>${langUI("Expiring:")}</b> ${filteredData[i].hasOwnProperty('transcendence') ? '-' : expiringDuration}<br>
                                    <b>${langUI("Upgrade costs:")}</b> <img src="${artifacts[evoUpgradeCosts[filteredData[i]['id']]]?.["img"]}" style="width: 28px; margin-bottom: 3px;"> ${artifacts[evoUpgradeCosts[filteredData[i]['id']]]?.["name"]}<br>`;
                    if (feedingEffectsDescriptions.hasOwnProperty(filteredData[i]['id'])) {
                        td12.innerHTML += `<b>Feeding effect:</b> ${feedingEffectsDescriptions[filteredData[i]['id']]}<br>`;
                    }
                    td12.innerHTML += `<b>Stage:</b><br>`;
                    var numberOfStages = Object.keys(filteredData[i]['chapters'][1]).length;
                    let tempArr = new Array(numberOfStages).fill("");
                    tempArr[selectedEvoStages[filteredData[i]['id']]] = "selected";
                    var selectOptions = "";
                    for (let i = numberOfStages; i >= 1; i--) {
                        selectOptions += `<option value="${i - 1}" ${tempArr[i - 1]}>${i}</option>`;
                    }
                    td12.innerHTML += `<select id="${"input_stage_"+filteredData[i]['id']}" class="custom-select" style="width: 70px; margin-bottom: 10px;" onchange="setAndReload(this)">
                                        ${selectOptions}
                                    </select><br>`;
                    delete filteredData[i]["resale_resources"].population;
                    td12.innerHTML += Object.keys(filteredData[i]["resale_resources"]).length === 0
                                        ? "<b>Resale resources:</b> -"
                                        : `<b>Resale resources:</b> ${Object.entries(filteredData[i]["resale_resources"]).map(([item, quantity]) => `${quantity}x ${goods_icons[item]}`).join(', ')}`;
                    let h5hashtag = document.createElement('h5');
                    h5hashtag.id = "#"+filteredData[i]['id'];
                    h5hashtag.innerHTML = '<a class="text-link font-weight-bold" id="hash"><img src="images/general/share-symbol.png" class="pointer" title="Open in new tab and share" width="15px;"></a><br>';
                    h5hashtag.addEventListener('click', function() {
                        openInNewTab(location.href.split(`#`)[0]+h5hashtag.id);
                    });
                    td12.appendChild(h5hashtag);
                } else {
                    let expiringDuration = `-`;
                    if (filteredData[i].hasOwnProperty("expiring")) {
                        expiringDuration = (filteredData[i]["expiring"]["duration"]/60/60).toString()+"h";
                    }
                    td12.innerHTML = `<b>${langUI("Building type:")}</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>${langUI("Construction time:")}</b> ${filteredData[i]['construction_time']}s<br>
                                    <b>${langUI("Size:")}</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>${langUI("Set building:")}</b> ${setDesc}<br>
                                    <b>${langUI("Expiring:")}</b> ${expiringDuration}<br>
                                    ${expiringDuration !== '-' && filteredData[i]['expiring']['description'] ? "<b>"+langUI("Effect:")+"</b> "+filteredData[i]['expiring']['description']+"<br>" : ""}`;
                                    delete filteredData[i]["resale_resources"].population;
                                    td12.innerHTML += Object.keys(filteredData[i]["resale_resources"]).length === 0
                                                        ? "<b>Resale resources:</b> -"
                                                        : `<b>Resale resources:</b> ${Object.entries(filteredData[i]["resale_resources"]).map(([item, quantity]) => `${quantity}x ${goods_icons[item]}`).join(', ')}`;
                                    let h5hashtag = document.createElement('h5');
                                    h5hashtag.id = "#"+filteredData[i]['id'];
                                    h5hashtag.innerHTML = '<a class="text-link font-weight-bold" id="hash"><img src="images/general/share-symbol.png" class="pointer" title="Open in new tab and share" width="15px;"></a><br>';
                                    h5hashtag.addEventListener('click', function() {
                                        openInNewTab(location.href.split(`#`)[0]+h5hashtag.id);
                                    });
                                    td12.appendChild(h5hashtag);
                }
                t1r.appendChild(td11);
                t1r.appendChild(td12);
                
                t1body.appendChild(t1r);
                firstTable.appendChild(t1body);
                divFirstTable.appendChild(firstTable);
                div.appendChild(divFirstTable);

                var divSecondTable = document.createElement('div');
                divSecondTable.className = "bbTable";
                divSecondTable.style.overflow = "auto";
                var secondTable = document.createElement('table');
                secondTable.className = 'table-primary text-center';
                secondTable.style.width = "100%";
                var t2body = document.createElement('tbody');
                var tr21 = document.createElement('tr');
                for (var h = 0; h < numberOfChapters + 1; h++) {
                    var th = document.createElement('th');
                    if (h === 0) {
                        th.innerHTML = `${langUI("Chapter / Bonus")}`;
                    } else {
                        th.innerHTML = `<img src=${chapter_icons[h]}>`;
                    }
                    tr21.appendChild(th);
                }
                var divSetTable = document.createElement('div');
                divSetTable.className = "bbTable";
                divSetTable.style.overflow = "auto";
                var setTable = document.createElement('table');
                setTable.className = 'table-primary text-center';
                setTable.style.width = "100%";
                var tSetBody = document.createElement('tbody');
                t2body.appendChild(tr21);
                if (!isEvo) {
                    for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                        var tr = document.createElement('tr');
                        for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                            var td = document.createElement('td');
                            if (ch === 0) {
                                td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod][0]]}`;
                                if (filteredData[i]['all_productions'])
                                if (filteredData[i]['all_productions'][prod][0] != 'providedCulture' &&
                                    filteredData[i]['all_productions'][prod][0] != 'provided_population') {
                                    //tymto for cyklom hladam ten chapter, v ktorom je ta produkcia, ktorej cas chcem zistit
                                    for (var chPom = 1; chPom < numberOfChapters + 1; chPom++) {
                                        if (filteredData[i]['chapters'][chPom].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                            td.innerHTML += `${filteredData[i]['earlyPickupTime'] / 60 / 60}h / <b>${filteredData[i]['chapters'][chPom][filteredData[i]['all_productions'][prod][0]]['production_time'] / 60 / 60}h</b>`;
                                            break;
                                        }
                                    }
                                }
                            } else {
                                if (filteredData[i]['chapters'][ch].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                    if (typeof filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]] === 'object') {
                                        td.innerHTML = `${round(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value'])}`;
                                    } else {
                                        td.innerHTML = `${round(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]])}`;
                                    }
                                } else {
                                    td.innerHTML = `-`;
                                }
                            }
                            tr.appendChild(td);
                        }
                        t2body.appendChild(tr);
                        if (isTriggeredOrderBy && orderByOption === filteredData[i]['all_productions'][prod][0]) {
                            var trPerSquare = document.createElement('tr');
                            for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                var tdPerSquare = document.createElement('td');
                                if (ch === 0) {
                                    if (prioritiesProduction.includes(filteredData[i]['all_productions'][prod][0].toLowerCase())) {
                                        tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod][0]]} / per square per 1h</h7>`;
                                    } else {
                                        tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod][0]]} / per square</h7>`;
                                    }
                                } else {
                                    if (filteredData[i]['chapters'][ch].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                        if (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]].hasOwnProperty('production_time')) {
                                            tdPerSquare.innerHTML = `<h7>${round((filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width']) / (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['production_time'] / 3600)).toFixed(1))}</h7>`;
                                        } else {
                                            tdPerSquare.innerHTML = `<h7>${round((filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width'])).toFixed(1))}</h7>`;
                                        }
                                    } else {
                                        tdPerSquare.innerHTML = `-`;
                                    }
                                }
                                trPerSquare.appendChild(tdPerSquare);
                            }
                            t2body.appendChild(trPerSquare);
                        }
                        //PRIDAJ EXPIRING EFFECT CONFIG VALUES (AK EXISTUJE)
                        if (filteredData[i].hasOwnProperty("expiring") &&
                            Object.keys(filteredData[i]["expiring"]["values"]).length >= numberOfChapters &&
                            Object.values(filteredData[i]["expiring"]["values"]).some(value => value !== 0)) {
                            var trEffect = document.createElement('tr');
                            for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                var tdEffect = document.createElement('td');
                                if (ch === 0) {
                                    if (filteredData[i]["expiring"].hasOwnProperty("description")) {
                                        tdEffect.innerHTML = `<img src="${iconsImages[filteredData[i]["expiring"]["iconID"]]}" title="${filteredData[i]["expiring"]["description"].replaceAll("\"", "")}">`;
                                    } else {
                                        tdEffect.innerHTML = `<img src="${iconsImages[filteredData[i]["expiring"]["iconID"]]}" title="${iconsTitles[filteredData[i]["expiring"]["iconID"]]}">`;
                                    }
                                } else {
                                    if (filteredData[i]["expiring"].hasOwnProperty("format") &&
                                    filteredData[i]["expiring"]["format"].toLowerCase().includes("percentage")) {
                                        if (filteredData[i]["id"].includes("A_Evt_December_XXII_Cryo")) {  //pre zimne dekoracie chcem mat iba 10nasobok a bez znamienka +
                                            tdEffect.innerHTML = `${filteredData[i]["expiring"]["values"][ch]*10}%`;
                                        } else {
                                            tdEffect.innerHTML = `+${filteredData[i]["expiring"]["values"][ch]*100}%`;
                                        }
                                    } else {
                                        tdEffect.innerHTML = `${filteredData[i]["expiring"]["values"][ch]}`;
                                    }
                                }
                                trEffect.appendChild(tdEffect);
                            }
                            t2body.appendChild(trEffect);
                        }
                    }
                    secondTable.appendChild(t2body);
                    //SETOVE PARAMETRE:
                    if (filteredData[i].hasOwnProperty('setBuilding')) {

                        let bonuses = orderSetBuildingData(filteredData[i]);
                        //BONUSES: [[1.budova: [CH1: [prod, value]],[CH2: [prod, value]], ...],[2.budova: ]]
                        //BONUSES: zoznam pripojeni, kazdy ma num_of_ch zoznamov dvojic [prod value]

                        let prodChangeFlags = getProdChangeFlags(bonuses);

                        if (bonuses.length > 0) {
                            for (let setLine = -1; setLine < bonuses.length; setLine++) {
                                let trSet = document.createElement('tr');
                                let idxFlag = -1;
                                let chToPrint = 1;
                                if (setLine === -1) {
                                    while (chToPrint <= numberOfChapters) {
                                        let thSet = document.createElement('th');
                                        if (idxFlag === -1) {
                                            thSet.innerHTML = `${langUI("Chapter / Connection")}`;
                                            idxFlag++;
                                        } else {
                                            if (prodChangeFlags[idxFlag] !== chToPrint) {
                                                thSet.innerHTML = `<img src=${chapter_icons[chToPrint]}>`;
                                                chToPrint++;
                                            } else {
                                                thSet.innerHTML = `-`;
                                                idxFlag++;
                                            }
                                        }
                                        trSet.appendChild(thSet);
                                    }
                                } else {
                                    while (chToPrint <= numberOfChapters) {
                                        let tdSet = document.createElement('td');
                                        if (idxFlag === -1) {
                                            tdSet.innerHTML = `${setLine + 1}. ${langUI("building")}`;
                                            idxFlag++;
                                        } else {
                                            if (prodChangeFlags[idxFlag] !== chToPrint) {
                                                tdSet.innerHTML = `${bonuses[setLine][chToPrint - 1][1].toFixed(0)}`;
                                                chToPrint++;
                                            } else {
                                                tdSet.innerHTML = `${goods_icons[bonuses[setLine][chToPrint - 1][0]]}`;
                                                idxFlag++;
                                            }
                                        }
                                        trSet.appendChild(tdSet);
                                    }
                                }
                                tSetBody.appendChild(trSet);
                            }
                        }
                    }
                } else {
                    for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                        var tr = document.createElement('tr');
                        let existsInThisStage = false;
                        for (let chAttempt = 1; chAttempt < numberOfChapters+1; chAttempt++) {
                            if (filteredData[i]['chapters'][chAttempt][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                existsInThisStage = true;
                                break;
                            }
                        }
                        if (existsInThisStage) {
                            for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                var td = document.createElement('td');
                                if (ch === 0) {
                                    td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod][0]]}`;
                                    if (filteredData[i]['all_productions'][prod].includes("switchable")) {
                                        td.innerHTML = td.innerHTML.substring(0,td.innerHTML.length-4);
                                        td.innerHTML += `<img src="images/general/circle_info.png" title="${langUI('This is a switchable production. Only one of the switchable productions can be running at the same time.')}"><br>`;
                                    }
                                    if (filteredData[i]['all_productions'][prod][0] != 'providedCulture' &&
                                        filteredData[i]['all_productions'][prod][0] != 'provided_population') {
                                        //tymto for cyklom hladam ten chapter, v ktorom je ta produkcia, ktorej cas chcem zistit
                                        for (var chPom = 1; chPom < numberOfChapters + 1; chPom++) {
                                            if (filteredData[i]['chapters'][chPom][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                                td.innerHTML += `${filteredData[i]['earlyPickupTime'] / 60 / 60}h / <b>${filteredData[i]['chapters'][chPom][displayStage][filteredData[i]['all_productions'][prod][0]]['production_time'] / 60 / 60}h</b>`;
                                                break;
                                            }
                                        }
                                    }
                                } else {
                                    if (filteredData[i]['chapters'][ch][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                        if (typeof filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]] === 'object') {
                                            td.innerHTML = `${round((filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]]['value']).toFixed(0))}`;
                                        } else {
                                            td.innerHTML = `${round((filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]]).toFixed(0))}`;
                                        }
                                    } else {
                                        td.innerHTML = `-`;
                                    }
                                }
                                tr.appendChild(td);
                            }
                        }
                        t2body.appendChild(tr);
                        if (isTriggeredOrderBy && orderByOption === filteredData[i]['all_productions'][prod][0]) {
                            var trPerSquare = document.createElement('tr');
                            if (existsInThisStage) {
                                for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                    var tdPerSquare = document.createElement('td');
                                    if (ch === 0) {
                                        if (prioritiesProduction.includes(filteredData[i]['all_productions'][prod][0].toLowerCase())) {
                                            tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod][0]]} / per square per 1h</h7>`;
                                        } else {
                                            tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod][0]]} / per square</h7>`;
                                        }
                                    } else {
                                        if (filteredData[i]['chapters'][ch][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod][0])) {
                                            if (filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]].hasOwnProperty('production_time')) {
                                                tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width']) / (filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]]['production_time'] / 3600)).toFixed(1)}</h7>`;
                                            } else {
                                                tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width'])).toFixed(1)}</h7>`;
                                            }
                                        } else {
                                            tdPerSquare.innerHTML = `-`;
                                        }
                                    }
                                    trPerSquare.appendChild(tdPerSquare);
                                }
                            }
                            t2body.appendChild(trPerSquare);
                        }
                    }
                    secondTable.appendChild(t2body);
                    //SETOVE PARAMETRE:
                    if (filteredData[i].hasOwnProperty('setBuilding')) {   // v tejto moznosti (ked je evo a sucasne set) nastala ta zmena, ze je ina struktura premennej bonuses (nizsie). Tym padom je potrebne odlisne spravanie niektorych funkcii, ako
                                                                            // napriklad orderSetEvoBuildingData() alebo getProdChangeFlagsEvo() 

                        let bonuses = orderSetEvoBuildingData(filteredData[i], displayStage);
                        //BONUSES: [[1.budova: [CH1: [prod, value]],[CH2: [prod, value]], ...],[2.budova: ]]
                        //BONUSES: zoznam pripojeni, kazdy ma num_of_ch zoznamov dvojic [prod value]

                        let prodChangeFlags = getProdChangeFlagsEvo(bonuses);

                        if (bonuses.length > 0) {
                            for (let setLine = -1; setLine < bonuses.length; setLine++) {
                                let trSet = document.createElement('tr');
                                let idxFlag = -1;
                                let chToPrint = 1;
                                if (setLine === -1) {
                                    while (chToPrint <= numberOfChapters) {
                                        let thSet = document.createElement('th');
                                        if (idxFlag === -1) {
                                            thSet.innerHTML = `${langUI("Chapter / Connection")}`;
                                            idxFlag++;
                                        } else {
                                            if (prodChangeFlags[idxFlag] !== chToPrint) {
                                                thSet.innerHTML = `<img src=${chapter_icons[chToPrint]}>`;
                                                chToPrint++;
                                            } else {
                                                thSet.innerHTML = `-`;
                                                idxFlag++;
                                            }
                                        }
                                        trSet.appendChild(thSet);
                                    }
                                    tSetBody.appendChild(trSet);
                                } else {
                                    for (var adjBon = 0; adjBon < bonuses[0][1].length; adjBon++) {
                                        var trSub = document.createElement('tr');
                                        idxFlag = 0;
                                        chToPrint = 1;
                                        if (adjBon === 0) {
                                            var tdFirst = document.createElement('td');
                                            tdFirst.innerHTML = `${setLine + 1}. ${langUI("building")}`;
                                            tdFirst.rowSpan = bonuses[0][1].length;
                                            if (bonuses[0][1].length > 1 && setLine !== bonuses.length - 1) {
                                                tdFirst.style.borderBottomWidth = "2px";
                                            }
                                            trSub.appendChild(tdFirst);
                                        }
                                        while (chToPrint <= numberOfChapters) {
                                            if (prodChangeFlags[idxFlag] !== chToPrint) {
                                                let tdSet = document.createElement('td');
                                                tdSet.innerHTML = bonuses[setLine][chToPrint][adjBon][1].toFixed(0);
                                                if (bonuses[0][1].length > 1 && adjBon === bonuses[0][1].length - 1 && setLine !== bonuses.length - 1) {
                                                    tdSet.style.borderBottomWidth = "2px";
                                                }
                                                trSub.appendChild(tdSet);
                                                chToPrint++;
                                            } else {
                                                let tdSet = document.createElement('td');
                                                tdSet.innerHTML = goods_icons[bonuses[setLine][chToPrint][adjBon][0]];
                                                if (bonuses[0][1].length > 1 && adjBon === bonuses[0][1].length - 1 && setLine !== bonuses.length - 1) {
                                                    tdSet.style.borderBottomWidth = "2px";
                                                }
                                                trSub.appendChild(tdSet);
                                                idxFlag++;
                                            }
                                        }
                                        tSetBody.appendChild(trSub);
                                    }
                                }
                            }
                        }
                    }
                }

                divSecondTable.appendChild(secondTable);
                div.appendChild(divSecondTable);
                if (filteredData[i].hasOwnProperty('setBuilding')) {
                    setTable.appendChild(tSetBody);
                    divSetTable.appendChild(setTable);
                    div.appendChild(divSetTable);
                }
                //PET FEEDING EFFECT
                if (isEvo && filteredData[i].hasOwnProperty("feedingEffect")) {
                    var petJSON = filteredData[i]["feedingEffect"];
                    var petDiv = document.createElement('div');
                    petDiv.className = 'bbTable';
                    petDiv.style.marginTop = "20px";
                    var petCenter = document.createElement('center');
                    var petImg = document.createElement('img');
                    petImg.src = "images/general/feeding_icon.png";
                    petCenter.appendChild(petImg);
                    //petDiv.appendChild(petCenter);
                    var petUl = document.createElement('ul');
                    var petLi1 = document.createElement('li');
                    petLi1.innerHTML = `<b>Effect description: </b>${petJSON['description']}`;
                    petUl.appendChild(petLi1);
                    var petLi2 = document.createElement('li');
                    petLi2.innerHTML = `<b>Duration: </b>${petJSON['duration']/60/60}h`;
                    petUl.appendChild(petLi2);
                    if (petJSON.hasOwnProperty("source") && allowedFeedingMultiplicators.hasOwnProperty(petJSON['source'])) {
                        var petLi3 = document.createElement('li');
                        petLi3.innerHTML = `<b>Note: </b>The values are multiplied by ${allowedFeedingMultiplicators[petJSON['source']]}.`
                        petUl.appendChild(petLi3);
                    }
                    petDiv.appendChild(petUl);

                    var petTable = document.createElement('table');
                    petTable.className = 'table-primary text-center';
                    petTable.style.width = "100%";
                    var petBody = document.createElement('tbody');
                    var petTr1 = document.createElement('tr');
                    for (let stg = 0; stg <= 10; stg++) {
                        var petTh = document.createElement('th');
                        if (stg === 0) {
                            petTh.innerHTML = `${langUI("Stage / Feeding effect")}`;
                        } else {
                            petTh.innerHTML = `${stg}`;
                        }
                        petTr1.appendChild(petTh);
                    }
                    petBody.appendChild(petTr1);
                    var petTr2 = document.createElement('tr');
                    for (let stg = 0; stg <= 10; stg++) {
                        var petTd = document.createElement('td');
                        if (stg === 0) {
                            petTd.innerHTML = `${feedingEffectsDescriptions[filteredData[i]['id']]}`;
                        } else {
                            if (petJSON['format'].toLowerCase().includes("percentage")) {
                                if (petJSON.hasOwnProperty("frogId")) {
                                    petTd.innerHTML = `${flexibleRewards.filter(elem => elem.id === petJSON["frogId"])[0]['rewards'][getPresetChapter()-1]['amount']*petJSON['valuesStages'][stg]}
                                    ${goods_icons[flexibleRewards.filter(elem => elem.id === petJSON["frogId"])[0]['rewards'][getPresetChapter()-1]['subType']]}`;
                                } else {
                                    petTd.innerHTML = `${(petJSON['valuesStages'][stg]*100).toFixed(1)}%`;
                                }
                            } else {
                                if (petJSON.hasOwnProperty("frogId")) {
                                    petTd.innerHTML = `${flexibleRewards.filter(elem => elem.id === petJSON["frogId"])[0]['rewards'][getPresetChapter()-1]['amount']*petJSON['valuesStages'][stg]}
                                    ${goods_icons[flexibleRewards.filter(elem => elem.id === petJSON["frogId"])[0]['rewards'][getPresetChapter()-1]['subType']]}`;
                                } else {
                                    petTd.innerHTML = `${petJSON['valuesStages'][stg]}`;
                                }
                            }
                        }
                        petTr2.appendChild(petTd);
                    }
                    petBody.appendChild(petTr2);
                    petTable.appendChild(petBody);
                    petDiv.appendChild(petTable);
                    div.appendChild(petDiv);
                }
                // TRANSCENDENCE
                if (isEvo && filteredData[i].hasOwnProperty("transcendence")) {
                    var transData = filteredData[i]["transcendence"];
                    var transDiv = document.createElement('div');
                    transDiv.className = 'bbTable';
                    transDiv.style.marginTop = "20px";
                    var transCenter = document.createElement('center');
                    var transImg = document.createElement('img');
                    transImg.src = "images/general/icon_transcendence_active.png";
                    transCenter.appendChild(transImg);
                    transDiv.appendChild(transCenter);
                    var transUl = document.createElement('ul');
                    var transLi1 = document.createElement('li');
                    transLi1.innerHTML = `<b>Transcendence effect: </b>activate with ${goods_icons["volatile_sigils"]}`;
                    transUl.appendChild(transLi1);
                    var transLi2 = document.createElement('li');
                    transLi2.innerHTML = `<b>Duration: </b>${transData[0]['duration']/60/60/24}d`;
                    transUl.appendChild(transLi2);

                    let transEffectsInStageAvailable = 0;
                    for (let transEffect = 0; transEffect < transData.length; transEffect++) {
                        var transN = document.createElement('li');
                        if (transData[transEffect]['valuesStages'].hasOwnProperty(displayStage+1)) {
                            if (transData[transEffect]['format'] === 'sign_percentage') {
                                transN.innerHTML = `<b>${transData[transEffect]['name']}: </b>${transData[transEffect]['valuesStages'][displayStage+1]*100}%`;
                                const nthProductionId = filteredData[i]['all_productions'].find(prod => 
                                    Object.keys(filteredData[i]['chapters'][getPresetChapter()][displayStage]).includes(prod[0]) && 
                                    !prioritiesNonProduction.includes(prod[0])
                                )[0]; // tato nula aktualne vybera prvu produkciu. Mozno to bude treba v buducnosti zmenit a parametrizovat podla parametra targets v effectConfigs
                                transN.innerHTML += ` ${goods_icons[nthProductionId]}`;
                            } else if (transData[transEffect]['format'] === 'default') {
                                transN.innerHTML = `<b>${transData[transEffect]['name']}: </b>${transData[transEffect]['valuesStages'][displayStage+1]}x`;
                                transN.innerHTML += ` ${goods_icons[transData[transEffect]['iconID']]}`;
                            }
                            transUl.appendChild(transN);
                            transEffectsInStageAvailable++;
                        }
                    }
                    if (transEffectsInStageAvailable === 0) {
                        var transN = document.createElement('li');
                        transN.innerHTML = `No transcendence effects are available at this stage.`;
                        transUl.appendChild(transN);
                    }
                    transDiv.appendChild(transUl);
                    div.appendChild(transDiv);
                }
                //WEIGHTED REWARDS
                if (filteredData[i].hasOwnProperty("weightedRewards")) {
                    let wrJSON = undefined;
                    if (filteredData[i]["id"].toLowerCase().includes("_evo_")) {
                        wrJSON = filteredData[i]["weightedRewards"]["Stage_"+(selectedEvoStages[filteredData[i]['id']]+1)];
                    } else {
                        wrJSON = filteredData[i]["weightedRewards"];
                    }
                    var wrDiv = document.createElement("div");
                    wrDiv.className = 'bbTable';
                    wrDiv.style.marginTop = "20px";

                    var wrCenter = document.createElement('center');
                    var wrImg = document.createElement('img');
                    wrImg.src = "https://i.ibb.co/4Y4qbR1/random-questionmark.png";
                    wrImg.style.marginBottom = "15px";
                    wrCenter.appendChild(wrImg);
                    wrDiv.appendChild(wrCenter);
                    var wrTable = document.createElement('table');
                    wrTable.className = 'table-primary text-center';
                    wrTable.style.width = "100%";
                    var wrBody = document.createElement('tbody');
                    var wrTr1 = document.createElement('tr');
                    for (let col = -1; col < wrJSON[getPresetChapter()-1]["chances"].length; col++) {
                        var wrTh = document.createElement('th');
                        if (col === -1) {
                            wrTh.innerHTML = `${langUI("Chance")}`;
                            wrTh.style.width = "40%";
                        } else {
                            wrTh.innerHTML = `${wrJSON[getPresetChapter()-1]["chances"][col]["percentage"]}%`;
                            wrTh.style.width = ""+(60/wrJSON[getPresetChapter()-1]["chances"].length)+"%";
                        }
                        wrTr1.appendChild(wrTh);
                    }
                    wrBody.appendChild(wrTr1);
                    let wrTr = document.createElement("tr");
                    for (let col = -1; col < wrJSON[getPresetChapter()-1]["chances"].length; col++) {
                        let wrTd = document.createElement("td");
                        if (col === -1) {
                            wrTd.innerHTML = `<img src="${chapter_icons[getPresetChapter()]}" title="Your selected chapter on the website"> / ${langUI("Bonus")}`;
                        } else {
                            wrTd.innerHTML = `${wrJSON[getPresetChapter()-1]["chances"][col]["amount"]} ${goods_icons[
                                Object.keys(goods_icons).find(key => 
                                    key.toLowerCase() === wrJSON[getPresetChapter()-1]["chances"][col]["subType"].toLowerCase())]}`;
                        }
                        wrTr.appendChild(wrTd);
                    }
                    wrBody.appendChild(wrTr);
                    wrTable.appendChild(wrBody);
                    wrDiv.appendChild(wrTable);
                    div.appendChild(wrDiv);
                }
                document.getElementById('column_with_tables').appendChild(div);
                
                //CREATE AD SPACE

                if (currentSatisfiesAdPlacementBuildings(i, filteredData.length)) {
                    let divAd = document.createElement("div");
                    divAd.className = "adsense-inject";
                    document.getElementById('column_with_tables').appendChild(divAd);
                }
            }
            create_exception("Buildings Generated!", 3, 'success');

            //INJECT ADS

            /*$(document).ready(function()
            {
                $(".adsense-inject").each(function () {
                    $(this).append('<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3978524526870979" data-ad-slot="6927511035" data-ad-format="auto"></ins>');
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }); 
            });*/
            $(".adsense-inject").each(function () {
                $(this).append('<div align="center"><ins class="adsbygoogle" style="display:block; width:40%; height:40%; margin-bottom:10px;" data-ad-format="fluid" data-ad-layout-key="-6t+ed+2i-1n-4w" data-ad-client="ca-pub-4154227292627045" data-ad-slot="7940520800"></ins></div>');
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
        })
}

function filterEvent(filterData, objectToPass) {
    if (filterData.includes('all')) {
        return true;
    }
    return objectToPass['id'].toLowerCase().includes(filterData.toLowerCase());
}

function filterProduction(filterData, objectToPass) {
    //console.log(filterData+" + "+objectToPass['name'])
    if (filterData.includes('all')) {
        return true;
    }
    let filterDataSplit = "";
    let logicalOperand = "";
    if (filterData.includes("&")) {
        filterDataSplit = filterData.split("&");
        logicalOperand = "&";
    } else {
        filterDataSplit = filterData.split("|");
        logicalOperand = "|";
    }
    if (filterDataSplit[0] === 'only') {
        var neededToPass = filterDataSplit.length-1;
        if (neededToPass != objectToPass['all_productions'].length) {
            return false;
        }
        for (var i = 1; i < filterDataSplit.length; i++) {
            for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                if (filterDataSplit[i] === objectToPass['all_productions'][j][0]) {
                    neededToPass--;
                }
            }
        }
        return neededToPass === 0;
    } else {
        if (logicalOperand === "&") {
            var neededToPass = filterDataSplit.length;
            for (var i = 0; i < filterDataSplit.length; i++) {
                for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                    if (filterDataSplit[i] === objectToPass['all_productions'][j][0]) {
                        neededToPass--;
                    }
                }
            }
            return neededToPass === 0;
        } else {
            let passed = 0;
            for (let i = 0; i < filterDataSplit.length; i++) {
                for (let j = 0; j < objectToPass['all_productions'].length; j++) {
                    if (filterDataSplit[i] === objectToPass['all_productions'][j][0]) {
                        passed++;
                    }
                }
            }
            return passed >= 1;
        }
    }
}

function hasAppearance(filterData, objectToPass) {
    return objectToPass['appearances'].hasOwnProperty(filterData);
}

function excludeAsDisabled(objectToPass) {
    var select = document.getElementById('input_event');
    for (var i = 0; i < select.length; i++) {
        var option = select.options[i];
        if (option.disabled && objectToPass['id'].toLowerCase().includes(option.value.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function prepSetAlertElements() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
}

function filterData(data, filterEventData, filterProductionData, includeAppearances, selectedBuildingSet) {
    let filteredData = [];
    if (selectedBuildingSet !== "all_") {
        for (let i = 0; i < data.length; i++) {
            if (data[i].hasOwnProperty("setBuilding") && data[i]["setBuilding"]["setID"] === selectedBuildingSet) {
                filteredData.push(data[i]);
            }
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            if ((filterEvent(filterEventData, data[i]) && filterProduction(filterProductionData, data[i])) ||
                (includeAppearances && hasAppearance(filterEventData, data[i]))) {
                if (!excludeAsDisabled(data[i])) {
                    filteredData.push(data[i]);
                }
            }
        }
    }
    return filteredData;
}

function sortByDay(filteredData, filterEventData) {
    let res = filteredData;
    for (var j = 0; j < res.length; j++) {
        for (var k = 0; k < res.length-1; k++) {
            if (res[k]['appearances'][filterEventData] > res[k+1]['appearances'][filterEventData]) {
                let temp = res[k];
                res[k] = res[k+1];
                res[k+1] = temp;
            }
        }
    }
    return res;
}

function sortBySelectedAttribute(filteredData, selectedEvoStages, orderByOption) {
    for (var j = 0; j < filteredData.length; j++) {
        for (var k = 0; k < filteredData.length-1; k++) {
            var swap = false;
            let displayStage1 = selectedEvoStages[filteredData[k]['id']];
            let displayStage2 = selectedEvoStages[filteredData[k+1]['id']];
            if (!filteredData[k]['id'].toLowerCase().includes('_evo_') && !filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                if (filteredData[k]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                    if (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                        if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption].hasOwnProperty('production_time')) {
                            //ak treba brat do uvahy aj cas
                            if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time'] / 3600) <
                                filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time'] / 3600)) {
                                swap = true;
                            }
                        } else if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                            filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                            //ak to nie je produkcia s casom
                            swap = true;
                        }
                    }
                } else {
                    swap = true;
                }
            } else {
                if (filteredData[k]['id'].toLowerCase().includes('_evo_') && !filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                    if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1].hasOwnProperty(orderByOption)) {
                        if (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                            if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption].hasOwnProperty('production_time')) {
                                if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['production_time'] / 3600) <
                                    filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time'] / 3600)) {
                                    swap = true;
                                }
                            } else if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                                swap = true;
                            }
                        }
                    } else {
                        swap = true;
                    }
                } else {
                    if (!filteredData[k]['id'].toLowerCase().includes('_evo_') && filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                        if (filteredData[k]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                            if (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption].hasOwnProperty('production_time')) {
                                    if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time'] / 3600) <
                                        filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['production_time'] / 3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                                    swap = true;
                                }
                            }
                        } else {
                            swap = true;
                        }
                    } else {
                        if (filteredData[k]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                            if (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption].hasOwnProperty('production_time')) {
                                    if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['production_time'] / 3600) <
                                        filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['production_time'] / 3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(getPresetChapter())][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                                    swap = true;
                                }
                            }
                        } else {
                            swap = true;
                        }
                    }
                }
            }
            if (swap) {
                let temp = filteredData[k];
                filteredData[k] = filteredData[k+1];
                filteredData[k+1] = temp;
            }
        }
    }
    return filteredData;
}

function searchByInput(data, inputValue) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (langBuildings(data[i]).toLowerCase().includes(inputValue.toLowerCase())) {
            if (!discardBuildings.some((element) => data[i]['id'].toLowerCase().includes(element))) {
                result.push(data[i]);
            }
        }
    }
    return result;
}

function showFullSet(setID) {
    let select = document.getElementById('input_set');
    let options = select.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === setID) {
            options.selectedIndex = i;
        }
    }
    document.getElementById('filter_and_generate_button').click();
}

function currentSatisfiesAdPlacementBuildings(i, dataLength) {
    if (dataLength < 10) {
        return i !== 0 && i % 3 === 0;
    }
    return i !== 0 && i % 4 === 0;
}