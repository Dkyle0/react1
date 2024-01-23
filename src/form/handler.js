import { validateForm } from './validation.js';

export function handler(value, fieldName, updateAllState, getState, submitButtonRef) {
	let cusrrentState = getState();
	cusrrentState = {
		...cusrrentState,
		[fieldName]: value,
	};
	const { errors, email, password, confirmPassword } = cusrrentState;
	const currentErrors = validateForm(value, fieldName, password, errors);
	const formValid =
		Object.values(currentErrors).every((error) => error === '') &&
		email !== '' &&
		password !== '' &&
		confirmPassword !== '';
	if (formValid) {
		setTimeout(() => {
			submitButtonRef.current.focus();
		}, 0);
	}
	cusrrentState = {
		...cusrrentState,
		formValid: formValid,
		errors: currentErrors,
	};

	updateAllState(cusrrentState);
}
