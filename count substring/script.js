/*
Написать функцию, которая принимает на вход 2 строковых аргумента,
подсчитывает количество вхождений строки из второго аргумента в
строке из первого аргумента.

Замечания:
  - первый аргумент может быть пустой строкой
  - второй аргумент может быть только строкой из одного символа
  - нельзя использовать регулярные выражения
*/

function strCount(str, char) {
    let res = 0;
    for (let el of str) {
        res = el === char ? res + 1 : res;
    }
    return res;
}
  
console.log(strCount('Hello', 'o')) // => 1
console.log(strCount('Hello', 'l')) // => 2
console.log(strCount('', 'z'))      // => 0