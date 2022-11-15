function setRightBar() {
    let rightBar = document.getElementById("right_bar");
    rightBar.innerHTML = "aaa";
    rightBar.style.width = document.getElementById("left_bar").offsetWidth;

    return;

    let numberOfAdditionalItems = 0;
    if (additionalTabsEvents.hasOwnProperty(selectedEvent)) {
        numberOfAdditionalItems = additionalTabsEvents[selectedEvent].length;
    }

    let featuredBaseTabs = handleFeatureFlag("info_tab");
    
    let numberOfBaseItems = featuredBaseTabs.length;

    leftBar.style.height = ""+((numberOfBaseItems*50)+(numberOfAdditionalItems*50))+"px";

    for (let b = 0; b < numberOfBaseItems; b++) {
        let div = document.createElement("div");
        div.className = "justify-content-center box d-flex flex-column";
        div.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        div.id = baseTabsEvents[b]["id"];
        let span = document.createElement("span");
        span.className = "allign-middle";
        let a = document.createElement("a");
        a.className = "text-link font-weight-bold";
        a.id = featuredBaseTabs[b]["id"].substring(0, featuredBaseTabs[b]["id"].lastIndexOf("_"));
        a.href = featuredBaseTabs[b]["href"];
        //a.href += "-"+getSelectedEvent();
        a.onclick = function() {
            switchView(featuredBaseTabs[b]["onclick"]);
        }
        a.innerHTML = langUI(featuredBaseTabs[b]["name"]);
        let img = document.createElement("img");
        if (featuredBaseTabs[b]["img"] === "various") {
            img.src = eventsInfoIcons[getSelectedEvent()]["img"];
            img.style = "width: "+eventsInfoIcons[getSelectedEvent()]["img_width"]+"px; "+eventsInfoIcons[getSelectedEvent()]["img_style"];
        } else {
            img.src = featuredBaseTabs[b]["img"];
            img.style = "width: "+featuredBaseTabs[b]["img_width"]+"px; "+featuredBaseTabs[b]["img_style"];
        }
        a.prepend(img);
        span.appendChild(a);
        div.appendChild(span);
        leftBar.appendChild(div);
    }

    for (let i = 0; i < numberOfAdditionalItems; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "justify-content-center box d-flex flex-column";
        newDiv.style.height = ""+(100/(numberOfAdditionalItems+numberOfBaseItems))+"%";
        newDiv.id = additionalTabsEvents[selectedEvent][i]["id"];
        let newSpan = document.createElement("span");
        newSpan.className = "allign-middle";
        let newA = document.createElement("a");
        newA.className = "text-link font-weight-bold";
        newA.href = additionalTabsEvents[selectedEvent][i]["href"];
        newA.href += "-"+selectedEvent;
        newA.onclick = function() {
            switchView(additionalTabsEvents[selectedEvent][i]["id"]);
        }
        newA.innerHTML = additionalTabsEvents[selectedEvent][i]["name"];
        let newImg = document.createElement("img");
        newImg.src= additionalTabsEvents[selectedEvent][i]["img"];
        newImg.style = "width: "+additionalTabsEvents[selectedEvent][i]["img_width"]+"px; "+additionalTabsEvents[selectedEvent][i]["img_style"];
        newA.prepend(newImg);
        newSpan.appendChild(newA);
        newDiv.appendChild(newSpan);
        leftBar.appendChild(newDiv);
    }
}