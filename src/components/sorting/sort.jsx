import styles from './sort.module.css';
import { debounce } from '../utils.js/index.js';
import { ACTIONS } from '../constants/actions';
import { useSelector, useDispatch } from 'react-redux';

export function sort(isAlpha, todos, dispatch) {
	dispatch({ type: ACTIONS.upIsAlpha, payload: !isAlpha });
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
		dispatch({ type: ACTIONS.upFiltredTodus, payload: [...sortedTodos] });
	} else {
		dispatch({ type: ACTIONS.upFiltredTodus, payload: [...todos] });
	}
}

export function filter(todos, dispatch, value) {
	if (value) {
		const filtred = todos.filter((todo) => todo.title.includes(value));
		dispatch({ type: ACTIONS.upFiltredTodus, payload: [...filtred] });
	} else {
		dispatch({ type: ACTIONS.upFiltredTodus, payload: [...todos] });
	}
}

const debouncedFilter = debounce(filter, 300);

export function Sorting() {
	const dispatch = useDispatch();
	const isAlpha = useSelector((state) => state.param.isAlpha);
	const todos = useSelector((state) => state.todos.todos);

	return (
		<div className={styles.sort}>
			<button
				onClick={() => {
					sort(isAlpha, todos, dispatch);
				}}
			>
				Сортировать по алфавиту
			</button>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск"
				onChange={(event) => debouncedFilter(todos, dispatch, event.target.value)}
			/>
		</div>
	);
}
