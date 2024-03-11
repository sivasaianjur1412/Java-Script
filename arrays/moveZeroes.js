function moveZeroesToEnd(numbers) {
    let countOfZeroes = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0)
            countOfZeroes++;
        else if(countOfZeroes > 0) {
            let tempValue = numbers[i];
            numbers[i] = 0;
            numbers[i - countOfZeroes] = tempValue;
        }
    }
    return numbers;
}

const numbers = [1, 0, 5, 0, 8, 0];
console.log(moveZeroesToEnd(numbers));