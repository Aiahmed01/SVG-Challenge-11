const { Circle, Triangle, Square } = require('./shapes');


describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('triangle', () => {
      it('should return a triangle with the chosen color', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      })
    })
})
