import Config from "../core/config.js"

export default {
	importStyle(url) {
		// TODO: prevent duplicates
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = Config.CLIENT_URL + url;
		document.head.appendChild(link);
	},

	configureClient() {
		const metaViewport = document.createElement("meta");
		metaViewport.name = "viewport";
		metaViewport.content="width=device-width,initial-scale=1";
		document.head.appendChild(metaViewport);

		const metaThemeColor = document.createElement("meta");
		metaThemeColor.name = "theme-color";
		metaThemeColor.content = Config.THEME_COLOR;
		document.head.appendChild(metaThemeColor);
	}
}