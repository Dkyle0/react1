import styles from './App.module.css';
import { useState } from 'react';
let operand1 = ''; // нормально декларировать тут эти переменные? Можно было это как-то, как-то лучше сделать?
let operator = '';
let operand2 = '';

const resetAll = () => {
	operand1 = '';
	operator = '';
	operand2 = '';
};

export const App = () => {
	let [currentDisplay, setCurrentDisplay] = useState('0');
	const [isResult, setIsResult] = useState(false);
	const operators = ['+', '-'];
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const addNbrToCalc = (event) => {
		currentDisplay === '0'
			? setCurrentDisplay(event.target.textContent)
			: setCurrentDisplay(currentDisplay + event.target.textContent);
		if (isResult) {
			setIsResult(false);
		}
	};
	const addOperarorToCalc = (event) => {
		if (operator.length < 1) {
			setIsResult(false);
			operator = event.target.textContent;
			operand1 = currentDisplay;
			setCurrentDisplay(`${currentDisplay}  ${operator} `);
		}
	};
	const acBtn = () => {
		resetAll();
		setIsResult(false);
		setCurrentDisplay('0');
	};
	const calcResult = () => {
		const tmp = currentDisplay.split(' ');
		operand2 = tmp[3];
		if (operand1.length < 1 || operand2.length < 1 || operator.length < 1) {
			resetAll();
			setCurrentDisplay('0');
			setIsResult(false);
			alert('Ошибка');
		}
		if (operator === '+') {
			const result = Number(operand1) + Number(operand2);
			setCurrentDisplay(result.toString());
			resetAll();
			setIsResult(true);
		}
		if (operator === '-') {
			const result = Number(operand1) - Number(operand2);
			setCurrentDisplay(result.toString());
			resetAll();
			setIsResult(true);
		}
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className={styles.calculator}>
					<div
						className={
							isResult
								? `${styles.calculatorOutput} ${styles.result}`
								: styles.calculatorOutput
						}
					>
						{currentDisplay}
					</div>
					<div className={styles.calculatorKeys}>
						{operators.map((operator) => {
							return (
								<button
									key={operator}
									className={`${styles.calculatorKey} ${styles.calculatorKeyOperator}`} // для 2 части задания
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
							C
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
