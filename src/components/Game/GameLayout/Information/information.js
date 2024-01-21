import { InformationLayout } from './InformationLayout/InformationLayout';
import PropTypes from 'prop-types';

export function Information({ isDraw, isGameEnded, currentPlayer }) {
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
	return <InformationLayout text={text}></InformationLayout>;
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
