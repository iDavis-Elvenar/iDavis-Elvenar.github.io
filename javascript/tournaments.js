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
    } else if (type === "units" && view !== "units") {
        displayUnits();
        view = "units";
    } else if (type !== "info" && type !== "units" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (let tournament in additionalTabsTournaments) {
            for (let tab = 0; tab < additionalTabsTournaments[tournament].length; tab++) {
                if (additionalTabsTournaments[tournament][tab]["id"] === type) {
                    $(function(){
                        $("#column_with_tables").load("tournamentsTabs/"+tournament+"/"+additionalTabsTournaments[tournament][tab]["file"]); 
                    });
                }
            }
        }
    }
}

function setLeftBar() {
    let leftBar = document.getElementById("left_bar");
    let selectedTournament = getSelectedTournament();
    leftBar.innerHTML = "";

    //Povodny staticky HTML content:
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="calendar_top_div"><span class="align-middle"><a class="text-link font-weight-bold" id="calendar_top" href="#calendar" onclick="switchView('calendar')"><img src="images/general/calendar.png" width="45" style="margin-left: -10px; margin-right: 2px; position: relative;"></a></span></div>
    // <div class="justify-content-center box d-flex flex-column" style="height: 50%;" id="quests_left_panel_div"><span class="align-middle"><a class="text-link font-weight-bold" id="quests_left_panel" href="#quests" onclick="switchView('quests')"><img src="images/general/event_guide.png" width="28" style="margin-left: 0px; margin-right: 10px; position: relative;"></a></span></div>

    let numberOfAdditionalItems = 0;
    if (additionalTabsTournaments.hasOwnProperty(selectedTournament)) {
        numberOfAdditionalItems = additionalTabsTournaments[selectedTournament].length;
    }

    let numberOfBaseItems = baseTabsTournaments.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsTournaments[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = baseTabsTournaments[b]["id"].substring(0, baseTabsTournaments[b]["id"].lastIndexOf("_"));
        a.href = baseTabsTournaments[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(baseTabsTournaments[b]["onclick"]);
        }
        a.innerHTML = langUI(baseTabsTournaments[b]["name"]);
        let img = document.createElement("img");
        img.src = baseTabsTournaments[b]["img"];
        img.style = "width: "+baseTabsTournaments[b]["img_width"]+"px; "+baseTabsTournaments[b]["img_style"];
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        newDiv.id = additionalTabsTournaments[selectedTournament][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsTournaments[selectedTournament][i]["href"];
        //newA.href += "-"+selectedFa;
        newA.onclick = function() {
            switchView(additionalTabsTournaments[selectedTournament][i]["id"]);
        }
        newA.innerHTML = additionalTabsTournaments[selectedTournament][i]["name"];
        let newImg = document.createElement("img");
        newImg.src= additionalTabsTournaments[selectedTournament][i]["img"];
        newImg.style = "width: "+additionalTabsTournaments[selectedTournament][i]["img_width"]+"px; "+additionalTabsTournaments[selectedTournament][i]["img_style"];
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}

function getSelectedTournament() {
    var selectTournament = document.getElementById("input_event");
    return selectTournament.options[selectTournament.selectedIndex].value;
}

function getSelectedTournamentName() {
    let tournamentSelect = document.getElementById('input_event');
    return tournamentSelect.options[tournamentSelect.selectedIndex].text;
}

function generateFas(idToAppend) {
    let flag = false;
    for (let e = 0; e < allTournaments.length; e++) {
        let option = document.createElement('option');
        option.innerHTML = langUI(allTournaments[e][0]);
        option.value = allTournaments[e][1];
        if (flag) {
            option.selected = true;
            flag = false;
        } else {
            if (allTournaments[e][1].includes(getCurrentTournament())) {
                if (getHoursBetween(new Date(), new Date(getStartDateOfTournament(allTournaments[(e+1)%9][1]))) < 36) {
                    flag = true;
                    option.selected = false;
                    
                } else {
                    option.selected = true;
                }
            } else {
                option.selected = false;
            }    
        }
        document.getElementById(idToAppend).appendChild(option);
    }
}

function getHoursBetween(first, second) {
    var diff =(second.getTime() - first.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}

function createFaHeader() {
    let selectedTournament = getSelectedTournament();
    let selectedTournamentName = getSelectedTournamentName();
    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI(selectedTournamentName)} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var tournamentImg = document.createElement("img");
    tournamentImg.id = `event_banner`;
    tournamentImg.src = tournamentsBanners[0]['all'];
    tournamentImg.alt = tournamentsBanners[0]['all'];
    tournamentImg.className = `center `;
    tournamentImg.style.marginBottom = `15px`;
    tournamentImg.style.width = `50%`;
    document.getElementById('column_with_tables').appendChild(tournamentImg);
}

function getInitialTournamentDate() {
    return convertDisplayDateToJavascriptFormatDate(initTournamentDate["live"]["start_date"]);
}

function getStartDateOfTournament(tournamentId) {
    let currentTournamentDate = new Date(getInitialTournamentDate());
    currentTournamentDate.setDate(currentTournamentDate.getDate() + (getDaysFrom(getInitialTournamentDate())+1 - (getDaysFrom(getInitialTournamentDate()) % 7)));
    let result;
    if (tournamentId.includes(getCurrentTournament())) {
        result = currentTournamentDate;
    } else {
        let tournamentsFromCurrent = tournamentsOrderFromInit.slice(tournamentsOrderFromInit.indexOf(getCurrentTournament()))
                                        .concat(tournamentsOrderFromInit.slice(0, tournamentsOrderFromInit.indexOf(getCurrentTournament())));
        let weeksFromCurrent = tournamentsFromCurrent.indexOf(tournamentId.split("_")[1]);
        let tournamentDate = currentTournamentDate;
        tournamentDate.setDate(tournamentDate.getDate() + weeksFromCurrent * 7);
        result = tournamentDate;
    }
    var dd = String(result.getUTCDate()).padStart(2, '0');
    var mm = String(result.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = result.getUTCFullYear();
    return mm+"/"+dd+"/"+yyyy;
}

function getCurrentTournament() {
    let initialTournamentDate = getInitialTournamentDate();
    let weeksFromInit = getWeeksFrom(initialTournamentDate);
    return tournamentsOrderFromInit[weeksFromInit];
}

function getDaysFrom(from, to="") {
    if (to === "") {
        return Math.floor((new Date()-new Date(from))/(1000*60*60*24));
    } else {
        return Math.floor((new Date(to)-new Date(from))/(1000*60*60*24));
    }
}

function getWeeksFrom(from, to="") {
    let initFullDate = new Date(from);
    let currentFullDate;
    if (to === "") {
        currentFullDate = new Date();
    } else {
        currentFullDate = new Date(to);
    }
    var diff =(currentFullDate.getTime() - initFullDate.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.floor(diff));
}

function displayBase() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";
    createFaHeader();
    let center = document.createElement('center');
    center.style.marginBottom = "30px";

    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: Dates ::..<br>`;
    center.appendChild(h5);

    createDatesTable(center,    convertJavascriptFormatDateToDisplayDate(getStartDateOfTournament(getSelectedTournament())),
                                convertJavascriptFormatDateToDisplayDate(findEndDate(getStartDateOfTournament(getSelectedTournament()))),
                                convertJavascriptFormatDateToDisplayDate(getStartDateOfTournament(getSelectedTournament())),
                                convertJavascriptFormatDateToDisplayDate(findEndDate(getStartDateOfTournament(getSelectedTournament()))));
    
    parent.appendChild(center);
}

function findEndDate(date) {
    let endDate = new Date(date);
    endDate.setDate(endDate.getDate() + tournamentDurationDays);
    var dd = String(endDate.getUTCDate() + 1).padStart(2, '0');
    var mm = String(endDate.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = endDate.getUTCFullYear();
    endDate = mm + '/' + dd + '/' + yyyy;
    return endDate;
}

function displayUnits() {
    let parent = document.getElementById("column_with_tables");
    parent.innerHTML = "";
}