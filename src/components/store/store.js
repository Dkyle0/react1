import { createStore } from 'redux';

export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	fields: ['', '', '', '', '', '', '', '', ''],
	type: 'STATE',
};

function Reducer(state = initialState, action = { type: '' }) {
	switch (action.type) {
		case 'changePlayer':
			return { ...state, currentPlayer: action.payload };
		case 'endGame':
			return { ...state, isGameEnded: action.payload };
		case 'draw':
			return { ...state, isDraw: action.payload };
		case 'changeField':
			return { ...state, fields: action.payload };
		case 'resetState':
			return { ...initialState };
		default:
			return state;
	}
}

export let store = createStore(Reducer);

export const updater = (update, setUpdate) =>
	store.subscribe(() => {
		setUpdate(update + 1);
	});
