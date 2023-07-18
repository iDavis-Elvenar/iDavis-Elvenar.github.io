var view = "";

function loadPage() {
    var foundView = "";
    if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
        foundView = location.href.split('#')[1];
    } else {
        foundView = "intro";
    }
    switchView(foundView);
    setDocumentTitle(document, foundView, baseTabsGuestRaces, additionalTabsGuestRaces, getSelectedGuestRace());
    setLeftBar();
}

function switchView(type) {
    prepSetAlertElements();
    create_exception("Loading...", 10000, 'primary');
    if (type === "quests" && view !== "quests") {
        displayQuests();
        view = "quests";
    } else if (type === "research" && view !== "research") {
        displayResearch();
        view = "research";
    } else if (type !== "quests" && view !== type) {
        document.getElementById("column_with_tables").innerHTML = "";
        view = type;
        if (type == "intro") {
            $(function(){
                $("#column_with_tables").load("guestRacesTabs/"+getSelectedGuestRace()+"/"+baseTabsGuestRaces.find(function(element) {return element.onclick === type;}).file);
            });
        }
        for (let gr in additionalTabsGuestRaces) {
            for (let tab = 0; tab < additionalTabsGuestRaces[gr].length; tab++) {
                if (additionalTabsGuestRaces[gr][tab]["id"] === type) {
                    $(function(){
                        $("#column_with_tables").load("guestRacesTabs/"+gr+"/"+additionalTabsGuestRaces[gr][tab]["file"]); 
                    });
                }
            }
        }
    }
    setDocumentTitle(document, type, baseTabsGuestRaces, additionalTabsGuestRaces, getSelectedGuestRace());
    create_exception("Content Generated!", 3, 'success');
}

function setLeftBar() {
    let leftBar = document.getElementById("left_bar");
    let guestRace = getSelectedGuestRace();
    leftBar.innerHTML = "";

    let numberOfAdditionalItems = 0;
    if (additionalTabsGuestRaces.hasOwnProperty(guestRace)) {
        numberOfAdditionalItems = additionalTabsGuestRaces[guestRace].length;
    }

    let numberOfBaseItems = baseTabsGuestRaces.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsGuestRaces[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = baseTabsGuestRaces[b]["id"].substring(0, baseTabsGuestRaces[b]["id"].lastIndexOf("_"));
        a.href = baseTabsGuestRaces[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(baseTabsGuestRaces[b]["onclick"]);
        }
        a.innerHTML = langUI(baseTabsGuestRaces[b]["name"]);
        let img = document.createElement("img");
        if (baseTabsGuestRaces[b]["img"] === "various") {
            img.src = "../images/general/chapter_icons/"+getSelectedGuestRace()+".png";
            img.style = "width: "+baseTabsGuestRaces[b]["img_width"]+"px; "+baseTabsGuestRaces[b]["img_style"];
        } else {
            img.src = baseTabsGuestRaces[b]["img"];
            img.style = "width: "+baseTabsGuestRaces[b]["img_width"]+"px; "+baseTabsGuestRaces[b]["img_style"];
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
        newDiv.id = additionalTabsGuestRaces[guestRace][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsGuestRaces[guestRace][i]["href"];
        newA.onclick = function() {
            switchView(additionalTabsGuestRaces[guestRace][i]["id"]);
        }
        newA.innerHTML = additionalTabsGuestRaces[guestRace][i]["name"];
        let newImg = document.createElement("img");
        if (additionalTabsGuestRaces[guestRace][i]["img"] === "various_settlement") {
            newImg.src = settlementIcons[guestRace];
            newImg.style = "width: "+additionalTabsGuestRaces[guestRace][i]["img_width"]+"px; "+additionalTabsGuestRaces[guestRace][i]["img_style"];
        } else {
            newImg.src= additionalTabsGuestRaces[guestRace][i]["img"];
            newImg.style = "width: "+additionalTabsGuestRaces[guestRace][i]["img_width"]+"px; "+additionalTabsGuestRaces[guestRace][i]["img_style"];
        }
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}

function getGrIdFromName(name) {
    return grIds[name];
}

function getGrNameFromId(id) {
    return chapterNames[id.substring(2)];
}

function getSelectedGuestRace() {
    return getGrIdFromName(location.href.split('#')[0].substring(location.href.split('#')[0].lastIndexOf("/")+1, location.href.split('#')[0].indexOf(".html")));
}

function createGuestRaceHeader(guestRace) {
    var h5 = document.createElement('h5');
    h5.id = 'header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${getGrNameFromId(guestRace)} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var grImg = document.createElement("img");
    grImg.id = `gr_banner`;
    grImg.src = `${grBanners[guestRace]}`;
    grImg.className = `center `;
    grImg.style.marginBottom = `15px`;
    grImg.style.width = `50%`;
    document.getElementById('column_with_tables').appendChild(grImg);
}