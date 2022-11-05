import './style.css';

window.addEventListener('load', () => {
  const form = document.querySelector('.add-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tasks = [
      {
        description: 'Take breakfast',
        completed: true,
        index: '1',
      },
      {
        description: 'Take Lunch',
        completed: false,
        index: '2',
      },
      {
        description: 'Take Dineer',
        completed: true,
        index: 'taskInput3',
      },
    ];

    const listEl = document.querySelector('.taskContainer');

    tasks.forEach((element) => {
    const taskContent = document.createElement('div');
    taskContent.classList.add('task');
    taskContent.innerHTML = ` 
    <input type='checkbox'>
    ${element.description}
    `;
      listEl.appendChild(taskContent);
    });
  });
});
