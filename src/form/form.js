import { FormLayout } from './form-layout';
import { useRef } from 'react';
import { useStore } from './useStore';
import { handler } from './handler';

export function sendForm(resetState) {
	return function sendFormWithReset(email, password) {
		console.log('email: ', email, '|', 'password: ', password);
		resetState();
	};
}

export function Form() {
	const { getState, updateAllState, resetState } = useStore();
	const submitButtonRef = useRef(null);
	const sendData = sendForm(resetState);

	return (
		<FormLayout
			getState={getState}
			handler={handler}
			updateAllState={updateAllState}
			submitButtonRef={submitButtonRef}
			sendData={sendData}
		/>
	);
}
