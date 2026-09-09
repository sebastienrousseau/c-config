const fs = require("fs");
const path = require("path");

const presets = [".clang-format",".clang-tidy"];
const defaultPreset = ".clang-format";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/c-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
