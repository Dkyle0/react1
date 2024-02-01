import styles from './todo-field.module.css';
import { Link } from 'react-router-dom';

export function TodoFieldMain({ title, id, isDone }) {
	const mainField = (
		<Link className={styles.link} to={`/task/${id}`}>
			<li className={isDone ? `${styles.field} ${styles.done}` : `${styles.field}`} key={id}>
				<span className={`${styles.title} ${styles.mainTitle}`}>{title}</span>
			</li>
		</Link>
	);

	return mainField;
}
