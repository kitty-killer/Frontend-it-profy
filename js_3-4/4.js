

//ЗАДАНИЕ 1
const n = 50;  

if (n >= 0 && n <= 100) {
    console.log("n находится в диапазоне от 0 до 100 включительно");
} else {
    console.log("n находится вне диапазона от 0 до 100");
}


//ЗАДАНИЕ 2

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
};

for (const name in engineers) {
    console.log(`Заработная плата ${name} составляет ${engineers[name]} рублей.`);
}



//ЗАДАНИЕ 3

const array = [1, 2, 3, 4, 5];  

for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
}


//Задание 4

let num = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (let i = 0; i < num.length; i++) {
    console.log(`Индексу ${i} соответствует число ${num[i]}`);
}



//ЗАДАНИЕ 5

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (const question of questions) {
    question.usersAnswer = null;
}

console.log(questions);


//ЗАДАНИЕ 6


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];


for (const number of numbers) {
    console.log(number);
}


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let summa = 0;

for (let i = 0; i < numbers.length; i++) {
    summa += numbers[i];
}

console.log(`Сумма элементов массива: ${summa}`);


let SumEven = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        SumEven += numbers[i];
    }
}

console.log(`Сумма четных чисел в массиве: ${SumEven}`);

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(`Максимальное число в массиве: ${max}`);

let maxIndexes = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
        maxIndexes.push(i);
    }
}

console.log(`Индексы максимального числа ${max} в массиве: ${maxIndexes}`);




//ЗАДАНИЕ 7

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let NewArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        NewArr.push(arr[i]);
    }
}

console.log(NewArr);  


//ЗАДАНИЕ 8

let nums = [5, 4, 3, 8, 0];
let limit = 5;
let newNums = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        newNums.push(nums[i]);
    }
}

console.log(newNums);  



//ЗАДАНИЕ 9 

const users = [
    {name: 'Vasya', age: 23},{name: 'Olya', age: 12},{name: 'Anna', age: 22},{name: 'Alex', age: 18},{name: 'Valery', age: 8}];

for (const user of users) {
    if (user.age > 15) {
        console.log(user.name);
    }
}




//ЗАДАНИЕ 10

let vegetables = ["морковь", "баклажан", "репа", "топинамбур","картошка","сельдерей"];
let newArr = [];

for (let i = 0; i < vegetables.length; i++) {
    newArr.push({word: vegetables[i], length: vegetables[i].length});
}

console.log(newArr);  

for (const item of newArr) {
    console.log(`${item.word} - ${item.length}`);
}


