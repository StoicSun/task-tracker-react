import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {

  const [toggleTasks, setToggleTasks] = useState(
    false
  )

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

// Delete event
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// addEvent
const addTask = (task) => {
  let id = Math.floor(Math.random() * 100)
  setTasks([...tasks, {id, ...task}])
}

  return (
    <div className="container">
      <Header onAdd={() => setToggleTasks(!toggleTasks)} toggleTasks={toggleTasks}/>
      {toggleTasks && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Congratz no tasks remain!'}
    </div>
  );
}

export default App;
