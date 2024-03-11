function fibonacciSeries(number) {
    let a = 0, b = 1, c = 0;
    console.log(a + ", "+ b + ", ");
    for(let i = 2; i < number; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c + ", ");
    }
}

fibonacciSeries(10);