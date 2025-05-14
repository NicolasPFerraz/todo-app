import styles from './ListItem.module.css'

// Import react icons
import { IoIosCheckboxOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

export default function TaskListItem({ id, taskText, handleDelete, handleCheck }) {
  return (
    <li className={styles.taskListItem} key={id}>
      <button
        className={styles.checkButton}
        onClick={handleCheck}
      >
        <IoIosCheckboxOutline className={styles.checkIcon} />
      </button>

      <span className={styles.taskText}>
        {taskText}
      </span>

      <button
        className={styles.deleteButton}
        onClick={handleDelete}>
        <FiTrash2 className={styles.deleteIcon} />
      </button>
    </li>
  )
}