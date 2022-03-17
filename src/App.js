import React from 'react';

import data from "./data.json";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from './TodoForm';

const App = () => {
  
  const [todoList, setTodoList] = React.useState(data);

  const handleToggle = (id) => {
    let list = todoList.map(todo => {
      return todo.id === Number(id) ? { ...todo, complete: !todo.complete } : { ...todo};
    });
    setTodoList(list);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(todo => {
      return !todo.complete;
    });
    setTodoList(filtered);
  }

  const addTodo = (userInput ) => {
    let list = [...todoList];
    list = [...list, { id: todoList.length + 1, todo: userInput, complete: false }];
    setTodoList(list);
  }

  return (
    <div className="App">
      <Header />
      <TodoForm addTodo={addTodo}/>
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;