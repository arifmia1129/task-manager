import TaskList from './components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import Kanban from './components/Kanban';
import AddData from './components/AddData';
import { Toaster } from 'react-hot-toast';
import loadTask from './redux/thunk/loadTaks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const [todoTask, setTodoTask] = useState([]);
  const [progressTask, setProgressTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);

  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    handleTask();
    dispatch(loadTask());
  }, [dispatch])

  const columnsFromBackend = [
    {
      title: "To-do",
      items: todoTask,
    },
    {
      title: "In Progress",
      items: progressTask,
    },
    {
      title: "Done",
      items: completeTask,
    }
  ]

  const handleTask = async () => {
    const allTask = await JSON.parse(localStorage.getItem("task"));

    setTodoTask(allTask.todo);
    setProgressTask(allTask.progress);
    setCompleteTask(allTask.complete);
  }

  return (
    <div className="App">
      <AddData />
      <Kanban columnsFromBackend={columnsFromBackend} />
      <Toaster />
    </div>
  );
}

export default App;
