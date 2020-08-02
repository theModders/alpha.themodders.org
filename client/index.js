import CookieNotice from "./utils/cookie-notice.js"
import UiUtil from "./utils/ui-util.js"
import Config from "../core/config.js"

UiUtil.configureClient(Config);

if (CookieNotice.isRequired()) {
	CookieNotice.display();
}