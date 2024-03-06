// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Creating an empty array to store employees
  const employees = [];

  let shouldContinue = true;
  while (shouldContinue) {
    const firstName = prompt("Please enter the first name:");
    // Check for user cancellation or empty string
    if (firstName == null || firstName == "") {
      isCancelled = true;
      break; //Early exit if the user cancels or clicks ok without entering text
    }

    const lastName = prompt("Please enter the last name:");
    let salary = prompt("Please enter the current salary:");

    // Validate salary input
    while (!isValidSalary(salary)) {
      salary = prompt("Invalid salary. Please enter a valid number:");
    }

    const salaryNumber = parseFloat(salary);

    // Add the collected employee data to the employees array
    employees.push({
      firstName,
      lastName,
      salary: salaryNumber,
    });

    // Ask if the user wants to continue adding employees or cancel
    const continueChoice = confirm("Do you want to add another employee?");
    shouldContinue = continueChoice;

    // Break out of the loop immediately if the user cancels
    if (!shouldContinue) {
      break;
    }
  }

  return employees;
};

// Function to validate user input for salary
function isValidSalary(salary) {
  const parsedSalary = parseFloat(salary);
  return !isNaN(parsedSalary) && parsedSalary >= 0;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Check if there are employees before calculating average salary
  if (employeesArray.length === 0) {
    console.log("There are no employees to calculate average salary.");
  } else {
    const totalSalary = employeesArray.reduce(
      (acc, employee) => acc + employee.salary,
      0
    );
    const averageSalary = totalSalary / employeesArray.length;
    console.log(
      "Average Salary:",
      averageSalary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    );
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Check if there are employees before accessing them
  if (employeesArray.length === 0) {
    console.log("There are no employees to pick a random one.");
    return; // Or handle the empty array scenario here
  }
  if (employeesArray.length === 0) {
    console.log("There are no employees to pick a random one.");
  } else {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(
      "Random Employee:",
      `${randomEmployee.firstName} ${randomEmployee.lastName}`
    );
  }
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
