import { FieldLayout } from './FieldLayout/fieldLayout';
import { connect } from 'react-redux';
import { Component } from 'react';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.stepClick = this.stepClick.bind(this); // Привязка к текущему контексту
	}
	checkWin(fields, symbol) {
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

	stepClick(index) {
		const {
			currentPlayer,
			fields,
			isGameEnded,
			changeField,
			changePlayerO,
			changePlayerX,
			endGame,
			draw,
		} = this.props;
		if (!isGameEnded) {
			const updatedFields = [...fields];
			if (fields[index] === '') {
				updatedFields[index] = currentPlayer;
				changeField(updatedFields);
				if (currentPlayer === 'X') {
					changePlayerO();
				} else changePlayerX();
			}
			if (this.checkWin(updatedFields, 'X') || this.checkWin(updatedFields, '0')) {
				endGame();
			} else if (updatedFields.every((a) => a !== '')) {
				draw();
			}
		}
	}

	render() {
		return <FieldLayout stepClick={this.stepClick} />;
	}
}

const mapStateToProps = (state) => {
	return {
		currentPlayer: state.currentPlayer,
		isGameEnded: state.isGameEnded,
		fields: state.fields,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeField: (updatedFields) =>
			dispatch({ type: 'changeField', payload: updatedFields }),
		changePlayerO: () => dispatch({ type: 'changePlayer', payload: '0' }),
		changePlayerX: () => dispatch({ type: 'changePlayer', payload: 'X' }),
		endGame: () => dispatch({ type: 'endGame', payload: true }),
		draw: () => dispatch({ type: 'draw', payload: true }),
	};
};

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
