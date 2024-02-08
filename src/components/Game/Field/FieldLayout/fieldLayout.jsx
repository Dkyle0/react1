import { useSelector } from 'react-redux';

export function FieldLayout({ stepClick }) {
	const fields = useSelector((state) => state.fields);
	return (
		<div className="board">
			{fields.map((value, index) => (
				<div key={index} className="field" onClick={() => stepClick(index)}>
					{value}
				</div>
			))}
		</div>
	);
}
