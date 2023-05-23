<?php
if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $login = $_POST["login"];
    $password = $_POST["password"];
    $avatar_url = $_POST["avatar_url"];
    $role = $_POST["role"];

    require 'dbh.inc.php';
    $sql =  "INSERT INTO `employees` (`user_id`, `name`, `login`, `password`, `avatar_url`, `role`) VALUES (NULL, '$name', '$login', '$password', '$avatar_url', '$role');";
    if (mysqli_query($conn, $sql)) {
        echo 'new record created';
    }else {
        echo $sql ." | ". mysqli_error($conn);
    }
}
else {
    header("location: ../index.html");
}
