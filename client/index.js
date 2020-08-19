import CookieNotice from "./utils/cookie-notice.js"
import UiUtil from "./utils/ui-util.js"
import DevMode from "./utils/dev-mode.js"
import Config from "../core/config.js"
import ModEngine from "./mods/mod-engine.js"
import MainMenu from "./main-menu.js"

DevMode.setup(Config);

UiUtil.configureClient(Config);

if (CookieNotice.isRequired()) {
	CookieNotice.display();
}

// ModEngine.loadMod(Config.CLIENT_URL + "/mods/gothic-wallpaper.html");

const menuButtonHost = document.querySelector(".breadcrumbs > li:first-child");
MainMenu.install(menuButtonHost, Config);