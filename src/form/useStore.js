import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	confirmPassword: '',
	formValid: false,
	errors: {
		email: '',
		password: '',
		confirmPassword: '',
	},
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		updateAllState: (newValue) => {
			setState(newValue);
		},
		resetState: () => {
			setState(initialState);
		},
	};
};
