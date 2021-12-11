function questTranslate(text) {
    let questParts = getQuestParts(text);
    let questPartsConnections = getQuestConnections(text);
    let translatedQuestPartsConnections = translateQuestConnections(questPartsConnections);
    let conditionParts = getConditionParts(questParts);
    let translatedConditionParts = translateConditionParts(conditionParts);
    return mergeParts(translatedConditionParts, translatedQuestPartsConnections);
}

function getQuestParts(quest) {
    /* 
        returns array of quest parts (sorted by input)
    */
    let result = [];
    for (let i = 0; i < quest.split("+").length; i++) {
        for (let j = 0; j < quest.split("+")[i].split("ALEBO").length; j++) {
            result.push(quest.split("+")[i].split("ALEBO")[j]);
        }
    }
    return result;
}

function getQuestConnections(quest) {
    /*
        returns array of quest connections (sorted by input)
    */
    let result = [];
    for (let i = 0; i < quest.split(" ").length; i++) {
        if (quest.split(" ")[i] === "+" || quest.split(" ")[i] === "ALEBO") {
            result.push(quest.split(" ")[i]);
        }
    }
    return result;
}

function translateQuestConnections(connections) {
    for (let i = 0; i < connections.length; i++) {
        if (connections[i] === "ALEBO") {
            connections[i] = translateCondition("ALEBO").toUpperCase();
        }
    }
    return connections;
}

function getConditionParts(questParts) {
    /*
        input is array of quest parts (which are the result of separation by OR / AND)
        returns array of arrays in a format [[what_to_do, how_many_times, required_product],[-//-],[-//-],...]
    */
    let result = [];
    for (let part = 0; part < questParts.length; part++) {
        let currentPart = questParts[part].trim();
        // verb part:
        let currentPartResult = [];
        let currentPartOfPartString = "";
        let wordNumber = 0;
        for (let i = 0; i < currentPart.split(" ").length; i++) {
            if (isVerbPartRequirement(currentPart.split(" ")[i])) {
                currentPartOfPartString += currentPart.split(" ")[i];
            } else {
                wordNumber = i;
                break;
            }
        }
        currentPartResult.push(currentPartOfPartString);
        currentPartOfPartString = "";

        // value part:
        if (isValuePartRequirement(currentPart.split(" ")[wordNumber], currentPart.split(" ").slice(wordNumber+1))[0]) {
            let slice = currentPart.split(" ").slice(wordNumber, wordNumber+isValuePartRequirement(currentPart.split(" ")[wordNumber], currentPart.split(" ").slice(wordNumber+1))[1]+1);
            for (let currentWord = 0; currentWord < slice.length; currentWord++) {
                currentPartOfPartString += slice[currentWord]+" ";
            }
            wordNumber += isValuePartRequirement(currentPart.split(" ")[wordNumber], currentPart.split(" ").slice(wordNumber+1))[1]+1;
        } else {
            console.log("ValuePart not found: "+currentPart.split(" ")[wordNumber])
        }
        currentPartResult.push(currentPartOfPartString.trim());
        currentPartOfPartString = "";

        // product part:
        currentPartOfPartString += currentPart.split(" ").slice(wordNumber).join(" ");
        currentPartResult.push(currentPartOfPartString.trim());

        // append result:
        result.push(currentPartResult);
    }
    return result;
}

function isValuePartRequirement(word, next="") {
    /*
        returns array in a format [boolean (whether word is valueRequirement or not),
                                   integer (how many of the following words are considered the same)]
    */
    if (/\d/.test(word)) {
        return [true, 0];
    }
    if (next !== "") {
        if (word.includes("nejaké") && next[0].toLowerCase() === "množstvo") {
            return [true, 1];
        }
    }
    return [false, 0];
}

function isVerbPartRequirement(word) {
    return ["získaj", "vyrob", "utrať", "použi", "vyrieš", 
        "kúp", "vlož", "preskúmaj", "vyskúmaj", "obchoduj",
        "prijmi", "vytvor", "vylepši", "trénuj", "vykonaj"].find(elem => elem.toLowerCase() === word.toLowerCase()) !== undefined;
}

function translateConditionParts(conditionParts) {
    for (let i = 0; i < conditionParts.length; i++) {
        for (let j = 0; j < conditionParts[i].length; j++) {
            if (j == 0 || j == 2 || (isValuePartRequirement(conditionParts[i][j]) && !/\d/.test(conditionParts[i][j]))) {
                conditionParts[i][j] = translateCondition(conditionParts[i][j]);
            }
        }
    }
    return conditionParts;
}

function mergeParts(translatedConditions, connections) {
    let result = "";
    for (let i = 0; i < translatedConditions.length; i++) {
        result += translatedConditions[i].join(" ");
        if (i < connections.length) {
            result += " "+connections[i]+" ";
        }
    }
    return result;
}

function translateCondition(cond) {
    if (localStorage.getItem("lang") !== null) {
        if (localStorage.getItem("lang") === "cz") {
            return cond;
        }
        if (questsDictionary[localStorage.getItem("lang")].hasOwnProperty(cond.toLowerCase())) {
            if (startsWithCapital(cond)) {
                if (isAllCapitals(cond)) {
                    return questsDictionary[localStorage.getItem("lang")][cond.toLowerCase()].toUpperCase();
                } else {
                    return questsDictionary[localStorage.getItem("lang")][cond.toLowerCase()].charAt(0).toUpperCase() + questsDictionary[localStorage.getItem("lang")][cond.toLowerCase()].slice(1);
                }
            } else {
                return questsDictionary[localStorage.getItem("lang")][cond];
            }
        } else {
            if (startsWithCapital(cond)) {
                if (isAllCapitals(cond)) {
                    return questsDictionary["en"][cond.toLowerCase()].toUpperCase();
                } else {
                    return questsDictionary["en"][cond.toLowerCase()].charAt(0).toUpperCase() + questsDictionary["en"][cond.toLowerCase()].slice(1);
                }
            } else {
                return questsDictionary["en"][cond];
            }
        }
    } else {
        return "NO LANGUAGE SET (you can set your language using the globe button in the navigation bar)";
    }
}

function startsWithCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

function getAllPhrases(n, event_id) {
    //n == 1 or n == 2 or n == 3 v zavislosti od toho ci chcem verb, value alebo product
    let result = new Set();
    for (let quest = 0; quest < quests[event_id].length; quest++) {
        let questParts = getQuestParts(quests[event_id][quest]);
        let questPartsConnections = getQuestConnections(quests[event_id][quest]);
        let conditionParts = getConditionParts(questParts);
        let translatedConditionParts = translateConditionParts(conditionParts);
        for (let j = 0; j < translatedConditionParts.length; j++) {
            result.add(translatedConditionParts[j][n-1].toLowerCase());
        }
    }
    return result;
}

function isAllCapitals(word) {
    return ["vb"].includes(word.toLowerCase());
}