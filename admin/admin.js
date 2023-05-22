const showButton = document.getElementById("CreateShiftDialog");
const shiftDialog = document.getElementById("shiftDialog");
const discardShift = document.getElementById("DiscardShift");
const ConfirmShift = document.getElementById("ConfirmShift");
const backdropClick = document.querySelector("dialog::backdrop");

showButton.addEventListener("click", (e) => {
  shiftDialog.showModal();
});
discardShift.addEventListener("click", (e) => {
  e.preventDefault();
  shiftDialog.close();
  console.log("Discard");
});
ConfirmShift.addEventListener("click", (e) => {
  e.preventDefault();
  shiftDialog.close();
  console.log("Confirmed");
});

const fire = document.querySelector("#fire");
fire.addEventListener("click", (e) => {
  prompt(
    "Are you sure you want to fire?(enter 'yes:yourpassword' to continue)"
  );
});

const closeShift = document.querySelector("#closeshift");
closeShift.addEventListener("click", (e) => {
  prompt(
    "Are you sure you want to close shift?(enter 'yes:yourpassword' to continue)"
  );
});

const OpenNewEmployee = document.querySelector("#newEmployee");
const newEmployeeDialog = document.querySelector("#newEmployeeDialog");
const DiscardNewEmployee = document.querySelector("#discardNewEmployee");
const SubmitNewEmployee = document.querySelector("#submitNewEmployee");
OpenNewEmployee.addEventListener("click", (e) => {
  e.preventDefault();
  newEmployeeDialog.showModal();
});
DiscardNewEmployee.addEventListener("click", (e) => {
  e.preventDefault();
  newEmployeeDialog.close();
});
SubmitNewEmployee.addEventListener("click", (e) => {
  e.preventDefault();
  newEmployee = {
    name: `${document.querySelector("#NewEmployeeNameInput").value}`,
    login: `${document.querySelector("#NewEmployeeLoginInput").value}`,
    password: `${document.querySelector("#NewEmployeePasswordInput").value}`,
    AvatarURL: `${document.querySelector("#NewEmployeeURLInput").value}`,
    Role: `${document.querySelector("#RoleSelect").value}`,
  };
  newEmployeeDialog.close();
  console.log("New Employee Added\n", newEmployee);
});
