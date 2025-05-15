import styles from './TaskList.module.css'

import { useState, useEffect } from 'react'
import { fetchTasks } from '../services/taskService'

import ListItem from './ListItem'

export default function TaskList() {

  const [tasks, setTasks] = useState([])

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

  const handleCheck = (e) => {

  }

  const handleDelete = (id) => {

  }

  return (
    <div className={styles.taskList}>
      <h2>Minhas tarefas</h2>
      <span className={styles.line}></span>
      <ul className={styles.taskListItems}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            id={task.id}
            taskText={task.description}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
    </div>
  )
}