class Shape {
  constructor(textLetters, textColor, shapeColor) {
    this.textLetters = textLetters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  function makeMyLogo() {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="${shapeColor}">
    <polygon points="50 15, 100 100, 0 100" />
    </svg>
    <text x="150" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>            
    </svg >
  }
}

class Square extends Shape {
  function makeMyLogo() {
    <svg xmlns="http://www.w3.org/2000/svg">
	  <rect x="70" y="20" width="160" height="160" fill="${shapeColor}"/>
    </svg>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
    </svg >
  }
}

class Circle extends Shape {
  function makeMyLogo() {
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
    </svg >
  }
}

module.exports = { Triangle, Square, Circle }