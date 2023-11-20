import inquirer from 'inquirer';
import fs from 'fs';

const prompts = [
  {
    type: 'input',
    name: 'table of contents',
    message: 'Enter your table of contents here',
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter the name of your project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter instructions on how to install the project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how to use the project in detail',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List all features of the project',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List contributors',
  },
  {
    type: 'input',
    name: 'license',
    message: 'List all potential licenses',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'List all ran tests',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'List all potential questions for developers',
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'add project screenshots'
  }
];

inquirer.prompt(prompts)
  .then((responses) => {
    const tableOfContents = responses.tableOfContents;
    const projectName = responses.projectName;
    const description = responses.description;
    const installation = responses.installation;
    const usage = responses.usage;
    const features = responses.features;
    const contributing = responses.contributing;
    const license = responses.license;
    const tests = responses.tests;
    const questions = responses.questions;
    const screenshot = responses.screenshot;
    const template = fs.readFileSync('template.md', 'utf8');
    const readmeContent = template
      .replace('${tableOfContents}', tableOfContents)
      .replace('${projectName}', projectName)
      .replace('${description}', description)
      .replace('${installation}', installation)
      .replace('${usage}', usage)
      .replace('${features}', features)
      .replace('${contributing}', contributing)
      .replace('${license}', license)
      .replace('${tests}', tests)
      .replace('${questions}', questions)
      .replace('${screenshots', screenshot);

    fs.writeFileSync('README.md', readmeContent);
  })
  .catch((error) => {
    console.error(error);
  });