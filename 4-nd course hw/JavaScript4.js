// Задание 1

function findMin(a, b) {
    return a <= b ? a : b;
}

console.log(findMin(8, 4)); 
console.log(findMin(6, 6)); 
console.log(findMin(2, 9)); 

// Задание 2

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd(42));   
console.log(checkEvenOdd(17));   
console.log(checkEvenOdd(0));   
console.log(checkEvenOdd(-22)); 
console.log(checkEvenOdd(-33));

// Задание 3

// квадрат числа:
function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
}

printSquare(5);

// возврат квадрата значением:
function getSquare(number) {
    return number * number;
}


const result1 = getSquare(5);
console.log(result1); 

// Задание 4

function checkAge() {
    
    let age = prompt("Сколько вам лет?");
    
    age = Number(age);
    
    if (age < 0 || isNaN(age)) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

checkAge();

// Задание 5

function multiplyNumbers(a, b) {

    let num1 = Number(a);
    let num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(multiplyNumbers(5, 3));   
console.log(multiplyNumbers(NaN, 5));   

// Задание 6

function calculateCube() {

    let input = prompt("Введите число:");

    if (input === null) {
        return "Ввод отменен";
    }

    let number = Number(input);
    

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {

        let cube = number * number * number;
        return `${number} в кубе равняется ${cube}`;
    }
}

let result = calculateCube();
console.log(result);

// Задание 7

// Первый объект circle1
let circle1 = {
    radius: 5,
    
    getArea: function() {
        if (typeof this.radius !== 'number' || isNaN(this.radius)) {
            return 'Ошибка: радиус должен быть числом';
        }
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        if (typeof this.radius !== 'number' || isNaN(this.radius)) {
            return 'Ошибка: радиус должен быть числом';
        }
        return 2 * Math.PI * this.radius;
    }
};

// Второй объект circle2
let circle2 = {
    radius: 8,
    
    getArea: function() {
        if (typeof this.radius !== 'number' || isNaN(this.radius)) {
            return 'Ошибка: радиус должен быть числом';
        }
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {

        if (typeof this.radius !== 'number' || isNaN(this.radius)) {
            return 'Ошибка: радиус должен быть числом';
        }
        return 2 * Math.PI * this.radius;
    }
};

console.log("circle1:");
console.log("Радиус:", circle1.radius);
console.log("Площадь:", circle1.getArea());
console.log("Периметр:", circle1.getPerimeter());

console.log("circle2:");
console.log("Радиус:", circle2.radius);
console.log("Площадь:", circle2.getArea());
console.log("Периметр:", circle2.getPerimeter());