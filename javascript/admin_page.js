
function handleBuildingsJSON() {
    create_exception("Generating...",10000,'primary')
    let file = document.getElementById('myFile').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var numberOfChapters = parseInt(document.getElementById('numOfChapters').textContent);
    var allBuildings = [];
    var result = [];
    var allEvolvings = new Array();
    let allSets = new Array();
    reader.onload = function() {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'].includes('A_Evt')) {
                //console.log('buildingCount');
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
                //HANDLE SETS:
                let fileS = document.getElementById('setsFile').files[0];
                try {
                    let readerS = new FileReader();
                    readerS.readAsText(fileS);
                    readerS.onload = function () {
                        let dataSets = JSON.parse(readerS.result);
                        for (let i = 0; i < dataSets.length; i++) {
                            if (dataSets[i].hasOwnProperty('buildings')) {
                                for (let j = 0; j < dataSets[i]['buildings'].length; j++) {
                                    var s = {
                                        "id": dataSets[i]['buildings'][j]['baseName'],
                                        "setID": dataSets[i]['id']
                                    }
                                    let bonuses = [];
                                    for (let k = 0; k < dataSets[i]['buildings'][j]['bonuses'].length; k++) {
                                        let bonus = {};
                                        for (let keySet in dataSets[i]['buildings'][j]['bonuses'][k]) {
                                            if (keySet !== '__class__') {
                                                bonus[keySet] = dataSets[i]['buildings'][j]['bonuses'][k][keySet];
                                            }
                                        }
                                        bonuses.push(bonus);
                                    }
                                    s['bonuses'] = bonuses;
                                    allSets.push(s);
                                }
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
                                //ATTACH SET BUILDING DATA:
                                for (let setBuilding = 0; setBuilding < allSets.length; setBuilding++) {
                                    if (allSets[setBuilding]['id'].toLowerCase() === b['id'].toLowerCase()) {
                                        let sb = {};
                                        sb['setID'] = allSets[setBuilding]['setID'];
                                        sb['bonuses'] = allSets[setBuilding]['bonuses'];
                                        b['setBuilding'] = sb;
                                    }
                                }

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
                                    if (allBuildings[l]['id'].substring(0, allBuildings[l]['id'].lastIndexOf('_')) === b['id']) {
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
                                        if (allEvolvings[evo]['baseName'].toLowerCase() === b['id'].toLowerCase()) {
                                            evoObject = allEvolvings[evo];
                                            break;
                                        }
                                    }
                                    for (let stage = 0; stage < 10; stage++) {
                                        //console.log(b['id'])
                                        for (let prod = 0; prod < evoObject['stages'][stage]['products'].length; prod++) {
                                            if (evoObject['stages'][stage]['products'][prod].hasOwnProperty('goodId')) {
                                                setOfAllProductions.add(evoObject['stages'][stage]['products'][prod]['goodId']);
                                            }
                                        }
                                    }
                                }

                                var arrayOfProductions = Array.from(setOfAllProductions);
                                var allDifferentProductions = orderByPriorities(arrayOfProductions);
                                b['all_productions'] = new Array();
                                for (let allp = 0; allp < allDifferentProductions.length; allp++) {
                                    b['all_productions'].push([allDifferentProductions[allp]]);
                                }
                                levelsFound = 0;
                                for (var k = i; k < allBuildings.length; k++) {
                                    if (allBuildings[k]['id'].substring(0, allBuildings[k]['id'].lastIndexOf('_')) === b['id']) {
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
                                                            if (allBuildings[k]['production']['__class__'] === 'SwitchableProductionVO') {
                                                                for (let allp2 = 0; allp2 < b['all_productions'].length; allp2++) {
                                                                    if (b['all_productions'][allp2][0] === allDifferentProductions[prod]) {
                                                                        if (b['all_productions'][allp2].length === 1) {
                                                                            b['all_productions'][allp2].push("switchable");
                                                                        }
                                                                    }
                                                                }
                                                            }
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
                                                                    /*if (allBuildings[k]['id'].includes("A_Evt_Evo_Autumn_XIX_Bear_Ice")) {
                                                                        console.log(allBuildings[k]['production'])
                                                                        console.log(allBuildings[k]['production']['products'][o])
                                                                    }*/
                                                                    c['production_time'] = allBuildings[k]['production']['products'][o]['production_time'];
                                                                    if (c['production_time'] === undefined) {
                                                                        c['production_time'] = allBuildings[k]['production']['products'][0]['production_time'];
                                                                    }
                                                                    //console.log(allBuildings[k]['id']+"          "+c['production_time'])
                                                                    if (allBuildings[k]['production']['__class__'] === 'SwitchableProductionVO') {
                                                                        for (let allp2 = 0; allp2 < b['all_productions'].length; allp2++) {
                                                                            if (b['all_productions'][allp2][0] === allDifferentProductions[prod]) {
                                                                                if (b['all_productions'][allp2].length === 1) {
                                                                                    b['all_productions'][allp2].push("switchable");
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    if (b['chapters'][currentLevelString][stageString].hasOwnProperty(allDifferentProductions[prod])) {
                                                                        b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]]['value'] += c['value'];
                                                                    } else {
                                                                        b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]] = c;
                                                                    }
                                                                    usedEvoProducts.push(o);
                                                                } else {
                                                                    if (evoObject['stages'][stage]['products'][o].hasOwnProperty('factor')) {
                                                                        c['value'] *= evoObject['stages'][stage]['products'][o]['factor'];
                                                                        c['production_time'] = allBuildings[k]['production']['products'][o]['production_time'];
                                                                        if (c['production_time'] === undefined) {
                                                                            c['production_time'] = allBuildings[k]['production']['products'][0]['production_time'];
                                                                        }
                                                                        if (allBuildings[k]['production']['__class__'] === 'SwitchableProductionVO') {
                                                                            for (let allp2 = 0; allp2 < b['all_productions'].length; allp2++) {
                                                                                if (b['all_productions'][allp2][0] === allDifferentProductions[prod]) {
                                                                                    if (b['all_productions'][allp2].length === 1) {
                                                                                        b['all_productions'][allp2].push("switchable");
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        if (b['chapters'][currentLevelString][stageString].hasOwnProperty(allDifferentProductions[prod])) {
                                                                            b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]]['value'] += c['value'];
                                                                        } else {
                                                                            b['chapters'][currentLevelString][stageString][allDifferentProductions[prod]] = c;
                                                                        }
                                                                        usedEvoProducts.push(o);
                                                                    }
                                                                }
                                                                //break;
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
                                                        } else if (evoObject['stages'][stage]['products'][unusedProduct].hasOwnProperty('factor')) {
                                                            var c = {};
                                                            if (!b['chapters'][currentLevelString].hasOwnProperty(stageString)) {
                                                                b['chapters'][currentLevelString][stageString] = {};
                                                            }
                                                            for (prod in allBuildings[k]['production']['products'][allBuildings[k]['production']['products'].length-1]['revenue']['resources']) {  //beriem vzdy posledny product (neviem ci to v hre funguje inak)
                                                                if (prod !== '__class__') {
                                                                    c['value'] = evoObject['stages'][stage]['products'][unusedProduct]['factor']*allBuildings[k]['production']['products'][allBuildings[k]['production']['products'].length-1]['revenue']['resources'][prod];
                                                                    c['production_time'] = allBuildings[k]['production']['products'][allBuildings[k]['production']['products'].length-1]['production_time'];
                                                                    if (allBuildings[k]['production']['products'][allBuildings[k]['production']['products'].length-1].hasOwnProperty('production_option')) {
                                                                        c['flag'] = "switchable";
                                                                    }
                                                                }
                                                            }
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
                                //FILL MISSING PRODUCTION TIMES
                                if (b['id'].includes('_Evo_')) {
                                    for (var ch in b["chapters"]) {
                                        for (var st in b["chapters"][ch]) {
                                            let foundProductionTime = -1;
                                            for (var sprod in b["chapters"][ch][st]) {
                                                if (prioritiesProduction.includes(sprod) &&
                                                    b["chapters"][ch][st][sprod].hasOwnProperty("production_time")) {
                                                    foundProductionTime = b["chapters"][ch][st][sprod]["production_time"];
                                                } else if (prioritiesProduction.includes(sprod) &&
                                                    !b["chapters"][ch][st][sprod].hasOwnProperty("production_time") && foundProductionTime !== -1) {
                                                    b["chapters"][ch][st][sprod]["production_time"] = foundProductionTime;
                                                }
                                            }
                                        }
                                    }
                                }
                                //PRIDAJ FEEDING EFFECTS PRE EVO (AK EXISTUJE)
                                for (let pet = 0; pet < effectConfigs.length; pet++) {
                                    if (effectConfigs[pet]["buildingID"] === b["id"] &&
                                    effectConfigs[pet]["typeEffectConfig"] === "feeding") {
                                        b['feedingEffect'] = effectConfigs[pet];
                                    }
                                }
                                //PRIDAJ EXPIRING AK EXISTUJE
                                for (let exp = 0; exp < effectConfigs.length; exp++) {
                                    if (effectConfigs[exp]["buildingID"] === b["id"] &&
                                    effectConfigs[exp]["typeEffectConfig"] === "expiring") {
                                        var expObj = {};
                                        expObj["duration"] = effectConfigs[exp]["duration"];
                                        expObj["values"] = effectConfigs[exp]["values"];
                                        if (effectConfigs[exp].hasOwnProperty("iconID")) {
                                            expObj["iconID"] = effectConfigs[exp]["iconID"];
                                        }
                                        if (effectConfigs[exp].hasOwnProperty("format")) {
                                            expObj["format"] = effectConfigs[exp]["format"];
                                        }
                                        if (effectConfigs[exp].hasOwnProperty("description") && effectConfigs[exp]["description"] !== undefined) {
                                            expObj["description"] = effectConfigs[exp]["description"];
                                        }
                                        b["expiring"] = expObj;
                                    }
                                }
                                //PRIDAJ WEIGHTED REWARD AK EXISTUJE
                                for (let wr = 0; wr < weightedRewards.length; wr++) {
                                    if (weightedRewards[wr]["buildingID"].substring(0, weightedRewards[wr]["buildingID"].lastIndexOf("_"))
                                    === b["id"]) {
                                        console.log(weightedRewards[wr]["buildingID"].substring(0, weightedRewards[wr]["buildingID"].lastIndexOf("_")))
                                        if (b.hasOwnProperty("weightedRewards")) {
                                            b["weightedRewards"].push(weightedRewards[wr]);
                                        } else {
                                            b["weightedRewards"] = [weightedRewards[wr]];
                                        }
                                    }
                                }
                                result.push(b);
                            }
                        }
                        saveJSON( JSON.stringify(result), "buildings.json" );
                        create_exception("Data Generated!",10,'success');
                    }
                } catch (TypeError) {
                    console.log("sets file nenajdeny");
                }
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
                //console.log('buildingCount');
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

function regenerateBuildingNamesLanguages() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('building_names').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let allIds = new Set()
    var allBuildings = [];
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'].toLowerCase().includes("a_evt")) {
                //console.log('buildingsCount');
                allIds.add(data[i]['id'].substring(0, data[i]['id'].lastIndexOf('_')));
            }
        }
        let allIdsArray = Array.from(allIds)
        let cz = {};
        for (let i = 0; i < allIdsArray.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (allIdsArray[i].toLowerCase() === data[j]['id'].substring(0, data[j]['id'].lastIndexOf('_')).toLowerCase()) {
                    cz[data[j]['id'].substring(0, data[j]['id'].lastIndexOf('_'))] = data[j]['name'];
                    break;
                }
            }
        }
        console.log(result);
        saveJSON( JSON.stringify(cz), "buildingNamesLanguages.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateEffectConfigs() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('effectConfigs').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    reader.onload = function () {
        let file2 = document.getElementById('effectConfigsTooltips').files[0];
        let reader2 = new FileReader();
        reader2.readAsText(file2);
        reader2.onload = function () {
            let data = JSON.parse(reader.result);
            let data2 = JSON.parse(reader2.result);
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("proxyBuildingId") &&
                    data[i]["proxyBuildingId"].toLowerCase().includes("a_evt_evo")) {
                    var pet = {};
                    pet['buildingID'] = data[i]["proxyBuildingId"];
                    pet['valuesStages'] = data[i]["valuesStages"];
                    pet['typeEffectConfig'] = "feeding"
                    pet['duration'] = data[i]["duration"];
                    if (data[i].hasOwnProperty("metadata")) {
                        if (data[i]["metadata"].hasOwnProperty("iconId")) {
                            pet["iconId"] = data[i]["metadata"]["iconId"];
                        } else {
                            if (data[i]["metadata"].hasOwnProperty("action"))
                            pet["iconId"] = data[i]["metadata"]["action"];
                        }
                        if (data[i]["metadata"].hasOwnProperty("format")) {
                            pet["format"] = data[i]["metadata"]["format"];
                        }
                    }
                    if (data[i].hasOwnProperty("metadata"))
                    if (data[i].hasOwnProperty("source")) {
                        pet["source"] = data[i]["source"];
                    }
                    for (let j = 0; j < data2.length; j++) {
                        if (data2[j].hasOwnProperty("effectConfigId") &&
                        data2[j]["effectConfigId"] === data[i]["id"].toString()) {
                            pet["title"] = data2[j]["title"];
                            pet["description"] = data2[j]["description"];
                            break;
                        }
                    }
                    result.push(pet);
                }
                if (data[i].hasOwnProperty("origins") && data[i].hasOwnProperty("duration")) {
                    var expiring = {};
                    expiring["buildingID"] = data[i]["origins"][0];
                    expiring["values"] = data[i]["values"];
                    expiring["typeEffectConfig"] = "expiring";
                    expiring["duration"] = data[i]["duration"];
                    if (data[i].hasOwnProperty("metadata")) {
                        expiring["iconID"] = data[i]["metadata"]["iconId"];
                        expiring["name"] = data[i]["metadata"]["name"];
                        expiring["format"] = data[i]["metadata"]["format"];
                    }
                    for (let j = 0; j < data2.length; j++) {
                        if (data2[j].hasOwnProperty("effectConfigId") &&
                        data2[j]["effectConfigId"] === data[i]["id"].toString()) {
                            expiring["title"] = data2[j]["title"];
                            expiring["description"] = data2[j]["description"];
                            break;
                        }
                    }
                    result.push(expiring);
                }
            }
            console.log(result)
            saveJSON( JSON.stringify(result), "effectConfigs.json" );
            create_exception("Data Generated!",10,'success');
        }
    }
}

function generateWeightedRewards() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('weightedRewards').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i].hasOwnProperty("id") && data[i]["id"].toLowerCase().includes("a_evt")) {
                var weightedReward = {};
                weightedReward['buildingID'] = data[i]["id"];
                weightedReward['chances'] = [];
                for (let j = 0; j < data[i]["chances"].length; j++) {
                    let chance = {};
                    chance["percentage"] = data[i]["chances"][j]["percentage"];
                    chance["type"] = data[i]["chances"][j]["type"];
                    chance["subType"] = data[i]["chances"][j]["subType"];
                    chance["amount"] = data[i]["chances"][j]["amount"];
                    weightedReward["chances"].push(chance);
                }
                result.push(weightedReward);
            }
        }
        console.log(result)
        saveJSON( JSON.stringify(result), "weightedRewards.js" );   // USE VARIABLE NAME: weightedRewards
        create_exception("Data Generated!",10,'success');
    }
}
