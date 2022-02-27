const initialQuestions = [
    {
        name: 'employeeType',
        type: 'list',
        message: `What type of employee is this?`,
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Engineer'
    },
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
];

const internQs = [
    {
        name: 'school',
        type: 'input',
        message: `What school does the intern attend?`
    },
];

const managerQs = [
    {
        name: 'office',
        type: 'input',
        message: `What is the manager's office number?`
    },
];

const engineerQs = [
    {
        name: 'github',
        type: 'input',
        message: `What is the engineer's github username?`
    },
];

const addMember = [
    {
        name: 'addMember',
        type: 'list',
        message: `Do you want to add another team member?`,
        choice: ['yes', 'no'],
        default: 'yes'
    },
];

export default { engineerQs, managerQs, internQs, initialQuestions, addMember};