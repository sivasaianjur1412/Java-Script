function getVowelCount(inputString) {
    inputString = inputString.toLowerCase();
    let count = 0;
        for(let i = 0; i < inputString.length; i++) {
            if(inputString.charAt(i) == 'a' ||
                    inputString.charAt(i) == 'e' ||
                    inputString.charAt(i) == 'i' ||
                    inputString.charAt(i) == 'o' ||
                    inputString.charAt(i) == 'u')
                count++;
        }
    return count;
}

console.log(getVowelCount("hello"));