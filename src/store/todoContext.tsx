import React, { createContext, useState } from "react";
import todo from "../model/todoModel";

type toDoContext = {
    todo: todo[],
    addTodo: (text: string) => void,
    removeTodo: (todoId: string) => void
}

export const TodoContext = createContext<toDoContext>({
    todo: [],
    addTodo: () => {},
    removeTodo: () => {}
})

const TodoContextProvider:React.FC = (props) => {

    const [TODO, SETTODO] = useState<todo[]>([]);

    const addToDOHandler = (text: string) => {
        const todoItem = {
            id: new Date().toISOString(),
            name: text
        }
        SETTODO(prevState => {
            return prevState.concat(todoItem)
        })
    }

    const removeToDoHandler = (todoID: string) => {
        SETTODO(prevState => {
            return prevState.filter(item=> item.id !== todoID)
        })
    }

    const todoObject = {
        todo: TODO,
        addTodo: addToDOHandler,
        removeTodo: removeToDoHandler
    }

    return (
        <TodoContext.Provider value={todoObject}>
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;