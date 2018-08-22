const should = require('should');
const HashTable = require('../HashTable');

const hashTable = new HashTable();

describe('HashTable Unit Tests ', () => {
    it('hashTable.set("a", 10) 이후 hashTable.get("a") 하면 10을 return 받아야 한다.', () => {
        hashTable.set('a', 10);
        const result = hashTable.get('a');
        should(result).be.equal(10);
    });

    it('hashTable.get("b")를 하면 null을 return 받아야 한다.', () => {
        const result = hashTable.get('b');
        should(result).be.equal(null);
    });

    it('hashTable.set("b", 30) 이후 hashTable.get("b")를 하면 30을 return 받아야 한다.', () => {
        hashTable.set('b', 30);
        const result = hashTable.get('b');
        should(result).be.equal(30);
    });

    it('a가 있는 상태에서 hashTable.set("a", 20) 이후 hashTable.get("a") 하면 20을 return 받아야 한다.', () => {
        hashTable.set('a', 20);
        const result = hashTable.get('a');
        should(result).be.equal(20);
    });
});
