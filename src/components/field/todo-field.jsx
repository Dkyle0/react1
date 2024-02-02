import styles from './todo-field.module.css';
import { useState } from 'react';
import { doneToDo } from '../done-todo';
import { delToDo } from '../del-todo';
import { editoDo } from '../edit-todo';
import { useContext } from 'react';
import { AppContext } from '../context';

export function TodoField({ title, id, isDone }) {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setNewValue] = useState(title);
	const { userData, setUserData } = useContext(AppContext);

	const mainField = (
		<li className={isDone ? `${styles.field} ${styles.done}` : `${styles.field}`} key={id}>
			<span className={styles.title}>{title}</span>
			<span className={styles.actions}>
				<span className={styles.actionBtn} onClick={() => setIsEdit(true)}>
					&#9998;
				</span>{' '}
				<span className={styles.actionBtn} onClick={() => doneToDo(title, id, isDone, userData, setUserData)}>
					&#9989;
				</span>{' '}
				<span className={styles.actionBtn} onClick={() => delToDo(id, userData, setUserData)}>
					&#10062;
				</span>
			</span>
		</li>
	);

	const editField = (
		<form
			className={styles.edit}
			onSubmit={(event) => editoDo(value, id, isDone, userData, setUserData, setIsEdit, event)}
		>
			<input className={styles.etitfield} value={value} onChange={(event) => setNewValue(event.target.value)} />
			<button className={styles.etitBtn} type="submit">
				Изменить
			</button>
		</form>
	);
	return isEdit ? editField : mainField;
}
