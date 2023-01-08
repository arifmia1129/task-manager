import TaskList from './components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import Kanban from './components/Kanban';

function App() {

  return (
    <div className="App">
      <Kanban />
    </div>
  );
}

export default App;
