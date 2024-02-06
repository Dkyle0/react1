import styles from './add-todo.module.css';
import { useState } from 'react';
import { ACTIONS } from '../constants/actions';
import { useSelector, useDispatch } from 'react-redux';

export function requestAddTodo(event, value, refreshProducts, dispatch) {
	event.preventDefault();

	if (value) {
		fetch('http://localhost:3003/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
				isDone: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело добавлено, ответ сервера:', response);
				dispatch({ type: ACTIONS.upRefreshProduct, payload: !refreshProducts });
			});
	}
}

export function Addtodo() {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const refreshProducts = useSelector((state) => state.param.refreshProducts);

	return (
		<form onSubmit={(event) => requestAddTodo(event, value, refreshProducts, dispatch)}>
			<input
				className={styles.new}
				placeholder="Введите новое дело"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button className={styles.addTodoBottom} type="submit">
				Добавить
			</button>
		</form>
	);
}
