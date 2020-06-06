import UiUtil from "./ui-util.js"

export default {
	COOKIE_NAME: "cookiesAccepted",
	cookieNotice: null,

	isRequired() {
		if (document.cookie.indexOf(`${this.COOKIE_NAME}=true`) >= 0) {
			return false; // already accepted
		}
		document.cookie = `${this.COOKIE_NAME}=false`;
		if (document.cookie.indexOf(`${this.COOKIE_NAME}=false`) < 0) {
			return false; // blocked by browser
		}
		return true;
	},

	display() {
		UiUtil.importStyle("/styles/interactive/snackbar.css");
		this.cookieNotice = document.createElement("div");
		this.cookieNotice.innerHTML = `
			<div class="snackbar">
				<div class="message">
					This site uses cookies from Google to deliver its services and to analyze traffic.
				</div>
				<a href="https://policies.google.com/technologies/cookies" class="action">More details</a>
				<button class="action accept">OK</button>
			</div>
		`;
		this.cookieNotice.querySelector(".accept").onclick = this.accept.bind(this);
		document.body.appendChild(this.cookieNotice);
	},

	accept() {
		document.cookie = `${this.COOKIE_NAME}=true`;
		this.cookieNotice.remove();
		this.cookieNotice = null;
	}
}