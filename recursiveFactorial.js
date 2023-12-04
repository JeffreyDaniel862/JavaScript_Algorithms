const recursiveFactorial = (num) => {
    if (num === 0){
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

let result = recursiveFactorial(5);
console.log(result);