export function delToDo(id, setRefreshProducts, refreshProducts) {
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело удалено из списка, ответ сервера:', response);
			setRefreshProducts(!refreshProducts);
		});
}
