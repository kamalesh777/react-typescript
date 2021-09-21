import React, { useRef, useState } from "react";

const NewToDo:React.FC<{onAddTODO: (text: string) => void}> = (props) => {

    const [errMsg, setErrMsg] = useState("");
    const inputTodo = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const eneteredValue = inputTodo.current!.value;

        if (eneteredValue.trim().length === 0) {
            setErrMsg("Please enter a todo name before the submit")
            return
        }

        props.onAddTODO(eneteredValue)
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