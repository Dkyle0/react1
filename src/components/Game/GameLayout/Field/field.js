import { FieldLayout } from './FieldLayout/fieldLayout';
import PropTypes from 'prop-types';

export function Field({
	field,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) {
	function checkWin(field, symbol) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] === symbol && field[b] === symbol && field[c] === symbol) {
				return true;
			}
		}
		return false;
	}
	function stepClick(
		event,
		field,
		setIsDraw,
		isGameEnded,
		setIsGameEnded,
		currentPlayer,
		setCurrentPlayer,
	) {
		if (!isGameEnded) {
			const nbrBtnCliced = Number(event.currentTarget.getAttribute('data-key'));
			if (field[nbrBtnCliced] === '') {
				field[nbrBtnCliced] = currentPlayer;
				if (currentPlayer === 'X') {
					setCurrentPlayer('0');
				} else setCurrentPlayer('X');
			}
			if (checkWin(field, 'X') || checkWin(field, '0')) {
				setIsGameEnded(true);
			} else if (field.every((a) => a !== '')) {
				setIsDraw(true);
			}
		}
	}
	return (
		<FieldLayout
			field={field}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			stepClick={stepClick}
		></FieldLayout>
	);
}

Field.propTypes = {
	field: PropTypes.array,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
};
