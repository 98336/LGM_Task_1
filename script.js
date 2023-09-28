let selectedPriority = 'Priority Level'; 

function setPriority(priority) {
    selectedPriority = priority;
    document.querySelector('.dropbtn').textContent = selectedPriority; 
}

function addTask() {
    const taskText = document.getElementById('task').value;
    if (taskText.trim() !== '') {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-priority ${selectedPriority.toLowerCase()}">${selectedPriority}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            <button class="complete-button" onclick="completeTask(this)">Complete</button>
        `;
        taskList.appendChild(listItem);
        document.getElementById('task').value = '';
        selectedPriority = 'Priority Level'; 
        document.querySelector('.dropbtn').textContent = selectedPriority; 
    }
}

function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(button.parentNode);
}

function completeTask(button) {
    const taskList = document.getElementById('task-list');
    const listItem = button.parentNode;
    listItem.classList.toggle('completed'); 
}
