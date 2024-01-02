function readTomesJSON() {
    prepSetAlertElements();
    create_exception("Loading...", 10000, 'primary');

    var parent = document.getElementById("column_with_tables");

    $.get('database/tomes.json')
        .done(data => {

            var searchedValue = document.getElementById("input_search").value;
            var searchUsed = searchedValue !== "";

            var filteredData;

            if (searchUsed) {
                filteredData = data.filter(tome => tome['name'].toLowerCase().includes(searchedValue.toLowerCase()));
            } else {
                filteredData = data;
            }

            for (var i = 0; i < filteredData.length; i++) {

                var h5 = document.createElement('h5');
                h5.id = filteredData[i]['id'];
                h5.className = "card-title text-center text-title font-weight-bold";
                h5.style.textAlign = "left";
                h5.innerHTML = `${filteredData[i]['name']}`;
                parent.appendChild(h5);

                var div = document.createElement('div');
                div.id = filteredData[i]['id']+"_div";
                div.className = 'bbTable';
                div.style.overflow = "visible";
                div.style.marginBottom = "20px";

                var divFirstTable = document.createElement('div');
                divFirstTable.className = "bbTable";
                divFirstTable.style.overflow = "auto";

                var firstTable = document.createElement('table');
                firstTable.className = 'table-primary';
                firstTable.style.width = "100%";

                var t1body = document.createElement('tbody');
                var t1r = document.createElement('tr');
                var td11 = document.createElement('td');
                td11.style.width = "60%";
                td11.innerHTML = `<center><img src="${rskIcons["all"]}"></center>`;
                var td12 = document.createElement('td');
                td12.style.width = "40%";
                td12.innerHTML = filteredData[i]['description'];
                let h5hashtag = document.createElement('h5');
                h5hashtag.id = "#"+filteredData[i]['id'];
                h5hashtag.innerHTML = '<a class="text-link font-weight-bold" id="hash"><img src="images/general/share-symbol.png" class="pointer" title="Open in new tab and share" width="15px;"></a><br>';
                h5hashtag.addEventListener('click', function() {
                    openInNewTab(location.href.split(`#`)[0]+h5hashtag.id);
                });
                td12.appendChild(h5hashtag);


                t1r.appendChild(td11);
                t1r.appendChild(td12);
                t1body.appendChild(t1r);
                firstTable.appendChild(t1body);
                divFirstTable.appendChild(firstTable);

                var divSecondTable = document.createElement('div');
                divSecondTable.className = "bbTable";
                divSecondTable.style.overflow = "auto";

                var secondTable = document.createElement('table');
                secondTable.className = 'table-primary text-center';
                secondTable.style.width = "100%";
                var t2body = document.createElement('tbody');
                var tr21 = document.createElement('tr');

                for (var j = 0; j < filteredData[i]['rewards'].length; j++) {
                    var td21 = document.createElement('td');
                    switch (filteredData[i]['rewards'][j]['type']) {
                        case "building": {
                            var building = filteredData[i]['rewards'][j];
                            var image = images_buildings[building['subType']];
                            td21.innerHTML = `<img src="${image}" style="max-height: 72px;">`;
                            $.get('database/buildings.json', function(data) {
                                td21.innerHTML += `<a class="text-link font-weight-bold" href="buildings.html#${building['subType']}" target="_blank">${data.filter(elem => elem.id === building['subType'])[0]['name']}</a>`;
                            });
                            break;
                        }
                        default: td21.innerHTML = `${filteredData[i]['rewards'][j]['subType']}`;
                    }
                    tr21.appendChild(td21);
                }

                var tr22 = document.createElement('tr');
                for (var j = 0; j < filteredData[i]['rewards'].length; j++) {
                    var td22 = document.createElement('td');
                    td22.innerHTML = `${filteredData[i]['rewards'][j]['amount']}`;
                    tr22.appendChild(td22);
                }

                t2body.appendChild(tr21);
                t2body.appendChild(tr22);
                secondTable.appendChild(t2body);
                divSecondTable.appendChild(secondTable);

                div.appendChild(divFirstTable);
                div.appendChild(divSecondTable);
                parent.appendChild(div);
            }

        });

    create_exception("Buildings Generated!", 3, 'success');
}