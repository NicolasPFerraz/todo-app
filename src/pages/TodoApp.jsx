import { useState, useEffect } from 'react'
import { fetchTasks } from '../services/taskService'
import styles from './TodoApp.module.css';

import Header from '../layout/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function TodoApp() {
	const [tasks, setTasks] = useState([])

	const loadTasks = async () => {
		try {
			const data = await fetchTasks()
			setTasks(data)
		} catch (error) {
			alert('Erro ao retornar tarefas')
			console.error(error)
		}
	}

	useEffect(() => {
		loadTasks()
	}, [])

	return (
		<div className={styles.todoPage}>
			<Header />
			<main>
				<section>
					<TaskForm onTaskAdded={loadTasks} />
				</section>
				<section>
					<TaskList tasks={tasks} setTasks={setTasks} loadTasks={loadTasks} />
				</section>
			</main>
		</div>
	)
}