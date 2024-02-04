import styles from './game.module.css';
import { Information } from './Information/information';
import { Field } from './Field/field';
import { NewGameBtn } from '../button';

export function Game() {
	return (
		<div className={styles.main}>
			<Information />
			<Field />
			<NewGameBtn />
		</div>
	);
}
