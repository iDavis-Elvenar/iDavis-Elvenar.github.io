<?php
session_start();
if ( isset($_SESSION['id']) == false ){


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

            <h1 id="company_name" class="card-title text-center text-warning">INDEX PAGE</h1>
        </div>
      </div>
    </div>

  </div>
</div>
</body>

</html>
<?php
}else{
    if ($_SESSION['role'] == 'admin'){
        ?>
        <script>window.open('admin_page.php',"_self");</script>
        <?php
    }
}?>