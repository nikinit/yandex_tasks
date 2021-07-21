// Задача 7. Банкомат.
// Необходимо реализовать функцию которая получает на вход 
// количество денег которое необходимо выдавать.
// На выход возвращает объект из наминалов. 
// Объект должен быть в следующем виде:
// var nomObj = {
//  '5000' : 'count',
//  '1000' : 'count',
//  '500' : 'count',
//  '100' : 'count',
//  '50' : 'count',
// };
// Можно использовать следующие номиналы [50,100,500,1000,5000].
// Для усложненеия задачи можно еще передать лимит доступных валют.
// var limitObj = {
//  '5000' : 2,
//  '1000' : 3,
//  '500' : 5,
//  '100' : 0,
//  '50' : 1,
// };

const limitObj = {
    '5000' : 2,
    '1000' : 3,
    '500' : 5,
    '100' : 5,
    '50' : 1,
};

function giveMoney(bank, request) {
    if (request < 0) {
        return 'Wrong request';
    }
    let toGive = {
        '5000' : 0,
        '1000' : 0,
        '500' : 0,
        '100' : 0,
        '50' : 0
    };
    let nominals = Object.keys(bank);
    nominals.sort((a, b) => b - a);
    for(let i = 0; i < nominals.length; i++) {
        while (+request / +nominals[i] >= 1) {
            if (bank[nominals[i]] < 1) { // different things may happen
                break;
            }
            else {
                toGive[nominals[i]]++;
                bank[nominals[i]]--;
                request -= nominals[i];
            }
        }
    }
    return !request ? toGive : `Not enough money in bankomat, ${request}`;
}

console.log(giveMoney(limitObj, 2950));