const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === target) {
            return middleIndex;
        } else if (arr[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}

let result = binarySearch([1, 2, 3, 4, 7, 8, 10], 7);
console.log(result);

//Time Complexity of BinarySearch is O(logn)