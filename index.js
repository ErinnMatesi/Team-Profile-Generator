// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
// importing classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// importing questions for inquirer
const { engineerQs, managerQs, internQs, initialQ} = require('./src/questions');

const employees = [];

function init() {

    function makeTeam () {
        inquirer.prompt(initialQ)
        .then((data) => {
            if(data.employeeType === 'Manager') {
                addManager();
            } else if (data.employeeType === 'Engineer') {
                addEngineer();
            } else if (data.employeeType === 'Intern') {
                addIntern();
            } else {
                exitProgram();
            }
        })
    }

    addManager = function() {
        inquirer.prompt(managerQs)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            employees.push(manager);
            makeTeam();
        })
    };
    
    addEngineer = function() {
        inquirer.prompt(engineerQs)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            makeTeam();
        })
    };
    
    addIntern = function() {
        inquirer.prompt(internQs)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(intern);
            makeTeam();
        })
    };

    makeTeam();

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
