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
        img.src = baseTabsSeasons[b]["img"];
        img.style = "width: "+baseTabsSeasons[b]["img_width"]+"px; "+baseTabsSeasons[b]["img_style"];
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

function getSelectedFaName() {
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

function displayBase() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = 'info';
}

function displayQuests() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = 'quests';
}