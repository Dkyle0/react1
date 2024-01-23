import * as yup from 'yup';

export const fieldsSchema = yup.object().shape({
	email: yup.string().email('Некорректный email').required('Обязательное поле'),
	password: yup
		.string()
		.min(6, 'Неверный пароль. Должно быть не меньше 6 символов')
		.max(30, 'Неверный пароль. Должно быть не больше 30 символов')
		.required('Обязательное поле'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Обязательное поле'),
});
