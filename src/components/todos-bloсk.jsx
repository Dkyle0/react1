import styles from './TodoBloсk.module.css';
import { Addtodo } from './add-todo';
import { TodoField } from './field';
import { Sorting } from './sorting';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from './constants/actions';

export function TodoBlock() {
	const dispatch = useDispatch();
	const filtredTodos = useSelector((state) => state.todos.filtredTodos);
	const isLoading = useSelector((state) => state.param.isLoading);
	const refreshProducts = useSelector((state) => state.param.refreshProducts);

	useEffect(() => {
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((list) => {
				dispatch({ type: ACTIONS.initTodos, payload: [...list] });
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			})
			.finally(() => {
				dispatch({ type: ACTIONS.upIsLoading, payload: false });
			});
	}, [dispatch, refreshProducts]);

	return (
		<div className={styles.blok}>
			<Addtodo />
			<h1 className={styles.h}>Список дел</h1>
			<Sorting />
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles.list}>
					{filtredTodos.map((todo) =>
						todo.id ? (
							<TodoField key={todo.id} title={todo.title} id={todo.id} isDone={todo.isDone} />
						) : null,
					)}
				</ul>
			)}
		</div>
	);
}
