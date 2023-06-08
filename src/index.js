import { Request } from "./requests";
import { UI } from "./ui";

// Elementleri Secme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInpun = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

addEventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);

}

function getAllEmployees() {
    request.get()
        .then(employees => {
ui.addAllEmployeeToUI(employees);

        })
        .catch(err => console.log(err));
}

function addEmployee(e) {


    const employeeName = nameInput.value.trim();
    const employeeDerparment = departmentInpun.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeeDerparment === "" || employeeSalary === "") {
        alert("Lutfen tum alanlari doldurun");

    } else {
        request.post({name:employeeName,department:employeeDerparment,salary:Number(employeeSalary)})
        .then(employee => {
            ui.addAllEmployeeToUI(employee);
        })
        .catch(err => console.log(err));
    }



    ui.clearInputs();
    e.preventDefault();

}



// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// request.post({name: "Yahya Hajizadeh", department: "Pazarlama", salary:10000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// request.put(1,{name: "Yeshua Hajizadeh", department: "SnamiPharmacy LLC", salary:1000000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// request.delete(5)
//     .then(message => console.log(message))
//     .catch(err => console.log(err));