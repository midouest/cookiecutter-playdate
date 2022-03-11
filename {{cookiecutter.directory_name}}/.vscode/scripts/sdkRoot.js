const fs = require("fs");
const os = require("os");
const path = require("path");

function sdkRootMacOS() {
  const configPath = path.resolve(os.homedir(), ".Playdate", "config");
  const configText = fs.readFileSync(configPath, "utf8");
  const configLines = configText.split("\n");

  for (const line of configLines) {
    const components = line.split("\t");
    if (components[0] == "SDKRoot") {
      return components[1];
    }
  }

  return undefined;
}

function sdkRootWin32() {
  return process.env.PLAYDATE_SDK_PATH;
}

let sdkRoot;
switch (process.platform) {
  case "darwin":
    sdkRoot = sdkRootMacOS();
    break;

  case "win32":
    sdkRoot = sdkRootWin32();
    break;

  default:
    console.error(`Unsupported platform: ${process.platform}`);
    process.exit(1);
}

if (sdkRoot == null) {
  console.error("Could not find Playdate SDK root");
  process.exit(1);
}

module.exports = sdkRoot;
