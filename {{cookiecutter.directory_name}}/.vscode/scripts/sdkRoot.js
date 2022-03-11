const fs = require("fs");
const os = require("os");
const path = require("path");

const configPath = path.resolve(os.homedir(), ".Playdate", "config");
const configText = fs.readFileSync(configPath, "utf8");
const configLines = configText.split("\n");

let sdkRoot = null;
for (const line of configLines) {
  const components = line.split("\t");
  if (components[0] == "SDKRoot") {
    sdkRoot = components[1];
    break;
  }
}

if (sdkRoot === null) {
  throw new Error("SDKRoot not found");
}

module.exports = sdkRoot;
