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

let employees = [];

function init() {
    inquirer.prompt(initialQuestions)
    .then((data) => {
        if(data.employeeType = 'Manager') {
            inquirer.prompt(managerQs);
        } else if (data.employeeType = 'Engineer') {
            inquirer.prompt(engineerQs);
        } else {
            inquirer.prompt(internQs);
        }
        // generate Employee before or after role-specific questions?
        // build out Engineer.js first then apply to Manager and Intern
        const newMember = new data.employeeType;
        employees.push(newMember);

        inquirer.prompt(addMember)
        .then()
        // need to loop back through if yes

        
        

        // new Employee
    })
    .then((data) => {
        const generateContent = generateHTML(data);
        fs.writeFile('./dist/index.html', generateContent, (error) => 
        error ? console.log(err) : console.log('Created index.html')
        );
    })
    
};

// Function call to initialize app
init();

export default employees;