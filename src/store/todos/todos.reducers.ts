import {ITodoItem} from "@models/todo-item";
import {Reducer} from "redux";
import {TodosTypes} from "@store/todos/todos.types";

const initialState = {
  todos: []
};

interface IState {
    todos: ITodoItem[]
}

export const TodosReducers: Reducer<IState> = (state = initialState, action) => {
    switch (action.type) {
        case TodosTypes.GET_ALL_ITEMS:
            return state;
        case TodosTypes.ADD_ITEM:
            return { ...state, todos: [...state.todos, action.payload] }
        case TodosTypes.DELETE_ITEM:
            const filterTodos = state.todos.filter((item) => item.id !== action.payload);
            return { ...state, todos: filterTodos }
        default:
            return state;
    }
}