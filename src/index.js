import './style.css';

window.addEventListener('load', () => {
  const form = document.querySelector('.add-list');
  const input = document.querySelector('#item-add');
  const listEl = document.querySelector('.taskContainer');

  form.addEventListener('submit', (e) => {  e.preventDefault();

  const task = input.value;

  const task_el = document.createElement('div');
  task_el.classList.add('task');

  const task_content_el = document.createElement('div');
  task_content_el.classList.add('list-items');

  task_el.appendChild(task_content_el);

  const task_check = document.createElement('input');
  task_check.type = 'checkbox';
  task_content_el.appendChild(task_check);

  const task_input_el = document.createElement('input');
  task_input_el.classList.add('add-item');
  task_content_el.type = 'text';
  task_input_el.value = task;
  task_input_el.setAttribute('readonly', 'readonly');

  task_content_el.appendChild(task_input_el);

  listEl.appendChild(task_content_el);
	});
});
  

  
