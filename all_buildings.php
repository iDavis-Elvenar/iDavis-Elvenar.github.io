<?php
session_start();
?>
    <!doctype html>
    <html lang="en">
<?php
$page = 'all_buildings';
include('html_head_component.php');
include('html_nav_component.php');
?>
    <body onload="readBuildingsJSON()">
<?php
include('exception_handler.php');
?>


<div style="padding-top: 59px;">
    <div style="width: 100%;">
        <div class="container-thick center bg-skin_dark_background rounded-bottom75" style="width: 100%; padding-top: 20px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;">
            <div class="row">
                <div class="col-sm">
                    <label for="input_event">Select event:</label>
                    <select id="input_event" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="">
                        <option value="all_events" style="background-color: #ecdec0;">All</option>
                        <option value="march_xxi_">Easter 2021</option>
                        <option value="february_xxi_">Elvarian Carnival 2021</option>
                        <option value="december_xx_">Winter Magic - The Snow Owl 2020</option>
                        <option value="october_xx_">Misty Forest - Halloween 2020</option>
                        <option value="september_xx_">Autumn Zodiac 2020</option>
                        <option value="july_xx_">Sorcerers' Pilgrimage 2020</option>
                        <option value="june_xx_">The Air Traders' Voyage 2020</option>
                        <option value="may_xx_">May Celebrations 2020</option>
                        <option value="easter_xx_">Gathering of the Phoenix Cults 2020</option>
                        <option value="car_xx_">Elvarian Carnival 2020</option>
                        <option value="winter_xix_">Winter Magic 2019</option>
                        <option value="halloween_xix">Dr. Freakenspleen 2019</option>
                        <option value="autumn_xix_">Autumn Zodiac 2019</option>
                        <option value="mm_xix_">Summer Mermaids 2019</option>
                        <option value="queenoffish">The Queen of the Seas 2019</option>
                        <option value="summer_xix_">Summer Solstice 2019</option>
                    </select>
                </div>
                <div class="col-sm">
                    <label for="input_production">Select production:</label>
                    <select id="input_production" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="">
                        <option value="all_events">All</option>
                        <option value="only,providedCulture">Culture Only</option>
                        <option value="only,providedCulture,provided_population">Culture & Population Only</option>
                        <option value="orcs">Orcs</option>
                        <option value="mana">Mana</option>
                        <option value="seeds">Seeds</option>
                    </select>
                </div>
                <div class="col-sm">
                    <label for="input_orderBy">Order By:</label>
                    <select id="input_orderBy" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="">
                        <option value="all_events">All</option>
                        <option value="only,providedCulture">Culture Only</option>
                        <option value="only,providedCulture,provided_population">Culture & Population Only</option>
                        <option value="orcs">Orcs</option>
                        <option value="mana">Mana</option>
                        <option value="seeds">Seeds</option>
                    </select>
                </div>
            </div>
            <div class="row center">
                <div class="col-sm" style="margin-left: 10px; margin-right: 10px; width: 20%;">

                </div>
                <div class="col-sm" style="margin-left: 10px; margin-right: 10px; width: 60%;">
                    <button class="btn btn-sm btn-success btn-block text-uppercase"  onclick="readBuildingsJSON()">Filter & Generate</button>
                </div>
                <div class="col-sm" style="margin-left: 10px; margin-right: 10px; width: 20%;">

                </div>
            </div>
        </div>
    </div>
</div>

<div id="event_main" style="padding-top: 20px;">
    <div id="event_buildings" style="width: 100%;">
        <div class="container center bg-skin_light_background rounded-bottom75 rounded-top75" style="width: 100%; padding-top: 20px; padding-bottom: 20px;">
            <div class="row">
                <div id="column_with_tables" class="col-sm">

                </div>
            </div>
        </div>
    </div>
</div>
