const inquirer = require('inquirer');
//const SVG = require('svg.js');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes')
const SVG = require('./lib/svg')

// Prompt the user for text, text color, shape, and shape color
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => {
        return value.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    // Create an SVG canvas with a size of 300x200 pixels
    //const canvas = SVG('logo').size(300, 200);

    // Create the chosen shape with the specified color
    let shapeElement;
    if (shape === 'circle') {
      shapeElement = new Circle()
     // shapeElement = canvas.circle(100).fill(shapeColor);
    } else if (shape === 'triangle') {
      shapeElement = new Triangle()
      //shapeElement = canvas.polygon('100,0 50,86.6 0,0').fill(shapeColor);
    } else if (shape === 'square') {
      shapeElement = new Square() 
      //shapeElement = canvas.rect(100, 100).fill(shapeColor);
    }
    shapeElement.setColor(shapeColor)
    
    // Add the text with the specified color to the center of the shape
    //const textElement = canvas.text(text).fill(textColor).center(150, 100);
    const svgShape = new SVG()
    svgShape.setText(text,textColor) 
    svgShape.setShape(shapeElement)

    // Save the SVG as logo.svg
    fs.writeFileSync('logo.svg', svgShape.render());

    console.log('Generated logo.svg');
  });
