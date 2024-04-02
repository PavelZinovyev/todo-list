import React, { useReducer } from 'react';
import { useState } from 'react';

const CreateTodo = ({ setTodos, todosAmount }) => {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date() + Math.random(),
        title,
        isCompleted: false,
      },

      ...prev,
    ]);

    setTitle('');
  };

  const isFullList = todosAmount >= 7;

  return (
    !isFullList && (
      <div className="flex items-center justify-between mb-4 rounded-2xl  border-zinc-800 border-2 px-5 py-2 w-full">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onKeyPress={(e) =>
            e.key === 'Enter' && e.target.value.length > 0 && !isFullList && addTodo(title)
          }
          className="bg-transparent w-full border-none outline-none"
          placeholder="Add a task"
        />
      </div>
    )
  );
};

export default CreateTodo;
