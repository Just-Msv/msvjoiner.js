module.exports = {
  getVersion() {
    let version = require("discord.js").version.split("");
    return parseInt(version[0] + version[1]);
  },
};
