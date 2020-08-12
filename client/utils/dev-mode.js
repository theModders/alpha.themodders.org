import UiUtil from "./ui-util.js"
import uiUtil from "./ui-util.js";

export default {
	localHostNames: new Set([ "localhost", "127.0.0.1" ]),

	setup(config) {
		const clientHostname = document.location.hostname;
		const isLocalHost = this.localHostNames.has(clientHostname);
		const isModeRequested = new URL(document.location.href).searchParams.has("dev");
		if (! (isLocalHost || isModeRequested)) {
			return;
		}
		config.CLIENT_URL = document.location.origin + "/client";
		config.DEV_MODE = true;
		this.loadInspector();
	},

	async loadInspector() {
		await import("/libs/eruda.js");
		window.eruda.init();
	}
}