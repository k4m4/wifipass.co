import { useState, useEffect } from 'react';
import format from 'comma-number';
import loadDB from '../lib/db';

const PassCounter = () => {
	const [passes, setPasses] = useState('');

	useEffect(() => {
		const onPasses = newPasses => {
			setPasses(newPasses.val());
		};

		let db;
		const fetchData = async () => {
			db = await loadDB();
			db.on('value', onPasses);
		};

		fetchData();

		return () => {
			if (db) {
				db.off('value', onPasses);
			}
		};
	});

	return (
		<span> {passes ? format(passes) : '–––'} passes created</span>
	);
};

export default PassCounter;
