<?php
$host = 'localhost';
$username = 'root';
$password = 'usbw';
$dbname = 'el';

$mysqli = new mysqli($host,$username,$password,$dbname);
if ($mysqli->connect_errno) {
	echo '<strong>Could not connect to server.</strong>';
} else {
	$mysqli->query("SET CHARACTER SET 'utf8'");
}
