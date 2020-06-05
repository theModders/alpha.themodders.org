const Functions = require('firebase-functions');
const Forum = require("./forum/forum.js");
const Config = require("./core/config.js");

module.exports = {
	forum: Functions.https.onRequest(Forum.handleRequest.bind(Forum)),
	favicon: Functions.https.onRequest((_, res) => res.redirect(301, Config.CLIENT_URL + "/favicon.ico"))
}