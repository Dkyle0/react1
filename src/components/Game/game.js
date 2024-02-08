import { Information } from './Information/information';
import { Field } from './Field/field';
import { NewGameBtn } from '../button';

export function Game() {
	return (
		<div className="main">
			<Information />
			<Field />
			<NewGameBtn />
		</div>
	);
}
