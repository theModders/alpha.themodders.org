const Functions = require('firebase-functions');
const Forum = require("./forum/forum.js");

const runtimeOpts = {
	timeoutSeconds: 1,
	memory: '128MB'
}

const endpoints = Functions
		// .region('europe-west1') // not allowed for hosting redirect
		.runWith(runtimeOpts)
		.https;

module.exports = {
	forum: endpoints.onRequest((req, res) => Forum.handleRequest(req, res)),
	search: endpoints.onRequest((req, res) => res.status(200).send("not implemented"))
}