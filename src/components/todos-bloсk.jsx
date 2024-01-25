import styles from './TodoBloсk.module.css';
import { Addtodo } from './add-todo';
import { TodoField } from './field';
import { Sorting } from './sorting';
import { useEffect, useState } from 'react';

export function TodoBlock() {
	const [todos, setTodos] = useState([]);
	const [isAlpha, setisAlpha] = useState(false);
	const [filtredTodos, setfiltredTodos] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [refreshProducts, setRefreshProducts] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((list) => {
				setTodos(list);
				setfiltredTodos(list);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [refreshProducts]);

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
							<TodoField
								key={todo.id}
								title={todo.title}
								id={todo.id}
								isDone={todo.isDone}
								setRefreshProducts={setRefreshProducts}
								refreshProducts={refreshProducts}
							/>
						) : null,
					)}
				</ul>
			)}
		</div>
	);
}
