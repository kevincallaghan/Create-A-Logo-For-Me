class Shape {
  constructor(textLetters, textColor, shapeColor) {
    this.textLetters = textLetters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(textLetters, textColor, shapeColor) {
  super(textLetters, textColor, shapeColor)
  }
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="${this.shapeColor}">
    <polygon points="50 5, 100 90, 0 90" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="162" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textLetters}</text>            
    </svg >
    `;
  }
}

class Square extends Shape {
  constructor(textLetters, textColor, shapeColor) {
  super(textLetters, textColor, shapeColor)
  }
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg">
	  <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textLetters}</text>
    </svg >
    `;
  }
}

class Circle extends Shape {
  constructor(textLetters, textColor, shapeColor) {
  super(textLetters, textColor, shapeColor)
  }
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textLetters}</text>
    </svg >
    `;
  }
}

module.exports = { Triangle, Square, Circle }