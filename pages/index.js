import PropTypes from 'prop-types';
import isInAppBrowser from '../lib/is-inapp-browser';
import Layout from '../components/layout';
import Form from '../components/form';

const Index = ({ userAgent }) => {
	return (
		<Layout>
			<h1>WiFi Pass</h1>
			{isInAppBrowser(userAgent) ? (
				<>
					<p>
						To create your own WiFi Pass, <em>please open this site in{' '}
						Safari or any other browser of your choice</em>.
					</p>
					<img
						src="/static/images/sample-pass.png"
						alt="Sample WiFi Pass"
					/>
				</>
			) : (
				<>
					<p>
						Enter your WiFi credentials to create an Apple Wallet pass.{' '}
						Users with mobile devices can then scan the QR code on the generated pass to join the network.
					</p>
					<Form />
				</>
			)}
		</Layout>
	);
};

Index.getInitialProps = async ({ req }) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
	return { userAgent }
};

Index.propTypes = {
	userAgent: PropTypes.string.isRequired,
}

export default Index;
