file = exports;
const fs = require("fs");

file.fetchFolders = function (basePath) {
    if (fs.existsSync(basePath) == false) {
      fs.mkdirSync(basePath);
    }
  };

file.fetchFiles = function (basePath, name, value) {
  if (fs.existsSync(basePath) == false) {
    fs.mkdirSync(basePath);
    if (fs.existsSync(basePath + "/" + name) == false) {
      fs.writeFileSync(basePath + "/" + name, value);
      return;
    }
  } else {
    if (fs.existsSync(basePath + "/" + name) == false) {
      fs.writeFileSync(basePath + "/" + name, value);
    }
  }
};

file.writeFiles = function (basePath, name, message) {
  fs.writeFileSync(basePath + "/" + name, message + "\n", {
    encoding: "utf8", flag: "a+"
  });
};
