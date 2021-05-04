ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Schoolschool21';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Schoolschool21';


DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(45) NULL,
   PRIMARY KEY (id)
);

USE employee_trackerDB;

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NULL,
salary  DECIMAL(6,2) NULL,
department_id INT NULL,
  PRIMARY KEY (id)
);
USE employee_trackerDB;
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT,
  manager_id INT,
   PRIMARY KEY (id)
);

