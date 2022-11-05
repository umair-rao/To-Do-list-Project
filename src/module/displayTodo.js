import editTodo from './editTodo.js';
import deleteTodo from './deleteTodo.js';
import complete from './complete.js';

const todoContainer = document.querySelector('#todo-container');

const displayTodo = (todo) => {
  const li = document.createElement('li');
  li.className = 'main-item li';

  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoCheck.className = 'checkbox';

  li.appendChild(todoCheck);

  const p = document.createElement('p');
  p.textContent = todo.description;
  p.className = 'todo-p';
  li.appendChild(p);

  const miniForm = document.createElement('form');
  miniForm.classList = 'edit-me hide';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo.description;
  input.classList = 'hide';
  miniForm.appendChild(input);
  li.appendChild(miniForm);

  const editIcon = document.createElement('span');
  editIcon.classList = 'material-symbols-outlined more icon';
  editIcon.textContent = 'edit';
  li.appendChild(editIcon);

  editIcon.addEventListener('click', () => {
    li.classList.add('edit-background');
    input.classList.add('edit-background');
    input.classList.remove('hide');
    p.classList.add('hide');
    miniForm.classList.remove('hide');
  });

  const deleteIcon = document.createElement('span');
  deleteIcon.classList = 'material-symbols-outlined icon';
  deleteIcon.textContent = 'delete';
  li.appendChild(deleteIcon);

  miniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editTodo(input.value, todo.index);
  });

  todoCheck.onchange = () => {
    if (todoCheck.checked === true) {
      complete(todo.index, true);
      p.style.textDecoration = 'line-through';
    } else {
      complete(todo.index, false);
      p.style.textDecoration = 'none';
    }
  };

  if (todo.completed) {
    todoCheck.checked = true;
    p.style.textDecoration = 'line-through';
  }

  deleteIcon.addEventListener('click', () => {
    deleteTodo(todo.index);
  });

  todoContainer.appendChild(li);
};

export default displayTodo;