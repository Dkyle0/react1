import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { TodoBlock } from './components';
import { TaskPage } from './components/task';
import { Error404 } from './components/error-404';

export const App = () => {
	const [filtredTodos, setfiltredTodos] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [todos, setTodos] = useState([]);
	const [refreshProducts, setRefreshProducts] = useState(false);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<TodoBlock
							todos={todos}
							setTodos={setTodos}
							refreshProducts={refreshProducts}
							setRefreshProducts={setRefreshProducts}
							filtredTodos={filtredTodos}
							setfiltredTodos={setfiltredTodos}
							isLoading={isLoading}
							setisLoading={setisLoading}
						/>
					}
				/>
				<Route
					path="task/:id"
					element={
						<TaskPage
							todos={todos}
							setTodos={setTodos}
							refreshProducts={refreshProducts}
							setRefreshProducts={setRefreshProducts}
							filtredTodos={filtredTodos}
							setfiltredTodos={setfiltredTodos}
							isLoading={isLoading}
							setisLoading={setisLoading}
						/>
					}
				/>
				<Route path="/404" element={<Error404 />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	);
};
