// === Калькулятор выражений (RPN)
// Написать калькулятор выражений в обратной польской нотации.

// Польская нотация
// Выражение состоит из операндов: чисел и знаков операций + - * /
// Выражение читается слева направо
// Операнды в выражении разделяются пробелами
// Когда в выражении встречается знак операции, 
// выполняется соответствующая операция над двумя последними 
// встретившимися перед ним операндами в порядке их записи
// Результатом вычисления выражения становится результат 
// последней вычисленной операции

// ПРИМЕРЫ:


// calc('7 2 * 3 +')  => 7 * 2 + 3 = 17
// calc('7 2 3 * -')  => 7 - (2 * 3) = 1
// calc('7 2 3 1 + * -')  => 7 - 2 * (3 + 1) = -1

// calc('11 -12 -')  => ?
// calc('7 2 3 1 * - - 3 5 + -') => ?

// calc('1 1 + +')   => Error in Syntax
// calc('1 2 2 *')   => Error in Syntax
// calc('1 b + c -')  => Error in Operands

function calc(equation) {
    let res = [],
        elements = equation.split(' '),
        operations = '+-/*',
        error = '';

    for (let i = 0; i < elements.length; i++) {
        if (!isNaN(elements[i])) {
            res.push(elements[i]);
        }
        else if (operations.includes(elements[i])) {
            if (res.length >= 2) {
                let calculation;
                switch(elements[i]) {
                    case '+': 
                        calculation = +res[res.length - 2] + +res[res.length - 1];
                        break;
                    case '-': 
                        calculation = +res[res.length - 2] - +res[res.length - 1];
                        break;
                    case '*': 
                        calculation = +res[res.length - 2] * +res[res.length - 1];
                        break;
                    case '/': 
                        calculation = +res[res.length - 2] / +res[res.length - 1];
                        break;
                }
                res.splice(res.length - 2, 2);
                res.push(calculation);
            }
            else{
                return 'Error in Syntax';
            }
        }
        else {
            return 'Error in operands';
        }
    }
    if (res.length > 1) {
        error =  'Error in Syntax';
    }
    return error === '' ? res[0] : error;
}

console.log(calc('7 2 * 3 +'))  // 17
console.log(calc('7 2 3 * -'))  // 1
console.log(calc('7 2 3 1 + * -'))  // -1
console.log(calc('7 2 3 1 * - - 3 5 + -')) // 0
console.log(calc('1 2 2 *'))   // Error in Syntax 
console.log(calc('1 1 + +'))   // Error in Syntax 
console.log(calc('11 -12 -'))  // 23 
console.log(calc('1 b + c -'))  // Error in Operands 