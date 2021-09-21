import { useContext } from "react";
import { TodoContext } from "../store/todoContext";

const ToDoList = () => {

    const toDoCtx = useContext(TodoContext);

    return (
        <ul className="todoList">
            {toDoCtx.todo.map((i, index) => (
            <li key={i.id} onClick={toDoCtx.removeTodo.bind(null, i.id)}>{index+1}. {i.name}</li>
            ))}
            
        </ul>
    )
}

export default ToDoList;