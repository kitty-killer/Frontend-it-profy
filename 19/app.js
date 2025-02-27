// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} говорит: Мяу!`);
    }
}

const myCat = new Cat('Мурзик');
myCat.meow();

// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt 
// и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств

class Calculator {
    constructor() {
        this.a = parseFloat(prompt('Введите первое число:', ''));
        this.b = parseFloat(prompt('Введите второе число:', ''));
    }

    sum() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b;
    }
}

const calc = new Calculator();
console.log(`Сумма: ${calc.sum()}`);
console.log(`Произведение: ${calc.mul()}`);

// Задание 3
// 1. Реализовать следующее мини-приложение
// https://gist.github.com/zhekix
// 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). 
// При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.

class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        const img = document.createElement('img');
        img.setAttribute('src', this.imgUrl);
        this.html = img;
        this.render();

        document.querySelector('body').style.backgroundColor = 'black';
    }
    
    render() {
        container.appendChild(this.html);
        this.html.style.position = 'absolute';
        this.html.style.left = this.left + 'px';
        this.html.style.top = this.top + 'px';
        this.html.style.width = this.width + 'px';
    }

    moveUp() {
        this.top -= 20;
        this.render();
    }

    moveDown() {
        this.top += 20;
        this.render();
    }

    moveLeft() {
        this.left -= 20;
        this.render();
    }

    moveRight() {
        this.left += 20;
        this.render();
    }
}

class Circle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    render() {
        const circle = document.createElement('div');
        circle.style.width = this.size + 'px';
        circle.style.height = this.size + 'px';
        circle.style.backgroundColor = this.color;
        circle.style.borderRadius = '50%';
        document.body.appendChild(circle);
    }
}

const circle = new Circle(200, 'yellow');
circle.render();

const container = document.querySelector('.container')
const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);

mfLogotip.init();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
