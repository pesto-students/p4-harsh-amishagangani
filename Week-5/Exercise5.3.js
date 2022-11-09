function isVowel(char) {
    return 'aeiou'.includes(char);
}


function vowelCount(str) {
    const vowelMap = new Map(); /*Map is created */
    for (let char of str) {     /* will take each character of str */
        let lowerCaseChar = char.toLowerCase(); /* will lower the case of str char */
        if (isVowel(lowerCaseChar)) {       /* in if condition, isVowel func is called */
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
                /* will check if the char is there. if yes then it will set it into the map and add 1 to to the previous value */
            } else {
                vowelMap.set(lowerCaseChar, 1); /* if char is coming for the first time, then it will be set in the map and value will be 1 */
            }
        }
    }
    return vowelMap;
}

const v = vowelCount('amisha');
console.log(v);  