let myLeads = [];
const inputEl = document.getElementById("input-el");
const button = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let removeLeads = document.getElementById("remove-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

button.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
      </li>
    `;
  }

  ulEl.innerHTML = listItems;
}

removeLeads.addEventListener("click", function () {
  ulEl.innerHTML = "<li></li>";
  localStorage.clear();
});
