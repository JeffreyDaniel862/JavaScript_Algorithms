const factorial = (num) => {
    let sum = 1;
    for(let i =2; i<=num; i++){
        sum *= i;
    }

    return sum
}

const result = factorial(20);
console.log(result);