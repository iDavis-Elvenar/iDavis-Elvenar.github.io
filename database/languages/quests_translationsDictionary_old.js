let questsDictionaryOld = {
    "cz" : {},
    "en" : {
        // CONNECTIONS
        "alebo" : "or",
        // VERBS
        "získaj" : "collect",
        "vyrob" : "produce",
        "utrať" : "spend",
        "použi" : "use",
        "vyrieš" : "solve",
        "vytvor" : "create",
        "trénuj" : "recruit",
        "preskúmaj" : "scout",
        "obchoduj" : "trade",
        "kúp" : "buy",
        "vylepši" : "upgrade",
        "vlož" : "insert",
        "vykonaj" : "do",
        "vyskúmaj" : "research",
        // PRODUCTS
        "mincí" : "coins",
        "nápoje" : "beverages",
        "vb" : "kp",
        "produkt základnej manufaktury (3-hodinový)" : "product of basic manufactory (3-hours)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "product of basic manufactory (9-hours)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "product of basic manufactory (24-hours)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "product of basic manufactory (2-days)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "product of any manufactory (3-hours)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "product of any manufactory (9-hours)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "product of any manufactory (24-hours)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "product of any manufactory (2-days)", // use regex
        "obyčajné nástroje" : "simple tools",
        "ľubovoľné kúzlo" : "enchantment of your choice",
        "strety na mape" : "world map encounters",
        "turnajové strety" : "tournament encounters",
        "chlieb" : "bread",
        "ponuku na trhu" : "trade offer",
        "spojovací činidlo" : "combining catalyst",
        "relikvie" : "relics",
        "pokročilé nástroje" : "advanced tools",
        "zásob" : "supplies",
        "úlomky kouzel" : "spell fragments",
        "jednotiek" : "units",
        "opar vidění" : "vision vapor",
        "provinciu" : "province",
        "košík jedla" : "basket of groceries",
        "sada nástrojov": "toolbox",
        "u obchodníka" : "with a wholesaler",
        "požehnání na jednotky" : "unit instants",
        "požehnání" : "instants",
        "strety vo veži" : "spire encounters",
        "štandardného zboží" : "standard goods",
        "ľubovoľného zboží" : "goods of your choice",
        "relikvií" : "relics",
        "vb do ľubovoľného prastarého divu" : "kp into ancient wonder of your choice",
        "stretov na mape" : "world map encounters",
        "turnajových stretov" : "tournament encounters",
        "susedskú výpomoc" : "neighbourly help",
        "stretov vo veži" : "spire encounters",
        "technológiu" : "technology",
        "základného zboží" : "basic goods",
        "krmení" : "pet food",
        "strety na mape bojom" : "world map encounters by fighting",
        "strety na mape vyjednávaním" : "world map encounters by negotiation",
        "nejaké množstvo" : "some amount of",
        "budovu na level 5 alebo vyšší" : "building to level 5 or higher", // use regex
        "budovy na level 5 alebo vyšší" : "buildings to level 5 or higher", // use regex
        "ľubovoľný zesilovač" : "time booster of your choice",
        "dešť mincí" : "coin rain",
        "příděl zásob" : "supply windfall",
    },
    "de" : {
        // CONNECTIONS
        "alebo" : "oder",
        // VERBS
        "získaj" : "sammle",
        "vyrob" : "produziere",
        "utrať" : "gib...aus",
        "použi" : "benutze",
        "vyrieš" : "schließe...ab",
        "vytvor" : "erstelle",
        "trénuj" : "rekrutiere",
        "preskúmaj" : "erkunde",
        "obchoduj" : "handle",
        "kúp" : "kaufe",
        "vylepši" : "baue...aus",
        "vlož" : "investiere",
        "vykonaj" : "gib",
        "vyskúmaj" : "erforsche",
        // PRODUCTS
        "mincí" : "Münzen",//
        "nápoje" : "Getränke",
        "vb" : "wp",
        "produkt základnej manufaktury (3-hodinový)" : "Produkt einer Basismanufaktur (3-Stunden)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "Produkt einer Basismanufaktur (9-Stunden)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "Produkt einer Basismanufaktur (24-Stunden)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "Produkt einer Basismanufaktur (48-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "Produkt einer beliebigen Manufaktur (3-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "Produkt einer beliebigen Manufaktur (9-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "Produkt einer beliebigen Manufaktur (24-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "Produkt einer beliebigen Manufaktur (48-Stunden)", // use regex
        "obyčajné nástroje" : "einfache Werkzeuge",
        "ľubovoľné kúzlo" : "Verzauberung deiner Wahl",
        "strety na mape" : "Provinzbegegnungen",
        "turnajové strety" : "Turnierbegegnungen",
        "chlieb" : "Brot",
        "ponuku na trhu" : "Handelsangebot",
        "spojovací činidlo" : "Kombinationsauslöser",
        "relikvie" : "Relikte",
        "pokročilé nástroje" : "bessere Werkzeuge",
        "zásob" : "Vorräte",
        "úlomky kouzel" : "Zauberspruch-Fragmente",
        "jednotiek" : "Einheiten",
        "opar vidění" : "Visionsschwaden",
        "provinciu" : "Provinz",
        "košík jedla" : "Gemüsekörbe",
        "sada nástrojov": "Werkzeugkiste",
        "u obchodníka" : "beim Händler",
        "požehnání na jednotky" : "Einheitensegen",
        "požehnání" : "Segen",
        "strety vo veži" : "Turmbegegnungen",
        "štandardného zboží" : "Standardgüter",
        "ľubovoľného zboží" : "irgendwelche Güter",
        "relikvií" : "Relikte",
        "vb do ľubovoľného prastarého divu" : "WP in ein beliebiges Antikes Wunder",
        "stretov na mape" : "Provinzbegegnungen",
        "turnajových stretov" : "Turnierbegegnungen",
        "susedskú výpomoc" : "Nachbarschaftshilfe",
        "stretov vo veži" : "Turmbegegnungen",
        "technológiu" : "Technologie",
        "základného zboží" : "Basisgüter",
        "krmení" : "Tierfutter",
        "strety na mape bojom" : "Provinzbegegnungen im Kampf",
        "strety na mape vyjednávaním" : "Provinzbegegnungen über Verhandlungen",
        "nejaké množstvo" : "eine Menge",
        "budovu na level 5 alebo vyšší" : "Gebäude auf Stufe 5 oder höher", // use regex
        "budovy na level 5 alebo vyšší" : "Gebäude auf Stufe 5 oder höher", // use regex
        "ľubovoľný zesilovač" : "Zeit-Booster deiner Wahl",
        "dešť mincí" : "Münzregen",
        "příděl zásob" : "Vorratsregen",
    },
    "fr" : {
        // CONNECTIONS
        "alebo" : "ou",
        // VERBS
        "získaj" : "collecter",
        "vyrob" : "produire",
        "utrať" : "dépenser",
        "použi" : "lancer",
        "vyrieš" : "résoudre",
        "vytvor" : "placer",
        "trénuj" : "recruter",
        "preskúmaj" : "explorer",
        "obchoduj" : "échanger",
        "kúp" : "acheter",
        "vylepši" : "améliorer",
        "vlož" : "investir",
        "vykonaj" : "faire",
        "vyskúmaj" : "rechercher",
        // PRODUCTS
        "mincí" : "pièces",
        "nápoje" : "breuvages",
        "vb" : "pc",
        "produkt základnej manufaktury (3-hodinový)" : "marchandise de base (3 heures)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "marchandise de base (9 heures)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "marchandise de base (24 heures)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "marchandise de base (48 heures)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "de n'importe quelle manufacture (3-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "de n'importe quelle manufacture (9-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "de n'importe quelle manufacture (24-Stunden)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "de n'importe quelle manufacture (48-Stunden)", // use regex
        "obyčajné nástroje" : "outils rudimentaires",
        "ľubovoľné kúzlo" : "sortilège de votre choix",
        "strety na mape" : "rencontres provinces",
        "turnajové strety" : "rencontres tournooi",
        "chlieb" : "pain",
        "ponuku na trhu" : "offre marchandise",
        "spojovací činidlo" : "catalyseur de combinaison",
        "relikvie" : "reliques",
        "pokročilé nástroje" : "outils avancés",
        "zásob" : "matériaux",
        "úlomky kouzel" : "fragments de sortilège",
        "jednotiek" : "unités",
        "opar vidění" : "vision vaporeuse",
        "provinciu" : "province",
        "košík jedla" : "panier de provisions",
        "sada nástrojov": "toolbox",
        "u obchodníka" : "avec le grossiste",
        "požehnání na jednotky" : "bénédictions d’unités",
        "požehnání" : "bénédictions",
        "strety vo veži" : "rencontres donjon",
        "štandardného zboží" : "marchandise standart",
        "ľubovoľného zboží" : "n'importe quelle marchandise",
        "relikvií" : "reliques",
        "vb do ľubovoľného prastarého divu" : "PCs sur une merveille",
        "stretov na mape" : "rencontres provinces",
        "turnajových stretov" : "rencontres tournooi",
        "susedskú výpomoc" : "aide aux voisins",
        "stretov vo veži" : "rencontres donjon",
        "technológiu" : "technologie",
        "základného zboží" : "marchandises de base",
        "krmení" : "nourriture pour familier",
        "strety na mape bojom" : "rencontres provinces en combattant",
        "strety na mape vyjednávaním" : "rencontres provinces en négociant",
        "nejaké množstvo" : "quantité raisonnable de",
        "budovu na level 5 alebo vyšší" : "bâtiment au moins au niveau 5", // use regex
        "budovy na level 5 alebo vyšší" : "bâtiments au moins au niveau 5", // use regex
        "ľubovoľný zesilovač" : "Boost de votre choix",
        "dešť mincí" : "Pluie de pièces",
        "příděl zásob" : "Abondance de matériaux",
    },
    "hu" : {
        // CONNECTIONS
        "alebo" : "or",
        // VERBS
        "získaj" : "collect",
        "vyrob" : "produce",
        "utrať" : "spend",
        "použi" : "use",
        "vyrieš" : "solve",
        "vytvor" : "create",
        "trénuj" : "recruit",
        "preskúmaj" : "scout",
        "obchoduj" : "trade",
        "kúp" : "buy",
        "vylepši" : "upgrade",
        "vlož" : "insert",
        "vykonaj" : "do",
        "vyskúmaj" : "research",
        // PRODUCTS
        "mincí" : "coins",
        "nápoje" : "beverages",
        "vb" : "kp",
        "produkt základnej manufaktury (3-hodinový)" : "product of basic manufactory (3-hours)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "product of basic manufactory (9-hours)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "product of basic manufactory (24-hours)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "product of basic manufactory (2-days)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "product of any manufactory (3-hours)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "product of any manufactory (9-hours)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "product of any manufactory (24-hours)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "product of any manufactory (2-days)", // use regex
        "obyčajné nástroje" : "simple tools",
        "ľubovoľné kúzlo" : "enchantment of your choice",
        "strety na mape" : "world map encounters",
        "turnajové strety" : "tournament encounters",
        "chlieb" : "bread",
        "ponuku na trhu" : "trade offer",
        "spojovací činidlo" : "combining catalyst",
        "relikvie" : "relics",
        "pokročilé nástroje" : "advanced tools",
        "zásob" : "supplies",
        "úlomky kouzel" : "spell fragments",
        "jednotiek" : "units",
        "opar vidění" : "vision vapor",
        "provinciu" : "province",
        "košík jedla" : "basket of groceries",
        "sada nástrojov": "toolbox",
        "u obchodníka" : "with a wholesaler",
        "požehnání na jednotky" : "unit instants",
        "požehnání" : "instants",
        "strety vo veži" : "spire encounters",
        "štandardného zboží" : "standard goods",
        "ľubovoľného zboží" : "goods of your choice",
        "relikvií" : "relics",
        "vb do ľubovoľného prastarého divu" : "kp into ancient wonder of your choice",
        "stretov na mape" : "world map encounters",
        "turnajových stretov" : "tournament encounters",
        "susedskú výpomoc" : "neighbourly help",
        "stretov vo veži" : "spire encounters",
        "technológiu" : "technology",
        "základného zboží" : "basic goods",
        "krmení" : "pet food",
        "strety na mape bojom" : "world map encounters by fighting",
        "strety na mape vyjednávaním" : "world map encounters by negotiation",
        "nejaké množstvo" : "some amount of",
        "budovu na level 5 alebo vyšší" : "building to level 5 or higher", // use regex
        "budovy na level 5 alebo vyšší" : "buildings to level 5 or higher", // use regex
        "ľubovoľný zesilovač" : "time booster of your choice",
        "dešť mincí" : "coin rain",
        "příděl zásob" : "supply windfall",
    },
    "pl" : {
        // CONNECTIONS
        "alebo" : "lub",
        // VERBS
        "získaj" : "zdobądź",
        "vyrob" : "wyprodukuj",
        "utrať" : "wydaj",
        "použi" : "użyj",
        "vyrieš" : "rozwiąż",
        "vytvor" : "stwórz",
        "trénuj" : "wyszkol",
        "preskúmaj" : "rozwiąż",
        "obchoduj" : "zaakceptuj",
        "kúp" : "kup",
        "vylepši" : "rozbuduj",
        "vlož" : "wydaj",
        "vykonaj" : "udziel",
        "vyskúmaj" : "opracuj",
        // PRODUCTS
        "mincí" : "monety",
        "nápoje" : "trunki",
        "vb" : "pw",
        "produkt základnej manufaktury (3-hodinový)" : "towary podstawowe (3 godziny)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "towary podstawowe (9 godziny)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "towary podstawowe (24 godziny)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "towary podstawowe (48 godziny)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "produkt dowolnej manufaktury (3 godziny)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "produkt dowolnej manufaktury (9 godziny)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "produkt dowolnej manufaktury (24 godziny)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "produkt dowolnej manufaktury (48 godziny)", // use regex
        "obyčajné nástroje" : "proste narzędzia",
        "ľubovoľné kúzlo" : "zaklęcia",
        "strety na mape" : "konflikty na mapie",
        "turnajové strety" : "konflikty w turnieju",
        "chlieb" : "chleb",
        "ponuku na trhu" : "oferty",
        "spojovací činidlo" : "katalizator",
        "relikvie" : "relikty",
        "pokročilé nástroje" : "zaawansowane narzędzia",
        "zásob" : "towarów",
        "úlomky kouzel" : "fragmenty zaklęć",
        "jednotiek" : "jednostki",
        "opar vidění" : "mgła wizji",
        "provinciu" : "prowincje",
        "košík jedla" : "kosza zakupów",
        "sada nástrojov": "skrzynka z narzedziami",
        "u obchodníka" : "oferty hurtownika",
        "požehnání na jednotky" : "szybkie bonusy jednostek",
        "požehnání" : "szybkie bonusy",
        "strety vo veži" : "konflikty w iglicy",
        "štandardného zboží" : "dowolnych surowców",
        "ľubovoľného zboží" : "dowolnych towarów",
        "relikvií" : "relikty",
        "vb do ľubovoľného prastarého divu" : "pw w dowolny cud",
        "stretov na mape" : "konfliktów na mapie",
        "turnajových stretov" : "konfliktów w turnieju",
        "susedskú výpomoc" : "pomoc sąsiedzka",
        "stretov vo veži" : "konfliktów w iglicy",
        "technológiu" : "technologie",
        "základného zboží" : "towary podstawowe",
        "krmení" : "karma dla zwierząt",
        "strety na mape bojom" : "konflikty na mapie przez walkę",
        "strety na mape vyjednávaním" : "konflikty na mapie przez negocjacje",
        "nejaké množstvo" : "przyzwoitą ilość",
        "budovu na level 5 alebo vyšší" : "budynek do pozimu 5 lub wyższego", // use regex
        "budovy na level 5 alebo vyšší" : "budynki do poziomu 5 lub wyższego", // use regex
        "ľubovoľný zesilovač" : "zaklęcia",
        "dešť mincí" : "deszcz Monet",
        "příděl zásob" : "strumień Zasobów",
    },
    "ru" : {
        // CONNECTIONS
        "alebo" : "или",
        // VERBS
        "získaj" : "соберите",
        "vyrob" : "произведите",
        "utrať" : "потратьте",
        "použi" : "используйте",
        "vyrieš" : "решите",
        "vytvor" : "разместите",// if used only in Place Trade Offers
        "trénuj" : "обучите",
        "preskúmaj" : "разведайте",
        "obchoduj" : "купите",
        "kúp" : "купите",
        "vylepši" : "улучшите",
        "vlož" : "вложите",
        "vykonaj" : "окажите", // if used only in do NH
        "vyskúmaj" : "исследуйте",
        // PRODUCTS
        "mincí" : "монет",
        "nápoje" : "напитки",
        "vb" : "ОЗ",
        "produkt základnej manufaktury (3-hodinový)" : "продукция базовой фабрики (3 часа)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "продукция базовой фабрики (9 часа)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "продукция базовой фабрики (24 часа)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "продукция базовой фабрики (2 дня)", // use regex
        "produkt ľubovoľnej manufaktury (3-hodinový)" : "продукция любой мануфактуры (3 часа)", // use regex
        "produkt ľubovoľnej manufaktury (9-hodinový)" : "продукция любой мануфактуры (9 часа)", // use regex
        "produkt ľubovoľnej manufaktury (24-hodinový)" : "продукция любой мануфактуры (24 часа)", // use regex
        "produkt ľubovoľnej manufaktury (2-dňový)" : "продукция любой мануфактуры (2 дня)", // use regex
        "obyčajné nástroje" : "простые инструменты",
        "ľubovoľné kúzlo" : "заклинания",
        "strety na mape" : "конфликта на карте",
        "turnajové strety" : "турнирных конфликта",
        "chlieb" : "Хлеб",
        "ponuku na trhu" : "торговые предложения",
        "spojovací činidlo" : "комбинирующий катализатор",
        "relikvie" : "реликвии",
        "pokročilé nástroje" : "профи-инструменты",
        "zásob" : "запасов",
        "úlomky kouzel" : "фрагменты заклинаний",
        "jednotiek" : "юнитов",
        "opar vidění" : "затуманенного зрения",
        "provinciu" : "провинцию",
        "košík jedla" : "корзины с продуктами",
        "sada nástrojov": "toolbox",
        "u obchodníka" : "товары у оптовика ",
        "požehnání na jednotky" : "мгновения юнитов",
        "požehnání" : "Мгновения",
        "strety vo veži" : "конфликта в шпиле",
        "štandardného zboží" : "обычных товаров",
        "ľubovoľného zboží" : "любого товара",
        "relikvií" : "реликвий",
        "vb do ľubovoľného prastarého divu" : "ОЗ в любое древнее чудо",
        "stretov na mape" : "конфликтов на карте",
        "turnajových stretov" : "турнирных конфликтов",
        "susedskú výpomoc" : "соседскую помощь",
        "stretov vo veži" : "конфликтов в шпиле",
        "technológiu" : "технологию",
        "základného zboží" : "базовых обычных товаров",
        "krmení" : "еду для питомцев",
        "strety na mape bojom" : "конфликта на карте боем",
        "strety na mape vyjednávaním" : "конфликта на карте выкупом",
        "nejaké množstvo" : "хорошее количество",
        "budovu na level 5 alebo vyšší" : "здание до уровня 5 или выше", // use regex
        "budovy na level 5 alebo vyšší" : "здания до уровня 5 или выше", // use regex
        "ľubovoľný zesilovač" : "Ускоритель",
        "dešť mincí" : "Дождь из монет",
        "příděl zásob" : "Доход запасов",
    }
}
