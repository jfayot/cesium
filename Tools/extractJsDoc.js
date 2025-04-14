const fs = require("fs");
const path = require("path");

function extractJSDocComments(filePath, inDir, outDir) {
  const relPath = path.relative(inDir, filePath);
  const outFile = path.join(outDir, relPath).slice(0, -2) + "jsdoc";
  const content = fs.readFileSync(filePath, "utf8");
  const jsdocRegex = /\/\*\*[\s\S]*?\*\//g;
  const matches = content.match(jsdocRegex);
  const jsdocComments = matches ? matches.join("\n\n") : "";
  fs.writeFileSync(outFile, jsdocComments, "utf8");
}

function processDirectory(inDir, outDir) {
  for (const file of fs.readdirSync(inDir)) {
    const fullPath = path.join(inDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith(".js") || fullPath.endsWith(".ts")) {
      extractJSDocComments(fullPath, inDir, outDir);
    }
  }
}

const inDir = process.argv[2] || ".";
const outDir = path.join(inDir, "js-doc");
fs.mkdirSync(outDir, { recursive: true });
processDirectory(inDir, outDir);
