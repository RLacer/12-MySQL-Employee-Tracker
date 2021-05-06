const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');


const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Schoolschool21',
  database: 'employee_trackerDB',
});

const start = () => {
  inquirer
    .prompt({
      name: 'search',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Add a department', 'Add a role', 'Add an Employee', 'View a department', 'View a role', 'View an employee', 'Update an employee role', 'EXIT'],
    })
    .then(({ search }) => {
      console.log(search);
      switch (search) {
        case "Add a department":
          addDept();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "View a department":
          viewDept();
          break;
        case "View a role":
          viewRole();
          break;
        case "View an employee":
          viewEmployee();
          break;
        case "Update an employee role":
         updateEmployee();
          break;
        default: "Exit"
          return

      }
    })
}





connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // connection.end();
});


// run the start function after the connection is made to prompt the user
start()
