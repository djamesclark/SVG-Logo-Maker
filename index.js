const inquirer = require('inquirer');
const fs = require('fs');
const Svg = require('./lib/svg')
const { Circle, Square, Triangle } = require('./lib/shapes')

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
let chosenShape;
let chosenText;
let text;


function createSvg(fileName, svg) {
    const folderLocation = './examples/'
    const renderShape = svg.render()
    // const renderTextColor = text.renderTextColor()

    fs.writeFile(folderLocation + fileName, renderShape, (err) => {
        if (err) { throw err; }
        else {
            console.log('SVG Generated!')
        }
    }
    )

}

function init() {
    inquirer.prompt(questions).then((answers) => {
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
        let svg = new Svg()

        console.log(chosenShape)
        svg.renderTextColor(answers.text, answers.textColor)
        svg.renderShapeChosen(chosenShape)
        console.log(svg)
        

        createSvg('logo.svg', svg)
    })
}

init();