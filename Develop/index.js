// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer/v/8.2.4
/// may need var to call markdown sheet

// TODO: Create an array of questions for user input

///// 28 min project//////
const questions = [   
{
    type: 'input',
    name:'title',
    message: 'Whats your Repo Title?'
},
{
    type: 'input',
    name:'description',
    message: 'Whats your Repo Description?'
},
{
    type: 'input',
    name:'installation',
    message: 'How do you install your application?'
},
{
    type: 'input',
    name:'usage',
    message: 'How is your application used?'
},
{
    type: 'input',
    name:'contribution',
    message: 'Tell me who contributed to the Repo?'
},
{
    type: 'input',   /////// look up input for array, and badges??? canvas says list reeeeasearch....
    name:'license',
    message: 'Whats your Repo Title?'
},
{
    type: 'input',
    name:'test',
    message: 'Tell us how you test your Repo?'
},
{
    type: 'input',
    name:'github',
    message: 'Whats your GitHub user name?'
},
{
    type: 'input',
    name:'email',
    message: 'Whats your email contact for questions?'
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
