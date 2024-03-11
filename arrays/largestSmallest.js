function findLargestAndSmallest(numbers) {
    if(numbers.length === 0) {
        return -1;
    }
    let largest = numbers[0];
    let smallest = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > largest)
            largest = numbers[i];
        if(numbers[i] < smallest)
            smallest = numbers[i];
    }
    return {largest, smallest};
}

const numbers = [7, 3, 2, 10, 65, 99, 24];
console.log(findLargestAndSmallest(numbers));