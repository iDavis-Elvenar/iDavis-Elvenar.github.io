var view = "";

function loadPage() {
    if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
        foundView = location.href.split('#')[1];
        switchView(foundView);
    } else {
        switchView("base");
    }
    setLeftBar();
}

function switchView(type) {
    if (type === "base" && view !== "base") {
        displayBase();
        view = "base";
    } else if (type === "ph" && view !== "ph") {
        displayPH();
        view = "ph";
    } else if (type !== "base" && type !== "ph" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        for (var fa in additionalTabsFa) {
            for (let tab = 0; tab < additionalTabsFa[fa].length; tab++) {
                if (additionalTabsFa[gr][tab]["id"] === type) {
                    $(function(){
                        $("#column_with_tables").load("guestRacesTabs/"+fa+"/"+additionalTabsFa[fa][tab]["file"]); 
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
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+2))+"%";
        newDiv.id = additionalTabsFa[selectedFa][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsFa[selectedFa][i]["href"];
        newA.href += "-"+selectedFa;
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
    document.getElementById("column_with_tables").innerHTML = "";
    createFaHeader();
}

function displayPH() {
    document.getElementById("column_with_tables").innerHTML = "";
    createFaHeader();
}