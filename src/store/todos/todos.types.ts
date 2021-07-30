import {ITodoItem} from "@models/todo-item";

export enum TodosTypes {
    GET_ALL_ITEMS = 'GET_ALL_ITEMS',
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
}

interface IAddItem {
    type: TodosTypes.ADD_ITEM,
    payload: ITodoItem
}

interface IDeleteItem {
    type: TodosTypes.DELETE_ITEM,
    payload: string
}

export type TodosActionTypes =
    | IAddItem
    | IDeleteItem;
