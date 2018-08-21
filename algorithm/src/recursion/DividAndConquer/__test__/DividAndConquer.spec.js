const should = require('should');
const dividAndConquer1 = require('../DividAndConquer1');
const dividAndConquer2 = require('../DividAndConquer2');

describe('DividAndConquer Unit Test', () => {
    it('dividAndConquer1(1680, 640)은 80이여야 한다.', () => {
        const result = dividAndConquer1(1680, 640);
        should(result).be.equal(80);
    });

    it('dividAndConquer2([1,2,3,4,5], 0)은 15이여야 한다.', () => {
        const result = dividAndConquer2([1, 2, 3, 4, 5], 0);
        should(result).be.equal(15);
    });

    it('dividAndConquer2([1,2,3,4,5,6,7,8,9,10], 0)은 55이여야 한다.', () => {
        const result = dividAndConquer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
        should(result).be.equal(55);
    });
});
