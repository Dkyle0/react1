import { useNavigate } from 'react-router-dom';
import animation from '../../assets/404.gif';
import styles from './404.module.css';

export function Error404() {
	const navigate = useNavigate();
	return (
		<div className={styles.error}>
			<h1>
				<span onClick={() => navigate('/')}>&#8617;</span> Такой страницы не существует
			</h1>
			<img src={animation} alt="Ошибка 404" />
		</div>
	);
}
