// Copyright 2021, iDavis, All rights reserved.

function changeEventBanner() {
    var imgBanner = document.getElementById("event_banner");
    var selectEvent = document.getElementById("input_event");
    var selectedEvent = selectEvent.options[selectEvent.selectedIndex].value;
    imgBanner.src = eventBanners[selectedEvent];
}

function displayDailyPrizes() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();
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
            let chapterOption = chapterSelect.options[chapterSelect.selectedIndex].value;

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
                if (dailyPrizes[selectedEvent][i].substring(0, 4) === 'INS_' || dailyPrizes[selectedEvent][i].toLowerCase().includes("petfood")) {
                    var baseID = dailyPrizes[selectedEvent][i].substring(0, dailyPrizes[selectedEvent][i].lastIndexOf('_')+1);
                    var instantObject = {};
                    instantObject['id'] = baseID;
                    instantObject['name'] = instants[baseID]['name'];
                    instantObject['image_big'] = instants[baseID]['image_big'];
                    instantObject['image_small'] = instants[baseID]['image_small'];
                    if (instants[baseID].hasOwnProperty('image_big_secondary')) {
                        instantObject['image_big_secondary'] = instants[baseID]['image_big_secondary'];
                    }
                    if (instants[baseID].hasOwnProperty('image_small_secondary')) {
                        instantObject['image_small_secondary'] = instants[baseID]['image_small_secondary'];
                    }
                    instantObject['production_type'] = instants[baseID]['production_type'];
                    instantObject['value'] = parseInt(dailyPrizes[selectedEvent][i].substring(dailyPrizes[selectedEvent][i].lastIndexOf('_')+1, dailyPrizes[selectedEvent][i].length));
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
            if (orderByOption === 'day') {
                chapterOption = 'all_';
                chapterSelect.value = 'all_';
            }
            if (isTriggeredOrderBy) {
                if (chapterOption === 'all_') {
                    let maxim = 0;
                    let chapt = 0;
                    for(i = 0; i < chapterSelect.length; i++) {
                        chapt = parseInt(chapterSelect.options[i].value);
                        if (chapt > maxim) {
                            maxim = chapt;
                        }
                    }
                    chapterSelect.value = maxim.toString();
                    chapterOption = maxim;

                }
                filteredData = Array.from(new Set(filteredData));
                filteredData = filteredData.filter(function(x) {
                    return x['id'].toLowerCase().includes('a_evt') && x['chapters'][chapterOption].hasOwnProperty(orderByOption)
                })
                if (filteredData.length === 0) {
                    create_exception("No buildings found. Please adjust your <strong>Order By</strong> options.", 3, 'primary')
                }
                for (var j = 0; j < filteredData.length; j++) {
                    for (var k = 0; k < filteredData.length-1; k++) {
                        var swap = false;
                        if (filteredData[k]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                            if (filteredData[k+1]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption].hasOwnProperty('production_time')) {
                                    //ak treba brat do uvahy aj cas
                                    if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length'])/(filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['production_time']/3600) <
                                        filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k+1]['width'] * filteredData[k+1]['length'])/(filteredData[k+1]['chapters'][parseInt(chapterOption)][orderByOption]['production_time']/3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k+1]['width'] * filteredData[k+1]['length'])) {
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
                                        td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value']}`;
                                    } else {
                                        td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]}`;
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
                                            tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width']) / (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['production_time'] / 3600)).toFixed(1)}</h7>`;
                                        } else {
                                            tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod][0]]['value'] / (filteredData[i]['length'] * filteredData[i]['width'])).toFixed(1)}</h7>`;
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
                    td12.innerHTML = `<b>Type:</b> Instant<br>`;
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
                                td.innerHTML = `${filteredData[i]['value']}${filteredData[i]['production_type']}<br>
                                    <img src="${filteredData[i]['image_small']}">/<img src="${filteredData[i]['image_small_secondary']}">`;
                            } else {
                                td.innerHTML = `${filteredData[i]['value']}${filteredData[i]['production_type']}<br>
                                            <img src="${filteredData[i]['image_small']}">`;
                            }
                        } else {
                            td.innerHTML = `1`;
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
    h5.id = 'calendar';
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
                if (getDaysFromStart(selectedEvent, "live")+1 === daysCounter) {
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
                            (${filteredData[prizesCounter-1]['value']}${filteredData[prizesCounter-1]['production_type']})</a>`;
                } else {
                    tdPrize.innerHTML = `<a class="text-link font-weight-bold" href="#${filteredData[prizesCounter - 1]['id']}">${langBuildings(filteredData[prizesCounter - 1])}</a>`;
                }
            } else {
                if (prizesCounter < dailyPrizes[selectedEvent].length+1 && !counterPrizeDisplayed) {
                    tdPrize.innerHTML = `<h7 class="card-title text-center text-link"><i>Reveals in ${getHoursTillNextDay()}h</i></h7>`;
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
    var iframe = document.createElement('iframe');
    iframe.className = 'center';
    iframe.style.width = '560px';
    iframe.style.height = '315.2px';
    //iframe.allow = 'autoplay; encrypted-media';
    iframe.setAttribute('allowFullScreen', 'true');
    iframe.src = eventVideos[selectedEvent];
    iframe.style.marginBottom = '15px';
    document.getElementById('column_with_tables').appendChild(iframe);
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
