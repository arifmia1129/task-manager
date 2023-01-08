const loadTask = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "load_task", payload: JSON.parse(localStorage.getItem("task")) });
    }
}

export default loadTask;