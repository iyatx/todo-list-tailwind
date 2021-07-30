import { combineReducers } from "redux";
import {TodosReducers} from "@store/todos/todos.reducers";

export const rootReducer = combineReducers({
    todos: TodosReducers
});