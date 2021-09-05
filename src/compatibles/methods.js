export default function (filter, todos) {
  const addTodo = (newTodo) => {
    todos.value.push({
      id: Date.now(),
      content: newTodo,
      isDone: false,
    });
  };

  const updateState = (id, newState) => {
    const index = todos.value.findIndex((item) => item.id === id);
    if (index !== -1) todos.value[index].isDone = newState;
  };

  const deleteTodo = (id) => {
    const index = todos.value.findIndex((item) => item.id === id);
    if (index !== -1) todos.value.splice(index, 1);
  };

  const updateTodo = (id, content) => {
    const index = todos.value.findIndex((item) => item.id === id);
    if (index !== -1) todos.value[index].content = content;
  };

  const changeFilter = (value) => {
    filter.value = value;
  };

  return { addTodo, updateState, deleteTodo, updateTodo, changeFilter };
}
