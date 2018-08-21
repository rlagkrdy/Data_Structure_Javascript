function dividAndConquer2(arr, result) {
    if (arr.length === 0) {
        return result;
    } else {
        return dividAndConquer2(arr, (result += arr.pop()));
    }
}
module.exports = dividAndConquer2;
