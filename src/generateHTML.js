import employees from "../index";

function generateHTML(data) {
    return ''
};

// create li with employeeType details and append
function generateLI(data) {
    if (data.employeeType === 'Manager') {
        var li = document.getElementById('#type');
        li.innerHTML =`Office number: ${data.office}`;
    } else if (data.employeeType === 'Engineer') {
        var li = document.getElementById('#list');
        li.innerHTML = `GitHub: <a href="https://github.com/${data.github}">${data.github}</a>`;
    } else if (data.employeeType === 'Intern') {
        var li = document.getElementById('#list');
        li.innerHTML =`School: ${data.school}`;
    }
};

function generateCards(data) {
    // generate a card for each team member
};

employees.forEach(generateCards(data));