'use client';

import { useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

interface ITodoProps {
  todo: any;
}

const Todo = ({ todo }: ITodoProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
