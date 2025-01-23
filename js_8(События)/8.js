//Задание 1
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li.
// Содержимое li - нажатая клавиша.

document.getElementById('input').addEventListener('keydown', function(event) {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.textContent = event.key;
    ul.appendChild(li);});



//Задание 2
//Вставить в html тег input(просто предусмотреть в разметке).
//Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз,
// как только клиент вписывает любой символ в поле(или стирает любой символ из поля).Вам понадобится считывать значение поля, это input.value

document.getElementById('inputT').addEventListener('keyup', (event)=> {
    const inputV = event.target.value;
    console.log(inputV);
});

//Задание 3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. 
// Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). 
// После отправки формы инпут должен быть очищен (проставить пустую строку в value).


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const input = document.getElementById('input3');
    const inputVal = input.value;

    if (inputVal.trim() !== "") { 
        const ul = document.getElementById('item');
        const li = document.createElement('li');
        li.textContent = inputVal;
        ul.appendChild(li);

        input.value = ""; 
    }
    else{
        alert('Поле должно быть заполнено для отправки!')
    }
});



//Задание 4
//Калькулятор. 
//Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. 
// Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число.
// Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, 
// выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). 
// Результат отображается в div.
//1) решить с помощью if
//2) решить с помощью evel (https://developer.mozilla.org/...)

// Решение с использованием if
// document.getElementById('calculator').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const num1 = parseFloat(document.getElementById('number1').value);
//     const num2 = parseFloat(document.getElementById('number2').value);
//     const operator = document.getElementById('operator').value;
//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         if (num2 === 0) {
//             result = "Ошибка: Деление на ноль";
//         } else {
//             result = num1 / num2;
//         }
//     }
//     document.getElementById('result').textContent = "Результат: " + result;
// });


//Решение с использованием eval
document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const operator = document.getElementById('operator').value;
    let result;

    if (operator === "/" && num2 === "0") {
        result = "Ошибка: Деление на ноль";
    } else {
        const expression = `${num1} ${operator} ${num2}`;
        result = eval(expression);
    }

    document.getElementById('result').textContent = "Результат: " + result;
});


//Задание 5
//Вставить в разметку html тег button без js (просто предусмотреть в разметке). 
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. 
// Использовать обработку событий mouseenter, mouseleave на этой кнопке


const button = document.querySelector('.random-button');

        button.addEventListener('mouseenter', (event) => {
            const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            event.target.style.backgroundColor = rndCol;
        });

        button.addEventListener('mouseleave', () => {
            const randomAngle = Math.floor(Math.random() * 361) - 180;
            button.style.transform = `rotate(${randomAngle}deg)`;
        });