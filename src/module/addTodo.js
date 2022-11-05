import displayTodo from './displayTodo.js';

const addTodo = (todoList) => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayTodo(todoList[todoList.length - 1], todoList.length);
};

export default addTodo;