function linearSearch(arr, find) {
    let result = [];
    arr.forEach((item, idx) => {
        if (item === find) {
            result.push(idx);
        }
    });
    return result;
}

module.exports = linearSearch;
