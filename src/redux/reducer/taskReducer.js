import { v4 as uuidv4 } from "uuid"
const initialState = {
    todo: {
        title: "To-do",
        items: [],
    },
    progress: {
        title: "In Progress",
        items: [],
    },
    done: {
        title: "Done",
        items: [],
    }
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_task":
            return {
                todo: { ...state.todo, items: action.payload.todo },
                progress: { ...state.progress, items: action.payload.progress },
                done: { ...state.done, items: action.payload.complete }
            }
        case "add_todo_from_input":
            const allTask = JSON.parse(localStorage.getItem("task"));

            allTask.todo.push({ id: uuidv4(), Task: action.payload });
            localStorage.setItem("task", JSON.stringify(allTask));
            return {
                ...state,
                todo: {
                    ...state.todo,
                    items: [...state.todo.items, { id: uuidv4(), Task: action.payload }]
                }
            }
        default:
            return state
    }
}

export default taskReducer;