import styles from './InformationLayout.module.css'

export function InformationLayout ({text}) {
	return <div className={styles.info}>{text}</div>
}
