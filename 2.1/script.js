// Задача 1. Необходимо реализовать функцию которая будет выявлять 
// являются ли две строки анаграммами. 
// Две строки являются анаграммами 
// если один получается от другого с помощю перестоновки букв.
// Например "рот" и "тор".

const s1 = 'рот',
    s2 = 'тор';
const createObject = ((s) => {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] + 1 || 1;
    }
    return obj;
})
const isAnagram = ((s1, s2) => {
    let obj1 = createObject(s1);
    let obj2 = createObject(s2);
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let i = 0; i < Object.keys(obj1).length; i++) {
        if (obj1[Object.keys(obj1)[i]] !== obj2[Object.keys(obj1)[i]]) {
            return false
        }
    }
    return true
})
console.log(isAnagram(s1,s2));
console.log(isAnagram('трос','срок'));