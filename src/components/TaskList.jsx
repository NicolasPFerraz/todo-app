import styles from './TaskList.module.css';

import ListItem from './ListItem';

export default function TaskList() {
  return (
    <div className={styles.taskList}>
      <h2>Minhas tarefas</h2>
      <span className={styles.line}></span>
      <ul className={styles.taskListItems}>
        <ListItem />
      </ul>
    </div>
  )
}