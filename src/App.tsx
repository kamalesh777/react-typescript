import { useState } from 'react';
import './App.css';
import NewToDo from './components/NewTodo';
import ToDoList from './components/TodoList';
import todo from './model/todoModel';

function App() {

  const [todo, setTodo] = useState<todo[]>([])

  //Add Todo 
  const addToDO = (text: string) => {
    const todoObject = {
      id: new Date().toISOString(),
      name: text
    }
    console.log(todoObject);

    setTodo(prevState => {
      return prevState.concat(todoObject)
    })
  }

  //Remove Todo

  const removeTodo = (id:string) => {
    setTodo(prevState => {
      return prevState.filter(item => item.id !== id)
    })
  }
  

  return (
    <div className="container">
      <NewToDo onAddTODO={addToDO} />
      <ToDoList items={todo} remove={removeTodo}/>
      
    </div>
  );
}

export default App;
