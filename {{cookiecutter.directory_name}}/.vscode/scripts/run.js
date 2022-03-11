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

  const child = child_process.spawn(
    "/usr/bin/open",
    ["-a", simulatorPath, outputPath],
    {
      detached: true,
      stdio: "ignore",
    }
  );
  child.unref();
}

async function runWin32() {
  const exec = util.promisify(child_process.exec);
  await exec("taskkill /f /im PlaydateSimulator.exe");

  const simulatorPath = path.resolve(sdkRoot, "bin", "PlaydateSimulator.exe");
  const child = child_process.spawn(simulatorPath, [outputPath], {
    shell: true,
    detached: true,
    stdio: "ignore",
  });
  child.unref();
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
