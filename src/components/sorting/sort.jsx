import styles from './sort.module.css';
import { debounce } from '../utils.js/index.js';
import { useContext } from 'react';
import { AppContext } from '../context';

export function sort(userData, setUserData) {
	const { todos, isAlpha } = userData;

	setUserData({ ...userData, isAlpha: !isAlpha });
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
		setUserData({ ...userData, filtredTodos: sortedTodos });
	} else {
		setUserData({ ...userData, filtredTodos: [...todos] });
	}
}

export function filter(userData, setUserData, value) {
	const { todos } = userData;
	if (value) {
		const filtred = todos.filter((todo) => todo.title.includes(value));
		setUserData({ ...userData, filtredTodos: filtred });
	} else {
		setUserData({ ...userData, filtredTodos: [...todos] });
	}
}

const debouncedFilter = debounce(filter, 300);

export function Sorting() {
	const { userData, setUserData } = useContext(AppContext);
	return (
		<div className={styles.sort}>
			<button
				onClick={() => {
					sort(userData, setUserData);
				}}
			>
				Сортировать по алфавиту
			</button>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск"
				onChange={(event) => debouncedFilter(userData, setUserData, event.target.value)}
			/>
		</div>
	);
}
