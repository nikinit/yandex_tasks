// Дана строка s. Необходимо сказать, можно ли 
// переставить буквы в строке так, чтобы получился палиндром.
function replaceForPalindrome(s) {
    let preparedString = [],
        chars = {},
        odd = 0; // can be 0 or 1. if more, then false
    for (let letter of s) {
        if (letter.toLowerCase().search(/[a-zа-я]/) !== -1) {
            chars[letter] = chars[letter] ? chars[letter] + 1 : 1;
        }
    }
    for (let letter of Object.keys(chars)) {
        odd = odd + (chars[letter] % 2 === 1 ? 1 : 0);
    }
    console.log(chars, odd);
    return odd < 2 ? true : false;
}
console.log(replaceForPalindrome('arozaupalan       alapuazora')) // true
console.log(replaceForPalindrome('арозаупаланалапуазора')) // true

let chars = {
    'а' : 8,
    'р' : 2,
    'о' : 2,
    'з' : 2,
    'у' : 2,
    'п' : 2,
    'л' : 2,
    'н' : 1
}
console.log(chars)