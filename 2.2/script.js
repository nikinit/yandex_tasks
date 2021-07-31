// Задача 2. Необходимо в заданном массиве найти все слова 
// которые являются анаграммами и вернут их в виде массива.
// Например ["рот","торс","сорт","человек","тор","рост"] 
// необходимо возвращать 
// [["рот", "тор"],["торс", "сорт", "рост"]]. 
// Одиночные слова не возвращаем.
const words = ["рот","торс","сорт",'орт',"человек","тор", 'срок', "рост",'отр','тро', 'векочел', 'крос', 'волечек'];

const findLists = ((words) => {
    const wordGroups = {};
    words.forEach(word => {
        wordGroups[word.split('').sort().join('')] 
        ? wordGroups[word.split('').sort().join('')].push(word) 
        : wordGroups[word.split('').sort().join('')] = [word];
    });
    return Object.values(wordGroups);
});

console.log(findLists(words));