// Задание 1
let password = prompt("Придумайте пароль:");
let g = prompt("Введите пароль:");

alert(password === g ? "Пароль введен верно" : "Пароль введен неправильно")


// Задание 2
let c = 2;
console.log(c > 0 && c < 10 ? "Верно" : "Неверно")

// Задание 3
let d = 5000;
let e = 41;
console.log(d > 100 || e > 100 ? "Верно" : "Неверно")

//Задание 4 
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5 
var monthNumber = prompt("Введите месяц используя число:");

switch (monthNumber) {
   case '1':
      console.log('Зима');
      break;
   case '2':
      console.log('Зима');
      break;
   case '3':
      console.log('Весна');
      break;
   case '4':
      console.log('Весна');
      break;
   case '5':
      console.log('Весна');
      break;
   case '6':
      console.log('Лето');
      break;
   case '7':
      console.log('Лето');
      break;
   case '8':
      console.log('Лето');
      break;
   case '9':
      console.log('Осень'); 
      break;
   case '10':
      console.log('Осень');
      break;
   case '11':
      console.log('Осень');
      break;
   case '12':
      console.log('Зима'); 
      break;
   default:
      console.log('Ввели что-то не то');
}

// Доп задание 1
let number = Number(prompt("Пожалуйста, введите любое число"));

if (isNaN(number)) {
    alert("Ошибка: Введено не число!");
} else if (number % 2 === 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

// Доп задание 2
let clientOS = 1; //изменить в соответствии с ОС телефона

switch (clientOS) {
    case 0:
        console.log("Установите версию приложения для iOS по ссылке");
        break;
    case 1:
        console.log("Установите версию приложения для Android по ссылке");
        break;
    default:
        console.log("Неизвестная операционная система");
}

// Доп задание 3
let clientsOS = 0; // 0 — iOS, 1 — Android
let clientDeviceYear = 2015; // Год выпуска телефона


let osMessage = clientsOS === 0 ? "приложения для iOS по ссылке" : "приложения для Android по ссылке";

let versionPrefix = clientDeviceYear < 2015 ? "облегченную версию " : "";

let finalMessage = `Установите ${versionPrefix}${osMessage}`;

console.log(finalMessage);
