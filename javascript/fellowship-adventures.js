var view = "";

function loadPage() {
    if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
        foundView = location.href.split('#')[1];
        switchView(foundView);
    } else {
        switchView("info");
    }
    setLeftBar();
}

function setView(newView) {
    view = newView;
}

function switchView(type) {
    if (type === "info" && view !== "info") {
        displayBase();
        view = "info";
    } else if (type === "items" && view !== "items") {
        displayItems();
        view = "items";
    } else if (type === "rewards" && view !== "rewards") {
        displayRewards();
        view = "rewards";
    } else if (type === "waypoints" && view !== "waypoints") {
        displayWaypoints();
        view = "waypoints";
    } else if (type !== "info" && type !== "items" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (let fa in additionalTabsFa) {
            for (let tab = 0; tab < additionalTabsFa[fa].length; tab++) {
                if (additionalTabsFa[fa][tab]["id"] === type) {
                    $(function(){
                        $("#column_with_tables").load("faTabs/"+fa+"/"+additionalTabsFa[fa][tab]["file"]); 
                    });
                }
            }
        }
    }
}

function setLeftBar() {
    let leftBar = document.getElementById("left_bar");
    let selectedFa = getSelectedFa();
    leftBar.innerHTML = "";

    //Povodny staticky HTML content:
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="calendar_top_div"><span class="align-middle"><a class="text-link font-weight-bold" id="calendar_top" href="#calendar" onclick="switchView('calendar')"><img src="images/general/calendar.png" width="45" style="margin-left: -10px; margin-right: 2px; position: relative;"></a></span></div>
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="quests_left_panel_div"><span class="align-middle"><a class="text-link font-weight-bold" id="quests_left_panel" href="#quests" onclick="switchView('quests')"><img src="images/general/event_guide.png" width="28" style="margin-left: 0px; margin-right: 10px; position: relative;"></a></span></div>

    let numberOfAdditionalItems = 0;
    if (additionalTabsFa.hasOwnProperty(selectedFa)) {
        numberOfAdditionalItems = additionalTabsFa[selectedFa].length;
    }

    let numberOfBaseItems = baseTabsFa.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsFa[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = baseTabsFa[b]["id"].substring(0, baseTabsFa[b]["id"].lastIndexOf("_"));
        a.href = baseTabsFa[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(baseTabsFa[b]["onclick"]);
        }
        a.innerHTML = langUI(baseTabsFa[b]["name"]);
        let img = document.createElement("img");
        img.src = baseTabsFa[b]["img"];
        img.style = "width: "+baseTabsFa[b]["img_width"]+"px; "+baseTabsFa[b]["img_style"];
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        newDiv.id = additionalTabsFa[selectedFa][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsFa[selectedFa][i]["href"];
        //newA.href += "-"+selectedFa;
        newA.onclick = function() {
            switchView(additionalTabsFa[selectedFa][i]["id"]);
        }
        newA.innerHTML = additionalTabsFa[selectedFa][i]["name"];
        let newImg = document.createElement("img");
        newImg.src= additionalTabsFa[selectedFa][i]["img"];
        newImg.style = "width: "+additionalTabsFa[selectedFa][i]["img_width"]+"px; "+additionalTabsFa[selectedFa][i]["img_style"];
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}

function getSelectedFa() {
    var selectFa = document.getElementById("input_event");
    return selectFa.options[selectFa.selectedIndex].value;
}

function getSelectedFaName() {
    let faSelect = document.getElementById('input_event');
    return faSelect.options[faSelect.selectedIndex].text;
}

function generateFas(idToAppend) {
    let years = Object.keys(allFas).sort().reverse();
    for (let y = 0; y < years.length; y++) {
        for (let year in allFas) {
            if (years[y] === year) {
                let optGroup = document.createElement('optGroup');
                optGroup.label = `${year}`;
                for (let e = 0; e < allFas[year].length; e++) {
                    let option = document.createElement('option');
                    option.innerHTML = langUI(allFas[year][e][0]);
                    option.value = allFas[year][e][1];
                    option.selected = allFas[year][e][2];
                    option.disabled = allFas[year][e][3];
                    option.hidden = allFas[year][e][3];
                    optGroup.appendChild(option);
                }
                document.getElementById(idToAppend).appendChild(optGroup);
            }
        }
    }
}

function createFaHeader() {
    let selectedFa = getSelectedFa();
    let selectedFaName = getSelectedFaName();
    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI(selectedFaName)} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var faImg = document.createElement("img");
    faImg.id = `event_banner`;
    faImg.src = faBanners[0]['all'];
    faImg.alt = faBanners[0]['all'];
    faImg.className = `center `;
    faImg.style.marginBottom = `15px`;
    faImg.style.width = `50%`;
    document.getElementById('column_with_tables').appendChild(faImg);
}

function displayBase() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";
    createFaHeader();
    let center = document.createElement('center');
    center.style.marginBottom = "30px";
    let p = document.createElement('p');
    p.innerHTML += introductionText.replace("_", getSelectedFaName());
    p.style.marginBottom = "25px";

    center.appendChild(p);

    createDatesTable(center,    dates[getSelectedFa()]["live"]["start_date"],
                                dates[getSelectedFa()]["live"]["end_date"],
                                dates[getSelectedFa()]["beta"]["start_date"],
                                dates[getSelectedFa()]["beta"]["end_date"]);
    
    parent.appendChild(center);

    var h5 = document.createElement('h5');
    h5.id = 'video';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Tutorial Video")} ::..<br>`;
    parent.appendChild(h5);
   
    var center2 = document.createElement('center');
    var iframe = document.createElement('iframe');
    iframe.style.width = ""+Math.min(560, (window.innerWidth-50))+"px";//'560px';
    iframe.style.height = ""+315.2*(Math.min(560, (window.innerWidth-50))/560)+"px";
    //iframe.allow = 'autoplay; encrypted-media';
    iframe.setAttribute('allowFullScreen', 'true');
    iframe.src = tutorialVideo;
    iframe.style.marginBottom = '15px';
    center2.appendChild(iframe);
    parent.appendChild(center2);

    let subscribe = document.createElement('center');
    subscribe.innerHTML = subscribeText;
    parent.appendChild(subscribe);
}

function displayItems() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";

    createFaHeader();

    var note = document.createElement('h7');
    note.id = 'note_h7';
    note.className = "card-title text-center";
    note.style.textAlign = "left";
    note.innerHTML = `You will need to produce the following items during <b>this</b> fellowship adventure:`;
    var center = document.createElement('center');
    center.appendChild(note);
    parent.appendChild(center);
    
    let divCenter = document.createElement("div");
    divCenter.id = "div_items";
    divCenter.style.width = "80%";
    divCenter.style.textAlign = "center";

    let divBBTable = document.createElement("div");
    divBBTable.style.marginTop = "10px";
    divBBTable.className = "bbTable";

    let table = document.createElement('table');
    table.className = "table-primary";
    table.style.width = "100%";
    table.style.marginBottom = "10px";

    let tbody = document.createElement("tbody");

    for (let it = 0; it < items.length; it++) {
        if (!excludeItems[getSelectedFa()].includes(it+1)) {
            let tr = document.createElement('tr');
            let td_icon = document.createElement('td');
            td_icon.style.width = "10%";
            td_icon.innerHTML = `${goods_icons[items[it]["id"]]}`;
            tr.appendChild(td_icon);

            let td_name = document.createElement('td');
            td_name.style.width = "30%";
            td_name.innerHTML = items[it]["name"];
            tr.appendChild(td_name);

            let td_requirement = document.createElement('td');
            td_requirement.style.width = "60%";
            td_requirement.innerHTML = items[it]["requirement"];
            tr.appendChild(td_requirement);

            tbody.appendChild(tr);
        }
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    divCenter.appendChild(divBBTable);
    center.appendChild(divCenter);
    parent.appendChild(center);
    
}

function displayRewards() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";
    createFaHeader();

    let center = document.createElement('center');

    let h5stageRewards = document.createElement('h5');
    h5stageRewards.className = "card-title text-center text-title font-weight-bold";
    h5stageRewards.style.textAlign = "left";
    h5stageRewards.innerHTML = `..:: Stage Rewards ::..`;
    parent.appendChild(h5stageRewards);

    let divBBTable = document.createElement("div");
    divBBTable.style.marginTop = "10px";
    divBBTable.className = "bbTable";

    let table = document.createElement('table');
    table.className = "table-primary";
    table.style.width = "90%";
    table.style.marginBottom = "10px";

    let tbody = document.createElement("tbody");

    for (let st = 0; st < stageRewards[getSelectedFa()].length; st++) {
        let tr1 = document.createElement('tr');
        let th = document.createElement('th');
        th.className = "text-center";
        th.colSpan = 3;
        th.innerHTML = `Stage ${st+1}`;
        tr1.appendChild(th);
        tbody.appendChild(tr1);

        let tr2 = document.createElement('tr');
        for (let re = 0; re < stageRewards[getSelectedFa()][st].length; re++) {
            let td = document.createElement('td');
            td.className = "text-center";
            td.style.width = "33%";
            td.style.height = "120px";
            td.innerHTML = `<img src="${stageRewards[getSelectedFa()][st][re]["img"]}">`;
            tr2.appendChild(td);
        }
        tbody.appendChild(tr2);

        let tr3 = document.createElement('tr');
        for (let re = 0; re < stageRewards[getSelectedFa()][st].length; re++) {
            let td = document.createElement('td');
            td.className = "text-center";
            td.style.width = "33%";
            td.style.height = "120px";
            let divCol = document.createElement('div');
            divCol.className = "col-sm";
            let divRow1 = document.createElement('div');
            divRow1.className = "row h-90";
            if (stageRewards[getSelectedFa()][st][re]["link"] !== "") {
                divRow1.innerHTML = `<a href="${stageRewards[getSelectedFa()][st][re]["link"]}" class="text-link font-weight-bold" target="_blank">${stageRewards[getSelectedFa()][st][re]["text"]}</a>`;
            } else {
                divRow1.innerHTML = `<center>${stageRewards[getSelectedFa()][st][re]["text"]}</center>`;
            }
            divCol.appendChild(divRow1);
            if (stageRewards[getSelectedFa()][st][re]["description"] !== "") {
                let divRow2 = document.createElement('div');
                divRow2.className = "row h-10";
                divRow2.style.paddingTop = "30px";
                divRow2.innerHTML = `<h7>${stageRewards[getSelectedFa()][st][re]["description"]}</h7>`;
                divCol.appendChild(divRow2);
            }
            td.appendChild(divCol);
            tr3.appendChild(td);
        }
        tbody.appendChild(tr3);
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    center.appendChild(divBBTable);
    parent.appendChild(center);

    /*let h5rankingRewards = document.createElement('h5');
    h5rankingRewards.className = "card-title text-center text-title font-weight-bold";
    h5rankingRewards.style.textAlign = "left";
    h5rankingRewards.innerHTML = `..:: Ranking Rewards ::..`;

    parent.appendChild(h5rankingRewards);*/
  
}

// WAYPOINTS

function displayWaypoints() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";
    createFaHeader();

    for (let map = 1; map <= 3; map++) {
        let h5map = document.createElement('h5');
        h5map.className = "card-title text-center text-title font-weight-bold";
        h5map.style.textAlign = "left";
        h5map.innerHTML = `..:: Map ${map} ::..`;
        parent.appendChild(h5map);

        let cent = document.createElement('center');
        createRemainingsDiv(cent, map);
        parent.appendChild(cent);

        createWaypointsTable(parent, map);
    }
    checkIfFinishedAll();
    calculateRemainings([1,2,3], waypointsData[getSelectedFa()]);
}

function checkIfFinishedAll() {
    let wpData = waypointsData[getSelectedFa()];
    for (const map of Object.keys(wpData)) {
        for (const color of Object.keys(wpData[map])) {
            for (const encounter of Object.keys(wpData[map][color])) {
                for (const order of Object.keys(wpData[map][color][encounter])) {
                    let currentValue = document.getElementById("input_"+map+"_"+color+"_"+encounter+"_"+order).value;
                    let requiredValue = Object.values(wpData[map][color][encounter][order])[0];
                    if (checkIfTaskCompleted(currentValue, requiredValue)) {
                        setFinishedColor(true, map, color, encounter, order);
                    }
                }
            }
        }
    }
}

function calculateRemainings(maps, wpData) {
    for (const map of maps) {
        var remainings = [];
        let paths = ["all"];
        if (document.getElementById('calculate_all_'+map).checked) {
            paths.push("orange", "blue", "green");
        } else if (document.getElementById('calculate_orange_'+map).checked) {
            paths.push("orange");
        } else if (document.getElementById('calculate_blue_'+map).checked) {
            paths.push("blue");
        } else if (document.getElementById('calculate_green_'+map).checked) {
            paths.push("green");
        }
        for (let p = 0; p < paths.length; p++) {
            let currentPath = paths[p];
            for (let encounter = 0; encounter < Object.keys(wpData[map][currentPath]).length; encounter++) {
                let currentEncounter = Object.keys(wpData[map][currentPath])[encounter];
                for (let req = 0; req < wpData[map][currentPath][currentEncounter].length; req++) {
                    for (const key in wpData[map][currentPath][currentEncounter][req]) {
                        let requiredNumber = wpData[map][currentPath][currentEncounter][req][key];
                        requiredNumber = Math.max(requiredNumber - parseInt(document.getElementById("input_"+map+"_"+currentPath+"_"+currentEncounter+"_"+req).value), 0);
                        for (let numPush = 0; numPush < requiredNumber; numPush++) {
                            remainings.push(key)
                        }
                    }
                }
            }
        }
        remainings = remainings.sort((a, b) => prioritiesItems.indexOf(a) - prioritiesItems.indexOf(b));
        let remainingsForMap = getOccurrencesDict(remainings);
        updateRemainings(map, remainingsForMap);
    }
}

function updateRemainings(map, remainings) {
    let parent = document.getElementById("remaining_items_"+map);
    parent.innerHTML = ``;
    for (const key in remainings) {
        parent.innerHTML += `${remainings[key]}x ${goods_icons[key].replace("style='width: 28px", "style='width: 18px;").replace("<br>", "")}, `;
    }
    parent.innerHTML = parent.innerHTML.substring(0, parent.innerHTML.length-2);
}

function getOccurrencesDict(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        if (result.hasOwnProperty(array[i])) {
            result[array[i]] += 1;
        } else {
            result[array[i]] = 1;
        }
    }
    return result;
}

function createWaypointsTable(parent, map) {
    let divBBTable = document.createElement("div");
    divBBTable.style.marginTop = "10px";
    divBBTable.className = "bbTable";

    let table = document.createElement('table');
    table.className = "table-primary";
    table.style.width = "100%";
    table.style.marginBottom = "10px";

    let tbody = document.createElement("tbody");

    let wpData = waypointsData[getSelectedFa()][map];

    for (let encounter = 1; encounter <= Object.keys(wpData["blue"]).length+1; encounter++) {
        if (encounter === 1) {
            let trAll = document.createElement('tr');
            createCellWaypoint(trAll, "empty", encounter, 33, 3);
            createCellWaypoint(trAll, "all", encounter, 33, 1);
            createCellCosts(trAll, wpData, "all", encounter, map, 33, 1);
            createCellProgress(trAll, wpData, "all", encounter, map, 33, 1);
            createCellWaypoint(trAll, "empty", encounter, 33, 3);
            tbody.appendChild(trAll);

            let trColors = document.createElement('tr');
            createCellColor(trColors, "orange", 3);
            createCellColor(trColors, "blue", 3);
            createCellColor(trColors, "green", 3);
            tbody.appendChild(trColors);
        } else {
            let tr = document.createElement('tr');
            let colors = ["orange", "blue", "green"];
            for (const col of colors) {
                createCellWaypoint(tr, col, encounter, 20, 1);
                createCellCosts(tr, wpData, col, encounter, map, 40, 1);
                createCellProgress(tr, wpData, col, encounter, map, 40, 1);
            }
            tbody.appendChild(tr);
        }
    }


    table.appendChild(tbody);
    divBBTable.appendChild(table);
    parent.appendChild(divBBTable);
}

function createCellWaypoint(parent, encounterType, encounter, width, colspan) {
    let td = document.createElement('td');
    td.style.textAlign = "center";
    td.style.maxWidth = ""+width+"%";
    td.colSpan = colspan;
    if (encounterType === "empty") {
        td.innerHTML = ``;
        parent.appendChild(td);
        return;
    }
    if (encounter === 3 || encounter === 6) {
        td.innerHTML = `<img src="${waypointsIcons["multi"]}">`;
    } else {
        td.innerHTML = `<img src="${waypointsIcons[encounterType]}">`;
    }
    parent.appendChild(td);
}

function createCellCosts(parent, wpData, color, encounter, map, width, colspan) {
    let td = document.createElement('td');
    td.style.textAlign = "center";
    td.style.maxWidth = ""+width+"%";
    td.colSpan = colspan;
    td.id = "td_"+map+"_"+color+"_"+encounter;
    //td.style.padding = "10px";
    for (let i = 0; i < wpData[color][encounter].length; i++) {
        for (const key in wpData[color][encounter][i]) {
            td.innerHTML += `${wpData[color][encounter][i][key]}x ${goods_icons[key].replace("style='width: 28px", "style='width: 25px;")}`
        }
        if (i !== wpData[color][encounter].length-1) {
            //td.innerHTML += `<br>`;
        }
    }
    parent.appendChild(td);
}

function createCellProgress(parent, wpData, color, encounter, map, width, colspan) {
    let td = document.createElement('td');
    td.style.textAlign = "center";
    td.style.maxWidth = ""+width+"%";
    td.colSpan = colspan;
    let loadedState = loadCurrentState();
    for (let i = 0; i < wpData[color][encounter].length; i++) {
        for (const key in wpData[color][encounter][i]) {
            let div = document.createElement('div');
            //div.className = "form-outline form-group col-md-2";
            let input = document.createElement('input');
            input.type = "number";
            input.id = "input_"+map+"_"+color+"_"+encounter+"_"+i;
            //input.className = "form-control";
            input.style.width = "40px";
            input.min = 0;
            input.max = wpData[color][encounter][i][key];
            if (loadedState !== null) {
                input.value = loadedState[map][color][encounter].split(",")[i];
                //checkIfTaskCompleted(this.value, Object.values(wpData[color][encounter][i])[0], map, color, encounter, i);
            } else {
                input.value = 0;
            }
            input.onchange = function() {
                $("#"+"input_"+map+"_"+color+"_"+encounter+"_"+i).val(this.value);
                calculateRemainings([map], waypointsData[getSelectedFa()]);
                setFinishedColor(checkIfTaskCompleted(this.value, Object.values(wpData[color][encounter][i])[0]), map, color, encounter, i);
                saveCurrentState(determineCurrentState());
                document.getElementById("inputcheck_"+map+"_"+color+"_"+encounter+"_"+i).checked = checkIfTaskCompleted(this.value, Object.values(wpData[color][encounter][i])[0]);
            }
            let label = document.createElement('label');
            //label.className = "form-label";
            label.htmlFor = "input_"+map+"_"+color+"_"+encounter;
            let inputCheck = document.createElement('input');
            inputCheck.type = "checkbox";
            inputCheck.id = "inputcheck_"+map+"_"+color+"_"+encounter+"_"+i;
            inputCheck.style.marginLeft = "10px";
            inputCheck.style.marginRight = "-17px";
            inputCheck.checked = checkIfTaskCompleted(input.value, Object.values(wpData[color][encounter][i])[0]);
            inputCheck.onchange = function() {
                if (inputCheck.checked) {
                    setOrderInputValue(wpData, map, color, encounter, i, "max");
                } else {
                    setOrderInputValue(wpData, map, color, encounter, i, 0);
                }
            }
            div.appendChild(input);
            div.appendChild(inputCheck);
            div.appendChild(label);
            td.appendChild(div);
        }
        if (i !== wpData[color][encounter].length-1) {
            //td.innerHTML += `<br>`;
        }
    }
    if (color !== "green" && encounter > 1) {
        td.style.borderRightWidth = "3px";
        //td.style.borderRightColor = "#7a5e49";
    }
    parent.appendChild(td);
}

function setOrderInputValue(wpData, map, color, encounter, order, value) {
    if (value === "max") {
        value = Object.values(wpData[color][encounter][order])[0];
        $("#input_"+map+"_"+color+"_"+encounter+"_"+order).val(value);
    } else {
        $("#input_"+map+"_"+color+"_"+encounter+"_"+order).val(value);
    }
    calculateRemainings([map], waypointsData[getSelectedFa()]);
    setFinishedColor(checkIfTaskCompleted(value, Object.values(wpData[color][encounter][order])[0]), map, color, encounter, order);
    saveCurrentState(determineCurrentState());
}

function checkIfTaskCompleted(currentValue, requiredValue) {
    return currentValue >= requiredValue;
}

function setFinishedColor(completed, map, color, encounter, order) {
    if (completed) {
        let requirement = document.getElementById("td_"+map+"_"+color+"_"+encounter);
        if (!requirement.innerHTML.split("<br>")[order].includes('<p style="color')) {
            let temp = requirement.innerHTML.split("<br>");
            temp[order] = `<p style="color:#a89587; display:inline;">${temp[order]}</p>`;
            temp = temp.join("<br>");
            requirement.innerHTML = temp;
        }
    } else {
        let requirement = document.getElementById("td_"+map+"_"+color+"_"+encounter);
        let temp = requirement.innerHTML.split("<br>");
        temp[order] = temp[order].substring(temp[order].indexOf(">")+1, temp[order].indexOf("</p>"));
        temp = temp.join("<br>");
        requirement.innerHTML = temp;
    }
}

function createCellColor(parent, color, colspan) {
    let td = document.createElement('th');
    td.style.textDecorationColor = color;
    td.style.textAlign = "center";
    td.style.maxWidth = "33%";
    td.colSpan = colspan;
    td.innerHTML = `${color.charAt(0).toUpperCase() + color.slice(1)}`;
    parent.appendChild(td);
}

function createRemainingsDiv(parent, map) {
    let divRemainings = document.createElement('div');
    divRemainings.className = "card-spoiler border-spoiler mb-3";
    divRemainings.style.marginTop = "10px";
    divRemainings.style.paddingBottom = "10px";
    divRemainings.style.paddingTop = "7px";
    divRemainings.style.paddingLeft = "20px";
    divRemainings.style.paddingRight = "20px";
    divRemainings.style.width = "70%";

    let divRow1 = document.createElement('div');
    divRow1.className = "row";
    divRow1.innerHTML = `<b>Remaining items:</b>`;
    divRow1.style.textAlign = "center";
    divRemainings.appendChild(divRow1);

    let divRow2 = document.createElement('div');
    divRow2.className = "row";
    let fieldset = document.createElement('fieldset');
    let i = document.createElement('i');
    let h7_1 = document.createElement('h7');
    h7_1.innerHTML = `Calculate: `;
    i.appendChild(h7_1);

    let input1 = document.createElement('input');
    input1.type = "radio";
    input1.id = `calculate_all_${map}`;
    input1.name = `calculate_${map}`;
    input1.value = `all`;
    if (getPathCalculation()) {
        input1.checked = getPathCalculation()[map-1] === input1.value;
    } else {
        input1.checked = true;
    }
    input1.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
        setPathCalculation(map, input1.value);
    }
    input1.style.marginLeft = "3px";
    i.appendChild(input1);
    let label1 = document.createElement('label');
    label1.htmlFor = `calculate_all_${map}`;
    label1.innerHTML = `<h7>all paths </h7>`;
    i.appendChild(label1);

    let input2 = document.createElement('input');
    input2.type = "radio";
    input2.id = `calculate_orange_${map}`;
    input2.name = `calculate_${map}`;
    input2.value = `orange`;
    if (getPathCalculation()) {
        input2.checked = getPathCalculation()[map-1] === input2.value;
    } else {
        input2.checked = false;
    }
    input2.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
        setPathCalculation(map, input2.value);
    }
    input2.style.marginLeft = "3px";
    i.appendChild(input2);
    let label2 = document.createElement('label');
    label2.htmlFor = `calculate_orange_${map}`;
    label2.innerHTML = `<h7>orange path </h7>`;
    i.appendChild(label2);

    let input3 = document.createElement('input');
    input3.type = "radio";
    input3.id = `calculate_blue_${map}`;
    input3.name = `calculate_${map}`;
    input3.value = `blue`;
    if (getPathCalculation()) {
        input3.checked = getPathCalculation()[map-1] === input3.value;
    } else {
        input3.checked = false;
    }
    input3.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
        setPathCalculation(map, input3.value);
    }
    input3.style.marginLeft = "3px";
    i.appendChild(input3);
    let label3 = document.createElement('label');
    label3.htmlFor = `calculate_blue_${map}`;
    label3.innerHTML = `<h7>blue path </h7>`;
    i.appendChild(label3);

    let input4 = document.createElement('input');
    input4.type = "radio";
    input4.id = `calculate_green_${map}`;
    input4.name = `calculate_${map}`;
    input4.value = `green`;
    if (getPathCalculation()) {
        input4.checked = getPathCalculation()[map-1] === input4.value;
    } else {
        input4.checked = false;
    }
    input4.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
        setPathCalculation(map, input4.value);
    }
    input4.style.marginLeft = "3px";
    i.appendChild(input4);
    let label4 = document.createElement('label');
    label4.htmlFor = `calculate_green_${map}`;
    label4.innerHTML = `<h7>green path.</h7>`;
    i.appendChild(label4);

    fieldset.appendChild(i);
    divRow2.appendChild(fieldset);
    divRemainings.appendChild(divRow2);

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "left";
    divRow3.id = "remaining_items_"+map;
    divRemainings.appendChild(divRow3);

    parent.appendChild(divRemainings);
}

function setPathCalculation(map, path) {
    if (getPathCalculation() === null) {
        let result = ["all", "all", "all"];
        result[map-1] = path;
        localStorage.setItem("mpe_"+getSelectedFa()+"pathCalculation", result.join(","));
    } else {
        let result = getPathCalculation();
        result[map-1] = path;
        localStorage.setItem("mpe_"+getSelectedFa()+"pathCalculation", result.join(","));
    }
}

function getPathCalculation() {
    if (localStorage.getItem("mpe_"+getSelectedFa()+"pathCalculation") === null) {
        return null;
    }
    return localStorage.getItem("mpe_"+getSelectedFa()+"pathCalculation").split(",");
}

function determineCurrentState() {
    let result = {};
    let maps = [1,2,3];
    let colors = ["all", "orange", "blue", "green"];
    let encounters = [1,2,3,4,5,6,7,8,9];
    // map {1,2,3} -> color {all,orange,blue,green} -> encounter {1,2,3,4,5,6,7,8,9} -> "order1,order2,order3"
    for (const map of maps) {
        if (!result.hasOwnProperty(map)) {
            result[map] = {};
        }
        for (const color of colors) {
            if (!result[map].hasOwnProperty(color)) {
                result[map][color] = {};
            }
            for (const encounter of encounters) {
                if (color === "all" && encounter === 1) {
                    if (!result[map][color].hasOwnProperty(encounter)) {
                        result[map][color][encounter] = "";
                    }
                    let orderLabel = document.getElementById("input_"+map+"_"+color+"_"+encounter+"_0");
                    let orderNumber = 0;
                    while (orderLabel !== null) {
                        result[map][color][encounter] += orderLabel.value+",";
                        orderNumber++;
                        orderLabel = document.getElementById("input_"+map+"_"+color+"_"+encounter+"_"+orderNumber);
                    }
                    result[map][color][encounter] = result[map][color][encounter].slice(0, result[map][color][encounter].length-1);
                } else if (color !== "all" && encounter > 1) {
                    if (!result[map][color].hasOwnProperty(encounter)) {
                        result[map][color][encounter] = "";
                    }
                    let orderLabel = document.getElementById("input_"+map+"_"+color+"_"+encounter+"_0");
                    let orderNumber = 0;
                    while (orderLabel !== null) {
                        result[map][color][encounter] += orderLabel.value+",";
                        orderNumber++;
                        orderLabel = document.getElementById("input_"+map+"_"+color+"_"+encounter+"_"+orderNumber);
                    }
                    result[map][color][encounter] = result[map][color][encounter].slice(0, result[map][color][encounter].length-1);
                }
            }
        }
    }
    return result;
}

function saveCurrentState(state) {
    localStorage.setItem("mpe_"+getSelectedFa(), JSON.stringify(state));
}

function loadCurrentState() {
    return JSON.parse(localStorage.getItem("mpe_"+getSelectedFa()));
}