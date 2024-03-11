function selectionSort(numbers) {
    for(let i = 0; i < numbers.length - 1; i++) {
        let minimum = i;
        for(let j = i; j < numbers.length; j++) {
            if(numbers[j] < numbers[minimum])
                minimum = j;
        }
        let tempValue = numbers[minimum];
        numbers[minimum] = numbers[i];
        numbers[i] = tempValue;
    }
    return numbers;
}

const numbers = [12, 47, 20, 92, 75];
console.log(selectionSort(numbers));