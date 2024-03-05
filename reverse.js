function reverseDigits(number) {
    let reverse = 0;
    while(number !== 0) {
        let remainder = number % 10;
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
}

console.log(reverseDigits(12345))