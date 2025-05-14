import styles from './TaskForm.module.css'

import { useState } from 'react'

import AddTaskInput from './AddTaskInput'

export default function TaskForm() {

  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
    console.log(newTask)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Adiciona a task
    console.log(newTask)
    setNewTask('') // Limpa o input após o submit
  }

  return (
    <>
      <AddTaskInput
        value={newTask}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />
    </>
  )
}