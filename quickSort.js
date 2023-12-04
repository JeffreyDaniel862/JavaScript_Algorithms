const quickSort = (arr) => {

    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

let result = quickSort([100, 9, 6, 10, 22, 3, 7]);
console.log(result);

//Time Complexity of QuickSort is O(nˆ2)