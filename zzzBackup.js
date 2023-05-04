const fs = require('fs');
const inquirer = require('inquirer');

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

    function createMyLogo(response) {
      let data = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      `;
      if (logoShape === "Circle") {
        data += `
          <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
          </svg>          
        `;
      } else if (logoShape === "Triangle") {
        data += `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="${shapeColor}">
          <polygon points="50 15, 100 100, 0 100" />
          </svg>
          <text x="150" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>            
          </svg>
        `;
      } else {
        data += `
          <svg xmlns="http://www.w3.org/2000/svg">
	        <rect x="70" y="20" width="160" height="160" fill="${shapeColor}"/>
          </svg>
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
        </svg>
        `;
      }
      return data;
    }

    const data = createMyLogo(response);

    fs.writeFile('logo.svg', data, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  });