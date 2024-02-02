import styles from './TodoBloсk.module.css';
import { AppContext } from './context';
import { Addtodo } from './add-todo';
import { TodoField } from './field';
import { Sorting } from './sorting';
import { useEffect, useState } from 'react';
import { INIT_USER_DATA } from './constants/init-user-data';

export function TodoBlock() {
	const [userData, setUserData] = useState({ ...INIT_USER_DATA });
	const { filtredTodos, isLoading } = userData;

	useEffect(() => {
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((list) => {
				setUserData((prevUserData) => ({
					...prevUserData,
					todos: [...list],
					filtredTodos: [...list],
				}));
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			})
			.finally(() => {
				setUserData((prevUserData) => ({
					...prevUserData,
					isLoading: false,
				}));
			});
	}, [userData.refreshProducts]);

	return (
		<div className={styles.blok}>
			<AppContext.Provider value={{ userData, setUserData }}>
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
			</AppContext.Provider>
		</div>
	);
}
