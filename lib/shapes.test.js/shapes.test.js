const { Circle, Square, Triangle } = require('../shapes/shapes');
const { validateNameResponse } = require('../../index');

describe('Shape Tests', () => {
  describe('Render Element Tests', () => {
    it('Triangle renders an SVG element', () => {
      const triangle = new Triangle('KPC', 'blue', 'red');
      const logo = triangle.render();
      expect(logo).toContain('<svg');
    });

    it('Square renders an SVG element', () => {
      const square = new Square('KPC', 'blue', 'red');
      const logo = square.render();
      expect(logo).toContain('<svg');
    });

    it('Circle renders an SVG element', () => {
      const circle = new Circle('KPC', 'blue', 'red');
      const logo = circle.render();
      expect(logo).toContain('<svg');
    });
  });

  describe('Fill Tests', () => {
    it('Triangle fill works', () => {
      const triangle = new Triangle('KPC', 'blue', 'red');
      const logo = triangle.render();
      expect(logo).toContain('fill="red"');
    });

    it('Square fill works', () => {
      const square = new Square('KPC', 'blue', 'red');
      const logo = square.render();
      expect(logo).toContain('fill="red"');
    });

    it('Circle fill works', () => {
      const circle = new Circle('KPC', 'blue', 'red');
      const logo = circle.render();
      expect(logo).toContain('fill="red"');
    });
  });

  describe('Text Element Test', () => {
    it('Text element color is appended', () => {
      const triangle = new Triangle('KPC', 'blue', 'red');
      const logo = triangle.render();
      expect(logo).toContain('fill="blue">KPC</text>');
    });
  });
});

//! See Credits #9 for this method of Jest testing character length
describe('Input Validation Tests', () => {
  describe('Min and Max character length test', () => {
    for (let i = 1; i <= 3; i++) {
      it(`should pass if inputted name is ${i} character(s) long`, () => {
        const name = 'a'.repeat(i);
        expect(validateNameResponse(name)).toBe(true);
      });
    }

    it('should fail if inputted name is less than 1 character long', () => {
      const name = '';
      expect(validateNameResponse(name)).toBe(false);
    });

    it('should fail if inputted name is more than 3 characters long', () => {
      const name = 'aaaa';
      expect(validateNameResponse(name)).toBe(false);
    });
  });
});
