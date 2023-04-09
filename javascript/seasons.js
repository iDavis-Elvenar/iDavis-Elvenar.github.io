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
    prepSetAlertElements();
    create_exception("Loading...", 10000, 'primary');
    if (type === "info" && view !== "info") {
        displayBase();
        view = "info";
    } else if (type === "quests" && view !== "quests") {
        displayQuests();
        view = "quests";
    } else if (type === "pass" && view !== "pass") {
        displayPass();
        view = "pass";
    } else if (type === "blessings" && view !== "blessings") {
        displayBlessings();
        view = "blessings";
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
    setDocumentTitle(document, type, baseTabsSeasons, additionalTabsSeasons, "seasons");
    create_exception("Content Generated!", 3, 'success');
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
        } else if (baseTabsSeasons[b]["img"] === "various_blessing") {
            img.src = seasonBlessingIcons[getSelectedSeason()];
            img.style = "width: "+baseTabsSeasons[b]["img_width"]+"px; "+baseTabsSeasons[b]["img_style"];
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
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();
    setDocumentTitle(document, "info", baseTabsSeasons, additionalTabsSeasons, "seasons");
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    createSeasonHeader();
    
    let center = document.createElement('center');
    let p = document.createElement('p');
    let imgProgress = seasonProgress[getSelectedSeason()]["img"];
    let imgProgressWidth = seasonProgress[getSelectedSeason()]["img_width"];
    p.innerHTML = seasonsIntro.replace("{img}", imgProgress).replace("{img_width}", imgProgressWidth);
    center.appendChild(p);

    createDatesTable(center,    seasonStartDates[getSelectedSeason()]["live"]["start_date"],
                                seasonStartDates[getSelectedSeason()]["live"]["end_date"],
                                seasonStartDates[getSelectedSeason()]["beta"]["start_date"],
                                seasonStartDates[getSelectedSeason()]["beta"]["end_date"]);
    
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
    iframe.src = seasonsVideos[getSelectedSeason()];
    iframe.style.marginBottom = '15px';
    center2.appendChild(iframe);
    parent.appendChild(center2);

    let subscribe = document.createElement('center');
    subscribe.innerHTML = subscribeText;
    parent.appendChild(subscribe);
    create_exception("Content Generated!", 3, 'success');
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
            h5.style.marginTop = "20px";
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
                shareLink.innerHTML = `${langUI(`There is no predefined sequence of quests in Seasons. Each day 4 quests are randomly selected out of the set below. The list below only gives you idea about the possible quests you may receive, this is not their exact order.<br><img src="${seasonsQuestsBannerIcons[getSelectedSeason()]}"><br><b>Note:</b> Some quests are conditional. The condition that must apply for receiving the particular quest is stated in the "Can appear if" column. Of course, all the remaining quests are conditional upon unlocking the required resources in the research tree, I did just not mention it for every quest (e.g. quest requiring ascended goods can only appear if you have ascended goods unlocked etc.).`)}`;
            } else {
                shareLink.innerHTML = `${langUI('There is no predefined sequence of quests in Seasons. Each week 4 quests are randomly selected out of the set below. The list below only gives you idea about the possible quests you may receive, this is not their exact order.')}`;
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
                    number.style.width = "5%";
                    number.innerHTML = `${langUI("Number")}`;
                    tr.appendChild(number);
                    let task = document.createElement('th');
                    task.style.width = "65%";
                    task.innerHTML = `${langUI("Task")}`;
                    tr.appendChild(task);
                    let appearsIf = document.createElement('th');
                    appearsIf.style.width = "25%";
                    appearsIf.innerHTML = `${langUI("Can appear if")}`;
                    tr.appendChild(appearsIf);
                    let reward = document.createElement('th');
                    reward.style.width = "5%";
                    reward.innerHTML = `${langUI("Reward")}`;
                    tr.appendChild(reward);
                    tbody.appendChild(tr);
                } else {
                    //insertQuestsAd(quest, tbody);
                    let tr = document.createElement('tr');
                    let number = document.createElement('td');
                    number.innerHTML = quest;
                    tr.appendChild(number);
                    let task = document.createElement('td');
                    task.id = "quest_task_"+(quest);
                    if (typeof seasonsQuests[getSelectedSeason()][questType][quest-1] === "object") {
                        task.innerHTML = `${seasonsQuests[getSelectedSeason()][questType][quest-1][0]}`;
                    } else {
                        task.innerHTML = `${seasonsQuests[getSelectedSeason()][questType][quest-1]}`;
                    }
                    task.className = "nocopy";
                    tr.appendChild(task);
                    let appearsIf = document.createElement('td');
                    if (typeof seasonsQuests[getSelectedSeason()][questType][quest-1] === "object") {
                        appearsIf.innerHTML = `${seasonsQuests[getSelectedSeason()][questType][quest-1][1]}`;
                    }
                    tr.appendChild(appearsIf);
                    let reward = document.createElement('td');
                    reward.innerHTML = `${seasonQuestsRewards[getSelectedSeason()][questType]} <img src="${seasonXp[getSelectedSeason()]["img"]}" style="width: 22px;">`;
                    tr.appendChild(reward);
                    tbody.appendChild(tr);
                }
            }
        }
        table.appendChild(tbody);
        divBBTable.appendChild(table);
        div.appendChild(divBBTable);
        parent.appendChild(div);
        if (questType === "daily") {
            generateDailyChest(parent);
        }
    });
}

function generateDailyChest(parent) {
    if (seasonsChests.hasOwnProperty(getSelectedSeason())) {
        let p = document.createElement('p');
        p.innerHTML = `<center><h7>If you manage to complete all 4 daily quests, you can unlock the following Daily Chest:</h7></center>`;
        p.style.marginTop = "-8px";
        p.style.marginBottom = "-8px";
        parent.appendChild(p);
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
        let tdChest = document.createElement('td');
        tdChest.rowSpan = "2";
        tdChest.style.width = "30%";
        let chest = document.createElement('img');
        chest.src = "https://i.ibb.co/BPr1Ych/season-daily-chest.png";
        let center = document.createElement('center');
        center.appendChild(chest);
        tdChest.appendChild(center);
        tr.appendChild(tdChest);
        seasonsChests[getSelectedSeason()]['daily'].forEach(function(reward) {
            let th = document.createElement('th');
            th.style.width = ""+(70/seasonsChests[getSelectedSeason()]['daily'].length)+"%";
            th.innerHTML = reward["percentage"]+"%";
            tr.appendChild(th);
        });
        let tr2 = document.createElement('tr');
        seasonsChests[getSelectedSeason()]['daily'].forEach(function(reward) {
            let td = document.createElement('td');
            if (reward["type"] === "flexible_reward") {
                let flexibleRew = flexibleRewards.filter(elem => elem.id === reward["subType"])[0];
                td.innerHTML = `${flexibleRew["rewards"][parseInt(getPresetChapter())-1]["amount"]*reward["amount"]} ${goods_icons[flexibleRew["rewards"][parseInt(getPresetChapter())-1]["subType"]]}`;
            } else {
                if (goods_icons[reward["subType"]] === undefined) {
                    td.innerHTML = `${reward["amount"]} ${goods_icons[reward["subType"].toLowerCase()]}`;
                } else {
                    td.innerHTML = `${reward["amount"]} ${goods_icons[reward["subType"]]}`;
                }
            }
            tr2.appendChild(td);
        });
        tbody.appendChild(tr);
        tbody.appendChild(tr2);
        table.appendChild(tbody);
        divBBTable.appendChild(table);
        div.appendChild(divBBTable);
        parent.appendChild(div);
    }
}

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

    var cumulativeXp = 0;

    for (let level = 0; level < seasonPassData[getSelectedSeason()].length; level++) {
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
        let pLevel = document.createElement('p');
        pLevel.innerHTML = ""+(level+1);
        pLevel.style.margin = 0;
        pLevel.style.padding = 0;
        pLevel.style.transform = "rotate(-90deg)";
        pLevel.style.alignSelf = "center";
        let divLevel = document.createElement('div');
        divLevel.style.backgroundImage = "url('" + seasonInfoIcons[getSelectedSeason()]["img"] + "')";
        divLevel.style.width = "32px";
        divLevel.style.height = "32px";
        divLevel.style.display = "flex";
        divLevel.style.justifyContent = "center";
        divLevel.style.margin = "0 auto";
        divLevel.style.rotate = "90%";
        divLevel.style.transform = "rotate(90deg)";
        divLevel.style.color = "white";
        divLevel.style.fontWeight = "bold";
        divLevel.style.textShadow = "1px 1px 1px #000000";
        divLevel.style.zIndex = "2";
        divLevel.appendChild(pLevel);
        td.appendChild(divLevel);
        td.style.minHeight = "40px";
        tr.appendChild(td);
        let tdReq = document.createElement('td');
        if (seasonPassData[getSelectedSeason()][level].hasOwnProperty('requiredXp')) {
            cumulativeXp += seasonPassData[getSelectedSeason()][level]["requiredXp"];
        }
        tdReq.innerHTML = `${cumulativeXp}<img src="${seasonXp[getSelectedSeason()]['img']}">`;
        if (seasonPassData[getSelectedSeason()][level].hasOwnProperty('requiresPass')) {
            tdReq.innerHTML += `<br><img src="https://i.ibb.co/87MNrBB/season-pass.png">`;
        }
        tr.appendChild(tdReq);
        for (let rew = 1; rew <= 3; rew++) {
            let tdReward = document.createElement('td');
            tdReward.id = `reward_${level+1}_${rew}`
            if (rew <= seasonPassData[getSelectedSeason()][level]['rewards'].length) {
                if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'item') {
                    let subType = seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'];
                    tdReward.innerHTML = `<img src="${instants[subType.substring(0, subType.lastIndexOf("_")+1)]["image_big"]}">`;
                    if (goods_icons.hasOwnProperty(subType)) {
                        tdReward.innerHTML += `<br>${getTitleFromGoodImage(subType)}`;
                    } else if (goods_icons.hasOwnProperty(subType.toLowerCase())) {
                        tdReward.innerHTML += `<br>${getTitleFromGoodImage(subType.toLowerCase())}`;
                    }

                } else if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'flexible_reward') {
                    let rewardCodeName = flexibleRewards.filter(elem => elem.id === seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'])[0]['rewards'][getPresetChapter()-1]['subType'];
                    if (instants.hasOwnProperty(rewardCodeName)) {
                        tdReward.innerHTML = `<img src="${instants[rewardCodeName]["image_big"]}">`;
                    } else {
                        tdReward.innerHTML = `<img src="https://i.ibb.co/WndLSNt/goods-general-medium.png">`;
                    }
                    tdReward.innerHTML += `<br>${getTitleFromGoodImage(rewardCodeName)} <h7>${flexibleRewards.filter(elem => elem.id === seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'])[0]['rewards'][getPresetChapter()-1]['amount']*seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['amount']}x</h7>`;
                } else if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'building') {
                    let buildingId = seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'].substring(0, seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'].indexOf("$"));
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
                } else if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'good') {
                    let subType = seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'];
                    if (subType === 'knowledge_points') {
                        tdReward.innerHTML = `<img src="https://i.ibb.co/sKGvKDY/knowledge-points-big.png">`;
                    }
                    tdReward.innerHTML += `<br>${seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]["amount"]}x`;
                } else if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'reward_selection_kit') {
                    let subType = seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'];
                    tdReward.innerHTML = `<img src="https://i.ibb.co/kMLnsDm/rsk-evo.png">`;
                    tdReward.innerHTML += `<br>${rewardSelectionKits[subType]["name"]}`;
                    //tdReward.innerHTML += `<br><h7>${rewardSelectionKits[subType]["description"]}</h7>`;
                } else if (seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['type'] === 'resource') {
                    let subType = seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['subType'];
                    if (subType === 'premium') {
                        tdReward.innerHTML = `<img src="https://i.ibb.co/r2d4mnk/premium-big.png">`;
                        tdReward.innerHTML += `<br>${seasonPassData[getSelectedSeason()][level]['rewards'][rew-1]['amount']}x`;
                    }
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
        div.id = "form_level_"+(level+1);
        let input = document.createElement('input');
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = "level_"+(level+1)+"_input";
        if (Array(localStorage.getItem("season_"+getSelectedSeason()+"levels_finished")).join().split(',').includes(String((level+1)))) {
            input.checked = true;
        }
        input.onchange = function() {
            if (input.checked) {
                for (let i = 1; i <= level+1; i++) {
                    checkbox = document.getElementById("level_"+(i)+"_input");
                    checkbox.checked = true;
                }
            } else {
                for (let i = level+1; i <= seasonPassData[getSelectedSeason()].length; i++) {
                    checkbox = document.getElementById("level_"+(i)+"_input");
                    checkbox.checked = false;
                }
            }
            recordFinishedLevels(getSelectedSeason(), seasonPassData[getSelectedSeason()].length);
            getRequiredEffort(document.getElementById("effort_calc"));
            inputAdditionalPoints();    
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
    }

    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    parent.appendChild(div);

    inputAdditionalPoints();
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
    localStorage.setItem("season_"+seasonId+"levels_finished", finished);
}

function getFinishedLevels() {
    if (localStorage.getItem("season_"+getSelectedSeason()+"levels_finished") === null) {
        localStorage.setItem("season_"+getSelectedSeason()+"levels_finished", []);
    }
    return localStorage.getItem("season_"+getSelectedSeason()+"levels_finished");
}

function inputAdditionalPoints() {
    if (document.getElementById("pointsBetweenRewards_p_tag")) {
        document.getElementById("pointsBetweenRewards").value = 0;
        document.getElementById("pointsBetweenRewards").onchange();
        setAdditionalPoints(0);
        document.getElementById("pointsBetweenRewards_p_tag").remove()
    }
    for (let level = 0; level < seasonPassData[getSelectedSeason()].length-1; level++) {
        if (document.getElementById("level_"+(level+1)+"_input") !== undefined && document.getElementById("level_"+(level+1)+"_input") !== null) {
            let noFinishedLevels = getFinishedLevels() === null || getFinishedLevels() === undefined || getFinishedLevels() === "";
            if ((document.getElementById("level_"+(level+1)+"_input").checked && !document.getElementById("level_"+(level+2)+"_input").checked)
            || (noFinishedLevels)) {
                let div = null;
                if (noFinishedLevels) {
                    div = document.getElementById("form_level_1");
                } else {
                    div = document.getElementById("form_level_"+(level+2));
                }
                let inputNumberValue = document.createElement('input');
                inputNumberValue.type = "number";
                inputNumberValue.id = `pointsBetweenRewards`;
                inputNumberValue.name = `pointsAdditional`;
                inputNumberValue.min = 0;
                if (seasonPassData[getSelectedSeason()][level+1].hasOwnProperty("requiredXp")) {
                    if (!noFinishedLevels) {
                        inputNumberValue.max = seasonPassData[getSelectedSeason()][level+1]["requiredXp"];
                    } else {
                        inputNumberValue.max = seasonPassData[getSelectedSeason()][level]["requiredXp"] || 0;
                    }
                } else {
                    inputNumberValue.max = 0;
                }
                if (getAdditionalPoints()) {
                    inputNumberValue.value = getAdditionalPoints();
                } else {
                    inputNumberValue.value = 0;
                }
                inputNumberValue.onchange = function() {
                    setAdditionalPoints(inputNumberValue.value);
                    getRequiredEffort(document.getElementById("effort_calc"));
                }
                inputNumberValue.style.width = "38px";
                inputNumberValue.style.height = "21px";
                let labelNumberValue = document.createElement('label');
                labelNumberValue.htmlFor = `pointsBetweenRewards`;
                labelNumberValue.style.marginLeft = "3px";
                if (seasonPassData[getSelectedSeason()][level+1].hasOwnProperty("requiredXp")) {
                    if (!noFinishedLevels) {
                        labelNumberValue.innerHTML = ` /${seasonPassData[getSelectedSeason()][level+1]["requiredXp"]}`;
                    } else {
                        labelNumberValue.innerHTML = `/${seasonPassData[getSelectedSeason()][level]["requiredXp"] || 0}`;
                    }
                } else {
                    labelNumberValue.innerHTML = ` /0`;
                }
                let p = document.createElement("p");
                p.id = "pointsBetweenRewards_p_tag";
                p.style.marginLeft = "-25px";
                p.appendChild(inputNumberValue);
                p.appendChild(labelNumberValue);
                div.appendChild(p);
                break;
            }
        }
    }
}

function setAdditionalPoints(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"additional_points", value);
}

function getAdditionalPoints() {
    return localStorage.getItem("season_"+getSelectedSeason()+"additional_points");
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
    h7_1.innerHTML = `Calculate for server: `;
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
        getRequiredEffort(document.getElementById("effort_calc"));
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
        getRequiredEffort(document.getElementById("effort_calc"));
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
    input3.max = 99;
    if (getWeeklyQuestsLeft()) {
        input3.value = getWeeklyQuestsLeft();
    } else {
        input3.value = 0;
    }
    input3.onchange = function() {
        setWeeklyQuestsLeft(input3.value);
        getRequiredEffort(document.getElementById("effort_calc"));
    }
    input3.style.marginLeft = "3px";
    input3.style.marginRight = "3px";
    input3.style.width = "40px";
    input3.style.height = "21px";
    i.appendChild(input3);
    let label3 = document.createElement('label');
    label3.htmlFor = `queued_weekly_quests`;
    label3.innerHTML = `<h7> completed weekly quests. Completed current: </h7>`;
    i.appendChild(label3);

    let input4 = document.createElement('input');
    input4.type = "checkbox";
    input4.id = `completed_current_daily_quests`;
    input4.name = `completed_daily`;
    input4.className = "form-check-input";
    if (getAreCompletedDailyQuests()) {
        input4.checked = getAreCompletedDailyQuests();
    } else {
        input4.checked = false;
    }
    input4.onchange = function() {
        setAreCompletedDailyQuests(input4.checked);
        getRequiredEffort(document.getElementById("effort_calc"));
    }
    input4.style.marginLeft = "3px";
    input4.style.marginRight = "3px";
    i.appendChild(input4);
    let label4 = document.createElement('label');
    label4.htmlFor = `completed_current_daily_quests`;
    label4.innerHTML = `<h7> daily quests.</h7>`;
    label4.style.marginLeft = "20px";
    i.appendChild(label4);

    fieldset.appendChild(i);
    divRow2.appendChild(fieldset);
    divRemainings.appendChild(divRow2);

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "left";
    divRow3.id = "effort_calc";
    divRemainings.appendChild(divRow3);
    center.appendChild(divRemainings);

    parent.appendChild(center);

    getRequiredEffort(document.getElementById("effort_calc"));
}

function getAreCompletedDailyQuests() {
    const today = new Date();
    const result = JSON.parse(localStorage.getItem("season_"+getSelectedSeason()+"completed_current_daily_quests"));
    if (result === null) {return false;}
    if (
        today.getFullYear() === new Date(result["time"]).getFullYear() &&
        today.getMonth() === new Date(result["time"]).getMonth() &&
        today.getDate() === new Date(result["time"]).getDate()
    ) {
        return result["value"];
    }
    return false;
}

function setAreCompletedDailyQuests(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"completed_current_daily_quests", JSON.stringify({"value":value, "time":new Date()}));
}

function setServerCalculation(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"serverCalculation", value);
}

function getServerCalculation() {
    if (localStorage.getItem("season_"+getSelectedSeason()+"serverCalculation") === null) {
        setServerCalculation("live");
    }
    return localStorage.getItem("season_"+getSelectedSeason()+"serverCalculation");
}

function setWeeklyQuestsLeft(value) {
    localStorage.setItem("season_"+getSelectedSeason()+"weekly_quests_left", value);
}

function getWeeklyQuestsLeft() {
    if (localStorage.getItem("season_"+getSelectedSeason()+"weekly_quests_left") === null) {
        return null;
    }
    return localStorage.getItem("season_"+getSelectedSeason()+"weekly_quests_left");
}

function getRequiredEffort(parent) {
    var remainingDays = null;
    if (getServerCalculation() === null) {
        remainingDays = Math.ceil(((new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()]["live"]["end_date"])) - new Date()) / 60 / 60 / 1000 / 24));
    } else {
        remainingDays = Math.ceil(((new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()][getServerCalculation()]["end_date"])) - new Date()) / 60 / 60 / 1000 / 24));
    }
    var duration = null;
    if (getServerCalculation() === null) {
        duration = Math.ceil(((new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()]["live"]["end_date"])) - new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()]["live"]["start_date"]))) / 60 / 60 / 1000 / 24));
    } else {
        duration = Math.ceil(((new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()][getServerCalculation()]["end_date"])) - new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()][getServerCalculation()]["start_date"]))) / 60 / 60 / 1000 / 24));
    }
    if (isNaN(remainingDays)) {
        parent.innerHTML = `<center>No specified date of the event for this server yet. Please wait until the date appears in the <b>Info</b> tab.</center>`;
        return;
    }
    if (new Date(convertDisplayDateToJavascriptFormatDate(seasonStartDates[getSelectedSeason()][getServerCalculation()]["start_date"])) > new Date()) {
        parent.innerHTML = `<center>All the calculations will be available as soon as the event starts on your selected server. Please check the start date of the event in the <b>Info</b> tab.</center>`;
        return;
    }
    if (remainingDays < 0) {
        parent.innerHTML = `<center>The event is over on your selected server. No further calculation is available.</center>`;
        return;
    }
    var remainingXp = 0;
    var arr = null;
    if (localStorage.getItem("season_"+getSelectedSeason()+"levels_finished") !== null) {
        arr = localStorage.getItem("season_"+getSelectedSeason()+"levels_finished").split(",");
    } else {
        arr = [];
    }
    seasonPassData[getSelectedSeason()].forEach(function(elem, index) {
        if (!arr.includes(""+(index+1))) {
            remainingXp += elem["requiredXp"] ? elem["requiredXp"] : 0;
        }
    });
    if (getAdditionalPoints()) {
        remainingXp -= getAdditionalPoints();
    }

    var completedCurrentDailyQuests = getAreCompletedDailyQuests();
    var weeklyQuestsLeft = isNaN(parseInt(getWeeklyQuestsLeft())) ? 0 : parseInt(getWeeklyQuestsLeft());

    var requiredEffort = calculateQuests(remainingDays, duration, remainingXp, completedCurrentDailyQuests, weeklyQuestsLeft);

    let tempRequiredXp = 0;
    let lastAvailableReward = undefined;
    if (!requiredEffort[0]) {
        let completedLevels = null;
        if (getFinishedLevels()) {
            completedLevels = getFinishedLevels().split(",");
        } else {
            completedLevels = [0];
        }
        var availablePointsToEarn = requiredEffort[2];
        for (let level = Math.max(parseInt(completedLevels[completedLevels.length-1]), 0); level < seasonPassData[getSelectedSeason()].length; level++) {
            if (seasonPassData[getSelectedSeason()][level].hasOwnProperty("requiredXp")) {
                tempRequiredXp += seasonPassData[getSelectedSeason()][level]["requiredXp"];
            }
            if (tempRequiredXp - (parseInt(getAdditionalPoints()) ? parseInt(getAdditionalPoints()) : 0) > availablePointsToEarn) {
                lastAvailableReward = level;
                break;
            }
        }
    }

    var result = `<center>Remain <b>${remainingDays}</b> days until the end of the season. You need <b>${remainingXp}</b> additional 
    <img src="${seasonXp[getSelectedSeason()]["img"]}" style="width: 20px;"> to collect all rewards.<br>Can you still collect all the rewards?`;
    if (requiredEffort[0]) {
        result += `<br><img src="https://i.ibb.co/VxPSfh5/season-green-mark.png"><br>`;
        if (localStorage.getItem("season_"+getSelectedSeason()+"levels_finished") &&
        localStorage.getItem("season_"+getSelectedSeason()+"levels_finished").split(",").length === seasonPassData[getSelectedSeason()].length) {
            result += `Yes, you have already collected all rewards.`;
        } else {
        result += `Yes, you can collect all rewards if you won't miss more than <b>${requiredEffort[3]} daily quests</b> and complete all the remaining weekly quests (including
        those you have in your queue).`;
        }
    } else {
        result += `<br><img src="https://i.ibb.co/sy2SB8S/season-red-mark.png"><br>
        No, unfortunately you can't collect all rewards anymore, as you have missed too many daily quests already.
        If you complete all the remaining daily quests from now on and all the available weekly quests (including
        those you have in your queue), you can collect up to <b>${lastAvailableReward}th reward</b>.`
    }
    result += `</center>`;
    parent.innerHTML = result;
}

function calculateQuests(daysLeft, duration, pointsLeft, completedCurrentDaily, weeklyQuestsLeft) {
    const dailyQuests = ((daysLeft+1) * 4) - (completedCurrentDaily ? 4 : 0);  //+1 je tam ak budu denne ulohy aj posledny den (od 1 v noci do 11tej doobeda)
    const dailyPoints = dailyQuests * 5;
    const weeklyQuests = (Math.ceil(duration / 7) * 4) - weeklyQuestsLeft;
    const weeklyPoints = (weeklyQuests) * 70;
    const totalPoints = dailyPoints + weeklyPoints;
    if (totalPoints < pointsLeft) {
        return [false, null, totalPoints, null];
    }
    var tempPoints = totalPoints;
    var dailyQuestsToMiss = 0;
    while (tempPoints-5 >= pointsLeft) {
        tempPoints = tempPoints - 5;
        dailyQuestsToMiss++;
    }
    const percentage = ((totalPoints / pointsLeft) * 100).toFixed(2);
    return [true, percentage, totalPoints, dailyQuestsToMiss];
}

function displayBlessings() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    //createSeasonHeader();

    var h5 = document.createElement('h5');
    h5.id = 'seasonPass_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Blessings")} ::..<br>`;
    parent.appendChild(h5);

    var cent = document.createElement('center');
    var imgBlessing = document.createElement('img');
    imgBlessing.src = seasonBlessingIcons[getSelectedSeason()];
    cent.appendChild(imgBlessing);
    parent.appendChild(cent);

    let p = document.createElement('p');
    p.innerHTML = `<center>Blessings can be unlocked after reaching level 50 in the Season! You can collect additional Petals to earn Season Blessings.<br>
    Every time you receive new Blessing, 3 randomly selected chests become available (out of the chests below). You can pick any chest you wish. If you do not own Season Pass,
    two of the selected chests will be locked (you will always see a combination of 1 free (green) and 2 premium (purple) chests).</center>`;
    p.style.marginTop = "20px";
    p.style.marginBottom = "20px";
    parent.appendChild(p);

    seasonsChests[getSelectedSeason()]['blessings'].forEach(function(chest) {
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
        let tdChest = document.createElement('td');
        tdChest.rowSpan = "2";
        tdChest.style.width = "30%";
        let chestImg = document.createElement('img');
        if (!blessingFreeChests.hasOwnProperty(getSelectedSeason())) {
            chestImg.src = blessingChestsImages["premium"];
        } else if (blessingFreeChests[getSelectedSeason()].includes(chest['id'])) {
            chestImg.src = blessingChestsImages["free"];
        } else {
            chestImg.src = blessingChestsImages["premium"];
        }
        let center = document.createElement('center');
        center.appendChild(chestImg);
        tdChest.appendChild(center);
        tr.appendChild(tdChest);

        chest['rewards'].forEach(function(reward) {
            var th = document.createElement('th');
            th.style.width = ""+(70/chest['rewards'].length)+"%";
            th.innerHTML = reward['percentage']+"%";
            tr.appendChild(th);
        });

        var tr2 = document.createElement('tr');
        chest['rewards'].forEach(function(reward) {
            var td = document.createElement('td');
            if (reward["type"] === "flexible_reward") {
                let flexibleRew = flexibleRewards.filter(elem => elem.id === reward["subType"])[0];
                td.innerHTML = `${flexibleRew["rewards"][parseInt(getPresetChapter())-1]["amount"]*reward["amount"]} ${goods_icons[flexibleRew["rewards"][parseInt(getPresetChapter())-1]["subType"]].replace("<br>", "")}`;
            } else if (reward["type"] === "building") {
                var buildingID = reward["subType"].substring(0, reward["subType"].indexOf("$") !== -1 ? reward["subType"].indexOf("$") : reward["subType"].indexOf("$").length);
                var imgBuilding = document.createElement('img');
                imgBuilding.src = images_buildings[buildingID];
                imgBuilding.style.maxHeight = "48px";
                td.appendChild(imgBuilding);
                td.innerHTML += "<br>";
                $.get('database/buildings.json', function(data) {
                    td.innerHTML += `<a class="text-link font-weight-bold" href="buildings.html#${buildingID}" target="_blank">${data.filter(elem => elem.id === buildingID)[0]['name']}</a>`;
                });
            } else {
                if (goods_icons[reward["subType"]] === undefined) {
                    td.innerHTML = `${reward["amount"]} ${goods_icons[reward["subType"].toLowerCase()].replace("<br>", "")}`;
                } else {
                    td.innerHTML = `${reward["amount"]} ${goods_icons[reward["subType"]].replace("<br>", "")}`;
                }
            }
            tr2.appendChild(td);
        });

        tbody.appendChild(tr);
        tbody.appendChild(tr2);
        table.appendChild(tbody);
        divBBTable.appendChild(table);
        div.appendChild(divBBTable);
        parent.appendChild(div);
    });
}