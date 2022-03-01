const initialQ = [
    {
        name: 'employeeType',
        type: 'list',
        message: `Let's make your team! What type of employee would you like to add first?`,
        choices: ['Manager', 'Engineer', 'Intern', 'Quit'],
        default: 'Engineer'
    }
];

const internQs = [
    {
        name: 'name',
        type: 'input',
        message: `What is the team member's name?`
    },
    {
        name: 'id',
        type: 'input',
        message: `What is the team member's ID?`
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the team member's email?`
    },
    {
        name: 'school',
        type: 'input',
        message: `What school does the intern attend?`
    },
];

const managerQs = [
    {
        name: 'name',
        type: 'input',
        message: `What is the team member's name?`
    },
    {
        name: 'id',
        type: 'input',
        message: `What is the team member's ID?`
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the team member's email?`
    },
    {
        name: 'office',
        type: 'input',
        message: `What is the manager's office number?`
    },
];

const engineerQs = [
    {
        name: 'name',
        type: 'input',
        message: `What is the team member's name?`
    },
    {
        name: 'id',
        type: 'input',
        message: `What is the team member's ID?`
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the team member's email?`
    },
    {
        name: 'github',
        type: 'input',
        message: `What is the engineer's github username?`
    },
];

module.exports = { engineerQs, managerQs, internQs, initialQ};