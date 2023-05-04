// GIVEN a command - line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//TODO I need to be able to answer prompts in the command line
  //Prompt for up to three characters
    //validate that it is not less than 1 and not more than 3
  //Prompt for text color
    //Needs to be able to accept a color keyword OR hexadecimal number
  //Prompt for shape 
    //MUST BE A LIST TYPE QUESTION
    //Circle, Triangle, Square
  //Prompt for shape color
    //Needs to be able to accept a color keyword or hexidecimal number
  //When prompts are answered, function required to create SVG file (logo.svg)
    //When prompts are answered, log 'Generated logo.svg' in the command line
  //OPTIONAL: Add a download prompt for the new SVG file??

const fs = require('fs');
const inquirer = require('inquirer');

//TODO Create a function createMyText - maybe add to new JS file and import
//TODO Create a function CreateMyShape  - maybe add to new JS file and import

//! See Credits #2 for Stack Overflow article I found where I learned about prompt validation
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter three letters for the logo.',
      name: 'textLetters',
      validate: function (input) {
        const isValid = input.length >= 1 && input.length <= 3;
        return isValid ? true : 'Please enter a value between 1 and 3 characters.';
      }
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


    //TODO This is sample from last project - might need to find new way to write file for a shape
   
    const data = ``;

    fs.writeFile('logo.svg', data, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  });