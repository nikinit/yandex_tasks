// Задача 6. Дан массив чисел [0,2,4,7,11,1,5,8,9,3]. 
// Необходимо вернуть строку вида '0-5, 7-9, 11'. 
// Таким образом строка представляет собой диапазон чисел в массиве.

const arr = [0,2,4,7,11,1,5,8,9,3];
const findIntervals = (arr) => {
    let intervals = '';
    arr.sort((a, b) => a - b); 
    console.log(arr);
    let start = arr[0],
        end;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i],
            next = arr[i + 1];
        if (next === cur) {
            continue
        }
        else if (next - cur === 1) {
            end = next;
        }
        else {
            intervals += `${start}` + 
            (end === undefined | start > end ? `` : `-${end}`) +
            (next === undefined ? `` : `, `);
            start = next;
        }
    }
    return intervals;
}
console.log(findIntervals(arr));