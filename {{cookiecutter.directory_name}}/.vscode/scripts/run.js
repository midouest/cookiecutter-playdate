const path = require("path");
const child_process = require("child_process");

const sdkRoot = require("./sdkRoot");
const pdxInfo = require("./pdxInfo");

const simulatorPath = path.resolve(sdkRoot, "bin", "Playdate Simulator.app");
const outputPath = path.resolve(
  sdkRoot,
  "Disk",
  "Games",
  pdxInfo.name + ".pdx"
);

child_process.spawn("/usr/bin/open", ["-a", simulatorPath, outputPath]);
