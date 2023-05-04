//Backup page for first attempt at createMyLogo code

function createMyLogo(response) {
      if (logoShape === "Circle") {
        let data = 
        `
        <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
        //TODO Shape Code
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        //TODO Text Code
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
        </svg>
        `
      } else if (logoShape === "Triangle") {
        let data = 
        `
        <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
        //TODO Shape Code
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="${shapeColor}">
            <polygon points="50 15, 100 100, 0 100" />
            </svg>
        //TODO Text Code
            <text x="150" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
        </svg>
        `
      } else {
        let data = 
        `
        <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
        //TODO Shape Code
          <svg xmlns="http://www.w3.org/2000/svg">
	        <rect x="70" y="20" width="160" height="160" fill="${shapeColor}"/>
          </svg>
        //TODO Text Code
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textLetters}</text>
        </svg>
        `
      }
      return data
    }