const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.item-list');

let todos = [];

// const todo = {
//   id: Date.now(),
//   name: "But Milk",
//   completed: false
// };

todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent page from reloading when submitting
  addTodo(todoInput.value);
});

function addTodo(item) {
  const trimmed = item.trim();
  if(trimmed !== '') {
    const todo = {
      id: Date.now(),
      name: trimmed,
      completed: false
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
    todoInput.focus();
  }
}

function renderTodos(todos) {
  todoItemsList.innerHTML = '';
  if(todos.length === 0) {
    todoItemsList.innerHTML = `<p class="empty-message">You're all caught up buddy.<br>Add a new task to get started.</p>`;
    return;
  }
  todos.forEach((item) => {
    // if(item.completed == true) {
    //   const checked = 'checked';
    // } else {
    //    const checked = null;
    // }
    // const checked = item.completed ? 'checked' : null;
    const checked = item.completed ? 'checked="checked"' : '';
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    if(item.completed == true) {
      li.classList.add('checked');
    }
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${checked}>
      <p class="task-info">${item.name}</p>
      <button class="todo-delete-button"><i class="fa-solid fa-trash delete-todo-icon"></i></button>
      `;
      todoItemsList.append(li);
  });
};

function addToLocalStorage(todos) {
  // we cannot store array in localStorage so we have to convert it to string
  localStorage.setItem('todos', JSON.stringify(todos)); // todos is a key
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos'); // the above key
  if(reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// todoItemsList.addEventListener('click', (event) => {
//   // if(event.target.type === 'checkbox') {
//   if(event.target.classList.contains('todo-checkbox')) {
//     toggle(event.target.parentElement.getAttribute('data-key'));
//   }
//   if (event.target.classList.contains('todo-delete-button')) {
//     deleteTodo(event.target.parentElement.getAttribute('data-key'));
//   }
// });

todoItemsList.addEventListener('click', (event) => {
  const parentItem = event.target.closest('.item');
  if(!parentItem) {
    return;
  }
  const id = parentItem.getAttribute('data-key');
  if(event.target.classList.contains('todo-checkbox')) {
    toggle(id);
  }

  if(event.target.classList.contains('todo-delete-button') || event.target.classList.contains('delete-todo-icon')) {
    deleteTodo(id);
  }
});

function toggle(id) {
  todos.forEach((item) => {
    // one 'id' is number and one is string so dont use ===
    // if(item.id == id) {
    if(item.id === Number(id)) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
};
function deleteTodo(id) {
  const element = document.querySelector(`[data-key="${id}"]`);
  element.classList.add('removing');
  setTimeout(() => {
    todos = todos.filter(item => item.id !== Number(id));
    addToLocalStorage(todos);
  }, 300);
}

getFromLocalStorage();