// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe your project. What exactly does it do? What problem does it solve?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How can users install your application?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Are there any usage restrictions for your application?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What kind of licensing is tied to your application?',
        choices: ["MIT", "ISC", "zlib", "ncsa", "mpl-2.0", "osl-3.0", "gpl", "cc"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'How can users contribute to your application?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'How can a user test your application?',
        name: 'testing',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your repository name?',
        name: 'repo',
      },
  ];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  console.log("ReadMe successfully generated!")
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeFile("README.md", generateMarkdown(data))
  })
};

// Function call to initialize app
init();
