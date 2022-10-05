// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer/v/8.2.4
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');///Links to other JS

/// may need var to call markdown sheet



// TODO: Create an array of questions for user input

///// 28 min project//////
const questions =  [   
{
    type: 'input',
    name:'title',
    message: 'Whats your Repo Title?'
},
{
    type: 'input',
    name:'description',
    message: 'Provide a short description explaining the what, why, and how of your project?'
},
{
    type: 'input',
    name:'description1',
    message: 'What was your motivation?'
},
{
    type: 'input',
    name:'description2',
    message: 'Why did you build this project?'
},
{
    type: 'input',
    name:'description3',
    message: 'What problem does it solve?'
},
{
    type: 'input',
    name:'description4',
    message: 'What problem does it solve?'
},
{
    type: 'input',
    name:'installation',
    message: 'What are the steps required to install your project?'
},
{
    type: 'input',
    name:'usage',
    message: 'Provide instructions and examples for use.'
},
{
    type: 'input',
    name:'usage1',
    message: 'Site Url, Example (https://yourGithubuser.github.io/titleofSite/)'
},
{
    type: 'input',
    name:'contribution',
    message: 'What Resources where used? Example [Site name]'
},
{
    type: 'input',
    name:'contribution1',
    message: 'Whats thier site address? Example (https://sampleapis.com/api-list/coffee)'
},
{
    type: 'list',   /////// look up input for array, and badges??? canvas says list reeeeasearch.... may need another package more testing
    name:'license',
    message: 'What Liccense did you use?',
    choices: ["MIT", "ISC", "None"],
},
{
    type: 'input',
    name:'test',
    message: 'Tell us how you test your Repo?'
},
{
    type: 'input',
    name:'github',
    message: 'Whats your GitHub user name? Example [@YOUrUSERname]'
},
{
    type: 'input',
    name:'github1',
    message: 'Whats your GitHub Link? Example (https://github.com/YOurUrl/)'
},
{
    type: 'input',
    name:'email',
    message: 'Whats your email contact for questions?'
},


];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', generateMarkdown)
// }



// research writing function//
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => fs.writeFileSync('README.md', generateMarkdown(data)))// https://medium.com/@abdishire15/what-is-the-difference-between-fs-writefile-and-fs-writefilesync-3a2c3f2c516
   
}

// Function call to initialize app
init();
