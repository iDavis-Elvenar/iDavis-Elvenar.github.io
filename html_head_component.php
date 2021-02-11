<?php
//session_start();
if (! isset($page)){
    echo "<h1>ERROR HAS OCCURED</h1>";
}else{
?>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap-4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="bootstrap-4.3.1/css/custom.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="javascript/jquery-3.5.1.min.js"></script>
    <script src="bootstrap-4.3.1/js/bootstrap.min.js" ></script>

    <!-- Our JavaScript Exception handler-->
    <script src="javascript/exception_handler.js"></script>
    <script src="javascript/global_functions.js"></script>

    <!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>-->


    <?php if ($page == 'log_in'){?>
        <!-- Our JavaScript -->
        <script src="javascript/login_page.js"></script>
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/login.css">
        <title>Login Page</title>
    <?php }?>
    <?php if ($page == 'admin_page'){?>
        <!-- Our JavaScript -->
        <script src="javascript/login_page.js"></script>
        <script src="javascript/admin_page.js"></script>
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/login.css">
        <title>Administrator Page</title>
    <?php }?>
    <?php if (isset($_SESSION['role'])){ ?>
        <!-- Our JavaScript -->
        <script src="javascript/log_out.js"></script>
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/employee.css">
        <title>iDavis Page</title>
    <?php }?>
    <?php if ($page == 'event_guide'){ ?>
        <!-- Our JavaScript -->
        <script src="javascript/log_out.js"></script>
        <!--<script  src="javascript/config.js"></script>-->
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/config.css">
        <title>Eveng Guide</title>
    <?php }?>
    <?php if ($page == 'all_buildings'){ ?>
        <!-- Our JavaScript -->
        <script src="javascript/log_out.js"></script>
        <script src="javascript/all_buildings.js"></script>
        <!--<script  src="javascript/config.js"></script>-->
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/config.css">
        <title>All Buildings</title>
    <?php }?>
    <?php if ($page == 'change_password'){ ?>
        <!-- Our JavaScript -->
        <script src="javascript/log_out.js"></script>
        <script src="javascript/change_password.js"></script>
        <!-- Modified Bootstrap CSS -->
        <link rel="stylesheet" href="css/changePassword.css">
        <title>Change Password</title>
    <?php }?>
</head>
<?php }?>