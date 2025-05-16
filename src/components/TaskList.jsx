import styles from './TaskList.module.css'

import { useState, useEffect } from 'react'
import { fetchTasks, updateTaskStatus, deleteTask } from '../services/taskService'

import ListItem from './ListItem'

export default function TaskList() {

  const [tasks, setTasks] = useState([])
  const completedTasks =
    [...tasks]
      .filter(task => task.completed)
      .reverse()
    const orderedTasks =
    [...tasks]
      .filter(task => !task.completed)
      .concat(completedTasks)

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await fetchTasks()
        setTasks(data)
      } catch (error) {
        alert('Erro ao retornar tarefas')
        console.error(error)
      }
    }
    loadTasks()
  }, [tasks])

  const handleCheck = async (id) => {
    try {
      // Find the task that was clicked
      const task = tasks.find(task => task.id === id)
      const updated = await updateTaskStatus(id, {
        completed: !task.completed
      })

      // Update the local state
      setTasks(tasks.map(t => t.id === id ? {
        ...t, completed: updated.completed
      } : t))
    } catch (error) {
      alert('Erro ao atualizar tarefa')
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      // Find the task that was clicked
      await deleteTask(id)

      // Update the local state
      setTasks(tasks.filter(t => t.id !== id))
    } catch (error) {
      alert('Erro ao deletar tarefa')
      console.error(error)
    }
  }

  return (
    <div className={styles.taskList}>
      <h2>Minhas tarefas</h2>
      <span className={styles.line}></span>
      <ul className={styles.taskListItems}>
        {orderedTasks.map((task) => (
          <ListItem
            key={task.id}
            id={task.id}
            taskText={task.description}
            completed={task.completed}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
    </div>
  )
}