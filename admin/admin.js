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
  ShiftObject = {
    "start_at": `${document.querySelector("#start_at").value}`,
    "end_at": `${document.querySelector("#start_at").value}`,
    "chef": `${document.querySelectorAll(".cheful li").value}`,
    "waiter": "",
  }
  console.log(JSON.stringify(ShiftObject))
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
  console.log(JSON.stringify(newEmployee))
  newEmployeeDialog.close();
});


function Search() {
  const SearchBar = document.querySelector("#searchEmployee")
  let filter = SearchBar.value.toUpperCase()
  const SearchUL = document.querySelector("#listofemployee")
  const li = document.querySelectorAll("#listofemployee li")
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function spanDelete() {
  const spanDelete = document.querySelectorAll("#spandelete")
  spanDelete.forEach(span => {
  span.addEventListener("click", (e) => {
    e.target.closest("li").style.display= "none";
    SearchUL.innerHTML += `<li data-role=${e.target.closest("li").dataset.role}>${e.target.closest("li").textContent.slice(0,-1)}<span id="addspan">+</span></li>`
  })
}); 
}
const spanAdd = document.querySelectorAll("#addspan")
const cheful = document.querySelector(".cheful")
const waiterul = document.querySelector(".waiterul");
const SearchUL = document.querySelector("#listofemployee")
spanAdd.forEach(span => {
  span.addEventListener("click", (e) => {
    if(e.target.closest("li").dataset.role == "2"){
      cheful.innerHTML += `<li data-role=${e.target.closest("li").dataset.role}>${e.target.closest("li").textContent.slice(0,-1)}<span id="spandelete" onclick="spanDelete()">-</span></li>`
      SearchUL.removeChild(e.target.closest("li"))
    } else {
      waiterul.innerHTML += `<li>${e.target.closest("li").textContent.slice(0,-1)}<span id="spandelete" onclick="spanDelete()">-</span></li>`
      SearchUL.removeChild(e.target.closest("li"))

    }
  })
})


