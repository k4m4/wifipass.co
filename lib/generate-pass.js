import { createPass } from 'passkit-generator';
import path from 'path';

const generatePass = async ({ ssid, password }) => {
	const pass = await createPass({
		model: path.resolve('./models/template.pass'),
		certificates: {
			wwdr: path.resolve('./certificates/wwdr.pem'),
			signerCert: path.resolve('./certificates/signerCert.pem'),
			signerKey: {
				keyFile: path.resolve('./certificates/signerKey.pem'),
				passphrase: process.env.PASS_SIGNER_KEY_PASSPHRASE,
			},
		},
		overrides: {
			serialNumber: Math.random().toString(36).slice(7) + Math.random().toString(36).slice(7),
			description: `${ssid} WiFi Pass`,
		},
		shouldOverwrite: true,
	});

	pass.barcodes({
		message: `WIFI:S:${ssid};T:WPA;P:${password};`,
		format: 'PKBarcodeFormatQR',
	});

	pass.primaryFields = [
		{
			key: 'network',
			label: 'NETWORK SSID',
			value: ssid,
		},
	];

	pass.secondaryFields = [
		{
			key: 'pass',
			label: 'PASSWORD',
			value: password,
		},
	];

	return pass.generate();
};

export default generatePass;
