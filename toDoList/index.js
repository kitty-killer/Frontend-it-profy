const tasks = [];
let taskIdToDelete = null;

document.addEventListener('DOMContentLoaded', () => {
    const deleteModal = document.getElementById('deleteModal');
    const confirmButton = deleteModal.querySelector('.confirm');
    const cancelButton = deleteModal.querySelector('.cancel');

    confirmButton.addEventListener('click', () => {
        confirmDelete();
    });
    cancelButton.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target === deleteModal) {
            closeModal();
        }
    });
});

function confirmDelete() {
    deleteTask(taskIdToDelete);
    closeModal();
}

function closeModal() {
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
        deleteModal.style.display = 'none';
    }
}

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const status = document.getElementById('taskStatus').value;
    const date = new Date().toLocaleString();
    const taskId = `task-${tasks.length + 1}`;

    const task = {
        id: taskId,
        title,
        description,
        date,
        status
    };

    tasks.push(task);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.id = task.id;
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><strong>Дата создания:</strong> ${task.date}</p>
            <p><strong>Статус:</strong> ${task.status}</p>
            <button onclick="showModal('${task.id}')">Удалить</button>
        `;
        taskList.appendChild(taskElement);
    });
}

function showModal(id) {
    taskIdToDelete = id;
    const modal = document.getElementById('deleteModal');
    modal.style.display = 'block';
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

function searchTasks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const filteredTasks = tasks.filter(task => {
        const matchesTitle = task.title.toLowerCase().includes(searchInput);
        const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
        return matchesTitle && matchesStatus;
    });

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (filteredTasks.length === 0) {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'Не найдено по таким параметрам';
        taskList.appendChild(noResultsElement);
    } else {
        filteredTasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.id = task.id;
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><strong>Дата создания:</strong> ${task.date}</p>
                <p><strong>Статус:</strong> ${task.status}</p>
                <button onclick="showModal('${task.id}')">Удалить</button>
            `;
            taskList.appendChild(taskElement);
        });
    }
}
