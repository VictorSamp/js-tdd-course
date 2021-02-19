var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {

  // smoke tests
  describe('Smoke tests', function() {

    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function() {
      expect(calc.sum).to.exist;
    });

    it('should exist the method `sub`', function() {
      expect(calc.sub).to.exist;
    });

    it('should exist the method `mult`', function() {
      expect(calc.mult).to.exist;
    });

    it('should exist the method `div`', function() {
      expect(calc.div).to.exist;
    });

  });

  describe('Sum', function() {

    it('should return 4 when `sum(2,2)`', function(){
      expect(calc.sum(2, 2)).to.be.equal(4);
    });

  });

  describe('Sub', function() {

    it('should return 4 when `sub(6,2)`', function(){
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', function(){
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });

  });

  describe('Mult', function() {

    it('should return 4 when `mult(2,2)`', function(){
      expect(calc.mult(2, 2)).to.be.equal(4);
    });

    it('should return -4 when `mult(-2,2)`', function(){
      expect(calc.mult(-2, 2)).to.be.equal(-4);
    });

  });

  describe('Div', function() {

    it('should return 4 when `div(2,2)`', function(){
      expect(calc.div(2, 2)).to.be.equal(1);
    });

    it('should return -4 when `div(-2,2)`', function(){
      expect(calc.div(-2, 2)).to.be.equal(-1);
    });

    it('should return `não é possível divisão por zero` when divide by 0', function() {
      expect(calc.div(4,0)).to.be.equal('não é possível divisão por zero');
    })

  });
});
