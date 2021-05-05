ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Schoolschool21';




DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  
);



CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary  DECIMAL(7,2) NOT NULL,
department_id INT NOT NULL,
INDEX dept_ind (department_id),
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
  manager_id INT
  INDEX manager_index (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

INSERT INTO department (dept_name)
values ("Quality Assurance");


INSERT INTO role (title, salary)
values ("Analyst", 65000.00);



