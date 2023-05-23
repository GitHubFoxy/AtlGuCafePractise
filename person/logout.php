<?php
$domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
setcookie('role', '', time() - 3600, '/', $domain, false);
setcookie('login', '', time() - 3600, '/', $domain, false);
header("Location: ../index.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logout</title>
</head>

<body>

</body>

</html>