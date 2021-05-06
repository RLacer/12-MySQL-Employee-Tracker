const db = require('./db');
const { prompt } = require('inquirer');
const { createDepartment } = require('./db');
const { listenerCount } = require('./db/connection');
require('console.table');



async function start() {
  const { choice } = await prompt({
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['Add a department', 'Add a role', 'Add an Employee', 'View departments', 'View roles', 'View employees', 'Update an employee role', 'EXIT'],
  })
  console.log(choice);
  switch (choice) {
    case "Add a department":
      addDept();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an Employee":
      addEmployee();
      break;
    case "View departments":
      viewDept();
      break;
    case "View roles":
      viewRole();
      break;
    case "View employees":
      viewEmployee();
      break;
    case "Update an employee role":
      updateEmployee();
      break;
    default:
      return quit();

  }
}





const quit = function() {
  console.log('Good Bye!');
  process.exit();
  }


start()
