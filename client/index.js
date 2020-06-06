import CookieNotice from "./utils/cookie-notice.js"
import UiUtil from "./utils/ui-util.js"

UiUtil.configureClient();

if (CookieNotice.isRequired()) {
	CookieNotice.display();
}