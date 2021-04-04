console.log(localStorage.getItem("lang"))

let ui = {
    "en" : {},
        /*"Building type:" : "Building type:",
        "Construction time:" : "Construction time:",
        "Size:" : "Size:",
        "Set building" : "Set building:",
        "Expiring:" : "Expiring:",
        "Upgrade costs:": "Upgrade costs:"*/
    "cz" : {
        "Building type:" : "Typ budovy:",
        "Construction time:" : "Čas výstavby:",
        "Size:" : "Veľkosť:",
        "Set building:" : "Súčasťou setu:",
        "Expiring:" : "Dočasný efekt:",
        "Upgrade costs:" : "Navýšení stupně:",
        "Chapter / Bonus" : "Kapitola / Bonus",
        "Introduced in event:" : "Zavedené v udalosti:",
        "Filter production:" : "Filter produkcie:",
        "Order By:" : "Usporiadať podľa:",
        "For chapter:" : "Pre kapitolu:",
        "Filter soon:" : "Čoskoro:",
        "Select event:" : "Udalosť:",
        "Order daily prizes by:" : "Usporiadať odmeny podľa:",
        "Daily Prizes Calendar" : "Kalendář odměn",
        "day" : "deň",
        "Event Video" : "Video k události",
        "Day" : "Deň",
        "Calendar" : "Kalendár",
        "Generate Daily Prizes" : "Generuj denné odmeny",
        "Filter & Generate" : "Filtruj a Generuj",
        "Home" : "Domov",
        "All Buildings" : "Všetky budovy",
        "All Events" : "Všetky udalosti"
    }
}

function langUI(key) {
    if (localStorage.getItem("lang") !== null && ui[localStorage.getItem("lang")].hasOwnProperty(key)) {
        return ui[localStorage.getItem("lang")][key];
    } else {
        return key;
    }
}