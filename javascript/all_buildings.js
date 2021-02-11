var numberOfChapters = 17;
var chapters = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII'
}

function readBuildingsJSON() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    //tieto 3 riadky vyssie su kopiou z exception_handler.js > onload funkcie, kedze all_buildings.html > body onload
    //to berie prioritne
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();
    $.get('database/buildings.json')
        .done(data => {
            //HANDLE FILTERS
            console.log("APEBECA")
            var eventSelect = document.getElementById('input_event');
            var filterEventData = eventSelect.options[eventSelect.selectedIndex].value;
            var productionSelect = document.getElementById('input_production');
            var filterProductionData = productionSelect.options[productionSelect.selectedIndex].value;
            var appearancesCheckbox = document.getElementById('includeAppearances');
            var includeAppearances = appearancesCheckbox.checked;


            document.getElementById('column_with_tables').innerHTML = ``;
            var filteredData = [];
            for (var i = 0; i < data.length; i++) {
                if ((filterEvent(filterEventData, data[i]) && filterProduction(filterProductionData, data[i])) ||
                    (includeAppearances && hasAppearance(filterEventData, data[i]))) {
                    filteredData.push(data[i]);
                }
            }
            if (includeAppearances) {
                //SORT BY DAY OF APPEARANCE
                for (var j = 0; j < filteredData.length; j++) {
                    for (var k = 0; k < filteredData.length-1; k++) {
                        if (filteredData[k]['appearances'][filterEventData] > filteredData[k+1]['appearances'][filterEventData]) {
                            let temp = filteredData[k];
                            filteredData[k] = filteredData[k+1];
                            filteredData[k+1] = temp;
                        }
                    }
                }
            }
            for (var i = 0; i < filteredData.length; i++) {
                var h5 = document.createElement('h5');
                h5.id = filteredData[i]['id'];
                h5.className = "card-title text-center text-title font-weight-bold";
                h5.style.textAlign = "left";
                h5.innerHTML = `${filteredData[i]['name']}<br>`;
                document.getElementById('column_with_tables').appendChild(h5);
                var div = document.createElement('div');
                div.className = 'bbTable';
                div.style.marginBottom = "20px";
                var firstTable = document.createElement('table');
                firstTable.className = 'table-primary';
                firstTable.style.width = "100%";
                var t1body = document.createElement('tbody');
                var t1r = document.createElement('tr');
                var td11 = document.createElement('td');
                td11.style.width = "60%";
                td11.innerHTML = `<img src="${filteredData[i]['image']}">`;
                var td12 = document.createElement('td');
                td12.style.width = "40%";
                td12.innerHTML = `<b>Typ budovy:</b> ${filteredData[i]['type']}<br>
                                    <b>Čas výstavby:</b> ${filteredData[i]['construction_time']}<br>
                                    <b>Veľkosť:</b> ${filteredData[i]['width']}x${filteredData[i]['length']}<br>
                                    <b>Súčasťou setu:</b> -<br>
                                    <b>Dočasný efekt:</b> -<br>
                                    <b>Dostupnosť:</b> ???`;
                t1r.appendChild(td11);
                t1r.appendChild(td12);
                t1body.appendChild(t1r);
                firstTable.appendChild(t1body);
                div.appendChild(firstTable);

                var secondTable = document.createElement('table');
                secondTable.className = 'table-primary text-center';
                secondTable.style.width = "100%";
                var t2body = document.createElement('tbody');
                var tr21 = document.createElement('tr');
                for (var h = 0; h < numberOfChapters + 1; h++) {
                    var th = document.createElement('th');
                    if (h === 0) {
                        th.innerHTML = `Kapitola / Bonus`;
                    } else {
                        th.innerHTML = `<img src=${chapter_icons[h]}>`;
                    }
                    tr21.appendChild(th);
                }
                t2body.appendChild(tr21);
                for (var prod = 0; prod < filteredData[i]['all_productions'].length; prod++) {
                    var tr = document.createElement('tr');
                    for (var ch = 0; ch < numberOfChapters + 1; ch++) {
                        var td = document.createElement('td');
                        if (ch === 0) {
                            td.innerHTML = `${goods_icons[filteredData[i]['all_productions'][prod]]}`;
                            if (filteredData[i]['all_productions'][prod] != 'providedCulture' &&
                                filteredData[i]['all_productions'][prod] != 'provided_population') {
                                //tymto for cyklom hladam ten chapter, v ktorom je ta produkcia, ktorej cas chcem zistit
                                for (var chPom = 1; chPom < numberOfChapters + 1; chPom++) {
                                    if (filteredData[i]['chapters'][chPom].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                        td.innerHTML += `${filteredData[i]['earlyPickupTime'] / 60 / 60}h / <b>${filteredData[i]['chapters'][chPom][filteredData[i]['all_productions'][prod]]['production_time'] / 60 / 60}h</b>`;
                                        break;
                                    }
                                }
                            }
                        } else {
                            if (filteredData[i]['chapters'][ch].hasOwnProperty(filteredData[i]['all_productions'][prod])) {
                                if (typeof filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]] === 'object') {
                                    td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]['value']}`;
                                } else {
                                    td.innerHTML = `${filteredData[i]['chapters'][ch][filteredData[i]['all_productions'][prod]]}`;
                                }
                            } else {
                                td.innerHTML = `-`;
                            }
                        }
                        tr.appendChild(td);
                    }
                    t2body.appendChild(tr);
                }
                secondTable.appendChild(t2body);
                div.appendChild(secondTable);
                document.getElementById('column_with_tables').appendChild(div);
                create_exception("Buildings Generated!", 3, 'success');
            }
        })
    //td.innerHTML = `<img src="https://image.ibb.co/g5ErZq/money.png"+<br>`;
}

function filterEvent(filterData, objectToPass) {
    if (filterData.includes('all')) {
        return true;
    }
    return objectToPass['id'].toLowerCase().includes(filterData.toLowerCase());
}

function filterProduction(filterData, objectToPass) {
    if (filterData.includes('all')) {
        return true;
    }
    var filterDataSplit = filterData.split(",");
    if (filterDataSplit[0] === 'only') {
        var neededToPass = filterDataSplit.length-1;
        if (neededToPass != objectToPass['all_productions'].length) {
            return false;
        }
        for (var i = 1; i < filterDataSplit.length; i++) {
            for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                if (filterDataSplit[i] === objectToPass['all_productions'][j]) {
                    neededToPass--;
                }
            }
        }
        return neededToPass === 0;
    } else {
        var neededToPass = filterDataSplit.length;
        for (var i = 0; i < filterDataSplit.length; i++) {
            for (var j = 0; j < objectToPass['all_productions'].length; j++) {
                if (filterDataSplit[i] === objectToPass['all_productions'][j]) {
                    neededToPass--;
                }
            }
        }
        return neededToPass === 0;
    }
}

function hasAppearance(filterData, objectToPass) {
    return objectToPass['appearances'].hasOwnProperty(filterData);
}

//readBuildingsJSON();

var goods_icons = {
    "providedCulture": "<img src='https://image.ibb.co/mEtRZq/culture.png'>",
    "provided_population": "<img src='https://image.ibb.co/ipAZLV/population.png'>",
    "money": "<img src='https://image.ibb.co/g5ErZq/money.png'><br>",
    "supplies": "<img src='https://image.ibb.co/gtNH7A/supplies.png'><br>",
    "marble": "<img src='https://i.ibb.co/mtYStcp/good-marble-big.png'><br>",
    "steel": "<img src='https://i.ibb.co/Lds7D9z/good-steel-big.png'><br>",
    "planks": "<img src='https://i.ibb.co/r38GcfT/good-planks-big.png'><br>",
    "crystal": "<img src='https://i.ibb.co/C88GHJF/good-crystal-big.png'><br>",
    "scrolls": "<img src='https://i.ibb.co/hsNXDsb/good-scrolls-big.png'><br>",
    "silk": "<img src='https://i.ibb.co/PcLs9hT/good-silk-big.png'><br>",
    "elixir": "<img src='https://i.ibb.co/VDtDYD1/good-elixir-big.png'><br>",
    "magic_dust": "<img src='https://i.ibb.co/S3HKY7j/good-magic-dust-big.png'><br>",
    "gems": "<img src='https://i.ibb.co/QCHg8Y5/good-gems-big.png'><br>",
    "boosted_plus_0_quality_1": "<img src='https://i.ibb.co/gvPd8Mv/boosted-plus-0-quality-1.png'><br>",
    "boosted_plus_0_quality_2": "<img src='https://i.ibb.co/cgSyp4Z/boosted-plus-0-quality-2.png'><br>",
    "boosted_plus_0_quality_3": "<img src='https://i.ibb.co/r4fRKKq/boosted-plus-0-quality-3.png'><br>",
    "boosted_plus_1_quality_1": "<img src='https://image.ibb.co/bVDVDV/goods-quality-1-plus-1.png'><br>",
    "boosted_plus_2_quality_1": "<img src='https://i.ibb.co/sHDVsM0/goods-quality-1-plus-2.png'><br>",
    "boosted_plus_1_quality_2": "<img src='https://i.ibb.co/2NC7h3q/goods-quality-2-plus-1.png'><br>",
    "boosted_plus_2_quality_2": "<img src='https://i.ibb.co/dMHH2Ns/goods-quality-2-plus-2.png'><br>",
    "boosted_plus_1_quality_3": "<img src='https://image.ibb.co/fOAi4f/goods-quality-3-plus-1.png'><br>",
    "boosted_plus_2_quality_3": "<img src='https://i.ibb.co/9qqkPBC/goods-quality-3-plus-2.png'><br>",
    "orcs": "<img src='https://i.ibb.co/Hn5W8XF/orcs.png'><br>",
    "mana": "<img src='https://image.ibb.co/bzd1Zq/mana.png'><br>",
    "seeds": "<img src='https://image.ibb.co/c9JtEq/seeds.png'><br>",
    "sentientmarble": "<img src='https://i.ibb.co/wRN3HJP/sentient-marble.png'><br>",
    "sentientsteel": "<img src='https://i.ibb.co/wB410LW/sentient-steel.png'><br>",
    "sentientplanks": "<img src='https://i.ibb.co/HqmkSDk/sentient-wood.png'><br>",
    "sentientcrystal": "<img src='https://i.ibb.co/Gs7Gqgj/sentient-crystal.png'><br>",
    "sentientscrolls": "<img src='https://i.ibb.co/Y0Md5dV/sentient-scrolls.png'><br>",
    "sentientsilk": "<img src='https://i.ibb.co/wznTtMS/sentient-silk.png'><br>",
    "sentientelixir": "<img src='https://i.ibb.co/LzqV8H3/sentient-elixir.png'><br>",
    "sentientmagic_dust": "<img src='https://i.ibb.co/MRCdFKn/sentient-dust.png'><br>",
    "sentientgems": "<img src='https://i.ibb.co/sWNdPJx/sentient-gems.png'><br>",
    "boosted_sentient_plus_0_quality_1": "<img src='https://i.ibb.co/Lv4NLsx/boosted-sentient-quality-1-mini.png'><br>",
    "boosted_sentient_plus_1_quality_1": "<img src='https://i.ibb.co/H448DrP/boosted-sentient-quality-1-plus-1-mini.png'><br>",
    "boosted_sentient_plus_2_quality_1": "<img src='https://i.ibb.co/CJgvwGW/boosted-sentient-quality-1-plus-2-mini.png'><br>",
    "boosted_sentient_plus_0_quality_2": "missing img",
    "boosted_sentient_plus_1_quality_2": "missing img",
    "boosted_sentient_plus_2_quality_2": "missing img",
    "boosted_sentient_plus_0_quality_3": "missing img",
    "boosted_sentient_plus_1_quality_3": "missing img",
    "boosted_sentient_plus_2_quality_3": "missing img",
    "unurium": "missing img",
    "knowledge_points": "<img src='https://i.ibb.co/CB7JkFY/knowledge-points-new.png'><br>",
    "broken_shards": "<img src='https://i.ibb.co/ZMBLJS3/broken-shard.png'><br>",
    "ins_rf_cn_5": "5%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_10": "10%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_15": "15%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_20": "20%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_25": "25%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_33": "33%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_50": "50%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_cn_100": "100%<br><img src='https://image.ibb.co/dJs520/coin-rain.png'><br>",
    "ins_rf_spl_5": "5%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_10": "10%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_15": "15%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_20": "20%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_25": "25%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_33": "33%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_50": "50%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_spl_100": "100%<br><img src='https://image.ibb.co/c8e7FL/supply-windfall.png'><br>",
    "ins_rf_grr_5": "5%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_10": "10%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_15": "15%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_20": "20%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_25": "25%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_33": "33%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_50": "50%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_rf_grr_100": "100%<br><img src='https://i.ibb.co/vvxT5fD/ins-grr.png'><br>",
    "ins_kp_aw_1": "1 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_3": "3 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_5": "5 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_7": "7 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_10": "10 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_15": "15 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_20": "20 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_kp_aw_30": "30 VB<br><img src='https://image.ibb.co/mqSKvL/ancient-knowledge.png'><br>",
    "ins_rs_1": "<img src='https://i.ibb.co/s6kzbrx/ins-rs.png'><br>",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": ""
}

var chapter_icons = {
    1: "https://i.ibb.co/kQF5s0q/ch1.png",
    2: "https://i.ibb.co/DfkmS1H/ch2.png",
    3: "https://i.ibb.co/mFkxVRb/ch3.png",
    4: "https://i.ibb.co/TcDB1Vx/ch4.png",
    5: "https://i.ibb.co/F61wRpp/ch5.png",
    6: "https://i.ibb.co/qYDnBNk/ch6.png",
    7: "https://i.ibb.co/7yHBTJV/ch7.png",
    8: "https://i.ibb.co/sWcQSrp/ch8.png",
    9: "https://i.ibb.co/tsm2HCs/ch9.png",
    10: "https://i.ibb.co/sqkZ7FN/ch10.png",
    11: "https://i.ibb.co/D4sgMFf/ch11.png",
    12: "https://i.ibb.co/KVrY4M2/ch12.png",
    13: "https://i.ibb.co/Sx7bcfG/ch13.png",
    14: "https://i.ibb.co/5h3nr8K/ch14.png",
    15: "https://i.ibb.co/mbhNzvt/ch15.png",
    16: "https://i.ibb.co/qjFYznn/ch16.png",
    17: "https://i.ibb.co/W5CtfR2/ch17.png"
}