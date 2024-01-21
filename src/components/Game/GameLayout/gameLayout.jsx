import { Field } from "./Field/field";
import { Information } from "./Information/information";
import { NewGameBtn } from '../../button';
import styles from './gameLayout.module.css'
import PropTypes from 'prop-types';

export function GameLayout ({field, setField, isDraw, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer }) {
	return <>
			<div className={styles.main}>
				<Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}></Information>
				<Field 
				field={field}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}></Field>	
				<NewGameBtn setField={setField} setIsDraw={setIsDraw} setIsGameEnded={setIsGameEnded} setCurrentPlayer={setCurrentPlayer}/>	
			</div>
	</> 
}

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
};
