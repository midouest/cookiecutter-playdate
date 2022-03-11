const fs = require("fs");
const path = require("path");
const process = require("process");

const infoPath = path.resolve(process.cwd(), "source", "pdxinfo");
const infoText = fs.readFileSync(infoPath, "utf-8");
const infoLines = infoText.split("\n");

const pdxInfo = {};
for (const line of infoLines) {
  const i = line.indexOf("=");
  if (i === -1) {
    continue;
  }

  const key = line.slice(0, i);
  const value = line.slice(i + 1);
  pdxInfo[key] = value;
}

module.exports = pdxInfo;
