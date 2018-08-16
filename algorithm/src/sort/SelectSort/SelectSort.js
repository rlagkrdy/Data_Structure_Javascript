function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentIdx] > arr[j]) {
                currentIdx = j;
            }
        }

        if (currentIdx !== i) {
            let item = arr[i];
            arr[i] = arr[currentIdx];
            arr[currentIdx] = item;
        }
    }
    return arr;
}
module.exports = selectSort;
