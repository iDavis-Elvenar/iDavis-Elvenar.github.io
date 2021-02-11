<?php
//session_start();
?>
        <nav class="navbar navbar-light fixed-top bg-dark highest1">
            <button class="navbar-toggler navbar-toggler-right bg-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onclick="rollNavigation()">
                <span class="navbar-toggler-icon"> </span>
            </button>
            <a href="index.php" class="navbar-brand text-white"><img src="images/general/home.png" width="30" style="position: relative;"> Home</a>
            <a href="all_buildings.php" class="nav-link text-warning">All Buildings</a>
            <a href="all_events.php" class="nav-link text-warning">All Events</a>

            <div>
                <?php if (isset($_SESSION['role']) && $_SESSION['role'] == 'admin') {?>
                <button class="btn btn-default bg-light" style="margin-right:50px;"onclick="log_out()">Log Out</button>
                <?php }?>
                <img src="images/general/idavis.png" width="48" style="margin-left: 10px;right:8px;top: 5px;position: absolute;">
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link text-white" href="events_february_xxi.php"><img src="images/events/february_xxi/currency_big.png" width="32" style="margin-bottom: 5px; margin-right: 5px; position: relative;">Carnival 2021</a>
                    <a class="nav-item nav-link text-white" href=#>Chapter 18</a>
                    <a class="nav-item nav-link text-white" href="admin_page.php">Admin page</a>
                    <?php if (isset($_SESSION['role']) && $_SESSION['role'] == 'admin') {?>
                    <a class="nav-item nav-link text-white" href="change_password.php">Change password</a>
                    <?php }?>
                </div>
            </div>
        </nav>

<!--<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Academind</a>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link">Users</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
        </ul>
    </div>

</nav>-->



