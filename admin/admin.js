const showButton = document.getElementById("CreateShiftDialog");
const shiftDialog = document.getElementById("shiftDialog");
const discardShift = document.getElementById("DiscardShift");
const ConfirmShift = document.getElementById("ConfirmShift");
const backdropClick = document.querySelector("dialog::backdrop");
const OpenNewEmployee = document.querySelector("#newEmployee");
const newEmployeeDialog = document.querySelector("#newEmployeeDialog");
const DiscardNewEmployee = document.querySelector("#discardNewEmployee");
const SubmitNewEmployee = document.querySelector("#submitNewEmployee");
const spanAdd = document.querySelectorAll("#addspan");
const cheful = document.querySelector(".cheful");
const waiterul = document.querySelector(".waiterul");
const SearchUL = document.querySelector("#listofemployee");

showButton.addEventListener("click", (e) => {
  shiftDialog.showModal();
});
discardShift.addEventListener("click", (e) => {
  e.preventDefault();
  shiftDialog.close();
  console.log("Discard");
});
const closeShift = document.querySelector("#closeshift");
closeShift.addEventListener("click", (e) => {
  prompt(
    "Are you sure you want to close shift?(enter 'yes:yourpassword' to continue)"
  );
});
const fire = document.querySelector("#fire");
fire.addEventListener("click", (e) => {
  prompt(
    "Are you sure you want to fire?(enter 'yes:yourpassword' to continue)"
  );
});
OpenNewEmployee.addEventListener("click", (e) => {
  newEmployeeDialog.showModal();
});
DiscardNewEmployee.addEventListener("click", (e) => {
  e.preventDefault();
  newEmployeeDialog.close();
});

//////////////////////////////////////////////////////////////////
ConfirmShift.addEventListener("click", (e) => {
  e.preventDefault();
  shiftDialog.close();
  let chefCrew = [];
  let chefulli = document.querySelectorAll(".cheful li");
  chefulli.forEach((li) => {
    chefCrew.push(li.innerText.slice(0, -1));
  });
  let WaiterCrew = [];
  let Waiter_ul_li = document.querySelectorAll(".waiterul li");
  Waiter_ul_li.forEach((li) => {
    WaiterCrew.push(li.innerText.slice(0, -1));
  });

  ShiftObject = {
    start_at: document.querySelector("#start_at").value,
    end_at: document.querySelector("#end_at").value,
    chef: chefCrew,
    waiter: WaiterCrew,
  };
  console.log(JSON.stringify(ShiftObject));
});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
SubmitNewEmployee.addEventListener("click", () => {
  newEmployee = {
    name: `${document.querySelector("#NewEmployeeNameInput").value}`,
    login: `${document.querySelector("#NewEmployeeLoginInput").value}`,
    password: `${document.querySelector("#NewEmployeePasswordInput").value}`,
    AvatarURL: `${document.querySelector("#NewEmployeeURLInput").value}`,
    Role: `${document.querySelector("#RoleSelect").value}`,
  };
  console.log(JSON.stringify(newEmployee));
});
//////////////////////////////////////////////////////////////////

function Search() {
  const SearchBar = document.querySelector("#searchEmployee");
  let filter = SearchBar.value.toUpperCase();
  const SearchUL = document.querySelector("#listofemployee");
  const li = document.querySelectorAll("#listofemployee li");
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
  const spanDelete = document.querySelectorAll("#spandelete");
  spanDelete.forEach((span) => {
    span.addEventListener("click", (e) => {
      // e.target.closest("li").style.display= "none";
      cheful.removeChild(e.target.closest("li"));
      SearchUL.innerHTML += `<li data-role=${
        e.target.closest("li").dataset.role
      }>${e.target
        .closest("li")
        .textContent.slice(0, -1)}<span id="addspan">+</span></li>`;
    });
  });
}

spanAdd.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.closest("li").dataset.role == "2") {
      cheful.innerHTML += `<li data-role=${
        e.target.closest("li").dataset.role
      }>${e.target
        .closest("li")
        .textContent.slice(
          0,
          -1
        )}<span id="spandelete" onclick="spanDelete()">-</span></li>`;
      SearchUL.removeChild(e.target.closest("li"));
    } else {
      waiterul.innerHTML += `<li>${e.target
        .closest("li")
        .textContent.slice(
          0,
          -1
        )}<span id="spandelete" onclick="spanDelete()">-</span></li>`;
      SearchUL.removeChild(e.target.closest("li"));
    }
  });
});
//////////////////////////////////////////////////////////////////

function Search() {
  const SearchBar = document.querySelector("#searchEmployee");
  let filter = SearchBar.value.toUpperCase();
  const SearchUL = document.querySelector("#listofemployee");
  const li = document.querySelectorAll("#listofemployee li");
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
  const spanDelete = document.querySelectorAll("#spandelete");
  spanDelete.forEach((span) => {
    span.addEventListener("click", (e) => {
      // e.target.closest("li").style.display= "none";
      cheful.removeChild(e.target.closest("li"));
      SearchUL.innerHTML += `<li data-role=${
        e.target.closest("li").dataset.role
      }>${e.target
        .closest("li")
        .textContent.slice(0, -1)}<span id="addspan">+</span></li>`;
    });
  });
}

spanAdd.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.closest("li").dataset.role == "2") {
      cheful.innerHTML += `<li data-role=${
        e.target.closest("li").dataset.role
      }>${e.target
        .closest("li")
        .textContent.slice(
          0,
          -1
        )}<span id="spandelete" onclick="spanDelete()">-</span></li>`;
      SearchUL.removeChild(e.target.closest("li"));
    } else {
      waiterul.innerHTML += `<li>${e.target
        .closest("li")
        .textContent.slice(
          0,
          -1
        )}<span id="spandelete" onclick="spanDelete()">-</span></li>`;
      SearchUL.removeChild(e.target.closest("li"));
    }
  });
});
