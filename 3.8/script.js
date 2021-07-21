// Задача 8. Реализовать fuzzysearch. На вход поступают две 
// строки - строка поиска и строка которую проверяем. 
// Необходимо сказать соответствует строка на входе проверяемой строке.
// При проверке соответствия в строке поиска могут быть пропущены буквы. 

const fs = (search, check) => {
    if (typeof search === 'undefined' || typeof check === 'undefined') {
        return false
    }
    for (let i = 0; i < check.length; i++) {
        if (check[i] === search[0]) {
            search = search.slice(1);
            console.log(search)
        }
    }
    return search === '' ? true : false
}

console.log(fs('teddy', 'teddy')) // => true
console.log(fs('tdy', 'teddy')) // => true
console.log(fs('tyd', 'teddy')) // => false
console.log(fs('bear', 'teddy')) // => false
console.log(fs('ey', 'teddy')) // => true
console.log(fs('tet')) // => false