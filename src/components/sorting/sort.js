import styles from './sort.module.css';
import { debounce } from '../utils.js';
import { useRef } from 'react';

export function sort(todos, setfiltredTodos, isAlpha, setisAlpha) {
	setisAlpha(!isAlpha);
	if (!isAlpha) {
		const sortedTodos = [...todos].sort((a, b) => {
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
		setfiltredTodos([...todos]);
	}
}

export function filter(todos, setfiltredTodos, value) {
	if (value) {
		setfiltredTodos(todos.filter((todo) => todo.title.includes(value)));
	} else {
		setfiltredTodos([...todos]);
	}
}

export function Sorting({ todos, setfiltredTodos, isAlpha, setisAlpha }) {
	const debouncedFilter = useRef(debounce(filter, 500)).current;
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
				onChange={(event) => debouncedFilter(todos, setfiltredTodos, event.target.value)}
			/>
		</div>
	);
}
