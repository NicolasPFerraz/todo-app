import styles from './AddTaskInput.module.css'

// Import react icons
import { GoPlus } from "react-icons/go";

export default function AddTaskInput({ taskText, onChange, onSubmit }) {
  return (
    <form className={styles.addTask} onSubmit={onSubmit}>
      <input
        className={styles.addTaskInput}
        type="text"
        value={taskText}
        onChange={onChange}
        placeholder="Digite seu todo"
      />
      <button className={styles.addButton} type="submit">
        <GoPlus />
      </button>
    </form>
  )
}