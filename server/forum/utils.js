import Config from "../../core/config.js";

export default {
	PAGE_HEAD: //TODO: make lang dynamic
`<!DOCTYPE HTML>
<html lang="${Config.LANG}">
<meta charset="UTF-8">
<link rel="stylesheet" href="${Config.CLIENT_URL}/styles/static/main.css">
<link rel="manifest" href="${Config.CLIENT_URL}/meta/manifest.json">
<script type="module" async src="${Config.CLIENT_URL}/index.js"></script>`,

	truncate: function(text, maxLength, ellipsis = "...") {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength - ellipsis.length) + ellipsis;
	},

	renderPage: function(content) {
		return this.PAGE_HEAD + content;
	}

}