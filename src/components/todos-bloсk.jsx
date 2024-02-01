import styles from './TodoBloсk.module.css';
import { Addtodo } from './add-todo';
import { TodoFieldMain } from './field';
import { Sorting } from './sorting';
import { useEffect, useState } from 'react';
import { updateLocalList } from './update-locale-list';

export function TodoBlock({
	todos,
	setTodos,
	refreshProducts,
	setRefreshProducts,
	filtredTodos,
	setfiltredTodos,
	isLoading,
	setisLoading,
}) {
	const [isAlpha, setisAlpha] = useState(false);

	useEffect(() => {
		updateLocalList(setTodos, setfiltredTodos, setisLoading);
	}, [refreshProducts, setTodos, setfiltredTodos, setisLoading]);

	return (
		<div className={styles.blok}>
			<Addtodo setRefreshProducts={setRefreshProducts} refreshProducts={refreshProducts} />
			<h1 className={styles.h}>Список дел</h1>
			<Sorting todos={todos} setfiltredTodos={setfiltredTodos} isAlpha={isAlpha} setisAlpha={setisAlpha} />
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles.list}>
					{filtredTodos.map((todo) =>
						todo.id ? (
							<TodoFieldMain key={todo.id} title={todo.title} id={todo.id} isDone={todo.isDone} />
						) : null,
					)}
				</ul>
			)}
		</div>
	);
}
