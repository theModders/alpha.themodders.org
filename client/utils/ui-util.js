export default {
	importStyle(url, config) {
		if (document.querySelector(`link[rel='stylesheet'][href='${url}']`)) {
			return; // already loaded
		}
		this.addMetadata("link", { 
			rel: "stylesheet", 
			href: config.CLIENT_URL + url 
		});
	},

	configureClient(config) {
		this.addMetadata("meta", { 
			name: "viewport", 
			content: "width=device-width,initial-scale=1"
		});
		this.addMetadata("meta", { 
			name: "theme-color", 
			content: config.THEME_COLOR
		});
		this.hideIconsUntilLoaded(config);
	},

	hideIconsUntilLoaded(config) {
		if (config.iconsLoaded) {
			return;
		}
		config.iconsLoaded = true;
		this.addMetadata("style", {
			innerHTML: ":root { --icon-display-inline-block: inline-block }"
		});
	},

	addMetadata(elementName, properties) {
		const element = document.createElement(elementName);
		for (var propertyName in properties) {
			element[propertyName] = properties[propertyName];
		}
		document.head.appendChild(element);
		return element;
	}
}