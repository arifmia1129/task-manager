import { v4 as uuidv4 } from "uuid"
const initialState = {
    task: {}
}

const taskReducer = (state = initialState, action) => {
    const allTask = JSON.parse(localStorage.getItem("task"));
    switch (action.type) {
        case "load_task":
            return {
                task: action.payload
            }
        case "add_todo_from_input":
            allTask.todo.items.push({ id: uuidv4(), Task: action.payload });
            localStorage.setItem("task", JSON.stringify(allTask));
            return {
                task: {
                    ...state.task,
                    todo: {
                        ...state.task.todo,
                        items: [...state.task.todo.items, { id: uuidv4(), Task: action.payload }]
                    }
                }
            }


        default:
            return state
    }
}

export default taskReducer;