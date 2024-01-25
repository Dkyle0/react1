import styles from './sort.module.css';
import { debounce } from '../utils.js';

export function sort(todos, setfiltredTodos, isAlpha, setisAlpha) {
	setisAlpha(!isAlpha);
	if (!isAlpha) {
		const sortedTodos = Object.values(todos).sort((a, b) => {
			console.log(a, b);
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
			return 0;
		});
		setfiltredTodos(sortedTodos);
	} else {
		setfiltredTodos(Object.values(todos));
	}
}

export function filter(todos, setfiltredTodos, value) {
	if (value) {
		const filteredTodos = Object.values(todos).filter((todo) => todo.title.includes(value));
		setfiltredTodos(filteredTodos);
	} else {
		setfiltredTodos(Object.values(todos));
	}
}

export function Sorting({ todos, setfiltredTodos, isAlpha, setisAlpha }) {
	const debouncedFilter = debounce((value) => filter(todos, setfiltredTodos, value), 300);

	return (
		<div className={styles.sort}>
			<button
				onClick={() => {
					sort(todos, setfiltredTodos, isAlpha, setisAlpha);
				}}
			>
				Сортировать по алфавиту
			</button>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск"
				onChange={(event) => debouncedFilter(event.target.value)}
			></input>
		</div>
	);
}
