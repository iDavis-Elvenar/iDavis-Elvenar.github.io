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
    center.innerHTML = 'Copyright &#169; 2021 iDavis';
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

function searchForBuildingID(data, idToSearch) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] === idToSearch) {
            result.push(data[i]);
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
        return "18";
    } else {
        return localStorage.getItem("chapter");
    }
}

function generateChapterDropdown() {
    document.getElementById("preset_chapter").src = "images/general/chapter_icons/ch"+getPresetChapter()+".png";
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
            img.src = "images/general/request_sign_info.png";
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
            img.src = `images/general/chapter_icons/ch${i}.png`;
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