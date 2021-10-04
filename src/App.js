//import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"


function App() {
  //const name = 'Kaustubh'
  const [showAddTask, setShowAddText] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'do 1',
        day: '27th Sept',
        reminder: true,
    },
    {
        id: 2,
        text: 'do 2',
        day: '28th Sept',
        reminder: true,
    },
    {
        id: 3,
        text: 'do 3',
        day: '29th Sept',
        reminder: false,
    },
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => 
        setShowAddText(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks Remaining'
      )}
    </div>
  );
}


export default App;
 