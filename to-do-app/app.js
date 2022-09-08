
var mainDiv = document.getElementById('main');

var table = document.createElement('table');
var tRow = document.createElement('tr');
var tData1 = document.createElement('td');
var form = document.createElement('form');
form.setAttribute("onSubmit", "event.preventDefault();onFormSubmit();")


mainDiv.appendChild(table);
table.appendChild(tRow);
tRow.appendChild(tData1);
tData1.appendChild(form);


var iDiv1 = document.createElement('div');

var iDiv2 = document.createElement('div');

var iDiv3 = document.createElement('div');

var iDiv4 = document.createElement('div');
iDiv4.setAttribute("class", "action-buttons");

var inputBtn = document.createElement('input');
inputBtn.setAttribute("type", "submit");
inputBtn.setAttribute("value", "submit");
inputBtn.setAttribute("value", "submit");

var btnText = document.createTextNode('submit');


form.appendChild(iDiv1);
form.appendChild(iDiv2);
form.appendChild(iDiv3);
form.appendChild(iDiv4);
form.appendChild(inputBtn);
iDiv4.appendChild(inputBtn);
inputBtn.appendChild(btnText);

// ============================================ input 1 ===================================================

var label1 = document.createElement('label');
var labelText1 = document.createTextNode('Full Name');
var validationL = document.createElement('label');
var validationText = document.createTextNode('This field is required');
validationL.setAttribute("class", "validation-error hide");
validationL.setAttribute("class", "fullNamevalidationError");

var input1 = document.createElement('input');
input1.setAttribute("type", "text");
// input1.setAttribute("name", "fullName");
input1.setAttribute("id", "fullName");

label1.appendChild(labelText1);
iDiv1.appendChild(label1);
iDiv1.appendChild(input1);
iDiv1.appendChild(validationL);


// ============================================ input 2 ===================================================


var label2 = document.createElement('label');
var labelText2 = document.createTextNode('Cnic');
var input2 = document.createElement('input');
input2.setAttribute("type", "number");
// input2.setAttribute("name", "CNIC");
input2.setAttribute("id", "cnic");

label2.appendChild(labelText2);
iDiv2.appendChild(label2);
iDiv2.appendChild(input2);


// ============================================ input 3 ===================================================


var label3 = document.createElement('label');
var labelText3 = document.createTextNode('Salary');
var input3 = document.createElement('input');
input3.setAttribute("type", "number");
// input3.setAttribute("name", "salary");
input3.setAttribute("id", "salary");

label3.appendChild(labelText3);
iDiv3.appendChild(label3);
iDiv3.appendChild(input3);



var tData2 = document.createElement('td');
var table2 = document.createElement('table');
table2.setAttribute("class", "list");
table2.setAttribute("id", "employeeList");

var thead = document.createElement('thead');
var tRow2 = document.createElement('tr');

var tHead1 = document.createElement('th');
var tHead1Text = document.createTextNode('Full Name');
tHead1.appendChild(tHead1Text);

var tHead2 = document.createElement('th');
var tHead2Text = document.createTextNode('CNIC');
tHead2.appendChild(tHead2Text);

var tHead3 = document.createElement('th');
var tHead3Text = document.createTextNode('Salary');
tHead3.appendChild(tHead3Text);

var tbody = document.createElement('tbody');

// var tHead4 = document.createElement('th');

tRow.appendChild(tData2);
tData2.appendChild(table2);
table2.appendChild(thead);
thead.appendChild(tRow2);
table2.appendChild(tbody);

tRow2.appendChild(tHead1);

tRow2.appendChild(tHead2);

tRow2.appendChild(tHead3);



var selectedRow = null;

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
   
}


function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById('fullName').value;
    formData["cnic"] = document.getElementById('cnic').value;
    formData["salary"] = document.getElementById('salary').value;

    return formData;
}


function insertNewRecord(data) {
    var tableRecord = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var newRow = tableRecord.insertRow(tableRecord.length)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cnic;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
}

function resetForm() {
    document.getElementById('fullName').value = "";
    document.getElementById('cnic').value = "";
    document.getElementById('salary').value = "";
    selectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('cnic').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.cnic;
    selectedRow.cells[2].innerHTML = formData.salary;
}

// function onDelete() {
//     if (confirm("Are yoy sure you wanna delete this record ? ")) {
//         row = td.parentElement.parentElement;
//         document.getElementById('employeeList').deleteRow(row.rowIndex);
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById('fullName').value = "") {
//         isValid = false;
//         document.getElementById("fullNamevalidationError").classList.remove("hide");
//     }
//     else {
//         isValid = true;
//         if (document.getElementById("fullNamevalidationError").classList.contains("hide")) {
//             document.getElementById("fullNamevalidationError").classList.add("hide");
//         }
//         return isValid;
//     }
// }