function rotateByPosition(numbers, position) {
    let newArray = [];
    let flag = position;
    for(let i = 0; i < numbers.length; i++) {
        if(position > 0) {
            newArray[numbers.length - position] = numbers[i];
            position--;
        }
        else
            newArray[i - flag] = numbers[i];
    }
    return newArray;  
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(rotateByPosition(numbers, 2));