import styles from './TaskForm.module.css'

import { useState } from 'react'

import AddTaskInput from './AddTaskInput'

export default function TaskForm() {

  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
    console.log(newTask)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(newTask)
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <AddTaskInput
          taskText={newTask}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      </form>
    </>
  )
}