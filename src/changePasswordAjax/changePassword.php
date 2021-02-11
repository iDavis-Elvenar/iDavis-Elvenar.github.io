<?php
session_start();
include('../db.php');
if (isset($_POST['new_password']) && isset($_POST['old_password']) && isset($_SESSION['role'])){
    if ( $_SESSION['role'] == 'admin'){
        $old_password = mysqli_real_escape_string($mysqli,$_POST['old_password']);
        $new_password = mysqli_real_escape_string($mysqli,$_POST['new_password']);
        if (!$mysqli->connect_errno) {
            $sql="UPDATE users SET password=MD5('{$new_password}') WHERE username='{$_SESSION['username']}' and password=MD5('{$old_password}') ";
            if ($result = $mysqli->query($sql)) {
                if (mysqli_affected_rows($mysqli) > 0){
                    echo '1$Your password has been changed to: '.'<strong>'.$_POST["new_password"].'<strong';
                }else{
                    echo '2$An error occured while selecting new password.';
                }
            }else{
                echo 'Chyba sql <strong>changePasswordAjax/changePassword.php</strong> '.$sql;
            }
        } else {
            echo 'Could not connect to the server. Please check your <strong>internet connection</strong>.';
        }
    }else{
        echo 'The data is invalid.';
    }
}else{
    echo 'Data not sent.';
}