const powerOfTwo = (num) => {
    if (num < 1) {
        return false;;
    }

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = num / 2;
    }
    return true;
}

let result = powerOfTwo(10);
console.log(result);

//The above code has time complexity of O(logn);

//The Below code in best with time complexity of O(1);

const powerOfTwoBitwise = (num) => {
    if(num < 1){
        return false;
    }

    return ((num & (num - 1)) === 0);
}

console.log(powerOfTwoBitwise(10))