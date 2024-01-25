import styles from './todo-field.module.css';
import { doneToDo } from '../done-todo';
import { delToDo } from '../del-todo';

export function TodoField({ title, id, isDone, setRefreshProducts, refreshProducts }) {
	return (
		<li className={isDone ? `${styles.field} ${styles.done}` : `${styles.field}`} key={id}>
			<span className={styles.title}>{title}</span>
			<span className={styles.actions}>
				<span
					className={styles.actionBtn}
					onClick={() => doneToDo(title, id, isDone, setRefreshProducts, refreshProducts)}
				>
					&#9989;
				</span>{' '}
				<span className={styles.actionBtn} onClick={() => delToDo(id, setRefreshProducts, refreshProducts)}>
					&#10062;
				</span>
			</span>
		</li>
	);
}
