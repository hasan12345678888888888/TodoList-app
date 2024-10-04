
const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const taskSpan = document.createElement('span');
        const deleteButton = document.createElement('button');

        checkbox.type = 'checkbox';
        taskSpan.textContent = taskText;
        deleteButton.textContent = '×';

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';


        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });

        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
