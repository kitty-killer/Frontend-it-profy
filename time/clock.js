//Задание 1

// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5


let message = 1;

const interval = setInterval(() => {
    if (message > 5) {
        clearInterval(interval);
        return;
    }
    console.log(`Сообщение номер ${message}`);
    message++;
}, 2000);





// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.

// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.

const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})
