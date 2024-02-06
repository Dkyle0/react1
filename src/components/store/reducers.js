export const INIT_TODOS_DATA = {
	todos: [],
	filtredTodos: [],
};

export const INIT_PARAMETRES_DATA = {
	isAlpha: false,
	isLoading: true,
	refreshProducts: false,
};

export function todoReducer(state = INIT_TODOS_DATA, action) {
	switch (action.type) {
		case 'initTodos':
			return { ...state, todos: action.payload, filtredTodos: action.payload };
		case 'upTodus':
			return { ...state, todos: action.payload };
		case 'upFiltredTodus':
			return { ...state, filtredTodos: action.payload };
		case 'resetTodosState':
			return { ...INIT_TODOS_DATA };
		default:
			return state;
	}
}

export function parametresReducer(state = INIT_PARAMETRES_DATA, action) {
	switch (action.type) {
		case 'upIsAlpha':
			return { ...state, isAlpha: action.payload };
		case 'upIsLoading':
			return { ...state, isLoading: action.payload };
		case 'upRefreshProduct':
			return { ...state, refreshProducts: action.payload };
		case 'resetParametresState':
			return { ...INIT_PARAMETRES_DATA };
		default:
			return state;
	}
}
