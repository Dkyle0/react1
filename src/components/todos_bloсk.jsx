import styles from './TodoBloсk.module.css'
import { TodoField } from './field'
import { useEffect, useState } from 'react';

export function TodoBloсk() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((list) => {
				setTodos(list);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	return <div className={styles.blok}>
		<h1 className={styles.h}>Список дел</h1>
		<ul >
			{todos.map((todo) => {
				return <TodoField title={todo.title} id={todo.id}/>
			})}
		</ul>
	</div>
}
