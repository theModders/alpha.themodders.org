import utils from "./utils.js";

const OBSOLETE_TOKEN_ERROR_CODES = [ 
	"messaging/invalid-registration-token",
	"messaging/registration-token-not-registered"
];
const PROFILE_PIC_PLACEHOLDER_URL = "/images/profile_placeholder.png"
const NOTIFICATION_TARGET_URL = `https://${process.env.GCLOUD_PROJECT}.web.app`;

export default class Notifier {
	constructor(firestore, messaging) {
		this.fcmTokens = firestore.collection("fcmTokens");
		this.messaging = messaging;
	}

	async sendNotifications(messageSnapshot) {
		const tokenIds = await this._getTokenIds();
		if (tokenIds.length == 0) {
			return;
		}
		const payload = this._createPayload(messageSnapshot.data());
		const response = await this.messaging.sendToDevice(tokenIds, payload);
		await this._cleanupTokens(response, tokenIds);
	}


	
	_createPayload(message) {
		return {
			notification: {
				title: `${message.name} posted a message`,
				body: utils.truncate(message.text, 100),
				icon: message.profilePicUrl || PROFILE_PIC_PLACEHOLDER_URL,
				click_action: NOTIFICATION_TARGET_URL
			}
		}
	}
	
	async _getTokenIds() {
		const retrievedTokens = await this.fcmTokens.get();
		const tokenIds = [];
		retrievedTokens.forEach((token) => tokenIds.push(token.id));
		return tokenIds;
	}
	
	_cleanupTokens(sendResponse, tokenIds) {
		const asyncTasks = [];
		sendResponse.results.forEach((result, index) => {
			if (! result.error) {
				return;
			}
			if (OBSOLETE_TOKEN_ERROR_CODES.indexOf(result.error.code) >= 0) {
				const tokenId = tokenIds[index];
				const deleteTask = this.fcmTokens.doc(tokenId).delete();
				asyncTasks.push(deleteTask);
			} else {
				console.warn("failed to send notification", result.error, tokenId);
			}
		});
		return Promise.all(asyncTasks); 
	}
}
