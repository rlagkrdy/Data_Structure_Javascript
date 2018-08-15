function binarySearch(arr, find) {
    let startIdx = 0,
        endIdx = arr.length - 1;

    while (startIdx <= endIdx) {
        const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

        if (arr[middleIdx] === find) {
            return middleIdx;
        }

        if (arr[middleIdx] < find) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }
    return -1;
}
module.exports = binarySearch;
