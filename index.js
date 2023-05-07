const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes/shapes');
//! See Credit 9 for this method of Inquirer validation and related Jest test
const validateNameResponse = response => response.length >= 1 && response.length <= 3;

function createMyLogo(response) {
  const { textLetters, textColor, logoShape, shapeColor } = response;
  let shape;

  if (logoShape === "Circle") {
    shape = new Circle(textLetters, textColor, shapeColor)
  } else if (logoShape === "Triangle") {
    shape = new Triangle(textLetters, textColor, shapeColor)
  } else {
    shape = new Square(textLetters, textColor, shapeColor)
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
  </svg>`;
}

//! See Credits #2 for Stack Overflow article I found where I learned about prompt validation and Credits #8 for help with RegEx to validate
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter three characters for the logo.',
      name: 'textLetters',
      validate: function (input) {
        const isValid = validateNameResponse(input);
        return isValid ? true : 'Please enter a value between 1 and 3 characters.';
      }
    },
    {
      type: 'input',
      message: 'Please enter a text color.',
      name: 'textColor',
      validate: function (input) {
        const isValidColorName = /^([a-zA-Z]+)$/.test(input);
        const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(input);
        const isValidTextColor = isValidColorName || isValidHexColor;
        return isValidTextColor ? true : 'Please enter a valid color';
      }
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
      validate: function (input) {
        const isValidColorName = /^([a-zA-Z]+)$/.test(input);
        const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(input);
        const isValidShapeColor = isValidColorName || isValidHexColor;
        return isValidShapeColor ? true : 'Please enter a valid color';
      }
    },
  ])

  .then((response) => {

    console.log(response)
    const { textLetters, textColor, logoShape, shapeColor } = response;

    const data = createMyLogo(response);

    fs.writeFile(`./examples/${logoShape}Logo.svg`, data, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  });

module.exports = {
  validateNameResponse,
  createMyLogo
};