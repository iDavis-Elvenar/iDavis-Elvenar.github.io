
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
                                //RESALE RESOURCES
                                if (allBuildings[i].hasOwnProperty("resale_resources") && 
                                    allBuildings[i]["resale_resources"].hasOwnProperty("resources")) {
                                        var resaleResources = Object.keys(allBuildings[i]["resale_resources"]["resources"]);
                                        b["resale_resources"] = {};
                                        for (let rr = 0; rr < resaleResources.length; rr++) {
                                            if (resaleResources[rr] !== "__class__") {
                                                b["resale_resources"][resaleResources[rr]] = allBuildings[i]["resale_resources"]["resources"][resaleResources[rr]];
                                            }
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
                                var baseNonProductions = {"providedCulture":"culture", "provided_population":"population"}
                                for (var l = 0; l < allBuildings.length; l++) {
                                    if (allBuildings[l]['id'].substring(0, allBuildings[l]['id'].lastIndexOf('_')) === b['id']) {
                                        for (var p1 = 0; p1 < prioritiesNonProduction.length; p1++) {
                                            if (allBuildings[l].hasOwnProperty('provisions')) {
                                                if (allBuildings[l]['provisions']['resources']['resources'].hasOwnProperty(baseNonProductions[prioritiesNonProduction[p1]])) {
                                                    setOfAllProductions.add(prioritiesNonProduction[p1]);
                                                }
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
                                    for (let stage = 0; stage < evoObject['stages'].length; stage++) {
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
                                for (var k = 0; k < allBuildings.length; k++) {
                                    if (allBuildings[k]['id'].substring(0, allBuildings[k]['id'].lastIndexOf('_')) === b['id']) {
                                        var currentLevel = parseInt(allBuildings[k]['level']);
                                        var currentLevelString = currentLevel.toString();
                                        b['chapters'][currentLevelString] = {};
                                        if (!b['id'].includes('_Evo_')) {
                                            for (var prod = 0; prod < allDifferentProductions.length; prod++) {
                                                if (prioritiesNonProduction.includes(allDifferentProductions[prod])) {
                                                    var t = {};
                                                    if (allBuildings[k].hasOwnProperty('provisions')) {
                                                        t['value'] = allBuildings[k]['provisions']['resources']['resources'][baseNonProductions[allDifferentProductions[prod]]];
                                                        b['chapters'][currentLevelString][allDifferentProductions[prod]] = t;
                                                    }
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

                                            for (let stage = 0; stage < evoObject['stages'].length; stage++) {
                                                let stageString = stage.toString();
                                                let numEvoProducts = evoObject['stages'][stage]['products'].length;
                                                let usedEvoProducts = [];
                                                for (var prod = 0; prod < allDifferentProductions.length; prod++) {
                                                    if (prioritiesNonProduction.includes(allDifferentProductions[prod])) {
                                                        var t = {};
                                                        if (allBuildings[k].hasOwnProperty('provisions')) {
                                                            t['value'] = allBuildings[k]['provisions']['resources']['resources'][baseNonProductions[allDifferentProductions[prod]]];
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
                                                                if (allBuildings[k]['production']['products'][o]['revenue']['resources'][allDifferentProductions[prod]] !== undefined) {
                                                                    c['value'] = allBuildings[k]['production']['products'][o]['revenue']['resources'][allDifferentProductions[prod]];
                                                                } else {
                                                                    c['value'] = allBuildings[k]['production']['products'][o]['revenue']['resources'][allDifferentProductions[prod].toLowerCase()];
                                                                }
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
                                    if (weightedRewards[wr]["buildingID"].includes("::Stage_")) {
                                        let stage = weightedRewards[wr]["buildingID"].split("::")[1];
                                        if (weightedRewards[wr]["buildingID"].substring(0, weightedRewards[wr]["buildingID"].split("::")[0].lastIndexOf("_"))
                                        === b["id"]) {
                                            var wrSpecificObject = JSON.parse(JSON.stringify(weightedRewards[wr]));
                                            wrSpecificObject["buildingID"] = wrSpecificObject["buildingID"].split("::")[0];

                                            if (b.hasOwnProperty("weightedRewards")) {
                                                if (b["weightedRewards"].hasOwnProperty(stage)) {
                                                    b["weightedRewards"][stage].push(wrSpecificObject);
                                                } else {
                                                    b["weightedRewards"][stage] = [wrSpecificObject];
                                                }
                                            } else {
                                                b["weightedRewards"] = {};
                                                b["weightedRewards"][stage] = [wrSpecificObject]
                                            }
                                        }
                                    } else {
                                        if (weightedRewards[wr]["buildingID"].substring(0, weightedRewards[wr]["buildingID"].lastIndexOf("_"))
                                        === b["id"]) {
                                            console.log("Ba")
                                            if (b.hasOwnProperty("weightedRewards")) {
                                                b["weightedRewards"].push(weightedRewards[wr]);
                                            } else {
                                                b["weightedRewards"] = [weightedRewards[wr]];
                                            }
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
                        data2[j]["effectConfigId"] === data[i]["effectId"].toString()) {
                            pet["title"] = data2[j]["title"];
                            pet["description"] = data2[j]["description"];
                            break;
                        }
                    }
                    if (data[i].hasOwnProperty("metadata")) {
                        if (data[i]["metadata"].hasOwnProperty("calculator") && data[i]["metadata"].hasOwnProperty("components")) {
                            if (data[i]["metadata"]["calculator"] === "frog") {
                                pet["frogId"] = data[i]["metadata"]["components"][0]["frogId"];
                            }
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
                        console.log(data[i]);
                        if (data2[j].hasOwnProperty("effectConfigId") &&
                        data2[j]["effectConfigId"] === data[i]["effectId"].toString()) {
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

function generateJSWithStoryQuests() {
    let plainContent = document.getElementById("ulohy").value;
    let plainQuests = plainContent.split("\n\n");
    let content = plainQuests.map(x => x.split("\n"));
    
    let result = [];
    for (let i = 0; i < content.length; i++) {
        let quest = {};
        quest["task"] = content[i][0];
        for (let j = 1; j < content[i].length; j++) {
            if (quest.hasOwnProperty("rewards")) {
                quest["rewards"].push(content[i][j]);
            } else {
                quest["rewards"] = [content[i][j]];
            }
        }
        result.push(quest);
    }

    saveJSON( JSON.stringify(result), "storyQuests.js" );
    create_exception("Data Generated!",10,'success');
}

function saveContentQuests() {
    localStorage.setItem("contentQuests", document.getElementById("ulohy").value);
}

function generateQuestsInTxt() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('questsjs').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = "";
    reader.onload = function () {
        let chapter = document.getElementById("chnumber").value;
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data[chapter].length; i++) {
            if (data[chapter][i].hasOwnProperty("task")) {
                result += data[chapter][i]["task"];
            }
            if (data[chapter][i].hasOwnProperty("rewards")) {
                for (let j = 0; j < data[chapter][i]["rewards"].length; j++) {
                    result += "\n";
                    result += data[chapter][i]["rewards"][j];
                }
            }
            if (i !== data[chapter].length-1) {
                result += "\n";
                result += "\n";
            }
        }
        document.getElementById("ulohy2").value = result;
        create_exception("Data Generated!",10,'success');
    }
}

function generateMpeChestsCosts() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('chestsCosts').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = {};
    var selectedFaType = "mpe_"+document.getElementById("mpe_type").value;
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        let chests = [];
        for (let i = 0; i < data[0].components[3].chestCosts.length; i++) {  //ak nefunguje, overit ci je component s chests naozaj 3. prvok
            var currentData = data[0].components[3].chestCosts[i];
            if (currentData["chestId"].startsWith(selectedFaType) && !currentData["chestId"].includes("endless")) {
                let chest = {};
                chest["map"] = currentData["chestId"].split("_")[2];
                if (currentData["chestId"].includes("stage_start")) {
                    chest["encounter"] = 1;
                    chest["color"] = "all";
                    chest["order"] = currentData["chestId"].split("stage_start_")[1];
                } else {
                    let color;
                    if (currentData["chestId"].includes("orange")) {
                        color = "orange";
                    } else if (currentData["chestId"].includes("blue")) {
                        color = "blue";
                    } else {
                        color = "green";
                    }
                    chest["encounter"] = currentData["chestId"].split(color)[1].split("_")[1];
                    chest["color"] = color;
                    chest["order"] = currentData["chestId"].split(color)[1].split("_")[2];
                }
                for (const key in currentData["costs"]["resources"]) {
                    if (key !== "__class__") {
                        if (!chest["costs"]) {
                            chest["costs"] = {};
                        }
                        chest["costs"][key] = currentData["costs"]["resources"][key];
                    }
                }
                chests.push(chest);
            }
        }
        for (let i = 0; i < chests.length; i++) {
            if (!result[chests[i]["map"]]) {
                result[chests[i]["map"]] = {};
            }
            if (!result[chests[i]["map"]][chests[i]["color"]]) {
                result[chests[i]["map"]][chests[i]["color"]] = {};
            }
            if (!result[chests[i]["map"]][chests[i]["color"]][chests[i]["encounter"]]) {
                result[chests[i]["map"]][chests[i]["color"]][chests[i]["encounter"]] = [];
            }
            result[chests[i]["map"]][chests[i]["color"]][chests[i]["encounter"]].push(chests[i]["costs"]);
        }
        console.log(result)
        saveJSON( JSON.stringify(result), "mpeChestsCosts.json" );   // paste it into variable in the current FS respective html file
        create_exception("Data Generated!",10,'success');
    }
}

function generateSeasonPass() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('seasonPass').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    var selectedSeasonId = document.getElementById("season_id").value;
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data[0]['components'][7]['levels'].length; i++) {
            var currentLevelData = data[0]['components'][7]['levels'][i];
            var level = {};
            level['requiredXp'] = currentLevelData['requiredXp'];
            level['requiresPass'] = currentLevelData['requiresPass'];
            level['rewards'] = [];
            for (let rew = 0; rew < currentLevelData['rewards'].length; rew++) {
                var reward = {};
                reward['type'] = currentLevelData['rewards'][rew]['type'];
                reward['subType'] = currentLevelData['rewards'][rew]['subType'];
                reward['amount'] = currentLevelData['rewards'][rew]['amount'];
                level['rewards'].push(reward);
            }
            result.push(level);
        }
        console.log(result)
        saveJSON( JSON.stringify(result), "seasonsPass.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateSeasonChests() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('seasonChests').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = {};
    var selectedSeasonId = document.getElementById("season_chests_id").value;
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        var daily = [];
        var blessings = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'].includes(selectedSeasonId)) {
                if (data[i]['id'].includes("chest_daily")) {
                    for (const reward of data[i]['chances']) {
                        var item = {};
                        item['type'] = reward['type'];
                        item['subType'] = reward['subType'];
                        item['amount'] = reward['amount'];
                        item['percentage'] = reward['percentage'];
                        daily.push(item);
                    }
                } else if (/^reward_pool_event_chest_[a-z]_/.test(data[i]['id'])) {
                    var bless = {};
                    bless['id'] = data[i]['id'];
                    bless['rewards'] = [];
                    for (const reward of data[i]['chances']) {
                        var item = {};
                        item['type'] = reward['type'];
                        item['subType'] = reward['subType'];
                        item['amount'] = reward['amount'];
                        item['percentage'] = reward['percentage'];
                        bless['rewards'].push(item);
                    }
                    blessings.push(bless);
                }
            }
        }
        result['daily'] = daily;
        result['blessings'] = blessings;
        console.log(result)
        saveJSON( JSON.stringify(result), "seasonsChests.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateResearch() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('research').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    var section = document.getElementById("research_section").value;
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data.length; i++) {
            if (data[i]["section"] == section && data[i]["race"] == "elves") {
                var technology = {};
                technology['id'] = data[i]['id'];
                technology['name'] = data[i]['name'];
                technology['race'] = data[i]['race'];
                technology['kp'] = data[i]['maxSP'];
                technology['requirements'] = [];
                for (const [key, value] of Object.entries(data[i]['requirements']['resources'])) {
                    if (key !== '__class__') {
                        var requirement = {};
                        requirement[key] = value;
                        technology['requirements'].push(requirement);
                    }
                }
                technology['parentIds'] = [];
                for (const parentId of data[i]['parentIds']) {
                    technology['parentIds'].push(parentId);
                }
                technology['childrenIds'] = [];
                if (data[i]['childrenIds']) {
                    for (const childrenId of data[i]['childrenIds']) {
                        technology['childrenIds'].push(childrenId);
                    }
                }
                technology['section'] = section;
                result.push(technology);
            }
        }
        console.log(result)
        saveJSON( JSON.stringify(result), "research.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function sortJSONBuildings() {  //unused
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('sortBuildings').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        data = data.filter(obj => obj.id.startsWith('A_Evt_'));

        const groupedData = {};
        data.forEach(obj => {
            const name = obj.id.split('_').slice(4, -1).join('_');
            if (!groupedData[name]) {
                groupedData[name] = [];
            }
            groupedData[name].push(obj);
        });

        Object.keys(groupedData).forEach(name => {
            groupedData[name].sort((a, b) => {
                const numA = parseInt(a.id.match(/\d+$/)[0]);
                const numB = parseInt(b.id.match(/\d+$/)[0]);
                return numA - numB;
            });
        });

        data = Object.values(groupedData).flat();
        
        result = data;

        console.log(result)
        saveJSON( JSON.stringify(result), "buildings.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateTomes() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('tomes').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        let result = [];
        
        for (let i = 0; i < data.length; i++) {
            if (data[i]["__class__"] === "RewardSelectionKitVO") {
                let object = {};
                object['name'] = data[i]['name'];
                object['description'] = data[i]['description'];
                object['iconId'] = data[i]['iconId'];
                object['id'] = data[i]['id'];
                object['rewards'] = [];
                for (let j = 0; j < data[i]['rewards'].length; j++) {
                    let rewObject = {};
                    rewObject['type'] = data[i]['rewards'][j]['type'];
                    if (rewObject['type'] === "building") {
                        rewObject['subType'] = data[i]['rewards'][j]['subType'].split("$")[0];
                    } else {
                        rewObject['subType'] = data[i]['rewards'][j]['subType'];
                    }
                    rewObject['amount'] = data[i]['rewards'][j]['amount'];
                    object['rewards'].push(rewObject);
                }
                result.push(object);
            }
        }

        console.log(result)
        saveJSON( JSON.stringify(result), "tomes.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateQuestsAuto() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('quests_auto').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var event_id = document.getElementById("quests_event_id").value;
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result)["allQuests"];
        let result = [];
        let lastId = null;
        let questGathered = {};
        let range = null;
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].hasOwnProperty('subType') && data[i]['subType'].includes(event_id) && !data[i]['title'].includes('Daily Event Reward')) {
                if ((lastId === null || data[i]['rawTriggerCondition'].includes(lastId)) && (range === null || range.includes('MAX'))) { //pridanie druhej casti AND-u je len rychla oprava, aby sa pri vypisani questov do konzoly nedal kazdy range na samostatny riadok
                    lastId = data[i]['id'];                                                                                              //nemusi to fungovat ak by sa v buducnosti zmenilo poradie uloh a ulohy s range == n-MAX neboli posledne
                    if (Object.keys(questGathered).length !== 0) {
                        result.push(questGathered);
                        //console.log(questGathered);
                    }
                    questGathered = {};
                }
                let triggerConditions = data[i]['rawTriggerCondition'].split(/\b(?:AND|OR)\b/).filter(item => !item.includes('running')).filter(item => !item.includes('login'));
                range = calculateChapterRange(triggerConditions);
                questGathered[range] = [];

                var number_of_conditions = data[i]['successConditions'].length;
                var relations = new Set();
                for (let index = 0; index < data[i]['successConditions'].length; index++) {
                    const condition = data[i]['successConditions'][index];
                    var task_desc = condition['description'];
                    var task_raw = condition['rawSuccessCondition'];
                    if (task_raw.includes('money')) {
                        questGathered[range].push('MINCE');
                    } else if (task_raw.includes('craft_payback')) {
                        var value = extractOneNumber(task_raw);
                        var max_value = condition['maxProgress'];
                        questGathered[range].push('OPAR_VIDENI("'+value+'-'+max_value+'")');
                    } else if (task_raw.includes('strategypoints') && task_raw.includes('buy')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VB_KUP('+value+')');
                    } else if (task_raw.includes('strategypoints') && task_raw.includes('spend')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VB_UTRAT('+value+')');
                    } else if (task_raw.includes('neighbourlyhelp')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VYPOMOC('+value+')');
                    } else if (task_raw.includes('npc_trader')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('OBCHODNIK('+value+')');
                    } else if (task_raw.includes('ancientwonder')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VLOZ_VB('+value+')');
                    } else if (task_desc.includes('Beverages')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('NAPOJE('+value+')');
                    } else if (task_desc.includes('Simple Tools')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('OBYCEJNE_NASTROJE('+value+')');
                    } else if (task_desc.includes('Loaves of Bread')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('CHLEB('+value+')');
                    } else if (task_desc.includes('Advanced Tools')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('POKROCILE_NASTROJE('+value+')');
                    } else if (task_desc.includes('Baskets of Groceries')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('KOSIK_JIDLA('+value+')');
                    } else if (task_desc.includes('Toolbox')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('SADA_NASTROJU('+value+')');
                    } else if (task_desc.includes('Relics')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('RELIKVIE('+value+')');
                    } else if (task_desc.includes('units')) {
                        questGathered[range].push('JEDNOTKY');
                    } else if (task_desc.includes('Magic Academy')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('CARODEJNICKE_BODY('+value+')');
                    } else if (task_desc.includes('Supplies')) {
                        questGathered[range].push('ZASOBY');
                    } else if (task_desc.includes('Create Enchantments')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ZISKEJ_KOUZLA('+value+')');
                    } else if (task_desc.includes('Use Enchantments') && !task_desc.includes('Gain')) {
                        var value = extractOneNumber(task_raw);
                        var max_value = condition['maxProgress'];
                        questGathered[range].push('POUZIJ_KOUZLA(\"'+value+'-'+max_value+'\")');
                    } else if (task_raw.includes('spells_enchantments') && task_raw.includes('gain') && task_raw.includes('use')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ZISKEJ_POUZIJ_KOUZLA('+value+')');
                    } else if (task_desc.includes('Research')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VYSKOUMEJ_TECHNOLOGII('+value+')');
                    } else if (task_desc.includes('Upgrade')) {
                        var value = extractWithCount(task_raw);
                        questGathered[range].push('VYLEPSI_BUDOVY_LVL_5('+value+')');
                    } else if (task_desc.includes('Negotiate Province Encounter')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('STRETY_NA_MAPE_VYJEDNAVANIM('+value+')');
                    } else if (task_desc.includes('Combining Catalyst') && task_desc.includes('Gain')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ZISKEJ_SPOJOVACI_CINIDLO('+value+')');
                    } else if (task_desc.includes('Combining Catalyst') && task_desc.includes('Spend')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('POUZIJ_SPOJOVACI_CINIDLO('+value+')');
                    } else if (task_desc.includes('Produce a good amount of Goods of your choice')) {
                        questGathered[range].push('ZBOZI_LIBOVOLNE');
                    } else if (task_desc.includes('Produce a good amount of Basic Goods')) {
                        questGathered[range].push('ZBOZI_ZAKLADNE');
                    } else if (task_desc.includes('Produce Any Goods of your choice using the 9-hour option')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('PRODUKT_9H_LIBOVOLNY('+value+')');
                    } else if (task_desc.includes('Spell Fragments')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ULOMKY_KOUZEL('+value+')');
                    } else if (task_desc.includes('Time Booster Spell')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ZESILOVAC('+value+')');
                    } else if (task_desc.includes('Produce Any Goods of your choice using the 3-hour option')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('PRODUKT_3H_LIBOVOLNY('+value+')');
                    } else if (task_desc.includes('Fight and win Province Encounter')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('STRETY_NA_MAPE_BOJEM('+value+')');
                    } else if (task_desc.includes('Scout Provinces')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('PRESKOUMEJ_PROVINCII('+value+')');
                    } else if (task_desc.includes('Produce Basic Goods of your choice using the 9-hour option')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('PRODUKT_9H_ZAKLADNY('+value+')');
                    } else if (task_desc.includes('Produce Basic Goods of your choice using the 3-hour option')) {
                        var value = extractMultipleWithTimes(task_raw);
                        questGathered[range].push('PRODUKT_3H_ZAKLADNY('+value+')');
                    } else if (task_desc.includes('Solve Province, Tournament and/or Spire Encounter')) {
                        var value = extractWithCount(task_raw);
                        questGathered[range].push('STRETY_LIBOVOLNE('+value+')');
                    } else if (task_desc.includes('Finish')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VYRES_PROVINCII('+value+')');
                    } else if (task_desc.includes('Use Instant')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('POZEHNANI('+value+')');
                    } else if (task_desc.includes('Use Supply Windfall')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('PRIDEL_ZASOB('+value+')');
                    } else if (task_desc.includes('Place Trade Offer')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('VYTVOR_PONUKU('+value+')');
                    } else if (task_raw.includes('accept trade_offer')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('PRIJMI_PONUKU('+value+')');
                    } else if (task_desc.includes('Use Pet Food')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('KRMENI('+value+')');
                    } else if (task_desc.includes('Use Coin Rain')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('DEST_MINCI('+value+')');
                    } else if (task_raw.includes('gain') && task_raw.includes('orcs')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('ORKOVIA');
                    } else if (task_raw.includes('gain') && task_raw.includes('mana')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('MANA');
                    } else if (task_raw.includes('gain') && task_raw.includes('seeds')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('SEMINKA');
                    } else if (task_raw.includes('gain') && task_raw.includes('unurium')) {
                        var value = extractOneNumber(task_raw);
                        questGathered[range].push('UNURIUM');
                    } else if (task_desc.includes('Collect a good amount of Sentient Goods of your choice')) {
                        questGathered[range].push('ZBOZI_ZIVOUCI');
                    } else if (task_desc.includes('Collect a good amount of Ascended Goods of your choice')) {
                        questGathered[range].push('ZBOZI_OSVICENE');
                    
                    } else {
                        console.log(`Not handled quest:\n'${task_desc}'\n'${task_raw}'`);
                    }

                    if (index !== number_of_conditions - 1) {
                        if (condition['relation'] === "") {
                            questGathered[range].push('AND');
                        } else if (condition['relation'].includes('or') && !relations.has(condition['relation'])) {
                            questGathered[range].push('OR');
                            relations.add(condition['relation']);
                        } else if (condition['relation'].includes('or') && relations.has(condition['relation'])) {
                            questGathered[range].push('AND');
                        }
                    }
                }
                questGathered[range].push(data[i]['rewards'][0]['amount']);
                if (data[i+1]['title'].includes('Daily Event Reward')) {
                    result.push(questGathered);
                    //console.log(questGathered);
                    break;
                }
            }
        }

        console.log('worth implementing remaining quests based on task_raw not task_desc');
        //console.log(result);
        var txtResult = `[`;
        for (let item = 0; item < result.length; item++) {
            txtResult += `{`;
            let keyIndex = 0;
            for (const key in result[item]) {
                keyIndex++;
                txtResult += `"${key}":`;
                var value = result[item][key];
                txtResult += `[${value}]`;
                if (keyIndex !== Object.keys(result[item]).length) {
                    txtResult += `,`;
                }

            }
            txtResult += `}`;
            if (item !== result.length - 1) {
                txtResult += `,\n`;
            }
        }
        txtResult += `]`;
        console.log(txtResult)
        const jsonString = JSON.stringify(result);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'quests_auto.txt';
        document.body.appendChild(link);
        //link.click();
        document.body.removeChild(link);
        create_exception("Data Generated!",10,'success');
    }
}

function extractOneNumber(input) {
    const match = input.match(/\d+/);
    const value = match ? parseInt(match[0]) : null;
    return value;
}

function extractMultipleWithTimes(input) {
    const matches = input.match(/(\d+) times/g);
    if (matches) {
      const firstMatch = matches[0];
      const extractedNumber = parseInt(firstMatch);
      return extractedNumber;
    }
    return null;
}

function extractWithCount(input) {
    const match = input.match(/count (\d+)/);
    if (match) {
      const extractedNumber = parseInt(match[1]);
  
      return extractedNumber;
    }
    return null;
}

function calculateChapterRange(conditions) {
    let directions = [];
    const regex = /\b\d{6}\b/;
    for (let i = 0; i < conditions.length; i++) {
        if (!regex.test(conditions[i])) {
            let c = conditions[i];
            if (c.includes('NOT')) {
                if (c.includes('wealth_l_3')) {
                    directions.push("<4");
                } else if (c.includes('all1_aw')) {
                    directions.push("<4");
                } else if (c.includes('orcs_aw')) {
                    directions.push("<9");
                } else if (c.includes('gr4_aw')) {
                    directions.push("<10");
                } else if (c.includes('gr6_aw')) {
                    directions.push("<12");
                } else if (c.includes('main_hall_ch17_39')) {
                    directions.push("<18");
                } else if (c.includes('gr7_aw')) {
                    directions.push("<13");
                } else if (c.includes('barracks_ch19')) {
                    directions.push("<19");
                } else if (c.includes('cauldron')) {
                    directions.push("<6");
                } else if (!c.includes('has race humans') && !c.includes('has race elves')){
                    console.log(`not recognized condition: ${c}`);
                }
            } else {
                if (c.includes('wealth_l_3')) {
                    directions.push(">3");
                } else if (c.includes('all1_aw')) {
                    directions.push(">3");
                } else if (c.includes('orcs_aw')) {
                    directions.push(">8");
                } else if (c.includes('gr4_aw')) {
                    directions.push(">9");
                } else if (c.includes('gr6_aw')) {
                    directions.push(">11");
                } else if (c.includes('main_hall_ch17_39')) {
                    directions.push(">17");
                } else if (c.includes('gr7_aw')) {
                    directions.push(">12");
                } else if (c.includes('barracks_ch19')) {
                    directions.push(">18");
                } else if (c.includes('cauldron')) {
                    directions.push(">5");
                } else if (!c.includes('has race humans') && !c.includes('has race elves')){
                    console.log(`not recognized condition: ${c}`);
                }
            }
        }
    }
    return generateChapterRange(directions);
}

function generateChapterRange(inputArray) {
    if (inputArray.length === 0) {
        return `1-MAX`;
    }

    let minChapter = 1;
    let maxChapterRange = numberOfChapters;

    for (const condition of inputArray) {
        if (condition.startsWith(">")) {
            const threshold = parseInt(condition.slice(1), 10);
            minChapter = Math.max(minChapter, threshold + 1);
        } else if (condition.startsWith("<")) {
            const threshold = parseInt(condition.slice(1), 10);
            maxChapterRange = Math.min(maxChapterRange, threshold - 1);
        }
    }

    return `${minChapter}-${maxChapterRange === numberOfChapters ? 'MAX' : maxChapterRange}`;
}

function generateEventPrizes() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('seasonal_event').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = [];
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        let result = {};
        let grandPrizes = [];
        let royalPrizes = [];
        for (let i = 0; i < data[0].components.length; i++) {
            if (data[0].components[i].__class__ === "RoyalPassPrizesComponentVO") {
                let grandPrizesArray = data[0].components[i].grandPrizeRewards;
                let royalPrizesArray = data[0].components[i].royalPrizeRewards;
                console.log(grandPrizesArray, data[0].components[i]);
                for (let g = 0; g < grandPrizesArray.length; g++) {
                    console.log("GPS: ", grandPrizesArray[g]);
                    let gpObject = {};
                    gpObject['type'] = grandPrizesArray[g].reward['type'];
                    gpObject['subType'] = grandPrizesArray[g].reward['subType'];
                    gpObject['amount'] = grandPrizesArray[g].reward['amount'];
                    gpObject['delta'] = grandPrizesArray[g]['delta'];
                    gpObject['iterable'] = grandPrizesArray[g]['iterable'] ? grandPrizesArray[g]['iterable'] : false;
                    grandPrizes.push(gpObject);
                }
                for (let r = 0; r < royalPrizesArray.length; r++) {
                    let rpObject = {};
                    rpObject['type'] = royalPrizesArray[r].reward['type'];
                    rpObject['subType'] = royalPrizesArray[r].reward['subType'];
                    rpObject['amount'] = royalPrizesArray[r].reward['amount'];
                    rpObject['delta'] = royalPrizesArray[r]['delta'];
                    rpObject['iterable'] = royalPrizesArray[r]['iterable'] ? royalPrizesArray[r]['iterable'] : false;
                    royalPrizes.push(rpObject);
                }
            }
        }
        result['grandPrizes'] = grandPrizes;
        result['royalPrizes'] = royalPrizes;

        console.log(result)
        saveJSON( JSON.stringify(result), "eventsPrizes.json" );
        create_exception("Data Generated!",10,'success');
    }
}

function generateEventLeagues() {
    create_exception("Generating...", 10000, 'primary')
    let file = document.getElementById('seasonal_event_leagues').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var result = {};
    reader.onload = function () {
        let data = JSON.parse(reader.result);
        for (let i = 0; i < data[0].components.length; i++) {
            if (data[0].components[i].__class__ === "EventLeagueComponentVO") {
                let dbLeagues = data[0].components[i].eventLeagueConfigs;
                for (let league = 0; league < dbLeagues.length; league++) {
                    result[dbLeagues[league]['name']] = [];
                    for (let reward = 0; reward < dbLeagues[league]['rewards'].length; reward++) {
                        let rewObject = {};
                        rewObject['type'] = dbLeagues[league]['rewards'][reward]['type'];
                        rewObject['subType'] = dbLeagues[league]['rewards'][reward]['subType'];
                        rewObject['amount'] = dbLeagues[league]['rewards'][reward]['amount'];
                        result[dbLeagues[league]['name']].push(rewObject);
                    }
                }
                result['description'] = data[0].components[i]['description'];
            }
        }

        console.log(result)
        saveJSON( JSON.stringify(result), "eventsLeagues.json" );
        create_exception("Data Generated!",10,'success');
    }
}