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
    document.getElementById("column_with_tables").innerHTML = "";
    var center = document.createElement('center');
    var div = document.createElement('div');
    var localizations = ["cz", "de"];
    for (var localization of localizations) {
        div.innerHTML += `<li><a href="#" onclick="displayLocalization('${localization}')">${localization}</a></li>`;
    }
    center.appendChild(div);
    document.getElementById("column_with_tables").appendChild(center);
}

function displayLocalization(localization) {
    document.getElementById("column_with_tables").innerHTML = "";
    var center = document.createElement('center');
    var div = document.createElement('div');
    
    // Update the entire URL including the hash to include the localization
    window.location.href = `#localization=${localization}`;
    
    $.get(`database/community-knowledge/${localization}/_threads.json`)
        .done(threads => {
            for (var thread of threads) {
                div.innerHTML += `<li><a href="#" onclick="displayThread('${localization}', '${thread}', '${1}')">${thread}</a></li>`;
            }
        });
    center.appendChild(div);
    document.getElementById("column_with_tables").appendChild(center);
}

function displayThread(localization, thread, page) {
    document.getElementById("column_with_tables").innerHTML = "";
    var center = document.createElement('center');
    var div = document.createElement('div');
    
    // Update the entire URL including the hash to include localization, thread, and page
    window.location.href = `#localization=${localization}&thread=${thread}&page=${page}`;
    
    $.get(`database/community-knowledge/${localization}/${thread}/${page}.json`)
        .done(posts => {
            for (var post of posts) {
                for (var key in post) {
                    div.innerHTML += `<li>${post[key]}</li>`;
                }
            }            
        });
    center.appendChild(div);
    
    if (parseInt(page) > 1) {
        var divPrevPage = document.createElement('div');
        divPrevPage.innerHTML += `<li><a href="#" onclick="displayThread('${localization}', '${thread}', '${parseInt(page) - 1}')">page ${parseInt(page) - 1}</a></li>`;
        center.appendChild(divPrevPage);
    }
    
    var divNextPage = document.createElement('div');
    divNextPage.innerHTML += `<li><a href="#" onclick="displayThread('${localization}', '${thread}', '${parseInt(page) + 1}')">page ${parseInt(page) + 1}</a></li>`;
    center.appendChild(divNextPage);
    
    document.getElementById("column_with_tables").appendChild(center);
}

// Function to parse URL hashtags and extract parameters
function parseHashParams() {
    var hash = window.location.hash.substring(1); // Remove the "#" at the beginning
    var params = {};
    var paramPairs = hash.split('&');
    
    for (var pair of paramPairs) {
        var keyValue = pair.split('=');
        if (keyValue.length === 2) {
            params[keyValue[0]] = keyValue[1];
        }
    }
    return params;
}

// Function to initialize the page based on URL hashtags
function initPageFromHash() {
    var params = parseHashParams();
    
    if ('localization' in params) {
        var localization = params['localization'];
        displayLocalization(localization);
        
        if ('thread' in params && 'page' in params) {
            var thread = params['thread'];
            var page = params['page'];
            displayThread(localization, thread, page);
        }
    } else {
        displayMainPage();
    }
}

// Initialize the page when the page loads
window.onload = function() {
    initPageFromHash();
};
