function questTranslate(item) {
    if (item === []) {
        return "";
    }

    var copyItem = [];

    item.forEach(function(quest, index) {
        if (index % 2 == 0) {
            var string = questsDictionary[localStorage.getItem("lang")][quest["id"]];
            string = string.replace("_", quest["value"]);
            var declinable = string.match(/d{[^{]+}/g);
            if (declinable) {
                for (var i = 0; i < Object.keys(declinable).length; i++) {
                    var forms = declinable[i].substring(2, declinable[i].length-1);
                    var formsList = forms.split(",");
                    var value = quest["value"];
                    if (typeof quest["value"] == 'string') {
                        value = parseInt(quest["value"].split("-")[1]);
                    }
                    var chosenForm = selectCorrectForm(value, formsList);
                    string = string.replace(declinable[i], chosenForm);
                }
            }
            if (quest["img"]) string = `<img src="${quest["img"]}" style="width: 18px; margin-bottom: 3px; margin-right: 4px;">` + string;
            copyItem.push(string);
        } else {
            copyItem.push(item[index]);
        }
    });

    var result = [];
    var temp = [];

    copyItem.forEach(function(part) {
        if (part == "and") {
            result.push(temp);
            temp = [];
        } else if (part !== "or") {
            temp.push(part);
        }
    });
    result.push(temp);

    return result;
}

function selectCorrectForm(value, formsList) {
    if (localStorage.getItem("lang") === "cz" || localStorage.getItem("lang") === "pl") {
        if (value == 1) {
            return formsList[0]; //singulár
        }
        else if (value < 5) {
            return formsList[1]; //nom. pl.
        }
        else {
            return formsList[2]; //gen. pl.
        }
    }
    if (localStorage.getItem("lang") === "en" || localStorage.getItem("lang") === "de" || localStorage.getItem("lang") === "fr" || localStorage.getItem("lang") === "it") {
        if (value == 1) {
            return formsList[0]; //singulár
        }
        else {
            return formsList[1]; //pl.
        }
    }
    if (localStorage.getItem("lang") === "ru") {
        if ((value >= 11 && value <= 14) || (value % 10 >= 5 && value % 10 <= 9) || value % 10 == 0) {
            return formsList[2]; //gen. pl.
        } else if (value % 10 == 2 || value % 10 == 3 || value % 10 == 4) {
            return formsList[1]; //gen. singulár
        } else if (value % 10 == 1) {
            return formsList[0]; //singulár
        }
    }
    if (localStorage.getItem("lang") === "hu") {
        return formsList[0];
    }
}