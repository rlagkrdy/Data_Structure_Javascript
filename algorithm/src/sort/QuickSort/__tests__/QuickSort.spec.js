const should = require('should');
const quickSort = require('../QuickSort');

describe('QuickSort Unit Test', () => {
    it('quickSort([3,5,2,1,4])는 [1,2,3,4,5] 이여야 한다.', () => {
        const result = quickSort([3, 5, 2, 1, 4]);

        should(result).be.eqls([1, 2, 3, 4, 5]);
    });
});
