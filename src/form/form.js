import { FormLayout } from './form-layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsSchema } from './schema';
import { sendData } from './utils';

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(fieldsSchema),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;
	const formValid = !emailError && !passwordError && !confirmPasswordError;

	return (
		<FormLayout
			register={register}
			sendData={sendData}
			formValid={formValid}
			emailError={emailError}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
			handleSubmit={handleSubmit}
		/>
	);
}
