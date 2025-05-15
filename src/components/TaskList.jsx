import styles from './TaskList.module.css'

import { useState } from 'react'

import ListItem from './ListItem'

export default function TaskList() {

  const [tasks, setTasks] = useState([{ id: 1, text: 'Estudar React', completed: false }, { id: 2, text: 'Estudar Python', completed: false} ])

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
            taskText={task.text}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
    </div>
  )
}