<?php
session_start();
if ( isset($_SESSION['role']) == false ){


    ?>
    <!doctype html>
    <html lang="en">
    <?php
    $page = 'log_in';
    include('html_head_component.php');
    include('html_nav_component.php');
    ?>
    <body>
    <?php
    include('exception_handler.php');
    ?>
    <div class="container" style="margin-top: 100px">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto ">
                <div class="card card-signin my-5 ">
                    <div class="card-body ">
                        <h5 class="card-title text-center">This is the admin page and you can log in only if you were given the access</h5>
                        <form class="form-signin" onsubmit="return false;">
                            <div class="form-label-group" style="margin-bottom: 20px" >
                                <label for="inputEmail"></label>
                                <input type="email" id="inputName" class="form-control" placeholder="Name" required autofocus>
                            </div>

                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                                <label for="inputPassword"></label>
                            </div>
                            <button class="btn btn-lg btn-warning btn-block text-uppercase" type="submit" onclick="log_in()">Log In</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </body>

    </html>
    <?php
}else{
    if ($_SESSION['role'] == 'admin'){?>
        <!doctype html>
        <html lang="en">
        <?php
        if (!isset($page)) {
            $page = 'admin_page';
            include('html_head_component.php');
        }
        include('html_nav_component.php');
        ?>
        <body>
        <?php
        include('exception_handler.php');
        ?>
        <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
            <p>Pregenerovanie <code-forum class="bbCodeInlineWhiteBg">buildings.json</code-forum> súboru. Ak sú
            vo filtri začlenené budovy ktoré už sú uložené, aktualizuje ich, ak nie, pridá nové.</p>


                <input class="form-control-file" type="file" id="myFile" name="filename">
                <input  class="form-control" id="filter" placeholder="Filter by substring of id">
                <input  class="form-control" id="exclude" placeholder="Exclude by substring of id (delimiter is ,)">
                <input  class="form-control_number" id="numOfChapters" placeholder="CHs" value="17">
                <button class="btn btn-lg btn-warning btn-block text-uppercase"  onclick="handleBuildingsJSON()">GENERATE</button>

        </div>
        <div class="container" style="margin-bottom: 20px;">
            <p>Vygenerovanie prázdneho jsonu s kľúčmi ako IDčka všetkých budov. (mal by sa neskor dat implementovat aj filter)</p>


            <input class="form-control-file" type="file" id="buildings_file" name="filename">
            <button class="btn btn-lg btn-warning btn-block text-uppercase"  onclick="generateJSONBuildingsIDs()">GENERATE</button>

        </div>
        </body>
        </html>
<?php
    }
}?>