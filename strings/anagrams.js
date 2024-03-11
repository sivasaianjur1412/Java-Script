function findAnagrams(str1, str2) {
    let charOne = Array.from(str1);
    let charTwo = Array.from(str2);
    if(charOne.length != charTwo.length)
        return false;
    charOne.sort();
    charTwo.sort();
    for(let i = 0; i < charOne.length; i++) {
        if(charOne[i] != charTwo[i])
            return false;
    }
    return true;
}

console.log(findAnagrams("siva", "avis") ? "anagrams" : "not anagrams");