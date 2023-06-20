// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        message: 'Briefly describe your project',
        name: 'description',
    },
    {
        message: 'What are the installation instructions for your project? If none, press Enter',
        name: 'installation',
    },
    {
        message: 'What are the usage instructions?',
        name: 'usage',
    },
    {
        message: 'What are the project contribution guidelines? If none, press Enter',
        name: 'contributions',
    },
    {
        message: 'Do you have tests for your applications? If none, press Enter',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'GNU General Public License v2.0', 
            'Mozilla Public License 2.0',
            'The Unlicense',
            'No license'
        ]
    },
    {
        message: 'Please enter github username',
        name: 'username',
    },
    {
        message: 'Please enter email address',
        name: 'email'
    }

];


prompt(questions).then((data) => {
        const readme = markdown(data);
        writeToFile('GeneratedREADME.md', readme);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
