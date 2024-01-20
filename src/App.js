import styles from './App.module.css';
import { useState } from 'react';
let operatorUsed = ''; // нормально декларировать тут эти переменные? Можно было это как-то, как-то лучше сделать?
let firstNbr = '';

export const App = () => {
	let [currentDisplay, setCurrentDisplay] = useState('0');
	const operators = ['+', '-'];
	const numbersKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const addNbrToCalc = (event) => {
		currentDisplay === '0'
			? setCurrentDisplay(event.target.textContent)
			: setCurrentDisplay(currentDisplay + event.target.textContent);
	};
	const addOperarorToCalc = (event) => {
		if (!operatorUsed) {
			firstNbr = currentDisplay;
			setCurrentDisplay('0');
			operatorUsed = event.target.textContent;
		}
	};
	const acBtn = () => {
		operatorUsed = '';
		setCurrentDisplay('0');
	};
	const calcResult = () => {
		console.log(operatorUsed, firstNbr);
		if (operatorUsed.length < 1 || firstNbr.length < 1) {
			operatorUsed = '';
			firstNbr = '';
			setCurrentDisplay('0');
			alert('Ошибка');
		}
		if (operatorUsed === '+') {
			const result = Number(firstNbr) + Number(currentDisplay);
			setCurrentDisplay(result.toString());
			operatorUsed = '';
			firstNbr = '';
		}
		if (operatorUsed === '-') {
			const result = Number(firstNbr) - Number(currentDisplay);
			setCurrentDisplay(result.toString());
			operatorUsed = '';
			firstNbr = '';
		}
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className={firstNbr.length > 0 ? styles.calculatorOutput : null}>
					{firstNbr}
				</div>
				<div className={styles.calculator}>
					<div className={styles.calculatorOutput}>{currentDisplay}</div>
					<div className={styles.calculatorKeys}>
						{operators.map((operator) => {
							return (
								<button
									key={operator}
									className={`${styles.calculatorKey} ${styles.calculatorKeyOperator}`}
									onClick={addOperarorToCalc}
								>
									{operator}
								</button>
							);
						})}
						{numbersKeys.map((key) => {
							return (
								<button
									key={key}
									className={styles.calculatorKey}
									onClick={addNbrToCalc}
								>
									{key}
								</button>
							);
						})}
						<button className={styles.calculatorAc} onClick={acBtn}>
							AC
						</button>
						<button
							className={styles.calculatorKeyEnter}
							onClick={calcResult}
						>
							=
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};
