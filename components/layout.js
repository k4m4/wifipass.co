import PropTypes from 'prop-types';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<>
			<main className="content">
				{children}
			</main>

			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
