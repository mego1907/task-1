
// const data = [
//   {
//     portal: "ClientCorporate",
//     name: "Ahmed",
//     email: "test@test.com",
//     status: "Unbanned",
//     added: "2202-09-05 11:31:11",
//   },
//   {
//     portal: "ClientCorporate",
//     name: "Ahmed",
//     email: "test@test.com",
//     status: "Unbanned",
//     added: "2202-09-05 11:31:11",
//   },
//   {
//     portal: "ClientCorporate",
//     name: "Ahmed",
//     email: "test@test.com",
//     status: "Unbanned",
//     added: "2202-09-05 11:31:11",
//   },
//   {
//     portal: "ClientCorporate",
//     name: "Ahmed",
//     email: "test@test.com",
//     status: "Unbanned",
//     added: "2202-09-05 11:31:11",
//   }
// ];

// let columns = [
//   "#",
//   "portal",
//   "property",
//   "outlet",
//   "name",
//   "email",
//   "status",
//   "added",
//   "modified",
// ];
// let cols = [ "portal", "property", "outlet", "name", "email", "status", "added", "modified"];


// function createTable() {
//   // Get Table element
//   const table = document.querySelector("table");
//   // create thead and tbody elements
//   const thead = document.createElement("thead");
//   thead.classList.add("table-dark");

//   const tbody = document.createElement("tbody");
//   // append thead and tbody to the table element
//   table.appendChild(thead);
//   table.appendChild(tbody);
//   // create headerRow element
//   const headerRow = document.createElement("tr");
//   // Append headerRow to thead
//   thead.appendChild(headerRow);

//   // Add columns to the table
//   columns.forEach((item) => {
//     // create th element
//     const th = document.createElement("th");
//     // append th to thead
//     headerRow.appendChild(th);
//     th.innerHTML += item;
//   });

//   tbody.appendChild(headerRow);

//   // Add data to the body of the table
//   data.forEach((item, idx) => {
//     // create td element
//     const bodyRow = document.createElement("tr");
//     tbody.appendChild(bodyRow);

//     columns.forEach((key) => {
//       // create td element
//       const td = document.createElement("td");

//       bodyRow.appendChild(td);
//       td.innerHTML += key === "#" ? idx + 1 : item[key] || "-";
//     });
//   });
// }

// window.onload = createTable();

// let modalWrap = null;
// let updatedColumns = [];
// const showModal = () => {
//   // don't dublicate the modal
//   if (modalWrap !== null) {
//     modalWrap.remove();
//   }

//   //===========================================
//   //============ create Form ==================
//   //===========================================
//   const form = document.createElement("form");
//   form.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center")
//   cols.map((col) => {
//     const formInner = document.createElement("div");

//     const label = document.createElement("label");
//     label.classList.add("fw-bold");
//     formInner.appendChild(label);

//     const input = document.createElement("input");
//     input.classList.add("m-3")
//     input.setAttribute("type", "checkbox");


//     const checkInColumns = columns.includes(col);
//     input.checked = checkInColumns;


//     const span = document.createElement("span");
//     span.innerHTML = col;
  
//     label.appendChild(span);
//     label.appendChild(input);

//     label.addEventListener("click", function () {
//       if (checkInColumns) {
//         updatedColumns.push(col);
//       } else {
//         updatedColumns.pop(col);
//         if (!columns.includes(col)) columns.push(col);
//       }
//     });

//     form.appendChild(formInner);
//   });

//   //===========================================
//   //============= create Modal ================
//   //===========================================
//   const modalEle = document.createElement("div");
//   modalEle.classList.add("modal");

//   const modalDialog = document.createElement("div");
//   modalDialog.classList.add("modal-dialog");

//   const modalContent = document.createElement("div");
//   modalContent.classList.add("modal-content");

//   const modalHeader = document.createElement("div");
//   modalHeader.classList.add("modal-header");

//   const title = document.createElement("h5");
//   title.classList.add("modal-title");
//   title.innerHTML = "Settings";

//   const closeIcon = document.createElement("button");
//   closeIcon.setAttribute("type", "button");
//   closeIcon.setAttribute("data-bs-dismiss", "modal");
//   closeIcon.classList.add("btn-close");

//   modalHeader.append(title, closeIcon);

//   const modalBody = document.createElement("div");
//   modalBody.classList.add("modal-body");
//   modalBody.appendChild(form);

//   const modalFooter = document.createElement("div");
//   modalFooter.classList.add("modal-footer");

//   const closeBtn = document.createElement("button")
//   closeBtn.classList.add("btn", "btn-secondary");
//   closeBtn.setAttribute("data-bs-dismiss", "modal");
//   closeBtn.innerHTML = "Close";

//   const saveBtn = document.createElement("Button")
//   saveBtn.setAttribute("type", "button")
//   saveBtn.classList.add("btn", "btn-primary");
//   saveBtn.setAttribute("data-bs-dismiss", "modal");
//   saveBtn.setAttribute("onclick", "handleModalClick()");
//   saveBtn.innerHTML = "Save changes"

//   modalFooter.append(closeBtn, saveBtn);

//   modalEle.appendChild(modalDialog);
//   modalDialog.appendChild(modalContent);
//   modalContent.appendChild(modalHeader);
//   modalContent.appendChild(modalBody);
//   modalContent.appendChild(modalFooter);

//   modalWrap = document.createElement("div");
//   modalWrap.appendChild(modalEle);

//   document.body.append(modalWrap);

//   const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"), {backdrop: "static"});

//   modal.show();
// };

// settingBtn.addEventListener("click", showModal);

// // Handle settings in modal
// function handleModalClick() {
//   const shownColumns = [...new Set(updatedColumns)];

//   shownColumns.map((header1) => {
//     columns = columns.filter((h) => h !== header1);
//   });

//   const table = document.querySelector("table");
//   table.innerHTML = "";
//   createTable();
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
    this.cols = 9;
    this.updatedHeaders = []
  }

  

  // create table Func
  createTable() {
    // Get Table element
    const table = document.querySelector("table");
    // create thead and tbody elements
    const thead = document.createElement("thead");
    thead.classList.add("table-dark");

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

      this.columns.forEach((key) => {
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
    // if (this.modalWrap !== null) {
    //   this.modalWrap.remove();
    // }

    //===========================================
    //============= create Form =================
    //===========================================
    const form = document.createElement("form");
    form.classList.add(
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-center"
    );
    this.cols.map((col) => {
      const formInner = document.createElement("div");

      const label = document.createElement("label");
      label.classList.add("fw-bold");
      formInner.appendChild(label);

      const input = document.createElement("input");
      input.classList.add("m-3");
      input.setAttribute("type", "checkbox");

      const checkInHeaders = this.columns.includes(col);
      input.checked = checkInHeaders;

      const span = document.createElement("span");
      span.innerHTML = col;

      label.appendChild(span);
      label.appendChild(input);

      label.addEventListener("click", function () {
        if (checkInHeaders) {
          this.updatedHeaders.push(col);
        } else {
          this.updatedHeaders.pop(col);
          if (!headers.includes(col)) headers.push(col);
        }
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

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("btn", "btn-secondary");
    closeBtn.setAttribute("data-bs-dismiss", "modal");
    closeBtn.innerHTML = "Close";

    const saveBtn = document.createElement("Button");
    saveBtn.setAttribute("type", "button");
    saveBtn.classList.add("btn", "btn-primary");
    saveBtn.setAttribute("data-bs-dismiss", "modal");
    saveBtn.setAttribute("onclick", this.handleModalClick);
    saveBtn.innerHTML = "Save changes";

    modalFooter.append(closeBtn, saveBtn);

    modalEle.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    this.modalWrap = document.createElement("div");
    this.modalWrap.appendChild(modalEle);

    console.log(this.modalWrap);

    document.body.append(this.modalWrap);

    const modal = new bootstrap.Modal(this.modalWrap.querySelector(".modal"), {
      backdrop: "static",
    });

    modal.show();
  }

  // handle modal click Func
  handleModalClick() {
    const shownColumns = [...new Set(this.updatedHeaders)];

    shownColumns.map((header1) => {
      this.columns = this.columns.filter((h) => h !== header1);
    });

    const table = document.querySelector("table");
    table.innerHTML = "";
    // this.createTable
  }

}

const tableClass = new CreateTableWithSettings(data, columns);
window.onload = tableClass.createTable();
settingBtn.addEventListener("click", tableClass.createModal)

console.log(tableClass);