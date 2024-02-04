import { store } from '../../../store';
import styles from './fieldLayout.module.css';

export function FieldLayout({ stepClick }) {
	const { fields } = store.getState();
	return (
		<div className={styles.board}>
			{fields.map((value, index) => (
				<div
					key={index}
					className={styles.field}
					onClick={() => stepClick(index)}
				>
					{value}
				</div>
			))}
		</div>
	);
}
