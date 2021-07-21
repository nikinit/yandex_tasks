/*
Билеты по маршруту
У нас есть набор билетов вида:

[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает билеты 
в порядке следования по маршруту.
*/


// Автор в депрессии, скоро доделает
const test = [
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' }
]

function getRoute(tickets = []) {
    let obj = {};
    let cities = [];
    for (let ticket of tickets) {
        let from = ticket.from,
            to = ticket.to;
        obj[from] = obj[from] ? 0 : -1;
        obj[to] = obj[to] ? 0 : 1;
        if (obj[from] === 0) {
            delete obj[from];
        }
        else if (obj[to] === 0) {
            delete obj[to];
        }
    }
    
    return obj;
}

console.log(getRoute(test));