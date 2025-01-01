// Задание 1:
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
const userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);

// Задание 2:
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
const base = parseFloat(prompt('Введите число'));
const exponent = parseFloat(prompt('Введите степень'));
const result = Math.pow(base, exponent);
console.log(result);


// Задание 4:
// Создать произвольную переменную, присвоить ей произвольное строковое значение.
// Используя if, написать условие: если значение переменной равно “some text”, присвоить ей значение “another text”, иначе - “some text”.
let text = 'my text';
if (text === 'some text') {
  text = 'another text';
} else {
  text = 'some text';
}

// Задание 5:
// Создать переменную и присвоить ей число. Записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less than zero”;
 // если больше нуля - умножить на 10 (использовать краткую запись).
let number = 10;
if (number === 0) {
  number = 1;
} else if (number < 0) {
  
  number = 'less than zero';
} else {

  number *= 10;
}

// Задание 6:
// Запросите у пользователя число и запишите его в переменную.
const userNumber = parseFloat(prompt('Введите число'));
let resultVar;
// Если введенное число меньше 5, то результат '0', если больше - '1'. Выведите результат в консоль.
resultVar = userNumber < 5 ? '0' : '1';
console.log(resultVar);

// Задание 7:
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел.
const num1 = parseFloat(prompt('Введите первое число'));
const num2 = parseFloat(prompt('Введите второе число'));
if (num1 === num2) {
  console.log(`Числа равны: ${num1}`);
} else {
  console.log(`Большее число: ${Math.max(num1, num2)}`);
}

// Задание 8:
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
const number1 = parseFloat(prompt('Введите первое число'));
const number2 = parseFloat(prompt('Введите второе число'));
if (number1 % number2 === 0) {
  console.log(`${number1} кратно ${number2}`);
} else {
  console.log(`${number1} не кратно ${number2}`);
}

// Задание 9:
// Запросить у пользователя средний балл, записать в переменную.
// Вывести соответствующее сообщение в консоль.
const averageGrade = parseFloat(prompt('Введите средний балл'));

if (averageGrade >= 1 && averageGrade <= 4) {
  console.log('Двоечник, иди учись!');
} else if (averageGrade >= 5 && averageGrade <= 8) {
  console.log('Неплохо, но давай еще поднажмем!');
} else if (averageGrade >= 9 && averageGrade <= 10) {
  console.log('Ого, да ты настоящий отличник!');
} else {
  console.log('Неверный балл');
}

// Задание 10:
// Запросить у пользователя балл за экзамен и количество выполненных проектов.
const examScore = parseFloat(prompt('Введите балл за экзамен (от 0 до 100)'));
const projectCount = parseInt(prompt('Введите количество выполненных проектов'), 10);
let finalScore;

if (examScore > 90 || projectCount > 10) {
  finalScore = 100;
} else if (examScore > 75 && projectCount >= 5) {
  finalScore = 90;
} else if (examScore > 50 && projectCount >= 2) {
  finalScore = 75;
} else {
  finalScore = 0;
}
console.log(`Выпускной балл: ${finalScore}`);

// Задание 11:
// Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
const rentalDays = parseInt(prompt('Введите количество дней аренды автомобиля'), 10);
const costPerDay = 40;
let discount;
if (rentalDays >= 7) {
  discount = 50;
} else if (rentalDays >= 3) {
  discount = 20;
} else {
  discount = 0;
}
const totalCost = rentalDays * costPerDay - discount;
console.log(`Общая стоимость аренды: $${totalCost}`);
