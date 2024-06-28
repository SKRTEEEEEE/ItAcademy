const baseURL = 'http://localhost:4001';

async function fetchTasks() {
    try {
        const response = await fetch(`${baseURL}/tasks`);
        const tasks = await response.json();
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();
    
    if (description === '') {
        alert('Please enter a task description.');
        return;
    }

    try {
        const response = await fetch(`${baseURL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })
        });
        
        const tasks = await response.json();
        displayTasks(tasks);
        taskInput.value = '';
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

async function completeTask(id) {
    try {
        await fetch(`${baseURL}/tasks/${id}/complete`, { method: 'PUT' });
        const tasks = await fetchTasks();
        displayTasks(tasks);
    } catch (error) {
        console.error('Error completing task:', error);
    }
}

async function deleteTask(id) {
    try {
        await fetch(`${baseURL}/tasks/${id}`, { method: 'DELETE' });
        const tasks = await fetchTasks();
        displayTasks(tasks);
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

function displayTasks(tasks) {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.id}. ${task.completed ? '[X]' : '[ ]'} ${task.description}</span>
            <button onclick="completeTask(${task.id})">Complete</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        tasksList.appendChild(listItem);
    });
}

async function initializeApp() {
    const tasks = await fetchTasks();
    displayTasks(tasks);
}

initializeApp();
