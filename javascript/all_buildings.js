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
    "A_Evt_Evo_Autumn_XIX_Bear_Panda" : 9
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
            let chapterOption = chapterSelect.options[chapterSelect.selectedIndex].value;

            clearColumnWithTables();

            let filteredData = filterData(data, filterEventData, filterProductionData, includeAppearances);

            if (includeAppearances) {
                filteredData = sortByDay(filteredData, filterEventData);
            }

            if (orderByOption === 'all_') {
                chapterOption = 'all_';
                chapterSelect.value = 'all_';
            }

            if (isTriggeredOrderBy) {
                if (chapterOption === 'all_') {
                    let maxim = 0;
                    let chapterTemp = 0;
                    for(i = 0; i < chapterSelect.length; i++) {
                        chapterTemp = parseInt(chapterSelect.options[i].value);
                        if (chapterTemp > maxim) {
                            maxim = chapterTemp;
                        }
                    }
                    chapterSelect.value = maxim.toString();
                    chapterOption = maxim;

                }
                filteredData = sortBySelectedAttribute(filteredData, selectedEvoStages, chapterOption, orderByOption);
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
                h5.innerHTML = `${filteredData[i]['name']}<br>`;
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
                td11.innerHTML = `<img src="${filteredData[i]['image']}">`;
                var td12 = document.createElement('td');
                td12.style.width = "40%";
                if (isEvo) {
                    td12.innerHTML = `<b>Building type:</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>Construction time:</b> ${filteredData[i]['construction_time']}<br>
                                    <b>Size:</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>Set building:</b> -<br>
                                    <b>Expiring:</b> -<br>
                                    <b>Upgrade costs:</b> ${evoUpgradeCosts[filteredData[i]['id']]}<br>`;
                    if (feedingEffectsDescriptions.hasOwnProperty(filteredData[i]['id'])) {
                        td12.innerHTML += `<b>Feeding effect:</b> ${feedingEffectsDescriptions[filteredData[i]['id']]}<br>`;
                    }
                    td12.innerHTML += `<b>Stage:</b><br>`;
                    let tempArr = ["","","","","","","","","",""];
                    tempArr[selectedEvoStages[filteredData[i]['id']]] = "selected";
                    td12.innerHTML += `<select id="${"input_stage_"+filteredData[i]['id']}" class="custom-select" style="width: 70px; margin-bottom: 10px;" onchange="setAndReload(this)">
                            <option value="9" ${tempArr[9]}>10</option>
                            <option value="8" ${tempArr[8]}>9</option>
                            <option value="7" ${tempArr[7]}>8</option>
                            <option value="6" ${tempArr[6]}>7</option>
                            <option value="5" ${tempArr[5]}>6</option>
                            <option value="4" ${tempArr[4]}>5</option>
                            <option value="3" ${tempArr[3]}>4</option>
                            <option value="2" ${tempArr[2]}>3</option>
                            <option value="1" ${tempArr[1]}>2</option>
                            <option value="0" ${tempArr[0]}>1</option>
                        </select>`;
                } else {
                    td12.innerHTML = `<b>Building type:</b> ${buildingTypes[filteredData[i]['type']]}<br>
                                    <b>Construction time:</b> ${filteredData[i]['construction_time']}<br>
                                    <b>Size:</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>Set building:</b> -<br>
                                    <b>Expiring:</b> -`;
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
                if (!isEvo) {
                    for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                        var tr = document.createElement('tr');
                        for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                            var td = document.createElement('td');
                            if (ch === 0) {
                                td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod]]}`;
                                if (filteredData[i]['all_productions'][prod] != 'providedCulture' &&
                                    filteredData[i]['all_productions'][prod] != 'provided_population') {
                                    //tymto for cyklom hladam ten chapter, v ktorom je ta produkcia, ktorej cas chcem zistit
                                    for (var chPom = 1; chPom < numberOfChapters + 1; chPom++) {
                                        if (filteredData[i]['chapters'][chPom].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                            td.innerHTML += `${filteredData[i]['earlyPickupTime'] / 60 / 60}h / <b>${filteredData[i]['chapters'][chPom][filteredData[i]['all_productions'][prod]]['production_time'] / 60 / 60}h</b>`;
                                            break;
                                        }
                                    }
                                }
                            } else {
                                if (filteredData[i]['chapters'][ch].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                    if (typeof filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]] === 'object') {
                                        td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]['value']}`;
                                    } else {
                                        td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]}`;
                                    }
                                } else {
                                    td.innerHTML = `-`;
                                }
                            }
                            tr.appendChild(td);
                        }
                        t2body.appendChild(tr);
                        if (isTriggeredOrderBy && orderByOption === filteredData[i]['all_productions'][prod]) {
                            var trPerSquare = document.createElement('tr');
                            for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                var tdPerSquare = document.createElement('td');
                                if (ch === 0) {
                                    if (prioritiesProduction.includes(filteredData[i]['all_productions'][prod].toLowerCase())) {
                                        tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod]]} / per square per 1h</h7>`;
                                    } else {
                                        tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod]]} / per square</h7>`;
                                    }
                                } else {
                                    if (filteredData[i]['chapters'][ch].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                        if (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]].hasOwnProperty('production_time')) {
                                            tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]['value'] / (filteredData[i]['length'] * filteredData[i]['width']) / (filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]['production_time'] / 3600)).toFixed(1)}</h7>`;
                                        } else {
                                            tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]['value'] / (filteredData[i]['length'] * filteredData[i]['width'])).toFixed(1)}</h7>`;
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
                } else {
                    for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                        var tr = document.createElement('tr');
                        let existsInThisStage = false;
                        for (let chAttempt = 1; chAttempt < numberOfChapters+1; chAttempt++) {
                            if (filteredData[i]['chapters'][chAttempt][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                existsInThisStage = true;
                                break;
                            }
                        }
                        if (existsInThisStage) {
                            for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                var td = document.createElement('td');
                                if (ch === 0) {
                                    td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod]]}`;
                                    if (filteredData[i]['all_productions'][prod] != 'providedCulture' &&
                                        filteredData[i]['all_productions'][prod] != 'provided_population') {
                                        //tymto for cyklom hladam ten chapter, v ktorom je ta produkcia, ktorej cas chcem zistit
                                        for (var chPom = 1; chPom < numberOfChapters + 1; chPom++) {
                                            if (filteredData[i]['chapters'][chPom][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                                td.innerHTML += `${filteredData[i]['earlyPickupTime'] / 60 / 60}h / <b>${filteredData[i]['chapters'][chPom][displayStage][filteredData[i]['all_productions'][prod]]['production_time'] / 60 / 60}h</b>`;
                                                break;
                                            }
                                        }
                                    }
                                } else {
                                    if (filteredData[i]['chapters'][ch][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                        if (typeof filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]] === 'object') {
                                            td.innerHTML = `${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]]['value']).toFixed(0)}`;
                                        } else {
                                            td.innerHTML = `${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]]).toFixed(0)}`;
                                        }
                                    } else {
                                        td.innerHTML = `-`;
                                    }
                                }
                                tr.appendChild(td);
                            }
                        }
                        t2body.appendChild(tr);
                        if (isTriggeredOrderBy && orderByOption === filteredData[i]['all_productions'][prod]) {
                            if (existsInThisStage) {
                                var trPerSquare = document.createElement('tr');
                                for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                                    var tdPerSquare = document.createElement('td');
                                    if (ch === 0) {
                                        if (prioritiesProduction.toLowerCase().includes(filteredData[i]['all_productions'][prod].toLowerCase())) {
                                            tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod]]} / per square per 1h</h7>`;
                                        } else {
                                            tdPerSquare.innerHTML = `<h7>${goods_icons[filteredData[i]['all_productions'][prod]]} / per square</h7>`;
                                        }
                                    } else {
                                        if (filteredData[i]['chapters'][ch][displayStage].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                            if (filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]].hasOwnProperty('production_time')) {
                                                tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]]['value'] / (filteredData[i]['length'] * filteredData[i]['width']) / (filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]]['production_time'] / 3600)).toFixed(1)}</h7>`;
                                            } else {
                                                tdPerSquare.innerHTML = `<h7>${(filteredData[i]['chapters'][ch][displayStage][filteredData[i]['all_productions'][prod]]['value'] / (filteredData[i]['length'] * filteredData[i]['width'])).toFixed(1)}</h7>`;
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
                }
                secondTable.appendChild(t2body);
                div.appendChild(secondTable);
                document.getElementById('column_with_tables').appendChild(div);
            }
            create_exception("Buildings Generated!", 3, 'success');
        })
}

function filterEvent(filterData, objectToPass) {
    if (filterData.includes('all')) {
        return true;
    }
    return objectToPass['id'].toLowerCase().includes(filterData.toLowerCase());
}

function filterProduction(filterData, objectToPass) {
    if (filterData.includes('all')) {
        return true;
    }
    var filterDataSplit = filterData.split(",");
    if (filterDataSplit[0] === 'only') {
        var neededToPass = filterDataSplit.length-1;
        if (neededToPass != objectToPass['all_productions'].length) {
            return false;
        }
        for (var i = 1; i < filterDataSplit.length; i++) {
            for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                if (filterDataSplit[i] === objectToPass['all_productions'][j]) {
                    neededToPass--;
                }
            }
        }
        return neededToPass === 0;
    } else {
        var neededToPass = filterDataSplit.length;
        for (var i = 0; i < filterDataSplit.length; i++) {
            for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                if (filterDataSplit[i] === objectToPass['all_productions'][j]) {
                    neededToPass--;
                }
            }
        }
        return neededToPass === 0;
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

function filterData(data, filterEventData, filterProductionData, includeAppearances) {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
        if ((filterEvent(filterEventData, data[i]) && filterProduction(filterProductionData, data[i])) ||
            (includeAppearances && hasAppearance(filterEventData, data[i]))) {
            if (!excludeAsDisabled(data[i])) {
                filteredData.push(data[i]);
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

function sortBySelectedAttribute(filteredData, selectedEvoStages, chapterOption, orderByOption) {
    for (var j = 0; j < filteredData.length; j++) {
        for (var k = 0; k < filteredData.length-1; k++) {
            var swap = false;
            let displayStage1 = selectedEvoStages[filteredData[k]['id']];
            let displayStage2 = selectedEvoStages[filteredData[k+1]['id']];
            if (!filteredData[k]['id'].toLowerCase().includes('_evo_') && !filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                if (filteredData[k]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                    if (filteredData[k + 1]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                        if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption].hasOwnProperty('production_time')) {
                            //ak treba brat do uvahy aj cas
                            if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['production_time'] / 3600) <
                                filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['production_time'] / 3600)) {
                                swap = true;
                            }
                        } else if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                            filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                            //ak to nie je produkcia s casom
                            swap = true;
                        }
                    }
                } else {
                    swap = true;
                }
            } else {
                if (filteredData[k]['id'].toLowerCase().includes('_evo_') && !filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                    if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1].hasOwnProperty(orderByOption)) {
                        if (filteredData[k + 1]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                            if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption].hasOwnProperty('production_time')) {
                                if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['production_time'] / 3600) <
                                    filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['production_time'] / 3600)) {
                                    swap = true;
                                }
                            } else if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                filteredData[k + 1]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                                swap = true;
                            }
                        }
                    } else {
                        swap = true;
                    }
                } else {
                    if (!filteredData[k]['id'].toLowerCase().includes('_evo_') && filteredData[k+1]['id'].toLowerCase().includes('_evo_')) {
                        if (filteredData[k]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                            if (filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption].hasOwnProperty('production_time')) {
                                    if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['production_time'] / 3600) <
                                        filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['production_time'] / 3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(chapterOption)][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
                                    swap = true;
                                }
                            }
                        } else {
                            swap = true;
                        }
                    } else {
                        if (filteredData[k]['chapters'][parseInt(chapterOption)].hasOwnProperty(orderByOption)) {
                            if (filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2].hasOwnProperty(orderByOption)) {
                                if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption].hasOwnProperty('production_time')) {
                                    if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) / (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['production_time'] / 3600) <
                                        filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length']) / (filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['production_time'] / 3600)) {
                                        swap = true;
                                    }
                                } else if (filteredData[k]['chapters'][parseInt(chapterOption)][displayStage1][orderByOption]['value'] / (filteredData[k]['width'] * filteredData[k]['length']) <
                                    filteredData[k + 1]['chapters'][parseInt(chapterOption)][displayStage2][orderByOption]['value'] / (filteredData[k + 1]['width'] * filteredData[k + 1]['length'])) {
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



