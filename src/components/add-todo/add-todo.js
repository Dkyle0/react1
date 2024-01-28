import styles from './add-todo.module.css';
import { useState } from 'react';

export function requestAddTodo(value, setRefreshProducts, refreshProducts) {
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
				setRefreshProducts(!refreshProducts);
			});
	}
}

function formProcessing(event, value, setRefreshProducts, refreshProducts) {
	event.preventDefault();
	requestAddTodo(value, setRefreshProducts, refreshProducts);
}

export function Addtodo({ setRefreshProducts, refreshProducts }) {
	const [value, setValue] = useState('');
	return (
		<form onSubmit={(event) => formProcessing(event, value, setRefreshProducts, refreshProducts)}>
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
