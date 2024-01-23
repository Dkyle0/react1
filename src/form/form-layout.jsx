import styles from './form-layout.module.css'

export function FormLayout (props) {
	const {
		getState,
		updateAllState,
		submitButtonRef,
		handler,
		sendData
	  } = props;

	const { email, password, confirmPassword, formValid, errors } = getState();

	return (
		<div className={styles.registrationForm}>
		  <h2>Форма регистрации</h2>
		  <div className={styles.formGroup}>
			<label>Email:</label>
			<input
			  type='email'
			  value={email}
			   onChange={e => handler(e.target.value, 'email', updateAllState, getState, submitButtonRef)}
			/>
			<div className={styles.error}>{errors.email}</div>
		  </div>
		  <div className={styles.formGroup}>
			<label>Пароль:</label>
			<input
			  type='password'
			  value={password}
			   onChange={e => handler(e.target.value, 'password', updateAllState, getState, submitButtonRef)}
			/>
			<div className={styles.error}>{errors.password}</div>
		  </div>
		  <div className={styles.formGroup}>
			<label>Повторите пароль:</label>
			<input
			  type='password'
			  value={confirmPassword}
			  onChange={e => handler(e.target.value, 'confirmPassword', updateAllState, getState, submitButtonRef)}
			/>
			<div className={styles.error}>{errors.confirmPassword}</div>
		  </div>
		  <button
			id="registerButton"
			ref={submitButtonRef}
			onClick={() => sendData(email, password)}
			disabled={!formValid}
		  >
			Зарегистрироваться
		  </button>
		</div>
	  );
}
