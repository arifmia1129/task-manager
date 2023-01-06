import { v4 as uuidv4 } from "uuid"
export const data = [
    {
        id: "1",
        Task: "Create PR for the Task",
        Due_Date: "25-May-2021",
    },
    {
        id: "2",
        Task: "Fix Styling",
        Due_Date: "26-May-2021",
    },
    {
        id: "3",
        Task: "Handle Api Changes",
        Due_Date: "27-May-2021",
    },
    {
        id: "4",
        Task: "Blog on new features",
        Due_Date: "23-Aug-2021",
    },
    {
        id: "5",
        Task: "Call with Backend Team",
        Due_Date: "05-Jan-2021",
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