function findReverse(numbers) {
    let reverse = [];
    for(let i = numbers.length - 1; i >= 0; i--) {
        reverse.push(numbers[i]);
    }
    return reverse;
}

const numbers = [2, 34, 1, 7, 39];
console.log(findReverse(numbers))