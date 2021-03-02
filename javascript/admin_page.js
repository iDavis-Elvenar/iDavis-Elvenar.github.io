
function handleBuildingsJSON() {
    create_exception("Generating...",10000,'primary')
    let file = document.getElementById('myFile').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var numberOfChapters = parseInt(document.getElementById('numOfChapters').textContent);
    var allBuildings = [];
    var result = [];
    var allEvolvings = new Array();
    reader.onload = function() {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'].includes('A_Evt')) {
                console.log('buildingCount');
                allBuildings.push(data[i]);
            }
        }
        //HANDLE EVOLVINGS:
        let fileE = document.getElementById('evolvingFile').files[0];
        try {
            let readerE = new FileReader();
            readerE.readAsText(fileE);
            readerE.onload = function () {
                let dataEvo = JSON.parse(readerE.result);
                for (let i = 0; i < dataEvo.length; i++) {
                    if (dataEvo[i]['baseName'].includes('A_Evt_Evo')) {
                        console.log('evoCount');
                        allEvolvings.push(dataEvo[i]);
                    }
                }

                for (let i = 0; i < allBuildings.length; i++) {
                    if (allBuildings[i]['level'] === 1 && !excludeAsDiscard(allBuildings[i]['id'])) {
                        var b = {
                            "id": allBuildings[i]['id'].substring(0, allBuildings[i]['id'].lastIndexOf('_')),
                            "name": allBuildings[i]['name'],
                            "type": allBuildings[i]['type'],
                            "width": allBuildings[i]['width'],
                            "length": allBuildings[i]['length'],
                            "construction_time": allBuildings[i]['construction_time'],
                            "chapters": {},
                            "appearances": {}
                        };
                        if (images_buildings.hasOwnProperty(b['id'])) {
                            if (images_buildings[b['id']] != "") {
                                b['image'] = images_buildings[b['id']];
                            } else {
                                b['image'] = "https://i.ibb.co/j3JHrXg/placeholder.jpg";
                            }
                        } else {
                            b['image'] = "https://i.ibb.co/j3JHrXg/placeholder.jpg";
                        }
                        if (allBuildings[i].hasOwnProperty('production')) {
                            b['earlyPickupTime'] = allBuildings[i]['production']['earlyPickupTime'];
                        }
                        for (var key in dailyPrizes) {
                            for (var ix = 0; ix < dailyPrizes[key].length; ix++) {
                                if (dailyPrizes[key][ix].includes(b['id'])) {
                                    if (!b['appearances'].hasOwnProperty(key)) {
                                        b['appearances'][key] = new Array();
                                    }
                                    b['appearances'][key].push(ix);
                                }
                            }
                        }
                        var setOfAllProductions = new Set();
                        var levelsFound = 0;
                        for (var l = i; l < allBuildings.length; l++) {
                            if (allBuildings[l]['id'].includes(b['id'])) {
                                for (var p1 = 0; p1 < prioritiesNonProduction.length; p1++) {
                                    if (allBuildings[l].hasOwnProperty(prioritiesNonProduction[p1])) {
                                        setOfAllProductions.add(prioritiesNonProduction[p1]);
                                    }
                                }
                                if (allBuildings[l].hasOwnProperty('production')) {
                                    for (var p2 = 0; p2 < prioritiesProduction.length; p2++) {
                                        for (var product = 0; product < allBuildings[l]['production']['products'].length; product++) {
                                            if (allBuildings[l]['production']['products'][product]['revenue']['resources'].hasOwnProperty(prioritiesProduction[p2])
                                            || allBuildings[l]['production']['products'][product]['revenue']['resources'].hasOwnProperty(prioritiesProduction[p2].toLowerCase())) {
                                                setOfAllProductions.add(prioritiesProduction[p2]);
                                            }
                                        }
                                    }
                                }
                                levelsFound++;
                                if (levelsFound === numberOfChapters) {
                                    break;
                                }
                            }
                        }
                        //VYTVORENIE EVO OBJEKTU A PRIDANIE BONUSOVYCH PRODUKCII DO ALL PRODUCTIONS
                        let evoObject = {};
                        if (b['id'].includes('_Evo_')) {
                            for (let evo = 0; evo < allEvolvings.length; evo++) {
                                if (allEvolvings[evo]['baseName'] === b['id']) {
                                    evoObject = allEvolvings[evo];
                                    break;
                                }
                            }
                            for (let stage = 0; stage < 10; stage++) {
                                for (let prod = 0; prod < evoObject['stages'][stage]['products'].length; prod++) {
                                    if (evoObject['stages'][stage]['products'][prod].hasOwnProperty('goodId')) {
                                        setOfAllProductions.add(evoObject['stages'][stage]['products'][prod]['goodId']);
                                    }
                                }
                            }
                        }

                        var arrayOfProductions = Array.from(setOfAllProductions);
                        var allDifferentProductions = orderByPriorities(arrayOfProductions);
                        b['all_productions'] = allDifferentProductions;
                        levelsFound = 0;
                        for (var k = i; k < allBuildings.length; k++) {
                            if (allBuildings[k]['id'].includes(b['id'])) {
                                var currentLevel = parseInt(allBuildings[k]['level']);
                                var currentLevelString = currentLevel.toString();
                                b['chapters'][currentLevelString] = {};
                                if (!b['id'].includes('_Evo_')) {
                                    for (var prod = 0; prod < allDifferentProductions.length; prod++) {
                                        if (prioritiesNonProduction.includes(allDifferentProductions[prod])) {
                                            var t = {};
                                            t['value'] = allBuildings[k][allDifferentProductions[prod]];
                                            b['chapters'][currentLevelString][allDifferentProductions[prod]] = t;
                                        } else if (prioritiesProduction.includes(allDifferentProductions[prod].toLowerCase())) {
                                            for (var o = 0; o < allBuildings[k]['production']['products'].length; o++) {
                                                if (allBuildings[k]['production']['products'][o]['revenue']['resources'].hasOwnProperty(allDifferentProductions[prod])) {
                                                    var c = {};
                                                    c['value'] = allBuildings[k]['production']['products'][o]['revenue']['resources'][allDifferentProductions[prod]];
                                                    c['production_time'] = allBuildings[k]['production']['products'][o]['production_time'];
                                                    b['chapters'][currentLevelString][allDifferentProductions[prod]] = c;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    //NAJDI PRISLUSNY EVO

                                    for (let stage = 0; stage < 10; stage++) {
                                        let stageString = stage.toString();
                                        let numEvoProducts = evoObject['stages'][stage]['products'].length;
                                        let usedEvoProducts = [];
                                        for (var prod = 0; prod < allDifferentProductions.length; prod++) {
                                            if (prioritiesNonProduction.includes(allDifferentProductions[prod])) {
                                                var t = {};
                                                t['value'] = allBuildings[k][allDifferentProductions[prod]];
                                                if (allDifferentProductions[prod] === 'providedCulture') {
                                                    for (let prov = 0; prov < evoObject['stages'][stage]['provisions'].length; prov++) {
                                                        if (evoObject['stages'][stageString]['provisions'][prov]['name'] === 'culture') {
                                                            t['value'] *= evoObject['stages'][stage]['provisions'][prov]['value'];
                                                        }
                                                    }
                                                }
                                                if (allDifferentProductions[prod] === 'provided_population') {
                                                    for (let prov = 0; prov < evoObject['stages'][stage]['provisions'].length; prov++) {
                                                        if (evoObject['stages'][stage]['provisions'][prov]['name'] === 'population') {
                                                            t['value'] *= evoObject['stages'][stage]['provisions'][prov]['value'];
                                                        }
                                                    }
                                                }
                                                if (!b['chapters'][currentLevelString].hasOwnProperty(stageString)) {
                                                    b['chapters'][currentLevelString][stageString] = {};
                                                }
                                                b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]] = t;
                                            } else if (prioritiesProduction.includes(allDifferentProductions[prod].toLowerCase())
                                            || prioritiesProduction.includes(allDifferentProductions[prod])) {
                                                for (var o = 0; o < allBuildings[k]['production']['products'].length; o++) {
                                                    if (allBuildings[k]['production']['products'][o]['revenue']['resources'].hasOwnProperty(allDifferentProductions[prod])
                                                    || allBuildings[k]['production']['products'][o]['revenue']['resources'].hasOwnProperty(allDifferentProductions[prod].toLowerCase())) {
                                                        var c = {};
                                                        if (!b['chapters'][currentLevelString].hasOwnProperty(stageString)) {
                                                            b['chapters'][currentLevelString][stageString] = {};
                                                        }
                                                        c['value'] = allBuildings[k]['production']['products'][o]['revenue']['resources'][allDifferentProductions[prod]];
                                                        if (evoObject['stages'][stage]['products'][o].hasOwnProperty('value')) {
                                                            c['value'] = evoObject['stages'][stage]['products'][o]['value'];
                                                            c['production_time'] = allBuildings[k]['production']['products'][o]['production_time'];
                                                            b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]] = c;
                                                            usedEvoProducts.push(o);
                                                        } else {
                                                            if (evoObject['stages'][stage]['products'][o].hasOwnProperty('factor')) {
                                                                c['value'] *= evoObject['stages'][stage]['products'][o]['factor'];
                                                                c['production_time'] = allBuildings[k]['production']['products'][o]['production_time'];
                                                                b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]] = c;
                                                                usedEvoProducts.push(o);
                                                            }
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        for (let unusedProduct = 0; unusedProduct < numEvoProducts; unusedProduct++) {
                                            if (!usedEvoProducts.includes(unusedProduct)) {
                                                if (evoObject['stages'][stage]['products'][unusedProduct].hasOwnProperty('value')) {
                                                    var c = {};
                                                    if (!b['chapters'][currentLevelString].hasOwnProperty(stageString)) {
                                                        b['chapters'][currentLevelString][stageString] = {};
                                                    }
                                                    c['value'] = evoObject['stages'][stage]['products'][unusedProduct]['value'];
                                                    b['chapters'][currentLevelString][stageString][evoObject['stages'][stage]['products'][unusedProduct]['goodId']] = c;
                                                }
                                            }
                                        }
                                    }
                                }

                                levelsFound++;
                                if (levelsFound === numberOfChapters) {
                                    break;
                                }
                            }
                        }
                        result.push(b);
                    }
                }
                console.log(result);
                saveJSON( JSON.stringify(result), "buildings.json" );
                create_exception("Data Generated!",10,'success');

            }
        } catch (TypeError) {
            console.log("evo file nenajdeny");
        }
    };

    //FILTER
    if (document.getElementById('filter').textContent != '') {
        //TO DO
    }

}

function saveJSON(text, filename){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
}

function getByKey(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

function orderByPriorities(productions) {
    var result = new Array();
    for (var i = 0; i < prioritiesNonProduction.length; i++) {
        for (var j = 0; j < productions.length; j++) {
            if (prioritiesNonProduction[i] === productions[j]) {
                result.push(productions[j]);
            }
        }
    }
    for (var i = 0; i < prioritiesProduction.length; i++) {
        for (var j = 0; j < productions.length; j++) {
            if (prioritiesProduction[i] === productions[j]) {
                result.push(productions[j]);
            }
        }
    }
    return result;
}

function generateJSONBuildingsIDs() {
    create_exception("Generating...",10000,'primary')
    let file = document.getElementById('buildings_file').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var numberOfChapters = parseInt(document.getElementById('numOfChapters').textContent);
    var allBuildings = [];
    var result = [];
    reader.onload = function() {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'].includes('A_Evt')) {
                console.log('buildingCount');
                allBuildings.push(data[i]);
            }
        }
        var result = {};
        for (var i = 0; i < allBuildings.length; i++) {
            var id = allBuildings[i]['id'].substring(0, allBuildings[i]['id'].lastIndexOf('_'));
            result[id] = "";
        }
        saveJSON( JSON.stringify(result), "images_buildings.json" );
        create_exception("Data Generated!",10,'success');
    };
}

function excludeAsDiscard(id) {
    for (let i = 0; i < discardBuildings.length; i++) {
        if (id.toLowerCase().includes(discardBuildings[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}

function regenerateItemsJSON() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('items_file').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var allItems = [];
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            console.log('itemsCount');
            allItems.push(data[i]);
        }
        for (let i = 0; i < allItems.length; i++) {
            var b = {
                "id": allItems[i]['id'],
                "name": allItems[i]['name'],
                "appearances": {}
            };
            if (imagesItems.hasOwnProperty(b['id'])) {
                if (imagesItems[b['id']] != "") {
                    b['image'] = images_buildings[b['id']];
                } else {
                    b['image'] = "https://i.ibb.co/j3JHrXg/placeholder.jpg";
                }
            } else {
                b['image'] = "https://i.ibb.co/j3JHrXg/placeholder.jpg";
            }
            for (var key in dailyPrizes) {
                for (var ix = 0; ix < dailyPrizes[key].length; ix++) {
                    if (dailyPrizes[key][ix].includes(b['id'])) {
                        if (!b['appearances'].hasOwnProperty(key)) {
                            b['appearances'][key] = new Array();
                        }
                        b['appearances'][key].push(ix);
                    }
                }
            }
            result.push(b);
        }
        console.log(result);
        saveJSON( JSON.stringify(result), "items.json" );
        create_exception("Data Generated!",10,'success');

    }
}


