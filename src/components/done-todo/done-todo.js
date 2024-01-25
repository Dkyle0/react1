import { ref, set } from 'firebase/database';
import { db } from '../firebase';
export function doneToDo(title, id, isDone, setRefreshProducts, refreshProducts) {
	const todoDbRef = ref(db, `todos/${id}`);

	set(todoDbRef, {
		title: title,
		isDone: !isDone,
	})
		.then((response) => {
			console.log('Дело сделано, ответ сервера:', response);
			setRefreshProducts(!refreshProducts);
		})
		.catch((error) => {
			console.error(error);
		});
}
