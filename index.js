// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require(//TO DO
    );
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { engineerQs, managerQs, internQs, initialQuestions} = require('./src/questions');

function init() {
    inquirer.prompt(initialQuestions)
    .then((data) => {
        if(data.employeeType = 'Manager') {
            inquirer.prompt(managerQs);
        } else if (data.employeeType = 'Engineer') {
            inquirer.prompt(engineerQs);
        } else {
            inquirer.prompt(internQs);
        };
        // generate Employee here?
        const generateContent = generateHTML(data);
        fs.writeFile('./dist/index.html', generateContent, (error) => 
        error ? console.log(err) : console.log('Created index.html')
        );
    });
};

// Function call to initialize app
init();