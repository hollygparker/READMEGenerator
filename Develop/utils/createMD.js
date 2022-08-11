function createMD(data) {
    return `# ${data.title}
    
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