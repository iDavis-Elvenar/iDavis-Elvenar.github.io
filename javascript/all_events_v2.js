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

    let numberOfBaseItems = baseTabsEvents.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsEvents[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = baseTabsEvents[b]["id"].substring(0, baseTabsEvents[b]["id"].lastIndexOf("_"));
        a.href = baseTabsEvents[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(baseTabsEvents[b]["onclick"]);
        }
        a.innerHTML = langUI(baseTabsEvents[b]["name"]);
        let img = document.createElement("img");
        img.src = baseTabsEvents[b]["img"];
        img.style = "width: "+baseTabsEvents[b]["img_width"]+"px; "+baseTabsEvents[b]["img_style"];
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+2))+"%";
        newDiv.id = additionalTabsEvents[selectedEvent][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsEvents[selectedEvent][i]["href"];
        newA.href += "-"+selectedEvent;
        newA.onclick = function() {
            switchView(additionalTabsEvents[selectedEvent][i]["id"]);
        }
        newA.innerHTML = additionalTabsEvents[selectedEvent][i]["name"];
        let newImg = document.createElement("img");
        newImg.src= additionalTabsEvents[selectedEvent][i]["img"];
        newImg.style = "width: "+additionalTabsEvents[selectedEvent][i]["img_width"]+"px; "+additionalTabsEvents[selectedEvent][i]["img_style"];
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

function displayDailyPrizes() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();

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

            let days = getDaysFromStart(selectedEvent)+1;

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
                    var baseID = dailyPrizes[selectedEvent][i].substring(0, dailyPrizes[selectedEvent][i].lastIndexOf('_')+1);
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
                        instantObject['value'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].lastIndexOf('_')+1, dailyPrizes[selectedEvent][i].indexOf("{")));
                        instantObject['quantity'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].indexOf('{')+1, dailyPrizes[selectedEvent][i].indexOf("}")));
                    } else {
                        instantObject['value'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].lastIndexOf('_')+1, dailyPrizes[selectedEvent][i].length));
                        instantObject['quantity'] = 1;
                    }
                    if (instantObject['production_type'] === 'h') {
                        instantObject['value'] /= 60;
                    }
                    filteredDataDict[i] = instantObject;
                }
            }
            var filteredData = [];
            for (var key in filteredDataDict) {
                filteredData.push(filteredDataDict[key])
            }
            if (isTriggeredOrderBy) {
                filteredData = Array.from(new Set(filteredData));
                filteredData = filteredData.filter(function(x) {
                    return x['id'].toLowerCase().includes('a_evt') && x['chapters'][getPresetChapter()].hasOwnProperty(orderByOption)
                })
                if (filteredData.length === 0) {
                    create_exception("No buildings found. Please adjust your <strong>Order By</strong> options.", 3, 'primary')
                }
                for (var j = 0; j < filteredData.length; j++) {
                    for (var k = 0; k < filteredData.length-1; k++) {
                        var swap = false;
                        if (filteredData[k]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                            if (filteredData[k+1]['chapters'][parseInt(getPresetChapter())].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption].hasOwnProperty('production_time')) {
                                    //ak treba brat do uvahy aj cas
                                    if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length'])/(filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time']/3600) <
                                        filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k+1]['width'] * filteredData[k+1]['length'])/(filteredData[k+1]['chapters'][parseInt(getPresetChapter())][orderByOption]['production_time']/3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(getPresetChapter())][orderByOption]['value'] / (filteredData[k+1]['width'] * filteredData[k+1]['length'])) {
                                    //ak to nie je produkcia s casom
                                    swap = true;
                                }
                            }
                        } else {
                            swap = true;
                        }
                        if (swap) {
                            let temp = filteredData[k];
                            filteredData[k] = filteredData[k+1];
                            filteredData[k+1] = temp;
                        }
                    }
                }
            }
            createEventHeader(selectedEvent, selectedEventName);
            if (orderByOption === 'day') {
                createCalendar(filteredData, selectedEvent);
                if (eventVideos.hasOwnProperty(selectedEvent) && eventVideos[selectedEvent] !== "") {
                    insertVideo(selectedEvent);
                }
            }
            for (var i = 0; i < filteredData.length; i++) {
                var h5 = document.createElement('h5');
                h5.id = filteredData[i]['id'];
                h5.className = "card-title text-center text-title font-weight-bold";
                h5.style.textAlign = "left";
                if (!isTriggeredOrderBy) {
                    h5.innerHTML = `${langUI("Day")} ${i + 1}: ${langBuildings(filteredData[i])}<br>`;
                } else {
                    let dpDays = "";
                    for (let dp = 0; dp < dailyPrizes[selectedEvent].length; dp++) {
                        if (dailyPrizes[selectedEvent][dp] === filteredData[i]['id']) {
                            dpDays += (dp+1).toString()+", ";
                        }
                    }
                    h5.innerHTML = `Day ${dpDays.substring(0, dpDays.length-2)}: ${langBuildings(filteredData[i])}<br>`;
                    //h5.innerHTML = `Day ${filteredData[i]['appearances'][selectedEvent].map(x => x+1)}: ${filteredData[i]['name']}<br>`;
                }
                document.getElementById('column_with_tables').appendChild(h5);
                var div = document.createElement('div');
                div.className = 'bbTable';
                div.style.marginBottom = "20px";
                var firstTable = document.createElement('table');
                firstTable.className = 'table-primary';
                firstTable.style.width = "100%";
                var t1body = document.createElement('tbody');
                var t1r = document.createElement('tr');
                var td11 = document.createElement('td');
                td11.style.width = "60%";
                if (filteredData[i]['id'].toLowerCase().includes('a_evt')) {
                    td11.innerHTML = `<img src="${filteredData[i]['image']}">`;
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    td12.innerHTML = `<b>${langUI("Building type:")}</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>${langUI("Construction time:")}</b> ${filteredData[i]['construction_time']}<br>
                                    <b>${langUI("Size:")}</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>${langUI("Set building:")}</b> -<br>
                                    <b>${langUI("Expiring:")}</b> -`;
                    t1r.appendChild(td11);
                    t1r.appendChild(td12);
                    t1body.appendChild(t1r);
                    firstTable.appendChild(t1body);
                    div.appendChild(firstTable);

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
                                    td.innerHTML = td.innerHTML.substring(0,td.innerHTML.length-4);
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
                                        tdSet.innerHTML = `${setLine+1}. ${langUI("building")}`;
                                        idxFlag++;
                                    } else {
                                        if (prodChangeFlags[idxFlag] !== chToPrint) {
                                            tdSet.innerHTML = `${bonuses[setLine][chToPrint-1][1].toFixed(0)}`;
                                            chToPrint++;
                                        } else {
                                            tdSet.innerHTML = `${goods_icons[bonuses[setLine][chToPrint-1][0]]}`;
                                            idxFlag++;
                                        }
                                    }
                                    trSet.appendChild(tdSet);
                                }
                            }
                            tSetBody.appendChild(trSet);
                        }
                    }
                } else {  //INSTANTS
                    if (filteredData[i].hasOwnProperty('image_big_secondary')) {
                        td11.innerHTML = `<img src="${filteredData[i]['image_big']}" style="margin-left: 10%;">/<img src="${filteredData[i]['image_big_secondary']}">`;
                    } else {
                        td11.innerHTML = `<img src="${filteredData[i]['image_big']}" style="margin-left: 10%;">`;
                    }
                    var td12 = document.createElement('td');
                    td12.style.width = "40%";
                    if (filteredData[i]['id'].toLowerCase().includes("ins_")) {
                        td12.innerHTML = `<b>Type:</b> Instant<br>`;
                    } else {
                        td12.innerHTML = `<b>Type:</b> Item<br>`;
                    }
                    t1r.appendChild(td11);
                    t1r.appendChild(td12);
                    t1body.appendChild(t1r);
                    firstTable.appendChild(t1body);
                    div.appendChild(firstTable);

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
                                td.innerHTML = `${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['value']}${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['production_type']+"<br>"}
                                    <img src="${filteredData[i]['image_small']}">/<img src="${filteredData[i]['image_small_secondary']}">`;
                            } else {
                                td.innerHTML = `${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['value']}${Number.isNaN(filteredData[i]['value']) ? "" : filteredData[i]['production_type']+"<br>"}
                                            <img src="${filteredData[i]['image_small']}" title="${filteredData[i]['title']}">`;
                            }
                        } else {
                            td.innerHTML = `${filteredData[i]['quantity']}`;
                        }
                        tr.appendChild(td);
                    }
                    t2body.appendChild(tr);
                    secondTable.appendChild(t2body);
                }
                div.appendChild(secondTable);
                if (filteredData[i].hasOwnProperty('setBuilding')) {
                    setTable.appendChild(tSetBody);
                    div.appendChild(setTable);
                }
                document.getElementById('column_with_tables').appendChild(div);
            }
            create_exception("Buildings Generated!", 3, 'success');
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
    eventImg.alt = `${eventNames[selectedEvent]}`;
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
    var numberOfRows = Math.floor(filteredData.length/7);
    if (filteredData.length+1 % 7 > 0) {  //bez pridania counteru do dalsieho dna bolo iba filteredData.length % 7 > 0
        numberOfRows++;
    }
    var daysCounter = 1;
    var prizesCounter = 1;
    let counterDayDisplayed = false;
    let counterPrizeDisplayed
    for (var line = 0; line < numberOfRows; line++) {
        var trDays = document.createElement('tr');
        for (var i = 0; i < 7; i++) {
            var tdDay = document.createElement('td');
            if (daysCounter <= filteredData.length) {
                if (getDaysFromStart(selectedEvent, "")+1 === daysCounter) {
                    tdDay.innerHTML = `<b>${daysCounter}. ${langUI("day")}</b>`
                } else {
                    tdDay.innerHTML = `<b>${daysCounter}. ${langUI("day")}</b>`
                }
            } else {
                if (daysCounter < dailyPrizes[selectedEvent].length+1 && !counterDayDisplayed) {
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
                if (filteredData[prizesCounter-1].hasOwnProperty('value')) {
                    tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#${filteredData[prizesCounter - 1]['id']}">${filteredData[prizesCounter - 1]['name']} 
                            (${Number.isNaN(filteredData[prizesCounter-1]['value']) ? filteredData[prizesCounter-1]['quantity'] : filteredData[prizesCounter-1]['value']}${Number.isNaN(filteredData[prizesCounter-1]['value']) ? "" : filteredData[prizesCounter-1]['production_type']})</a>`;
                } else {
                    tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#${filteredData[prizesCounter - 1]['id']}">${langBuildings(filteredData[prizesCounter - 1])}</a>`;
                }
            } else {
                if (prizesCounter < dailyPrizes[selectedEvent].length+1 && !counterPrizeDisplayed) {
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

function insertVideo(selectedEvent) {
    var h5 = document.createElement('h5');
    h5.id = 'video';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Event Video")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    for (let i = 0; i < eventVideos[selectedEvent].split(";").length; i++) {
        var center = document.createElement('center');
        var iframe = document.createElement('iframe');
        iframe.style.width = ""+Math.min(560, (window.innerWidth-50))+"px";//'560px';
        iframe.style.height = ""+315.2*(Math.min(560, (window.innerWidth-50))/560)+"px";
        //iframe.allow = 'autoplay; encrypted-media';
        iframe.setAttribute('allowFullScreen', 'true');
        iframe.src = eventVideos[selectedEvent].split(";")[i];
        iframe.style.marginBottom = '15px';
        center.appendChild(iframe);
        document.getElementById('column_with_tables').appendChild(center);
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

function getDaysFromStart(selectedEvent, flag="") {
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
    return (tod-new Date(start))/1000/60/60/24;
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
    if (type === "calendar" && view !== "calendar") {
        displayDailyPrizes();
        view = "calendar";
    } else if (type === "quests" && view !== "quests") {
        displayQuests();
        view = "quests";
    } else if (type !== "calendar" && type !== "quests") {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (var event in additionalTabsEvents) {
            for (let tab = 0; tab < additionalTabsEvents[event].length; tab++) {
                if (additionalTabsEvents[event][tab]["id"] === type) {
                    $(function(){
                        $.getScript("eventTabs/_general/chests/chests_database.js", function() {});
                        $.getScript("eventTabs/_general/chests/chests_handler.js", function() {});
                        $("#column_with_tables").load("eventTabs/"+event+"/"+additionalTabsEvents[event][tab]["file"]); 
                    });
                }
            }
        }
    }
}

function setView(value) {
    view = value;
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

    if (quests[selectedEvent] === undefined || getDaysFromStart(selectedEvent) < 0) {
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
        shareLink.innerHTML = `${langUI('You can send the quest list to other players by sharing the following link')}: <i class='text-title'><b>${questsLinks[selectedEvent]}</b></i>`;
        var center = document.createElement('center');
        center.appendChild(shareLink);
        var div_info = document.createElement('div');
        div_info.innerHTML = languageSpecificNotes[localStorage.getItem("lang")];
        if (localStorage.getItem("lang") == "pl") {
            var ph_translation_help = document.createElement('h6');
            ph_translation_help.className = "card-title text-center";
            ph_translation_help.innerHTML = `<br>I would like to make PL language available for the quest lists. If you are from this community and would like to contribute to development of this website by providing translations for around 60 already prepared short phrases, I will be more than happy if you leave me contact (either your Beta Forum nickname or your email) on my <a href="https://idavis-elvenar.github.io/contact.html" class="text-link">contact page</a>. <br>The translations will be used in all future events, so there is no need for recreating them every time.<br>Nicknames of all contributors will be listed in the quest pages of respective languages (of course if you wish to).`;
            center.appendChild(ph_translation_help);
        }
        center.appendChild(div_info)
        document.getElementById('column_with_tables').appendChild(center);

        var numberOfQuests = quests[selectedEvent].length;

        var nextQuestMarkedUnknown = false;

        for (let quest = 0; quest <= numberOfQuests; quest++) {
            if (quest === 0) {
                let tr = document.createElement('tr');
                let number = document.createElement('th');
                number.innerHTML = `${langUI("Number")}`;
                tr.appendChild(number);
                let task = document.createElement('th');
                task.innerHTML = `${langUI("Task")}`;
                tr.appendChild(task);
                let finished = document.createElement('th');
                finished.innerHTML = `${langUI("Finished")}`;
                tr.appendChild(finished);
                let prep = document.createElement('th');
                prep.innerHTML = `${langUI("Prepare")}`;
                tr.appendChild(prep);
                tbody.appendChild(tr);
            } else {
                let tr = document.createElement('tr');
                let number = document.createElement('td');
                number.style.width = "5%";
                number.innerHTML = quest;
                tr.appendChild(number);
                let task = document.createElement('td');
                task.style.width = "90%";
                task.id = "quest_task_"+(quest);

                if (questAvailable(quest, selectedEvent)) {
                    task.innerHTML = `${questTranslate(quests[selectedEvent][quest-1])}`;
                } else {
                    if (!nextQuestMarkedUnknown) {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>${langUI("Reveals in")} ${getHoursTillNextDay()}h</i></h7>`;
                        nextQuestMarkedUnknown = true;
                    } else {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>???</i></h7>`;
                    }
                }
                //console.log(quest+". "+questTranslate(quests[selectedEvent][quest-1]))
                task.className = "nocopy";
                /*task.innerHTML += `<div class="myTest custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>`;*/
                /*task.className = "text-left";
                task.style.paddingLeft = "10px";*/
                let finished = document.createElement('td');
                let div = document.createElement('div');
                div.className = "form-check";
                let input = document.createElement('input');
                input.className = "form-check-input";
                input.type = "checkbox";
                input.id = "quest_finished_"+(quest);
                if (Array(localStorage.getItem("quests_finished_"+selectedEvent)).join().split(',').includes(String(quest))) {
                    input.checked = true;
                    task.className = "text-quest_completed nocopy";
                }
                input.onchange = function() {
                    if (input.checked) {
                        for (let i = 1; i <= quest; i++) {
                            checkbox = document.getElementById("quest_finished_"+(i));
                            tasktext = document.getElementById("quest_task_"+(i));
                            prepareCheckbox = document.getElementById("quest_prepare_"+(i));

                            checkbox.checked = true;
                            tasktext.className = "text-quest_completed nocopy";
                            tasktext.style.fontWeight = "";
                        }
                    } else {
                        for (let i = quest; i <= numberOfAvailableQuests(selectedEvent); i++) {
                            checkbox = document.getElementById("quest_finished_"+(i));
                            tasktext = document.getElementById("quest_task_"+(i));
                            prepareCheckbox = document.getElementById("quest_prepare_"+(i));

                            checkbox.checked = false;
                                if (prepareCheckbox.checked) {
                                    tasktext.className = "text-prepare nocopy";
                                    tasktext.style.fontWeight = "bold";
                                } else {
                                    tasktext.className = "nocopy";
                                }
                        }
                    }
                    
                    recordFinishedQuests(selectedEvent, numberOfQuests);
                };
                let label = document.createElement('label');
                label.className = "form-check-label";
                label.htmlFor = quest;
                label.innerHTML = "";
                div.appendChild(input);
                div.appendChild(label);

                let prepare = document.createElement('td');
                let div2 = document.createElement('div');
                div2.className = "form-check";
                let input2 = document.createElement('input');
                input2.className = "form-check-input";
                input2.type = "checkbox";
                input2.id = "quest_prepare_"+(quest);
                if (Array(localStorage.getItem("quests_prepare_"+selectedEvent)).join().split(',').includes(String(quest))) {
                    input2.checked = true;
                    if (!Array(localStorage.getItem("quests_finished_"+selectedEvent)).join().split(',').includes(String(quest))) {
                        task.className = "text-prepare nocopy";
                        task.style.fontWeight = "bold";
                    }
                }
                input2.onchange = function() {
                    tasktext = document.getElementById("quest_task_"+(quest));
                    finishedCheckbox = document.getElementById("quest_finished_"+(quest));
                    if (!finishedCheckbox.checked) {
                        if (input2.checked) {
                            tasktext.className = "text-prepare nocopy";
                            tasktext.style.fontWeight = "bold";
                        } else {
                            tasktext.className = "nocopy";
                            tasktext.style.fontWeight = "";
                        }
                    }
                    recordPrepareQuests(selectedEvent, numberOfQuests);
                };
                let label2 = document.createElement('label');
                label2.className = "form-check-label";
                label2.htmlFor = quest;
                label2.innerHTML = "";
                div2.appendChild(input2);
                div2.appendChild(label2);

                if (questAvailable(quest, selectedEvent)) {
                    finished.appendChild(div);
                    prepare.appendChild(div2);
                }
                tr.appendChild(task);
                tr.appendChild(finished);
                tr.appendChild(prepare);
                tbody.appendChild(tr);
            }
        }
    }
    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    document.getElementById('column_with_tables').appendChild(div);

    create_exception("Quests Generated!", 3, 'success');
}

function recordFinishedQuests(selectedEvent, numberOfQuests) {
    finished = [];
    for (let quest = 1; quest <= numberOfAvailableQuests(selectedEvent); quest++) {
        if (document.getElementById("quest_finished_"+quest).checked) {
            finished.push(quest);
        }
    }
    localStorage.setItem("quests_finished_"+selectedEvent, finished);

    if (finished.length === numberOfQuests) {
        create_exception("Congrats! &#128516;", 5, 'success');
    }
}

function recordPrepareQuests(selectedEvent, numberOfQuests) {
    prepare = [];
    for (let quest = 1; quest <= numberOfAvailableQuests(selectedEvent); quest++) {
        if (document.getElementById("quest_prepare_"+quest).checked) {
            prepare.push(quest);
        }
    }
    localStorage.setItem("quests_prepare_"+selectedEvent, prepare);
}

function questAvailable(quest, selectedEvent) {
    return (quest - (quests[selectedEvent].length - eventsDurations[selectedEvent])) <= getDaysFromStart(selectedEvent)+1;
}

function numberOfAvailableQuests(selectedEvent) {
    return Math.min(quests[selectedEvent].length - eventsDurations[selectedEvent] + getDaysFromStart(selectedEvent)+1,
            quests[selectedEvent].length);
}

window.onload