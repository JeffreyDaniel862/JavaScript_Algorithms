const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let result = linearSearch([6, 9, 2, 5, 11, 8], 8);
console.log(result);

//Time Complexity of LinearSearch is O(n)