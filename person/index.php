<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
        if (isset($_COOKIE['login'])) {
            echo $_COOKIE['login'];
        }

        ?>
    </title>
</head>

<body>
    <button id="logout">Logout</button>
</body>
<script src=" person.js"></script>

</html>