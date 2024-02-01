export function updateLocalList(setTodos, setfiltredTodos, setisLoading) {
	fetch('http://localhost:3003/todos')
		.then((loadedData) => loadedData.json())
		.then((list) => {
			setTodos(list);
			setfiltredTodos(list);
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		})
		.finally(() => {
			setisLoading(false);
		});
}
