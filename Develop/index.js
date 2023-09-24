// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectname'
    }, {
        type: 'input',
        message: 'Project description',
        name: 'description'
    }, {
        type: 'input',
        message: 'Installation guide',
        name: 'installation'
    }, {
        type: 'input',
        message: 'What is the usage, or purpose, of your project?',
        name: 'usage'
    }, {
        type: 'input',
        message: 'Kudos you want to share',
        name: 'credits'
    }, {
        type: 'list',
        message: 'Did you use a license?',
        choices: ['Apache 2.0', 'Boost','BSD 3-Clause','BSD 2-Clause','CC0','Attribution 4.0 International','Eclipse Public License 1.0','GNU','IBM','ISC','MIT','Mozilla','SIL'],
        name: 'license'
    }
])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
