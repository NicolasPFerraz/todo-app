import styles from './TaskForm.module.css'

import { useState } from 'react'
import { addTask } from '../services/taskService'

import AddTaskInput from './AddTaskInput'

export default function TaskForm({ onTaskAdded }) {

  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const trimmedTask = newTask.trim()
    if (!trimmedTask) return

    try {
      await addTask({ description: trimmedTask, completed: false })
      setNewTask('')
      if (onTaskAdded) onTaskAdded()
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