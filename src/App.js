import React from 'react';
import { Game } from './components/Game/game';
import { Provider } from 'react-redux';
import { store } from './components/store';

export const App = () => {
	return (
		<Provider store={store}>
			<Game />
		</Provider>
	);
};
