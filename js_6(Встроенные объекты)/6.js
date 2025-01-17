
//Задание 1 Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
//Math.round(x),Math.ceil(x),Math.floor(x)
//В комментариях к каждой строке напишите, как работают эти округления.

// Math.round(x) - округляет число до ближайшего целого по математическому принципу.
// Если первая цифра после запятой равна или больше 5, то к положительному целому числу прибавляется единица.
console.log(Math.round(5.4)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.6)); // 6

// Math.ceil(x) - это противоположность «Math.floor», то есть преобразование происходит в большую сторону.
console.log(Math.ceil(5.4)); // 6
console.log(Math.ceil(5.5)); // 6
console.log(Math.ceil(5.6)); // 6

// Math.floor(x) - округление до наименьшего целого. Для положительных чисел всё что после запятой не учитывается и отбрасывается.
console.log(Math.floor(5.4)); // 5
console.log(Math.floor(5.5)); // 5
console.log(Math.floor(5.6)); // 5



//Задание 2
//Выведите в консоль фразы в 2 строки:
//Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
//19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()


const dateNow = new Date();

const options = {
    year:'numeric',
    month:'long',
    day:'numeric'
}

console.log((`Сегодня ${dateNow.toLocaleString('ru-RU', options)}`));


const minutes = dateNow.getMinutes();
const hours = dateNow.getHours();
console.log(`${hours} часа ${minutes} минуты`);