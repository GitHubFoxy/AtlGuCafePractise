<?php
if (isset($_COOKIE['role'])) {
  switch ($_COOKIE['role']) {
    case 'admin':
      header("Location: /admin");
      break;
    case 'waiter':
      header("Location: /waiter");
      break;
    case 'cook':
      header("Location: /cook");
      break;
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="main/auth.css" />
  <title>Auth</title>
</head>

<body>
  <h1>Authorize please</h1>
  <form action="includes/sign_in.inc.php" method="POST">
    <input type="text" placeholder="login" name="login" id="login" />
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit" id="submit" name="submit">auth</button>
  </form>
  <div class="circles">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  <!-- <script src="main/app.js"></script> -->
</body>

</html>