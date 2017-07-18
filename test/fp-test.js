'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('FP Module', () => {
  describe('#map', () => {
    it('should return [2, 4, 6, 8]', () => {
      var result = fp.map([1, 2, 3, 4], (n) => n * 2);
      expect(fp.map).to.be.a('function');
      expect(result).to.deep.equal([2, 4, 6, 8]);
    });
  });

  describe('#filter', () => {
    it('should return [1, 3, 4]', () => {
      var result = fp.filter([1, 2, 3, 4], n => n !== 2);
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([1, 3, 4]);
    });
  });

  describe('#concat', () => {
    it('should return [1, 2, 3, a, b, c]', () => {
      var result = fp.concat([1, 2, 3], ['a', 'b', 'c']);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 3, 'a', 'b', 'c']);
    });
  });

  describe('#splice', () => {
    it('should return [duck, duck, duck]', () => {
      var result = fp.splice(['duck', 'duck', 'goose', 'duck'], 2, 1);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal(['duck', 'duck', 'duck']);
    });

    it('should return [duck0, duck1, oyster, duck2]', () => {
      var result = fp.splice(['duck0', 'duck1', 'duck2'], 2, 0, ['oyster']);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal(['duck0', 'duck1', 'oyster', 'duck2']);
    });
  });

  describe('#reduce', () => {
    it('should return 25', () => {
      var result = fp.reduce([1, 2, 3, 4], (a, b) => a + b, 15);
      expect(fp.reduce).to.be.a('function');
      expect(result).to.equal(25);
    });

    it('should return 10', () => {
      var result = fp.reduce([1, 2, 3, 4], (a, b) => a + b);
      expect(fp.reduce).to.be.a('function');
      expect(result).to.equal(10);
    });
  });


});
