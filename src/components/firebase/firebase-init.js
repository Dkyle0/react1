import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCsUnYptlIZ0HQaOdKvXmUA7SpQ5DflbEw',

	authDomain: 'todos-22dee.firebaseapp.com',

	databaseURL: 'https://todos-22dee-default-rtdb.europe-west1.firebasedatabase.app',

	projectId: 'todos-22dee',

	storageBucket: 'todos-22dee.appspot.com',

	messagingSenderId: '946258896416',

	appId: '1:946258896416:web:258a6f8805712a7bbe7e45',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
