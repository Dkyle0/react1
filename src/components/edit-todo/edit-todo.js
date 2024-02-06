import { ACTIONS } from '../constants/actions';

export function editoDo(title, id, isDone, refreshProducts, dispatch, setIsEdit, event) {
	event.preventDefault();
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: title,
			isDone: isDone,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело измнено, ответ сервера:', response);
			dispatch({ type: ACTIONS.upRefreshProduct, payload: !refreshProducts });
		})
		.finally(() => setIsEdit(false));
}
