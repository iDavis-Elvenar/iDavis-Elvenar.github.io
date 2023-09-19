function loadPage() {
    if (location.href.split('#').length > 1 && location.href.split('#')[1] !== "") {
        if (location.href.split('#')[1].includes("day")) {
            location.href = location.href.split('#')[0];
            displayDailyPrizes();
        } else {
            if (location.href.split('#')[1].split('-')[1] !== "") {
                eventId = location.href.split('#')[1].split('-')[1];
                eventSelect = document.getElementById("input_event");
                for (let option = 0; option < eventSelect.options.length; option++) {
                    if (eventSelect.options[option].value === location.href.split('#')[1].split('-')[1]) {
                        eventSelect.selectedIndex = option;
                    }
                }
            }
            foundView = location.href.split('#')[1].split("-")[0];
            switchView(foundView);
        }
    } else {
        displayMainPage();
    }
}

function displayMainPage() {
    var center = document.createElement('center');
    var div = document.createElement('div');
    div.innerHTML = 'test';
    center.appendChild(div);
    document.getElementById("column_with_tables").appendChild(center);
}