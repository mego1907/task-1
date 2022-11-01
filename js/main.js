
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
let cols = [ "portal", "property", "outlet", "name", "email", "status", "added", "modified"];


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
let updatedHeaders = [];
const showModal = () => {
  // don't dublicate the modal
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  //===========================================
  //============ create Form ==================
  //===========================================
  const form = document.createElement("form");
  form.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center")
  cols.map((col) => {
    const formInner = document.createElement("div");

    const label = document.createElement("label");
    label.classList.add("fw-bold");
    formInner.appendChild(label);

    const input = document.createElement("input");
    input.classList.add("m-3")
    input.setAttribute("type", "checkbox");


    const span = document.createElement("span");
    span.innerHTML = col;
  
    label.appendChild(span);
    label.appendChild(input);

    label.addEventListener("click", function () {
      updatedHeaders.push(col);
    });

    form.appendChild(formInner);
  });

  //===========================================
  //============= create Modal ================
  //===========================================
  const modalEle = document.createElement("div");
  modalEle.classList.add("modal");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const title = document.createElement("h5");
  title.classList.add("modal-title");
  title.innerHTML = "Settings";

  const closeIcon = document.createElement("button");
  closeIcon.setAttribute("type", "button");
  closeIcon.setAttribute("data-bs-dismiss", "modal");
  closeIcon.classList.add("btn-close");

  modalHeader.append(title, closeIcon);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.appendChild(form);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const closeBtn = document.createElement("button")
  closeBtn.setAttribute("data-bs-dismiss", "modal");
  closeBtn.innerHTML = "Close";

  const saveBtn = document.createElement("Button")
  saveBtn.setAttribute("type", "button")
  saveBtn.classList.add("btn", "btn-secondary");
  saveBtn.setAttribute("data-bs-dismiss", "modal");
  saveBtn.setAttribute("onclick", "handleModalClick()");

  modalFooter.append(closeBtn, saveBtn)

  // modalFooter.innerHTML = `
  //   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //   <button type="button" class="btn btn-primary" onclick="handleModalClick()" data-bs-dismiss="modal">Save changes</button>
  // `;

  modalEle.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalWrap = document.createElement("div");
  modalWrap.appendChild(modalEle);

  document.body.append(modalWrap);

  const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};

settingBtn.addEventListener("click", showModal);

// Handle settings in modal
function handleModalClick() {
  const shownColumns = [...new Set(updatedHeaders)];

  shownColumns.map((header1) => {
    headers = headers.filter((h) => h !== header1);
  });

  const table = document.querySelector("table");
  table.innerHTML = "";
  createTable();
}



// let modalWrap = null;
// let headersInner = [];
// const showModal = () => {

//   //============ create Form ==================
//   const form = document.createElement("form");
//   // form.classList.add("")
//   headers.slice(1).map((column) => {
//     // const formInner = document.createElement("div").classList.add("d-flex flex-column");
//     const formInner = document.createElement("div");
//     const label = document.createElement("label");
//       // label.classList.add("d-flex justify-content-between fw-bold p-2");
//     formInner.appendChild(label)
//     // const input = document.createElement("input");
//     label.innerHTML = column;
//     // label.appendChild(input)

//     form.appendChild(formInner);
//   })

//   if(modalWrap !== null) {
//     modalWrap.remove();
//   }

//   // ============ create Modal ==================
//   const modalEle = document.createElement("div");
//   modalEle.classList.add("modal")

//   const modalDialog = document.createElement("div");
//   modalDialog.classList.add("modal-dialog");

//   const modalContent = document.createElement("div");
//   modalContent.classList.add("modal-content");

//   const modalHeader = document.createElement("div");
//   modalHeader.classList.add("modal-header");

//   modalHeader.innerHTML = `
//       <h5 class="modal-title">Settings</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   `;

//   const modalBody = document.createElement("div");
//   modalBody.classList.add("modal-body");
//   modalBody.appendChild(form);

//   const modalFooter = document.createElement("div");
//   modalFooter.classList.add("modal-footer");
//   modalFooter.innerHTML = `
//     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <button type="button" class="btn btn-primary" onclick="handleModal()" data-bs-dismiss="modal">Save changes</button>
//   `;

//   modalEle.appendChild(modalDialog);
//   modalDialog.appendChild(modalContent);
//   modalContent.appendChild(modalHeader);
//   modalContent.appendChild(modalBody);
//   modalContent.appendChild(modalFooter);

//   // const modalBody = document.querySelector(".modal");
//   // console.log(modalBody);
//   // modalBody.appendChild(form)

//   // const modalContent = () => (
//   //   `<form class="d-flex flex-column" >
//   //     ${headers.slice(1).map((header) => `
//   //       <div class="d-flex flex-column">
//   //         <label class="d-flex justify-content-between fw-bold p-2" onclick="headersInner.push(${header})">
//   //         <span>${header}</span>
//   //         <input type="checkbox" name="" id="${header}" checked="${header}"/>
//   //         </label>
//   //       </div>
//   //     `)}
//   //   </form>`)

//   modalWrap = document.createElement('div');
//   modalWrap.appendChild(modalEle)
//   // modalWrap.innerHTML = `
//   //   <div class="modal">
//   //     <div class="modal-dialog">
//   //       <div class="modal-content">
//   //         <div class="modal-header">
//   //           <h5 class="modal-title">Settings</h5>
//   //           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   //         </div>
//   //         <div class="modal-body">${modalContent()}</div>
//   //         <div class="modal-footer">
//   //           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//   //           <button type="button" class="btn btn-primary" onclick="handleModal()" data-bs-dismiss="modal">Save changes</button>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // `;

//   document.body.append(modalWrap);

//   const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
//   modal.show();
// }




// ==================================================================================
// ==================================================================================
// ==================================================================================

const data = [
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
  },
];

let columns = [
  "#",
  "portal",
  "property",
  "outlet",
  "name",
  "email",
  "status",
  "added",
  "modified",
];

class CreateTableWithSettings{

  constructor(data, columns, settings){
    // Params
    this.data = data;
    this.columns = columns;
    this.settings = settings;

    // Variables
    this.modalWrap = null
  }

  // create table Func
  createTable() {
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
    this.columns.forEach((item) => {
      // create th element
      const th = document.createElement("th");
      // append th to thead
      headerRow.appendChild(th);
      th.innerHTML += item;
    });

    tbody.appendChild(headerRow);

    // Add data to the body of the table
    this.data.forEach((item, idx) => {
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

  // create modal Func
  createModal() {
    // don't dublicate the modal
    if (modalWrap !== null) {
      modalWrap.remove();
    }

    //===========================================
    //============ create Form ==================
    //===========================================
    const form = document.createElement("form");
    // form.classList.add("")
    headers.slice(1).map((column) => {
      // const formInner = document.createElement("div").classList.add("d-flex flex-column");
      const formInner = document.createElement("div");
      const label = document.createElement("label");
      // label.classList.add("d-flex justify-content-between fw-bold p-2");
      formInner.appendChild(label);
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      label.innerHTML = column;
      label.appendChild(input);

      label.addEventListener("click", function () {
        headersInner.push(column);
      });

      form.appendChild(formInner);
    });

    // ============================================
    // ============ create Modal ==================
    // ============================================
    const modalEle = document.createElement("div");
    modalEle.classList.add("modal");

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    modalHeader.innerHTML = `
    <h5 class="modal-title">Settings</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  `;

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalBody.appendChild(form);

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    modalFooter.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" onclick="handleModal()" data-bs-dismiss="modal">Save changes</button>
  `;

    modalEle.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalWrap = document.createElement("div");
    modalWrap.appendChild(modalEle);

    document.body.append(modalWrap);

    const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
  }

  // handle modal click Func
  handleModalClick() {
    const newHeader = [...new Set(headersInner)];

    newHeader.map((header1) => {
      headers = headers.filter((h) => h !== header1.id);
    });

    const table = document.querySelector("table");
    table.innerHTML = "";
    createTable();
  }
}

const tableClass = new CreateTableWithSettings(data, columns);
// settingBtn.addEventListener("click", tableClass.handleModalClick());
