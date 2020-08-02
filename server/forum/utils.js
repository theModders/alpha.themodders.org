export default {
	truncate: function(text, maxLength, ellipsis = "...") {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength - ellipsis.length) + ellipsis;
	}
}