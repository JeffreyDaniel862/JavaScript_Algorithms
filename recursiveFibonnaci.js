const recursiveFibonnaci = (num) => {
    if (num < 2){
        return num;
    }

    return recursiveFibonnaci(num - 1) + recursiveFibonnaci(num - 2)
}

let result = recursiveFibonnaci(6);
console.log(result);