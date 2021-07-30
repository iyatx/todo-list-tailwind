import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppState} from "@store/index";
import {TodoList} from "@components/todo/todo-list";
import {TodoBar} from "@components/todo/todo-bar";

export const TodosPage = () => {
    const todos = useSelector((state: AppState) => state.todos.todos);

    return (
        <div className="todos">
            <div className="md:container mx-auto mt-4">
                <TodoBar />

                {!todos.length
                    ? (<div className="text-center py-5 my-5 rounded-md text-lg font-medium bg-red-500 text-white">There is empty</div>)
                    : <TodoList todos={todos} />
                }
            </div>
        </div>
    )
}