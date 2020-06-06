"use strict";

const Thread = require("./thread.js");

const Utils = require("./utils.js");

module.exports = {
  PATH_PREFIX_REGEXP: new RegExp("^/forum/"),

  async handleRequest(req, res) {
    const thread = Thread.retrieve(req.path.replace(this.PATH_PREFIX_REGEXP, ""));

    if (!thread) {
      res.status(404).send("not found");
    } else {
      res.status(200).send(Utils.renderPage(thread.render()));
    }
  }

};
//# sourceMappingURL=forum.js.map