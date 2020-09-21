import { useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import Link from 'next/link';

const settings = {
	type: 'text',
	autoComplete: 'off',
	autoCorrect: 'off',
	spellCheck: false,
	style: {
		width: '100%',
	},
};

const Form = () => {
	const [ssid, setSSID] = useState('');
	const handleSSIDChange = event => setSSID(event.target.value);
	const ssidSettings = {
		value: ssid,
		onChange: handleSSIDChange,
		placeholder: 'SpaceX Guest',
	};

	const [password, setPassword] = useState('');
	const handlePassChange = event => setPassword(event.target.value);
	const passSettings = {
		value: password,
		onChange: handlePassChange,
		placeholder: 'MarsBy2024!',
	};

	return (
		<form>
			<label htmlFor="ssid" className="ssid">Network SSID</label>
			<AutosizeInput id="ssid" { ...settings } { ...ssidSettings } />
			<label htmlFor="password" className="password">Password</label>
			<AutosizeInput id="password" { ...settings } {...passSettings} />
			<Link
				href="/api/[ssid]/[password]"
				as={`/api/${ssid || 'SpaceX Guest'}/${password || 'MarsBy2024!'}`}
			>
				<button>Download</button>
			</Link>
		</form>
	);
};

export default Form;
