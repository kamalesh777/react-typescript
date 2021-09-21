import './App.css';
import NewToDo from './components/NewTodo';
import ToDoList from './components/TodoList';

function App() {



  return (
    <div className="container">
      <NewToDo/>
      <ToDoList/>
      
    </div>
  );
}

export default App;
