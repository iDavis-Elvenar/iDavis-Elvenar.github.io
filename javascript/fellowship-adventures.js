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
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+2))+"%";
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