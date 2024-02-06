import { InformationLayout } from './InformationLayout/InformationLayout';
import { useSelector } from 'react-redux';

export function Information() {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);

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
