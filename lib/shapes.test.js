const { Circle, Square, Triangle } = require('./shapes')

describe('Triangle color', () => {
    it('the Triangle color should equal the color selected', () => {
        const shape = new Triangle();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle color', () => {
    it('the Circle color should equal the color selected', () => {
        const shape = new Circle();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square color', () => {
    it('the Square color should equal the color selected', () => {
        const shape = new Square();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<rect width="300" height="300" fill="blue" />');
    });
});