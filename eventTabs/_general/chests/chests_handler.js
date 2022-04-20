generateChests();

if (typeof rewardMultiplicator === "undefined") {
    var rewardMultiplicator = 1;
}

function generateChests() {
    var selectedEvent = getSelectedEvent();
    var chestsData = getChestsData(selectedEvent);
    draw(chestsData);

}

function getChestsData(selectedEvent) {
    return chests[selectedEvent];
}

function draw(chestsData) {
    let divCenter = document.createElement("div");
    divCenter.style.textAlign = "center";
    let divBBTable = document.createElement("div");
    divBBTable.className = "bbTable";

    for (let i = 0; i < chestsData.length; i++) {

      let table = document.createElement("table");
      table.className = "table-primary";
      table.style.width = "100%";
      table.style.marginBottom = "10px";
      let tbody = document.createElement("tbody");
      
      for (let r = 1; r <= 3; r++) {

          let tr = document.createElement("tr");

          if (r === 1) {

              let td1 = document.createElement("td");
              td1.rowSpan = "3";
              td1.style.width = "30%";
              let img = document.createElement("img");
              img.src = chestsData[i]["img"];
              td1.appendChild(img);
              tr.appendChild(td1);

              let td2 = document.createElement("td");
              td2.innerHTML = chestsData[i]["ec"]+` <img src="`+currencies[getSelectedEvent()]["ec"]+`">`;
              td2.style.width = 70/chestsData[i]["chances"].length+"%";
              tr.appendChild(td2);

              let td3 = document.createElement("td");
              td3.innerHTML = chestsData[i]["ep"]+` <img src="`+currencies[getSelectedEvent()]["ep"]+`">`;
              td3.style.width = 70/chestsData[i]["chances"].length+"%";
              tr.appendChild(td3);

              let td4 = document.createElement("td");
              td4.colSpan = chestsData[i]["chances"].length-2;
              tr.appendChild(td4);

          } else if (r === 2) {

              for (let d = 0; d < chestsData[i]["chances"].length; d++) {
                  
                  let th = document.createElement("th");
                  th.innerHTML = chestsData[i]["chances"][d]["percentage"]+"%";
                  th.style.width = 70/chestsData[i]["chances"].length+"%";
                  tr.appendChild(th);

              }

          } else {

              for (let d = 0; d < chestsData[i]["chances"].length; d++) {

                  let td = document.createElement("td");
                  $.getScript('database/flexibleRewards.js', function() {
                      let reward = getReward(chestsData, i, d);
                      td.innerHTML = (rewardMultiplicator*getAmount(chestsData, i, d))+"x "+reward;
                      rewardMultiplicator = 1;
                      td.style.width = 70/chestsData[i]["chances"].length+"%";
                      tr.appendChild(td);
                  });

              }

          }

          tbody.appendChild(tr);
      }

      table.appendChild(tbody);
      divBBTable.appendChild(table);
    }
    divCenter.appendChild(divBBTable);
    document.getElementById("column_with_tables").appendChild(divCenter);
}

function getAmount(chestsData, chest, chance) {
    return chestsData[chest]["chances"][chance]["amount"];
}

function getReward(chestsData, chest, chance) {
    if (chestsData[chest]["chances"][chance]["subType"].startsWith("daily_reward")) {
        return goods_icons["daily_reward"];
    }
    if (chestsData[chest]["chances"][chance]["subType"] === "event_currency_1") {
        return `<img src="`+currencies[getSelectedEvent()]["ec"]+`">`;
    }
    if (chestsData[chest]["chances"][chance]["type"] === "runeShard") {
        return goods_icons["rune_shard"];
    }
    if (chestsData[chest]["chances"][chance]["type"] === "item" || chestsData[chest]["chances"][chance]["type"] === "good") {
        if (goods_icons[chestsData[chest]["chances"][chance]["subType"]] !== undefined) {
            return goods_icons[chestsData[chest]["chances"][chance]["subType"]].replaceAll("<br>","");
        } else if (goods_icons[chestsData[chest]["chances"][chance]["subType"].toLowerCase()] !== undefined) {
          return goods_icons[chestsData[chest]["chances"][chance]["subType"].toLowerCase()].replaceAll("<br>","");
        } else {
            return "MISSING!!!"
        }
    }
    if (chestsData[chest]["chances"][chance]["type"] === "flexible_reward") {
        for (let fr = 0; fr < flexibleRewards.length; fr++) {
            if (flexibleRewards[fr]["id"] === chestsData[chest]["chances"][chance]["subType"]) {
                rewardMultiplicator = flexibleRewards[fr]["rewards"][localStorage.getItem("chapter")-1]["amount"];
                return goods_icons[flexibleRewards[fr]["rewards"][localStorage.getItem("chapter")-1]["subType"]];
            }
        }
    }
}