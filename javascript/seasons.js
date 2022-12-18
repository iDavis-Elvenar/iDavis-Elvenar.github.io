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
    } else if (type === "quests" && view !== "quests") {
        displayQuests();
        view = "quests";
    } else if (type === "pass" && view !== "pass") {
        displayPass();
        view = "pass";
    } else if (type !== "info" && type !== "quests" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (let season in additionalTabsSeasons) {
            for (let tab = 0; tab < additionalTabsSeasons[season].length; tab++) {
                if (additionalTabsSeasons[season][tab]["id"] === type) {
                    $(function(){
                        $("#column_with_tables").load("seasonsTabs/"+season+"/"+additionalTabsSeasons[season][tab]["file"]); 
                    });
                }
            }
        }
    }
}

function setLeftBar() {
    let leftBar = document.getElementById("left_bar");
    let selectedSeason = getSelectedSeason();
    leftBar.innerHTML = "";

    //Povodny staticky HTML content:
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="calendar_top_div"><span class="align-middle"><a class="text-link font-weight-bold" id="calendar_top" href="#calendar" onclick="switchView('calendar')"><img src="images/general/calendar.png" width="45" style="margin-left: -10px; margin-right: 2px; position: relative;"></a></span></div>
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="quests_left_panel_div"><span class="align-middle"><a class="text-link font-weight-bold" id="quests_left_panel" href="#quests" onclick="switchView('quests')"><img src="images/general/event_guide.png" width="28" style="margin-left: 0px; margin-right: 10px; position: relative;"></a></span></div>

    let numberOfAdditionalItems = 0;
    if (additionalTabsSeasons.hasOwnProperty(selectedSeason)) {
        numberOfAdditionalItems = additionalTabsSeasons[selectedSeason].length;
    }

    let numberOfBaseItems = baseTabsSeasons.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsSeasons[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = baseTabsSeasons[b]["id"].substring(0, baseTabsSeasons[b]["id"].lastIndexOf("_"));
        a.href = baseTabsSeasons[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(baseTabsSeasons[b]["onclick"]);
        }
        a.innerHTML = langUI(baseTabsSeasons[b]["name"]);
        let img = document.createElement("img");
        if (baseTabsSeasons[b]["img"] === "various") {
            img.src = "./images/seasons/icons/"+getSelectedSeason()+".png";
            img.style = "width: "+seasonInfoIcons[getSelectedSeason()]["img_width"]+"px; "+seasonInfoIcons[getSelectedSeason()]["img_style"];
        } else {
            img.src = baseTabsSeasons[b]["img"];
            img.style = "width: "+baseTabsSeasons[b]["img_width"]+"px; "+baseTabsSeasons[b]["img_style"];
        }
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        newDiv.id = additionalTabsSeasons[selectedSeason][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsSeasons[selectedSeason][i]["href"];
        //newA.href += "-"+selectedFa;
        newA.onclick = function() {
            switchView(additionalTabsSeasons[selectedSeason][i]["id"]);
        }
        newA.innerHTML = additionalTabsFa[selectedFa][i]["name"];
        let newImg = document.createElement("img");
        newImg.src= additionalTabsSeasons[selectedSeason][i]["img"];
        newImg.style = "width: "+additionalTabsSeasons[selectedSeason][i]["img_width"]+"px; "+additionalTabsSeasons[selectedSeason][i]["img_style"];
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}

function getSelectedSeason() {
    var selectSeason = document.getElementById("input_event");
    return selectSeason.options[selectSeason.selectedIndex].value;
}

function getSelectedSeasonName() {
    let seasonSelect = document.getElementById('input_event');
    return seasonSelect.options[seasonSelect.selectedIndex].text;
}

function generateSeasons(idToAppend) {
    let years = Object.keys(allSeasons).sort().reverse();
    for (let y = 0; y < years.length; y++) {
        for (let year in allSeasons) {
            if (years[y] === year) {
                let optGroup = document.createElement('optGroup');
                optGroup.label = `${year}`;
                for (let e = 0; e < allSeasons[year].length; e++) {
                    let option = document.createElement('option');
                    option.innerHTML = langUI(allSeasons[year][e][0]);
                    option.value = allSeasons[year][e][1];
                    option.selected = allSeasons[year][e][2];
                    option.disabled = allSeasons[year][e][3];
                    option.hidden = allSeasons[year][e][3];
                    optGroup.appendChild(option);
                }
                document.getElementById(idToAppend).appendChild(optGroup);
            }
        }
    }
}

function createSeasonHeader() {
    let selectedSeason = getSelectedSeason();
    let selectedSeasonName = getSelectedSeasonName();
    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI(selectedSeasonName)} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var seasonImg = document.createElement("img");
    seasonImg.id = `event_banner`;
    seasonImg.src = seasonsBanners[selectedSeason];
    seasonImg.alt = seasonsBanners[selectedSeason];
    seasonImg.className = `center `;
    seasonImg.style.marginBottom = `15px`;
    seasonImg.style.width = `50%`;
    document.getElementById('column_with_tables').appendChild(seasonImg);
}

function displayBase() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    createSeasonHeader();
    
    let center = document.createElement('center');
    let p = document.createElement('p');
    p.innerHTML = "This page is under the construction. I will add more content soon. :)"
    center.appendChild(p);

    createDatesTable(center,    seasonStartDates[getSelectedSeason()]["live"]["start_date"],
                                seasonStartDates[getSelectedSeason()]["live"]["end_date"],
                                seasonStartDates[getSelectedSeason()]["beta"]["start_date"],
                                seasonStartDates[getSelectedSeason()]["beta"]["end_date"]);
    
    parent.appendChild(center);
}

function displayQuests() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    createSeasonHeader();

    let questsTypes = ["daily", "weekly"];

    questsTypes.forEach(function (questType) {
        var h5 = document.createElement('h5');
        h5.id = 'quests_header';
        h5.className = "card-title text-center text-title font-weight-bold";
        h5.style.textAlign = "left";
        if (questType == "daily") {
            h5.innerHTML = `..:: ${langUI("Set of Daily Quests")} ::..<br>`;
        } else {
            h5.innerHTML = `..:: ${langUI("Set of Weekly Quests")} ::..<br>`;
        }
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

        if (seasonsQuests[getSelectedSeason()] === undefined) {
            var h7 = document.createElement('h7');
            h7.id = 'quests_noQuests';
            h7.className = "card-title text-center";
            h7.style.textAlign = "left";
            h7.innerHTML = `${langUI("Quests will appear soon")}.`;
            var center = document.createElement('center');
            center.appendChild(h7);
            document.getElementById('column_with_tables').appendChild(center);

        } else {

            var shareLink = document.createElement('h7');
            shareLink.id = 'quests_shareLink';
            shareLink.className = "card-title text-center";
            shareLink.style.textAlign = "left";
            if (questType == "daily") {
                shareLink.innerHTML = `${langUI('There is no predefined sequence of quests in Seasons. Each day are randomly selected 4 quests out of the set below. This list only gives you information about the possible quests you may receive each day.')}`;
            } else {
                shareLink.innerHTML = `${langUI('There is no predefined sequence of quests in Seasons. Each week are randomly selected 4 quests out of the set below. This list only gives you information about the possible quests you may receive each week.')}`;
            }
            var center = document.createElement('center');
            center.appendChild(shareLink);
            parent.appendChild(center);

            var numberOfQuests = seasonsQuests[getSelectedSeason()][questType].length;

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
                    tbody.appendChild(tr);
                } else {
                    //insertQuestsAd(quest, tbody);
                    let tr = document.createElement('tr');
                    let number = document.createElement('td');
                    number.style.width = "5%";
                    number.innerHTML = quest;
                    tr.appendChild(number);
                    let task = document.createElement('td');
                    task.style.width = "90%";
                    task.id = "quest_task_"+(quest);
                    task.innerHTML = `${seasonsQuests[getSelectedSeason()][questType][quest-1]}`;
                    task.className = "nocopy";
                    tr.appendChild(task);
                    tbody.appendChild(tr);
                }
            }
        }
        table.appendChild(tbody);
        divBBTable.appendChild(table);
        div.appendChild(divBBTable);
        parent.appendChild(div);
    });
}

var cumulativeXp = 0;

function displayPass() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    createSeasonHeader();

    var h5 = document.createElement('h5');
    h5.id = 'seasonPass_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Season Pass")} ::..<br>`;
    parent.appendChild(h5);

    generateEffortCalculation(parent);

    var div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginBottom = '10px';
    div.style.marginTop = '20px';
    var divBBTable = document.createElement('div');
    divBBTable.className = 'bbTable';
    var table = document.createElement('table');
    table.className = 'table-primary';
    table.style.width = '100%';
    var tbody = document.createElement('tbody');

    //var cumulativeXp = 0;

    for (let level = 0; level < seasonPassData.length; level++) {
        if (level === 0) {
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.style.width = "12%";
            th.innerHTML = "Level";
            tr.appendChild(th);
            let thReq = document.createElement('th');
            thReq.style.width = "8%";
            thReq.innerHTML = "Costs";
            tr.appendChild(thReq);
            for (let rew = 1; rew <= 3; rew++) {
                let thReward = document.createElement('th');
                thReward.style.width = "25%";
                thReward.innerHTML = `Reward ${rew}`;
                tr.appendChild(thReward);
            }
            let thFinish = document.createElement('th');
            thFinish.style.width = "5%";
            thFinish.innerHTML = "Finished";
            tr.appendChild(thFinish);
            tbody.appendChild(tr);
        }
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let imgLevel = document.createElement('img');
        imgLevel.style.rotate = "90%";
        imgLevel.src = seasonInfoIcons[getSelectedSeason()]["img"];
        imgLevel.style.transform = "rotate(90deg)";
        let divLevel = document.createElement('div');
        divLevel.innerHTML = ""+(level+1);
        divLevel.style.position = "absolute";
        if ((level+1) < 10) {
            divLevel.style.marginLeft = "5%";
        } else {
            divLevel.style.marginLeft = "4.5%";
        }
        divLevel.style.marginTop = "4px";
        divLevel.style.color = "white";
        divLevel.style.fontWeight = "bold";
        divLevel.style.textShadow = "1px 1px 1px #000000";
        divLevel.style.zIndex = "2";
        td.appendChild(divLevel);
        td.appendChild(imgLevel);
        td.style.minHeight = "40px";
        tr.appendChild(td);
        let tdReq = document.createElement('td');
        if (seasonPassData[level].hasOwnProperty('requiredXp')) {
            cumulativeXp += seasonPassData[level]["requiredXp"];
        }
        tdReq.innerHTML = `${cumulativeXp}<img src="${seasonXp[getSelectedSeason()]['img']}">`;
        if (seasonPassData[level].hasOwnProperty('requiresPass')) {
            tdReq.innerHTML += `<br><img src="https://i.ibb.co/87MNrBB/season-pass.png">`;
        }
        tr.appendChild(tdReq);
        for (let rew = 1; rew <= 3; rew++) {
            let tdReward = document.createElement('td');
            tdReward.id = `reward_${level+1}_${rew}`
            if (rew <= seasonPassData[level]['rewards'].length) {
                if (seasonPassData[level]['rewards'][rew-1]['type'] === 'item') {
                    let subType = seasonPassData[level]['rewards'][rew-1]['subType'];
                    tdReward.innerHTML = `<img src="${instants[subType.substring(0, subType.lastIndexOf("_")+1)]["image_big"]}">`;
                    if (goods_icons.hasOwnProperty(subType)) {
                        tdReward.innerHTML += `<br>${getTitleFromGoodImage(subType)}`;
                    } else if (goods_icons.hasOwnProperty(subType.toLowerCase())) {
                        tdReward.innerHTML += `<br>${getTitleFromGoodImage(subType.toLowerCase())}`;
                    }

                } else if (seasonPassData[level]['rewards'][rew-1]['type'] === 'flexible_reward') {
                    let rewardCodeName = flexibleRewards.filter(elem => elem.id === seasonPassData[level]['rewards'][rew-1]['subType'])[0]['rewards'][getPresetChapter()-1]['subType'];
                    if (instants.hasOwnProperty(rewardCodeName)) {
                        tdReward.innerHTML = `<img src="${instants[rewardCodeName]["image_big"]}">`;
                    } else {
                        tdReward.innerHTML = `<img src="https://i.ibb.co/WndLSNt/goods-general-medium.png">`;
                    }
                    tdReward.innerHTML += `<br>${getTitleFromGoodImage(rewardCodeName)} <h7>${flexibleRewards.filter(elem => elem.id === seasonPassData[level]['rewards'][rew-1]['subType'])[0]['rewards'][getPresetChapter()-1]['amount']*seasonPassData[level]['rewards'][rew-1]['amount']}x</h7>`;
                } else if (seasonPassData[level]['rewards'][rew-1]['type'] === 'building') {
                    let buildingId = seasonPassData[level]['rewards'][rew-1]['subType'].substring(0, seasonPassData[level]['rewards'][rew-1]['subType'].indexOf("$"));
                    let imgBuilding = document.createElement('img');
                    imgBuilding.src = images_buildings[buildingId];
                    imgBuilding.style.maxHeight = "96px";
                    tdReward.appendChild(imgBuilding);
                    tdReward.innerHTML += "<br>";
                    let textik;
                    /*tdReward.innerHTML += `<div class="bg-show_button" style="margin-top: 8px" id="classHeader_${(level+1)}">
                            <button onClick="displayBuilding('${level}','${buildingId}')" class="btn btn-spoiler btn-smbtn-danger " data-toggle="collapse" data-target="#collapse_${(level+1)}" aria-expanded="false" aria-controls="collapseOne">
                                <h7>Show</h7>
                            </button>
                    </div>`;*/
                    $.get('database/buildings.json', function(data) {
                        tdReward.innerHTML += `<a class="text-link font-weight-bold" href="buildings.html#${buildingId}" target="_blank">${data.filter(elem => elem.id === buildingId)[0]['name']}</a>`;
                    });
                }
            } else {
                tdReward.innerHTML = "";
            }
            tr.appendChild(tdReward);
        }
        let tdFinish = document.createElement('td');
        tdFinish.id = `level_${(level+1)}`;
        let div = document.createElement('div');
        div.className = "form-check";
        let input = document.createElement('input');
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = "level_"+(level+1)+"_input";
        if (Array(localStorage.getItem("season_levels_finished_"+getSelectedSeason())).join().split(',').includes(String((level+1)))) {
            input.checked = true;
        }
        input.onchange = function() {
            if (input.checked) {
                for (let i = 1; i <= level+1; i++) {
                    checkbox = document.getElementById("level_"+(i)+"_input");
                    checkbox.checked = true;
                }
            } else {
                for (let i = level+1; i <= seasonPassData.length; i++) {
                    checkbox = document.getElementById("level_"+(i)+"_input");
                    checkbox.checked = false;
                }
            }
            recordFinishedLevels(getSelectedSeason(), seasonPassData.length);
            calculateRequiredEffort(document.getElementById("effort_calc"));
        };
        let label = document.createElement('label');
        label.className = "form-check-label";
        label.htmlFor = "level_"+(level+1)+"_input";
        label.innerHTML = "";
        div.appendChild(input);
        div.appendChild(label);
        tdFinish.appendChild(div);
        tr.appendChild(tdFinish);
        tbody.appendChild(tr);

        `
        <div id="collapse_${(level+1)}" class="collapse" aria-labelledby="headingOne">
            <div class="card-body">
            <div class="container"><center><span>
            table
            </span></center></div>
            </div>
        </div>`
        /*let trCollapse = document.createElement('tr');
        trCollapse.style.maxHeight = "0px";
        let tdCollapse = document.createElement('td');
        tdCollapse.colSpan = 6;
        let div0 = document.createElement('div');
        div0.id = `collapse_${(level+1)}`;
        div0.className = "collapse";
        div0.colSpan = "6";
        div0.ariaLabel = "headingOne";
        div0.style.width = "100%";*/
        /*let div1 = document.createElement('div');
        div1.className = "card-body";
        let div2 = document.createElement('div');
        div2.className = "container";
        let cent = document.createElement('center');
        let span = document.createElement('span');
        span.innerHTML = "table";
        cent.appendChild(span);
        div2.appendChild(cent);
        div1.appendChild(div2);
        tdCollapse.appendChild(div1);*/
        /*tdCollapse.appendChild(div0);
        trCollapse.appendChild(tdCollapse);
        tbody.appendChild(trCollapse);*/
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    parent.appendChild(div);
}

function displayBuilding(level, id) {
    document.getElementById('collapse_'+(level+1)).innerHTML = id;
}

function recordFinishedLevels(seasonId, numberOfLevels) {
    finished = [];
    for (let level = 1; level <= numberOfLevels; level++) {
        if (document.getElementById("level_"+(level)+"_input").checked) {
            finished.push(level);
        }
    }
    localStorage.setItem("season_levels_finished_"+seasonId, finished);
}

function generateEffortCalculation(parent) {
    let center = document.createElement('center');
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
    divRow1.innerHTML = `<b>Required effort calculation:</b>`;
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
    input1.id = `calculate_live`;
    input1.name = `calculate`;
    input1.value = `live`;
    if (getServerCalculation()) {
        input1.checked = getServerCalculation() === input1.value;
    } else {
        input1.checked = true;
    }
    input1.onchange = function() {
        setServerCalculation("live");
        calculateRequiredEffort(document.getElementById("effort_calc"));
    }
    input1.style.marginLeft = "3px";
    i.appendChild(input1);
    let label1 = document.createElement('label');
    label1.htmlFor = `calculate_live`;
    label1.innerHTML = `<h7> live </h7>`;
    i.appendChild(label1);

    let input2 = document.createElement('input');
    input2.type = "radio";
    input2.id = `calculate_beta`;
    input2.name = `calculate`;
    input2.value = `beta`;
    if (getServerCalculation()) {
        input2.checked = getServerCalculation() === input2.value;
    } else {
        input2.checked = false;
    }
    input2.onchange = function() {
        setServerCalculation("beta");
        calculateRequiredEffort(document.getElementById("effort_calc"));
    }
    input2.style.marginLeft = "3px";
    i.appendChild(input2);
    let label2 = document.createElement('label');
    label2.htmlFor = `calculate_beta`;
    label2.innerHTML = `<h7> beta. Currently have</h7>`;
    i.appendChild(label2);
    
    let input3 = document.createElement('input');
    input3.type = "number";
    input3.id = `queued_weekly_quests`;
    input3.name = `queued_quests`;
    input3.min = 0;
    if (getWeeklyQueuedQuests()) {
        input3.value = getWeeklyQueuedQuests();
    } else {
        input3.value = 0;
    }
    input3.onchange = function() {
        setWeeklyQueuedQuests(input3.value);
        calculateRequiredEffort(document.getElementById("effort_calc"));
    }
    input3.style.marginLeft = "3px";
    input3.style.marginRight = "3px";
    input3.style.width = "40px";
    input3.style.height = "25px";
    i.appendChild(input3);
    let label3 = document.createElement('label');
    label3.htmlFor = `queued_weekly_quests`;
    label3.innerHTML = `<h7> queued weekly quests.</h7>`;
    i.appendChild(label3);

    fieldset.appendChild(i);
    divRow2.appendChild(fieldset);
    divRemainings.appendChild(divRow2);

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "left";
    divRow3.id = "effort_calc";
    divRow3.innerHTML = "<center>This will work soon.</center>";
    divRemainings.appendChild(divRow3);
    center.appendChild(divRemainings);

    parent.appendChild(center);

    calculateRequiredEffort(document.getElementById("effort_calc"));
}

function setServerCalculation(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"serverCalculation", value);
}

function getServerCalculation() {
    if (localStorage.getItem("season_"+getSelectedSeason()+"serverCalculation") === null) {
        return null;
    }
    return localStorage.getItem("season_"+getSelectedSeason()+"serverCalculation");
}

function setWeeklyQueuedQuests(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"weekly_queued_quests", value);
}

function getWeeklyQueuedQuests() {
    if (localStorage.getItem("season_"+getSelectedSeason()+"weekly_queued_quests") === null) {
        return null;
    }
    return localStorage.getItem("season_"+getSelectedSeason()+"weekly_queued_quests");
}

function calculateRequiredEffort(parent) {
    var remainingDays = Math.floor(((new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()][getServerCalculation()]["end_date"])) - new Date()) / 60 / 60 / 1000 / 24));
    var remainingXp = 0;
    var arr = localStorage.getItem("season_levels_finished_"+getSelectedSeason()).split(",");
    seasonPassData.forEach(function(elem, index) {
        if (!arr.includes(""+(index+1))) {
            remainingXp += elem["requiredXp"] ? elem["requiredXp"] : 0;
        }
    });

    var result = `<center>Remains <b>${remainingDays}</b> days until the end of the season. You need <b>${remainingXp}</b> additional 
    <img src="${seasonXp[getSelectedSeason()]["img"]}" style="width: 20px;"> to collect all rewards.<br>Can I still collect all rewards?<br>
    <img src="https://i.ibb.co/VxPSfh5/season-green-mark.png"><br><center>`;
    if (true) {
        result += `Yes, you can collect all rewards if you complete all the remaining weekly quests and at least __ of the remaining daily quests.
        (v pripade ze by uz nebolo treba splnit ani vsetky weekly quests, tak uviest kolko staci splnit este dennych (kedze tie su lahsie) a nejak to este prepocitat)
        
        <img src="https://i.ibb.co/sy2SB8S/season-red-mark.png">`;
    } else {
        result += `You can't collect all rewards in time. If you complete all the remaining quests, you will get the __th reward the most.`
    }
    //parent.innerHTML = result;
}