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
    
    history.pushState(null, null, `community-knowledge.html?localization=${localization}`);
    
    $.get(`database/community-knowledge/${localization}/threads.json`)
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
    
    history.pushState(null, null, `community-knowledge.html?localization=${localization}&thread=${thread}&page=${page}`);
    
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

function parseHashParams() {
    if (window.location.href.split("?").length > 1) {
        var hash = window.location.href.split("?")[1];
        if (hash[hash.length-1] === "#") {
            hash = hash.slice(0, window.location.href.split("?")[1].length-1)
        }
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
}

function initPageFromHash() {
    var params = parseHashParams();
    
    if (params) {
        console.log(params)
        if ('localization' in params) {
            var localization = params['localization'];
            
            if ('thread' in params && 'page' in params) {
                var thread = decodeURIComponent(params['thread']);
                var page = params['page'];
                displayThread(localization, thread, page);
            } else {
                displayLocalization(localization);
            }
        } else {
            displayMainPage();
        }
    } else {
        displayMainPage();
    }
}

window.addEventListener('popstate', function(event) {
    initPageFromHash();
});

document.addEventListener('DOMContentLoaded', function () {
    initPageFromHash();
});