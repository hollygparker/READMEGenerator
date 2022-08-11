// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const createMD = require("./createMD")
const questions = [
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
  ]

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log("Success!")
//       : console.log("You forgot your password already?!")
//   );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt (questions)
  .then((response) => {
    writeToFile("README.md", createMD({
      ...response
    }))
  } )
}

// Function call to initialize app
init();