class Shape {
  constructor(textLetters, textColor, shapeColor) {
    this.textLetters = textLetters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

class Circle extends Shape {

}

module.exports = { Triangle, Square, Circle }