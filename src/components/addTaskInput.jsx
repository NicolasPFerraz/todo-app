import styles from './AddTaskInput.module.css'

// Import react icons
import { GoPlus } from "react-icons/go";

export default function AddTaskInput({ value, onChange, onSubmit }) {

  return (
    <form className={styles.addTask} onSubmit={onSubmit}>
      <input
        className={styles.addTaskInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite seu todo"
      />
      <button className={styles.addButton} type="submit">
        <GoPlus />
      </button>
    </form>
  )
}