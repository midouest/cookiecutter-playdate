const path = require("path");
const process = require("process");
const child_process = require("child_process");

const sdkRoot = require("./sdkRoot");
const pdxInfo = require("./pdxInfo");

const sourcePath = path.resolve(process.cwd(), "source");
const outputPath = path.resolve(sdkRoot, "Disk", "Games", pdxInfo.name);

child_process.spawn(
  "pdc",
  ["-sdkpath", `"${sdkRoot}"`, `"${sourcePath}"`, `"${outputPath}"`],
  {
    shell: true,
    stdio: "inherit",
  }
);
