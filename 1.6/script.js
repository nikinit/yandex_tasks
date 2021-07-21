// Задача 6. Дана строка:
// AAACCXXXXAAAAAABBBBB
// Необходимо переделать строку и привести к виду символ+количество повторения.
// Например высшеуказанную строку необходимо переделать 
// A3C2X4A6B5

const string = 'A3C2X4A6B5';
const shorten = (string) => {
    let shortened = '',
        char = string[0],
        charAmount = 1;
    for (let i = 0; i < string.length - 1; i++) {
        let nextChar = string[i + 1];
        if (char === nextChar) {
            charAmount++;
        }
        else {
            shortened += char + charAmount;
            char = nextChar;
            charAmount = 1
        }
    }
    shortened += char + charAmount;
    return shortened;
}
console.log(shorten(string));