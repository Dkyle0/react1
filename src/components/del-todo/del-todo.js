import { ACTIONS } from '../constants/actions';

export function delToDo(id, refreshProducts, dispatch) {
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело удалено из списка, ответ сервера:', response);
			dispatch({ type: ACTIONS.upRefreshProduct, payload: !refreshProducts });
		});
}
