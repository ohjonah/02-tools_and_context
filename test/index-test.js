'use-strict';

const index = require('../index.js');
const expect = require('chai').expect;

describe('Index Module', () => {
  it('should return uppercase el in arr', () => {
    var result = index.upCase(['a', 'b', 'c']);

    expect(index.upCase).to.be.a('function');
    expect(result).to.deep.equal(['A', 'B', 'C']);
  });
});
