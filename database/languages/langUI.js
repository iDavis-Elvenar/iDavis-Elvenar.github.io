//console.log(localStorage.getItem("lang"))

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
        "Reveals in": "Odhalí sa za",
        "New way of chapter selection has been introduced! You can now select your chapter directly from the top bar (next to the language selector) and this will become remembered by your browser - so that you won't have to select it everytime you use a sorting feature :)": "Na stránke bol zavedený nový spôsob výberu vašej kapitoly! Teraz to môžete urobiť priamo z hornej lišty (vedľa výberu jazyka stránky), pričom váš prehliadač si voľbu zapamätá - to znamená, že nebude nutné vyberať vašu aktuálnu kapitolu pri každom usporadúvaní budov na stránke.",
        "Quests": "Úlohy",
        "List of Quests": "Zoznam úloh",
        "You can send the quest list to other players by sharing the following link": "Zdieľať úlohy udalosti môžete rozposlaním tohto odkazu",
        "Number": "Číslo",
        "Task": "Zadanie",
        "Finished": "Hotovo",
        "No recorded questline is available for this event": "Pre túto udalosť nie je zaevidovaný žiadny zoznam úloh",
        "Prepare": "Príprava",
        "More": "Viac",
        "Culture per square": "Kultúra na jedno pole",
        "Population per square": "Obyvateľstvo na jedno pole",
        "Money per square per 1h": "Mince na jedno pole za 1h",
        "Supplies per square per 1h": "Zásoby na jedno pole za 1h",
        "Orcs per square per 1h": "Orkovia na jedno pole za 1h",
        "Mana per square per 1h": "Mana na jedno pole za 1h",
        "Seeds per square per 1h": "Semienka na jedno pole za 1h",
        "Culture Only": "Iba kultúra",
        "Culture & Population Only": "Iba kultúra a obyvateľstvo",
        "Standard Goods T1": "Štandardné zboží T1",
        "Standard Goods T2": "Štandardné zboží T2",
        "Standard Goods T3": "Štandardné zboží T3",
        "Orcs": "Orkovia",
        "Mana": "Mana",
        "Seeds": "Semienka",
        "Sentient Goods T4": "Živoucí zboží T4",
        "Sentient Goods T5": "Živoucí zboží T5",
        "Sentient Goods T6": "Živoucí zboží T6",
        "Filter by set buildings:": "Filter podľa setov:",
        "Choose a set": "Vyber set",
        "Chance": "Šanca",
        "Bonus": "Bonus",
        //SETS
        "Winter Set": "Zimní sada",
        "Phoenix Cult Set": "Sada Kultu fénixe",
        "Woodelvenstock Set": "Sada Woodelvenstocku",
        "Harvest Temple Set": "Sada dožínkového chrámu",
        "Shrines of Sun and Moon Set": "Sada Svatyň slunce a měsíce",
        "Redbeard Set": "Rudovousova sada",
        "Winter Market Set": "Sada Zimní tržiště",
        "Snow Owls Set": "Sada Sněžné sovy",
        "Carnival Set": "Karnevalová sada",
        "Magical Chess Set": "Sada Magické šachy",
        "Moonstone Library Set": "Sada měsíční knihovny",
        "Air Traders Set": "Sada vzdušných obchodníků",
        "Pilgrim's Manor": "Panství poutníka",
        "Forbidden Ruins": "Zapovězené ruiny",
        //EVENTS
        "Naturally Amazing":"Přirozeně úžasné",
        "Dawn of the Phoenix":"Úsvit fénixe",
        "The Buried City":"Pohřbené město",
        "The Misty Forest":"Mlžný les",
        "Sorcerers' Homecoming":"Návrat kouzelníků domů",
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
        "All":"Všetky",
        "This is a switchable production. Only one of the switchable productions can be running at the same time.":"Toto je prepínateľná produkcia. Iba jedna z prepínateľných produkcií môže byť aktívna v jednu chvíľu."
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
        "Order daily prizes by:" : "Sortiere tägliche Preise nach:",
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
        "Reveals in": "Enthüllt in",
        "New way of chapter selection has been introduced! You can now select your chapter directly from the top bar (next to the language selector) and this will become remembered by your browser - so that you won't have to select it everytime you use a sorting feature :)": "Neue Art der Kapitelauswahl wurde eingeführt! Du kannst jetzt dein Kapitel direkt aus der oberen Leiste (neben der Sprachauswahl) auswählen und dies wird von deinem Browser gespeichert - damit du es nicht jedes Mal auswählen musst, wenn du eine Sortierfunktion verwendest :)",
        "Quests": "Quests",
        "List of Quests": "Liste der Quests",
        "You can send the quest list to other players by sharing the following link": "Sie können die Questliste an andere Spieler senden, indem Sie den folgenden Link teilen",
        "Number": "Nummer",
        "Task": "Aufgabe",
        "Finished": "Fertig",
        "No recorded questline is available for this event": "Für dieses Event ist keine aufgezeichnete Questreihe verfügbar",
        "Prepare": "Vorbereitung",
        "More": "Mehr",
        "Culture per square": "Kultur pro Quadrat",
        "Population per square": "Bevölkerung pro Quadrat",
        "Money per square per 1h": "Münzen pro Quadrat pro 1h",
        "Supplies per square per 1h": "Vorräte pro Quadrat pro 1h",
        "Orcs per square per 1h": "Orks pro Quadrat pro 1h",
        "Mana per square per 1h": "Mana pro Quadrat pro 1h",
        "Seeds per square per 1h": "Samen pro Quadrat pro 1h",
        "Culture Only": "Nur Kultur",
        "Culture & Population Only": "Nur Kultur & Bevölkerung",
        "Standard Goods T1": "Waren T1",
        "Standard Goods T2": "Waren T2",
        "Standard Goods T3": "Waren T3",
        "Orcs": "Orks",
        "Mana": "Mana",
        "Seeds": "Samen",
        "Sentient Goods T4": "Waren T4",
        "Sentient Goods T5": "Waren T5",
        "Sentient Goods T6": "Waren T6",
        "Filter by set buildings:": "Nach Sets filtern:",
        "Choose a set": "Wähle ein Set",
        "Chance": "Chance",
        "Bonus": "Bonus",
        //SETS
        "Winter Set": "Winter-Set",
        "Phoenix Cult Set": "Phönixkult-Set",
        "Woodelvenstock Set": "Woodelvenstock-Set",
        "Harvest Temple Set": "Erntetempel-Set",
        "Shrines of Sun and Moon Set": "Sonne- und Mondschrein-Set",
        "Redbeard Set": "Rotbart-Set",
        "Winter Market Set": "Wintermarkt-Set",
        "Snow Owls Set": "Schneeeulen-Set",
        "Carnival Set": "Karneval-Set",
        "Magical Chess Set": "Magisches Schachspiel-Set",
        "Moonstone Library Set": "Mondsteinbibliothek-Set",
        "Air Traders Set": "Himmelshändler-Set",
        "Pilgrim's Manor": "Herrenhaus der Pilger",
        "Forbidden Ruins": "Verbotene Ruinen",
        //EVENTS
        "Naturally Amazing":"Einfach Natürlich",
        "Dawn of the Phoenix":"Die Dämmerung des Phönix",
        "The Buried City":"Die begrabene Stadt",
        "The Misty Forest":"Nebelwald",
        "Sorcerers' Homecoming":"Die Heimkehr der Zauberer",
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
        "All":"Alle",
        "This is a switchable production. Only one of the switchable productions can be running at the same time.":"Dies ist eine schaltbare Produktion. Es kann immer nur eine der umschaltbaren Produktionen gleichzeitig laufen."
    },

    "fr" : {
        //UI
        "Building type:" : "Type de bâtiment:",
        "Construction time:" : "Temps de construction:",
        "Size:" : "Taille:",
        "Set building:" : "Une partie de l'ensemble:",
        "Expiring:" : "Expiration:",
        "Upgrade costs:" : "Coûts de mise à niveau:",
        "Chapter / Bonus" : "Chapitre / Bonus",
        "Introduced in event:" : "Présenté dans l'événement:",
        "Filter production:" : "Fabrication de filtres:",
        "Order By:" : "Commandé par:",
        "For chapter:" : "Pour le chapitre:",
        "Filter soon:" : "Filtrer bientôt:",
        "Select event:" : "Sélectionnez l'événement:",
        "Order daily prizes by:" : "Commandez les prix quotidiens par:",
        "Daily Prizes Calendar" : "Calendrier des prix quotidiens",
        "day" : "jour",
        "Event Video" : "Vidéo de l'événement",
        "Day" : "Jour",
        "Calendar" : "Calendrier",
        "Generate Daily Prizes" : "Générer des prix quotidiens",
        "Filter & Generate" : "Filtrer et générer",
        "Home" : "Domicile",
        "All Buildings" : "Tous les bâtiments",
        "All Events" : "Tous les évènements",
        "Chapter / Connection": "Chapitre / Connexion",
        "building": "bâtiment",
        "Search:": "Rechercher:",
        "Start typing...": "Commencer à écrire...",
        "You can search buildings by typing their name.": "Vous pouvez rechercher des bâtiments en tapant leur nom.",
        "Reveals in": "Révélé dans",
        "New way of chapter selection has been introduced! You can now select your chapter directly from the top bar (next to the language selector) and this will become remembered by your browser - so that you won't have to select it everytime you use a sorting feature :)": "Un nouveau type de sélection de chapitre a été introduit ! Vous pouvez maintenant sélectionner votre chapitre directement dans la barre supérieure (à côté de la sélection de la langue) et cela sera enregistré par votre navigateur - vous n'avez donc pas à le sélectionner à chaque fois que vous utilisez une fonction de tri :)",
        "Quests": "Quêtes",
        "List of Quests": "Liste des quêtes",
        "You can send the quest list to other players by sharing the following link": "Vous pouvez envoyer la liste de quêtes à d'autres joueurs en partageant le lien suivant",
        "Number": "Nombre",
        "Task": "Tâche",
        "Finished": "Fini",
        "No recorded questline is available for this event": "Aucune série de quêtes enregistrée n'est disponible pour cet événement",
        "Prepare": "Préparation",
        "More": "Suite",
        "Culture per square": "Culture par carré",
        "Population per square": "Population par carré",
        "Money per square per 1h": "Pièces par carré par 1h",
        "Supplies per square per 1h": "Matériaux par carré par 1h",
        "Orcs per square per 1h": "Orcs par carré par 1h",
        "Mana per square per 1h": "Mana par carré par 1h",
        "Seeds per square per 1h": "Graines par carré par 1h",
        "Culture Only": "Culture seulement",
        "Culture & Population Only": "Culture et population seulement",
        "Standard Goods T1": "Des biens T1",
        "Standard Goods T2": "Des biens T2",
        "Standard Goods T3": "Des biens T3",
        "Orcs": "Orques",
        "Mana": "Mana",
        "Seeds": "Des graines",
        "Sentient Goods T4": "Des biens T4",
        "Sentient Goods T5": "Des biens T5",
        "Sentient Goods T6": "Des biens T6",
        "Filter by set buildings:": "Filtrer par ensembles:",
        "Choose a set": "Choisissez un ensemble",
        "Chance": "Chance",
        "Bonus": "Prime",
        //SETS
        "Winter Set": "Set hivernal",
        "Phoenix Cult Set": "Set du culte du phénix",
        "Woodelvenstock Set": "Set de Woodelvenstock",
        "Harvest Temple Set": "Ensemble du temple de la moisson",
        "Shrines of Sun and Moon Set": "Ensemble d'autels du soleil et de la lune",
        "Redbeard Set": "Set de Barberouge",
        "Winter Market Set": "Ensemble du marché de l'hiver",
        "Snow Owls Set": "Set des hiboux des neiges",
        "Carnival Set": "Set du carnaval",
        "Magical Chess Set": "Set d'échiquier magique",
        "Moonstone Library Set": "Set de Bibliothèque de pierre lunaire",
        "Air Traders Set": "Set des Marchands des cieux",
        "Pilgrim's Manor": "Manoir du pèlerin",
        "Forbidden Ruins": "Ruines interdites",
        //EVENTS
        "Naturally Amazing":"Naturally Amazing",
        "Dawn of the Phoenix":"L'aube du phénix",
        "The Buried City":"La ville enterrée",
        "The Misty Forest":"Forêt embrumée",
        "Sorcerers' Homecoming":"Retour des Sorciers",
        "Queen Fairy's Garden":"Le Jardin de la reine féerique",
        "Rise of the Phoenix Cult":"L'Avènement du Culte du Phénix",
        "Elvarian Carnival":"Carnaval d'Elvenar",
        "Winter Magic - The Snow Owl":"Magie de l'Hiver",
        "The Mistery of the Misty Forest":"Forêt embrumée",
        "Autumn Zodiac":"Zodiaque de l'Automne",
        "Sorcerers' Pilgrimage":"Pèlerinage des Sorciers",
        "The Air Traders' Voyage":"Le voyage des Marchands des cieux",
        "May Celebrations":"Célébrations de Mai",
        "Gathering of the Phoenix Cults":"Réunion du Culte du Phénix",
        "Elvarian Carnival":"Carnaval d'Elvenar",
        "Winter Magic":"Magie de l'Hiver",
        "Dr. Freakenspleen":"Dr. Freakenspleen",
        "Autumn Zodiac":"Zodiaque d'Automne",
        "Summer Mermaids":"L'Été des Sirènes",
        "The Queen of the Seas":"The Queen of the Seas",
        "Summer Solstice":"Solstice d'été",
        "Older":"Plus ancien",
        "All":"Tout",
        "This is a switchable production. Only one of the switchable productions can be running at the same time.":"Il s'agit d'une production commutable. Une seule des productions commutables peut être exécutée en même temps."
    },

    "pl" : {
        //UI
        "Building type:" : "Rodzaj budynku:",
        "Construction time:" : "Czas budowy:",
        "Size:" : "Rozmiar:",
        "Set building:" : "Część zestawu:",
        "Expiring:" : "Wygasa:",
        "Upgrade costs:" : "Upgrade wyższego etapu:",
        "Chapter / Bonus" : "Rozdział / Bonus",
        "Introduced in event:" : "Wprowadzony w wydarzeniu:",
        "Filter production:" : "Filtruj produkcję:",
        "Order By:" : "Zamów przez:",
        "For chapter:" : "Do rozdziału:",
        "Filter soon:" : "Filtruj wkrótce:",
        "Select event:" : "Wybierz wydarzenie:",
        "Order daily prizes by:" : "Zamów codzienne nagrody do:",
        "Daily Prizes Calendar" : "Kalendarz dziennych nagród",
        "day" : "dzień",
        "Event Video" : "Wideo z wydarzenia",
        "Day" : "Dzień",
        "Calendar" : "Kalendarz",
        "Generate Daily Prizes" : "Generuj codzienne nagrody",
        "Filter & Generate" : "Filtruj i generuj",
        "Home" : "Dom",
        "All Buildings" : "Wszystkie budynki",
        "All Events" : "Wszystkie zdarzenia",
        "Chapter / Connection": "Rozdział / Połączenie",
        "building": "budynek",
        "Search:": "Szukaj:",
        "Start typing...": "Zacznij pisać...",
        "You can search buildings by typing their name.": "Budynki można wyszukiwać, wpisując ich nazwę.",
        "Reveals in": "Ujawnione w",
        "New way of chapter selection has been introduced! You can now select your chapter directly from the top bar (next to the language selector) and this will become remembered by your browser - so that you won't have to select it everytime you use a sorting feature :)": "Wprowadzono nowy rodzaj wyboru rozdziałów! Możesz teraz wybrać swój rozdział bezpośrednio z górnego paska (obok wyboru języka) i zostanie on zapisany przez Twoją przeglądarkę - więc nie musisz go wybierać za każdym razem, gdy używasz funkcji sortowania :)",
        "Quests": "Questy",
        "List of Quests": "Lista zadań",
        "You can send the quest list to other players by sharing the following link": "Możesz wysłać listę zadań do innych graczy, udostępniając poniższy link",
        "Number": "Numer",
        "Task": "Zadanie",
        "Finished": "Skończone",
        "No recorded questline is available for this event": "Brak zarejestrowanej linii zadań dla tego wydarzenia",
        "Prepare": "Przygotowanie",
        "More": "Więcej",
        "Culture per square": "Kultura na pole",
        "Population per square": "Populacja na pole",
        "Money per square per 1h": "Pieniądze za pole za 1h",
        "Supplies per square per 1h": "Zasoby na pole na 1h",
        "Orcs per square per 1h": "Orki na pole na 1h",
        "Mana per square per 1h": "Mana na pole na 1h",
        "Seeds per square per 1h": "Nasiona na pole na 1h",
        "Culture Only": "Tylko kultura",
        "Culture & Population Only": "Tylko kultura i ludność",
        "Standard Goods T1": "Towary T1",
        "Standard Goods T2": "Towary T2",
        "Standard Goods T3": "Towary T3",
        "Orcs": "Orkowie",
        "Mana": "Mana",
        "Seeds": "Posiew",
        "Sentient Goods T4": "Towary T4",
        "Sentient Goods T5": "Towary T5",
        "Sentient Goods T6": "Towary T6",
        "Filter by set buildings:": "Filtruj według zestawów:",
        "Choose a set": "Wybierz zestaw",
        "Chance": "Szansa",
        "Bonus": "Premia",
        //SETS
        "Winter Set": "Zimowy zestaw",
        "Phoenix Cult Set": "Zestaw Kultu Feniksa",
        "Woodelvenstock Set": "Zestaw Elven'era",
        "Harvest Temple Set": "Zestaw Świątyni Plonów",
        "Shrines of Sun and Moon Set": "Zestaw Kaplic Słońca i Księżyca",
        "Redbeard Set": "Zestaw Rudobrodego",
        "Winter Market Set": "Zestaw Targu Zimowego",
        "Snow Owls Set": "Zestaw Sów Śnieżnych",
        "Carnival Set": "Zestaw Karnawałowy",
        "Magical Chess Set": "Zestaw Magicznych Szachów",
        "Moonstone Library Set": "Zestaw Biblioteki Kamienia Księżycowego",
        "Air Traders Set": "Zestaw Powietrznych Kupców",
        "Pilgrim's Manor": "Dwór Pielgrzyma",
        "Forbidden Ruins": "Zakazane Ruiny",
        //EVENTS
        "Naturally Amazing":"Z Natury Zadziwiające",
        "Dawn of the Phoenix":"Brzask Feniksa",
        "The Buried City":"Pogrzebane miasto",
        "The Misty Forest":"Zamglony Las",
        "Sorcerers' Homecoming":"Powrót Czarowników",
        "Queen Fairy's Garden":"Ogród Królowej Wróżek",
        "Rise of the Phoenix Cult":"Odrodzenie Kultu Feniksa",
        "Elvarian Carnival":"Elvariański Karnawał",
        "Winter Magic - The Snow Owl":"Zimowa Magia",
        "The Mistery of the Misty Forest":"Zamglony Las",
        "Autumn Zodiac":"Jesienne Zodiaki",
        "Sorcerers' Pilgrimage":"Pielgrzymka Czarowników",
        "The Air Traders' Voyage":"Podróż Powietrznych Kupców",
        "May Celebrations":"Święto Majowe",
        "Gathering of the Phoenix Cults":"Zgromadzenie Kultów Feniksa",
        "Elvarian Carnival":"Elvariański Karnawał",
        "Winter Magic":"Zimowa Magia",
        "Dr. Freakenspleen":"Dr. Freakenspleen",
        "Autumn Zodiac":"Jesienne Zodiaki",
        "Summer Mermaids":"Letnie Syreny",
        "The Queen of the Seas":"The Queen of the Seas",
        "Summer Solstice":"Letnie Przesilenie",
        "Older":"Starsze",
        "All":"Wszystko",
        "This is a switchable production. Only one of the switchable productions can be running at the same time.":"To jest produkcja przełączalna. Tylko jedna z przełączalnych produkcji może być uruchomiona w tym samym czasie."
    },

    "ru" : {
        //UI
        "Building type:" : "Тип здания:",
        "Construction time:" : "Время строительства:",
        "Size:" : "Размер:",
        "Set building:" : "Здание набора:",
        "Expiring:" : "Срок действия истекает:",
        "Upgrade costs:" : "Стоимость улучшения:",
        "Chapter / Bonus" : "Глава / Бонус",
        "Introduced in event:" : "Представлено в:",
        "Filter production:" : "Фильтр по производству:",
        "Order By:" : "Сортировать по:",
        "For chapter:" : "Для главы:",
        "Filter soon:" : "Скоро фильтровать:",
        "Select event:" : "Событие:",
        "Order daily prizes by:" : "Сортировать награды:",
        "Daily Prizes Calendar" : "Календарь ежедневных призов",
        "day" : "день",
        "Event Video" : "Видео о событии",
        "Day" : "День",
        "Calendar" : "Календарь",
        "Generate Daily Prizes" : "Генерировать ежедневные призы",
        "Filter & Generate" : "Фильтровать и генерировать",
        "Home" : "Домой",
        "All Buildings" : "Все постройки",
        "All Events" : "Все события",
        "Chapter / Connection": "Глава / Подключение",
        "building": "здание",
        "Search:": "Поиск:",
        "Start typing...": "Начните печатать...",
        "You can search buildings by typing their name.": "Вы можете искать здания, вводя их название.",
        "Reveals in": "Откроется через",
        "New way of chapter selection has been introduced! You can now select your chapter directly from the top bar (next to the language selector) and this will become remembered by your browser - so that you won't have to select it everytime you use a sorting feature :)": "Введен новый тип выбора глав! Теперь вы можете выбрать свою главу прямо из верхней панели (рядом с выбором языка), и она будет сохранена вашим браузером, поэтому вам не нужно выбирать ее каждый раз, когда вы используете функцию сортировки :)",
        "Quests": "Квесты",
        "List of Quests": "Список квестов",
        "You can send the quest list to other players by sharing the following link": "Вы можете отправить список квестов другим игрокам, поделившись следующей ссылкой",
        "Number": "Номер",
        "Task": "Задание",
        "Finished": "Закончено",
        "No recorded questline is available for this event": "Для этого события нет записанных цепочек заданий",
        "Prepare": "Подготовлено",
        "More": "Больше",
        "Culture per square": "Культура на клетку",
        "Population per square": "Запасы на клетку",
        "Money per square per 1h": "Деньги на клетку за 1 час",
        "Supplies per square per 1h": "Припасов на клетку за 1 час",
        "Orcs per square per 1h": "Орков на клетку за 1 час",
        "Mana per square per 1h": "Мана на клетку за 1 час",
        "Seeds per square per 1h": "Семена на клетку за 1 час",
        "Culture Only": "Только культура",
        "Culture & Population Only": "Только культура и население",
        "Standard Goods T1": "Товары T1",
        "Standard Goods T2": "Товары T2",
        "Standard Goods T3": "Товары T3",
        "Orcs": "Орки",
        "Mana": "Мана",
        "Seeds": "Семена",
        "Sentient Goods T4": "Товары T4",
        "Sentient Goods T5": "Товары T5",
        "Sentient Goods T6": "Товары T6",
        "Filter by set buildings:": "Фильтр по наборам:",
        "Choose a set": "Выбрать набор",
        "Chance": "Шанс",
        "Bonus": "Бонус",
        //SETS
        "Winter Set": "Зимний набор",
        "Phoenix Cult Set": "Набор «Культ Феникса»",
        "Woodelvenstock Set": "Набор Вудэльвенсток",
        "Harvest Temple Set": "Набор «Храм урожая»",
        "Shrines of Sun and Moon Set": "Набор святилищ Солнца и Луны",
        "Redbeard Set": "Набор Рыжеборода",
        "Winter Market Set": "Набор «Зимняя магия»",
        "Snow Owls Set": "Набор «Снежные совы»",
        "Carnival Set": "Карнавальный набор",
        "Magical Chess Set": "Набор «Волшебные шахматы»",
        "Moonstone Library Set": "Набор «Библиотека из лунного камня»",
        "Air Traders Set": "Набор Воздушных торговцев",
        "Pilgrim's Manor": "Особняк пилигрима",
        "Forbidden Ruins": "Запретные руины",
        //EVENTS
        "Naturally Amazing":"Naturally Amazing",
        "Dawn of the Phoenix":"Заря Феникса",
        "The Buried City":"Погребенный город",
        "The Misty Forest":"Туманный лес",
        "Sorcerers' Homecoming":"Возвращение Чародеев",
        "Queen Fairy's Garden":"Сад королевы Фей",
        "Rise of the Phoenix Cult":"Восстание Культа Феникса",
        "Elvarian Carnival":"Эльварийский карнавал",
        "Winter Magic - The Snow Owl":"Зимняя магия",
        "The Mistery of the Misty Forest":"Туманный лес",
        "Autumn Zodiac":"Осенний Зодиак",
        "Sorcerers' Pilgrimage":"Паломничество Чародеев",
        "The Air Traders' Voyage":"Путешествие Воздушных торговцев",
        "May Celebrations":"Майские празднования",
        "Gathering of the Phoenix Cults":"Собрание Культов Феникса",
        "Elvarian Games":"Эльварийские игры",
        "Winter Magic":"Зимняя магия",
        "Dr. Freakenspleen":"Доктор Страхогрюм",
        "Autumn Zodiac":"Осенний зодиак",
        "Summer Mermaids":"Летние русалки",
        "The Queen of the Seas":"Мауриель - Королева морей",
        "Summer Solstice":"Летнее солнцестояние",
        "Older":"Старше",
        "All":"Все",
        "This is a switchable production. Only one of the switchable productions can be running at the same time.":"Это переключаемое производство. Одновременно может работать только одно из переключаемых производств."
    },
}

function langUI(key) {
    if (localStorage.getItem("lang") !== null && ui[localStorage.getItem("lang")].hasOwnProperty(key)) {
        return ui[localStorage.getItem("lang")][key];
    } else {
        return key;
    }
}
