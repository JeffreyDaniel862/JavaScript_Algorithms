const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let lastIndex = i - 1;

        while(lastIndex >= 0 && arr[lastIndex] > currentElement){
            arr[lastIndex + 1] = arr[lastIndex];
            lastIndex--;
        }
        arr[lastIndex + 1] = currentElement;
    }

    return arr;
}

let result = insertionSort([100, 9, 6, 10, 22, 3, 7]);
console.log(result);

//Time Complexity of InsertionSort is O(nˆ2)