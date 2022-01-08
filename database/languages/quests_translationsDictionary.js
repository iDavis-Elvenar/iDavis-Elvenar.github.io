let questsDictionary = {
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
        "u obchodníka" : "with a wholesaler",
        "požehnání na jednotky" : "unit instants",
        "strety vo veži" : "spire encounters",
        "štandardného zboží" : "standard goods",
        "relikvií" : "relics",
        "vb do ľubovoľného prastarého divu" : "kp into ancient wonder of your choice",
        "stretov na mape" : "world map encounters",
        "turnajových stretov" : "tournament encounters",
        "susedskú výpomoc" : "neighbourly help",
        "stretov vo veži" : "spire encounters",
        "technológiu" : "technology",
        "základného zboží" : "standard goods",
        "krmení" : "pet food",
        "strety na mape bojom" : "world map encounters by fighting",
        "strety na mape vyjednávaním" : "world map encounters by negotiation",
        "nejaké množstvo" : "some amount of",
        "budovu na level 5 alebo vyšší" : "building to level 5 or higher", // use regex
        "budovy na level 5 alebo vyšší" : "buildings to level 5 or higher", // use regex
    },
    "de" : {
        /*// CONNECTIONS
        "alebo" : "oder",
        // VERBS
        "získaj" : "sammle",
        "vyrob" : "produziere",
        "utrať" : "gib",
        "použi" : "benutze",
        "vyrieš" : "schließe",
        "vytvor" : "erstelle",
        "trénuj" : "rekrutiere",
        "preskúmaj" : "erkunde",
        "obchoduj" : "akzeptiere",
        "kúp" : "kaufe",
        "vylepši" : "baue",
        "vlož" : "investiere",
        "vykonaj" : "gebe",
        "vyskúmaj" : "erforsche",
        // PRODUCTS
        "mincí" : "münzen",//
        "nápoje" : "beverages",
        "vb" : "kp",
        "produkt základnej manufaktury (3-hodinový)" : "product of basic manufactory (3-hours)", // use regex
        "produkt základnej manufaktury (9-hodinový)" : "product of basic manufactory (9-hours)", // use regex
        "produkt základnej manufaktury (24-hodinový)" : "product of basic manufactory (24-hours)", // use regex
        "produkt základnej manufaktury (2-dňový)" : "product of basic manufactory (2-days)", // use regex
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
        "u obchodníka" : "with a seller man",
        "požehnání na jednotky" : "unit instants",
        "strety vo veži" : "spire encounters",
        "štandardného zboží" : "standard goods",
        "relikvií" : "relics",
        "vb do ľubovoľného prastarého divu" : "kp into ancient wonder of your choice",
        "stretov na mape" : "world map encounters",
        "turnajových stretov" : "tournament encounters",
        "susedskú výpomoc" : "neighbourly help",
        "stretov vo veži" : "spire encounters",
        "technológiu" : "technology",
        "základného zboží" : "standard goods",
        "krmení" : "pet food",
        "strety na mape bojom" : "world map encounters by fighting",
        "strety na mape vyjednávaním" : "world map encounters by negotiation",
        "nejaké množstvo" : "some amount of",
        "budovu na level 5 alebo vyšší" : "building to level 5 or higher", // use regex
        "budovy na level 5 alebo vyšší" : "buildings to level 5 or higher", // use regex*/
    },
    "fr" : {
        /*// CONNECTIONS
        "alebo" : "ou",
        // VERBS
        "získaj" : "collecter",
        "vyrob" : "produire",
        "utrať" : "dépenser",
        "použi" : "utiliser",
        "vyrieš" : "résoudre",
        "vytvor" : "créer",
        "trénuj" : "recruter",
        "preskúmaj" : "explorer",
        "obchoduj" : "commercer",
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
        "u obchodníka" : "avec le grossiste",
        "požehnání na jednotky" : "bénédictions d’unités",
        "strety vo veži" : "rencontres donjon",
        "štandardného zboží" : "marchandise standart",
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
        "budovy na level 5 alebo vyšší" : "bâtiments au moins au niveau 5", // use regex*/
    },
    "pl" : {

    },
    "ru" : {

    }
}