USE employee_trackerDB;

INSERT INTO department
    (name)
VALUES 
    ('Accounting'),
    ('Engineering'),
    ('Quality Assurance'),
    ('Human Resources');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accounting Manager', 100000, 1),
    ('Materials Acct', 65500, 1),
    ('Eng Manager', 100000, 2),
    ('Draftsman', 65500, 2),
    ('QA Manager', 90000, 3),
    ('Analyst', 70000, 3),
    ('HR Manager', 95000, 4),
    ('HR Associate', 55000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Amy', 'Jones', 1, NULL),
    ('Debra', 'Smith', 2, 1),
    ('Dawn', 'Sampson', 3, NULL),
    ('Scott', 'Sheely', 4, 3),
    ('Adrian', 'Harris', 5, NULL),
    ('Andrew', 'Johnson', 6, 5),
    ('Jodi', 'Lane', 7, NULL),
    ('Kathy', 'Lintott', 8, 7);

    
