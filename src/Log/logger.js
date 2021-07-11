const chalk = require("chalk");
const moment = require("moment");
const file = require("../../util/file");

module.exports = class Logger {
  constructor(options = {}) {
    if (!options.basePath) {
      this.dir = "Msvjoiner";
    } else {
      this.dir = options.basePath;
    }
    if (!options.name) {
      this.file = "msvjoiner.log";
    } else {
      this.file = options.name + ".log";
    }
    file.fetchFolders(this.dir)
  }
  async log(prefix, message, logger) {
    if (logger == true) {
      file.writeFiles(this.dir, this.file, "LOG:" + " " + moment().format("HH:mm:ss YYYY-MM-DD") + " " + prefix + " " + message);
      console.log(
        chalk.bgWhite("LOG:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.white(prefix) +
          " " +
          message
      );
    } else {
      console.log(
        chalk.bgWhite("LOG:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.white(prefix) +
          " " +
          message
      );
    }
  }
  async info(prefix, message, logger) {
    if (logger == true) {
      file.writeFiles(this.dir, this.file, "INFO:" + " " + moment().format("HH:mm:ss YYYY-MM-DD") + " " + prefix + " " + message);
      console.log(
        chalk.bgBlue("INFO:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.blue(prefix) +
          " " +
          message
      );
    } else {
      console.log(
        chalk.bgBlue("INFO:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.blue(prefix) +
          " " +
          message
      );
    }
  }
  async success(prefix, message, logger) {
    if (logger == true) {
      file.writeFiles(this.dir, this.file, "SUCCESS:" + " " + moment().format("HH:mm:ss YYYY-MM-DD") + " " + prefix + " " + message);
      console.log(
        chalk.bgGreen("SUCCESS:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.green(prefix) +
          " " +
          message
      );
    } else {
      console.log(
        chalk.bgGreen("SUCCESS:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.green(prefix) +
          " " +
          message
      );
    }
  }
  async warn(prefix, message, logger) {
    if (logger == true) {
      file.writeFiles(this.dir, this.file, "WARN:" + " " + moment().format("HH:mm:ss YYYY-MM-DD") + " " + prefix + " " + message);
      console.log(
        chalk.bgYellow("WARN:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.yellow(prefix) +
          " " +
          message
      );
    } else {
      console.log(
        chalk.bgYellow("WARN:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.yellow(prefix) +
          " " +
          message
      );
    }
  }
  async error(prefix, message, logger) {
    if (logger == true) {
      file.writeFiles(this.dir, this.file, "ERROR:" + " " + moment().format("HH:mm:ss YYYY-MM-DD") + " " + prefix + " " + message);
      console.log(
        chalk.bgRed("ERROR:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.red(prefix) +
          " " +
          message
      );
    } else {
      console.log(
        chalk.bgRed("ERROR:") +
          " " +
          chalk.gray(moment().format("HH:mm:ss YYYY-MM-DD")) +
          " " +
          chalk.bold.red(prefix) +
          " " +
          message
      );
    }
  }
};
