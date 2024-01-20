import styles from './App.module.css';
import { useState } from 'react';
let operand1 = ''; // нормально декларировать тут эти переменные? Можно было это как-то, как-то лучше сделать?
let operand2 = '';

export const App = () => {
	let [currentDisplay, setCurrentDisplay] = useState('0');
	const operators = ['+', '-'];
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const addNbrToCalc = (event) => {
		currentDisplay === '0'
			? setCurrentDisplay(event.target.textContent)
			: setCurrentDisplay(currentDisplay + event.target.textContent);
	};
	const addOperarorToCalc = (event) => {
		if (!operand1) {
			operand2 = currentDisplay;
			setCurrentDisplay('0');
			operand1 = event.target.textContent;
		}
	};
	const acBtn = () => {
		operand1 = '';
		setCurrentDisplay('0');
	};
	const calcResult = () => {
		console.log(operand1, operand2);
		if (operand1.length < 1 || operand2.length < 1) {
			operand1 = '';
			operand2 = '';
			setCurrentDisplay('0');
			alert('Ошибка');
		}
		if (operand1 === '+') {
			const result = Number(operand2) + Number(currentDisplay);
			setCurrentDisplay(result.toString());
			operand1 = '';
			operand2 = '';
		}
		if (operand1 === '-') {
			const result = Number(operand2) - Number(currentDisplay);
			setCurrentDisplay(result.toString());
			operand1 = '';
			operand2 = '';
		}
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className={operand2.length > 0 ? styles.calculatorOutput : null}>
					{operand2}
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
						{NUMS.map((key) => {
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
