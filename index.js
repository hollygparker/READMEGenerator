
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
      type: "list",
      message: "License Badge:",
      name: "badge",
      choices: ["MIT","Mozilla", "APACHE", "none"]
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation",
      default:"npm i"
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
      default:"npm run test"
    }
  ]

  // writing to file taking in file name (md file) and data which is what the user types in
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// calls the inquirer pkg to ask questions in questions arr and take that response and genate md by the template in createMD.js, spreading answers
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt (questions)
  .then((response) => {
    console.log("CREATING README")
    writeToFile("createdREADME.md", createMD({
      ...response
    }))
  } )
}

// Function call to initialize app
init();