import { connect } from 'react-redux';
import { Component } from 'react';

export class NewGameBtnContainer extends Component {
	constructor({ newGameButton }) {
		super();
		this.newGameButton = newGameButton;
	}

	render() {
		return (
			<button className="button" onClick={this.newGameButton}>
				Новая игра
			</button>
		);
	}
}

const MapDispatchToProps = (dispatch) => ({
	newGameButton: () => dispatch({ type: 'resetState' }),
});

export const NewGameBtn = connect(null, MapDispatchToProps)(NewGameBtnContainer);
