// generates HTML file data
function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>My Team</header>
    
        <section class="card-group teamCards">
        ${employees.map(generateCards)}
        </section>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`
};

// create li with getRole() details and append
function generateLI(employee) {
    var li;
    if (employee.getRole() === 'Manager') {
        li = `Office number: ${employee.office}`
    } else if (employee.getRole() === 'Engineer') {
        li = `GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>`
    } else if (employee.getRole() === 'Intern') {
        li = `School: ${employee.school}`
    }
    return li;
};

function generateCards(employee) {
    // generate a card for each team member
    return `        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <p class="card-text">${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush" id="list">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item" id="type">${generateLI(employee)}</li>
    </ul>
  </div>`
};

module.exports = generateHTML;