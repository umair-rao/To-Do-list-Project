const complete = (index, value) => {
  const listOfTodo = JSON.parse(localStorage.getItem('todoList'));
  listOfTodo.forEach((todo) => {
    if (todo.index === index) {
      todo.completed = value;
    }
  });
  localStorage.setItem('todoList', JSON.stringify(listOfTodo));
};

export default complete;