export default {
	async loadMod(url) {
		const response = await fetch(url);
		const html = await response.text();
		const mod = new DOMParser().parseFromString(html, 'text/html');
		for (var style of Array.from(mod.querySelectorAll("style"))) {
			document.head.appendChild(style);
		}
		for (var script of Array.from(mod.querySelectorAll("script"))) {
			Function('"use strict";\n ' + script.innerHTML)();
		}
		const modThemeColorElement = mod.querySelector("meta[name='theme-color']");
		if (modThemeColorElement) {
			const actualThemeColorElement = document.querySelector("meta[name='theme-color']");
			if (actualThemeColorElement) {
				actualThemeColorElement.content = modThemeColorElement.content;
			}
		}
	}
}