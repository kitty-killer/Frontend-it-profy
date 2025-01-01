

// Задание 1:
let country = 'Sweden';
let access = country == 'Sweden' ? true : false;
console.log(access);

// Задание 2:
let number = 10;
for (let i = 0; i < 10; i++) {
  number++;
}
console.log(number);

// Задание 3:
for (let i = 0; i < 10; i += 2) {
  const userInput = prompt('Введите число');
  console.log(userInput == 10 ? 'Равно 10' : 'Не равно 10');
}

// Задание 4:
const numberOfElements = parseInt(prompt("Введите количество квадратов, которые хотите получить"), 10);
for (let i = 0; i < numberOfElements; i++) {
  console.log(i * i);
}

// Задание 5:
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

// Задание 6:
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задание 7:
function squareNumbers(min, max) {
  for (let i = min; i < max; i++) {
    console.log(i * i);
  }
}
const startElement = parseInt(prompt("Введите первый элемент"), 10);
const endElement = parseInt(prompt("Введите количество квадратов, которые хотите получить"), 10);
squareNumbers(startElement, endElement);

// Задание 8:
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
  const r = getRandomInteger(0, 255);
  const g = getRandomInteger(0, 255);
  const b = getRandomInteger(0, 255);

  return `rgb(${r},${g},${b})`;
}
console.log(getRandomRGB());

// Задание 9:
function checkInteger(n) {
  for (let i = 1; i <= n; i += 0.5) {
    console.log(`${i} это ${Number.isInteger(i) ? 'целое число' : 'дробное число'}`);
  }
}
const n = parseInt(prompt('Введите целое число'), 10);
checkInteger(n);

// Задание 10:
function calcPrice(days) {
  const costPerDay = 40;
  if (isNaN(days) || days < 0) {
    console.log('Неверное значение');
    return;
  }

  const discount = days >= 7 ? 50 : days >= 3 ? 20 : 0;
  const total = days * costPerDay - discount;
  console.log('Цена: ' + total);
}
const bookingDays = parseInt(prompt('Введите количество дней, на которые вы собираетесь забронировать машину'), 10);
calcPrice(bookingDays);
