import { ACTIONS } from '../constants/actions';

export const readTodosAsync = () => (dispatch) => {
	dispatch({ type: ACTIONS.upIsLoading, payload: true });

	return fetch('http://localhost:3003/todos')
		.then((loadedData) => loadedData.json())
		.then((list) => {
			dispatch({ type: ACTIONS.initTodos, payload: [...list] });
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		})
		.finally(() => {
			dispatch({ type: ACTIONS.upIsLoading, payload: false });
		});
};
