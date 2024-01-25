export function doneToDo(title, id, isDone, setRefreshProducts, refreshProducts) {
	fetch(`http://localhost:3003/todos/${id}`, {
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
			setRefreshProducts(!refreshProducts);
		});
}
