import slugify from '@sindresorhus/slugify';
import generatePass from '../../../lib/generate-pass';
import incrementPassCount from '../../../lib/increment-pass-count';

export default async (request, response) => {
	const {
		query: { ssid, password },
	} = request;

	try {
		const pass = await generatePass({ ssid, password });
		await incrementPassCount();
		const filename = slugify(ssid, { decamelize: false, lowercase: false });
		response.setHeader('Content-Type', 'application/vnd.apple.pkpass');
		response.setHeader('Content-Disposition', `attachment; filename=${filename}.pkpass`);
		response.send(pass);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
};
