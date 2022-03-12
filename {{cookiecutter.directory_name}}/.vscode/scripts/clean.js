const path = require("path");
const process = require("process");
const child_process = require("child_process");

const sdkRoot = require("./sdkRoot");
const pdxInfo = require("./pdxInfo");

const outputPath = path.resolve(
  sdkRoot,
  "Disk",
  "Games",
  pdxInfo.name + ".pdx"
);

function cleanMacOS() {
  child_process.spawn("rm", ["-rf", `"${outputPath}"`], {
    shell: true,
    stdio: "inherit",
  });
}

function cleanWindows() {
  child_process.spawn("rmdir", ["/s", "/q", `"${outputPath}"`], {
    shell: true,
    stdio: "inherit",
  });
}

switch (process.platform) {
  case "darwin":
    cleanMacOS();
    break;

  case "win32":
    cleanWindows();
    break;

  default:
    console.error(`Unsupported platform: ${process.platform}`);
    process.exit(1);
}
