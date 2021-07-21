// Необходимо написать функцию для подсчета суммы всех числовых значений в массиве.
// Валидными числовыми значениями являются так же строки, которые начинаются с цифр.
// В этом случае в качестве числового значения нужно использовать эту начальную 
// последовательность цифр.
// Массив может содержать любые типы данных, быть не плоским.
function sum(arr) {
    let sum = 0,
        flattened = [...arr];
    for (let i = 0; i < flattened.length; i++) {
        let el = flattened[i];
        if (!isNaN(el)) {
            sum += Number(el);
        }
        else if (Array.isArray(el)) {
            flattened = [].concat(flattened.slice(0, i), 
                                  flattened[i], 
                                  flattened.slice(i + 1));
            i--;
        }
        else if (typeof el === 'string') {
            let j = 0;
            while (!isNaN(el[j])) {
                j++;
            }
            sum += Number(el.slice(0, j));
        }
    }
    return sum;
}

console.log(sum([1, 'x', '2x', ['30x', ['x2', '5', [12, [[['1488lol934568e4w3']]]]]]])); // 1538