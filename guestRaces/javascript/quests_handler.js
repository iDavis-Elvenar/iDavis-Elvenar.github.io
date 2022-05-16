function displayQuests() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
    async function createExc() {
        create_exception("Loading...", 10000, 'primary');
    }
    createExc();

    let guestRace = getSelectedGuestRace();
    document.getElementById("column_with_tables").innerHTML = "";
    createGuestRaceHeader(guestRace);

    var h5 = document.createElement('h5');
    h5.id = 'quests_header';
    h5.className = "card-title text-center text-title font-weight-bold";
    h5.style.textAlign = "left";
    h5.innerHTML = `..:: ${langUI("List of Quests")} ::..<br>`;
    document.getElementById('column_with_tables').appendChild(h5);
    var div = document.createElement('div');
    div.style.textAlign = 'center';
    div.style.marginBottom = '10px';
    div.style.marginTop = '10px';
    var divBBTable = document.createElement('div');
    divBBTable.className = 'bbTable';
    var table = document.createElement('table');
    table.className = 'table-primary';
    table.style.width = '100%';
    var tbody = document.createElement('tbody');

    if (grQuests[guestRace] === undefined) {
        var h7 = document.createElement('h7');
        h7.id = 'quests_noQuests';
        h7.className = "card-title text-center";
        h7.style.textAlign = "left";
        h7.innerHTML = `${langUI("No recorded questline is available for this guest race")}.`;
        var center = document.createElement('center');
        center.appendChild(h7);
        document.getElementById('column_with_tables').appendChild(center);

    } else {

        var noteInfo = document.createElement('h7');
        noteInfo.id = 'quests_noteInfo';
        noteInfo.className = "card-title text-center";
        noteInfo.style.textAlign = "left";
        noteInfo.innerHTML = `${langUI("This quest list contains mandatory (story) quests of the chapter. These are not skipable, but in each chapter there might appear some additional quests that are skipable.")}`;
        var center = document.createElement('center');
        center.appendChild(noteInfo);
        var div_info = document.createElement('div');
        /*div_info.innerHTML = languageSpecificNotes[localStorage.getItem("lang")];
        if (localStorage.getItem("lang") == "pl") {
            var ph_translation_help = document.createElement('h6');
            ph_translation_help.className = "card-title text-center";
            ph_translation_help.innerHTML = `<br>I would like to make PL language available for the quest lists. If you are from this community and would like to contribute to development of this website by providing translations for around 60 already prepared short phrases, I will be more than happy if you leave me contact (either your Beta Forum nickname or your email) on my <a href="https://idavis-elvenar.github.io/contact.html" class="text-link">contact page</a>. <br>The translations will be used in all future events, so there is no need for recreating them every time.<br>Nicknames of all contributors will be listed in the quest pages of respective languages (of course if you wish to).`;
            center.appendChild(ph_translation_help);
        }*/
        center.appendChild(div_info)
        document.getElementById('column_with_tables').appendChild(center);

        var numberOfQuests = grQuests[guestRace].length;

        for (let quest = 0; quest <= numberOfQuests; quest++) {
            if (quest === 0) {
                let tr = document.createElement('tr');
                let number = document.createElement('th');
                number.innerHTML = `${langUI("Number")}`;
                tr.appendChild(number);
                let task = document.createElement('th');
                task.innerHTML = `${langUI("Task")}`;
                tr.appendChild(task);
                let rewards = document.createElement('th');
                rewards.innerHTML = `${langUI("Rewards")}`;
                rewards.style.width = "30%";
                tr.appendChild(rewards);
                let finished = document.createElement('th');
                finished.innerHTML = `${langUI("Finished")}`;
                finished.style.width = "5%";
                tr.appendChild(finished);
                tbody.appendChild(tr);
            } else {
                let tr = document.createElement('tr');
                let number = document.createElement('td');
                number.style.width = "5%";
                number.innerHTML = quest;
                tr.appendChild(number);
                let task = document.createElement('td');
                task.style.width = "60%";
                task.id = "quest_task_"+(quest);
                task.innerHTML = `${grQuests[guestRace][quest-1]["task"]}`;

                /*if (questAvailable(quest, selectedEvent)) {
                    task.innerHTML = `${questTranslate(quests[selectedEvent][quest-1])}`;
                } else {
                    if (!nextQuestMarkedUnknown) {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>${langUI("Reveals in")} ${getHoursTillNextDay()}h</i></h7>`;
                        nextQuestMarkedUnknown = true;
                    } else {
                        task.innerHTML = `<h7 class="card-title text-center text-link"><i>???</i></h7>`;
                    }
                }*/
                //console.log(quest+". "+questTranslate(quests[selectedEvent][quest-1]))
                task.className = "nocopy";
                /*task.innerHTML += `<div class="myTest custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>`;*/
                /*task.className = "text-left";
                task.style.paddingLeft = "10px";*/

                let rewards = document.createElement('td');
                rewards.id = "quest_reward_"+(quest);
                console.log(grQuests[guestRace][quest-1]["rewards"])
                rewards.innerHTML = `${grQuests[guestRace][quest-1]["rewards"].map(x => x.split(" ")[0].substring(0, x.split(" ")[0].length-1)+" "+goods_icons[x.split(" ")[1]]).join(" ").replaceAll("<br>", " ")}`;
                let finished = document.createElement('td');
                let div = document.createElement('div');
                div.className = "form-check";
                let input = document.createElement('input');
                input.className = "form-check-input";
                input.type = "checkbox";
                input.id = "quest_finished_"+(quest);
                if (Array(localStorage.getItem("quests_finished_"+guestRace)).join().split(',').includes(String(quest))) {
                    input.checked = true;
                    task.className = "text-quest_completed nocopy";
                }
                input.onchange = function() {
                    if (input.checked) {
                        for (let i = 1; i <= quest; i++) {
                            checkbox = document.getElementById("quest_finished_"+(i));
                            tasktext = document.getElementById("quest_task_"+(i));
                            rewardstext = document.getElementById("quest_reward_"+(i));
                            prepareCheckbox = document.getElementById("quest_prepare_"+(i));

                            checkbox.checked = true;
                            tasktext.className = "text-quest_completed nocopy";
                            tasktext.style.fontWeight = "";
                            rewardstext.className = "text-quest_completed nocopy";
                            rewardstext.style.fontWeight = "";
                        }
                    } else {
                        for (let i = quest; i <= numberOfQuests; i++) {
                            checkbox = document.getElementById("quest_finished_"+(i));
                            tasktext = document.getElementById("quest_task_"+(i));
                            rewardstext = document.getElementById("quest_reward_"+(i));
                            prepareCheckbox = document.getElementById("quest_prepare_"+(i));

                            checkbox.checked = false;
                            tasktext.className = "nocopy";
                            rewardstext.className = "nocopy";                                
                        }
                    }
                    recordFinishedQuests(guestRace, numberOfQuests);
                };
                let label = document.createElement('label');
                label.className = "form-check-label";
                label.htmlFor = quest;
                label.innerHTML = "";
                div.appendChild(input);
                div.appendChild(label);

                finished.appendChild(div);
                tr.appendChild(task);
                tr.appendChild(rewards);
                tr.appendChild(finished);
                tbody.appendChild(tr);
            }
        }
    }
    table.appendChild(tbody);
    divBBTable.appendChild(table);
    div.appendChild(divBBTable);
    document.getElementById('column_with_tables').appendChild(div);

    create_exception("Quests Generated!", 3, 'success');
}

function recordFinishedQuests(guestRace, numberOfQuests) {
    finished = [];
    for (let quest = 1; quest <= grQuests[guestRace].length; quest++) {
        if (document.getElementById("quest_finished_"+quest).checked) {
            finished.push(quest);
        }
    }
    localStorage.setItem("quests_finished_"+guestRace, finished);

    if (finished.length === numberOfQuests) {
        create_exception("Congrats! &#128516;", 5, 'success');
    }
}

function recordPrepareQuests(guestRace, numberOfQuests) {
    prepare = [];
    for (let quest = 1; quest <= grQuests[guestRace].length; quest++) {
        if (document.getElementById("quest_prepare_"+quest).checked) {
            prepare.push(quest);
        }
    }
    localStorage.setItem("quests_prepare_"+guestRace, prepare);
}