import styles from './TodoBloсk.module.css';
import { Addtodo } from './add-todo';
import { TodoField } from './field';
import { Sorting } from './sorting';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

export function TodoBlock() {
	const [todos, setTodos] = useState({});
	const [isAlpha, setisAlpha] = useState(false);
	const [filtredTodos, setfiltredTodos] = useState({});
	const [isLoading, setisLoading] = useState(true);
	const [refreshProducts, setRefreshProducts] = useState(false);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val();

			setTodos(loadedTodos || {});
			setfiltredTodos(loadedTodos || {});
			setisLoading(false);
		});
	}, []);
	return (
		<div className={styles.blok}>
			<Addtodo setRefreshProducts={setRefreshProducts} refreshProducts={refreshProducts} />
			<h1 className={styles.h}>Список дел</h1>
			<Sorting todos={todos} setfiltredTodos={setfiltredTodos} isAlpha={isAlpha} setisAlpha={setisAlpha} />
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles.list}>
					{Object.entries(filtredTodos).map(([id, { title, isDone }]) => (
						<TodoField
							key={id}
							title={title}
							id={id}
							isDone={isDone}
							setRefreshProducts={setRefreshProducts}
							refreshProducts={refreshProducts}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
