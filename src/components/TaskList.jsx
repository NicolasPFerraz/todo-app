import styles from './TaskList.module.css'
import ListItem from './ListItem'

import { useState, useEffect } from 'react'
import { updateTaskStatus, deleteTask } from '../services/taskService'


export default function TaskList({ tasks, setTasks, loadTasks }) {
  const handleCheck = async (id) => {
    try {
      const task = tasks.find(task => task.id === id)
      const updated = await updateTaskStatus(id, {
        completed: !task.completed
      })
      setTasks(tasks.map(t => t.id === id ? {
        ...t, completed: updated.completed
      } : t))
      loadTasks()
    } catch (error) {
      alert('Erro ao atualizar tarefa')
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTask(id)
      setTasks(tasks.filter(t => t.id !== id))
      loadTasks()
    } catch (error) {
      alert('Erro ao deletar tarefa')
      console.error(error)
    }
  }

  const completedTasks =
    [...tasks]
      .filter(task => task.completed)
      .reverse()
  const orderedTasks =
    [...tasks]
      .filter(task => !task.completed)
      .concat(completedTasks)

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