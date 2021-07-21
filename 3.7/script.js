// Задача 7. Дан массив чисел [2,3,5,1,6]. 
// В массиве всегда содержатся числа от единицы до n. 
// Необходимо вернуть какое число пропустили.
const arr = [2, 3, 5, 1, 6];
const findLost = (arr) => {
    let sum = (1 + arr.length + 1) * (arr.length + 1) / 2; // сумма арифметической прогрессии
    arr.forEach(e => sum -= e);
    return sum;
}
const findLostRocketScience=(a)=>(2+a.length)*(++a.length)/2-a.reduce((p, c)=>p+c);
console.log(findLost(arr));
console.log(findLostRocketScience(arr));