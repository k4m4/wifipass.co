import admin from 'firebase-admin';

const {
	FIREBASE_CLIENT_EMAIL,
	FIREBASE_PRIVATE_KEY,
	FIREBASE_PROJECT_ID,
	FIREBASE_DB_URL,
} = process.env;

try {
	admin.initializeApp({
		credential: admin.credential.cert({
			client_email: FIREBASE_CLIENT_EMAIL,
			private_key: Buffer.from(FIREBASE_PRIVATE_KEY, 'base64').toString('utf-8'),
			project_id: FIREBASE_PROJECT_ID,
		}),
		databaseURL: FIREBASE_DB_URL,
	});
} catch (error) {
	if (!/already exists/u.test(error.message)) {
		console.error('Firebase admin initialization error', error.stack);
	}
}

export default admin.database();
