let arr = [5, 2, 2, 2, 4, 8, 8, 4, 2,1,1];
function deleteDublicates(arr) {
    let res = {};
    arr.map(num => res[num] = num);
    return Object.values(res);
}
console.log(deleteDublicates(arr));