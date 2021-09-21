
import todo from "../model/todoModel";

const ToDoList:React.FC<{items:todo[], remove: (id:string) => void}> = (props) => {
    return (
        <ul className="todoList">
            {props.items.map((i) => (
            <li key={i.id} onClick={props.remove.bind(null, i.id)}>{i.name}</li>
            ))}
            
        </ul>
    )
}

export default ToDoList;