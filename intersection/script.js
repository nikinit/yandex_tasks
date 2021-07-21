// Есть два сортированных массива с числами.
// Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.

const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
    let i = j = 0,
        intersection = [];
    while (true) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            i++, j++;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            j++;
        }
        if (i === arr1.length || j === arr2.length) {
            return intersection;
        }
    }
}

// Примеры
console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])); // => [2, 2]