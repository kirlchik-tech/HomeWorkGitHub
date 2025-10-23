//Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2

const ark = [1, 5, 4, 10, 0, 3];
const index = ark.indexOf(4);
console.log(index); 

// Задание 3

const ascended = [1, 3, 5, 10, 20];
const join = ascended.join(' ')
console.log(join);

// Задание 4


const result = [];

for (let i = 0; i < 3; i++) {

    const innerArray = [];
    

    for (let j = 0; j < 3; j++) {
        innerArray.push(1); 
    }
    
    result.push(innerArray);
}

console.log(result);

// Задание 5

const arm = [1, 1, 1];
arm.push(2, 2, 2); 
console.log(arm); 

// Задание 6

const art = [9, 8, 7, 'a', 6, 5];


art.sort();

const sear = art.indexOf('a');
if (sear !== -1) {
    art.splice(sear, 1);
}

console.log(art); 

// Задание 7

const numbers = [9, 8, 7, 6, 5];

const userGuess = prompt('Угадайте число от 0 до 10:');

if (numbers.includes(Number(userGuess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
const str = 'abcdef';


const ars = str.split('');


const reversedArr = ars.reverse();


const reversedStr = reversedArr.join('');

console.log(reversedStr); 

// Задание 9

const arp = [[1, 2, 3], [4, 5, 6]];
const flatArray = arp.flat();
console.log(flatArray); 

// Задание 10

const number = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < number.length - 1; i++) {
    const sum = number[i] + number[i + 1];
    console.log(`${number[i]} + ${number[i + 1]} = ${sum}`);
}

// Задание 11

const getSquares = numbers => numbers.map(num => num * num);

console.log(getSquares([1, 2, 3, 4, 5]));
// Задание 12

const getWordLengths = words => words.map(word => word.length);

console.log(getWordLengths(['apple', 'cat', 'javascript', '']));

// Задание 13

const getNegativeNumbers = numbers => numbers.filter(num => num < 0);

console.log(getNegativeNumbers([1, -2, 3, -4, 5, -6]));

// Задание 14


const originalArray = Array.from({length: 10}, () => Math.random() * 10);


const evenNumbers = originalArray.filter(num => num % 2 === 0);


console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenNumbers);

// Задание 15


const numbert = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);


const sum = numbert.reduce((acc, num) => acc + num, 0);
const average = sum / numbert.length;


console.log('Сгенерированный массив:', numbert);
console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average);