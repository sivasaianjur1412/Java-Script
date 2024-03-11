function reverseWord(inputString) {
    let words = inputString.split(" ");
    let reverseWords = words.reverse(); 
    return reverseWords.join(" ");
}

console.log(reverseWord("java hello"));