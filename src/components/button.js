import styles from './button.module.css';
import { store } from './store';

function ngClick() {
	store.dispatch({ type: 'resetState' });
}

export function NewGameBtn() {
	return (
		<button className={styles.button} onClick={() => ngClick()}>
			Новая игра
		</button>
	);
}
