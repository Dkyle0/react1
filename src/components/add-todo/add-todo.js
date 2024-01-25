import styles from './add-todo.module.css';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export function requestAddTodo(value, setRefreshProducts, refreshProducts) {
	if (value) {
		const productsDbRef = ref(db, 'todos');

		push(productsDbRef, {
			title: value,
			isDone: false,
		})
			.then((response) => {
				console.log('Дело добавлено, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.catch((error) => {
				console.error(error);
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
