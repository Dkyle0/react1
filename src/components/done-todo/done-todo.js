import { ACTIONS } from '../constants/actions';

export const doneToDo = (title, id, isDone, refreshProducts) => (dispatch) => {
	return fetch(`http://localhost:3003/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: title,
			isDone: !isDone,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело сделано, ответ сервера:', response);
			dispatch({ type: ACTIONS.upRefreshProduct, payload: !refreshProducts });
		});
};
