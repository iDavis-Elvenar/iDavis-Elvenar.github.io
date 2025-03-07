// Copyright 2021, iDavis, All rights reserved.

var view = "";

function changeEventBanner() {
    var imgBanner = document.getElementById("event_banner");
    var selectEvent = document.getElementById("input_event");
    var selectedEvent = selectEvent.options[selectEvent.selectedIndex].value;
    imgBanner.src = eventBanners[selectedEvent];
}

function loadPage() {
    if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
        if (location.href.split('#')[1].includes("day")) {
            location.href = location.href.split('#')[0];
            displayDailyPrizes();
        } else {
            if (location.href.split('#')[1].split('-')[1] !== "") {
                eventId = location.href.split('#')[1].split('-')[1];
                eventSelect = document.getElementById("input_event");
                for (let option = 0; option < eventSelect.options.length; option++) {
                    if (eventSelect.options[option].value === location.href.split('#')[1].split('-')[1]) {
                        eventSelect.selectedIndex = option;
                    }
                }
            }
            foundView = location.href.split('#')[1].split("-")[0];
            switchView(foundView);
        }
    } else {
        displayDailyPrizes();
    }
    setLeftBar();
}

function setLeftBar() {
    let leftBar = document.getElementById("left_bar");
    let selectedEvent = getSelectedEvent();
    leftBar.innerHTML = "";

    //Povodny staticky HTML content:
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="calendar_top_div"><span class="align-middle"><a class="text-link font-weight-bold" id="calendar_top" href="#calendar" onclick="switchView('calendar')"><img src="images/general/calendar.png" width="45" style="margin-left: -10px; margin-right: 2px; position: relative;"></a></span></div>
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="quests_left_panel_div"><span class="align-middle"><a class="text-link font-weight-bold" id="quests_left_panel" href="#quests" onclick="switchView('quests')"><img src="images/general/event_guide.png" width="28" style="margin-left: 0px; margin-right: 10px; position: relative;"></a></span></div>

    let numberOfAdditionalItems = 0;
    if (additionalTabsEvents.hasOwnProperty(selectedEvent)) {
        numberOfAdditionalItems = additionalTabsEvents[selectedEvent].length;
    }

    let featuredBaseTabs = handleFeatureFlag(["info_tab", "prizes_tab", "leagues_tab"]);

    let numberOfBaseItems = featuredBaseTabs.length;

    leftBar.style.height = "" + ((numberOfBaseItems * 50) + (numberOfAdditionalItems * 50)) + "px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = "" + (100 / (numberOfAdditionalItems + numberOfBaseItems)) + "%";
        div.id = baseTabsEvents[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = featuredBaseTabs[b]["id"].substring(0, featuredBaseTabs[b]["id"].lastIndexOf("_"));
        a.href = featuredBaseTabs[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function () {
            switchView(featuredBaseTabs[b]["onclick"]);
        }
        a.innerHTML = langUI(featuredBaseTabs[b]["name"]);
        let img = document.createElement("img");
        if (featuredBaseTabs[b]["img"] === "various") {
            img.src = "./images/events/icons/" + getSelectedEvent() + ".png";
            img.style = "width: " + eventsInfoIcons[getSelectedEvent()]["img_width"] + "px; " + eventsInfoIcons[getSelectedEvent()]["img_style"];
        } else {
            img.src = featuredBaseTabs[b]["img"];
            img.style = "width: " + featuredBaseTabs[b]["img_width"] + "px; " + featuredBaseTabs[b]["img_style"];
        }
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = "" + (100 / (numberOfAdditionalItems + numberOfBaseItems)) + "%";
        newDiv.id = additionalTabsEvents[selectedEvent][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsEvents[selectedEvent][i]["href"];
        newA.href += "-" + selectedEvent;
        newA.onclick = function () {
            switchView(additionalTabsEvents[selectedEvent][i]["id"]);
        }
        newA.innerHTML = additionalTabsEvents[selectedEvent][i]["name"];
        let newImg = document.createElement("img");
        newImg.src = additionalTabsEvents[selectedEvent][i]["img"];
        newImg.style = "width: " + additionalTabsEvents[selectedEvent][i]["img_width"] + "px; " + additionalTabsEvents[selectedEvent][i]["img_style"];
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}

function getSelectedEvent() {
    var selectEvent = document.getElementById("input_event");
    return selectEvent.options[selectEvent.selectedIndex].value;
}

function getSelectedEventName() {
    let eventSelect = document.getElementById('input_event');
    let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
    return eventSelect.options[eventSelect.selectedIndex].text;
}

function displayDailyPrizes() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();
    setDocumentTitle(document, "calendar", baseTabsEvents, additionalTabsEvents, "events");

    view = "calendar";

    $.get('database/buildings.json')
        .done(data => {
            //HANDLE FILTERS

            let eventSelect = document.getElementById('input_event');
            let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
            let selectedEventName = eventSelect.options[eventSelect.selectedIndex].text;
            let orderBySelect = document.getElementById('input_orderBy');
            let orderByOption = orderBySelect.options[orderBySelect.selectedIndex].value;
            let isTriggeredOrderBy = orderByOption !== 'day';
            let chapterSelect = document.getElementById('input_chapter');

            let days = getDaysFromStart(selectedEvent) + 1;

            clearColumnWithTables();
            let filteredDataDict = {};
            for (let i = 0; i < Math.min(dailyPrizes[selectedEvent].length, days); i++) {
                for (let j = 0; j < data.length; j++) {
                    if (dailyPrizes[selectedEvent][i] === data[j]['id']) {
                        filteredDataDict[i] = data[j];
                    }
                }
            }

            for (var i = 0; i < Math.min(Object.keys(dailyPrizes[selectedEvent]).length, days); i++) {
                if (dailyPrizes[selectedEvent][i].substring(0, 4) === 'INS_' ||
                    Object.keys(instants).some((element) => dailyPrizes[selectedEvent][i].toLowerCase().includes(element.substring(0, element.lastIndexOf("_"))))) {
                    var baseID = dailyPrizes[selectedEvent][i].substring(0, dailyPrizes[selectedEvent][i].lastIndexOf('_') + 1);
                    var instantObject = {};
                    instantObject['id'] = baseID;
                    instantObject['name'] = instants[baseID]['name'];
                    instantObject['image_big'] = instants[baseID]['image_big'];
                    instantObject['image_small'] = instants[baseID]['image_small'];
                    if (instants[baseID].hasOwnProperty('title')) {
                        instantObject['title'] = instants[baseID]['title'];
                    }
                    if (instants[baseID].hasOwnProperty('image_big_secondary')) {
                        instantObject['image_big_secondary'] = instants[baseID]['image_big_secondary'];
                    }
                    if (instants[baseID].hasOwnProperty('image_small_secondary')) {
                        instantObject['image_small_secondary'] = instants[baseID]['image_small_secondary'];
                    }
                    instantObject['production_type'] = instants[baseID]['production_type'];
                    if (dailyPrizes[selectedEvent][i].includes("{")) {
                        instantObject['value'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].lastIndexOf('_') + 1, dailyPrizes[selectedEvent][i].indexOf("{")));
                        instantObject['quantity'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].indexOf('{') + 1, dailyPrizes[selectedEvent][i].indexOf("}")));
                    } else {
                        instantObject['value'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].lastIndexOf('_') + 1, dailyPrizes[selectedEvent][i].length));
                        instantObject['quantity'] = 1;
                    }
                    if (instantObject['production_type'] === 'h') {
                        instantObject['value'] /= 60;
                    }
                    filteredDataDict[i] = instantObject;
                } else if (dailyPrizes[selectedEvent][i].substring(0, 5).toLowerCase() === 'frog_') {
                    var baseID = dailyPrizes[selectedEvent][i].substring(0, dailyPrizes[selectedEvent][i].lastIndexOf('_'));
                    var frogAmount = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].indexOf("{") + 1, dailyPrizes[selectedEvent][i].indexOf("}")));
                    var frogObject = {};
                    frogObject['id'] = baseID;
                    frogObject['rewards'] = [];
                    for (let chFrog = 1; chFrog <= numberOfChapters; chFrog++) {
                        chFrogReward = {};
                        chFrogReward['subType'] = flexibleRewards.filter(elem => elem.id === baseID)[0]['rewards'][chFrog - 1]['subType'];
                        chFrogReward['amount'] = flexibleRewards.filter(elem => elem.id === baseID)[0]['rewards'][chFrog - 1]['amount'] * frogAmount;
                        frogObject['rewards'].push(chFrogReward);
                    }
                    filteredDataDict[i] = frogObject;
                } else if (dailyPrizes[selectedEvent][i].substring(0, 4).toLowerCase() === 'rsk_') {
                    var baseID = dailyPrizes[selectedEvent][i].substring(0, dailyPrizes[selectedEvent][i].lastIndexOf('_'));
                    var rskAmount = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].indexOf("{") + 1, dailyPrizes[selectedEvent][i].indexOf("}")));
                    var rskObject = {};
                    rskObject['id'] = baseID;
                    rskObject['amount'] = rskAmount;
                    rskObject['icon'] = rskIcons[tomes.filter(elem => elem.id === baseID)[0].iconId];
                    rskObject['name'] = tomes.filter(elem => elem.id === baseID)[0].name;
                    filteredDataDict[i] = rskObject;
                }
            }
            var filteredData = [];
            for (var key in filteredDataDict) {
                filteredData.push(filteredDataDict[key])
            }
            if (isTriggeredOrderBy) {
                filteredData = Array.from(new Set(filteredData));
                filteredData = filteredData.filter(function (x) {
                    return x['id'].toLowerCase().includes('a_evt') && x['chapters'][getPresetChapter()].hasOwnProperty(orderByOption)
                })
                if (filteredData.length === 0) {
                    create_exception("No buildings found. Please adjust your <strong>Order By</strong> options.", 3, 'primary')
                }
                for (var j = 0; j < filteredData.length; j++) {
                    for (var k = 0; k < filteredData.length - 1; k++) {
                        var swap = false;
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
                        if (swap) {
                            let temp = filteredData[k];
                            filteredData[k] = filteredData[k + 1];
                            filteredData[k + 1] = temp;
                        }
                    }
                }
            }
            createEventHeader(selectedEvent, selectedEventName);
            if (orderByOption === 'day') {
                createCalendar(filteredData, selectedEvent);
                if (eventVideos.hasOwnProperty(selectedEvent) && eventVideos[selectedEvent] !== "") {
                    insertVideo(selectedEvent, document.getElementById('column_with_tables'));
                }
            }
            for (var i = 0; i < filteredData.length; i++) {
                var h5 = document.createElement('h5');
                h5.id = `day${i + 1}`;
                h5.className = "card-title text-center text-title font-weight-bold";
                h5.style.textAlign = "left";
                if (!isTriggeredOrderBy) {
                    if (filteredData[i]['id'].substring(0, 5).toLowerCase() === 'frog_') {
                        h5.innerHTML = `${langUI("Day")} ${i + 1}: ${getFrogName(filteredData[i])}<br>`;
                    } else if (filteredData[i]['id'].substring(0, 4).toLowerCase() === 'ins_') {
                        h5.innerHTML = `${langUI("Day")} ${i + 1}: ${langUI(filteredData[i]['name'])}<br>`;
                    } else {
                        h5.innerHTML = `${langUI("Day")} ${i + 1}: ${langBuildings(filteredData[i])}<br>`;
                    }
                } else {
                    let dpDays = "";
                    for (let dp = 0; dp < dailyPrizes[selectedEvent].length; dp++) {
                        if (dailyPrizes[selectedEvent][dp] === filteredData[i]['id']) {
                            dpDays += (dp + 1).toString() + ", ";
                        }
                    }
                    h5.innerHTML = `Day ${dpDays.substring(0, dpDays.length - 2)}: ${langBuildings(filteredData[i])}<br>`;
                    //h5.innerHTML = `Day ${filteredData[i]['appearances'][selectedEvent].map(x => x+1)}: ${filteredData[i]['name']}<br>`;
                }
                document.getElementById('column_with_tables').appendChild(h5);
                var div = document.createElement('div');
                div.className = 'bbTable';
                div.style.marginBottom = "20px";
                div.style.overflow = "visible";
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
                if (filteredData[i]['id'].toLowerCase().includes('a_evt') || forceNonEventBuildings.includes(filteredData[i]['id'])) {                
                    td11.innerHTML = `<img src="${filteredData[i]['image']}">`;
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    let setDesc = "-";
                    if (filteredData[i].hasOwnProperty('setBuilding')) {
                        setDesc = `${langUI(setNames[filteredData[i]['setBuilding']['setID']])}`;
                    }
                    td12.innerHTML = `<b>${langUI("Building type:")}</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>${langUI("Construction time:")}</b> ${filteredData[i]['construction_time']}<br>
                                    <b>${langUI("Size:")}</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>${langUI("Set building:")}</b> ${setDesc}<br>
                                    <b>${langUI("Expiring:")}</b> -<br>`;
                    delete filteredData[i]["resale_resources"].population;
                    td12.innerHTML += Object.keys(filteredData[i]["resale_resources"]).length === 0
                    ? "<b>Resale resources:</b> None"
                    : `<b>Resale resources:</b> ${Object.entries(filteredData[i]["resale_resources"]).map(([item, quantity]) => `${quantity}x ${goods_icons[item]}`).join(', ')}`;
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
                    for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                        var tr = document.createElement('tr');
                        for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                            var td = document.createElement('td');
                            if (ch === 0) {
                                td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod][0]]}`;
                                if (filteredData[i]['all_productions'][prod].includes("switchable")) {
                                    td.innerHTML = td.innerHTML.substring(0, td.innerHTML.length - 4);
                                    td.innerHTML += `<img src="images/general/circle_info.png" title="${langUI('This is a switchable production. Only one of the switchable productions can be running at the same time.')}"><br>`;
                                }
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
                                        if (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]].hasOwnProperty('production_time')) {
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
                    }
                    secondTable.appendChild(t2body);
                    //SETOVE PARAMETRE:
                    if (filteredData[i].hasOwnProperty('setBuilding')) {

                        let bonuses = orderSetBuildingData(filteredData[i]);

                        //BONUSES: [[1.budova: [CH1: [prod, value]],[CH2: [prod, value]], ...],[2.budova: ]]
                        //BONUSES: zoznam pripojeni, kazdy ma num_of_ch zoznamov dvojic [prod value]

                        let prodChangeFlags = getProdChangeFlags(bonuses);

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
                } else if (filteredData[i]['id'].toLowerCase().includes('ins_')) {  //INSTANTS
                    if (filteredData[i].hasOwnProperty('image_big_secondary')) {
                        td11.innerHTML = `<img src="${filteredData[i]['image_big']}" style="margin-left: 10%;">/<img src="${filteredData[i]['image_big_secondary']}">`;
                    } else {
                        td11.innerHTML = `<img src="${filteredData[i]['image_big']}" style="margin-left: 10%;">`;
                    }
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    if (filteredData[i]['id'].toLowerCase().includes("ins_kp_") || filteredData[i]['id'].toLowerCase().includes("ins_petfood_") || filteredData[i]['id'].toLowerCase().includes("ins_combining_catalyst_")) {
                        td12.innerHTML = `<b>Type:</b> Item<br>`;
                    } else if (filteredData[i]['id'].toLowerCase().includes("ins_")) {
                        td12.innerHTML = `<b>Type:</b> Instant<br>`;
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
                            th.innerHTML = `Chapter / Bonus`;
                        } else {
                            th.innerHTML = `<img src=${chapter_icons[h]}>`;
                        }
                        tr21.appendChild(th);
                    }
                    t2body.appendChild(tr21);
                    var tr = document.createElement('tr');
                    for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                        var td = document.createElement('td');
                        if (ch === 0) {
                            if (filteredData[i].hasOwnProperty('image_small_secondary')) {
                                td.innerHTML = `${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['value']}${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['production_type'] + "<br>"}
                                    <img src="${filteredData[i]['image_small']}">/<img src="${filteredData[i]['image_small_secondary']}">`;
                            } else {
                                td.innerHTML = `${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['value']}${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['production_type'] + "<br>"}
                                            <img src="${filteredData[i]['image_small']}" title="${filteredData[i]['title']}">`;
                            }
                        } else {
                            td.innerHTML = `${filteredData[i]['quantity']}`;
                        }
                        tr.appendChild(td);
                    }
                    t2body.appendChild(tr);
                    secondTable.appendChild(t2body);
                } else if (filteredData[i]['id'].toLowerCase().includes('frog_')) {     // FLEXIBLE REWARDS
                    td11.innerHTML = `<img src="${flexibleRewardsIcons[filteredData[i]['id']]}" style="margin-left: 10%;" title="${langUI("A one-time reward depending on your current chapter")}">`;
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    td12.innerHTML = `<b>Type:</b> Flexible Reward<br>`;
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

                    var allSubTypes = [];
                    for (var subType = 0; subType < filteredData[i]['rewards'].length; subType++) {
                        if (!allSubTypes.includes(filteredData[i]['rewards'][subType]['subType'])) {
                            allSubTypes.push(filteredData[i]['rewards'][subType]['subType']);
                        }
                    }
                    for (var h = 0; h <= 1; h++) {
                        var th = document.createElement('th');
                        if (h === 0) {
                            th.innerHTML = `${langUI("Chapter / Bonus")}`;
                            th.style.width = "15%";
                        } else {
                            th.innerHTML = `<img src=${chapter_icons[getPresetChapter()]}>`;
                        }
                        tr21.appendChild(th);
                    }
                    t2body.appendChild(tr21);

                    var tr = document.createElement('tr');
                    var tdProd = document.createElement('td');
                    var frogReward = getFrogRewardObjectForChapter(allSubTypes, filteredData[i]);
                    if (goods_icons[frogReward['reward']] === undefined) {
                        tdProd.innerHTML = `${goods_icons[frogReward['reward'].toLowerCase()]}<h7>${langUI("one-time reward")}</h7>`;
                    } else {
                        tdProd.innerHTML = `${goods_icons[frogReward['reward']]}<h7>${langUI("one-time reward")}</h7>`;
                    }
                    tr.appendChild(tdProd);
                    var tdVal = document.createElement('td');
                    tdVal.innerHTML = `${frogReward['amount']}`;
                    filteredData[i]['frog_subType'] = frogReward['reward'];
                    tr.appendChild(tdVal);
                    t2body.appendChild(tr);
                    secondTable.appendChild(t2body);
                } else if (filteredData[i]['id'].toLowerCase().includes('rsk_')) {
                    td11.innerHTML = `<img src="${rskObject['icon']}" style="margin-left: 10%;" title="${langUI("A one-time reward")}">`;
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    td12.innerHTML = `<b>Type:</b> Tome<br>`;
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

                    for (var h = 0; h <= 1; h++) {
                        var th = document.createElement('th');
                        if (h === 0) {
                            th.innerHTML = `${langUI("Chapter / Bonus")}`;
                            th.style.width = "15%";
                        } else {
                            th.innerHTML = `<b>All</b>`;
                        }
                        tr21.appendChild(th);
                    }
                    t2body.appendChild(tr21);

                    var tr = document.createElement('tr');
                    var tdProd = document.createElement('td');
                    tdProd.innerHTML = `<img src="${rskObject['icon']}" style="width: 24px;"><br><h7>${langUI("one-time reward")}</h7>`;
                    tr.appendChild(tdProd);
                    var tdVal = document.createElement('td');
                    tdVal.innerHTML = `${rskObject['amount']}x <a class="text-link font-weight-bold" href="tomes.html#${rskObject['id']}" target="_blank">${rskObject['name']}</a>`;
                    tr.appendChild(tdVal);
                    t2body.appendChild(tr);
                    secondTable.appendChild(t2body);
                }

                divSecondTable.appendChild(secondTable);
                div.appendChild(divSecondTable);
                if (filteredData[i].hasOwnProperty('setBuilding')) {
                    setTable.appendChild(tSetBody);
                    divSetTable.appendChild(setTable);
                    div.appendChild(divSetTable);
                }
                document.getElementById('column_with_tables').appendChild(div);

                //CREATE AD SPACE

                if (currentSatisfiesAdPlacementEvents(i, filteredData.length)) {
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
            try {
                $(".adsense-inject").each(function () {
                    $(this).append('<div align="center"><ins class="adsbygoogle" style="display:block; width:40%; height:40%; margin-bottom:10px;" data-ad-format="fluid" data-ad-layout-key="-6t+ed+2i-1n-4w" data-ad-client="ca-pub-4154227292627045" data-ad-slot="7940520800"></ins></div>');
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            } catch (error) {
                $(".adsense-inject").each(function () {
                    $(this).append('<div align="center"><ins class="adsbygoogle" style="display:block; width:250px; margin-bottom:10px;" data-ad-format="fluid" data-ad-layout-key="-6t+ed+2i-1n-4w" data-ad-client="ca-pub-4154227292627045" data-ad-slot="7940520800"></ins></div>');
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            }

            //checkAdBlocker();

        })
}

function createEventHeader(selectedEvent, selectedEventName) {
    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI(selectedEventName)} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var eventImg = document.createElement("img");
    eventImg.id = `event_banner`;
    eventImg.src = `${eventBanners[selectedEvent]}`;
    eventImg.className = `center `;
    eventImg.style.marginBottom = `15px`;
    eventImg.style.width = `50%`;
    document.getElementById('column_with_tables').appendChild(eventImg);
}

function createCalendar(filteredData, selectedEvent) {
    var h5 = document.createElement('h5');
    h5.id = 'calendar_top';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Daily Prizes Calendar")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginBottom = '10px';
    var divBBTable = document.createElement('div');
    divBBTable.className = 'bbTable';
    var table = document.createElement('table');
    table.className = 'table-primary';
    table.style.width = '100%';
    var tbody = document.createElement('tbody');
    var numberOfRows = Math.floor(filteredData.length / 7);
    if (filteredData.length + 1 % 7 > 0) {  //bez pridania counteru do dalsieho dna bolo iba filteredData.length % 7 > 0
        numberOfRows++;
    }
    var daysCounter = 1;
    var prizesCounter = 1;
    let counterDayDisplayed = false;
    let counterPrizeDisplayed
    let currentEventDay = getCurrentEventDay();
    for (var line = 0; line < numberOfRows; line++) {
        var trDays = document.createElement('tr');
        for (var i = 0; i < 7; i++) {
            var tdDay = document.createElement('td');
            tdDay.style.width = "" + (100 / 7) + "%";
            if (daysCounter <= filteredData.length) {
                if (getDaysFromStart(selectedEvent, "") + 1 === daysCounter) {
                    tdDay.innerHTML = `<b>${daysCounter === currentEventDay ? "⪼ " : ""}${daysCounter}. ${langUI("day")}${daysCounter === currentEventDay ? " ⪻" : ""}</b>`
                } else {
                    tdDay.innerHTML = `<b>${daysCounter === currentEventDay ? "⪼ " : ""}${daysCounter}. ${langUI("day")}${daysCounter === currentEventDay ? " ⪻" : ""}</b>`
                }
            } else {
                if (daysCounter < dailyPrizes[selectedEvent].length + 1 && !counterDayDisplayed) {
                    tdDay.innerHTML = `<h7 class="card-title text-center text-link">?</h7>`;
                    counterDayDisplayed = true;
                }
            }
            trDays.appendChild(tdDay);
            daysCounter++;
        }
        tbody.appendChild(trDays);
        var trPrizes = document.createElement('tr');
        for (var i = 0; i < 7; i++) {
            var tdPrize = document.createElement('td');
            if (prizesCounter <= filteredData.length) {
                if (filteredData[prizesCounter - 1].hasOwnProperty('value')) {
                    tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#day${prizesCounter}">${langUI(filteredData[prizesCounter - 1]['name'])} 
                            (${Number.isNaN(filteredData[prizesCounter - 1]['value']) ? filteredData[prizesCounter - 1]['quantity'] : filteredData[prizesCounter - 1]['value']}${Number.isNaN(filteredData[prizesCounter - 1]['value']) ? "" : filteredData[prizesCounter - 1]['production_type']})</a>`;
                } else {
                    if (filteredData[prizesCounter - 1]['id'].substring(0, 5).toLowerCase() === 'frog_') {
                        tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#day${prizesCounter}">${langUI(getFrogName(filteredData[prizesCounter - 1]))}</a>`;
                    } else {
                        tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#day${prizesCounter}">${langBuildings(filteredData[prizesCounter - 1])}</a>`;
                    }
                }
            } else {
                if (prizesCounter < dailyPrizes[selectedEvent].length + 1 && !counterPrizeDisplayed) {
                    tdPrize.innerHTML = `<h7 class="card-title text-center text-link"><i>${langUI("Reveals in")} ${getHoursTillNextDay()}h</i></h7>`;
                    counterPrizeDisplayed = true;
                }
            }
            trPrizes.appendChild(tdPrize);
            prizesCounter++;
        }
        tbody.appendChild(trPrizes);
    }
    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    document.getElementById('column_with_tables').appendChild(div);
}

function getCurrentEventDay() {
    if (eventStartDates.hasOwnProperty(getSelectedEvent()) && !eventStartDates[getSelectedEvent()]["live"]["start_date"].includes("_")) {
        let startDateDisplayFormat = convertDisplayDateToJavascriptFormatDate(eventStartDates[getSelectedEvent()]["live"]["start_date"]);
        let startDate = new Date(startDateDisplayFormat);
        let currentDate = new Date();
        let difference = currentDate.getTime() - startDate.getTime();
        let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return totalDays;
    }
}

function insertVideo(selectedEvent, parent) {
    var h5 = document.createElement('h5');
    h5.id = 'video';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Event Video")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    for (let i = 0; i < eventVideos[selectedEvent].split(";").length; i++) {
        var center = document.createElement('center');
        var iframe = document.createElement('iframe');
        iframe.style.width = "" + Math.min(560, (window.innerWidth - 50)) + "px";//'560px';
        iframe.style.height = "" + 315.2 * (Math.min(560, (window.innerWidth - 50)) / 560) + "px";
        //iframe.allow = 'autoplay; encrypted-media';
        iframe.setAttribute('allowFullScreen', 'true');
        iframe.src = eventVideos[selectedEvent].split(";")[i];
        iframe.style.marginBottom = '15px';
        center.appendChild(iframe);
        parent.appendChild(center);
    }
}

function filterEvent(filterData, objectToPass) {
    return objectToPass['id'].toLowerCase().includes(filterData.toLowerCase());
}

function hasAppearance(filterData, objectToPass) {
    return objectToPass['appearances'].hasOwnProperty(filterData);
}

function applyFilters(data, selectedEvent) {
    let result = {};

    return result;
}

function getDaysFromStart(selectedEvent, flag = "") {
    if (!eventBetaStarts.hasOwnProperty(selectedEvent)) {
        return 0;
    }
    let start = "";
    if (flag === "live") {
        start = eventLiveStarts[selectedEvent];
    } else {
        start = eventBetaStarts[selectedEvent];
    }
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = today.getUTCFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let tod = new Date(today);
    return (tod - new Date(start)) / 1000 / 60 / 60 / 24;
}

function getDaysFromDate(date) {
    let start = "";
    start = date;
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = today.getUTCFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let tod = new Date(today);
    return (tod - new Date(start)) / 1000 / 60 / 60 / 24;
}

function getHoursTillNextDay() {
    let today = new Date();
    let hh = String(today.getUTCHours());
    let tom = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    tom.setUTCHours(0);
    tom.setUTCMinutes(0);
    tom.setUTCSeconds(0);
    let remainingHours = Math.floor(Math.abs(tom - today) / 36e5);
    if (remainingHours > 0) {
        return remainingHours.toString();
    } else {
        return "<1";
    }
}

function switchView(type) {
    if (type === "info" && view !== "info") {
        displayInfo();
        view = "info";
        //checkAdBlocker();
    } else if (type === "calendar" && view !== "calendar") {
        displayDailyPrizes();
        view = "calendar";
    } else if (type === "quests" && view !== "quests") {
        displayQuests();
        view = "quests";
        //checkAdBlocker();
    } else if (type === "prizes" && view !== "prizes") {
        displayPrizes();
        view = "prizes";
        //checkAdBlocker();
    } else if (type === "leagues" && view !== "leagues") {
        displayLeagues();
        view = "leagues";
        //checkAdBlocker();
    } else if (type !== "calendar" && type !== "quests" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (let tab = 0; tab < additionalTabsEvents[getSelectedEvent()].length; tab++) {
            if (additionalTabsEvents[getSelectedEvent()][tab]["id"] === type) {
                if (!additionalTabsEvents[getSelectedEvent()][tab].hasOwnProperty("releaseDate") || getDaysFromDate(additionalTabsEvents[getSelectedEvent()][tab]["releaseDate"]) >= 0) {
                    $(function () {
                        $("#column_with_tables").load("eventTabs/" + getSelectedEvent() + "/" + additionalTabsEvents[getSelectedEvent()][tab]["file"]);
                    });
                } else {
                    $(function () {
                        $("#column_with_tables").load("eventTabs/general/waitForTheDate.html");
                    });
                }
            }
        }
        //checkAdBlocker();
    }
    setDocumentTitle(document, type, baseTabsEvents, additionalTabsEvents, "events");
    //handleQuestsCopy(view);
}

function setView(value) {
    view = value;
}

function displayInfo() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();

    let eventSelect = document.getElementById('input_event');
    let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
    let selectedEventName = eventSelect.options[eventSelect.selectedIndex].text;
    document.getElementById("column_with_tables").innerHTML = "";
    createEventHeader(selectedEvent, selectedEventName);

    var h5 = document.createElement('h5');
    h5.id = 'quests_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.style.marginTop = "20px";
    h5.innerHTML = `..:: ${langUI("Announcement")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);

    let announcementDiv = document.createElement('div');
    announcementDiv.style.paddingLeft = "50px";
    announcementDiv.style.paddingRight = "50px";
    announcementDiv.style.marginTop = "20px";
    announcementDiv.style.marginBottom = "30px";
    if (eventsAnnouncements.hasOwnProperty(selectedEvent)) {
        for (let i = 0; i < eventsAnnouncements[selectedEvent].split("<br>").length; i++) {
            let p = document.createElement('p');
            p.innerHTML = `${eventsAnnouncements[selectedEvent].split("<br>")[i].italics()}`;
            p.style.fontSize = "small";
            if (i != eventsAnnouncements[selectedEvent].split("<br>").length - 1) {
                p.style.marginBottom = "-5px";
            }
            announcementDiv.appendChild(p);
        }
    }
    document.getElementById('column_with_tables').appendChild(announcementDiv);

    let center = document.createElement('center');

    createDatesTable(center, eventStartDates[getSelectedEvent()]["live"]["start_date"],
        eventStartDates[getSelectedEvent()]["live"]["end_date"],
        eventStartDates[getSelectedEvent()]["beta"]["start_date"],
        eventStartDates[getSelectedEvent()]["beta"]["end_date"]);

    document.getElementById("column_with_tables").appendChild(center);

    create_exception("Info Generated!", 3, 'success');
}

function displayQuests() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();

    let eventSelect = document.getElementById('input_event');
    let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
    let selectedEventName = eventSelect.options[eventSelect.selectedIndex].text;
    document.getElementById("column_with_tables").innerHTML = "";
    createEventHeader(selectedEvent, selectedEventName);

    var h5 = document.createElement('h5');
    h5.id = 'quests_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("List of Quests")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);

    var numberOfQuests = quests[selectedEvent]?.length;
    var divContainer = document.createElement('div');
    divContainer.className = 'quests_container';

    if (numberOfQuests === 0 || quests[selectedEvent] === undefined || getDaysFromStart(selectedEvent) < 0) {
        var h7 = document.createElement('h7');
        h7.id = 'quests_noQuests';
        h7.className = "card-title text-center";
        h7.style.textAlign = "left";
        h7.innerHTML = `${langUI("No recorded questline is available for this event")}.`;
        var center = document.createElement('center');
        center.appendChild(h7);
        document.getElementById('column_with_tables').appendChild(center);

    } else {

        var shareLink = document.createElement('h7');
        shareLink.id = 'quests_shareLink';
        shareLink.className = "card-title text-center";
        shareLink.style.textAlign = "left";
        shareLink.innerHTML = `${langUI('You can send the quest list to other players by sharing the following link')}: <i class='text-title'><b>${questsLinks[selectedEvent]}</b></i><br>
        ${langUI("This is the preferred way of sharing quests. If you would like to store the quests for yourself and take a copy of the current version, you can use the Download button" +
            " at the bottom of the page.")}<br>`;
        var center = document.createElement('center');
        center.appendChild(shareLink);
        document.getElementById('column_with_tables').appendChild(center);

        generateCurrencyCalculator(document.getElementById('column_with_tables'));

        generateServerSelector(document.getElementById('column_with_tables'));

        var nextQuestMarkedUnknown = false;

        var selectedChapter = getChapterInServer(getSelectedServer());

        for (let quest = 0; quest <= numberOfQuests; quest++) {
            if (quest === 0) {
                var nextColumn = 1;

                let number = document.createElement('div');
                number.innerHTML = `${langUI("Number")}`;
                number.style.gridArea = `1/${nextColumn++}`;
                divContainer.appendChild(number);

                let task = document.createElement('div');
                task.innerHTML = `${langUI("Task")}`;
                task.style.gridArea = `1/${nextColumn++}`;
                divContainer.appendChild(task);

                let reward;
                if (questContainRewards(selectedEvent, quest)) {
                    reward = document.createElement('div');
                    reward.innerHTML = `${langUI("Reward")}`;
                    reward.style.gridArea = `1/${nextColumn++}`;
                    divContainer.appendChild(reward);
                }

                let finished = document.createElement('div');
                finished.innerHTML = `${langUI("Finished")}`;
                finished.style.gridArea = `1/${nextColumn++}`;
                divContainer.appendChild(finished);

                number.style.backgroundColor = task.style.backgroundColor = finished.style.backgroundColor = "#ccb790";
                if (questContainRewards(selectedEvent, quest)) reward.style.backgroundColor = "#ccb790";
                number.style.border = task.style.border = finished.style.border = "1px solid #DCC698";
                if (questContainRewards(selectedEvent, quest)) reward.style.border = "1px solid #DCC698";
                number.style.borderBottom = task.style.borderBottom = finished.style.borderBottom = "2px solid #10212a";
                if (questContainRewards(selectedEvent, quest)) reward.style.borderBottom = "2px solid #10212a";
                number.style.fontWeight = task.style.fontWeight = finished.style.fontWeight = "bold";
                if (questContainRewards(selectedEvent, quest)) reward.style.fontWeight = "bold";
                number.style.fontSize = task.style.fontSize = finished.style.fontSize = "0.9em";
                if (questContainRewards(selectedEvent, quest)) reward.style.fontSize = "0.9em";

            } else {
                insertQuestsAd(quest, divContainer);
                var nextColumn = 1;
                var questParts;
                //console.log(quest, quests[selectedEvent][quest - 1]);
                var currentQuest = null;
                if (Array.isArray(quests[selectedEvent][quest - 1])) {
                    currentQuest = quests[selectedEvent][quest - 1];
                } else {
                    currentQuest = quests[selectedEvent][quest - 1][findRange(selectedChapter, Object.keys(quests[selectedEvent][quest - 1]))];
                }

                if (questContainRewards(selectedEvent, quest - 1)) {
                    questParts = questTranslate(currentQuest.slice(0, -1));
                } else {
                    questParts = questTranslate(currentQuest);
                }
                let questRowsNumber = 1;
                if (questAvailable(quest, selectedEvent)) questRowsNumber = questParts.length;

                let number = document.createElement('div');
                number.innerHTML = quest;
                number.style.gridArea = `${quest + 1 + Math.floor((quest - 1) / 30)}/${nextColumn++}`;
                number.style.marginTop = number.style.marginBottom = "3px";
                if (questRowsNumber > 1) number.style.paddingTop = number.style.paddingBottom = "7px";
                number.style.borderTopLeftRadius = number.style.borderBottomLeftRadius = "7px";
                number.style.borderTop = number.style.borderLeft = number.style.borderBottom = "1px solid #DCC698";
                number.style.borderRight = "none";
                divContainer.appendChild(number);

                let task = document.createElement('div');
                task.style.gridArea = `${quest + 1 + Math.floor((quest - 1) / 30)}/${nextColumn++}`;
                task.style.background = "linear-gradient(90deg, rgba(236,222,192,1) 0%, rgba(243,235,216,1) 50%, rgba(236,222,192,1) 100%)";
                if (questRowsNumber > 1) task.style.borderRadius = "5px";
                if (questAvailable(quest, selectedEvent)) {
                    task.className = "tasks-inner-grid";
                    var windowWidth = window.innerWidth;
                    var windowSizeLimit = 768;
                    var taskNumber = 1;
                    questParts.forEach(function (row, i) {
                        row.forEach(function (singleTask, j) {
                            var taskTd = document.createElement('div');
                            taskTd.innerHTML = singleTask;
                            taskTd.className = "nocopy";
                            taskTd.style.cursor = "pointer";

                            taskTd.addEventListener('click', function() {
                                if (Object.keys(getQuestsProgress()).length === 0) {
                                    recordQuestsProgress(getSelectedEvent(), getSelectedServer());
                                }
                                if (!getQuestsProgress().hasOwnProperty()) {
                                    recordQuestsProgress(getSelectedEvent(), getSelectedServer());
                                }

                                if (getQuestsProgress()[getSelectedServer()]["prepare"].hasOwnProperty(quest)) {
                                    if (!getQuestsProgress()[getSelectedServer()]["prepare"][quest].includes(parseInt(taskTd.id.split("_")[1])) &&
                                        !getQuestsProgress()[getSelectedServer()]["finished"].includes(quest)) {
                                        taskTd.classList.add("text-prepare");
                                        taskTd.style.fontWeight = "bold";
                                    } else {
                                        taskTd.classList.remove("text-prepare");
                                        taskTd.style.fontWeight = "";
                                    }
                                } else {
                                    if (!getQuestsProgress()[getSelectedServer()]["finished"].includes(quest)) {
                                        taskTd.classList.add("text-prepare");
                                        taskTd.style.fontWeight = "bold";
                                    }
                                }
                                recordQuestsProgress(getSelectedEvent(), getSelectedServer());
                            });

                            if (i != 0) taskTd.classList.add("secondRow");
                            if (i > 0 && j == 0) {
                                taskTd.classList.add("rowBeginning");
                            }
                            if (row.length > 1) {
                                if (j == 0) taskTd.classList.add("orFirstElement");
                                else taskTd.classList.add("orSecondElement");
                            }

                            if (j > 0) {
                                var orTd = document.createElement('div');
                                orTd.className = "orTableCell";
                                orTd.id = `taskCell${quest}_${taskNumber}`;
                                if (windowWidth >= windowSizeLimit) {
                                    orTd.style.gridArea = `${i + 1}/${2 * j}`;
                                }
                                else {
                                    orTd.style.gridArea = `${taskNumber}/1/${taskNumber}/span 3`
                                };
                                orTd.innerHTML = langUI("or");
                                orTd.style.fontStyle = "italic";
                                orTd.style.fontSize = "0.9em";
                                task.appendChild(orTd);
                                taskNumber++;
                            }

                            if (windowWidth >= windowSizeLimit) {
                                if (row.length == 1) taskTd.style.gridArea = `${i + 1}/1/${i + 1}/span 3`;
                                else taskTd.style.gridArea = `${i + 1}/${2 * j + 1}`;
                            }
                            else {
                                taskTd.style.gridArea = `${taskNumber}/1/${taskNumber}/span 3`;
                            }

                            taskTd.id = `taskCell${quest}_${taskNumber}`;

                            if (getQuestsProgress().hasOwnProperty(getSelectedServer())) {

                                // this is only temporary, for transfer between old and new version (removed prepare checkboxes)
                                if (Array.isArray(getQuestsProgress()[getSelectedServer()]["prepare"])) {
                                    var currentData = getQuestsProgress();
                                    currentData[getSelectedServer()]["prepare"] = {};
                                    setQuestsProgress(currentData);
                                }
                                
                                if (getQuestsProgress()[getSelectedServer()]["prepare"].hasOwnProperty(quest) &&
                                getQuestsProgress()[getSelectedServer()]["prepare"][quest].includes(parseInt(taskTd.id.split("_")[1]))) {
                                    taskTd.classList.add("text-prepare");
                                    taskTd.style.fontWeight = "bold";
                                }

                            }

                            task.appendChild(taskTd);
                            taskNumber++;
                        });
                    });
                }
                else {
                    if (!nextQuestMarkedUnknown) {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>${langUI("Reveals in")} ${getHoursTillNextDay()}h</i></h7>`;
                        nextQuestMarkedUnknown = true;
                    } else {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>???</i></h7>`;
                    }
                    task.style.border = "1px solid #DCC698";
                }
                //task.style.width = "90%";
                task.id = "quest_task_" + (quest);
                //console.log(quest+". "+questTranslate(quests[selectedEvent][quest-1]))
                /*task.innerHTML += `<div class="myTest custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>`;*/
                /*task.className = "text-left";
                task.style.paddingLeft = "10px";*/

                let reward;
                if (questContainRewards(selectedEvent, quest-1)) {
                    reward = document.createElement('div');
                    reward.style.gridArea = `${quest + 1 + Math.floor((quest - 1) / 30)}/${nextColumn++}`;
                    reward.style.marginTop = reward.style.marginBottom = "3px";
                    if (questRowsNumber > 1) reward.style.paddingTop = reward.style.paddingBottom = "7px";
                    reward.style.borderTop = reward.style.borderRight = reward.style.borderBottom = "1px solid #DCC698";
                    reward.style.borderLeft = "none";

                    var rewardValue = currentQuest[currentQuest.length - 1];
                    var rewardp = document.createElement('p');
                    rewardp.style.margin = "0";
                    rewardp.style.padding = "0";
                    rewardp.innerHTML = `${increaseByAshenPhoenixes(rewardValue)}x <img src="./images/events/icons/${getSelectedEvent()}.png" style="width: 18px; display: inline-block;">`;
                }

                let finished = document.createElement('div');
                finished.style.gridArea = `${quest + 1 + Math.floor((quest - 1) / 30)}/${nextColumn++}`;
                finished.style.marginTop = finished.style.marginBottom = "3px";
                if (questRowsNumber > 1) finished.style.paddingTop = finished.style.paddingBottom = "7px";
                finished.style.borderTopRightRadius = finished.style.borderBottomRightRadius = "7px";
                finished.style.borderTop = finished.style.borderRight = finished.style.borderBottom = "1px solid #DCC698";
                finished.style.borderLeft = "none";
                finished.className = "form-check";

                let input = document.createElement('input');
                input.className = "form-check-input";
                input.type = "checkbox";
                input.id = "quest_finished_" + (quest);
                input.style.float = "none";
                input.style.position = "static";
                input.style.marginLeft = 0;
                if (getQuestsProgress() && getQuestsProgress()[parseInt(getSelectedServer())] && getQuestsProgress()[parseInt(getSelectedServer())]["finished"].includes(quest)) {
                    input.checked = true;
                    task.className = "tasks-inner-grid text-quest_completed nocopy";
                }
                input.onchange = function () {
                    if (input.checked) {
                        for (let i = 1; i <= quest; i++) {
                            checkbox = document.getElementById("quest_finished_" + (i));
                            tasktext = document.getElementById("quest_task_" + (i));

                            checkbox.checked = true;
                            tasktext.classList.add("text-quest_completed");
                            for (let partNumber = 1; partNumber <= 6; partNumber++) { //will need to change if parts amount per quest is increased in the future
                                var part = document.getElementById(`taskCell${i}_${partNumber}`);
                                if (part) {
                                    part.classList.remove("text-prepare");
                                    part.style.fontWeight = "";
                                }
                            }
                        }
                    } else {
                        for (let i = quest; i <= numberOfAvailableQuests(selectedEvent); i++) {
                            checkbox = document.getElementById("quest_finished_" + (i));
                            tasktext = document.getElementById("quest_task_" + (i));

                            checkbox.checked = false;
                            tasktext.classList.remove("text-quest_completed");
                        }
                    }

                    recordQuestsProgress(getSelectedEvent(), getSelectedServer());
                    updateCurrencyCalculator();
                };
                let label = document.createElement('label');
                label.className = "form-check-label";
                label.htmlFor = quest;
                label.innerHTML = "";

                if (questAvailable(quest, selectedEvent)) {
                    if (questContainRewards(selectedEvent, quest-1)) reward.appendChild(rewardp);
                    if (questContainRewards(selectedEvent, quest-1)) reward.style.paddingLeft = "3px";
                    finished.appendChild(input);
                    finished.appendChild(label);
                }
                else {
                    let emptyP1 = document.createElement('p');
                    let emptyP2 = document.createElement('p');
                    let emptyP3 = document.createElement('p');
                    emptyP1.style.margin = emptyP2.style.margin = emptyP3.style.margin = "7px";
                    if (questContainRewards(selectedEvent, quest-1)) reward.appendChild(emptyP3);
                    finished.appendChild(emptyP1);
                }
                divContainer.appendChild(task);
                if (questContainRewards(selectedEvent, quest-1)) divContainer.appendChild(reward);
                divContainer.appendChild(finished);
            }
        }
    }
    document.getElementById('column_with_tables').appendChild(divContainer);

    if (quests.hasOwnProperty(getSelectedEvent()) && quests[getSelectedEvent()].length > 0 && quests[getSelectedEvent()][0] != "" && getDaysFromStart(selectedEvent) >= 0) {
        generateShareButtons(document.getElementById('column_with_tables'));
    }

    updateCurrencyCalculator();

    try {
        $(".adsense-inject").each(function () {
            $(this).append('<div align="center"><ins class="adsbygoogle" style="display:block; width:30%; height:30%;" data-ad-format="fluid" data-ad-layout-key="-6t+ed+2i-1n-4w" data-ad-client="ca-pub-4154227292627045" data-ad-slot="7940520800"></ins></div>');
            (adsbygoogle = window.adsbygoogle || []).push({});
        });
    } catch (error) {
        $(".adsense-inject").each(function () {
            $(this).append('<div align="center"><ins class="adsbygoogle" style="display:block; width:250px;" data-ad-format="fluid" data-ad-layout-key="-6t+ed+2i-1n-4w" data-ad-client="ca-pub-4154227292627045" data-ad-slot="7940520800"></ins></div>');
            (adsbygoogle = window.adsbygoogle || []).push({});
        });
    }

    create_exception("Quests Generated!", 3, 'success');
}

window.onresize = function() {
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        var numberOfQuests = quests[getSelectedEvent()].length;
        for (i=1;i<=numberOfQuests;i++) {
            var j = 1;
            var cont = true;
            while (cont) {
                var element = document.getElementById(`taskCell${i}_${j}`);
                if (element) {
                    element.style.gridArea = `${j}/1/${j}/span 3`;
                    j++;
                }
                else cont = false;
            }
        }
    }
    else {
        var numberOfQuests = quests[getSelectedEvent()].length;
        for (i=1;i<=numberOfQuests;i++) {
            var j = 1;
            var row = 1;
            var cont = true;
            while (cont) {
                var element = document.getElementById(`taskCell${i}_${j}`);
                if (element) {
                    if (element.classList.contains("orFirstElement"))
                        element.style.gridArea = `${row}/1`;
                    else if (element.classList.contains("orTableCell"))
                        element.style.gridArea = `${row}/2`;
                    else if (element.classList.contains("orSecondElement")) {
                        element.style.gridArea = `${row}/3`;
                        row++;
                    }
                    else {
                        element.style.gridArea = `${row}/1/${row}/span 3`;
                        row++;
                    }
                    j++;
                }
                else cont = false;
            }
        }
    }
}

function questContainRewards(selectedEvent, questNumber) {
    if (Array.isArray(quests[selectedEvent][questNumber])) {
        return typeof quests[selectedEvent][questNumber][quests[selectedEvent][questNumber].length - 1] === 'number';
    }
    return typeof quests[selectedEvent][questNumber][Object.keys(quests[selectedEvent][questNumber])[0]].slice(-1)[0] === 'number';
}

function findRange(chapter, ranges) {
    for (const range of ranges) {
      const [start, end] = range.split('-');
      const startNumber = parseInt(start, 10);
  
      if (end === 'MAX') {
        if (chapter >= startNumber) {
          return range;
        }
      } else {
        const endNumber = parseInt(end, 10);
  
        if (chapter >= startNumber && chapter <= endNumber) {
          return range;
        }
      }
    }
  
    return null;
  }

function generateCurrencyCalculator(parent) {
    let center = document.createElement('center');
    let divCalculator = document.createElement('div');
    divCalculator.className = "card-spoiler border-spoiler mb-3";
    divCalculator.style.marginTop = "10px";
    divCalculator.style.paddingBottom = "10px";
    divCalculator.style.paddingTop = "7px";
    divCalculator.style.paddingLeft = "20px";
    divCalculator.style.paddingRight = "20px";
    divCalculator.style.width = "70%";

    let divRow1 = document.createElement('div');
    divRow1.className = "row";
    divRow1.innerHTML = `<b>Remaining currency calculation:</b>`;
    divRow1.style.textAlign = "center";
    divCalculator.appendChild(divRow1);

    let divRow2 = document.createElement('div');
    divRow2.className = "row";
    let fieldset = document.createElement('fieldset');
    let i = document.createElement('i');
    let h7_1 = document.createElement('h7');
    h7_1.innerHTML = `Number of Ashen Phoenixes in your city (stage 10): `;
    //i.appendChild(h7_1);

    let input1 = document.createElement('input');
    input1.type = "number";
    input1.id = `ashen_phoenixes`;
    input1.name = `phoenixes`;
    input1.min = 0;
    input1.max = 20;
    if (getNumberOfAshenPhoenixes()) {
        input1.value = getNumberOfAshenPhoenixes();
    } else {
        input1.value = 0;
    }
    input1.onchange = function () {
        setNumberOfAshenPhoenixes(input1.value);
        updateCurrencyCalculator();
    }
    input1.style.marginLeft = "3px";
    input1.style.marginRight = "3px";
    input1.style.width = "40px";
    input1.style.height = "21px";
    //i.appendChild(input1);
    let label1 = document.createElement('label');
    label1.htmlFor = `ashen_phoenixes`;
    label1.innerHTML = `<h7></h7>`;
    //i.appendChild(label1);

    fieldset.appendChild(i);
    divRow2.appendChild(fieldset);
    divCalculator.appendChild(divRow2);

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "center";
    divRow3.id = "currency_calc";
    divCalculator.appendChild(divRow3);
    center.appendChild(divCalculator);

    parent.appendChild(center);
}

function updateCurrencyCalculator() {
    var result = 0;
    if (quests[getSelectedEvent()] !== undefined) {
        for (let i = 1; i <= quests[getSelectedEvent()].length; i++) {
            if (Array.isArray(quests[getSelectedEvent()][i - 1])) {
                if (typeof quests[getSelectedEvent()][i - 1][quests[getSelectedEvent()][i - 1].length - 1] === 'number') {
                    var checkbox = document.getElementById(`quest_finished_${i}`);
                    if (!checkbox || !checkbox.checked) {
                        var gain = quests[getSelectedEvent()][i - 1][quests[getSelectedEvent()][i - 1].length - 1];
                        if (getNumberOfAshenPhoenixes() > 0) {
                            gain = increaseByAshenPhoenixes(gain);
                        }
                        result += gain;
                    }
                } else {
                    return;
                }
            } else {
                let foundRange = findRange(getChapterInServer(getSelectedServer()), Object.keys(quests[getSelectedEvent()][i - 1]));
                if (typeof quests[getSelectedEvent()][i - 1][foundRange][quests[getSelectedEvent()][i - 1][foundRange].length - 1] === 'number') {
                    var checkbox = document.getElementById(`quest_finished_${i}`);
                    if (!checkbox || !checkbox.checked) {
                        var gain = quests[getSelectedEvent()][i - 1][foundRange][quests[getSelectedEvent()][i - 1][foundRange].length - 1];
                        if (getNumberOfAshenPhoenixes() > 0) {
                            gain = increaseByAshenPhoenixes(gain);
                        }
                        result += gain;
                    }
                } else {
                    return;
                }
            }
        }
        var divRow3 = document.getElementById("currency_calc");
        if (divRow3) {
            divRow3.innerHTML = result + ` <img src="./images/events/icons/${getSelectedEvent()}.png" style="width: 20px;">`;
        }
    }
}

function increaseByAshenPhoenixes(value) {
    return value + Math.ceil(value / 100 * 2 * getNumberOfAshenPhoenixes());
}

function generateShareButtons(parent) {
    if (quests[getSelectedEvent()] && quests[getSelectedEvent()].length > 0) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-download', 'btn-sm');
        button.dataset.toggle = 'modal';
        button.dataset.target = '#exampleModalCenter';
        button.textContent = 'Download Quests';
        button.style.display = 'block';
        button.style.marginTop = "15px";

        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.id = 'exampleModalCenter';
        modal.tabIndex = '-1';
        modal.role = 'dialog';
        modal.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
        modal.setAttribute('aria-hidden', 'true');

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
        modalDialog.role = 'document';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');

        const modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.id = 'exampleModalLongTitle';
        modalTitle.textContent = 'Keep in mind...';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('close');
        closeButton.dataset.dismiss = 'modal';
        closeButton.setAttribute('aria-label', 'Close');

        const closeIcon = document.createElement('span');
        closeIcon.setAttribute('aria-hidden', 'true');
        closeIcon.innerHTML = '&times;';

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        modalBody.innerHTML = `You are about to download the current version of quests list.<br> In case some further in-game adjustments happen,
        I will update the website as soon as possible to ensure it provides the most reliable version!<br><br> However, I'm not able to update all the copies you create.
        Therefore, if you wish to share the quests list with other players, it is highly recommended to use the provided share link:
        <i class='text-title'><b>${questsLinks[getSelectedEvent()]}</b></i><br><br>
        If you decide to download the current version of quests, keep in mind that your copy may require additional updates and redownloading in the future.`;

        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');

        const closeButton2 = document.createElement('button');
        closeButton2.type = 'button';
        closeButton2.classList.add('btn', 'btn-secondary');
        closeButton2.dataset.dismiss = 'modal';
        closeButton2.textContent = 'Close';

        const saveChangesButton = document.createElement('button');
        saveChangesButton.type = 'button';
        saveChangesButton.classList.add('btn', 'btn-download');
        saveChangesButton.innerHTML = `Download`;

        closeButton.appendChild(closeIcon);

        modalFooter.appendChild(closeButton2);
        modalFooter.appendChild(saveChangesButton);

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog);

        var center = document.createElement('center');
        center.appendChild(button);
        parent.appendChild(center);
        parent.appendChild(modal);

        function downloadWord() {
            //create_exception("Currently unavailable.", 10000, 'danger');
            var textArray = [];
            function removeImgFromString(str) {
                const pattern = /<img[^>]*>/g;
                return str.replace(pattern, '');
            }
            var questUnlockedTomorrow = false;
            quests[getSelectedEvent()].forEach(function (item, number) {
                if (Array.isArray(item)) {
                    item = item;
                } else {
                    item = item[findRange(getChapterInServer(getSelectedServer()), Object.keys(item))];
                }
                //pravdepodobne tu treba spravit nieco typu item = getPodlaChapter()
                if (questAvailable(number + 1, getSelectedEvent())) {
                    if ((number + 1) % 30 === 0) {
                        textArray.push(`Source: idavis-elvenar.com`);
                    } else if (number === 0) {
                        const now = new Date();
                        const year = now.getFullYear();
                        const month = now.getMonth() + 1;
                        const day = now.getDate();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        const seconds = now.getSeconds();
                        textArray.push(`The following quest list has been downloaded from idavis-elvenar.com on ${year}-${month}-${day} at ${hours}:${minutes}.\nKeep an eye on the website to get notified about any further changes.\n`);
                        textArray.push(`This is the quest list generated for chapter ${getChapterInServer(getSelectedServer())}. You can change this setting on the website.\n`);
                    }
                    var quest = [];
                    var itemTranslated;
                    if (typeof item[item.length - 1] === 'number') {
                        itemTranslated = questTranslate(item.slice(0, -1));
                    } else {
                        itemTranslated = questTranslate(item);
                    }
                    itemTranslated.forEach(function (part) {
                        var or = [];
                        part.forEach(function (oneOr) {
                            var oneOrWithoutImg = removeImgFromString(oneOr);
                            or.push(oneOrWithoutImg);
                        });
                        quest.push(or.join(` ${langUI("or").toUpperCase()} `));
                    });
                    var questString = quest.join(' + ');
                    textArray.push(`${number + 1}. ${questString}`);
                } else {
                    questUnlockedTomorrow = true;
                }
            });
            if (questUnlockedTomorrow) textArray.push(`The following quest will be available tomorrow`);
            const text = textArray.join('\r\n');
            const blob = new Blob([text], { type: 'text/plain' });
            const link = document.createElement('a');
            link.download = getSelectedEventName() + ` - ${langUI("Quests")} (iDavis).txt`;
            link.href = window.URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        }
        saveChangesButton.addEventListener('click', downloadWord);
    }
}

function generateServerSelector(parent) {
    var center = document.createElement('center');
    center.style.marginTop = "-10px";
    center.style.marginBottom = "5px";
    let serverSelector = document.createElement('div');
    serverSelector.className = "row";
    let fieldset = document.createElement('fieldset');
    let i = document.createElement('i');
    let h7_1 = document.createElement('h7');
    h7_1.innerHTML = `${langUI("Type the number of servers you play on: ")}`;
    i.appendChild(h7_1);

    let input1 = document.createElement('input');
    input1.type = "number";
    input1.id = `servers_number`;
    input1.name = `servers`;
    input1.min = 1;
    input1.max = 10;
    if (getNumberOfServers()) {
        input1.value = parseInt(getNumberOfServers());
    } else {
        input1.value = 1;
    }
    input1.onchange = function () {
        if (parseInt(input1.value) >= input1.min && parseInt(input1.value) <= input1.max) {
            input1.value = Math.floor(input1.value);
            setNumberOfServers(input1.value);
            generateServerRadioButtons();
        } else {
            input1.value = 1;
            setNumberOfServers(input1.value);
            generateServerRadioButtons();
        }
    }
    input1.style.marginLeft = "3px";
    input1.style.marginRight = "3px";
    input1.style.width = "40px";
    input1.style.height = "21px";
    i.appendChild(input1);
    let label1 = document.createElement('label');
    label1.htmlFor = `servers_number`;
    label1.innerHTML = `<h7></h7>`;
    i.appendChild(label1);

    function generateServerRadioButtons() {
        for (let s = 1; s <= 10; s++) {
            var element1 = document.getElementById(`server${s}`);
            var element2 = document.getElementById(`server${s}_label`);
            if (element1) {
                element1.remove();
            }
            if (element2) {
                element2.remove();
            }
        }
        for (let s = 1; s <= input1.value; s++) {
            let input3 = document.createElement('input');
            input3.type = "radio";
            input3.id = `server${s}`;
            input3.name = `server`;
            input3.value = `${s}`;
            if (getSelectedServer()) {
                input3.checked = getSelectedServer() === input3.value;
            } else {
                input3.checked = s === 1;
            }
            if (s == 1 && parseInt(input1.value) < getSelectedServer()) {
                input3.checked = true;
                setSelectedServer(s);
            }
            input3.onchange = function () {
                setSelectedServer(s);
                //location.reload();
                displayQuests();
            }
            input3.style.marginLeft = "3px";
            i.appendChild(input3);
            let label3 = document.createElement('label');
            label3.htmlFor = `server${s}`;
            label3.id = `server${s}_label`
            label3.innerHTML = `<h7>Server${s} <img src="${chapter_icons[getChapterInServer(s)]}" style="width: 20px;">&nbsp;&nbsp;</h7>`;
            i.appendChild(label3);
        }
    };

    generateServerRadioButtons();

    let settings = document.createElement('img');
    settings.src = "https://i.ibb.co/0ycDvJx/options.png";
    settings.style.width = "24px";
    settings.style.marginLeft = "5px";
    settings.style.cursor = "pointer";
    settings.onclick = function() {
        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.id = 'settingsModal'; 
        modal.tabIndex = '-1';
        modal.role = 'dialog';
        modal.setAttribute('aria-labelledby', 'settingsModalTitle');
        modal.setAttribute('aria-hidden', 'true');

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
        modalDialog.role = 'document';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');

        const modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.id = 'settingsModalTitle';
        modalTitle.textContent = 'Servers Settings';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('close');
        closeButton.dataset.dismiss = 'modal';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.addEventListener('click', function() {
            $('#settingsModal').modal('hide');
            modal.remove();
        });

        const closeIcon = document.createElement('span');
        closeIcon.setAttribute('aria-hidden', 'true');
        closeIcon.innerHTML = '&times;';

        closeButton.appendChild(closeIcon);
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        modalBody.innerHTML = `Select the chapters you are currently in on the respective servers. This information will be used when displaying the quests to you, as different chapters might have varying conditions in the quest lists.<br><br>`;

        for (let serverNum = 1; serverNum <= getNumberOfServers(); serverNum++) {
            const serverContainer = document.createElement('div');
            serverContainer.classList.add('server-container');

            const serverText = document.createElement('span');
            serverText.textContent = `Server${serverNum}: `;

            const selectBox = document.createElement('select');
            selectBox.className = 'custom-select';
            selectBox.id = `selectBox${serverNum}`;
            selectBox.style.width = '80px';

            const imageDisplay = document.createElement('img');
            imageDisplay.style.width = '24px';
            imageDisplay.style.marginLeft = '5px';

            for (let chNumber = 1; chNumber <= numberOfChapters; chNumber++) {
                const option = document.createElement('option');
                option.value = chNumber;
                option.textContent = chNumber;
                option.setAttribute('data-image', chapter_icons[chNumber]);
                selectBox.appendChild(option);
            }

            const defaultChapter = getChapterInServer(serverNum);

            selectBox.value = defaultChapter;
            const defaultSelectedOption = selectBox.options[selectBox.selectedIndex];
            const defaultImageUrl = defaultSelectedOption.getAttribute('data-image');
            imageDisplay.src = defaultImageUrl;

            selectBox.addEventListener('change', function () {
                const selectedOption = this.options[this.selectedIndex];
                const imageUrl = selectedOption.getAttribute('data-image');
                imageDisplay.src = imageUrl;
            });

            serverContainer.appendChild(serverText);
            serverContainer.appendChild(selectBox);
            serverContainer.appendChild(imageDisplay);
            modalBody.appendChild(serverContainer);
        }
        

        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');

        const closeButton2 = document.createElement('button');
        closeButton2.type = 'button';
        closeButton2.classList.add('btn', 'btn-secondary');
        closeButton2.setAttribute('data-dismiss', 'modal');
        closeButton2.textContent = 'Close';
        closeButton2.addEventListener('click', function() {
            $('#settingsModal').modal('hide');
            modal.remove();
        });

        const saveChangesButton = document.createElement('button');
        saveChangesButton.type = 'button';
        saveChangesButton.classList.add('btn', 'btn-download');
        saveChangesButton.innerHTML = `Save Changes`;
        saveChangesButton.addEventListener('click', function() {
            for (let serv = 1; serv <= getNumberOfServers(); serv++) {
                let currentSelectBox = document.getElementById(`selectBox${serv}`);
                const selectedOptionIndex = currentSelectBox.selectedIndex;
                const selectedOption = currentSelectBox.options[selectedOptionIndex];
                const selectedValue = selectedOption.value;
                setChapterInServer(serv, selectedValue);
            }
            $('#settingsModal').modal('hide');
            modal.remove();
            //location.reload();
            displayQuests();
        });

        modalFooter.appendChild(closeButton2);
        modalFooter.appendChild(saveChangesButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        parent.appendChild(modal);

        $('#settingsModal').on('hidden.bs.modal', function () {
            modal.remove();
        });

        $('#settingsModal').modal('show');
    };

    

    fieldset.appendChild(i);
    serverSelector.appendChild(fieldset);

    let fieldset2 = document.createElement('fieldset');
    let i2 = document.createElement('i');
    let label4 = document.createElement('label');
    label4.htmlFor = `settings`;
    label4.id = `settings_label`;
    label4.innerHTML = `<h7>Settings:</h7>`;
    i2.appendChild(label4);
    fieldset2.appendChild(i2);
    fieldset2.appendChild(settings);
    serverSelector.appendChild(fieldset2);

    center.appendChild(serverSelector);
    parent.appendChild(center);
}

function getChapterInServer(serverNum) {
    if (localStorage.getItem("chapters_in_servers") === null) {
        let obj = {};
        for (let server = 1; server <= getNumberOfServers(); server++) {
            obj[server] = numberOfChapters;
        }
        localStorage.setItem("chapters_in_servers", JSON.stringify(obj));
        return obj[serverNum];
    }
    let obj = JSON.parse(localStorage.getItem("chapters_in_servers"));
    if (obj.hasOwnProperty(serverNum)) {
        return obj[serverNum];
    }
    obj[serverNum] = numberOfChapters;
    return numberOfChapters;
}

function setChapterInServer(server, chapter) {
    if (localStorage.getItem("chapters_in_servers") === null) {
        let obj = {};
        obj[server] = chapter;
        localStorage.setItem("chapters_in_servers", JSON.stringify(obj));
    }
    let obj = JSON.parse(localStorage.getItem("chapters_in_servers"));
    obj[server] = chapter;
    localStorage.setItem("chapters_in_servers", JSON.stringify(obj));
}

function getNumberOfAshenPhoenixes() {
    if (localStorage.getItem("number_of_ashen_phoenixes") === null) {
        localStorage.setItem("number_of_ashen_phoenixes", 0);
        return 0;
    }
    return localStorage.getItem("number_of_ashen_phoenixes");
}

function setNumberOfAshenPhoenixes(value) {
    localStorage.setItem("number_of_ashen_phoenixes", value);
}

function getNumberOfServers() {
    if (localStorage.getItem("number_of_servers") === null) {
        localStorage.setItem("number_of_servers", 1);
        return 1;
    }
    return localStorage.getItem("number_of_servers");
}

function setNumberOfServers(value) {
    localStorage.setItem("number_of_servers", value);
}

function getSelectedServer() {
    if (localStorage.getItem("selected_server") === null) {
        localStorage.setItem("selected_server", 1);
        return 1;
    }
    return localStorage.getItem("selected_server");
}

function setSelectedServer(value) {
    localStorage.setItem("selected_server", value);
    updateDisplayedProgress();
    updateCurrencyCalculator();
}

function getQuestsProgress() {
    if (localStorage.getItem("quests_progress_" + getSelectedEvent()) == null) {
        return {};
    }
    return JSON.parse(localStorage.getItem("quests_progress_" + getSelectedEvent()));
}

function setQuestsProgress(value) {
    localStorage.setItem("quests_progress_" + getSelectedEvent(), JSON.stringify(value));
}

function updateDisplayedProgress() {
    for (let quest = 1; quest <= numberOfAvailableQuests(getSelectedEvent()); quest++) {
        var checkbox = document.getElementById("quest_finished_" + (quest));
        checkbox.checked = false;
        var questText = document.getElementById("quest_task_" + (quest));
        questText.classList.remove("text-quest_completed");

        for (var partNumber = 1; partNumber <= 6; partNumber++) {
            var tasktext = document.getElementById(`taskCell${quest}_${partNumber}`);

            if (tasktext) {
                tasktext.classList.remove("text-prepare");
                tasktext.style.fontWeight = "";
            }
        }
    }
    for (let quest = 1; quest <= numberOfAvailableQuests(getSelectedEvent()); quest++) {
        if (getQuestsProgress() && getQuestsProgress()[getSelectedServer()] && getQuestsProgress()[getSelectedServer()]["finished"].includes(quest)) {
            var checkbox = document.getElementById("quest_finished_" + (quest));
            var tasktext = document.getElementById("quest_task_" + (quest));

            checkbox.checked = true;
            tasktext.classList.add("text-quest_completed");
            tasktext.style.fontWeight = "";
        }

        for (var partNumber = 1; partNumber <= 6; partNumber++) {
            if (getQuestsProgress() && getQuestsProgress()[getSelectedServer()] && 
            getQuestsProgress()[getSelectedServer()]["prepare"].hasOwnProperty(quest) && getQuestsProgress()[getSelectedServer()]["prepare"][quest].includes(partNumber)) {
                var tasktext = document.getElementById(`taskCell${quest}_${partNumber}`);
                
                if (tasktext) {
                    tasktext.classList.add("text-prepare");
                    tasktext.style.fontWeight = "bold";
                }
            }
        }
    }
}

function recordQuestsProgress(selectedEvent, selectedServer) {
    var result = getQuestsProgress();
    var tasksPerQuestLimit = 6;     // this might be increased if more tasks per quest are introduced in the future
    for (let s = 1; s <= getNumberOfServers(); s++) {
        if (s == selectedServer) {
            var server = {};
            server["finished"] = [];
            server["prepare"] = {};
            for (let quest = 1; quest <= numberOfAvailableQuests(selectedEvent); quest++) {
                if (document.getElementById("quest_finished_" + quest).checked) {
                    server["finished"].push(quest);
                }
                var preparePerQuest = [];
                for (let task = 1; task <= tasksPerQuestLimit; task++) {
                    if (document.getElementById(`taskCell${quest}_${task}`) &&
                        document.getElementById(`taskCell${quest}_${task}`).classList.contains("text-prepare")) {
                        preparePerQuest.push(task);
                    }
                }
                if (preparePerQuest.length > 0) {
                    server["prepare"][quest] = preparePerQuest;
                }
            }
            result[s] = server;
        }
    }
    setQuestsProgress(result);

    /*if (finished.length === numberOfQuests) {
        create_exception("Congrats! &#128516;", 5, 'success');
    }*/
}

function questAvailable(quest, selectedEvent) {
    return (quest - (quests[selectedEvent].length - eventsDurations[selectedEvent])) <= getDaysFromStart(selectedEvent) + 1;
}

function numberOfAvailableQuests(selectedEvent) {
    return Math.min(quests[selectedEvent].length - eventsDurations[selectedEvent] + getDaysFromStart(selectedEvent) + 1,
        quests[selectedEvent].length);
}

function currentSatisfiesAdPlacementEvents(i, dataLength) {
    return i === 2 || (i !== 0 && (i - 2) !== 0 && (i - 2) % 4 === 0 && i !== dataLength - 1)
}

function insertQuestsAd(questNumber, parent) {
    if (questNumber !== 1 && (questNumber - 1) % 30 == 0) {
        let divAd = document.createElement("div");
        divAd.className = "adsense-inject";
        divAd.style.gridArea = `${questNumber + Math.floor((questNumber) / 30)}/1/${questNumber + Math.floor((questNumber) / 30)}/span 5`;
        parent.appendChild(divAd);
    }
}

window.onload

function getFrogRewardObjectForChapter(allSubTypes, filteredData) {
    var res = {};
    for (var prod = 0; prod < allSubTypes.length; prod++) {
        for (var ch = 0; ch <= 1; ch++) {
            if (filteredData['rewards'][parseInt(getPresetChapter()) - 1]['subType'] === allSubTypes[prod]) {
                res['reward'] = allSubTypes[prod];
                res['amount'] = filteredData['rewards'][parseInt(getPresetChapter()) - 1]['amount'];
                return res;
            }
        }
    }
}

function getFrogName(filteredData) {
    var goodsIconsValue = goods_icons[filteredData['rewards'][getPresetChapter() - 1]['subType']];
    if (goodsIconsValue === undefined) {
        goodsIconsValue = goods_icons[filteredData['rewards'][getPresetChapter() - 1]['subType'].toLowerCase()];
    }
    return goodsIconsValue.split("title='")[1].substring(0, goodsIconsValue.split("title='")[1].indexOf("'>"))
}

var handleCopyVar = function handleCopy(evt) {
    evt.clipboardData.setData("text/plain", questsLinks[getSelectedEvent()]);
    evt.preventDefault();
}

function handleQuestsCopy(view) {
    if (view === "quests") {
        document.addEventListener("copy", handleCopyVar, false);
    } else {
        document.removeEventListener("copy", handleCopyVar, false);
    }
}

function displayPrizes() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";

    let eventSelect = document.getElementById('input_event');
    let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
    let selectedEventName = eventSelect.options[eventSelect.selectedIndex].text;

    createEventHeader(selectedEvent, selectedEventName);

    var h5 = document.createElement('h5');
    h5.id = 'prizes_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("List of Prizes")} ::..<br>`;
    parent.appendChild(h5);

    var div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginBottom = '10px';
    div.style.marginTop = '10px';
    var divBBTable = document.createElement('div');
    divBBTable.className = 'bbTable';
    var table = document.createElement('table');
    table.className = 'table-primary';
    table.style.width = '100%';
    var tbody = document.createElement('tbody');
    
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerHTML = 'Grand Prizes';
    th1.style.width = '46%';
    let th2 = document.createElement('th');
    th2.innerHTML = 'Cost';
    th2.style.width = '8%';
    let th3 = document.createElement('th');
    th3.innerHTML = 'Royal Prizes';
    th3.style.width = '46%';
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tbody.appendChild(tr);

    let currentReq = 0;
    let eventPrizes = eventsPrizes[selectedEvent];
    if (eventPrizes === undefined) {
        let center = document.createElement('center');
        center.innerHTML = `<h7>No recorded prizes for this event.</h7>`;
        parent.appendChild(center);
        return;
    }

    var prizesInfoText = document.createElement('h7');
    prizesInfoText.id = 'prizes_info_text';
    prizesInfoText.className = "card-title text-center";
    prizesInfoText.style.textAlign = "left";
    prizesInfoText.innerHTML = `${langUI(`This is the list of prizes for the ${getSelectedEventName()} event. Grand Prizes are available to everyone and you can also collect Royal Prizes with a one-time investment.`)}`;
    var center = document.createElement('center');
    center.appendChild(prizesInfoText);
    parent.appendChild(center);

    for (let prize = 0; prize < 26; prize++) {
        currentReq += eventPrizes.grandPrizes[prize].delta ? eventPrizes.grandPrizes[prize].delta : 0;
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.style.height = "140px";
        createPrizeCell(eventPrizes.grandPrizes[prize], td1);

        let td2 = document.createElement('td');
        td2.style.height = "140px";
        td2.innerHTML = `${currentReq}x `;
        let imgPayback = document.createElement('img');
        imgPayback.src = eventsPaybackIcons[selectedEvent];
        td2.appendChild(imgPayback);

        let td3 = document.createElement('td');
        td3.style.height = "140px";
        createPrizeCell(eventPrizes.royalPrizes[prize], td3);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);

    parent.appendChild(div);
}

function createPrizeCell(prize, cell) {
    if (prize.type === 'building') {
        let buildingId = prize.subType.split("$")[0];
        let buildingImage = images_buildings[buildingId];
        let amount = prize.amount;
        createBuildingPrizeCell(buildingId, buildingImage, amount, cell);
    } else if (prize.type === 'item' && prize.subType.toLowerCase().includes('ins_evo_')) {
        let artifactName = artifacts[prize.subType.toLowerCase()].name;
        let artifactImg = document.createElement('img');
        artifactImg.src = artifacts[prize.subType.toLowerCase()].img;
        artifactImg.style.maxWidth = "60px";
        cell.appendChild(artifactImg);
        cell.innerHTML += `<br>${prize.amount}x ${artifactName}`;
    } else if (prize.type === 'item' && prize.subType.toLowerCase().includes('ins_kp_')) {
        let kpName = `Ancient Knowledge ${prize.subType.split('_')[prize.subType.split('_').length-1]}`;
        let kpImg = document.createElement('img');
        kpImg.src = "https://i.ibb.co/FsPw0Z2/ins-kp-aw.png";
        kpImg.style.maxWidth = "60px";
        cell.appendChild(kpImg);
        cell.innerHTML += `<br>${prize.amount}x ${kpName}`;
    } else if (prize.type === 'item' && prize.subType.toLowerCase().includes('ins_rf_cn_')) {
        let rfName = `Coin Rain ${prize.subType.split('_')[prize.subType.split('_').length-1]}%`;
        let rfImg = document.createElement('img');
        rfImg.src = "https://i.ibb.co/7g1KCmv/ins-rf-cn.png";
        rfImg.style.maxWidth = "60px";
        cell.appendChild(rfImg);
        cell.innerHTML += `<br>${prize.amount}x ${rfName}`;
    } else if (prize.type === 'item' && prize.subType.toLowerCase().includes('ins_rev_sqd_')) {
        let revName = `Vitality Surge ${prize.subType.split('_')[prize.subType.split('_').length-1]}`;
        let revImg = document.createElement('img');
        revImg.src = "https://i.ibb.co/M7ypGhv/vitality-surge-big.png";
        revImg.style.maxWidth = "60px";
        cell.appendChild(revImg);
        cell.innerHTML += `<br>${prize.amount}x ${revName}`;
    } else if (prize.type === 'runeShard' && prize.subType.toLowerCase().includes('broken_shards')) {
        let bsName = `Broken Shard`;
        let bsImg = document.createElement('img');
        bsImg.src = "https://i.ibb.co/Cbhk6Gs/brokenshard.png";
        bsImg.style.maxWidth = "60px";
        cell.appendChild(bsImg);
        cell.innerHTML += `<br>${prize.amount}x ${bsName}`;
    } else if (prize.type === 'good' || prize.type === 'resource') {
        let goods = document.createElement('img');
        if (prize.subType === 'event_currency_1') {
            goods.src = `images/events/icons/${getSelectedEvent()}.png`;
        } else {
            goods.src = xlImages[prize.subType];
        }
        goods.style.maxWidth = "50px";
        cell.appendChild(goods);
        cell.innerHTML += `<br>${prize.amount}x`;
    } else if (prize.type === 'item' && prize.subType.toLowerCase().includes('ins_tr_')) {
        let booster = document.createElement('img');
        booster.src = xlImages["time_booster_general"];
        booster.style.maxWidth = "50px";
        cell.appendChild(booster);
        cell.innerHTML += `<br>${prize.amount}x`;
    } else if (prize.type === 'reward_selection_kit') {
        let tome = tomes.filter(elem => elem.id === prize.subType)[0];
        let tomeImg = document.createElement('img');
        tomeImg.src = rskIcons[tome.iconId];
        tomeImg.style.width = "60px";
        cell.appendChild(tomeImg);
        cell.innerHTML += `<br>${prize.amount}x <a class="text-link font-weight-bold" href="tomes.html#${tome.id}" target="_blank">${tome.name}</a>`;
    } else if (prize.type === 'avatar') {
        let avatarImg = document.createElement('img');
        avatarImg.src = eventsAvatars[prize.subType];
        cell.appendChild(avatarImg);
    } else if (prize.type === 'flexible_reward') {
        var rewardCodeName = flexibleRewards.filter(elem => elem.id === prize.subType)[0]['rewards'][getPresetChapter()-1]['subType'];
        if (instants.hasOwnProperty(rewardCodeName)) {
            cell.innerHTML = `<img src="${instants[rewardCodeName]["image_big"]}" style="width: 60px;">`;
        } else {
            if (xlImages.hasOwnProperty(flexibleRewards.filter(elem => elem.id === prize.subType)[0]['rewards'][getPresetChapter()-1]['subType'])) {
                cell.innerHTML = `<img src="${xlImages[flexibleRewards.filter(elem => elem.id === prize.subType)[0]['rewards'][getPresetChapter()-1]['subType']]}" style="width: 62px;">`;
            } else {
                cell.innerHTML = `<img src="https://i.ibb.co/WndLSNt/goods-general-medium.png" style="width: 60px;">`;
            }
        }
        cell.innerHTML += `<br>${getTitleFromGoodImage(rewardCodeName)} <h7>${flexibleRewards.filter(elem => elem.id === prize.subType)[0]['rewards'][getPresetChapter()-1]['amount']*prize.amount}x</h7>`;
    }
}

function createBuildingPrizeCell(buildingId, buildingImage, amount, cell) {
    $.get('database/buildings.json', function(data) {
        let img = document.createElement('img');
        img.src = buildingImage;
        img.style.maxWidth = "150px";
        cell.appendChild(img);
        cell.innerHTML += `<br>${amount}x <a class="text-link font-weight-bold" href="buildings.html#${buildingId}" target="_blank">${data.filter(elem => elem.id === buildingId)[0]['name']}</a>`;
    });
}

function displayLeagues() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";

    let eventSelect = document.getElementById('input_event');
    let selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;
    let selectedEventName = eventSelect.options[eventSelect.selectedIndex].text;

    createEventHeader(selectedEvent, selectedEventName);

    var h5 = document.createElement('h5');
    h5.id = 'prizes_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Leagues")} ::..<br>`;
    parent.appendChild(h5);

    let eventLeagues = eventsLeagues[selectedEvent];
    if (eventLeagues === undefined) {
        let center = document.createElement('center');
        center.innerHTML = `<h7>No recorded Leagues for this event.</h7>`;
        parent.appendChild(center);
        return;
    }

    var prizesInfoText = document.createElement('h7');
    prizesInfoText.id = 'leagues_info_text';
    prizesInfoText.className = "card-title text-center";
    prizesInfoText.style.textAlign = "left";
    prizesInfoText.innerHTML = `${eventLeagues['description']}`;
    var center = document.createElement('center');
    center.appendChild(prizesInfoText);
    parent.appendChild(center);

    var div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginBottom = '10px';
    div.style.marginTop = '10px';
    var divBBTable = document.createElement('div');
    divBBTable.className = 'bbTable';
    var table = document.createElement('table');
    table.className = 'table-primary';
    table.style.width = '100%';
    var tbody = document.createElement('tbody');

    let maxRewards = getHighestLengthLeagueRewards(eventLeagues);
    
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerHTML = 'League';
    th1.style.width = '25%';
    let th2 = document.createElement('th');
    th2.innerHTML = 'Rewards';
    th2.style.width = '75%';
    th2.colSpan = maxRewards;
    tr.appendChild(th1);
    tr.appendChild(th2);
    tbody.appendChild(tr);

    for (let league in eventLeagues) {
        if (league !== 'description') {
            let trLeague = document.createElement('tr');
            let tdLeague = document.createElement('td');
            let leagueImage = document.createElement('img');
            leagueImage.src = leaguesBanners[league];
            leagueImage.style.maxHeight = "150px";
            tdLeague.appendChild(leagueImage);
            trLeague.appendChild(tdLeague);

            for (let reward = 0; reward < maxRewards; reward++) {
                let tdReward = document.createElement('td');
                tdReward.style.width = `${75/maxRewards}%`;
                if (reward < eventLeagues[league].length) {
                    createPrizeCell(eventLeagues[league][reward], tdReward);
                }
                trLeague.appendChild(tdReward);
            }
            tbody.appendChild(trLeague);
        }
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);

    parent.appendChild(div);
}

function getHighestLengthLeagueRewards(obj) {
    let maxLength = 0;
    for (let key in obj) {
        if (key !== 'description') {
            if (obj.hasOwnProperty(key)) {
                maxLength = Math.max(maxLength, obj[key].length);
            }
        }
    }
    return maxLength;
}