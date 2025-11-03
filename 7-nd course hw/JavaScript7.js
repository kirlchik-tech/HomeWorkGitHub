// Задание 1
function functionWithCallback(callback) {
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

  callback(people);
}

functionWithCallback((peopleArray) => {
console.log(peopleArray.sort((a, b) => a.age - b.age));
});

// Задание 2

function isPositive(number) {
  return number > 0;
}

function isMale(people) {
  return people.gender === 'male';
}

function filter(number, gender) {
    const output = [];

   for (let i = 0; i < number.length; i++) {
    if (gender(number[i]) === true) {
      output.push(number[i]);
      }
   }

   return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Задание 3

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', 
day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

let timerId = setInterval(() => alert(`${formattedDate}`), 3000);


setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);

// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}


function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond( function() { sayHi('Глеб') })