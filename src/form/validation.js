export function validateForm(value, fieldName, password = '', errors) {
	const currentErrors = { ...errors };
	switch (fieldName) {
		case 'email':
			currentErrors.email = !/^\S+@\S+\.\S+$/.test(value)
				? 'Некорректный email'
				: '';
			break;
		case 'password':
			currentErrors.password =
				value.length < 6 ? 'Пароль должен содержать минимум 6 символов' : '';
			currentErrors.password =
				value.length >= 30
					? 'Пароль должен содержать не больше 30 символов'
					: currentErrors.password;
			break;
		case 'confirmPassword':
			currentErrors.password = currentErrors.confirmPassword =
				value !== password ? 'Пароли не совпадают' : '';
			break;
		default:
			break;
	}

	return currentErrors;
}
