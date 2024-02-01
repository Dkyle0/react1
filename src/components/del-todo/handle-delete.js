import { delToDo } from './del-todo';

export const handleDelete = async (id, setRefreshProducts, refreshProducts, navigate) => {
	await delToDo(id, setRefreshProducts, refreshProducts);
	navigate(-1);
};
