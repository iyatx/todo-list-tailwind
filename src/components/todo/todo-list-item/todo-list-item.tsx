import React from "react";
import {useDispatch} from "react-redux";
import {ITodoItem} from "@models/todo-item";
import { deleteItem } from "@store/todos/todos.actions";
import './todo-list-item.scss';

interface Props {
    todo: ITodoItem;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(deleteItem(todo.id));
    }

    return (
        <li className="item p-5 mb-5 rounded-lg bg-red-500 text-white font-medium shadow-xl">
            <span className="item__title">{todo.title}</span>
            <button className="item__btn" onClick={handleDeleteItem}>×</button>
        </li>
    )
}