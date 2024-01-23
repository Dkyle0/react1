import styles from './form-layout.module.css'

export function FormLayout (props) {
	const {
		register,
		formValid,
		sendData,
		emailError,
		passwordError,
		confirmPasswordError,
		handleSubmit,
	  } = props;

	  return (
		<form onSubmit={handleSubmit(sendData)}>
		  <div className={styles.registrationForm}>
			<h2>Форма регистрации</h2>
			<div className={styles.formGroup}>
			  <label>Email:</label>
			  <input type="email" {...register('email')} />
			  <div className={styles.error}>{emailError}</div>
			</div>
			<div className={styles.formGroup}>
			  <label>Пароль:</label>
			  <input type="password" {...register('password')} />
			  <div className={styles.error}>{passwordError}</div>
			</div>
			<div className={styles.formGroup}>
			  <label>Повторите пароль:</label>
			  <input type="password" {...register('confirmPassword')} />
			  <div className={styles.error}>{confirmPasswordError}</div>
			</div>
			<button
			  id="registerButton"
			  type="submit"
			  disabled={!formValid}
			>
			  Зарегистрироваться
			</button>
		  </div>
		</form>
	  );
	}
