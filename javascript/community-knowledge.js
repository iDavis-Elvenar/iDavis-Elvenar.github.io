function displayMainPage() {
    document.getElementById("column_with_tables").innerHTML = "";
    var div = document.createElement('div');
    div.className = "ck-mainbox";

    var h2 = document.createElement('h2');
    h2.innerHTML = "Languages";
    var divContent = document.createElement('div');
    divContent.className = "div-content";

    history.pushState(null, null, `community-knowledge.html`);

    var localizations = [["cz", "Czech"], ["beta", "Beta"], ["en", "English"], ["de", "German"], ["pl", "Polish"]];
    for (var localization of localizations) {
        var section = document.createElement('section');

        var divIcon = document.createElement('div');
        divIcon.className = "row-icon";
        divIcon.innerHTML = "<img src=\"https://i.ibb.co/TKwn0Cz/forum-scroll.png\" />";

        var divLang = document.createElement('div');
        divLang.className = "row-main";
        
        divLang.innerHTML = `<a href="#" class="text-link" onclick="displayLocalization('${localization[0]}')">${localization[1]}</a>`;

        section.appendChild(divIcon);
        section.appendChild(divLang);

        divContent.appendChild(section);
    }
    div.appendChild(h2);
    div.appendChild(divContent);

    document.getElementById("column_with_tables").appendChild(div);
}

function displayLocalization(localization) {
    document.getElementById("column_with_tables").innerHTML = "";

    var localizations = {"cz": "Czech", "beta": "Beta", "en": "English", "de": "German", "pl": "Polish"};
    var navPanel = document.createElement('div');
    navPanel.className = "nav-panel";
    navPanel.innerHTML = `<a href="#" class="text-link" onclick="displayMainPage()">Community knowledge</a> > ${localizations[localization]}`;

    var div = document.createElement('div');
    div.className = "ck-mainbox";

    var h2 = document.createElement('h2');
    h2.innerHTML = "Threads";
    var divContent = document.createElement('div');
    divContent.className = "div-content";

    history.pushState(null, null, `community-knowledge.html?loc=${localization}`);

    $.get(`database/community-knowledge/${localization}/threads.json`)
        .done(threads => {
            for (var thread of threads) {
                var section = document.createElement('section');

                var divIcon = document.createElement('div');
                divIcon.className = "row-icon";
                divIcon.innerHTML = "<img src=\"https://cz.forum.elvenar.com/styles/game/icons/forum.png\" />";

                var divMain = document.createElement('div');
                divMain.className = "row-main";
                divMain.innerHTML = `<a href="#" class="text-link" onclick="displayThread('${localization}', '${thread[0]}', '${1}', '${thread[1]}')">${thread[0]}</a>`;

                var divSide = document.createElement('div');
                divSide.className = "row-side";
                divSide.innerHTML = `<span class="text-link">${langUI("Replies:")}</span>&nbsp;${thread[1]}`;

                section.appendChild(divIcon);
                section.appendChild(divMain);
                section.appendChild(divSide);

                divContent.appendChild(section);
            }
        });
    
    div.appendChild(h2);
    div.appendChild(divContent);

    document.getElementById("column_with_tables").appendChild(navPanel);
    document.getElementById("column_with_tables").appendChild(div);
}

function displayThread(localization, thread, page) {
    document.getElementById("column_with_tables").innerHTML = "";

    var localizations = {"cz": "Czech", "beta": "Beta", "en": "English", "de": "German", "pl": "Polish"};
    var navPanel = document.createElement('div');
    navPanel.className = "nav-panel";
    navPanel.innerHTML = `<a href="#" class="text-link" onclick="displayMainPage()">Community knowledge</a>
    > <a href="#" class="text-link" onclick="displayLocalization('${localization}')">${localizations[localization]}</a> > ${thread}`;

    var div = document.createElement('div');
    div.className = "ck-mainbox post-container";

    var h2 = document.createElement('h2');
    h2.innerHTML = thread;
    var divContent = document.createElement('div');
    divContent.className = "div-content";

    var pageSwitchContainerUpper = document.createElement('div');
    pageSwitchContainerUpper.className = "page-switch-container";

    history.pushState(null, null, `community-knowledge.html?loc=${localization}&thread=${thread}&page=${page}`);

    var maxPages = null;

    $.get(`database/community-knowledge/${localization}/${thread}/${page}.json`)
        .done(posts => {
            $.get(`database/community-knowledge/${localization}/authors.json`)
                .done(authors => {
                    $.get(`database/community-knowledge/${localization}/threads.json`)
                        .done(threads => {
                            for (threadData of threads) {
                                if (threadData[0] === thread) {
                                    maxPages = Math.ceil(threadData[1] / 20);
                                }
                            }
                            for (var post of posts) {
                                for (var key in post) {
                                    var section = document.createElement('section');
        
                                    var divIcon = document.createElement('div');
                                    divIcon.className = "row-icon";
                                    for (var name in authors[key]) {
                                        divIcon.innerHTML = `<div class="player-avatar"><img src="${authors[key][name]}" /></div>`;
                                        divIcon.innerHTML += `<p class="player-name">${name}</p>`;
                                    }
        
                                    var divMain = document.createElement('div');
                                    divMain.className = "row-main";
                                    var post = post[key];
                                    post = convertBBCodeToHTML(post);
                                    post = post.replaceAll("[BR]", "<br />");
                                    post = post.replaceAll("Spoiler", "");
                                    post = replaceSmilies(post);
                                    divMain.innerHTML = post;
        
                                    section.appendChild(divIcon);
                                    section.appendChild(divMain);
        
                                    divContent.appendChild(section);
                                }
                            }
                            // this separate function call is necessary to make sure the maxPages variable is initialized at the time it is being accessed
                            appendCreatedThreadData(localization, thread, page, maxPages, navPanel, div, divContent, h2, pageSwitchContainerUpper);
                        });
                });
        });
}

function appendCreatedThreadData(localization, thread, page, maxPages, navPanel, div, divContent, h2, pageSwitchContainerUpper) {
    var pageSwitchContainer = document.createElement('div');
    pageSwitchContainer.className = "page-switch-container";

    var pageSwitch = document.createElement('div');
    if (parseInt(page) >= 3) {
        pageSwitch.innerHTML += `<div class="switch-box switch-previous"><a href="#" class="text-link" onclick="displayThread('${localization}', '${thread}', '${1}')">${1}</a></div>`;
    }
    if (parseInt(page) > 1) {
        pageSwitch.innerHTML += `<div class="switch-box switch-previous"><a href="#" class="text-link" onclick="displayThread('${localization}', '${thread}', '${parseInt(page) - 1}')">< ${parseInt(page) - 1}</a></div>`;
    }

    pageSwitch.innerHTML += `<div class="switch-box switch-present">Page ${parseInt(page)}</div>`;

    if (page < maxPages) {
        pageSwitch.innerHTML += `<div class="switch-box switch-next"><a href="#" class="text-link" onclick="displayThread('${localization}', '${thread}', '${parseInt(page) + 1}')">${parseInt(page) + 1} ></a></div>`;
    }
    if (parseInt(page) <= maxPages - 2) {
        pageSwitch.innerHTML += `<div class="switch-box switch-next"><a href="#" class="text-link" onclick="displayThread('${localization}', '${thread}', '${maxPages}')">${maxPages}</a></div>`;
    }
    
    pageSwitchContainerUpper.appendChild(pageSwitch);
    pageSwitchContainer.appendChild(pageSwitch);

    div.appendChild(h2);
    //div.appendChild(pageSwitchContainerUpper);
    div.appendChild(divContent);
    div.appendChild(pageSwitchContainer);

    document.getElementById("column_with_tables").appendChild(navPanel);
    document.getElementById("column_with_tables").appendChild(div);
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
        if ('loc' in params) {
            var localization = params['loc'];
            
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

function convertBBCodeToHTML(input) {
    return input.replace(/\[IMG\](.*?)\[\/IMG\]/g, '<img src="$1">');
}

function replaceSmilies(post) {
    result = post.replaceAll("[smilie--sprite1]", "<img src='https://i.ibb.co/j3qWwMS/sprite1.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite2]", "<img src='https://i.ibb.co/jr9PFVp/sprite2.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite3]", "<img src='https://i.ibb.co/Kbf7MPQ/sprite3.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite4]", "<img src='https://i.ibb.co/tqg9zWC/sprite4.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite5]", "<img src='https://i.ibb.co/dBRrX8m/sprite5.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite6]", "<img src='https://i.ibb.co/MPP8tW7/sprite6.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite7]", "<img src='https://i.ibb.co/ZWtySzW/sprite7.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite8]", "<img src='https://i.ibb.co/k6XW8gP/sprite8.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite9]", "<img src='https://i.ibb.co/52q5WVb/sprite9.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite10]", "<img src='https://i.ibb.co/bNbZdDr/sprite10.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite11]", "<img src='https://i.ibb.co/PwpzNNH/sprite11.png' style='width: 20px'>");
    result = result.replaceAll("[smilie--sprite12]", "<img src='https://i.ibb.co/3WWLNtk/sprite12.png' style='width: 20px'>");
    return result;
}

window.addEventListener('popstate', function(event) {
    //initPageFromHash();
});

document.addEventListener('DOMContentLoaded', function () {
    initPageFromHash();
});