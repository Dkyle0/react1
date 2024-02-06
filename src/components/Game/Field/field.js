import { FieldLayout } from './FieldLayout/fieldLayout';
import { useDispatch, useSelector } from 'react-redux';

export function Field() {
	const dispatch = useDispatch(); //теперь нет проблем с обновлением вручную :)
	const fields = useSelector((state) => state.fields);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);

	function checkWin(fields, symbol) {
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
			if (fields[a] === symbol && fields[b] === symbol && fields[c] === symbol) {
				return true;
			}
		}
		return false;
	}

	function stepClick(index) {
		if (!isGameEnded) {
			const updatedFields = [...fields];
			if (fields[index] === '') {
				updatedFields[index] = currentPlayer;
				dispatch({ type: 'changeField', payload: updatedFields });
				if (currentPlayer === 'X') {
					dispatch({ type: 'changePlayer', payload: '0' });
				} else dispatch({ type: 'changePlayer', payload: 'X' });
			}
			if (checkWin(updatedFields, 'X') || checkWin(updatedFields, '0')) {
				dispatch({ type: 'endGame', payload: true });
			} else if (updatedFields.every((a) => a !== '')) {
				dispatch({ type: 'draw', payload: true });
			}
		}
	}
	return <FieldLayout stepClick={stepClick} />;
}
