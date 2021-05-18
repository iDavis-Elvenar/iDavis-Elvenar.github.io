console.log(localStorage.getItem("lang"))

let ui = {
    "en" : {},
    "cz" : {
        //UI
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
        "All Events" : "Všetky udalosti",
        "Chapter / Connection": "Kapitola / Spojenie",
        "building": "budova",
        "Search:": "Hľadať:",
        "Start typing...": "Začni písať...",
        "You can search buildings by typing their name.": "Vyhľadávať budovy môžeš podľa ich názvu.",
        //EVENTS
        "Sorcerers' Homecoming (available soon)":"Sorcerers' Homecoming (čoskoro)",
        "Queen Fairy's Garden":"Zahrada královny víl",
        "Rise of the Phoenix Cult":"Vzestup kultu fénixe",
        "Elvarian Carnival":"Elvarianský karneval",
        "Winter Magic - The Snow Owl":"Kouzlo zimy",
        "The Mistery of the Misty Forest":"Mlžný les",
        "Autumn Zodiac":"Podzimní zvířetník",
        "Sorcerers' Pilgrimage":"Pouť kouzelníků",
        "The Air Traders' Voyage":"Cesty vzdušných obchodníků",
        "May Celebrations":"Májové slavnosti",
        "Gathering of the Phoenix Cults":"Shromáždění kultů fénixe",
        "Elvarian Carnival":"Elvarianský karneval",
        "Winter Magic":"Kouzlo zimy",
        "Dr. Freakenspleen":"Dr. Šraňkenstein",
        "Autumn Zodiac":"Podzimní zvířetník",
        "Summer Mermaids":"Letní mořské panny",
        "The Queen of the Seas":"Královna moří",
        "Summer Solstice":"Letní slunovrat",
        "Older":"Staršie",
        "All":"Všetky"
    },

    "de" : {
        //UI
        "Building type:" : "Gebäudetyp:",
        "Construction time:" : "Ausbauzeit:",
        "Size:" : "Größe:",
        "Set building:" : "Teil eines Sets:",
        "Expiring:" : "Läuft ab:",
        "Upgrade costs:" : "Upgrade-Kosten:",
        "Chapter / Bonus" : "Kapitel / Bonus",
        "Introduced in event:" : "Eingeführt im Event:",
        "Filter production:" : "Filterproduktion:",
        "Order By:" : "Sortieren nach:",
        "For chapter:" : "Für Kapitel:",
        "Filter soon:" : "Filter bald:",
        "Select event:" : "Ereignis Event:",
        "Order daily prizes by:" : "Bestellen tägliche Preise bei:",
        "Daily Prizes Calendar" : "Täglicher Preiskalender",
        "day" : "Tag",
        "Event Video" : "Event Video",
        "Day" : "Tag",
        "Calendar" : "Kalender",
        "Generate Daily Prizes" : "Generieren tägliche Preise",
        "Filter & Generate" : "Filtern & Generieren",
        "Home" : "Main",
        "All Buildings" : "Alle Gebäude",
        "All Events" : "Alle Events",
        "Chapter / Connection": "Kapitel / Verbindung",
        "building": "Gebäude",
        "Search:": "Suche:",
        "Start typing...": "Beginne zu tippen...",
        "You can search buildings by typing their name.": "Sie können Gebäude durchsuchen, indem Sie deren Namen eingeben.",
        //EVENTS
        "Sorcerers' Homecoming (available soon)":"Sorcerers' Homecoming (available soon)",
        "Queen Fairy's Garden":"Garten der Feenkönigin",
        "Rise of the Phoenix Cult":"Der Aufstieg des Phoenixkults",
        "Elvarian Carnival":"Elvarischer Karneval",
        "Winter Magic - The Snow Owl":"Winterzauber",
        "The Mistery of the Misty Forest":"Nebelwald",
        "Autumn Zodiac":"Herbstliche Sternzeichen",
        "Sorcerers' Pilgrimage":"Die Pilgerreise der Zauberer",
        "The Air Traders' Voyage":"Die Reise der Himmelshändler",
        "May Celebrations":"Maifeierlichkeiten",
        "Gathering of the Phoenix Cults":"Die Versammlung der Phönixkulte",
        "Elvarian Carnival":"Elvarischer Karneval",
        "Winter Magic":"Winterzauber",
        "Dr. Freakenspleen":"Dr. Freakenspleen",
        "Autumn Zodiac":"Herbstliche Sternzeichen",
        "Summer Mermaids":"Sommer Meerjungfrauen",
        "The Queen of the Seas":"Königin der Meere",
        "Summer Solstice":"Sommersonnenwende",
        "Older":"Ältere",
        "All":"Alle"
    }
}

function langUI(key) {
    if (localStorage.getItem("lang") !== null && ui[localStorage.getItem("lang")].hasOwnProperty(key)) {
        return ui[localStorage.getItem("lang")][key];
    } else {
        return key;
    }
}