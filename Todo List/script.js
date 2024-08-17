function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Delete';
    closeButton.className = 'close';
    closeButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(closeButton);
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = '';
}
