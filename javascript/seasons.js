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

function displayPass() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = ""
    createSeasonHeader();
    parent.innerHTML += "This page is under the construction. I will add more content soon. :)";
}