import styles from './add-todo.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context';

export function requestAddTodo(event, value, userData, setUserData) {
	event.preventDefault();
	const { refreshProducts } = userData;
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
				setUserData({ ...userData, refreshProducts: !refreshProducts });
			});
	}
}

export function Addtodo() {
	const [value, setValue] = useState('');
	const { userData, setUserData } = useContext(AppContext);

	return (
		<form onSubmit={(event) => requestAddTodo(event, value, userData, setUserData)}>
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
