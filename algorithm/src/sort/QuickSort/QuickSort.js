function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const standardEle = arr.shift();

    const leftArr = [],
        rightArr = [];

    arr.forEach(item => {
        if (item < standardEle) {
            leftArr.push(item);
        } else {
            rightArr.push(item);
        }
    });

    const resultArr = [];

    return resultArr.concat(
        quickSort(leftArr),
        standardEle,
        quickSort(rightArr)
    );
}
module.exports = quickSort;
