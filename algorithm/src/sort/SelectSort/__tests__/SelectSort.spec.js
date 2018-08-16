const should = require('should');
const selectSort = require('../SelectSort');

describe('SelectSort Unit Test', () => {
    let arr = [1, 4, 3, 2, 7, 6, 5];
    it('배열 [1,4,3,2,7,6,5]를 넘기면 [1,2,3,4,5,6,7]이 넘어와야 한다', () => {
        let result = selectSort(arr);
        should(result).eql([1, 2, 3, 4, 5, 6, 7]);
    });
});
