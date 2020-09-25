const inAppBrowserRegex = /(Mobile\/[\w]+) (?!Safari)(\w+)/g;

const isInAppBrowser = userAgent => {
	return userAgent.match(inAppBrowserRegex);
};

export default isInAppBrowser;
