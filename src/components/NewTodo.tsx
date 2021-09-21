import React, { useRef, useState, useContext } from "react";
import { TodoContext } from "../store/todoContext";

const NewToDo = () => {
    const toDoCtx = useContext(TodoContext);

    const [errMsg, setErrMsg] = useState("");
    const inputTodo = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const eneteredValue = inputTodo.current!.value;

        if (eneteredValue.trim().length === 0) {
            setErrMsg("Please enter a todo name before the submit")
            return
        }

        toDoCtx.addTodo(eneteredValue)
        setErrMsg("")

    }
    return (
        <form className="formWrapper" onSubmit={submitHandler}>
            <div className="formRow">
                <label htmlFor="newTodo">Todo Name</label>
                <input type="text" className="formControl" ref={inputTodo}/>
                {errMsg!== '' && <p className="text-danger">{errMsg}</p>}
            </div>
            <div className="formRow">
                <button type="submit" className="btn">ADD TODO</button>
            </div>
        </form> 
    )
}

export default NewToDo;