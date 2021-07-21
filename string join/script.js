function strjoin(separator, ...chars) {
    let joined = '';
    for (let i = 0; i < chars.length; i++) {
        joined += chars[i] + (i + 1 !== chars.length ? separator : '');
    }
    return joined;
}

console.log(strjoin('.', 'a', 'b', 'c')) //'a.b.c'
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')) //'a-b-c-d-e-f'