
const bodyData = [
  {
    portal: "ClientCorporate",
    name: "Ahmed",
    email: "test@test.com",
    status: "Unbanned",
    added: "2202-09-05 11:31:11",
  },
  {
    portal: "ClientCorporate",
    name: "Ahmed",
    email: "test@test.com",
    status: "Unbanned",
    added: "2202-09-05 11:31:11",
  },
  {
    portal: "ClientCorporate",
    name: "Ahmed",
    email: "test@test.com",
    status: "Unbanned",
    added: "2202-09-05 11:31:11",
  },
  {
    portal: "ClientCorporate",
    name: "Ahmed",
    email: "test@test.com",
    status: "Unbanned",
    added: "2202-09-05 11:31:11",
  }
];

let headers = [ "#", "portal", "property", "outlet", "name", "email", "status", "added", "modified"];


function createTable() {
  // Get Table element
  const table = document.querySelector("table");
  // create thead and tbody elements
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  // append thead and tbody to the table element
  table.appendChild(thead);
  table.appendChild(tbody);
  // create headerRow element
  const headerRow = document.createElement("tr");
  // Append headerRow to thead
  thead.appendChild(headerRow);

  // Add headers to the table
  headers.forEach((item) => {
    // create th element
    const th = document.createElement("th");
    // append th to thead
    headerRow.appendChild(th);
    th.innerHTML += item;
  });

  tbody.appendChild(headerRow);

  // Add data to the body of the table
  bodyData.forEach((item, idx) => {
    // create td element
    const bodyRow = document.createElement("tr");
    tbody.appendChild(bodyRow);

    headers.forEach((key) => {
      // create td element
      const td = document.createElement("td");

      bodyRow.appendChild(td);
      td.innerHTML += key === "#" ? idx + 1 : item[key] || "-";
    });
  });
}

window.onload = createTable();


let modalWrap = null;
let headersInner = [];
const showModal = () => {

  if(modalWrap !== null) {
    modalWrap.remove();
  }

  const modalContent = () => (
    `<form class="d-flex flex-column" >
      ${headers.slice(1).map((header) => `
        <div class="d-flex flex-column">
          <label class="d-flex justify-content-between fw-bold p-2" onclick="headersInner.push(${header})">
          <span>${header}</span>
          <input type="checkbox" name="" id="${header}" checked="${header}"/>
          </label>
        </div>
      `)}
    </form>`)

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Settings</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">${modalContent()}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick="handleModal()" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);

  const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
}

settingBtn.addEventListener("click", showModal)

function handleModal() {
  const newHeader = [...new Set(headersInner)]

  newHeader.map((header1) => {
    headers = headers.filter((h) => h !== header1.id)
  });

  const table = document.querySelector("table");
  table.innerHTML = ""
  createTable();
}

