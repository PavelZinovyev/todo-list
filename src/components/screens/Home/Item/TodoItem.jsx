import React from 'react';
import Check from './Check';
import cn from 'classnames';
import { HiOutlineTrash } from 'react-icons/hi2';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={cn({ 'line-through': todo.isCompleted })}>{todo.title}</span>
      </button>
      <button>
        <HiOutlineTrash
          onClick={() => removeTodo(todo.id)}
          size={22}
          className="text-gray-600 hover:text-red-300 transition-colors ease-in-out duration-200"
        ></HiOutlineTrash>
      </button>
    </div>
  );
};

export default TodoItem;
