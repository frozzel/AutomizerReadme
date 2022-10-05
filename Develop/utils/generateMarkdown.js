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
  - [Resources](#resources)
  - [License](#license)
  - [Test](#tests)
  - [Contributors](#contributors)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  [Vist Our Site](${data.usage1})
  ${data.usage}
  
![Screen Shots](./assets/images/YOURIMAGE.png)
![Screen Shots2](./assets/images/YOURIMAGE2.png)

  ## Resources

  [${data.contribution}](${data.contribution1})

  [Site name add more Links](https://sampleapis.com/api-list/coffee)
  
  List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

  If you followed tutorials, include links to those here as well. 
  
  ## License
  ${data.license}
 
  ## Tests
  ${data.test}
  
  ## Contributors 
  Created by: [@${data.github}](${data.github1}), [@addOtherContributors](http://thereGitHub/profile)
  
  Please contact me with questions at: ${data.email}
`;
}

module.exports = generateMarkdown;
