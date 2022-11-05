import './style.css';

window.addEventListener('load', () => {
  const form = document.querySelector('.add-list');
  const input = document.querySelector('#item-add');
  const listEl = document.querySelector('.taskContainer');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const taskContent = document.createElement('div');
    taskContent.classList.add('list-items');

    taskEl.appendChild(taskContent);

    const taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';
    taskContent.appendChild(taskCheck);

    const taskInput = document.createElement('input');
    taskInput.classList.add('add-item');
    taskContent.type = 'text';
    taskInput.value = task;
    taskInput.setAttribute('readonly', 'readonly');

    taskContent.appendChild(taskInput);

    listEl.appendChild(taskContent);
  });
});