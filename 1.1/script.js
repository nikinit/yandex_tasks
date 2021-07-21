// “Задача 1. Есть массив объектов:
// hubs = [
// {w : 10, {banner : {id : 12356}}}, 
// {w : 130, {banner : {id : 12356}}}, 
// {w : 20, {banner : {id : 12356}}}
// ]; 
// w – это весы соответствующих баннеров. 
// Необходимо написать функцию которая будет возвращать произвольный баннер, 
// используя веса как вероятность показа этого баннера. 
// Например если у одного баннера w=10 а у другого w = 130,
// то если мы запрашиваем 140 раз то 10 раз должен выдаваться первый баннер,
// а 130 раз  другой. Количество баннеров в массиве заранее неизвестно. 
const results = {
    1: 0,
    2: 0,
    3: 0
}
const hubs = [
    {w : 10, banner : {id : 1}}, 
    {w : 130, banner : {id : 2}}, 
    {w : 20, banner : {id : 3}}
]; 

const randomBanner = (hubs) => {
    let probability = 0;
    for (let i = 0; i < hubs.length; i++) {
        probability += hubs[i].w;
    }
    let random = Math.floor(Math.random() * 160);
    for (let i = 0; i < hubs.length; i++) {
        if (random - hubs[i].w < 0) {
            results[hubs[i].banner.id]++
            return hubs[i];
        }
        random -= hubs[i].w;
    }
}

// checkup
for (let i = 0; i < 10000; i++) {
    for(let j = 0; j < 160; j++) {
        randomBanner(hubs)
    }
}
console.log(results);
// console.log(randomBanner(hubs), results)