const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const input = $('#todo-input');
const ul = $('.todo-lists');
const form = $('form');

const todo_list = JSON.parse(localStorage.getItem('todo-lists'));

if (todo_list) {
  todo_list.forEach((todo) => addTodo(todo));
}

function addTodo(todo) {
  const li = document.createElement('li');

  li.setAttribute('class', todo.completed ? 'completed' : '');
  li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash"></i>
    `;

  li.addEventListener('click', function () {
    this.classList.toggle('completed');
    updateTodos();
  });

  li.querySelector('i').addEventListener('click', (e) => {
    e.target.parentElement.remove();
    updateTodos();
  });

  ul.appendChild(li);
  updateTodos();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  text != '' ? addTodo({ text, completed: false }) : undefined;
  input.value = '';
});

function updateTodos() {
  const list = $$('li');

  const todo_list = [];

  list.forEach((item) => {
    todo_list.push({
      text: item.querySelector('span').innerHTML,
      completed: item.classList.contains('completed'),
    });
  });

  localStorage.setItem('todo_list', JSON.stringify(todo_list));
}