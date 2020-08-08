import CookieNotice from "./utils/cookie-notice.js"
import UiUtil from "./utils/ui-util.js"
import DevMode from "./utils/dev-mode.js"
import Config from "../core/config.js"

DevMode.setup(Config);

UiUtil.configureClient(Config);

if (CookieNotice.isRequired()) {
	CookieNotice.display();
}