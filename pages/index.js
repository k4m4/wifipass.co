import Layout from '../components/layout';
import Form from '../components/form';

const Index = () => {
	return (
		<Layout>
			<h1>WiFi Pass</h1>
			<p>
				Enter your WiFi credentials to create an Apple Wallet pass.{' '}
				Users with mobile devices can then scan the QR code on the generated pass to join the network.
			</p>
			<Form />
		</Layout>
	);
};

export default Index;
