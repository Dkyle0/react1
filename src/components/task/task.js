import styles from './task.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoFieldPage } from '../field';
import { useEffect } from 'react';
import { updateLocalList } from '../update-locale-list';
import { Error404 } from '../error-404';

export function TaskPage({ todos, setTodos, refreshProducts, setRefreshProducts, setfiltredTodos, setisLoading }) {
	const navigate = useNavigate();
	const id = useParams()?.id;
	const currentTask = todos.filter((task) => task?.id === id);
	const title = currentTask[0]?.title;
	const isDone = currentTask[0]?.isDone;

	useEffect(() => {
		setisLoading(true);
		updateLocalList(setTodos, setfiltredTodos, setisLoading);
	}, [refreshProducts, setTodos]);

	const defaultReturn = (
		<div className={styles.blok}>
			<button className={styles.backBtn} onClick={() => navigate(-1)}>
				&#8617; Назад
			</button>
			<TodoFieldPage
				title={title}
				id={id}
				isDone={isDone}
				setRefreshProducts={setRefreshProducts}
				refreshProducts={refreshProducts}
				setTodos={setTodos}
			/>
		</div>
	);

	const errorReturn = <Error404 />;

	return currentTask.length > 0 ? defaultReturn : errorReturn;
}
