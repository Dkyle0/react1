import logo from './logo.svg';
import './App.css';

export const App = () => {
	// всё, что ниже императивный
	const currentYear = new Date().getFullYear();
	const appContainer = document.createElement('div');
	appContainer.className = 'App';

	const appHeader = document.createElement('header');
	appHeader.className = 'App-header';

	const logoImage = document.createElement('img');
	logoImage.src = logo;
	logoImage.className = 'App-logo';
	logoImage.alt = 'logo';

	const appParagraph = document.createElement('p');
	appParagraph.textContent = 'Edit ';
	const codeElement = document.createElement('code');
	codeElement.textContent = 'src/App.js';
	appParagraph.appendChild(codeElement);
	appParagraph.textContent += ' and save to reload.';

	const appLink = document.createElement('a');
	appLink.className = 'App-link';
	appLink.href = 'https://reactjs.org';
	appLink.target = '_blank';
	appLink.rel = 'noopener noreferrer';
	appLink.textContent = 'Learn React';

	const timeDiv = document.createElement('div');
	timeDiv.className = 'time';
	timeDiv.textContent = currentYear;

	appHeader.appendChild(logoImage);
	appHeader.appendChild(appParagraph);
	appHeader.appendChild(appLink);
	appHeader.appendChild(timeDiv);

	appContainer.appendChild(appHeader);

	document.body.appendChild(appContainer);
};
