// Задание 1
const jsString = 'js';
const upperCaseString = jsString.toUpperCase();
console.log('Строка в верхнем регистре:', upperCaseString);

// Задание 2
function filterByPrefix(array, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return array.filter(str => 
        str.toLowerCase().startsWith(lowerPrefix)
    );
}
const fruits = ['Apple', 'Banana', 'Apricot', 'Orange', 'avocado'];
console.log(filterByPrefix(fruits, 'ap')); 

// Задание 3
const number = 32.58884;
const floorResult = Math.floor(number);
console.log("До меньшего целого:", floorResult);
const ceilResult = Math.ceil(number);
console.log("До большего целого:", ceilResult);
const roundResult = Math.round(number);
console.log("До ближайшего целого:", roundResult);

// Задание 4
const minValue = Math.min(52, 53, 49, 77, 21, 32);
console.log("Минимальное значение:", minValue);
const maxValue = Math.max(52, 53, 49, 77, 21, 32);
console.log("Максимальное значение:", maxValue);

// Задание 5
function Random() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Случайное число от 1 до 10:", randomNumber);
    return randomNumber;
}
Random();

// Задание 6
function generateRandomArray(number) {
    const arrayLength = Math.floor(number / 2);
    const randomArray = Array.from({ length: arrayLength }, () => 
        Math.floor(Math.random() * (number + 1))
    );
    return randomArray;
}
console.log(generateRandomArray(10))
console.log(generateRandomArray(25))

// Задание 7
function getRandomInRange(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
console.log(getRandomInRange(1, 100)); 

// Задание 8 
const currentDate1 = new Date();
console.log("Текущая дата:", currentDate1);

// Задание 9 
console.log("Текущая дата:", currentDate1.toLocaleDateString());
const currentDate = new Date(currentDate1);
currentDate.setDate(currentDate1.getDate() + 73);
console.log("Дата через 73 дня:", currentDate.toLocaleDateString());

// Задание 10 
function formatDateToRussian(date) {
    
    const months = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ];
    
    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

     // Получаем компоненты даты
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Форматируем время с ведущими нулями
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

     // Собираем итоговую строку
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const testDate = new Date();
console.log(formatDateToRussian(testDate));