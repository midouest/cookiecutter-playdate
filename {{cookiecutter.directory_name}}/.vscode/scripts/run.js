const path = require("path");
const child_process = require("child_process");
const util = require("util");

const sdkRoot = require("./sdkRoot");
const pdxInfo = require("./pdxInfo");

const outputPath = path.resolve(
  sdkRoot,
  "Disk",
  "Games",
  pdxInfo.name + ".pdx"
);

function runMacOS() {
  const simulatorPath = path.resolve(sdkRoot, "bin", "Playdate Simulator.app");
  child_process.spawn(
    "/usr/bin/open",
    ["-a", `"${simulatorPath}"`, `"${outputPath}"`],
    {
      stdio: "ignore",
    }
  );
}

async function runWin32() {
  const simulatorPath = path.resolve(sdkRoot, "bin", "PlaydateSimulator.exe");
  child_process.spawn(`"${simulatorPath}"`, [`"${outputPath}"`], {
    shell: true,
    stdio: "ignore",
  });
}

switch (process.platform) {
  case "darwin":
    runMacOS();
    break;

  case "win32":
    runWin32();
    break;

  default:
    console.error(`Unsupported platform: ${process.platform}`);
    process.exit(1);
}
