class Shape {
    constructor() {
        this.shapeColor = ''
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }

}

class Circle extends Shape {
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    render(){
        return`<rect width="300" height="300" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Triangle, Square}