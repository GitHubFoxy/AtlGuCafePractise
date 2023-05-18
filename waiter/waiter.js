let search = document.querySelector("#search");
let submit = document.querySelector("#submit");
let addIcon = document.querySelector("#add-icon");
let h1 = document.querySelector("h1");
let ol = document.querySelector("ol");
var key = 1;
let arrayoffood = [];
addIcon.addEventListener("click", () => {
  additem();
});
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    additem();
  }
});

function additem() {
  if (search.value !== "") {
    h1.classList.add("hidden");
    ol.innerHTML += `<li data-value=${key}><p id="p">${key}: ${search.value}</p><div style="display: flex; gap: 10px;"></div><div id='delete' onClick="delItem(this)"style=" user-select: none;"></div></div></li>`;
    arrayoffood.push(key + ": " + search.value);
    search.value = "";
    key += 1;
  }
}
function delItem(e) {
  // add "are u sure" method
  ol.removeChild(e.parentNode);
}
function editItem(e) {
  /* <div id='edit' onClick=" editItem(this)"></div> */
}

submit.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(arrayoffood);
});
