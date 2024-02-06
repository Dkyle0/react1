import './App.css';
import { TodoBlock } from './components';
import { Provider } from 'react-redux';
import { store } from './components/store';

export const App = () => {
	return (
		<Provider store={store}>
			<TodoBlock />;
		</Provider>
	);
};
