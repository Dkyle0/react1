import { InformationLayout } from './InformationLayout/InformationLayout';
import { store } from '../../store/store';
import { useState } from 'react';
import { updater } from '../../store/store';

export function Information() {
	const [update, setUpdate] = useState(0);

	updater(update, setUpdate);

	const { currentPlayer, isDraw, isGameEnded } = store.getState();

	let text = `Сейчас ходит: ${currentPlayer}`;
	if (isDraw) {
		text = 'Ничья!';
	}
	if (isGameEnded) {
		if (currentPlayer === 'X') {
			text = `Победил 0`;
		} else {
			text = `Победил X`;
		}
	}
	return <InformationLayout text={text} />;
}
