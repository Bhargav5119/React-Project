import AddTaskForm from './Components/AddTaskForm';
import { useEffect, useState } from "react"
import React from 'react';
import ToDo from './Components/ToDo';
import { useSelector } from 'react-redux';
import UpdateForm from './Components/UpdateForm';

function App() {
  const todo = useSelector((state) => state.todoReducer.list)

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo))
  },[todo])

  const [newTask, setNewTask] = useState("")
  const [updateData, setUpdateData] = useState("")
  return (
    <div className="App container">

      <h2>ToDo List</h2>
      {
        updateData  ?
          <UpdateForm
            setUpdateData={setUpdateData}
            updateData ={updateData} /> :
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
          />
      }
      <br />
      <ToDo todo={todo} setUpdateData={setUpdateData} />

    </div>
  );
}

export default App;
