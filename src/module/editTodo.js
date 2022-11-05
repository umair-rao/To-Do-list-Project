const editTodo = (newTodo, index) => {
  const listOfTodo = JSON.parse(localStorage.getItem('todoList'));
  listOfTodo.forEach((todo) => {
    if (todo.index === index) {
      todo.description = newTodo;
    }
  });
  localStorage.setItem('todoList', JSON.stringify(listOfTodo));
  window.location.reload();
};

export default editTodo;