import React from "react";
import {ITodoItem} from "@models/todo-item";
import {TodoListItem} from "@components/todo/todo-list-item/todo-list-item";

interface Props {
    todos: ITodoItem[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul className="todo__list mt-5">
            {todos.map((item) => (
                <TodoListItem todo={item} key={item.id} />
            ))}
        </ul>
    )
}