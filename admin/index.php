<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="admin.css" />
    <title>Admin</title>
  </head>
  <body>
    <div class="box">
      <button id="CreateShiftDialog">Create Shift</button>
      <dialog id="shiftDialog">
        <form action="" id="shiftDialogForm">
          <p>
            Create shift
            <input
              type="text"
              name=""
              id="searchEmployee"
              placeholder="Search employee"
            />
          </p>
          
          <ul id="listofemployee">
            <li>Lorem<span> +</span></li>
            <li>Repellat!<span> +</span></li>
            <li>Voluptatibus!<span> +</span></li>
            <li>Reprehenderit?<span> +</span></li>
            <li>In?<span> +</span></li>
          </ul>
        </input>
          <table id="phoneflex">
            <tr id="phoneflex">
              <th>
                <p>Chef</p>
                <ul id="scrollbar">
                  <li>Lorem.<span id="spandelete"> -</span></li>
                  <li>Neque?<span id="spandelete"> -</span></li>
                  <li>Dicta!<span id="spandelete"> -</span></li>
                  <li>Nemo!<span id="spandelete"> -</span></li>
                  <li>Architecto.<span id="spandelete"> -</span></li>
                  <li>Architecto.<span id="spandelete"> -</span></li>
                </ul>
              </th>
              <th>
                <p>Waiter</p>
                <ul id="scrollbar">
                  <li>Lorem.<span id="spandelete"> -</span></li>
                  <li>Neque?<span id="spandelete"> -</span></li>
                  <li>Dicta!<span id="spandelete"> -</span></li>
                  <li>Nemo!<span id="spandelete"> -</span></li>
                  <li>Architecto.<span id="spandelete"> -</span></li>
                  <li>Architecto.<span id="spandelete"> -</span></li>
                </ul>
              </th>
            </tr>
          </table>
          <p>Started At: <input type="datetime-local" name="" id="startAT" /></p>
          <p>End At: <input type="datetime-local" name="" id="endAT" /></p>
          <div id="Shiftbtns">
            <button id="DiscardShift">Discard</button>
            <button id="ConfirmShift">Confirm</button>
          </div>
        </form>
      </dialog>
      <div class="orders outline">
        <h1>Orders</h1>
        <select name="" id="sortby">
          <option value="" hidden disabled selected>Sort By:</option>
          <option value="">Popularity</option>
          <option value="">Lorem.</option>
        </select>
        <ul>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>
        <button id="seeAll Orders">See All</button>
      </div>
      <div class="employee outline">
        <h1>Employee`s</h1>
        <input type="text" placeholder="Search" />
        <ul>
          <li>Lorem. <span id="fire">Fire!</span></li>
        </ul>
        <button id="seeAll Employee">See All</button>
      </div>
      <div class="shifts outline">
        <h1>Shifts</h1>
        <input type="text" name="" id="Search" placeholder="Search" />
        <p>In Progress</p>
        <ul>
          <li>Lorem. <span id="closeshift">Close</span></li>
        </ul>
        <p>Closed</p>
        <ul>
          <li>Lorem.</li>
        </ul>
        <button id="seeAll Shift">See All</button>
      </div>
      <button id="newEmployee">New Employee</button>
      <dialog id="newEmployeeDialog" class="hidden">
        <form action="" id="newEmployeeDialogForm">
          <p>
            Auth new Employee
          </p>
        
        <input type="text" placeholder="Name" id="NewEmployeeNameInput">
        <input type="text" placeholder="Login"id="NewEmployeeLoginInput">
        <input type="password" placeholder="Password"id="NewEmployeePasswordInput">
        <input type="file" accept="image/png, image/gif, image/jpeg" placeholder="photo_file"id="NewEmployeeURLInput">
        <select id="RoleSelect">
          <option value="Role_id" hidden disabled selected>Role_id</option>
          <option value="1">Admin</option>
          <option value="2">Waiter</option>
          <option value="3">Cook</option>
        </select>
        <div class="flex"><button id="discardNewEmployee">Discard</button><button id="submitNewEmployee"type="submit">Submit new Employee</button>
        </div>
        </form>
</dialog>
    </div>
    <?php 
      include "../php/footer.php";
    ?>
    <script src="admin.js"></script>
  </body>
</html>
