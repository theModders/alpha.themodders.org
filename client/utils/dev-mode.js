export default {
	localHostNames: new Set([ "localhost", "127.0.0.1" ]),

	setup(config) {
		const clientHostname = document.location.hostname;
		if (! this.localHostNames.has(clientHostname)) {
			return;
		}
		config.CLIENT_URL = document.location.origin + "/client";
		config.DEV_MODE = true;
	}
}