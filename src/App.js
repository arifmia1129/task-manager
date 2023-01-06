import TaskList from './components/TaskList';

function App() {
  const todo = ["task1", "task2", "task3", "task4"];

  const progress = ["task5", "task6", "task7", "task8"];

  const complete = ["task9", "task10", "task11", "task12"];

  return (
    <div className='flex justify-center'>
      <header className="App-header">
        <h4 className='text-2xl text-center mt-10'>Hey! I am your Task Manager</h4>
        <div>
          <TaskList todo={todo} progress={progress} complete={complete} />
        </div>
      </header>
    </div>
  );
}

export default App;
