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
OpenNewEmployee.addEventListener("click", (e) => {
  newEmployeeDialog.showModal();
});
