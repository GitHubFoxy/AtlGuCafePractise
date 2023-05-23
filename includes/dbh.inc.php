<?php

$serverName = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "tortotoro";

$conn = new mysqli($serverName, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}