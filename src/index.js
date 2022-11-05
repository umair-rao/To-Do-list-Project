import './style.css';

window.addEventListener('load', () => {
  const form = document.querySelector('.add-list');
  const input = document.querySelector('#item-add');
  const listEl = document.querySelector('.taskContainer');

  form.addEventListener('submit', (e) => {  
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const taskContent = document.createElement('div');
    taskContent.classList.add('list-items');

    task_el.appendChild(taskContent);

    const task_check = document.createElement('input');
    task_check.type = 'checkbox';
    taskContent.appendChild(task_check);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('add-item');
    taskContent.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    taskContent.appendChild(task_input_el);

    listEl.appendChild(taskContent);
});
});
  
