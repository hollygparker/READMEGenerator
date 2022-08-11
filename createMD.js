
function generateLicense(badge) {
    if(badge !== "none"){
        return `![license](https://img.shields.io/badge/license-${badge}-purple.svg)`

    } else {
        return "No badge specified"
    }
}



function createMD(data) {
    return `
# ${data.title}
${generateLicense(data.badge)}
## Description
${data.description}
    
# Table of Contents
    
* [installation](#installation)
    
* [usage](#usage)
    
* [guidelines](#guidelines)
    
* [test](#test)

* [questions](#questions)

# Installation
    
Run the command to install the CLI application.

${data.installation}
    
# Usage
    
${data.usage}
    
# Guidelines
    
${data.guidelines}
    
# Test
    
Run the command to execute the test for the application. 

${data.test}

# Questions

Feel free to contact me, my gihub username is ${data.github} and my email is ${data.email}

`

}

module.exports = createMD