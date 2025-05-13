import styles from './ListItem.module.css'

// Import react icons
import { IoIosCheckboxOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

export default function TaskListItem() {
  return (
    <li className={styles.taskListItem}>
      <button className={styles.checkButton}>
        <IoIosCheckboxOutline className={styles.checkIcon} />
      </button>
      <span className={styles.taskText}>Tarefa</span>
      <button className={styles.deleteButton}>
        <FiTrash2 className={styles.deleteIcon} />
      </button>
    </li>
  )
}