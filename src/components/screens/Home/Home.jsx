import React from 'react';
import TodoItem from './Item/TodoItem';
import { useState } from 'react';
import CreateTodo from './create-todo/CreateTodo';

const data = [
  {
    id: 0,
    title: 'Покормить кота',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'Убраться в гостиной',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Постирать вещи',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodoState = (id) => {
    const copyTodos = [...todos];
    const currentTodo = copyTodos.find((todo) => todo.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copyTodos);
  };

  const removeTodo = (id) => {
    const copyTodos = [...todos];
    setTodos(copyTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto pt-5">
      <h1 className="text-2xl fonr-bold text-center mb-8">To do today</h1>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          changeTodo={changeTodoState}
          removeTodo={removeTodo}
        ></TodoItem>
      ))}
      <CreateTodo setTodos={setTodos} todosAmount={todos.length}></CreateTodo>
    </div>
  );
};

export default Home;
