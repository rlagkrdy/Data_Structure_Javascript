function HashTable() {
    this.keys = {};
    this.arr = [];
}
HashTable.prototype.get = function(key) {
    return key in this.keys ? this.arr[this.keys[key]] : null;
};

HashTable.prototype.set = function(key, value) {
    if (key in this.keys) {
        this.arr[this.keys[key]] = value;
    } else {
        this.keys[key] = this.arr.length;
        this.arr.push(value);
    }
};
module.exports = HashTable;
