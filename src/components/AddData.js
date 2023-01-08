import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const AddData = () => {
    const dispatch = useDispatch();

    const handleAddTask = e => {
        e.preventDefault();

        const task = e.target.task.value;

        if (!task) {
            return toast.error("Task name empty")
        }

        dispatch({ type: "add_todo_from_input", payload: task });
        toast.success("Successfully added task")
        e.target.task.value = ""
    }

    return (
        <div className='flex justify-center my-4'>
            <div>
                <form onSubmit={handleAddTask}>
                    <input placeholder='Add your task' className='h-10 w-96 rounded-lg border mr-4 p-2' type="text" name="task" id="task" />
                    <button className='bg-green-500 w-20 h-8 rounded-lg text-white font-bold' type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddData;