const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

const search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
        return middleIndex;
    } else if (arr[middleIndex] > target) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

let result = recursiveBinarySearch([1, 2, 3, 4, 7, 8, 10], 7);
console.log(result);

//Time Complexity of Recursive BinarySearch is O(logn)