import styles from './TodoBloсk.module.css';
import { Addtodo } from './add-todo';
import { TodoField } from './field';
import { Sorting } from './sorting';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFiltred, selectLoading, selectRefresh } from './selectors/selectors';
import { readTodosAsync } from './actions/read-todos-async';

export function TodoBlock() {
	const dispatch = useDispatch();
	const filtredTodos = useSelector(selectFiltred);
	const isLoading = useSelector(selectLoading);
	const refreshProducts = useSelector(selectRefresh);

	useEffect(() => {
		dispatch(readTodosAsync());
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
