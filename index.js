const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter three letters for the logo.',
      name: 'textLetters',
    },
    {
      type: 'input',
      message: 'Please enter a text color.',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please select a logo shape.',
      name: 'logoShape',
      choices: [
        "Circle", "Triangle", "Square"
      ]
    },
    {
      type: 'input',
      message: 'Please enter a shape color.',
      name: 'shapeColor',
    },
  ])

  .then((response) => {
    console.log(response)
    const { textLetters, textColor, logoShape, shapeColor } = response;

    
  });