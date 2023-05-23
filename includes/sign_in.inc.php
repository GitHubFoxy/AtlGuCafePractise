<?php
if (isset($_POST["submit"])) {
    $login = $_POST["login"];
    $password = $_POST["password"];
    require 'dbh.inc.php';
    $sql =  "SELECT * FROM `employees` WHERE (`login` = '$login' and `password` = '$password');";
    if (mysqli_query($conn, $sql)) {
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            if ($row['login'] === $login && $row['password'] === $password) {
                switch ($row['role']) {
                    case 1:
                        header("Location: ../admin/");
                        $domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
                        setcookie('role', 'admin', time() + 20 * 24 * 60 * 60, '/', $domain, false);
                        setcookie('login', $row['login'], time() + 20 * 24 * 60 * 60, '/', $domain, false);

                        break;
                    case 2:
                        header("Location: ../waiter/");
                        $domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
                        setcookie('role', 'waiter', time() + 20 * 24 * 60 * 60, '/', $domain, false);
                        setcookie('login', $row['login'], time() + 20 * 24 * 60 * 60, '/', $domain, false);

                        break;
                    case 3:
                        header("Location: ../cook/");
                        $domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
                        setcookie('role', 'cook', time() + 20 * 24 * 60 * 60, '/', $domain, false);
                        setcookie('login', $row['login'], time() + 20 * 24 * 60 * 60, '/', $domain, false);
                        break;
                }
            }
        } else {
            echo $sql . " | " . mysqli_error($conn);
            header("Location: ../index.php?error404");
        }
    }
} else {
    header("location: ../index.php");
}
