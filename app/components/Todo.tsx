interface ITodoProps {
  todo: any;
}

const Todo = ({ todo }: ITodoProps) => {
  return <div>{todo.content}</div>;
};

export default Todo;
