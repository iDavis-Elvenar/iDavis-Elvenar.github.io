<?php
session_start();
$page = 'admin_page';
include('../db.php');

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = mysqli_real_escape_string($mysqli,$_POST["username"]);
    $password = mysqli_real_escape_string($mysqli,$_POST["password"]);
    /*if (!$mysqli->connect_errno) {
        $sql="SELECT * FROM users where username='$username' and  password=MD5('$password')"; //password=MD5('$password')
        if ($result = $mysqli->query($sql)) {
            $row = $result->fetch_assoc();
            if ($row == NULL){
                echo "1$"."The combination of <strong>email</strong> and <strong>password</strong> you entered was not found." ;
            }else{
                $_SESSION['role'] = $row['role'];
                $_SESSION['username'] = $row['username'];
                $_SESSION['password'] = $row['password'];
                header("Content-Type:application/json");
                echo json_encode($row);
            }

        } else {
            echo 'Chybne sql <strong>login_AJAX/changePassword.php</strong> '.$sql;
        }
    } else {
        echo 'Could not connect to the server. Please check your internet connection.';
    }*/
    $_SESSION['role'] = 'admin';
    $_SESSION['username'] = 'admin';
    $_SESSION['password'] = 'admin';
}else{
    echo 'The data is not valid.';
}

