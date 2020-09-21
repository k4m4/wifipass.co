import PassCounter from './pass-counter';

const Footer = () => {
	return (
		<footer>
			<nav>
				<ul>
					<li>
						<a
							href="https://github.com/k4m4/wifipass.co"
							target="_blank"
							rel="noopener noreferrer"
						>
							Source
						</a>
					</li>
					<li>
						<PassCounter />
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
