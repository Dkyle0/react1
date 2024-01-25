import styles from './todo-field.module.css'

export function TodoField({title, id}) {

	return <>
	<li className={styles.field} key={id}>
		<span className={styles.title}>{title}</span>
	</li>
	</>
}
