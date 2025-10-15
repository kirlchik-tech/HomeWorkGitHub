// Задание 1
let i = 1;

let n = 2;

while(i <= n){
   alert('Привет')
   i++;
}

// Задание 2
let o = 1;

let j = 5;

while(o <= j){
   console.log(o);
   o++;
}
// Задание 3
let f = 7;

let c = 22;

while(f <= c){
   console.log(f);
   f++;
}

// Задание 4
let obj = {
    "Коля": '200',
    "Вася": '300', 
    "Петя": '400'
};

for (let name in obj) {
    console.log(name + " — зарплата " + obj[name] + " долларов");
}

// Задание 5
let nom = 1000;
let num = 0; 

while (nom >= 50) {
    nom = nom / 2; 
    num++; 
    console.log(nom);
}

console.log("Итоговое число: " + nom);
console.log("Количество итераций: " + num);

//Задание 6
let firstFriday = 5; 

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

//Доп задание 1
let k = 100;
let iterations = 0;

for (; k >= 0; iterations++) {
    k -= 7;
    console.log(k);
}

console.log("Итоговое число: " + k);
console.log("Количество итераций: " + iterations);

//Доп задание 2
let months = [
    "Январь", "Февраль", "Март", "Апрель", 
    "Май", "Июнь", "Июль", "Август", 
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

//Доп задание 3
let book = {
    "название": "Мастер и Маргарита",
    "автор": "Михаил Булгаков",
    "год издания": 1967,
    "жанр": "Роман"
};

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}

//Доп задание 4
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1); // числа от 1 до 100
}

console.log("Массив:", numbers);

let min = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Минимальное число:", min);