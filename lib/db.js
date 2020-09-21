const DB = async () => {
	const firebase = await import('firebase/app');
	await import('firebase/database');

	try {
		firebase.initializeApp({
			databaseURL: process.env.FIREBASE_DB_URL,
		});
	} catch (error) {
		if (!/already exists/u.test(error.message)) {
			console.error('Firebase initialization error', error.stack);
		}
	}

	return firebase.database().ref('passes');
};

export default DB;
