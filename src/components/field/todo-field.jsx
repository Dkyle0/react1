import styles from './todo-field.module.css';
import { useState } from 'react';
import { doneToDo } from '../done-todo';
import { delToDo } from '../del-todo';
import { editoDo } from '../edit-todo';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefresh } from '../selectors/selectors';

export function TodoField({ title, id, isDone }) {
	const [isEdit, setIsEdit] = useState(false); // нормально, что часть состояний, которые используются локально находятся не в store?
	const [value, setNewValue] = useState(title);
	const dispatch = useDispatch();
	const refreshProducts = useSelector(selectRefresh);

	const mainField = (
		<li className={isDone ? `${styles.field} ${styles.done}` : `${styles.field}`} key={id}>
			<span className={styles.title}>{title}</span>
			<span className={styles.actions}>
				<span className={styles.actionBtn} onClick={() => setIsEdit(true)}>
					&#9998;
				</span>{' '}
				<span
					className={styles.actionBtn}
					onClick={() => dispatch(doneToDo(title, id, isDone, refreshProducts))}
				>
					&#9989;
				</span>{' '}
				<span className={styles.actionBtn} onClick={() => dispatch(delToDo(id, refreshProducts))}>
					&#10062;
				</span>
			</span>
		</li>
	);

	const editField = (
		<form
			className={styles.edit}
			onSubmit={(event) => dispatch(editoDo(value, id, isDone, refreshProducts, setIsEdit, event))}
		>
			<input className={styles.etitfield} value={value} onChange={(event) => setNewValue(event.target.value)} />
			<button className={styles.etitBtn} type="submit">
				Изменить
			</button>
		</form>
	);
	return isEdit ? editField : mainField;
}
