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
async function addDept() {
  console.log('hit');
  const department = await prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Enter a department name'
    }
  ])
  await db.createDepartment(department);
  console.log(`Added ${department.name} to the database`);
  start()
}

async function addRole() {
  const departments = await db.findAllDepartments()

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id
  }))

  const role = await prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter a title for the new role'
    },
    {
      name: 'salary',
      type: 'input',
      messaage: 'Enter a salary for the new role'
    },
    {
      name: 'department_id',
      type: 'list',
      message: 'Which department does the role belong to?',
      choices: departmentChoices
    }
  ])


  await db.createRole(role);
  console.log(`Added ${role.title} to the database`);
  start()
}


async function addEmployee() {
  const roles = await db.findAllRoles();
  const employees = await db.findAllEmployees();


  const employee = await prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'Enter the first name for the new employee'
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'Enter the last name for the new employee'
    }
  ]);

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt({
    name: 'roleId',
    type: 'list',
    message: 'What role will this employee have?',
    choices: roleChoices
  });
  employee.role_id = roleId;

  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));
  managerChoices.unshift({ name: 'None', value: null });

  const { managerId } = await prompt({
    name: 'managerId',
    type: 'list',
    message: 'Who is the employees manager?',
    choices: managerChoices
  })

  employee.manager_id = managerId;

  await db.createEmployee(employee);
  console.log(`Added ${employee.first_name} to the database`);
  start()
}

async function viewDept() {
  const departments = await db.findAllDepartments()
  console.log('\n');
  console.table(departments);
  start();
};

async function viewRole() {
  const roles = await db.findAllRoles()
  console.log('\n');
  console.table(roles);
  start();
};

async function viewEmployee() {
  const employees = await db.findAllEmployees()
  console.log('\n');
  console.table(employees);
  start();
};


const quit = function () {
  console.log('Good Bye!');
  process.exit();
}


start()
