export default class Thread {
	static retrieve(location) {
		console.log("retrieve " + location);
		return new Thread();
	}

	render() {
		return "<b>hello world</b>";
	}
}