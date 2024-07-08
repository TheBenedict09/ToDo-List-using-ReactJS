document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = todoText;
            span.classList.add('todo-text');
            li.appendChild(span);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            li.appendChild(editButton);

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('save-button');
            saveButton.style.display = 'none';
            li.appendChild(saveButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            li.appendChild(deleteButton);

            todoList.appendChild(li);

            todoInput.value = '';

            editButton.addEventListener('click', () => editTodo(li, span, editButton, saveButton));
            saveButton.addEventListener('click', () => saveEdit(li, span, editButton, saveButton));
            deleteButton.addEventListener('click', () => deleteTodo(li));
        }
    }

    function editTodo(li, span, editButton, saveButton) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    }

    function saveEdit(li, input, editButton, saveButton) {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.classList.add('todo-text');
        li.insertBefore(span, input);
        li.removeChild(input);
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    }

    function deleteTodo(li) {
        todoList.removeChild(li);
    }
});
