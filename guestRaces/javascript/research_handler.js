function displayResearch() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading... <b>use CTRL + F5 hotkey if you are stuck</b>", 10000, 'primary');
    }
    createExc();

    let guestRace = getSelectedGuestRace();
    document.getElementById("column_with_tables").innerHTML = "";
    var parent = document.getElementById("column_with_tables");
    createGuestRaceHeader(guestRace);

    var h5 = document.createElement('h5');
    h5.id = 'quests_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("Research")} ::..<br>`;
    parent.appendChild(h5);

    let cent = document.createElement('center');
    createTotalCostsDiv(cent);
    parent.appendChild(cent);

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

    if (grResearch[guestRace] === undefined) {
        var h7 = document.createElement('h7');
        h7.id = 'quests_noQuests';
        h7.className = "card-title text-center";
        h7.style.textAlign = "left";
        h7.innerHTML = `${langUI("No recorded research is available for this guest race")}.`;
        var center = document.createElement('center');
        center.appendChild(h7);
        parent.appendChild(center);

    } else {

        var noteInfo = document.createElement('h7');
        noteInfo.id = 'quests_noteInfo';
        noteInfo.className = "card-title text-center";
        noteInfo.style.textAlign = "left";
        let infoText = `
        Note: Each technology you mark as "Finished" will automatically finish all of its prerequisite technologies. You do not need 
        to click all of them manually.
        `;
        noteInfo.innerHTML = `${langUI(infoText)}`;
        var center = document.createElement('center');
        center.appendChild(noteInfo);
        document.getElementById('column_with_tables').appendChild(center);

        var numberOfTechnologies = grResearch[guestRace].length;

        const maxCostsLength = grResearch[guestRace].reduce((max, dict) => {
            const costsLength = dict.requirements.length;
            return costsLength > max ? costsLength : max;
          }, 0);

        for (let tech = 0; tech <= numberOfTechnologies; tech++) {
            if (tech === 0) {
                let tr = document.createElement('tr');
                let number = document.createElement('th');
                number.innerHTML = `${langUI("Number")}`;
                number.style.width = "5%";
                tr.appendChild(number);
                let name = document.createElement('th');
                name.innerHTML = `${langUI("Name")}`;
                name.style.width = "25%";
                tr.appendChild(name);
                let kp = document.createElement('th');
                kp.innerHTML = `${langUI("KP")}`;
                kp.style.width = "10%";
                tr.appendChild(kp);
                let costs = document.createElement('th');
                costs.innerHTML = `${langUI("Costs")}`;
                costs.style.width = "48%";
                costs.colSpan = maxCostsLength;
                tr.appendChild(costs);
                let mandatory = document.createElement('th');
                mandatory.innerHTML = `<h7>${langUI("Mandatory")}</h7>`;
                mandatory.style.width = "7%";
                tr.appendChild(mandatory);
                let finished = document.createElement('th');
                finished.innerHTML = `${langUI("Finished")}`;
                finished.style.width = "5%";
                tr.appendChild(finished);
                tbody.appendChild(tr);
            } else {
                //insertQuestsAd(quest, tbody);
                let tr = document.createElement('tr');
                let number = document.createElement('td');
                number.id = "research_number_"+(tech);
                number.innerHTML = tech;
                tr.appendChild(number);
                let name = document.createElement('td');
                name.id = "research_name_"+(tech);
                name.innerHTML = `${grResearch[guestRace][tech-1]["name"]}`;
                //name.style.fontWeight = "bold";
                name.className = "";
                tr.appendChild(name);
                let kp = document.createElement('td');
                kp.id = "research_kp_"+(tech);
                kp.innerHTML = `${grResearch[guestRace][tech-1]["kp"]} ${goods_icons["knowledge_points"]}`;
                tr.appendChild(kp);
                var costsFields = [];
                for (let cost = 0; cost < maxCostsLength; cost++) {
                    let costs = document.createElement('td');
                    costs.id = "research_costs_"+(tech)+`${cost}`;
                    if (cost < grResearch[guestRace][tech-1]['requirements'].length) {
                        costs.innerHTML = `${grResearch[guestRace][tech-1]['requirements'][cost][Object.keys(grResearch[guestRace][tech-1]['requirements'][cost])]}x 
                        ${goods_icons[Object.keys(grResearch[guestRace][tech-1]['requirements'][cost])] !== undefined ? 
                        goods_icons[Object.keys(grResearch[guestRace][tech-1]['requirements'][cost])] : 
                        Object.keys(grResearch[guestRace][tech-1]['requirements'][cost])}`;
                    } else {
                        costs.innerHTML = "-";
                    }
                    costsFields.push(costs);
                    tr.appendChild(costs);
                }
                let mandatory = document.createElement('td');
                mandatory.id = "research_mandatory_"+(tech);
                mandatory.innerHTML = `${grResearch[guestRace][tech-1]["childrenIds"].length > 0 ? "Yes" : "No"}`;
                tr.appendChild(mandatory);
                let finished = document.createElement('td');
                let div = document.createElement('div');
                div.className = "form-check";
                div.style.padding = 0;
                div.style.margin = 0;
                let input = document.createElement('input');
                input.className = "form-check-input";
                input.type = "checkbox";
                input.id = "research_finished_"+(tech);
                input.style.float = "none";
                input.style.position = "static";
                input.style.marginLeft = 0;
                if (Array(localStorage.getItem("research_finished_"+guestRace)).join().split(',').includes(String(tech))) {
                    input.checked = true;
                    number.className = "text-quest_completed";
                    name.className = "text-quest_completed";
                    kp.className = "text-quest_completed";
                    mandatory.className = "text-quest_completed";
                    for (const item of costsFields) {
                        item.className = "text-quest_completed";
                    }
                }
                input.onchange = function() {
                    finishTechnology(tech, input.checked, numberOfTechnologies, maxCostsLength, true);
                };
                let label = document.createElement('label');
                label.className = "form-check-label";
                label.htmlFor = tech;
                label.innerHTML = "";
                div.appendChild(input);
                div.appendChild(label);
                finished.appendChild(div);
                tr.appendChild(finished);
                tbody.appendChild(tr);
            }
        }
    }
    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    document.getElementById('column_with_tables').appendChild(div);

    calculateTotalCosts();
}

function recordFinishedTechnologies(numberOfTechnologies) {
    var guestRace = getSelectedGuestRace();
    var result = [];
    for (let i = 1; i <= numberOfTechnologies; i++) {
        var tech = document.getElementById("research_finished_"+(i));
        if (tech.checked) {
            result.push(i);
        }
    }
    localStorage.setItem("research_finished_"+guestRace, result);
}

function createTotalCostsDiv(parent) {
    var guestRace = getSelectedGuestRace();
    let divTotalCosts = document.createElement('div');
    divTotalCosts.className = "card-spoiler border-spoiler mb-3";
    divTotalCosts.style.marginTop = "10px";
    divTotalCosts.style.paddingBottom = "10px";
    divTotalCosts.style.paddingTop = "7px";
    divTotalCosts.style.paddingLeft = "20px";
    divTotalCosts.style.paddingRight = "20px";
    divTotalCosts.style.width = "70%";

    let divRow1 = document.createElement('div');
    divRow1.className = "row";
    divRow1.innerHTML = `<b>Total remaining costs:</b>`;
    divRow1.style.textAlign = "center";
    divTotalCosts.appendChild(divRow1);

    let divRow2 = document.createElement('div');
    divRow2.className = "row";
    let fieldset = document.createElement('fieldset');
    let i = document.createElement('i');
    let h7_1 = document.createElement('h7');
    h7_1.innerHTML = `Include non-mandatory technologies: `;
    i.appendChild(h7_1);

    let input1 = document.createElement('input');
    input1.type = "checkbox";
    input1.id = `research_mandatoryInclude_${guestRace}`;
    input1.name = `mandatoryInclude_${guestRace}`;
    input1.value = `true`;
    if (getMandatoryInclude(guestRace)) {
        input1.checked = getMandatoryInclude(guestRace) == input1.value;
    } else {
        input1.checked = false;
    }
    input1.onchange = function() {
        calculateTotalCosts();
        setMandatoryInclude(input1.checked, guestRace);
    }
    input1.style.marginLeft = "3px";
    i.appendChild(input1);
    let label1 = document.createElement('label');
    label1.htmlFor = `research_mandatoryInclude_${guestRace}`;
    label1.innerHTML = `<h7></h7>`;
    i.appendChild(label1);

    fieldset.appendChild(i);
    divRow2.appendChild(fieldset);
    divTotalCosts.appendChild(divRow2);

    let hr1 = document.createElement('hr');
    //hr1.style.height = "0.5px";
    hr1.style.marginTop = "3px";
    hr1.style.marginBottom = "-2px";
    divTotalCosts.appendChild(hr1);

    let divHeadline1 = document.createElement('div');
    divHeadline1.className = "row";
    divHeadline1.innerHTML = `<h7><b>Goods:</b></h7>`;
    divHeadline1.style.textAlign = "left";
    divHeadline1.style.marginLeft = "-10px";
    divHeadline1.style.marginTop = "0px";
    divHeadline1.style.marginBottom = "-5px";
    divTotalCosts.appendChild(divHeadline1);

    let divRow3 = document.createElement('div');
    divRow3.className = "";
    divRow3.innerHTML = ``;
    divRow3.style.textAlign = "left";
    divRow3.id = "totalCosts_goods_"+guestRace;
    divTotalCosts.appendChild(divRow3);

    let hr2 = document.createElement('hr');
    //hr2.style.height = "0.5px";
    hr2.style.marginTop = "3px";
    hr2.style.marginBottom = "-2px";
    divTotalCosts.appendChild(hr2);

    let divHeadline2 = document.createElement('div');
    divHeadline2.className = "row";
    divHeadline2.innerHTML = `<h7><b>Discovered resources:</b></h7>`;
    divHeadline2.style.textAlign = "left";
    divHeadline2.style.marginLeft = "-10px";
    divHeadline2.style.marginTop = "0px";
    divHeadline2.style.marginBottom = "-5px";
    divTotalCosts.appendChild(divHeadline2);

    let divRow4 = document.createElement('div');
    divRow4.className = "";
    divRow4.innerHTML = ``;
    divRow4.style.textAlign = "left";
    divRow4.id = "totalCosts_discovered_"+guestRace;
    divTotalCosts.appendChild(divRow4);

    let hr3 = document.createElement('hr');
    //hr3.style.height = "0.5px";
    hr3.style.marginTop = "3px";
    hr3.style.marginBottom = "-2px";
    divTotalCosts.appendChild(hr3);

    let divHeadline3 = document.createElement('div');
    divHeadline3.className = "row";
    divHeadline3.innerHTML = `<h7><b>Settlement resources:</b></h7>`;
    divHeadline3.style.textAlign = "left";
    divHeadline3.style.marginLeft = "-10px";
    divHeadline3.style.marginTop = "0px";
    divHeadline3.style.marginBottom = "-5px";
    divTotalCosts.appendChild(divHeadline3);

    let divRow5 = document.createElement('div');
    divRow5.className = "";
    divRow5.innerHTML = ``;
    divRow5.style.textAlign = "left";
    divRow5.id = "totalCosts_settlement_"+guestRace;
    divTotalCosts.appendChild(divRow5);

    parent.appendChild(divTotalCosts);
}

function setMandatoryInclude(value) {
    localStorage.setItem("research_mandatoryInclude_"+getSelectedGuestRace(), value);
}

function getMandatoryInclude() {
    if (localStorage.getItem("research_mandatoryInclude_"+getSelectedGuestRace()) === null) {
        setMandatoryInclude(false);
    }
    return localStorage.getItem("research_mandatoryInclude_"+getSelectedGuestRace());
}

function calculateTotalCosts() {
    var guestRace = getSelectedGuestRace();
    var includeNonMandatory = document.getElementById(`research_mandatoryInclude_${guestRace}`).checked;
    var totalCosts = [];
    for (let i = 0; i < grResearch[guestRace].length; i++) {
        var finished = document.getElementById('research_finished_'+(i+1)).checked;
        if ((includeNonMandatory || grResearch[guestRace][i]['childrenIds'].length > 0) && !finished) {
            for (let j = 0; j < grResearch[guestRace][i]['requirements'].length; j++) {
                totalCosts.push(grResearch[guestRace][i]['requirements'][j]);
            }
        }
    }
    const totalCostsSet = totalCosts.reduce((acc, obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        acc[key] = (acc[key] || 0) + value;
        return acc;
      }, {});

    var sortedKeys = Object.keys(totalCostsSet).sort((a, b) => prioritiesProduction.indexOf(a) - prioritiesProduction.indexOf(b));

    var result = {};

    sortedKeys.forEach((key) => {
        result[key] = totalCostsSet[key];
    })

    updateTotalCosts(result);
}

function updateTotalCosts(value) {
    var guestRace = getSelectedGuestRace();
    let parent_goods = document.getElementById("totalCosts_goods_"+guestRace);
    let parent_discovered = document.getElementById("totalCosts_discovered_"+guestRace);
    let parent_settlement = document.getElementById("totalCosts_settlement_"+guestRace);
    parent_goods.innerHTML = ``;
    parent_discovered.innerHTML = ``;
    parent_settlement.innerHTML = ``;
    for (const key in value) {
        if (goods_icons[key] !== undefined) {
            if (realizeParent(key) === "goods") {
                if (parent_goods.innerHTML !== ``) {
                    parent_goods.innerHTML += `, `;
                }
                parent_goods.innerHTML += `<h7 style="white-space: nowrap;">${value[key]}x&nbsp;${goods_icons[key].replace("'><br>", "' style='width: 20px;'><br>").replace("<br>", "")}</h7>`;
            } else if (realizeParent(key) === "discovered") {
                if (parent_discovered.innerHTML !== ``) {
                    parent_discovered.innerHTML += `, `;
                }
                parent_discovered.innerHTML += `<h7 style="white-space: nowrap;">${value[key]}x&nbsp;${goods_icons[key].replace("'><br>", "' style='width: 20px;'><br>").replace("<br>", "")}</h7>`;
            } else if (realizeParent(key) === "settlement") {
                if (parent_settlement.innerHTML !== ``) {
                    parent_settlement.innerHTML += `, `;
                }
                parent_settlement.innerHTML += `<h7 style="white-space: nowrap;">${value[key]}x&nbsp;${goods_icons[key].replace("'><br>", "' style='width: 20px;'><br>").replace("<br>", "")}</h7>`;
            }
        } else {
            if (realizeParent(key) === "goods") {
                parent_goods.innerHTML += `${value[key]}x ${key}, `;
            } else if (realizeParent(key) === "discovered") {
                parent_discovered.innerHTML += `${value[key]}x ${key}, `;
            } else if (realizeParent(key) === "settlement") {
                parent_settlement.innerHTML += `${value[key]}x ${key}, `;
            }
        }
    }
    parent_goods.innerHTML = parent_goods.innerHTML || `<h7>-</h7>`;
    parent_discovered.innerHTML = parent_discovered.innerHTML || `<h7>-</h7>`;
    parent_settlement.innerHTML = parent_settlement.innerHTML || `<h7>-</h7>`;
}

function finishTechnology(tech, value, numberOfTechnologies, maxCostsLength, recalculate) {

    var checkbox = document.getElementById("research_finished_"+(tech));
    var numbertext = document.getElementById("research_number_"+(tech));
    var nametext = document.getElementById("research_name_"+(tech));
    var kptext = document.getElementById("research_kp_"+(tech));
    var mandatorytext = document.getElementById("research_mandatory_"+(tech));
    var coststexts = [];
    for (let c = 0; c < maxCostsLength; c++) {
        coststexts.push(document.getElementById("research_costs_"+(tech)+`${c}`));
    }

    if (value) {
        checkbox.checked = true;
        numbertext.className = "text-quest_completed";
        nametext.className = "text-quest_completed";
        kptext.className = "text-quest_completed";
        mandatorytext.className = "text-quest_completed";
        for (const item of coststexts) {
            item.className = "text-quest_completed";
        }
    } else {
        checkbox.checked = false;
        numbertext.className = "";
        nametext.className = "";
        kptext.className = "";
        mandatorytext.className = "";
        for (const item of coststexts) {
            item.className = "";
        }
    }

    var following = value ? 'parentIds' : 'childrenIds';

    for (const technologyId of grResearch[getSelectedGuestRace()][tech-1][following]) {
        var idx = grResearch[getSelectedGuestRace()].findIndex((obj) => obj.id === technologyId);
        if (idx >= 0) {
            finishTechnology(idx+1, value, numberOfTechnologies, maxCostsLength, false);
        }
    }
    
    if (recalculate) {
        recordFinishedTechnologies(numberOfTechnologies);
        calculateTotalCosts();
    }
}

function realizeParent(key) {
    var settlement_regex1 = /^ch\d.+$/;
    var settlement_regex2 = /^gr\d.+$/;
    if (settlement_regex1.test(key) || settlement_regex2.test(key) || (key.startsWith("orcs") && key !== "orcs") || key.startsWith("fairies") ||
        key.startsWith("dwarfs")) {
        return "settlement";
    }

    var discovered_resources = ["orcs", "mana", "seeds", "unurium", "work"];
    if (discovered_resources.includes(key)) {
        return "discovered";
    }

    return "goods";
}