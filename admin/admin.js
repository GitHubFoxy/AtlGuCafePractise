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
