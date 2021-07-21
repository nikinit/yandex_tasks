// Задача 2. Есть массив чисел.
// numbersArr = [45,12,36,98,123,2,54,78,63,14];
// Необходимо сортировать которые стоят на нечетных местах. После сортировки результат должен быть таким:
// numbersArr = [45,2,36,12,123,14,54,78,63,98];
const numbersArr = [45,12,36,98,123,2,54,78,63,14];
const sortOdd = (arr) => {
    let oddIndexes = [],
        sorted = new Array(arr.length);
    for (let i = 1; i < arr.length; i += 2) {
        oddIndexes.push(arr[i]);
    }
    oddIndexes.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = (i % 2 === 0 ? arr[i] : oddIndexes[Math.floor(i / 2)]);
    }
    return sorted;
}
console.log(sortOdd(numbersArr));