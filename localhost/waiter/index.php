<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="waiter.css" />
    <title>Waiter</title>
  </head>
  <body>
    <div class="box">
      <div class="input">
        <input type="text" id="search" placeholder="Search" />
        <div id="add-icon"></div>
      </div>
      <div class="box">
        <h1>No Selected Positions</h1>
        <ol></ol>
      </div>
      <button type="submit" id="submit">Send to Cook</button>
    </div>
    <div class="orders">
      <h1 id="category">Orders</h1>
      <div class="">
        <p id="p">New</p>
        <ul id="scrollbar">
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
        <p id="p">Old</p>
        <ul id="scrollbar">
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>

      </div>
    </div>

    <?php 
      include "../php/footer.php";
    ?>
    <script src="waiter.js"></script>
  </body>
</html>
