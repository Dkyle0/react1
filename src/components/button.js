import styles from './button.module.css';
import { useDispatch } from 'react-redux';

export function NewGameBtn() {
	const dispatch = useDispatch();

	function newGameButton() {
		dispatch({ type: 'resetState' });
	}

	return (
		<button className={styles.button} onClick={() => newGameButton()}>
			Новая игра
		</button>
	);
}
