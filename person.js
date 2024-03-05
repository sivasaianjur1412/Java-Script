function getPerson(age) {
    if(age >= 13 && age <= 19)
        return "Teen";
    else if(age < 13)
        return "kid";
    else
        return "Adult";
}

console.log(getPerson(9))