// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Type a brief description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Include some steps on how to install/initialize your app',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is this app used for?',
        name: 'use'
    },
    {
        type: 'list',
        message: 'Please select a license to use',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPL v3', 'ISC License', 'The MIT License']
    },
    {
        type: 'input',
        message: 'List any contributing coders and include thier github link (optional)',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What tests were used in running your code?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Where should people contact with questions? (please enter your email)',
        name: 'questions'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => err ? console.error(err) : console.log('success'))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
    .then((res)=>writeToFile('README', res))
}

// Function call to initialize app
init();
