// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Please enter sections of your ReadMe to create a table of contents',
        name: 'toc',
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
        name: 'contributing',
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
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data)
  console.log("ReadMe successfully generated!")
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  })
};

// Function call to initialize app
init();
