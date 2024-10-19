document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('formResult').innerText = `Submitted: Name - ${name}, Email - ${email}`;
});

document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('calcResult').innerText = `Result: ${sum}`;
});

document.getElementById('addTodoBtn').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;
    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        document.getElementById('todoList').appendChild(li);
        todoInput.value = '';
    }
});
