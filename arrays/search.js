function binarySearch(numbers, element) {
    let low = 0;
    let high = numbers.length - 1;
    while(low < high) {
        let mid = Math.floor((low + high) / 2);
        if(numbers[mid] === element)
            return mid;
        else if(numbers[mid] < element)
            low = mid++;
        else if(numbers[mid] > element)
            high = mid--;
    }
    return -1;
}

const arr = [20, 25, 30, 32, 40, 45];
let index = binarySearch(arr, 30);
if(index === -1)
    console.log("element not found");
else 
    console.log("element found: " + ++index);