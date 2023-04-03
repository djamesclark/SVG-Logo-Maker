const inquirer = require('inquirer');
const fs = require('fs');
const Svg = require('./lib/svg')
const {Circle, Square, Triangle}= require('./lib/shapes')

const questions = [
    {
        type: 'input',
        message: 'Logo Name:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapeColor',
    },
];

inquirer.prompt(questions).then((answers)=>{
    let chosenShape;

    switch (answers.shape) {
        case 'Circle':
            chosenShape = new Circle()
            break;
        case 'Triangle':
            chosenShape = new Triangle()
            break;
        default:
            chosenShape = new Square()
            break;
    }
    chosenShape.setShapeColor(answers.shapeColor)



})