import styles from './add-todo.module.css';

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

export function Addtodo({ setRefreshProducts, refreshProducts }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				requestAddTodo(event.target[0].value, setRefreshProducts, refreshProducts);
			}}
		>
			<input className={styles.new} placeholder="Введите новое дело"></input>
			<button className={styles.addTodoBottom} type="submit">
				Добавить
			</button>
		</form>
	);
}
