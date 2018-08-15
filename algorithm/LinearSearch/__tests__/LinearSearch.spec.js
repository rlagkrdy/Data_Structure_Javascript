const should = require('should');
const linearSearch = require('../LinearSearch');

describe('Linear Search Unit Test', () => {
    const testArr = [1, 2, 3, 4, 8, 2, 1];
    it('배열 [1, 2, 3, 4, 8, 2, 1]와 3을 넘기면 [2]가 리턴 되어야 한다.', () => {
        let result = linearSearch(testArr, 3);
        console.log(result);
        should(result).instanceof(Array);
        should(result).eql([2]);
    });

    it('배열 [1, 2, 3, 4, 8, 2, 1]와 2을 넘기면 [1, 5]가 리턴 되어야 한다.', () => {
        let result = linearSearch(testArr, 2);
        should(result).instanceof(Array);
        should(result).eql([1, 5]);
    });

    it('배열 [1, 2, 3, 4, 8, 2, 1]와 10을 넘기면 []가 리턴 되어야 한다.', () => {
        let result = linearSearch(testArr, 10);
        should(result).instanceof(Array);
        should(result).eql([]);
    });
});
