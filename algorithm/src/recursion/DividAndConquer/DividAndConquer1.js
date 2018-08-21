function dividAndConquer1(x, y) {
    return x === y ? x : dividAndConquer1(x > y ? x - y : x, y > x ? y - x : y);
}
module.exports = dividAndConquer1;
