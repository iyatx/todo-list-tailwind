import {TodosActionTypes, TodosTypes} from "@store/todos/todos.types";
import {ITodoItem} from "@models/todo-item";

export const deleteItem = (id: string): TodosActionTypes => {
    return {
        type: TodosTypes.DELETE_ITEM,
        payload: id
    }
}

export const addItem = (task: ITodoItem): TodosActionTypes => {
    return {
        type: TodosTypes.ADD_ITEM,
        payload: task
    }
}