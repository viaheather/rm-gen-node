// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
async function getUserInput() {
    try {
      const answers = await inquirer.prompt([
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
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License','BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'None'],
        name: 'license'
    }, {
        type: 'input',
        message: 'What are the features in your project?',
        name: 'feature'
    }, {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contribution'
    }, {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUser'
    }, {
        type: 'input',
        message: 'How can others contact you?',
        name: 'contactUser'
    }, {
        type: 'input',
        message: 'How was your project tested?',
        name: 'tested'
    }
]);

return answers;
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('README.md generated.');
      }
    });
  }  

// TODO: Create a function to initialize app
async function init() {
    try { 
        const answers = await getUserInput();
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
        console.log(answers)
        return answers
    }
    catch(error) {
        console.log(error)
        return error
    }
}

init();