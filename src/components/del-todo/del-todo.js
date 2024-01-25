import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export function delToDo(id, setRefreshProducts, refreshProducts) {
	const todoDbRef = ref(db, `todos/${id}`);

	remove(todoDbRef)
		.then((response) => {
			console.log('Дело удалено из списка, ответ сервера:', response);
			setRefreshProducts(!refreshProducts);
		})
		.catch((error) => console.error(error));
}
