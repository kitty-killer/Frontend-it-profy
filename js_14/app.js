/*
Задание 1
По данному url расположена задача:
https://jsonplaceholder.typicode.com/todos/1
В html предусмотреть <div></div>
Достать с сервера заголовок задачи и отобразить его в div.
*/

const div = document.querySelector('.name');
let xhr = new XMLHttpRequest();
const ul = document.querySelector(".items");

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.send();

xhr.onload = function () {
  const taskResponse = JSON.parse(xhr.response);
  div.textContent = taskResponse.title;
}

/*
Задание 2
Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
*/

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// xhr.send();

// xhr.onload = function () {
//   const allTasks = JSON.parse(xhr.response);
//   const tasksToDisplay = allTasks.slice(0, 20); 

//   tasksToDisplay.forEach(task => {
//     const li = document.createElement('li');
//     li.textContent = task.title;
//     ul.appendChild(li);
//   });
// }