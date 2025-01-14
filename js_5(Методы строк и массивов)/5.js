//ЗАДАНИЕ 1

function sum(a, b) {
    if (arguments.length < 2) {
        return "введите два параметра";
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "введенные данные не являются числами";
    }

    return a + b;
}

console.log(sum(5, 4)); 
console.log(sum('d', 8)); 
console.log(sum(1, [2])); 
console.log(sum(1)); 
console.log(sum()); 


//ЗАДАНИЕ 2
function square(a) {
    if (a === undefined) {
        console.error('Функция "square" не может быть вызвана без аргумента');
        return;
    }
    console.log(a * a);
}
square(10);
square(); 

//ЗАДАНИЕ 3
const xNumber = (userNumber) => {
    if (userNumber < 1 || userNumber > 10) {
        console.error('Число должно быть от 1 до 10');
        return;
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber === randomNumber) {
        return "Вы выиграли";
    } else {
        return `Вы не угадали, ваше число - ${userNumber}, а выпало число ${randomNumber}`;
    }
};

console.log(xNumber(5)); 
console.log(xNumber(12));


//ЗАДАНИЕ 4
const copyArr = (arr) => arr.map(element => element);

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = copyArr(originalArray);

console.log(copiedArray); 
console.log(originalArray === copiedArray); 

//ЗАДАНИЕ 5
const addHello = (names) => names.map(name => `Hello, ${name}`);

const namesArray = ["Алиса", "Миша", "Сашка"];
const newArr = addHello(namesArray);

console.log(newArr); 

//ЗАДАНИЕ 6
const userNames = (users) => users.map(user => user.name);

const usersArray = [
    { name: "Маша", age: 25 },
    { name: "Аня", age: 30 },
    { name: "Елисей", age: 35 }
];

const nameArray = userNames(usersArray);

console.log(namesArray); 

//ЗАДАНИЕ 7

const sumObjectValues = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
};

const objectWithNumbers = 
{a: 10, b: 20,c: 'string',d: 12,};

console.log(sumObjectValues(objectWithNumbers)); 

//ЗАДАНИЕ 8

const ucFirst = (str) => {
    if (!str) return "пустая строка"; 
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(ucFirst("world")); 
console.log(ucFirst("hello")); 
console.log(ucFirst("")); 

//ЗАДАНИЕ 9

const checkSpam = (str) => {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
};
console.log(checkSpam("This contains badword")); 
console.log(checkSpam("This contains XXX"));     
console.log(checkSpam("This is clean text"));  

//ЗАДАНИЕ 10

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

console.log(reverseString("привет, Женя")); 

//ЗАДАНИЕ 11
const stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

stations.forEach(station => {
    const code = station.slice(0, 3);
    const index = station.indexOf(';');
    const name = station.slice(index + 1);
    const formattedString = `${code}: ${name}`;
    console.log(formattedString);
});

//ЗАДАНИЕ 12
const unique = (arr) => {
    const uniqueArr = [];
    arr.forEach(element => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    });
    return uniqueArr;
};
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings)); 

//ЗАДАНИЕ 13
const verifyCats = (catsJane, catsJulia) => {
    const correctedJaneCats = catsJane.slice(1, -1);

    const allCats = correctedJaneCats.concat(catsJulia);
    allCats.forEach((age, index) => {
        if (age >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`);
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`);
        }
    });
};

let janeCats = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
let juliaCats = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
let janeCats2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
 let juliaCats2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
verifyCats(janeCats, juliaCats);
verifyCats(janeCats2, juliaCats2);

//ЗАДАНИЕ 14
const filterFor = (arr, a) => arr.filter(element => element >= a);
let arr = [5, 4, 3, 8, 0];

console.log(filterFor(arr, 5));  
console.log(filterFor(arr, 10)); 
console.log(filterFor(arr, 3.11));
//ЗАДАНИЕ 15
const filterLongStrings = (arr) => arr.filter(str => str.length > 3);

const string = ['yes', 'hello', 'no', 'easycode', 'what'];
const filteredStrings = filterLongStrings(string);

console.log(filteredStrings); 

//ЗАДАНИЕ 16
let arrays = [[14, 45], [1], ['a', 'c', 'd']];
arrays.sort((a, b) => a.length - b.length);

console.log(arrays); 

//ЗАДАНИЕ 17
const getAverageHumanAge = (catAges) => {
    const humanAges = catAges.map(age => age <= 2 ? age * 10 : age * 7);
    const adultCats = humanAges.filter(age => age >= 18);
    const averageHumanAge = adultCats.reduce((sum, age, _, array) => sum + age / array.length, 0);

    return averageHumanAge;
};

const catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

console.log(getAverageHumanAge(catAges1)); 
console.log(getAverageHumanAge(catAges2)); 






