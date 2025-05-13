import styles from './TodoPage.module.css';

import Header from '../layout/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function TodoPage() {
	return (
		<div className={styles.todoPage}>
			<Header />
			<main>
				<section>
					<TaskForm />
				</section>
				<section>
					<TaskList />
				</section>
			</main>
		</div>
	)
}