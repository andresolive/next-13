import Todo from './Todo';

interface ITodoListProps {
  todos: any;
}

const TodoList = ({ todos }: ITodoListProps) => {
  return (
    <div>
      {todos.map((todo: any) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
