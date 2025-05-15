import styles from './TaskForm.module.css'

import { useState } from 'react'
import { addTask } from '../services/taskService'

import AddTaskInput from './AddTaskInput'

export default function TaskForm() {

  const [newTask, setNewTask] = useState()

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault()
    const trimedTask = newTask.trim()
    if (!trimedTask) return

    try {
      await addTask({ description: trimedTask, completed: false })
      setNewTask('')
    } catch (error) {
      alert('Erro ao adicionar tarefa')
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <AddTaskInput
          taskText={newTask}
          onChange={handleOnChange}
        />
      </form>
    </>
  )
}