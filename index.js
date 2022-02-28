// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
    // Do I actually need all of these classes listed on this file?
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { engineerQs, managerQs, internQs, initialQuestions, addMember} = require('./src/questions');

const employees = [];

function init() {
    let employeeInfo = {};
    inquirer.prompt(initialQuestions)
    .then((data) => {
        employeeInfo = data;
        if(data.employeeType === 'Manager') {
            return inquirer.prompt(managerQs);
        } else if (data.employeeType === 'Engineer') {
            return inquirer.prompt(engineerQs);
        } else if (data.employeeType === 'Intern') {
            return inquirer.prompt(internQs);
        } else {
            exitProgram();
        }
        //
    })
    .then((data) => {
        //create employee
        // push employee to employees
        let employee;
        if (employeeInfo.employeeType === 'Manager') {
            employee = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, data.office)
        } else if (employeeInfo.employeeType === 'Engineer') {
            employee = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, data.github)
        } else if (employeeInfo.employeeType === 'Intern') {
            employee = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, data.school)
        } 
        
        employees.push(employee);
        init();
    })
    
};

const exitProgram = function() {
        const generateContent = generateHTML(employees);
        fs.writeFile('./dist/index.html', generateContent, (error) => {
        error ? console.log(err) : console.log('Created index.html');
        process.exit();
    });
};
// Function call to initialize app
init();
