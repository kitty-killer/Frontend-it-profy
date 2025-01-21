// task 1
const os = navigator.platform;
const browser = navigator.userAgent;
const url = location.href;

console.log(`На компьютере с ОС ${os} с помощью браузера ${browser} я открыл страничку ${url}`);

// task 2
const list = document.getElementById('list');
const items = list.children;

for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
    items[i].textContent = i;
}

// task 3
const elements = document.querySelectorAll('.forRemove');

elements.forEach(element => {
    element.remove();
});

// task 4
const p = document.createElement('p');
p.textContent = 'Some text';
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';

document.body.appendChild(p);

// task 5
function createTag(tag, color, content) {
    const elem = document.createElement(tag);
    elem.textContent = content;
    elem.style.color = color;
    console.log(elem);
    document.body.appendChild(elem);
}

createTag('h1', 'red', 'Header 1');
createTag('p', 'green', 'Paragraph');

// task 6
const select = document.createElement('select');

for (let i = 1960; i <= 2020; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    select.appendChild(option);
}

document.body.appendChild(select);

// task 7
const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
];

const ul = document.createElement('ul');
ul.id = 'clientsList';

clients.forEach(client => {
    const li = document.createElement('li');
    li.textContent = `Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`;
    ul.appendChild(li);
});

document.body.appendChild(ul);

// task 8
let linksArr = [
    'https://www.amazon.com/',
    'https://www.youtube.com/',
    'https://devby.io/',
    'https://www.google.com/',
    'https://apple.com/'
];

const div = document.createElement('div');
div.style.background = '#f0f0f0';
div.style.padding = '20px';
div.style.borderRadius = '10px';

linksArr.forEach(link => {
    const a = document.createElement('a');
    a.href = link;
    a.textContent = link;
    a.target = '_blank';
    a.style.display = 'block';
    a.style.marginBottom = '10px';
    div.appendChild(a);
});

document.body.appendChild(div);

// task 9
const users = [
    { name: 'Mark', age: 12 },
    { name: 'Olga', age: 30 },
    { name: 'Tom', age: 25 },
    { name: 'Den', age: 43 }
];

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.border = '1px solid black';

users.forEach(user => {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = user.name;
    nameTd.style.color = 'red';
    nameTd.style.border = '1px solid black';
    nameTd.style.padding = '8px';

    const ageTd = document.createElement('td');
    ageTd.textContent = user.age;
    ageTd.style.color = 'blue';
    ageTd.style.border = '1px solid black';
    ageTd.style.padding = '8px';

    tr.appendChild(nameTd);
    tr.appendChild(ageTd);

    table.appendChild(tr);
});

document.getElementById('tableContainer').appendChild(table);

// task 10
const ulElement = document.querySelector('ul');
ulElement.classList.add('list');

const liElements = ulElement.querySelectorAll('li');
liElements.forEach((li, index) => {
    if (index % 2 === 0) {
        li.classList.add('item');
    }
});

const links = document.querySelectorAll('a');
links.forEach(link => link.classList.add('custom-link'));
