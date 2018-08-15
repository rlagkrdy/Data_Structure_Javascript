const should = require('should');
const binarySearch = require('../BinarySearch');

describe('Binary Search Unit Test', () => {
    it('[1,2,3,4,5] 배열과 3을 넘기면 idx = 2 이여야 한다.', () => {
        let result = binarySearch([1, 2, 3, 4, 5], 3);
        should(result).equal(2);
    });

    it('[1,2,3,4,5,6,7,8,9,10] 배열을 넘기고 9를 넘기면 idx = 7 이여야 한다.', () => {
        let result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
        should(result).equal(6);
    });

    it('[2,3,4,5,6,7,8,9,10] 배열과 1을 넘기면 idx = -1 이여야 한다.', () => {
        let result = binarySearch([2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
        should(result).equal(-1);
    });

    it('[2,3,4,5,6,7,8,9,10] 배열과 11을 넘기면 idx = -1 이여야 한다.', () => {
        let result = binarySearch([2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
        should(result).equal(-1);
    });
});
