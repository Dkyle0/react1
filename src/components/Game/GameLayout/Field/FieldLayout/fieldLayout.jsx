import styles from './fieldLayout.module.css'
import PropTypes from 'prop-types';


export function FieldLayout ({field, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, stepClick }) {
	return (
		<div className={styles.board}>
		  {field.map((value, index) => (
			<div key={index} data-key={index} className={styles.field} onClick={(event) => stepClick(event, field, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer)}>
			  {value}
			</div>
		  ))}
		</div>
	  );
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
};
