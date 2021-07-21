/**
 * flatten.
 * 
 * Дан массив, в котором могут храниться любые типы данных.
 * Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив. 
 * Данные остальных типов должны остаться без изменений.
 * Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
 */

 // flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
 // возвращает
 //      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
const list = [1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }];
function flatten(list) {
    let res = [...list];
    for (let i = 0; i < res.length; i++) {
        if (Array.isArray(res[i])) {
            console.log(res.slice(i + 1))
            res = [].concat(res.slice(0, i), res[i], res.slice(i + 1));
            i--;
        }
    }
    return res;
}

console.log(flatten(list));
console.log(flatten([[1,1],2,[1,1]]));
console.log(flatten([1,[4,[6]]]));
