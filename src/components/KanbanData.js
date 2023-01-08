import { v4 as uuidv4 } from "uuid"
export const data = [
    {
        id: "1",
        Task: "Create PR for the Task"
    },
    {
        id: "2",
        Task: "Fix Styling"
    },
    {
        id: "3",
        Task: "Handle Api Changes"
    },
    {
        id: "4",
        Task: "Blog on new features"
    },
    {
        id: "5",
        Task: "Call with Backend Team"
    },
]

export const columnsFromBackend = {
    [uuidv4()]: {
        title: "To-do",
        items: data,
    },
    [uuidv4()]: {
        title: "In Progress",
        items: [],
    },
    [uuidv4()]: {
        title: "Done",
        items: [],
    },
}
