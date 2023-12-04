const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

let result = bubbleSort([100, 9, 6, 10, 22, 3, 7]);
console.log(result);

//Time Complexity of BubbleSort is O(nˆ2)