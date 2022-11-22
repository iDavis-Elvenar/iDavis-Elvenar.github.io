function setRightBar() {
    let rightBar = document.getElementById("right_bar");
    rightBar.style.width = document.getElementById("left_bar").offsetWidth;

    let divLiveServer = document.createElement('div');
    let divBetaServer = document.createElement('div');

    divLiveServer.style.height = "50%";
    divBetaServer.style.height = "50%"; 

    let headerLiveServer = document.createElement('h7');
    let headerBetaServer = document.createElement('h7');

    headerLiveServer.innerHTML = `<b>Live servers:</b>`;
    headerBetaServer.innerHTML = `<b>Beta server:</b>`;

    divLiveServer.appendChild(headerLiveServer);
    divBetaServer.appendChild(headerBetaServer);

    let eventsLiveServer = getCurrentEvents("live");
    let eventsBetaServer = getCurrentEvents("beta");

    let textLiveServer = document.createElement('h7');
    let textBetaServer = document.createElement('h7');

    console.log(eventsBetaServer)

    eventsLiveServer.forEach(function (event) {
        let p = document.createElement('p');
        p.innerHTML = event.name;
        textLiveServer.appendChild(p);
    });
    eventsBetaServer.forEach(function (event) {
        let p = document.createElement('p');
        p.innerHTML = event.name;
        textBetaServer.appendChild(p);
    });

    divLiveServer.appendChild(textLiveServer);
    divBetaServer.appendChild(textBetaServer);

    rightBar.appendChild(divLiveServer);
    rightBar.appendChild(divBetaServer);

    return;
}

function getCurrentEvents(serverType) {
    let result = [];

    let currentDate = new Date();

    let eventTypes = [eventStartDates, faStartDates, seasonStartDates];

    eventTypes.forEach(function (eventType) {
        for (const event in eventType) {
            let startDate = new Date(convertDisplayDateToJavascriptFormatDate(eventType[event][serverType]["start_date"]));
            let endDate = new Date(convertDisplayDateToJavascriptFormatDate(eventType[event][serverType]["end_date"]));
            if (startDate <= currentDate && currentDate <= endDate) {
                    switch (eventType) {
                        case eventStartDates: result.push({"type":"event", "id":event, "name":findEventNameById(event, "event"), "start_date":startDate, "end_date":endDate}); break;
                        case faStartDates: result.push({"type":"fa", "id":event, "name":findEventNameById(event, "fa"), "start_date":startDate, "end_date":endDate}); break;
                        case seasonStartDates: result.push({"type":"season", "id":event, "name":findEventNameById(event, "season"), "start_date":startDate, "end_date":endDate}); break;
                    }
                }
        }
    });

    return result;
}

function findEventNameById(eventId, eventType) {
    let result = "";
    switch (eventType) {
        case "event": {
            for (const year in allEvents["all_buildings"]) {
                allEvents["all_buildings"][year].forEach(function (item) {
                    if (item[1] === eventId) {
                        if (result === "") {
                        result = item[0].slice();
                        }
                    }
                });
            }
            break;
        }
        case "fa": {

            break;
        }
        case "season": {

            break;
        }
    }
    
    return result;
}