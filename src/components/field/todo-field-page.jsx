import styles from './todo-field.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doneToDo } from '../done-todo';
import { handleDelete } from '../del-todo';
import { editoDo } from '../edit-todo';

export function TodoFieldPage({ title, id, isDone, setRefreshProducts, refreshProducts }) {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setNewWalue] = useState(title);
	const navigate = useNavigate();

	const mainField = (
		<li className={isDone ? `${styles.field} ${styles.done}` : `${styles.field}`} key={id}>
			<span className={styles.title}>{title}</span>
			<span className={styles.actions}>
				<span className={styles.actionBtn} onClick={() => setIsEdit(true)}>
					&#9998;
				</span>{' '}
				<span
					className={styles.actionBtn}
					onClick={() => doneToDo(title, id, isDone, setRefreshProducts, refreshProducts)}
				>
					&#9989;
				</span>{' '}
				<span
					className={styles.actionBtn}
					onClick={() => handleDelete(id, setRefreshProducts, refreshProducts, navigate)}
				>
					&#10062;
				</span>
			</span>
		</li>
	);

	const editField = (
		<form
			className={styles.edit}
			onSubmit={(event) => editoDo(value, id, isDone, setRefreshProducts, refreshProducts, setIsEdit, event)}
		>
			<input className={styles.etitfield} value={value} onChange={(event) => setNewWalue(event.target.value)} />
			<button className={styles.etitBtn} type="submit">
				Изменить
			</button>
		</form>
	);
	return isEdit ? editField : mainField;
}
