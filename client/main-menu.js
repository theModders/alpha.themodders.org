import UiUtil from "./utils/ui-util.js";
import Resources from "./resources.js";

/**
 * TODO: home, sign in, my threads, mentions, direct messages, featured, recent, search, settings, members, downloads, galleries, terms & conditions
 */
export default {
	buttonElement: null,
	menuElement: null,
	activeClass: "main-menu-open",
	items: [
		{ label: Resources.MainMenu.HOME, href: "/" },
		{ label: Resources.MainMenu.SIGN_IN, href: "/sign-in" },
		{ label: Resources.MainMenu.MY_THREADS, href: "/my-threads" },
		{ label: Resources.MainMenu.MENTIONS, href: "/mentions" },
		{ label: Resources.MainMenu.DIRECT_MESSAGES, href: "/direct-messages" },
		{ label: Resources.MainMenu.FEATURED, href: "/featured" },
		{ label: Resources.MainMenu.RECENT, href: "/recent" },
		{ label: Resources.MainMenu.SEARCH, href: "/search" },
		{ label: Resources.MainMenu.SETTINGS, href: "/settings" },
		{ label: Resources.MainMenu.MEMBERS, href: "/members" },
		{ label: Resources.MainMenu.DOWNLOADS, href: "/downloads" },
		{ label: Resources.MainMenu.GALLERIES, href: "/galleries" },
		{ label: Resources.MainMenu.TERMS_AND_CONDITIONS, href: "/terms-and-conditions" }
	],

	install(buttonHostElement, config) {
		console.log("main menu");
		UiUtil.importStyle("/styles/interactive/main-menu.css", config);
		this.buttonElement = buttonHostElement.querySelector("a");
		this.buttonElement.addEventListener("click", this.onClick.bind(this));
		this.menuElement = document.createElement("nav");
		this.menuElement.className = "main-menu";
		const menuHost = document.querySelector(".thread");
		menuHost.appendChild(this.menuElement);
		for (var item of this.items) {
			const itemElement = document.createElement("a");
			itemElement.innerText = item.label;
			itemElement.href = item.href;
			this.menuElement.appendChild(itemElement);
		}
	},

	onClick(e) {
		e.preventDefault();
		if (document.body.classList.contains(this.activeClass)) {
			document.body.classList.remove(this.activeClass);
		} else {
			document.body.classList.add(this.activeClass);
		}
	}
}