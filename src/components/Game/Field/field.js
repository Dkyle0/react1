import { FieldLayout } from './FieldLayout/fieldLayout';
import { store } from '../../store';
import { useState } from 'react';
import { updater } from '../../store';

export function Field() {
	const [update, setUpdate] = useState(0);

	updater(update, setUpdate); // не зенаю, на сколько корректно так обновлять(скорее всего, так не нужно делать), но я по другому не придумал, как обновить

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
		const { fields, currentPlayer, isGameEnded } = store.getState();
		if (!isGameEnded) {
			const updatedFields = [...fields];
			if (fields[index] === '') {
				updatedFields[index] = currentPlayer;
				store.dispatch({ type: 'changeField', payload: updatedFields });
				if (currentPlayer === 'X') {
					store.dispatch({ type: 'changePlayer', payload: '0' });
				} else store.dispatch({ type: 'changePlayer', payload: 'X' });
			}
			if (checkWin(updatedFields, 'X') || checkWin(updatedFields, '0')) {
				store.dispatch({ type: 'endGame', payload: true });
			} else if (updatedFields.every((a) => a !== '')) {
				store.dispatch({ type: 'draw', payload: true });
			}
		}
	}
	return <FieldLayout stepClick={stepClick} />;
}
