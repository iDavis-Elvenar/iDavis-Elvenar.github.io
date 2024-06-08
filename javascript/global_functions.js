if (localStorage.getItem("lang") === null) {
    setLanguage("en");
}
if (localStorage.getItem("chapter") === null) {
    setChapter(numberOfChapters);
}

//let role_down = false;
function rollDownNavigation(){
    if (role_down === false){
        document.getElementById('role_down').style.display = 'none';
        role_down = true;
    }else{
        document.getElementById('role_down').style.display = 'revert';
        role_down = false;
    }
}

//let linked_id = 0;
function create_html_linked_text(text,cell){
    let link = document.createElement('a');
    let linked_text = document.createElement('span');
    link.href = '#';
    link.innerText  = " ..."
    link.onclick = function (){
        show_full_text(link,linked_text);
        return false;
    };
    linked_text.style.position = 'absolute';
    linked_text.style.top = '-9999px';
    linked_text.style.left = '-9999px';
    linked_text.innerText  = text.slice(40);

    cell.innerHTML = text.slice(0,40);
    cell.appendChild(link);
    cell.appendChild(linked_text);
    linked_id ++;
}
function show_full_text(link_id,linked_text_id){
    link_id.style.display = 'none';
    linked_text_id.style.position = 'inherit';
}

function clearColumnWithTables() {
    document.getElementById('column_with_tables').innerHTML = ``;
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function setFooter() {
    let h7 = document.createElement('h7');
    h7.id = "copyright";
    h7.className = "text-gray";
    let center = document.createElement('center');
    center.innerHTML = 'Copyright &#169; 2024 iDavis';
    h7.appendChild(center);
    document.getElementById('footer').appendChild(h7);
}

function orderSetBuildingData(filteredData) {
    let result = [];
    if (filteredData['setBuilding'].hasOwnProperty('bonuses')) {
        for (let b = 0; b < filteredData['setBuilding']['bonuses'].length; b++) {
            let bonus = [];
            for (let chap = 1; chap <= numberOfChapters; chap++) {
                if (filteredData['setBuilding']['bonuses'][b].hasOwnProperty('factor')) {
                    for (let prod in filteredData['chapters'][chap]) {
                        if (prioritiesProduction.includes(prod)) {
                            if (filteredData['setBuilding']['bonuses'][b]['type'] === 'self') {
                                bonus.push([prod, filteredData['chapters'][chap][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']]);
                            } else {
                                bonus.push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['chapters'][chap][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']])
                            }
                            break; //teraz berie len jednu z produkcii (zatial som nevidel setovu budovu ktora by to mala inak)
                        } else {
                            let numOfMatchesWithProductions = getNumOfMatchesWithProductions(filteredData['chapters'][chap]);
                            //console.log(filteredData['id'] + "=>" + " " + filteredData['setBuilding']['bonuses'].length + " " + numOfMatchesWithProductions)
                            if (numOfMatchesWithProductions === 0) {
                                if (filteredData['setBuilding']['bonuses'][b]['type'] === 'self') {
                                    bonus.push([prod, filteredData['chapters'][chap][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']]);
                                } else {
                                    bonus.push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['chapters'][chap][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']])
                                }
                            }
                            //break;   v tejto else vetve to bude chciet nejak poriesit s tym june_xxi setom
                        }
                    }
                } else {
                    bonus.push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['setBuilding']['bonuses'][b]['value']])
                }
            }
            result.push(bonus);
        }
    }
    return result;
}

function orderSetEvoBuildingData(filteredData, displayStage) {
    let result = [];
    if (filteredData['setBuilding'].hasOwnProperty('bonuses')) {
        for (let b = 0; b < filteredData['setBuilding']['bonuses'].length; b++) {
            let bonus = {};
            for (let chap = 1; chap <= numberOfChapters; chap++) {
                bonus[chap] = []
                if (filteredData['setBuilding']['bonuses'][b].hasOwnProperty('factor')) {
                    for (let prod in filteredData['chapters'][chap][displayStage]) {
                        if (prioritiesProduction.includes(prod)) {
                            if (filteredData['setBuilding']['bonuses'][b]['type'] === 'self') {
                                bonus[chap].push([prod, Math.ceil(filteredData['chapters'][chap][displayStage][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor'])]);
                            } else {
                                bonus[chap].push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['chapters'][chap][displayStage][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']])
                            }
                             //teraz berie len jednu z produkcii (zatial som nevidel setovu budovu ktora by to mala inak)
                        } else {
                            let numOfMatchesWithProductions = getNumOfMatchesWithProductions(filteredData['chapters'][chap][displayStage]);
                            //console.log(filteredData['id'] + "=>" + " " + filteredData['setBuilding']['bonuses'].length + " " + numOfMatchesWithProductions)
                            if (numOfMatchesWithProductions === 0) {
                                if (filteredData['setBuilding']['bonuses'][b]['type'] === 'self') {
                                    bonus[chap].push([prod, filteredData['chapters'][chap][displayStage][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']]);
                                } else {
                                    bonus[chap].push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['chapters'][chap][displayStage][prod]['value'] * filteredData['setBuilding']['bonuses'][b]['factor']]);
                                }
                            }
                            //break;   //v tejto else vetve to bude chciet nejak poriesit s tym june_xxi setom
                        }
                    }
                } else {
                    bonus.push([filteredData['setBuilding']['bonuses'][b]['type'], filteredData['setBuilding']['bonuses'][b]['value']])
                }
            }
            result.push(bonus);
        }
    }
    return result;
}

function getNumOfMatchesWithProductions(productions) {
    let count = 0;
    for (let prod in productions) {
        for (let j = 0; j < prioritiesProduction.length; j++) {
            if (prod === prioritiesProduction[j]) {
                count++;
            }
        }
    }
    return count;
}

function getProdChangeFlags(bonuses) {
    let result = new Set();
    for (let i = 0; i < bonuses.length; i++) {
        let prevProd = "";
        for (let j = 0; j < bonuses[i].length; j++) {
            if (bonuses[i][j][0] !== prevProd) {
                prevProd = bonuses[i][j][0];
                result.add(j+1);
            }
        }
    }
    return Array.from(result);
}

function getProdChangeFlagsEvo(bonuses) {
    let result = new Set();
    for (let i = 0; i < bonuses.length; i++) {
        let prevProds = [];
        for (var chap = 1; chap <= numberOfChapters; chap++) {
            let curProds = [];
            for (let j = 0; j < bonuses[i][chap].length; j++) {
                curProds.push(bonuses[i][chap][j][0]);
            }
            if (arraysDiffer(prevProds, curProds)) {
                prevProds = curProds;
                result.add(chap);
            }
        }
    }
    return Array.from(result);
}

function arraysDiffer(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return true;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return true;
        }
    }

    return false;
}

function searchForBuildingID(data, idToSearch) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] === idToSearch) {
            isDiscarded = false;
            for (let j = 0; j < discardBuildings.length; j++) {
                if (idToSearch.includes(discardBuildings[j])) {
                    isDiscarded = true;
                }
            }
            if (!isDiscarded) {
                result.push(data[i]);
            }
        }
    }
    return result;
}

function openInNewTab(url) {
    window.open(url).focus();
}

function clearURL() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
            uri.indexOf("#"));

        window.history.replaceState({},
            document.title, clean_uri);
    }
}

function clearInputField() {
    try {
        document.getElementById("input_search").value = "";
    } catch {

    }
}

function showHint() {
    create_exception(langUI("You can search buildings by typing their name."), 5, 'warning');
}

function showHintTomes() {
    create_exception(langUI("You can search tomes by typing their name. (Currently only the EN language works.)"), 5, 'warning');
}

function hideHint() {
    close_alert();
}

function generateEventsForAllBuildings(idToAppend, flag) {
    if (flag === "all_buildings") {
        let option = document.createElement('option');
        option.innerHTML = langUI(`All`);
        option.value = `all_events`;
        document.getElementById(idToAppend).appendChild(option);
    }
    let years = Object.keys(allEvents[flag]).sort().reverse();
    for (let y = 0; y < years.length; y++) {
        for (let year in allEvents[flag]) {
            if (years[y] === year) {
                let optGroup = document.createElement('optGroup');
                optGroup.label = `${year}`;
                for (let e = 0; e < allEvents[flag][year].length; e++) {
                    let option = document.createElement('option');
                    option.innerHTML = langUI(allEvents[flag][year][e][0]);
                    option.value = allEvents[flag][year][e][1];
                    option.selected = allEvents[flag][year][e][2];
                    option.disabled = allEvents[flag][year][e][3];
                    option.hidden = allEvents[flag][year][e][3];
                    optGroup.appendChild(option);
                }
                document.getElementById(idToAppend).appendChild(optGroup);
            }
        }
    }
    if (flag === "all_buildings") {
        let optionOlder = document.createElement('option');
        optionOlder.innerHTML = langUI(`Older`);
        optionOlder.value = `summer_xix_`;
        document.getElementById(idToAppend).appendChild(optionOlder);
    }
}

function setChapter(chap) {
    localStorage.setItem("chapter", chap);
    location.reload();
}

function getPresetChapter() {
    if (localStorage.getItem("chapter") === null) {
        return "19";
    } else {
        return localStorage.getItem("chapter");
    }
}

function generateChapterDropdown(folderIndent=0) {
    let filePrefix = "../".repeat(folderIndent);
    document.getElementById("preset_chapter").src = filePrefix+"images/general/chapter_icons/ch"+getPresetChapter()+".png";
    for (let i = 0; i <= numberOfChapters; i++) {
        if (i == 0) {
            let item = document.createElement('li');
            item.role = "presentation";
            let p = document.createElement('p');
            p.role = "menuitem";
            p.tabindex = "-1";
            p.className = "small pointer";
            p.innerHTML = "How does this work?"
            p.onclick = function() {chapterSelectionExplain()};
            let img = document.createElement('img');
            img.src = filePrefix+"images/general/request_sign_info.png";
            img.style.marginLeft = "5px";
            img.style.width = "30px";
            img.className = "pointer";
            img.onclick = function() {chapterSelectionExplain()};
            p.prepend(img);
            item.appendChild(p);
            document.getElementById("chapters_dropdown").appendChild(item)
        } else {
            let item = document.createElement('li');
            item.role = "presentation";
            let a = document.createElement('a');
            a.role = "menuitem";
            a.tabindex = "-1";
            a.href = "#";
            a.onclick = function() {setChapter(i)};
            a.innerHTML = chapterNames[i];
            let img = document.createElement('img');
            img.src = filePrefix+`images/general/chapter_icons/ch${i}.png`;
            img.style.marginRight = "3px";
            img.style.marginLeft = "3px";
            img.style.width = "20px";
            a.prepend(img);
            item.appendChild(a);
            document.getElementById("chapters_dropdown").appendChild(item)
        }
    }
}

function tempHint() {
    create_exception(langUI("This is an old way of chapter selection - the new one has been introduced! Head to the menu bar in the right top corner and choose your chapter directly from there - it will get remembered by your browser, so that you won't have to do it everytime you use a sorting feature."), 15, 'warning');
}

function chapterSelectionExplain() {
    create_exception(langUI("This is a new way of selecting your chapter on the website. You can now select your current in-game chapter using this new dropdown menu and it will get remembered by your browser - so that you won't have to do it everytime you use a sorting feature. Your chapter is used when sorting buildings in many ways ensuring that the final order will be always accurate for your current in-game progress!"), 25, 'warning');
}

function generateOptionsForOrderBy(flag) {
    for (let i = 0; i < optionsForOrderBy.length; i++) {
        if (optionsForOrderBy[i]["type"].split("&").includes(flag)) {
            let option = document.createElement('option');
            option.value = optionsForOrderBy[i]['value'];
            option.innerHTML = langUI(optionsForOrderBy[i]['text']);
            document.getElementById('input_orderBy').appendChild(option);
        }
    }
}

function generateOptionsForFilterBy() {
    for (let i = 0; i < optionsForFilterBy.length; i++) {
        let option = document.createElement('option');
        option.value = optionsForFilterBy[i]['value'];
        option.innerHTML = langUI(optionsForFilterBy[i]['text']);
        document.getElementById('input_production').appendChild(option);
    }
}

function generateOptionsForSetInput() {
    let option = document.createElement('option');
    option.value = "all_";
    option.innerHTML = langUI("Choose a set");
    document.getElementById('input_set').appendChild(option);
    for (const [id, name] of Object.entries(setNames)) {
        let option = document.createElement('option');
        option.value = id;
        option.innerHTML = langUI(name);
        document.getElementById('input_set').appendChild(option);
    }
}

function round(value) {
    if (value % 1000 === 0 && value > 100000) {
        return ""+(value/1000)+"K"
    }
    return value;
}

function generateGuestRacesDropdown() {
    let mainDiv = document.getElementById("guestRacesDropdown");
    for (let i = numberOfChapters; i >= 6; i--) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        if(location.href.toLowerCase().includes("/guestraces/")) {
            a.href = Object.keys(grIds).find(key => grIds[key] === "ch"+i)+".html";
        } else {
            a.href = "guestRaces/"+Object.keys(grIds).find(key => grIds[key] === "ch"+i)+".html";
        }
        a.id = "navitem_"+Object.keys(grIds).find(key => grIds[key] === i);
        a.innerHTML = chapterNames[i];
        let img = document.createElement("img");
        img.src = chapter_icons[i].substring(0, chapter_icons[i].indexOf(" "));
        img.style.marginRight = "5px";
        a.prepend(img);
        mainDiv.appendChild(a);
    }
}

function placeAd(adContentType, parentId) {
    let parent = document.getElementById(parentId);
    parent.innerHTML += googleads[adContentType];
}

//ADBLOCKER PREVENTION:
async function checkAdBlocker() {
    let adBlockEnabled = false
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    try {
        await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
    } catch (e) {
        adBlockEnabled = true
    } finally {
        //console.log(`AdBlock Enabled: ${adBlockEnabled}`)
        if (adBlockEnabled) {
            create_exception("It seems like your <b>AdBlocker</b> is running on this website. Please consider disabling your AdBlocker"+
            " or adding this website to your whitelist, to help <b>iDavis-Elvenar</b> website continue providing tips and resources"+
            " for the community.<p class='mb-0'><center><img src='https://i.ibb.co/zQ9S4sc/EL-str-nka-adblocker-disable.png' style='width:70%; border:3px solid black; margin-bottom: -7px;'></center></p>"+
            "<ul><li> If you feel like no AdBlocker is used on your side and this message appeared by mistake, "+
            " let me know by filling the form on my <a href='https://idavis-elvenar.com/contact.html' class='alert-link'>Contact page</a>.</li></ul>"+
            "", 10000, "danger");
        }
    }
}

function generateMoreNavbar(filePrefix="") {
    let parent = document.getElementById("more_navbar");
    for (const item of moreNavbarContent) {
        if (item["innerHTML"] === "Contact") {
            let div = document.createElement('div');
            div.className = "dropdown-divider";
            div.style.height = "1px";
            div.style.backgroundColor = "rgb(97, 83, 66)";
            parent.appendChild(div);
        }
        let a = document.createElement('a');
        a.className = item["className"];
        a.href = filePrefix+item["href"];
        a.id = item["id"];
        a.innerHTML = item["innerHTML"];
        if (item.hasOwnProperty("img")) {
            let img = document.createElement('img');
            img.src = item["img"]["src"];
            img.style = item["img"]["style"];
            a.prepend(img);
        }
        parent.appendChild(a);
    }
    if (navbarNew["active"]) {
        let navbar = document.getElementById("navbar_more");
        navbar.innerHTML = `<img src="${navbarNew["img"]["src"]}" style="${navbarNew["img"]["style"]}"> ${navbar.innerHTML}`;
    }
}

function generateNavbarContent(filePrefix="") {
    let parent = document.getElementById("");
}

function createDatesTable(parent, liveStartDate, liveEndDate, betaStartDate, betaEndDate) {
    let divDates = document.createElement('div');
    divDates.className = "card-spoiler border-spoiler mb-3";
    divDates.style.marginTop = "10px";
    divDates.style.padding = "7px 20px 10px";
    divDates.style.width = "60%";
    let divRowHeader = document.createElement('div');
    divRowHeader.className = "row";
    let divColHeader = document.createElement('div');
    divColHeader.className = "col-sm-12";
    let imgTelescope = document.createElement('img');
    imgTelescope.src = "https://i.ibb.co/4s0wgqT/telescop.png";
    if (window.innerWidth >= 580) {
        imgTelescope.style.marginLeft = "-30px";
        imgTelescope.style.marginTop = "20px";
        imgTelescope.style.position = "absolute";
    } else {
        imgTelescope.style.marginBottom = "10px";
    }
    divColHeader.appendChild(imgTelescope);
    divRowHeader.appendChild(divColHeader);
    divDates.appendChild(divColHeader);
    let divRowMain = document.createElement('div');
    divRowMain.className = "row";
    let divCol1 = document.createElement('div');
    divCol1.className = "col-sm-6";
    let divRow1 = document.createElement('div');
    let divRow2 = document.createElement('div');
    divRow1.className = "row";
    let divRow1Content = document.createElement('div');
    divRow1Content.innerHTML = `<b>Live servers:</b>`;
    if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(liveEndDate)) <= -1) {
        divRow1Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="The event is over">`;
    } else if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(liveStartDate)) <= 0) {
        divRow1Content.innerHTML += `<br><img src="https://i.ibb.co/Z6fSdBx/sun-cloud-3.png" style="margin-top: 7px; height: 30px;" title="The event is running"}">`;
    } else if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(liveStartDate)) <= 3) {
        divRow1Content.innerHTML += `<br><img src="https://i.ibb.co/dQfb5s9/sun-cloud-2.png" style="margin-top: 7px; height: 24px;" title="${getDaysTillDate(convertDisplayDateToJavascriptFormatDate(liveStartDate))+" days remaining"}">`;
    } else {
        if (liveStartDate.includes("_")) {
            divRow1Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="The date will appear soon">`;
        } else {
            divRow1Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="${getDaysTillDate(convertDisplayDateToJavascriptFormatDate(liveStartDate))+" days remaining"}">`;
        }
    }
    divRow1.appendChild(divRow1Content);
    divRow2.className = "row";
    divRow2.style.marginTop = "10px";
    divRow2.innerHTML = `<h7><b>Start date:</b> ${liveStartDate}<br><b>End date:</b> ${liveEndDate}</h7>`;
    let divCol2 = document.createElement('div');
    divCol2.className = "col-sm-6";
    let divRow3 = document.createElement('div');
    let divRow4 = document.createElement('div');
    divRow3.className = "row";
    let divRow3Content = document.createElement('div');
    divRow3Content.innerHTML = `<b>Beta server:</b>`;
    if (window.innerWidth < 580) {
        divRow3.style.marginTop = "20px";
    }
    if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(betaEndDate)) <= -1) {
        divRow3Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="The event is over">`;
    } else if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(betaStartDate)) <= 0) {
        divRow3Content.innerHTML += `<br><img src="https://i.ibb.co/Z6fSdBx/sun-cloud-3.png" style="margin-top: 7px; height: 30px;" title="The event is running">`;
    } else if (getDaysTillDate(convertDisplayDateToJavascriptFormatDate(betaStartDate)) <= 3) {
        divRow3Content.innerHTML += `<br><img src="https://i.ibb.co/dQfb5s9/sun-cloud-2.png" style="margin-top: 7px; height: 24px;" title="${getDaysTillDate(convertDisplayDateToJavascriptFormatDate(betaStartDate))+" days remaining"}">`;
    } else {
        if (betaStartDate.includes("_")) {
            divRow3Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="The date will appear soon">`;
        } else {
            divRow3Content.innerHTML += `<br><img src="https://i.ibb.co/stsL5vQ/sun-cloud-1.png" style="margin-top: 7px; height: 24px;" title="${getDaysTillDate(convertDisplayDateToJavascriptFormatDate(betaStartDate))+" days remaining"}">`;
        }
    }
    divRow3.appendChild(divRow3Content);
    divRow4.className = "row";
    divRow4.style.marginTop = "10px";
    divRow4.innerHTML = `<h7><b>Start date:</b> ${betaStartDate}<br><b>End date:</b> ${betaEndDate}</h7>`;
    divCol1.appendChild(divRow1);
    divCol1.appendChild(divRow2);
    divCol2.appendChild(divRow3);
    divCol2.appendChild(divRow4);
    divRowMain.appendChild(divCol1);
    divRowMain.appendChild(divCol2);
    divDates.appendChild(divRowMain);
    parent.appendChild(divDates);
}

function getDaysTillDate(date) {
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = today.getUTCFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let tod = new Date(today);
    return (new Date(date)-tod)/1000/60/60/24;
}

function convertDisplayDateToJavascriptFormatDate(displayDate) {
    let month = "";
    switch (displayDate.split(" ")[0]) {
        case "January": month = "01"; break;
        case "February": month = "02"; break;
        case "March": month = "03"; break;
        case "April": month = "04"; break;
        case "May": month = "05"; break;
        case "June": month = "06"; break;
        case "July": month = "07"; break;
        case "August": month = "08"; break;
        case "September": month = "09"; break;
        case "October": month = "10"; break;
        case "November": month = "11"; break;
        case "December": month = "12"; break;
    }
    let day = displayDate.split(" ")[1].substring(0, displayDate.split(" ")[1].length-2);
    let year = displayDate.split(" ")[2];
    return month+"/"+day+"/"+year;
}

function convertJavascriptFormatDateToDisplayDate(date) {
    let month = "";
    switch(date.split("/")[0]) {
        case "01": month = "January"; break;
        case "02": month = "February"; break;
        case "03": month = "March"; break;
        case "04": month = "April"; break;
        case "05": month = "May"; break;
        case "06": month = "June"; break;
        case "07": month = "July"; break;
        case "08": month = "August"; break;
        case "09": month = "September"; break;
        case "10": month = "October"; break;
        case "11": month = "November"; break;
        case "12": month = "December"; break;
    }
    let dayPart = date.split("/")[1];
    if (dayPart[0] === "0") {
        dayPart = dayPart.slice(1);
    }
    let day = dayPart;
    switch(dayPart[dayPart.length-1]) {
        case "0": day += "th"; break;
        case "1": day += "st"; break;
        case "2": day += "nd"; break;
        case "3": day += "rd"; break;
        case "4": day += "th"; break;
        case "5": day += "th"; break;
        case "6": day += "th"; break;
        case "7": day += "th"; break;
        case "8": day += "th"; break;
        case "9": day += "th"; break;
    }
    let year = date.split("/")[2];
    return month + " " + day + " " + year;
}

function javascriptDatumToStringDateOnly(value) {
    var dd = String(value.getUTCDate()).padStart(2, '0');
    var mm = String(value.getUTCMonth() + 1).padStart(2, '0');
    var yyyy = value.getUTCFullYear();
    return mm+"/"+dd+"/"+yyyy;
}

function prepSetAlertElements() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
}

function handleFeatureFlag(flags) {
    let baseTabsEventsCopy = [...baseTabsEvents];
    if (flags.includes("info_tab")) {
        if (eventStartDates.hasOwnProperty(getSelectedEvent()) && eventStartDates.hasOwnProperty(featureFlagsInitialEvents["info_tab"]) && new Date(convertDisplayDateToJavascriptFormatDate(eventStartDates[getSelectedEvent()]["beta"]["start_date"])) >= 
        new Date(convertDisplayDateToJavascriptFormatDate(eventStartDates[featureFlagsInitialEvents["info_tab"]]["beta"]["start_date"]))) {
            baseTabsEventsCopy;
        } else {
            baseTabsEventsCopy = baseTabsEventsCopy.filter(element => element["id"] !== "info_panel_div");
        }
    }
    if (flags.includes("prizes_tab")) {
        if (eventStartDates.hasOwnProperty(getSelectedEvent()) && eventStartDates.hasOwnProperty(featureFlagsInitialEvents["prizes_tab"]) && new Date(convertDisplayDateToJavascriptFormatDate(eventStartDates[getSelectedEvent()]["beta"]["start_date"])) >= 
        new Date(convertDisplayDateToJavascriptFormatDate(eventStartDates[featureFlagsInitialEvents["prizes_tab"]]["beta"]["start_date"]))) {
            baseTabsEventsCopy;
        } else {
            baseTabsEventsCopy = baseTabsEventsCopy.filter(element => element["id"] !== "prizes_tab");
        }
    }
    return baseTabsEventsCopy;
}

function getTitleFromGoodImage(id) {
    let temp;
    if (goods_icons[id] !== undefined) {
        temp = goods_icons[id].substring(goods_icons[id].indexOf("title='")+7);
    } else {
        temp = goods_icons[id.toLowerCase()].substring(goods_icons[id.toLowerCase()].indexOf("title='")+7);
    }
    temp = temp.substring(0, temp.indexOf("'"));
    return temp;
}

function setDocumentTitle(document, type, baseTabs, additionalTabs, page) {
    var tabName = "";
    for (const baseTab of baseTabs) {
        if (baseTab['id'] === type || baseTab['onclick'] === type) {
            tabName = baseTab['name'];
        }
    }
    if (tabName === "") {
        var additionalKeys = Object.keys(additionalTabs);
        for (const key of additionalKeys) {
            for (const additionalTab of additionalTabs[key]) {
                if (additionalTab['id'] === type) {
                    tabName = additionalTab['name'];
                }
            }
        }
    }

    var pagesNames = {
        "events":"All Events",
        "fa":"Fellowship Adventures",
        "seasons":"Seasons",
    }

    var pageName = "";
    if (!pagesNames.hasOwnProperty(page)) {
        var chapter = page.substring(2);
        pageName = chapterNames[chapter];
    } else {
        pageName = pagesNames[page];
    }

    var result = pageName + ` - ${tabName} | ` + `iDavis Elvenar`;
    document.title = result;
}

function generateWebIcon() {
    if (webIconChange["active"]) {
        document.getElementById("web_icon").setAttribute("src", webIconChange["img"]);
    }
}

function generateNewEventSign() {
    if (newEventSign["active"]) {
        var img = document.createElement('img');
        img.src = newEventSign["img"];
        img.style.width = '50px';
        img.style.marginRight = '3px';
        var parentElement = document.getElementById('select_event_label');
        parentElement.prepend(img);
    }
}