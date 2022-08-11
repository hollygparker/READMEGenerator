
function generateLicense(badge) {
    return `https://img.shields.io/badge/license-${badge}-purple.svg`
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
    
# Installation
    
Run the command to install the CLI application.

${data.installation}
    
# Usage Information
    
${data.usage}
    
# Contribution Guidelines
    
${data.guidelines}
    
# Test Instructions
    
Run the command to execute the test for the application. 

${data.test}`
}

module.exports = createMD