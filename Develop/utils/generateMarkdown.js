// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  -${data.description1}
  -${data.description2}
  -${data.description3}
  -${data.description4}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Test](#tests)
  - [Contact](#contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contribution}
  
  ## License
  ${data.license}
 
  ## Tests
  ${data.test}
  
  ## Contact 
  Github Profile: ${data.github}
  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
