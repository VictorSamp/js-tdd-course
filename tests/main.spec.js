import { expect } from 'chai';
import {sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () =>  {
      expect(sum).to.exist;
    });

    it('should exist the method `sub`', () =>  {
      expect(sub).to.exist;
    });

    it('should exist the method `mult`', () =>  {
      expect(mult).to.exist;
    });

    it('should exist the method `div`', () =>  {
      expect(div).to.exist;
    });

  });

  describe('Sum', () => {

    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

  });

  describe('Sub', () => {

    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });

  });

  describe('Mult', () => {

    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

    it('should return -4 when `mult(-2,2)`', () => {
      expect(mult(-2, 2)).to.be.equal(-4);
    });

  });

  describe('Div', function() {

    it('should return 4 when `div(2,2)`', function(){
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return -4 when `div(-2,2)`', function(){
      expect(div(-2, 2)).to.be.equal(-1);
    });

    it('should return `não é possível divisão por zero` when divide by 0', function() {
      expect(div(4,0)).to.be.equal('não é possível divisão por zero');
    })

  });
});
