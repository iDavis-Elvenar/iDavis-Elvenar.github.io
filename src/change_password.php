<?php
session_start();
if ($_SESSION['role'] == 'admin') {
?>
<!doctype html>
<html lang="en">
<?php
$page = 'change_password';
include('html_head_component.php');
?>
<body>
<?php
include('html_nav_component.php');
include('exception_handler.php');
?>
<div id="role_down">
<div class="container" style="margin-top: 100px">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h3 class="card-title text-center">Change Password</h3>
          <form class="form-sign" onsubmit="return false;">
            <div class="form-group" >
              <label for="inputEmail"></label>
              <label for="inputOldPassword"></label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" value="<?php echo $_SESSION['username']?>" required disabled>
            </div>

            <div class="form-group">

              <input type="password" id="inputOldPassword" class="form-control" placeholder="Old password" required>

            </div>

            <div class="form-group">
              <input type="password" id="inputNewPassword" class="form-control" placeholder="New password" required>
              <label for="inputNewPassword"></label>
            </div>
            <button class="btn btn-lg btn-warning btn-block text-uppercase" type="submit" onclick="change_password()">Change</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</body>

</html>
    <script>
        <?php
            if ($_SESSION['login_count'] == 0){
        ?>
        setTimeout(pre_make_exception,200);
        function pre_make_exception(){
            create_exception('Before starting using this application, please change your password',10,'warning');
        }
        <?php
            }
        ?>
    </script>
<?php
}else{
    ?>
    <script>window.open('index.php',"_self");</script>
    <?php
}
?>