import styles from './button.module.css';
import PropTypes from 'prop-types';

function ngClick(setField, setIsDraw, setIsGameEnded, setCurrentPlayer) {
	setField(['', '', '', '', '', '', '', '', '']);
	setIsDraw(false);
	setIsGameEnded(false);
	setCurrentPlayer('X');
}

ngClick.propTypes = {
	setField: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
};

export function NewGameBtn({ setField, setIsDraw, setIsGameEnded, setCurrentPlayer }) {
	return (
		<button
			className={styles.button}
			onClick={() => ngClick(setField, setIsDraw, setIsGameEnded, setCurrentPlayer)}
		>
			Новая игра
		</button>
	);
}

ngClick.NewGameBtn = {
	setField: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
};
