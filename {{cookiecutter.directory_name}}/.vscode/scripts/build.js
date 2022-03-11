const path = require("path");
const process = require("process");
const child_process = require("child_process");

const sdkRoot = require("./sdkRoot");
const pdxInfo = require("./pdxInfo");

const sourcePath = path.resolve(process.cwd(), "source");
const outputPath = path.resolve(sdkRoot, "Disk", "Games", pdxInfo.name);

const { stderr } = child_process.spawnSync("pdc", [
  "-sdkpath",
  sdkRoot,
  sourcePath,
  outputPath,
]);

console.log(stderr.toString());
