const fibonnaci = (num) => {
    const arr = [0, 1]
    if (num <= 1){
        return 0;
    } else {
        for(let i =2; i<num; i++){
            arr.push(arr[i-2] + arr[i-1]);
        }

        return arr;
    }
}

const result = fibonnaci(10);
console.log(result);