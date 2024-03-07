Employee Payroll Tracker

## Task

Modify starter code to create an application that enables a payroll manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```md
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company
```

## Acceptance Criteria

```md
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data
```

## Mock-Up

The following images show the web application's appearance and functionality:

![Animation shows input of employees to an employee payroll tracker.](./assets/images/03-javascript-homework-demo.gif)

![Shows employee information in the console of an employee payroll tracker.](./assets/images/03-javascript-homework-console-demo.png)

## Getting Started

The following functions have been filled out:

- `collectEmployees`: This function allows a user to add multiple employees to display on the page. The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop.

- `displayAverageSalary`: This function takes in the generated array of employees and log the average salary and number of employees to the console. You should use a template literal string for this task.

- `getRandomEmployee`: This function takes in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console.
