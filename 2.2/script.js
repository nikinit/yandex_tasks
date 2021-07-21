// Задача 2. Необходимо в заданном массиве найти все слова 
// которые являются анаграммами и вернут их в виде массива.
// Например ["рот","торс","сорт","человек","тор","рост"] 
// необходимо возвращать 
// [["рот", "тор"],["торс", "сорт", "рост"]]. 
// Одиночные слова не возвращаем.
const words = ["рот","торс","сорт",'орт',"человек","тор", 'срок', "рост",'отр','тро', 'векочел', 'крос'];

const findLists = (words => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word1 = words[i],
            anagrams = [];
        anagrams.push(word1);
        for (let j = i + 1; j < words.length; j++) {
            let word2 = words[j];
                if (isAnagram(word1, word2)) {
                    anagrams.push(word2);
                    words.splice(j, 1);
            }
        }
        if (anagrams.length === 1) {
            continue;
        }
        else {
            result.push(anagrams);
        }
    }
    return result;
})

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

console.log(findLists(words));