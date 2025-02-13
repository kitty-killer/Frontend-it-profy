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
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const finishElement = document.querySelector('#finish');
const endElement = document.querySelector('.end');
const nextDayElement = document.querySelector('#nextDay');


setInterval(() => {
    const day = new Date();
    const hours = day.getHours();
    const minutes = day.getMinutes();
    const seconds = day.getSeconds();

    const hh = hours * 30;
    const mm = minutes * deg;
    const ss = seconds * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

function time(t) {
    const hrs = Math.floor((t / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((t / (1000 * 60)) % 60);
    const secs = Math.floor((t / 1000) % 60);

    return {
        hrs: hrs.toString().padStart(2, '0'),
        mins: mins.toString().padStart(2, '0'),
        secs: secs.toString().padStart(2, '0')
    };
}

    const endOfWork = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 21, 0, 0);
    const remainingTime = endOfWork - day;

    if (day.getDay() === 2 || day.getDay() === 5) {
        if (remainingTime > 0 && hours >= 19) {
            const { hrs, mins, secs } = time(remainingTime);

            finishElement.textContent = `${hrs}:${mins}:${secs}`;
            nextDayElement.textContent = '';
        } else {
            finishElement.style.display = 'none';
            endElement.textContent = "Рабочий день окончен";

            let nextWorkDay = new Date(day);
            nextWorkDay.setHours(19, 0, 0, 0);
            if (day.getDay() === 2) {
                nextWorkDay.setDate(day.getDate() + 3);
            } else {
                nextWorkDay.setDate(day.getDate() + 4);
            }

            const remainingToNextDay = nextWorkDay - day;
            const { hrs, mins, secs } = time(remainingToNextDay);

            nextDayElement.textContent = `До следующего рабочего дня осталось: ${hrs}:${mins}:${secs}`;
        }
    } else {
        finishElement.style.display = 'none';
        endElement.textContent = "Сегодня выходной!";
        nextDayElement.textContent = '';
    }
}, 1000);
