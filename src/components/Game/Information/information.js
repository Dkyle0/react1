import { InformationLayout } from './InformationLayout/InformationLayout';
import { connect } from 'react-redux';
import { Component } from 'react';

export class InformationContainer extends Component {
	render() {
		const { currentPlayer, isDraw, isGameEnded } = this.props;
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
}

const mapStateToProps = (state) => {
	return {
		currentPlayer: state.currentPlayer,
		isDraw: state.isDraw,
		isGameEnded: state.isGameEnded,
	};
};

export const Information = connect(mapStateToProps)(InformationContainer);
