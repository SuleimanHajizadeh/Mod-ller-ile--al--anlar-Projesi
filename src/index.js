import { Request } from "./requests";

// Elementleri Secme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInpun = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees")

// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

request.post({name: "Yahya Hajizadeh", department: "Pazarlama", salary:10000})
.then(employee => console.log(employee))
.catch(err => console.log(err));