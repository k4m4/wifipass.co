import db from './db-admin';

const incrementViews = async () => {
	const ref = db.ref('passes');
	await ref.transaction(currentPasses => {
		if (!currentPasses) {
			return 0;
		}

		return ++currentPasses;
	});
};

export default incrementViews;
