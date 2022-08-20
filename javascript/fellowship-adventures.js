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
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+3))+"%";
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
    center.innerHTML += introductionText.replace("_", getSelectedFaName());

    center.innerHTML += `<br><br><b>Start date:</b> `+dates[getSelectedFa()]["start_date"];
    center.innerHTML += `<br><b>End date:</b> `+dates[getSelectedFa()]["end_date"]+`<br><br>`;

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
    note.innerHTML = `The following table contains the list of items you will need to produce during <b>this</b> fellowship adventure.`;
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
    table.style.width = "50%";
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
            td.innerHTML = `<img src="${stageRewards[getSelectedFa()][st][re]["img"]}">`;
            tr2.appendChild(td);
        }
        tbody.appendChild(tr2);

        let tr3 = document.createElement('tr');
        for (let re = 0; re < stageRewards[getSelectedFa()][st].length; re++) {
            let td = document.createElement('td');
            td.className = "text-center";
            td.style.width = "33%";
            if (stageRewards[getSelectedFa()][st][re]["link"] !== "") {
                td.innerHTML = `<a href="${stageRewards[getSelectedFa()][st][re]["link"]}" class="text-link font-weight-bold" target="_blank">${stageRewards[getSelectedFa()][st][re]["text"]}</a>`;
            } else {
                td.innerHTML = `${stageRewards[getSelectedFa()][st][re]["text"]}`;
            }
            tr3.appendChild(td);
        }
        tbody.appendChild(tr3);
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    center.appendChild(divBBTable);
    parent.appendChild(center);

    let h5rankingRewards = document.createElement('h5');
    h5rankingRewards.className = "card-title text-center text-title font-weight-bold";
    h5rankingRewards.style.textAlign = "left";
    h5rankingRewards.innerHTML = `..:: Ranking Rewards ::..`;

    parent.appendChild(h5rankingRewards);
  
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

    calculateRemainings([1,2,3], waypointsData[getSelectedFa()]);
}

function calculateRemainings(maps, wpData) {
    console.log("CALCULATING REMAININGS ON MAPS", maps);
    for (const map of maps) {
        var remainings = [];
        if (document.getElementById('calculate_all_'+map).checked) {
            for (let color = 0; color < Object.keys(wpData[map]).length; color++) {
                let currentPath = Object.keys(wpData[map])[color];
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
        } else {
            let paths = ["all"];
            if (document.getElementById('calculate_orange_'+map).checked) {
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
        }
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

    console.log(wpData);

    for (let encounter = 1; encounter <= Object.keys(wpData["blue"]).length+1; encounter++) {
        if (encounter === 1) {
            let trAll = document.createElement('tr');
            createCellWaypoint(trAll, "all", encounter, 33, 3);
            createCellCosts(trAll, wpData, "all", encounter, map, 33, 3);
            createCellProgress(trAll, wpData, "all", encounter, map, 33, 3);
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
            input.value = 0;
            input.onchange = function() {
                $("#"+"input_"+map+"_"+color+"_"+encounter+"_"+i).val(this.value);
                calculateRemainings([map], waypointsData[getSelectedFa()]);
                checkIfTaskCompleted(this.value, Object.values(wpData[color][encounter][i])[0], map, color, encounter, i);
            }
            let label = document.createElement('label');
            //label.className = "form-label";
            label.htmlFor = "input_"+map+"_"+color+"_"+encounter;
            div.appendChild(input);
            div.appendChild(label);
            td.appendChild(div);
        }
        if (i !== wpData[color][encounter].length-1) {
            //td.innerHTML += `<br>`;
        }
    }
    parent.appendChild(td);
}

function checkIfTaskCompleted(currentValue, requiredValue, map, color, encounter, order) {
    if (currentValue >= requiredValue) {
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
    input1.checked = true;
    input1.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
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
    input2.checked = false;
    input2.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
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
    input3.checked = false;
    input3.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
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
    input4.checked = false;
    input4.onchange = function() {
        calculateRemainings([map], waypointsData[getSelectedFa()]);
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
    /*divRow2.innerHTML = `<fieldset>
    <i><h7>Calculate:</h7>
      <input type="radio" id="calculate_all_${map}" name="calculate_${map}" value="all"
             checked>
      <label for="calculate_all_${map}"><h7>all paths</h7></label>

      <input type="radio" id="calculate_orange_${map}" name="calculate_${map}" value="orange">
      <label for="calculate_orange_${map}"><h7>orange path</h7></label>

      <input type="radio" id="calculate_blue_${map}" name="calculate_${map}" value="blue">
      <label for="calculate_blue_${map}"><h7>blue path</h7></label>
      
      <input type="radio" id="calculate_green_${map}" name="calculate_${map}" value="green">
      <label for="calculate_green_${map}"><h7>green path.</h7></label></i>
</fieldset>`;
    divRemainings.appendChild(divRow2);*/

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "left";
    divRow3.id = "remaining_items_"+map;
    divRemainings.appendChild(divRow3);

    parent.appendChild(divRemainings);
}