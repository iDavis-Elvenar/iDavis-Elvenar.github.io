
function handleBuildingsJSON() {
    create_exception("Generating...",10000,'primary')
    let file = document.getElementById('myFile').files[0];
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

        for (let i = 0; i < allBuildings.length; i++) {
            if (allBuildings[i]['level'] === 1) {
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
                                    if (allBuildings[l]['production']['products'][product]['revenue']['resources'].hasOwnProperty(prioritiesProduction[p2])) {
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
                //console.log(setOfAllProductions);
                var arrayOfProductions = Array.from(setOfAllProductions);
                var allDifferentProductions = orderByPriorities(arrayOfProductions);
                b['all_productions'] = allDifferentProductions;
                levelsFound = 0;
                for (var k = i; k < allBuildings.length; k++) {
                    if (allBuildings[k]['id'].includes(b['id'])) {
                        var currentLevel = parseInt(allBuildings[k]['level']);
                        var currentLevelString = currentLevel.toString();
                        b['chapters'][currentLevelString] = {};
                        for (var prod = 0; prod < allDifferentProductions.length; prod++) {
                            if (prioritiesNonProduction.includes(allDifferentProductions[prod])) {
                                var t = {};
                                t['value'] = allBuildings[k][allDifferentProductions[prod]];
                                b['chapters'][currentLevelString][allDifferentProductions[prod]] = t;
                            } else if (prioritiesProduction.includes(allDifferentProductions[prod])) {
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



