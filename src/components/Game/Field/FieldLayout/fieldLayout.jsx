import { useSelector } from 'react-redux';
import styles from './fieldLayout.module.css';

export function FieldLayout({ stepClick }) {
	const fields = useSelector((state) => state.fields);
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
