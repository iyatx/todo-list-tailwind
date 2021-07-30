import React, {useState} from "react";
import { v4 } from "uuid";
import {useDispatch} from "react-redux";
import {addItem} from "@store/todos/todos.actions";

export const TodoBar = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!task) return;

        const item = {
            id: v4(),
            title: task,
            done: false,
            important: false
        };

        dispatch(addItem(item));
        setTask('');
    }

    return (
        <div className="todo__bar">
            <form onSubmit={handleAddItem} className="flex">
                <input
                    className="w-11/12 border border-green-500 rounded-md px-4"
                    placeholder="Write something..."
                    type="text"
                    onChange={(event) => setTask(event.target.value)}
                    value={task}
                />
                <button
                    type="submit"
                    className="w-1/12 ml-4 bg-green-500 py-3 rounded-lg text-white"
                >Add Task</button>
            </form>
        </div>
    )
}