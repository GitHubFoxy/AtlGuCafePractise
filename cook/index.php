<?php
if ($_COOKIE['role'] === 'waiter') {
  header("Location: ../waiter");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="cook.css" />
  <title>Cook</title>
</head>

<body>
  <div class="box">
    <div class="orders outline">
      <h1>Orders</h1>
      <p>New</p>
      <ul>
        <li>lorem <span>+</span></li>
        <li>lorem<span>+</span></li>
      </ul>
      <p>Done</p>
      <ul>
        <li>lorem<span>+</span></li>
        <li>lorem<span>+</span></li>
        <li>lorem<span>+</span></li>
      </ul>
      <button id="seeAllBtn">See All</button>
    </div>
    <div class="inProgress outline">
      <h1>In Progress</h1>
      <ul>
        <li>lorem<span>+</span></li>
      </ul>
    </div>
    <div class="ready outline">
      <h1>Ready</h1>
      <ul>
        <li>lorem</li>
      </ul>
    </div>
  </div>
  <?php
  include "../php/footer.php";
  ?>
</body>

</html>