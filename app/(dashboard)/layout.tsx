import NewTodoForm from '../components/NewTodoForm';

interface IDashboardLayoutProps {
  children: any;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
