// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      message: "Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage information:",
      name: "usage",
    },
    {
      type: "input",
      message: "Contribution guidelines:",
      name: "guidelines",
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "test",
    }
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log("Success!")
//       : console.log("You forgot your password already?!")
//   );

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();